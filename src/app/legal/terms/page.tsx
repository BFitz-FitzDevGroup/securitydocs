import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata = {
  title: 'Terms of Service | SecurityDocs',
  description: 'Terms of service for SecurityDocs SOC 2 compliance templates and digital products.',
};

export default function TermsOfServicePage() {
  return (
    <PageLayout
      title="Terms of Service"
      description="Please read these terms carefully before purchasing or using SecurityDocs templates"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Legal', href: '/legal' },
        { label: 'Terms of Service' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Last Updated: November 12, 2025</h2>
          <p className="text-blue-800">
            These terms govern your use of SecurityDocs and purchase of our digital products. 
            By using our website or purchasing our products, you agree to these terms.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>1. About SecurityDocs</h2>
          <p>
            SecurityDocs provides SOC 2 compliance templates, documentation, and educational resources for 
            businesses seeking SOC 2 certification. Our products are digital downloads delivered via email 
            after purchase.
          </p>

          <h2>2. Products and Services</h2>
          
          <h3>2.1 What We Provide</h3>
          <p>We offer the following digital products:</p>
          <ul>
            <li><strong>Policy Templates:</strong> SOC 2-aligned policy documents in multiple versions (Enterprise, SMB, Workbook, Implementation Guide)</li>
            <li><strong>Document Templates:</strong> Operational forms and procedures with implementation instructions</li>
            <li><strong>Evidence Explanations:</strong> Guidance on what auditors expect for specific SOC 2 controls</li>
            <li><strong>Bundles:</strong> Comprehensive packages combining multiple products at discounted pricing</li>
          </ul>

          <h3>2.2 File Format and Delivery</h3>
          <ul>
            <li>All templates are delivered as Microsoft Word (.docx) documents</li>
            <li>Download links are sent via email immediately after purchase</li>
            <li>You have <strong>3 download attempts</strong> per purchase</li>
            <li>Downloads must be completed within 30 days of purchase</li>
            <li>You can re-download from your customer account at Lemon Squeezy</li>
          </ul>

          <h2>3. Important Disclaimers</h2>
          
          <h3>3.1 Not Professional Advice</h3>
          <p>
            <strong>SecurityDocs templates are educational resources and starting points only.</strong> They do not constitute:
          </p>
          <ul>
            <li>Legal advice or legal services</li>
            <li>Accounting or audit services</li>
            <li>Professional compliance consulting</li>
            <li>Certified or audited documentation</li>
          </ul>
          <p>
            We are not attorneys, accountants, or certified auditors. For professional advice regarding your 
            specific situation, consult appropriate licensed professionals.
          </p>

          <h3>3.2 No Guarantee of Compliance</h3>
          <p>
            <strong>Using our templates does not guarantee SOC 2 compliance or audit success.</strong> SOC 2 audits 
            evaluate your actual security practices and controls, not just your documentation. Factors affecting 
            audit outcomes include:
          </p>
          <ul>
            <li>How accurately your documents reflect your actual practices</li>
            <li>The effectiveness of your implemented security controls</li>
            <li>Your evidence collection and operational maturity</li>
            <li>Your auditor's specific requirements and interpretation</li>
            <li>Your organization's unique risk profile and environment</li>
          </ul>

          <h3>3.3 Customization Required</h3>
          <p>
            <strong>You must customize all templates to match your organization.</strong> Our templates provide 
            structure and examples, but you are responsible for:
          </p>
          <ul>
            <li>Accurately describing your systems, processes, and controls</li>
            <li>Ensuring alignment with your actual security practices</li>
            <li>Removing inapplicable sections and adding necessary content</li>
            <li>Reviewing with appropriate technical and legal personnel</li>
            <li>Obtaining approval from your auditor when required</li>
          </ul>

          <h2>4. Purchase Terms</h2>
          
          <h3>4.1 Pricing and Payment</h3>
          <ul>
            <li>All prices are in USD unless otherwise stated</li>
            <li>Payment processing handled by Lemon Squeezy (our payment processor)</li>
            <li>VAT automatically calculated and collected for applicable regions</li>
            <li>Prices subject to change without notice (existing purchases honored)</li>
          </ul>

          <h3>4.2 Digital Product Policy - No Refunds</h3>
          <p>
            <strong>All sales are final.</strong> Due to the nature of digital products that grant immediate access, 
            we cannot offer refunds or exchanges after purchase. Before purchasing:
          </p>
          <ul>
            <li>Review product descriptions carefully</li>
            <li>Check sample content when available</li>
            <li>Contact us with any pre-purchase questions</li>
            <li>Ensure the product meets your needs</li>
          </ul>
          <p>
            <strong>Exceptional Circumstances:</strong> We may consider refund requests in cases of technical issues 
            preventing download or severe product defects. Contact support@security-docs.com within 7 days of purchase 
            with documentation of the issue.
          </p>

          <h3>4.3 License and Usage Rights</h3>
          <p>Upon purchase, you receive a non-exclusive, non-transferable license to:</p>
          <ul>
            <li>Download and use the templates within your organization</li>
            <li>Modify and customize the templates for your internal use</li>
            <li>Create derivative works based on the templates for your organization</li>
          </ul>
          <p><strong>You may NOT:</strong></p>
          <ul>
            <li>Resell, redistribute, or share templates with other organizations</li>
            <li>Use templates to create competing products or services</li>
            <li>Remove or modify copyright notices</li>
            <li>Claim authorship of unmodified templates</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
          </p>
          <ul>
            <li>SecurityDocs is provided "as is" without warranties of any kind</li>
            <li>We make no guarantees regarding audit outcomes or compliance achievement</li>
            <li>We are not liable for any indirect, incidental, or consequential damages</li>
            <li>Our total liability is limited to the amount you paid for the product</li>
            <li>We are not responsible for decisions made based on our templates</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, templates, and materials provided by SecurityDocs are protected by copyright and 
            intellectual property laws. SecurityDocs retains all rights not explicitly granted in your license.
          </p>

          <h2>7. Privacy and Data Collection</h2>
          <p>
            Your personal information is collected and processed according to our <a href="/legal/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>. 
            We collect minimal information necessary for order processing and customer support.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We may update these terms periodically. Continued use of SecurityDocs after changes constitutes 
            acceptance of updated terms. Material changes will be communicated via email to customers.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of California, United States, without regard to 
            conflict of law principles.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For questions about these terms or our products:
          </p>
          <ul>
            <li><strong>Email:</strong> support@security-docs.com</li>
            <li><strong>Website:</strong> www.security-docs.com</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-12 not-prose">
            <h3 className="font-semibold text-slate-900 mb-3">Summary (Not Legal Advice)</h3>
            <p className="text-sm text-slate-700 mb-2">
              In plain English: Our templates are high-quality starting points based on real SOC 2 experience. 
              You must customize them for your organization. They're educational resources, not professional advice. 
              No refunds on digital products. We're not responsible if your audit doesn't go well - that depends 
              on your actual security practices, not just documentation.
            </p>
            <p className="text-sm text-slate-600">
              Have questions? Contact us before purchasing. We're here to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}