import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { AlertCircle, Download, Mail, HelpCircle } from 'lucide-react';

export default function RefundPolicyPage() {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Legal', href: '/legal' },
    { label: 'Refund Policy', href: '/legal/refund-policy' }
  ];

  return (
    <PageLayout
      title="Refund Policy"
      description="SecurityDocs refund policy for digital template purchases"
      showBreadcrumb
      breadcrumbPath={breadcrumbPath}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Refund Policy</h1>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last Updated: November 12, 2025
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-12">
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  All Sales Are Final
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Due to the digital nature of our products and immediate delivery upon purchase, 
                  SecurityDocs operates a no-refund policy. Please read this policy carefully 
                  before making a purchase.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          
          {/* Why No Refunds */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Why We Don't Offer Refunds
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SecurityDocs sells digital products (Microsoft Word templates) that are delivered 
              immediately upon purchase via email. Once you receive the download links and access 
              the templates, we cannot "take back" the digital files.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              This is similar to purchasing a book or ebook - once you've read the content, 
              it can't be "unread." Our templates contain valuable intellectual property and 
              professional guidance that becomes accessible to you immediately upon purchase.
            </p>
            <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-slate-400">
              <p className="text-slate-700 leading-relaxed mb-0">
                <strong>Important:</strong> We provide detailed product descriptions, sample 
                content previews, and "What's Included" sections on every product page so you 
                can make an informed decision before purchasing.
              </p>
            </div>
          </section>

          {/* Before You Buy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Before You Buy - Please Review
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To ensure you're making the right purchase, we recommend:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <Download className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Read Product Descriptions Carefully
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Each product page includes detailed descriptions, what's included, and 
                      SOC 2 compliance coverage. Make sure the template meets your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Review Template Previews
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      We provide template structure previews and key features on every product 
                      page. These give you a clear idea of what you'll receive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Contact Us With Questions
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      If you're unsure whether a template is right for you, contact us at{' '}
                      <a href="mailto:support@security-docs.com" className="text-blue-600 hover:text-blue-700 underline">
                        support@security-docs.com
                      </a>
                      {' '}before purchasing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exceptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Technical Issues - We're Here to Help
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              While we don't offer refunds, we absolutely want you to receive what you paid for. 
              If you experience technical difficulties, we'll work with you to resolve them:
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Download Problems:</strong> If download links don't work or expire 
                    before you can access them, we'll send new links.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Corrupted Files:</strong> If downloaded files are corrupted or won't 
                    open properly, we'll provide working copies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Wrong Product Delivered:</strong> If we accidentally send the wrong 
                    template (our error), we'll provide the correct one immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Payment Issues:</strong> If you were charged but didn't receive your 
                    purchase, we'll investigate and make it right.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4">
              <p className="text-slate-700 leading-relaxed mb-0">
                Contact us at{' '}
                <a href="mailto:support@security-docs.com" className="text-emerald-700 hover:text-emerald-800 underline font-medium">
                  support@security-docs.com
                </a>
                {' '}for any technical issues. We typically respond within 24 hours on business days.
              </p>
            </div>
          </section>

          {/* What's Not Covered */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              What's Not Covered by This Policy
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We cannot offer refunds or exchanges for:
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Change of Mind:</strong> "I decided I don't need this anymore" or 
                    "I bought the wrong template."
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Customization Expectations:</strong> "The template requires too much 
                    customization." All templates are designed to be customized for your organization.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Compliance Outcomes:</strong> "We didn't pass our audit." Templates are 
                    tools to help with compliance, but don't guarantee audit passage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Compatibility Issues:</strong> "I don't have Microsoft Word." Product 
                    descriptions clearly state files are in .docx format.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Bundle vs Individual:</strong> "I should have bought the bundle instead." 
                    Bundle savings are clearly displayed on every product page.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chargebacks */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Chargebacks and Disputes
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you're considering a chargeback or payment dispute, please contact us first 
              at{' '}
              <a href="mailto:support@security-docs.com" className="text-blue-600 hover:text-blue-700 underline">
                support@security-docs.com
              </a>
              . We want to resolve any issues directly with you.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Initiating a chargeback for a delivered digital product may be considered fraud. 
              We maintain records of all deliveries and will dispute fraudulent chargebacks.
            </p>
          </section>

          {/* Fair Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Our Commitment to Fair Treatment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              While we maintain a no-refund policy, we're committed to treating customers fairly:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>We provide accurate, detailed product descriptions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>We respond promptly to technical support requests</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>We ensure you can re-download purchases if needed</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>We answer pre-purchase questions to help you choose correctly</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Questions About This Policy?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about our refund policy or need assistance with a purchase, 
              please contact us at{' '}
              <a href="mailto:support@security-docs.com" className="text-blue-600 hover:text-blue-700 underline">
                support@security-docs.com
              </a>
              . We're here to help ensure you have a positive experience with SecurityDocs.
            </p>
          </section>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Need Help Choosing the Right Templates?
          </h3>
          <p className="text-slate-600 mb-4">
            We're happy to answer questions before you purchase to make sure you're getting 
            exactly what you need.
          </p>
          <a
            href="mailto:support@security-docs.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Contact Us: support@security-docs.com
          </a>
        </div>
      </div>
    </PageLayout>
  );
}