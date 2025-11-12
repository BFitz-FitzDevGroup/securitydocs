import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata = {
  title: 'Refund Policy | SecurityDocs',
  description: 'Refund policy for SecurityDocs digital products and templates.',
};

export default function RefundPolicyPage() {
  return (
    <PageLayout
      title="Refund Policy"
      description="Our policy on refunds for digital products"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Legal', href: '/legal' },
        { label: 'Refund Policy' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-amber-900 mb-2">Digital Product Policy</h2>
              <p className="text-amber-800">
                <strong>All sales are final.</strong> Due to the instant, digital nature of our products, 
                we cannot offer refunds after purchase. Please read this policy carefully before purchasing.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>Why No Refunds for Digital Products?</h2>
          <p>
            Unlike physical products that can be returned, digital products grant immediate access to 
            downloadable content. Once you've received your templates, you have full access to the 
            intellectual property and we cannot "take it back."
          </p>
          <p>
            This is standard practice for digital downloads across the industry. It's similar to how 
            you can't return an ebook after reading it or software after installing it.
          </p>

          <h2>Our Commitment to Quality</h2>
          <p>
            While we can't offer refunds, we're committed to ensuring you're making an informed purchase:
          </p>
          
          <h3>Before Purchase</h3>
          <ul>
            <li><strong>Detailed Product Descriptions:</strong> Every product page includes comprehensive information about what's included</li>
            <li><strong>Sample Content:</strong> Product descriptions explain the structure and content you'll receive</li>
            <li><strong>Clear Expectations:</strong> We're transparent about what templates are (starting points) and aren't (turnkey solutions)</li>
            <li><strong>Pre-Purchase Support:</strong> Contact us with questions before buying - we're happy to help you choose the right products</li>
          </ul>

          <h3>After Purchase</h3>
          <ul>
            <li><strong>Immediate Delivery:</strong> Download links sent to your email instantly</li>
            <li><strong>3 Downloads Included:</strong> You can download each product up to 3 times</li>
            <li><strong>Customer Account:</strong> Access your purchases anytime through Lemon Squeezy</li>
            <li><strong>Post-Purchase Support:</strong> Questions about using the templates? We're here to help</li>
          </ul>

          <h2>Exceptional Circumstances</h2>
          <p>
            We may consider refund requests in the following rare situations:
          </p>

          <h3>Technical Issues</h3>
          <p>If you experience technical problems that prevent you from accessing your purchase:</p>
          <ul>
            <li>Download links not working or expired</li>
            <li>Files corrupted or won't open</li>
            <li>Wrong product delivered</li>
            <li>Duplicate charges for the same order</li>
          </ul>
          <p>
            <strong>Action Required:</strong> Contact support@security-docs.com within 7 days of purchase with:
          </p>
          <ul>
            <li>Your order number</li>
            <li>Description of the technical issue</li>
            <li>Screenshots or error messages (if applicable)</li>
          </ul>
          <p>
            We'll work to resolve the technical issue first. If we can't fix it, we'll issue a refund.
          </p>

          <h3>Severe Product Defects</h3>
          <p>If a product has significant defects that materially affect its usability:</p>
          <ul>
            <li>Critical missing content that was promised in the description</li>
            <li>Files that are completely unusable or blank</li>
            <li>Fundamental errors that make the template worthless</li>
          </ul>
          <p>
            <strong>Note:</strong> This does NOT include:
          </p>
          <ul>
            <li>Needing to customize the template for your organization (this is expected)</li>
            <li>Template not matching your specific needs or expectations</li>
            <li>Your auditor requiring different documentation</li>
            <li>Minor typos or formatting preferences</li>
          </ul>

          <h2>What Is NOT Covered</h2>
          <p>
            We cannot issue refunds for:
          </p>
          <ul>
            <li><strong>Change of Mind:</strong> Deciding you don't need the template after downloading</li>
            <li><strong>Customization Requirements:</strong> Realizing you need to customize the template (this is expected and disclosed)</li>
            <li><strong>Auditor Preferences:</strong> Your auditor wanting different formats or content</li>
            <li><strong>Audit Outcomes:</strong> Not passing your SOC 2 audit (templates don't guarantee compliance)</li>
            <li><strong>Wrong Product:</strong> Purchasing the wrong item (descriptions are clear - read carefully)</li>
            <li><strong>Buyer's Remorse:</strong> Simply regretting the purchase</li>
            <li><strong>Financial Hardship:</strong> While we're sympathetic, we cannot offer refunds for this reason</li>
          </ul>

          <h2>Prevention: Making the Right Purchase</h2>
          
          <h3>Questions to Ask Yourself</h3>
          <p>Before purchasing, consider:</p>
          <ul>
            <li><strong>Do I need this specific product?</strong> Review the description carefully</li>
            <li><strong>Is this the right bundle level?</strong> Complete vs Policy vs Document vs Evidence</li>
            <li><strong>Am I prepared to customize?</strong> Templates require adaptation to your organization</li>
            <li><strong>Have I checked the format?</strong> All templates are Microsoft Word (.docx) documents</li>
            <li><strong>Do I understand what's included?</strong> Check the "What's Included" section</li>
          </ul>

          <h3>Still Unsure?</h3>
          <p>
            <strong>Contact us before purchasing!</strong> We'd rather help you make the right decision 
            than deal with disappointment after purchase.
          </p>
          <ul>
            <li><strong>Email:</strong> support@security-docs.com</li>
            <li><strong>Response Time:</strong> Usually within 24 hours</li>
            <li><strong>We'll help you:</strong> Choose the right products, understand what's included, set realistic expectations</li>
          </ul>

          <h2>How to Request an Exception</h2>
          <p>
            If you believe your situation qualifies for an exceptional refund:
          </p>
          <ol>
            <li><strong>Email us:</strong> support@security-docs.com</li>
            <li><strong>Subject line:</strong> "Refund Request - Order #[your order number]"</li>
            <li><strong>Include:</strong>
              <ul>
                <li>Your order number and purchase date</li>
                <li>Detailed explanation of the issue</li>
                <li>Any supporting documentation (screenshots, error messages)</li>
                <li>Steps you've already taken to resolve the issue</li>
              </ul>
            </li>
            <li><strong>Timeline:</strong> Submit within 7 days of purchase</li>
          </ol>
          <p>
            We'll review your request and respond within 2-3 business days. Each case is evaluated individually.
          </p>

          <h2>Chargebacks and Disputes</h2>
          <p>
            <strong>Please contact us before initiating a chargeback.</strong> Chargebacks should only be used 
            for unauthorized charges or fraud.
          </p>
          <p>
            If you file a chargeback instead of contacting us:
          </p>
          <ul>
            <li>We'll provide documentation showing you received the product</li>
            <li>Your account may be suspended</li>
            <li>You may be banned from future purchases</li>
            <li>You'll still owe for the product if the chargeback is unsuccessful</li>
          </ul>
          <p>
            We're reasonable people. Talk to us first.
          </p>

          <h2>Bundle Considerations</h2>
          <p>
            <strong>Bundle purchases receive significant discounts</strong> (up to 52% off individual pricing). 
            Because of these substantial savings:
          </p>
          <ul>
            <li>Bundle refunds are not available for individual items within the bundle</li>
            <li>You can't return part of a bundle - it's all or nothing</li>
            <li>Consider starting with a smaller bundle if you're unsure</li>
          </ul>

          <h2>Questions About This Policy?</h2>
          <p>
            We understand this policy may seem strict. It's necessary to protect against abuse while 
            offering digital products. However, we're committed to customer satisfaction and will work 
            with you to resolve legitimate issues.
          </p>
          <p>
            <strong>Contact Us:</strong> support@security-docs.com
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12 not-prose">
            <h3 className="font-semibold text-blue-900 mb-3">Bottom Line</h3>
            <p className="text-sm text-blue-800 mb-2">
              <strong>No refunds on digital downloads</strong> - but we want you to make an informed purchase. 
              We provide detailed descriptions, answer pre-purchase questions, and support you after purchase.
            </p>
            <p className="text-sm text-blue-800 mb-2">
              <strong>Technical issues?</strong> Contact us within 7 days and we'll fix it or issue a refund.
            </p>
            <p className="text-sm text-blue-700">
              <strong>Questions before buying?</strong> Email support@security-docs.com - we're happy to help 
              you choose the right products.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}