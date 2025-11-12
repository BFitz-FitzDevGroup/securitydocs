import React from 'react';
import Link from 'next/link';

export default function DisclaimerFooter() {
  return (
    <div className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Disclaimer */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Important Information About Our Templates
              </h3>
              <div className="prose prose-sm text-slate-600 space-y-3">
                <p>
                  <strong>Our Intent:</strong> SecurityDocs provides professional SOC 2 compliance templates to help you get started faster. 
                  These templates are based on real-world experience implementing SOC 2 at Sparck, a SaaS company that successfully achieved SOC 2 certification.
                </p>
                
                <p>
                  <strong>What These Templates Are:</strong> Starting points and frameworks that reflect industry best practices and SOC 2 requirements. 
                  They're designed to save you months of work by providing structure, examples, and guidance.
                </p>
                
                <p>
                  <strong>What You Must Do:</strong> Every organization is unique. You <em>must</em> customize these templates to match your specific:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Business operations and technology environment</li>
                  <li>Security controls and procedures actually in place</li>
                  <li>Risk profile and regulatory requirements</li>
                  <li>Industry-specific compliance needs</li>
                </ul>
                
                <p className="pt-2">
                  <strong>Critical Disclaimers:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Not Legal Advice:</strong> We're not attorneys. These templates don't constitute legal, accounting, or professional compliance advice.</li>
                  <li><strong>No Guarantee of Compliance:</strong> Using our templates doesn't guarantee you'll pass a SOC 2 audit or achieve compliance.</li>
                  <li><strong>Your Responsibility:</strong> You're responsible for ensuring your final documents accurately reflect your organization's practices and meet all applicable requirements.</li>
                  <li><strong>Professional Consultation Recommended:</strong> Consider consulting with compliance professionals, auditors, or legal counsel.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 mb-4">
          <Link href="/legal/terms" className="hover:text-blue-600 transition-colors">
            Terms of Service
          </Link>
          <Link href="/legal/privacy" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/legal/refund-policy" className="hover:text-blue-600 transition-colors">
            Refund Policy
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About SecurityDocs
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500 pt-4 border-t border-slate-200">
          <p>© {new Date().getFullYear()} SecurityDocs. All rights reserved.</p>
          <p className="mt-1">Professional SOC 2 compliance templates for technology companies.</p>
        </div>
      </div>
    </div>
  );
}