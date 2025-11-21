"use client";

import React from 'react';
import { FileText, Check, Download, Package } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getBundle } from '@/lib/products';
import PrePurchaseNotice from '@/components/legal/PrePurchaseNotice';

export function DocumentBundleClient() {
  const bundle = getBundle('document');

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
    { label: bundle.name, href: `/products/document-bundle` }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Process Documentation
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                {bundle.name}
              </h1>
              
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Get all 22 essential SOC 2 document templates in one comprehensive package. These professionally written templates provide the operational documentation auditors need to verify your controls are implemented properly. Save ${bundle.savings.toFixed(2)} compared to purchasing documents individually.
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">22 Complete Document Templates</h2>
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

            {/* Why Choose Document Bundle */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why Documents Matter</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Operational Proof</h3>
                    <p className="text-slate-600">Policies state what you do. Documents prove you're actually doing it. Auditors need both.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Ready-to-Use Forms</h3>
                    <p className="text-slate-600">Access request forms, change management templates, incident response procedures - all the operational documents auditors expect.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-lg p-3 mr-4">
                    <Package className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Complete Coverage</h3>
                    <p className="text-slate-600">All 22 documents address SOC 2 operational requirements. No gaps in your documentation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Categories */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Document Categories Included:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Access Management</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Access request forms</li>
                    <li>• Access review templates</li>
                    <li>• Termination checklists</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Change Management</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Change request forms</li>
                    <li>• Approval workflows</li>
                    <li>• Testing documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Incident Response</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Incident forms</li>
                    <li>• Response procedures</li>
                    <li>• Post-mortem templates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Security Operations</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Network diagrams</li>
                    <li>• Asset inventories</li>
                    <li>• Backup procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Upgrade Option */}
            <div className="bg-slate-50 border-l-4 border-emerald-600 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Need the Complete Solution?</h3>
              <p className="text-slate-600 mb-4">
                The Complete Bundle includes these documents PLUS all policies and evidence explanations for maximum savings.
              </p>
              <a 
                href="/products/complete-bundle"
                className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
              >
                View Complete Bundle →
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Purchase Card */}
            <div className="bg-white border-2 border-emerald-600 rounded-lg p-6 shadow-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-600 mb-2">Individual Documents Cost:</div>
                <div className="text-2xl line-through text-slate-400">${bundle.originalPrice.toFixed(2)}</div>
                <div className="text-4xl font-bold text-slate-900 my-4">${bundle.price.toFixed(2)}</div>
                <div className="text-xl font-semibold text-emerald-600">
                  Save ${bundle.savings.toFixed(2)}
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Total Documents:</span>
                  <span className="font-semibold">{bundle.productCount}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-slate-600">Cost Per Document:</span>
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
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-lg font-bold text-center transition-colors text-lg mb-4"
              >
                <Download className="w-5 h-5 inline mr-2" />
                Get Document Bundle
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
                  <FileText className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
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