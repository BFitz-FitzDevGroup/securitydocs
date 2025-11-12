import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata = {
  title: 'Privacy Policy | SecurityDocs',
  description: 'Privacy policy for SecurityDocs - how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your information"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Legal', href: '/legal' },
        { label: 'Privacy Policy' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Last Updated: November 12, 2025</h2>
          <p className="text-blue-800">
            We respect your privacy and are committed to protecting your personal information. 
            This policy explains what data we collect, how we use it, and your rights.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>1. Information We Collect</h2>
          
          <h3>1.1 Information You Provide</h3>
          <p>When you make a purchase or contact us, we collect:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address</li>
            <li><strong>Payment Information:</strong> Processed securely by Lemon Squeezy (we never see your full payment details)</li>
            <li><strong>Billing Information:</strong> Company name (optional), billing address for VAT compliance</li>
            <li><strong>Communications:</strong> Messages you send us via email or contact forms</li>
          </ul>

          <h3>1.2 Automatically Collected Information</h3>
          <p>When you visit our website, we collect:</p>
          <ul>
            <li><strong>Usage Data:</strong> Pages viewed, time spent, referring website</li>
            <li><strong>Device Information:</strong> Browser type, device type, screen resolution</li>
            <li><strong>IP Address:</strong> For analytics and fraud prevention</li>
            <li><strong>Analytics:</strong> Via Plausible Analytics (privacy-focused, no cookies) and Google Analytics 4</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          
          <h3>2.1 Primary Uses</h3>
          <ul>
            <li><strong>Order Processing:</strong> To fulfill your purchase and deliver products</li>
            <li><strong>Customer Support:</strong> To respond to your questions and resolve issues</li>
            <li><strong>Account Management:</strong> To maintain your customer account at Lemon Squeezy</li>
            <li><strong>Legal Compliance:</strong> To comply with tax and VAT requirements</li>
          </ul>

          <h3>2.2 Analytics and Improvement</h3>
          <ul>
            <li><strong>Website Analytics:</strong> To understand how visitors use our site and improve user experience</li>
            <li><strong>Product Development:</strong> To understand which products are most valuable to customers</li>
            <li><strong>Performance Monitoring:</strong> To ensure our website loads quickly and functions properly</li>
          </ul>

          <h3>2.3 Marketing Communications</h3>
          <ul>
            <li><strong>Transactional Emails:</strong> Order confirmations, download links, receipts (required for service)</li>
            <li><strong>Product Updates:</strong> Important updates about products you've purchased (opt-out available)</li>
            <li><strong>Marketing Emails:</strong> New products, educational content (opt-in only, easy unsubscribe)</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          
          <h3>3.1 Service Providers</h3>
          <p>We share limited information with trusted service providers who help us operate:</p>
          <ul>
            <li><strong>Lemon Squeezy:</strong> Payment processing, product delivery, customer accounts</li>
            <li><strong>Vercel:</strong> Website hosting and content delivery</li>
            <li><strong>Analytics Providers:</strong> Plausible Analytics (privacy-focused), Google Analytics</li>
            <li><strong>Email Service:</strong> For transactional and marketing emails (if applicable)</li>
          </ul>
          <p>
            All service providers are contractually required to protect your data and use it only for 
            the purposes we specify.
          </p>

          <h3>3.2 Legal Requirements</h3>
          <p>We may disclose your information when required by law or to:</p>
          <ul>
            <li>Comply with legal processes, court orders, or government requests</li>
            <li>Enforce our Terms of Service</li>
            <li>Protect our rights, property, or safety</li>
            <li>Investigate fraud or security issues</li>
          </ul>

          <h3>3.3 We DO NOT Sell Your Data</h3>
          <p>
            <strong>We never sell, rent, or trade your personal information to third parties for marketing purposes.</strong>
          </p>

          <h2>4. Analytics and Cookies</h2>
          
          <h3>4.1 Our Analytics Approach</h3>
          <p>
            We use a dual analytics approach to understand website usage while respecting privacy:
          </p>
          <ul>
            <li><strong>Plausible Analytics:</strong> Privacy-focused, GDPR compliant, no cookies, doesn't track individuals</li>
            <li><strong>Google Analytics 4:</strong> For advanced e-commerce insights, anonymized IP addresses</li>
          </ul>

          <h3>4.2 Cookies We Use</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function (shopping cart, downloads)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand website usage (Google Analytics)</li>
            <li><strong>No Advertising Cookies:</strong> We don't use cookies for targeted advertising</li>
          </ul>
          <p>
            You can disable cookies in your browser settings, though this may affect website functionality.
          </p>

          <h2>5. Data Security</h2>
          <p>We take security seriously and implement appropriate measures:</p>
          <ul>
            <li><strong>Encryption:</strong> HTTPS encryption for all data transmission</li>
            <li><strong>Secure Storage:</strong> Data stored with industry-standard security practices</li>
            <li><strong>Limited Access:</strong> Only authorized personnel can access customer data</li>
            <li><strong>Regular Security Reviews:</strong> Ongoing monitoring and updates</li>
          </ul>
          <p>
            However, no method of electronic storage or transmission is 100% secure. We cannot guarantee 
            absolute security but strive to use commercially reasonable protections.
          </p>

          <h2>6. Data Retention</h2>
          <ul>
            <li><strong>Purchase Records:</strong> Retained for 7 years for accounting and tax purposes</li>
            <li><strong>Customer Accounts:</strong> Maintained until you request deletion</li>
            <li><strong>Analytics Data:</strong> Aggregated and anonymized, retained indefinitely</li>
            <li><strong>Marketing Lists:</strong> Until you unsubscribe or request removal</li>
          </ul>

          <h2>7. Your Rights and Choices</h2>
          
          <h3>7.1 Access and Correction</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Request a copy of the personal information we hold about you</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Update your contact preferences</li>
          </ul>

          <h3>7.2 Data Deletion</h3>
          <p>You can request deletion of your personal information, subject to:</p>
          <ul>
            <li>Legal requirements to retain certain records (tax, accounting)</li>
            <li>Legitimate business needs (fraud prevention, disputes)</li>
            <li>Contractual obligations</li>
          </ul>

          <h3>7.3 Marketing Opt-Out</h3>
          <p>You can opt out of marketing communications:</p>
          <ul>
            <li>Click "unsubscribe" in any marketing email</li>
            <li>Contact us at support@security-docs.com</li>
            <li>Note: Transactional emails (receipts, downloads) cannot be opted out of</li>
          </ul>

          <h2>8. International Data Transfers</h2>
          <p>
            SecurityDocs operates from the United States. If you're located outside the U.S., your 
            information will be transferred to and processed in the United States. By using our services, 
            you consent to this transfer and processing.
          </p>
          <p>
            For EU/UK customers: We comply with applicable data protection laws including GDPR requirements 
            for international transfers.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            SecurityDocs is not intended for individuals under 18 years of age. We do not knowingly 
            collect personal information from children. If we learn we've collected information from 
            a child, we'll delete it promptly.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy periodically. Changes will be posted on this page with 
            an updated "Last Updated" date. Material changes will be communicated via email to customers. 
            Continued use after changes constitutes acceptance.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            Questions about this privacy policy or your personal information:
          </p>
          <ul>
            <li><strong>Email:</strong> support@security-docs.com</li>
            <li><strong>Subject Line:</strong> "Privacy Question" for faster response</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-12 not-prose">
            <h3 className="font-semibold text-slate-900 mb-3">Privacy in Plain English</h3>
            <p className="text-sm text-slate-700 mb-2">
              <strong>What we collect:</strong> Just the basics - your email, name, and purchase info. 
              We use privacy-focused analytics (Plausible) that doesn't track individuals.
            </p>
            <p className="text-sm text-slate-700 mb-2">
              <strong>How we use it:</strong> To process your order, send you your downloads, and improve 
              our website. We might send you helpful emails about compliance topics (easy to unsubscribe).
            </p>
            <p className="text-sm text-slate-700 mb-2">
              <strong>What we DON'T do:</strong> We never sell your data. We don't bombard you with ads. 
              We don't track you across the internet.
            </p>
            <p className="text-sm text-slate-600">
              <strong>Your control:</strong> You can request your data, ask us to delete it, or opt out 
              of emails anytime.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}