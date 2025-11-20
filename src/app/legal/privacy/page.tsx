import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SecurityDocs collects, uses, and protects your personal information',
  alternates: {
    canonical: '/legal/privacy'
  }
};

export default function PrivacyPolicyPage() {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy Policy', href: '/legal/privacy' }
  ];

  return (
    <PageLayout
      title="Privacy Policy"
      description="How SecurityDocs collects, uses, and protects your personal information"
      showBreadcrumb
      breadcrumbPath={breadcrumbPath}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last Updated: November 12, 2025
          </p>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-slate-700">
              We take your privacy seriously. This policy explains how we collect, use, and 
              protect your personal information when you use SecurityDocs.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Our Privacy Commitment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SecurityDocs is committed to protecting your privacy and handling your personal 
              information responsibly. As a company that helps others achieve compliance, we 
              understand the importance of data protection and privacy best practices.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This Privacy Policy describes how we collect, use, disclose, and protect your 
              personal information when you visit our website and purchase our templates.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-blue-600" />
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              Information You Provide
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you make a purchase, we collect:
            </p>
            <ul className="space-y-2 text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Contact Information:</strong> Name and email address</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Payment Information:</strong> Processed securely by Lemon Squeezy (we never see your payment details)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Purchase Details:</strong> Products purchased, transaction date, and amount</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Information Collected Automatically
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="space-y-2 text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Usage Data:</strong> Pages visited, time spent, and navigation patterns</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Device Information:</strong> Browser type, operating system, and device type</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Location Data:</strong> General location (country/region level) based on IP address</span>
              </li>
            </ul>

            <div className="bg-slate-50 border-l-4 border-slate-400 rounded-r-lg p-6">
              <p className="text-slate-700 leading-relaxed">
                <strong>Note:</strong> We use privacy-focused analytics (Plausible) that doesn't use 
                cookies or track you across websites. Your privacy is respected even in our analytics.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use your personal information for the following purposes:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Order Processing and Delivery
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Process your purchase and send you order confirmations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Deliver templates via email with secure download links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Manage your customer account for re-downloads</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Customer Support
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Respond to your inquiries and support requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Resolve technical issues with downloads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Communicate about your purchases</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Website Improvement
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Understand how visitors use our website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Improve our content and user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Identify and fix technical issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              How We Share Your Information
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We only share your 
              information in these limited circumstances:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Service Providers
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We use trusted third-party services to help us operate our business:
                </p>
                <ul className="mt-2 space-y-1 text-slate-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Lemon Squeezy:</strong> Payment processing and order fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Vercel:</strong> Website hosting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Plausible Analytics:</strong> Privacy-focused website analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Legal Requirements
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We may disclose information if required by law, legal process, or government 
                  request, or to protect our rights, property, or safety.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-blue-600" />
              Data Security
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your 
              personal information:
            </p>
            <ul className="space-y-2 text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Encryption:</strong> All data transmission is encrypted using HTTPS/TLS</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Secure Hosting:</strong> Data stored on secure, enterprise-grade infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Regular Reviews:</strong> Ongoing security assessments and updates</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed text-sm">
              While we strive to protect your personal information, no method of transmission 
              over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-blue-600" />
              Your Privacy Rights
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal 
              information:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Access and Correction
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  You can request access to your personal information and ask us to correct 
                  any inaccuracies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Data Deletion
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  You can request deletion of your personal information, subject to legal 
                  retention requirements (such as tax and accounting records).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Marketing Opt-Out
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  We do not send marketing emails unless you specifically opt in. You can 
                  unsubscribe at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Data Portability
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  You can request a copy of your personal information in a portable format.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
              <p className="text-slate-700 leading-relaxed">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:support@security-docs.com" className="text-blue-600 hover:text-blue-700 underline">
                  support@security-docs.com
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use minimal cookies and tracking technologies:
            </p>
            <ul className="space-y-2 text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Essential Cookies:</strong> Required for website functionality and security</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Analytics:</strong> Privacy-focused analytics that don't track you across sites</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              We do not use advertising cookies or sell your browsing data to third parties.
            </p>
          </section>

          {/* International Users */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              International Users
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SecurityDocs is based in the United States. If you access our website from 
              outside the US, your information may be transferred to, stored, and processed 
              in the United States.
            </p>
            <p className="text-slate-700 leading-relaxed">
              By using our website and services, you consent to the transfer of your 
              information to the United States.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Data Retention
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Provide access to purchased templates (indefinitely for re-downloads)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Comply with legal obligations (e.g., tax records: 7 years)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Resolve disputes and enforce agreements</span>
              </li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              SecurityDocs is not directed to children under 13. We do not knowingly collect 
              personal information from children. If we learn we have collected information 
              from a child under 13, we will delete it promptly.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. When we make changes, we 
              will update the "Last Updated" date at the top of this page.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We encourage you to review this policy periodically to stay informed about how 
              we protect your information.
            </p>
          </section>

        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Questions About Privacy?
          </h3>
          <p className="text-slate-600 mb-4">
            If you have questions or concerns about how we handle your personal information, 
            please contact us.
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