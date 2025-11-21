"use client";

import React from 'react';
import { Download, Check, Shield, FileText } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getBundle } from '@/lib/products';
import PrePurchaseNotice from '@/components/legal/PrePurchaseNotice';
import { BundleSaleSection } from '@/components/campaign/BundleSaleSection';

export function EvidenceBundleClient() {
  const bundle = getBundle('evidence');

  if (!bundle) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Bundle Not Found</h1>
            <p className="text-slate-600">The requested bundle could not be found.</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/products' },
    { label: 'Bundles', href: '/products/bundles' },
    { label: bundle.name, href: `/products/evidence-bundle` }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold mb-6">
                <Download className="w-4 h-4 mr-2" />
                Audit Preparation
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                {bundle.name}
              </h1>

              {/* CYBER WEEK SALE SECTION - Shows Nov 24 - Dec 5 only */}
              <BundleSaleSection
                bundleName="Evidence Bundle"
                discountPercent={40}
                originalPrice={299.95}
                salePrice={179.97}
                savings={119.98}
                discountCode="CYBERWEEK40"
              />
              
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Get all 40 evidence explanations in one comprehensive package. These detailed guides explain exactly what auditors expect to see for each SOC 2 control, eliminating guesswork and reducing audit findings. Save ${bundle.savings.toFixed(2)} compared to purchasing evidence explanations individually.
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">40 Complete Evidence Explanations</h2>
              <div className="space-y-4">
                {bundle.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Evidence Bundle */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why Evidence Explanations Are Critical</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-lg p-3 mr-4">
                    <Download className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Know What Auditors Want</h3>
                    <p className="text-slate-600">Stop guessing. Each explanation details exactly what evidence auditors expect, in what format, and how to present it.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Reduce Audit Findings</h3>
                    <p className="text-slate-600">Most audit findings stem from insufficient or incorrectly formatted evidence. Our explanations help you get it right the first time.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Save Audit Time</h3>
                    <p className="text-slate-600">Organized, properly formatted evidence speeds up the audit process and reduces back-and-forth with auditors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Each Explanation Includes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Each Evidence Explanation Includes:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Control Description:</strong> Plain English explanation of what the control does</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Evidence Requirements:</strong> Specific items auditors need to see</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Formatting Guidance:</strong> How to present evidence professionally</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Common Mistakes:</strong> What to avoid based on real audit experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Collection Tips:</strong> How to gather evidence efficiently</span>
                </li>
              </ul>
            </div>

            {/* Upgrade Option */}
            <div className="bg-slate-50 border-l-4 border-amber-600 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Get Policies + Documents Too</h3>
              <p className="text-slate-600 mb-4">
                The Complete Bundle includes these evidence explanations PLUS all policies and documents for the most comprehensive SOC 2 solution.
              </p>
              <a 
                href="/products/complete-bundle"
                className="text-amber-600 hover:text-amber-700 font-semibold underline"
              >
                View Complete Bundle →
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Purchase Card */}
            <div className="bg-white border-2 border-amber-600 rounded-lg p-6 shadow-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-600 mb-2">Individual Explanations Cost:</div>
                <div className="text-2xl line-through text-slate-400">${bundle.originalPrice.toFixed(2)}</div>
                <div className="text-4xl font-bold text-slate-900 my-4">${bundle.price.toFixed(2)}</div>
                <div className="text-xl font-semibold text-emerald-600">
                  Save ${bundle.savings.toFixed(2)}
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Total Explanations:</span>
                  <span className="font-semibold">{bundle.productCount}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Cost Per Explanation:</span>
                  <span className="font-semibold">${(bundle.price / bundle.productCount).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-600">Discount:</span>
                  <span className="font-semibold text-emerald-600">{Math.round((bundle.savings / bundle.originalPrice) * 100)}%</span>
                </div>
              </div>

              <a
                href={bundle.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-lg font-bold text-center transition-colors text-lg mb-4"
              >
                <Download className="w-5 h-5 inline mr-2" />
                Get Evidence Bundle
              </a>

              <p className="text-xs text-slate-500 text-center">
                Instant download • All file formats included
              </p>
            </div>

            {/* Pre-Purchase Notice */}
            <PrePurchaseNotice productType="bundle" />

            {/* Trust Indicators */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Why Choose SecurityDocs?</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <Shield className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Developed from real-world SOC 2 compliance experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Used by companies achieving SOC 2 compliance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Professional Microsoft Word templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email support for implementation questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};