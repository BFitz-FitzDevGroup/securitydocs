"use client";

import React from 'react';
import { Package, Check, Shield, Star, Download } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getBundle } from '@/lib/products';
import PrePurchaseNotice from '@/components/legal/PrePurchaseNotice';

const CompleteBundlePage = () => {
  const bundle = getBundle('complete');

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
    { label: bundle.name, href: `/products/complete-bundle` }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Badge */}
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Most Popular - Best Value
            </div>

            {/* Product Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                {bundle.name}
              </h1>
              
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Get everything you need for SOC 2 compliance in one comprehensive package. The Complete Bundle includes all 15 policies, 22 documents, and 40 evidence explanations - plus our exclusive SOC 2 Control Mapping spreadsheet. Save ${bundle.savings.toFixed(2)} compared to purchasing items individually.
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">What's Included</h2>
              <div className="space-y-4">
                {bundle.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Complete Bundle */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why Choose the Complete Bundle?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Complete Coverage</h3>
                    <p className="text-slate-600">Every policy, document, and evidence explanation you need for SOC 2 compliance. No gaps, no surprises.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                    <Check className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Maximum Savings</h3>
                    <p className="text-slate-600">Save ${bundle.savings.toFixed(2)} compared to individual purchases - that's {Math.round((bundle.savings / bundle.originalPrice) * 100)}% off.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-lg p-3 mr-4">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Faster Implementation</h3>
                    <p className="text-slate-600">Start your SOC 2 journey immediately with all materials ready. No need to figure out what you're missing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">The Bottom Line</h3>
              <p className="text-slate-700 mb-4">
                Most companies pursuing SOC 2 end up needing all of these materials anyway. Why pay ${bundle.originalPrice.toFixed(2)} when you can get everything for ${bundle.price.toFixed(2)}? 
              </p>
              <p className="text-slate-700">
                This bundle includes {bundle.productCount} items - that's just ${(bundle.price / bundle.productCount).toFixed(2)} per item when you could pay $9.95-$14.95 each individually.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Purchase Card */}
            <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-600 mb-2">Individual Items Cost:</div>
                <div className="text-2xl line-through text-slate-400">${bundle.originalPrice.toFixed(2)}</div>
                <div className="text-4xl font-bold text-slate-900 my-4">${bundle.price.toFixed(2)}</div>
                <div className="text-xl font-semibold text-emerald-600">
                  Save ${bundle.savings.toFixed(2)}
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Total Items:</span>
                  <span className="font-semibold">{bundle.productCount}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Cost Per Item:</span>
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
                Get Complete Bundle
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

export default CompleteBundlePage;