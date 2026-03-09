import { config } from 'dotenv';
config({ path: '.env.local' });

import crypto from 'crypto';
const WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
const WEBHOOK_URL = 'http://localhost:3001/api/webhooks/lemonsqueezy';

if (!WEBHOOK_SECRET) {
  console.error('Error: LEMONSQUEEZY_WEBHOOK_SECRET environment variable is not set.');
  console.error('Run with: LEMONSQUEEZY_WEBHOOK_SECRET=your_secret npx tsx scripts/test-webhook.ts');
  process.exit(1);
}

// Mock Lemon Squeezy order_created payload
const payload = {
  meta: {
    event_name: 'order_created',
    custom_data: {},
  },
  data: {
    id: String(Date.now()),
    type: 'orders',
    attributes: {
      store_id: 1,
      identifier: 'test-order-001',
      order_number: 1001,
      user_name: 'Test Customer',
      user_email: 'test@example.com',
      currency: 'USD',
      currency_rate: '1.00',
      subtotal: 54995,
      discount_total: 0,
      tax: 0,
      total: 54995,
      subtotal_usd: 54995,
      discount_total_usd: 0,
      tax_usd: 0,
      total_usd: 54995,
      status: 'paid',
      first_order_item: {
        id: 1,
        order_id: 123456,
        product_id: 1,
        variant_id: 1,
        product_name: 'Complete Bundle',
        variant_name: 'Default',
        price: 54995,
        quantity: 1,
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
};

const body = JSON.stringify(payload);

// Sign the payload with HMAC-SHA256
const signature = crypto
  .createHmac('sha256', WEBHOOK_SECRET)
  .update(body)
  .digest('hex');

async function sendTestWebhook() {
  console.log('Sending test webhook to:', WEBHOOK_URL);
  console.log('Payload:', JSON.stringify(payload, null, 2));
  console.log('Signature:', signature);
  console.log('---');

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Signature': signature,
      },
      body,
    });

    const responseBody = await response.text();
    console.log('Response status:', response.status);
    console.log('Response body:', responseBody);

    if (response.ok) {
      console.log('\nWebhook test passed.');
    } else {
      console.log('\nWebhook test failed.');
    }
  } catch (error) {
    console.error('Failed to send webhook:', error);
  }
}

sendTestWebhook();
