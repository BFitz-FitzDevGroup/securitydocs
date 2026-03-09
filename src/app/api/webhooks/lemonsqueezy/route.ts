import { NextRequest } from 'next/server';
import crypto from 'crypto';

// Generate a deterministic client_id from customer email using SHA-256
// This groups purchases by customer in GA4 without storing PII
function generateClientId(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex');
}

function verifySignature(rawBody: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(rawBody).digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(digest)
    );
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
    const ga4MeasurementId = process.env.GA4_MEASUREMENT_ID;
    const ga4ApiSecret = process.env.GA4_API_SECRET;

    if (!webhookSecret || !ga4MeasurementId || !ga4ApiSecret) {
      console.error('Lemon Squeezy webhook: missing environment variables');
      return Response.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Read raw body for signature verification
    const rawBody = await request.text();
    const signature = request.headers.get('x-signature');

    if (!signature) {
      console.error('Lemon Squeezy webhook: missing X-Signature header');
      return Response.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify HMAC-SHA256 signature
    if (!verifySignature(rawBody, signature, webhookSecret)) {
      console.error('Lemon Squeezy webhook: invalid signature');
      return Response.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const payload = JSON.parse(rawBody);
    const eventName = payload.meta?.event_name;

    // Only process order_created events
    if (eventName !== 'order_created') {
      return Response.json({ message: `Ignored event: ${eventName}` }, { status: 200 });
    }

    // Extract order data from Lemon Squeezy payload
    const orderId = payload.data?.id;
    const attributes = payload.data?.attributes;
    const firstItem = attributes?.first_order_item;
    const productName = firstItem?.product_name ?? 'Unknown Product';
    const totalCents = attributes?.total ?? 0;
    const totalDollars = totalCents / 100;
    const currency = (attributes?.currency ?? 'USD').toUpperCase();
    const customerEmail = attributes?.user_email ?? payload.meta?.custom_data?.email ?? '';

    if (!customerEmail) {
      console.error('Lemon Squeezy webhook: no customer email found in payload');
      return Response.json({ error: 'Missing customer email' }, { status: 500 });
    }

    const clientId = generateClientId(customerEmail);

    // Send purchase event to GA4 Measurement Protocol
    const ga4Url = `https://www.google-analytics.com/mp/collect?measurement_id=${ga4MeasurementId}&api_secret=${ga4ApiSecret}`;

    const ga4Payload = {
      client_id: clientId,
      events: [
        {
          name: 'purchase',
          params: {
            transaction_id: String(orderId),
            value: totalDollars,
            currency,
            items: [
              {
                item_name: productName,
              },
            ],
          },
        },
      ],
    };

    const ga4Response = await fetch(ga4Url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ga4Payload),
    });

    if (!ga4Response.ok) {
      const ga4Error = await ga4Response.text();
      console.error('Lemon Squeezy webhook: GA4 Measurement Protocol error:', ga4Error);
      return Response.json({ error: 'Failed to send GA4 event' }, { status: 500 });
    }

    console.log(`Lemon Squeezy webhook: purchase event sent to GA4 — order ${orderId}, ${currency} ${totalDollars}, "${productName}"`);

    return Response.json({ message: 'Purchase event sent to GA4' }, { status: 200 });
  } catch (error) {
    console.error('Lemon Squeezy webhook: unexpected error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
