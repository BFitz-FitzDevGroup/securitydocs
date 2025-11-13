import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Shield, Scale, AlertCircle } from 'lucide-react';

export default function TermsOfServicePage() {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Legal', href: '/legal' },
    { label: 'Terms of Service', href: '/legal/terms' }
  ];

  return (
    <PageLayout
      title="Terms of Service"
      description="Terms and conditions for using SecurityDocs templates and services"
      showBreadcrumb
      breadcrumbPath={breadcrumbPath}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last Updated: November 12, 2025
          </p>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-slate-700">
              By purchasing and using SecurityDocs templates, you agree to these terms. 
              Please read them carefully before making a purchase.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          
          {/* Agreement to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              These Terms of Service govern your use of SecurityDocs and the purchase of our 
              SOC 2 compliance templates and documentation. By accessing our website and 
              purchasing our products, you agree to be bound by these terms.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you do not agree with any part of these terms, please do not purchase or 
              use our templates.
            </p>
          </section>

          {/* Product Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Product Description
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SecurityDocs provides digital templates and documentation designed to assist 
              with SOC 2 compliance preparation. Our products include:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Policy templates (Enterprise, SMB, Workbook, and Guide versions)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Document templates with usage instructions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Evidence explanations and best practices guides</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Product bundles with multiple templates</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              All templates are delivered as Microsoft Word (.docx) documents via email 
              after purchase.
            </p>
          </section>

          {/* License and Usage Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              License and Usage Rights
            </h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              What You Can Do
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you purchase our templates, you receive a non-exclusive, non-transferable 
              license to use them for your organization's internal compliance purposes. You may:
            </p>
            <ul className="space-y-2 text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Customize and modify templates for your organization's needs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Use templates within a single organization or legal entity</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Print and distribute customized versions internally</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Share customized documents with auditors and compliance assessors</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              What You Cannot Do
            </h3>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Resell, redistribute, or share templates with other organizations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Claim authorship or ownership of the original templates</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Use templates as part of a consulting service for third parties</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Reverse engineer or extract content for competitive purposes</span>
              </li>
            </ul>
          </section>

          {/* Important Disclaimers */}
          <section className="mb-12">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Important: Customization Required
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Our templates are starting points that <strong>must be customized</strong> to 
                    reflect your organization's specific environment, controls, and practices. 
                    Using templates without proper customization will not result in SOC 2 compliance.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Disclaimer of Warranties
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SecurityDocs templates are provided "as is" without warranties of any kind, 
              either express or implied. We do not warrant that:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Our templates will guarantee SOC 2 audit passage</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Templates will meet your specific compliance requirements</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Templates are error-free or complete for all situations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Use of templates will prevent audit findings or compliance issues</span>
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, SecurityDocs and its creators shall 
              not be liable for any:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Indirect, incidental, or consequential damages</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Loss of business, revenue, or profits</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Audit failures or compliance violations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Costs of substitute goods or services</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Our total liability shall not exceed the amount you paid for the templates.
            </p>
          </section>

          {/* Payment and Delivery */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Payment and Delivery
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              All purchases are processed securely through Lemon Squeezy, our payment 
              processor. Upon successful payment:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>You'll receive an email with secure download links</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Downloads are limited to 3 attempts per purchase</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>A customer account is created for re-downloads if needed</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>International customers will be charged applicable VAT</span>
              </li>
            </ul>
          </section>

          {/* Refund Policy Reference */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Refund Policy
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              All sales are final. Due to the digital nature of our products and immediate 
              delivery upon purchase, we do not offer refunds except in cases of technical 
              issues preventing download.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Please see our complete{' '}
              <a href="/legal/refund-policy" className="text-blue-600 hover:text-blue-700 underline">
                Refund Policy
              </a>
              {' '}for full details.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              All templates, content, and documentation provided by SecurityDocs are protected 
              by copyright and intellectual property laws. SecurityDocs retains all ownership 
              rights to the original templates.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The SecurityDocs name, logo, and branding are trademarks and may not be used 
              without permission.
            </p>
          </section>

          {/* Support and Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Support and Contact
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We provide email support for technical issues related to downloading or accessing 
              your purchased templates. Support does not include:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Compliance consulting or advisory services</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Customization services for your specific needs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Audit preparation or representation services</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              For support inquiries, contact us at:{' '}
              <a href="mailto:support@security-docs.com" className="text-blue-600 hover:text-blue-700 underline">
                support@security-docs.com
              </a>
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes 
              will be effective immediately upon posting to our website. Your continued use 
              of SecurityDocs after changes are posted constitutes acceptance of the modified terms.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We encourage you to review these terms periodically.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Governing Law
            </h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service are governed by the laws of the State of California, 
              United States, without regard to conflict of law principles. Any disputes shall 
              be resolved in the courts of California.
            </p>
          </section>

        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Questions About These Terms?
          </h3>
          <p className="text-slate-600 mb-4">
            If you have questions about our Terms of Service, please contact us.
          </p>
          <a
            href="mailto:support@security-docs.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            support@security-docs.com
          </a>
        </div>
      </div>
    </PageLayout>
  );
}