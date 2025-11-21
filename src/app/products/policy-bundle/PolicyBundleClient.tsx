"use client";

import React from 'react';
import { Shield, Check, Download, FileText } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getBundle } from '@/lib/products';
import PrePurchaseNotice from '@/components/legal/PrePurchaseNotice';
import { BundleSaleSection } from '@/components/campaign/BundleSaleSection';

export function PolicyBundleClient() {
  const bundle = getBundle('policy');

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
    { label: bundle.name, href: `/products/policy-bundle` }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Foundation Package
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                {bundle.name}
              </h1>

              {/* CYBER WEEK SALE SECTION - Shows Nov 24 - Dec 5 only */}
              <BundleSaleSection
                bundleName="Policy Bundle"
                discountPercent={40}
                originalPrice={199.95}
                salePrice={119.97}
                savings={79.98}
                discountCode="CYBERWEEK40"
              />

              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Get all 15 essential SOC 2 security policies in one comprehensive package. These professionally written templates cover every Trust Service Criteria and provide the foundation your compliance program needs. Save ${bundle.savings.toFixed(2)} compared to purchasing policies individually.
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">15 Complete Policy Templates</h2>
              <div className="space-y-4">
                {bundle.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Policy Bundle */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why Start with Policies?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Foundation of Compliance</h3>
                    <p className="text-slate-600">SOC 2 auditors expect to see comprehensive security policies as the foundation of your program. These templates give you that foundation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                    <Check className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Save Weeks of Work</h3>
                    <p className="text-slate-600">Writing policies from scratch takes 200+ hours. Get professionally written templates and customize them to your needs in days, not months.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-lg p-3 mr-4">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Complete Coverage</h3>
                    <p className="text-slate-600">All 15 policies address SOC 2 Trust Service Criteria comprehensively. No gaps, no guessing what you need.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Each Policy Includes */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Each Policy Template Includes:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Enterprise Version:</strong> Comprehensive policy for larger organizations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>SMB Version:</strong> Streamlined policy for small-medium businesses</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Implementation Workbook:</strong> Step-by-step customization guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Quick Reference Guide:</strong> One-page summary for daily use</span>
                </li>
              </ul>
            </div>

            {/* Upgrade Option */}
            <div className="bg-slate-50 border-l-4 border-blue-600 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Need More Than Policies?</h3>
              <p className="text-slate-600 mb-4">
                The Complete Bundle includes these policies PLUS all documents and evidence explanations for maximum savings (${bundle.savings.toFixed(2)} more in savings).
              </p>
              <a 
                href="/products/complete-bundle"
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
                View Complete Bundle →
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Purchase Card */}
            <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-600 mb-2">Individual Policies Cost:</div>
                <div className="text-2xl line-through text-slate-400">${bundle.originalPrice.toFixed(2)}</div>
                <div className="text-4xl font-bold text-slate-900 my-4">${bundle.price.toFixed(2)}</div>
                <div className="text-xl font-semibold text-emerald-600">
                  Save ${bundle.savings.toFixed(2)}
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Total Policies:</span>
                  <span className="font-semibold">{bundle.productCount}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Cost Per Policy:</span>
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
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-center transition-colors text-lg mb-4"
              >
                <Download className="w-5 h-5 inline mr-2" />
                Get Policy Bundle
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
                  <Shield className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
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