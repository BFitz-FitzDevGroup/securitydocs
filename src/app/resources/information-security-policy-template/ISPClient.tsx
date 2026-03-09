"use client";

import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Download, ArrowRight, Shield, FileText, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';

export function ISPClient() {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Free ISP Template', href: '/resources/information-security-policy-template' },
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Download className="w-4 h-4 mr-2" />
            Free Download
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Free Information Security Policy Template
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            See exactly what a professional, audit-ready policy looks like before you buy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/information-security-policy-sample.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Download Free Sample
              <Download className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/products/complete-bundle"
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg border border-slate-300 transition-colors inline-flex items-center justify-center"
            >
              View Complete Bundle
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-4">No email required. Instant download.</p>
        </div>
      </section>

      {/* What is an Information Security Policy? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            What is an Information Security Policy?
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Information Security Policy is the foundational document of any SOC 2 program. It defines your company's overall approach to protecting information assets and sets the tone for all other security controls. Every other policy, procedure, and control in your compliance program flows from this document.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              It is required for the SOC 2 Security Trust Service Criteria (Common Criteria) — the mandatory criteria for every SOC 2 audit. Your auditor will review it on day one of any SOC 2 engagement, and it shapes their expectations for everything else they examine.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              A weak or missing Information Security Policy is one of the most common sources of audit exceptions. It signals to auditors that the rest of your program may have similar gaps, which increases scrutiny across every control area.
            </p>
          </div>
        </div>
      </section>

      {/* What's in the Sample? */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            What's in the Free Sample?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            This sample is the SMB version — designed for startups and growing companies under 200 employees. It covers:
          </p>
          <ul className="space-y-3 mb-10">
            {[
              'Purpose and scope of the policy',
              'Information security objectives and principles',
              'Roles and responsibilities',
              'Asset classification and handling',
              'Access control requirements',
              'Incident response overview',
              'Compliance and enforcement',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>

          {/* Callout box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-800 font-medium mb-2">
                  This sample is one of four documents in the complete Information Security Policy package.
                </p>
                <p className="text-slate-600">
                  The full package includes Enterprise, SMB, Quick Reference, and Workbook versions. The{' '}
                  <a href="/products/complete-bundle" className="text-blue-600 hover:text-blue-700 font-medium">
                    Complete Bundle
                  </a>{' '}
                  includes 155+ documents across all Trust Service Criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters for SOC 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
            Why Your Information Security Policy Matters for SOC 2
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Auditors Read It First</h3>
              <p className="text-slate-600">
                Your Information Security Policy sets expectations for the entire audit. It tells auditors what controls you claim to have in place — and they'll verify every claim.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">It Must Match Reality</h3>
              <p className="text-slate-600">
                A generic policy that doesn't reflect your actual systems and practices creates audit exceptions. Auditors compare what you wrote to what you actually do — and gaps become findings.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                <RefreshCw className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Annual Review Required</h3>
              <p className="text-slate-600">
                Your audit evidence must include proof that the policy is reviewed and updated annually. Outdated policies that haven't been reviewed are a common and easily avoidable finding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Download the Free Sample
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            See the quality and structure of our templates before you commit. No email, no signup — just click and download.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/downloads/information-security-policy-sample.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Download Free Sample
              <Download className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/products/complete-bundle"
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg border border-slate-300 transition-colors inline-flex items-center justify-center"
            >
              View Complete Bundle
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          <p className="text-slate-600">
            Ready for the full package?{' '}
            <a href="/products" className="text-blue-600 hover:text-blue-700 font-medium">
              Browse all templates
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
