import React from 'react';
import Link from 'next/link';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata = {
  title: 'Legal Information | SecurityDocs',
  description: 'Terms of service, privacy policy, refund policy, and other legal information for SecurityDocs.',
};

export default function LegalHubPage() {
  const legalPages = [
    {
      title: 'Terms of Service',
      href: '/legal/terms',
      description: 'Our terms govern your use of SecurityDocs and purchase of digital products. Learn about licenses, disclaimers, and your responsibilities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'blue',
    },
    {
      title: 'Privacy Policy',
      href: '/legal/privacy',
      description: 'How we collect, use, and protect your personal information. We respect your privacy and are transparent about data handling.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'emerald',
    },
    {
      title: 'Refund Policy',
      href: '/legal/refund-policy',
      description: 'Our policy on refunds for digital products. All sales are final, but we stand behind our quality and handle technical issues promptly.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'amber',
    },
  ];

  return (
    <PageLayout
      title="Legal Information"
      description="Terms, policies, and legal information for SecurityDocs"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Legal' },
      ]}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Transparency and Trust
          </h2>
          <p className="text-slate-700 mb-4">
            At SecurityDocs, we believe in being completely transparent about how we operate, what we offer, 
            and your rights as a customer. Our legal policies are written in plain language because we value 
            clarity over legal jargon.
          </p>
          <p className="text-slate-600 text-sm">
            Questions about our policies? Contact us at{' '}
            <a href="mailto:support@security-docs.com" className="text-blue-600 hover:text-blue-700 underline">
              support@security-docs.com
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {legalPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-${page.color}-100 text-${page.color}-600 rounded-lg mb-4`}>
                {page.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {page.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {page.description}
              </p>
              <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                Read Policy
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Key Points to Understand
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">About Our Templates</h3>
              <p className="text-blue-800 text-sm">
                Our SOC 2 templates are <strong>starting points and educational resources</strong>, not turnkey solutions. 
                They're based on real SOC 2 experience, but you must customize them for your organization. 
                We don't provide legal, accounting, or professional compliance advice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Digital Product Policy</h3>
              <p className="text-blue-800 text-sm">
                <strong>All sales are final</strong> due to the instant digital nature of our products. 
                We provide detailed descriptions and answer pre-purchase questions to ensure you're making 
                an informed decision. Technical issues? We'll fix them promptly or issue a refund.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Your Privacy Matters</h3>
              <p className="text-blue-800 text-sm">
                We collect only what's necessary to process orders and improve our service. We use privacy-focused 
                analytics and <strong>never sell your data</strong>. You have full control over your information 
                and marketing preferences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 mb-2">No Guarantee of Compliance</h3>
              <p className="text-blue-800 text-sm">
                Using our templates doesn't guarantee SOC 2 compliance or audit success. SOC 2 audits evaluate 
                your actual security practices and operational maturity, not just your documentation. Your specific 
                results depend on your implementation, controls, and auditor requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Questions or Concerns?
          </h2>
          <p className="text-slate-600 mb-6">
            We're here to help. Whether you have questions about our policies, products, or anything else, 
            don't hesitate to reach out.
          </p>
          <a
            href="mailto:support@security-docs.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </PageLayout>
  );
}