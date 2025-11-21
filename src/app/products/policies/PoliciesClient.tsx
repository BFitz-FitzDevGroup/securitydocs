"use client";

import React from 'react';
import { Shield, Check, Package } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getProductsByType, getBundle } from '@/lib/products';

export function PoliciesClient() {
  const policies = getProductsByType('policy');
  const policyBundle = getBundle('policy');

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/products' },
    { label: 'Policies', href: '/products/policies' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            SOC 2 Policy Templates
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional security and compliance policies that form the foundation of your SOC 2 program. 
            Each policy includes enterprise and SMB versions, implementation workbook, and quick reference guide.
          </p>
        </div>

        {/* Policy Bundle Upsell */}
        {policyBundle && (
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 rounded-lg p-8 mb-12">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-slate-700 uppercase tracking-wide">Best Value</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Get All {policies.length} Policies in the Policy Bundle
                </h2>
                <p className="text-slate-600 mb-6">
                  Save ${policyBundle.savings.toFixed(2)} by getting all policy templates together. 
                  Includes every policy you need for SOC 2 compliance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {policyBundle.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-8 text-right">
                <div className="mb-4">
                  <div className="text-sm text-slate-600 mb-1">Individual Policies:</div>
                  <div className="text-lg text-slate-900 line-through">${policyBundle.originalPrice.toFixed(2)}</div>
                  <div className="text-3xl font-bold text-emerald-600">${policyBundle.price.toFixed(2)}</div>
                  <div className="text-sm text-emerald-600 font-medium">Save ${policyBundle.savings.toFixed(2)}</div>
                </div>
                <a
                  href={policyBundle.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Policy Bundle
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Individual Policies */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Individual Policy Templates</h2>
          <p className="text-slate-600 mb-6">
            Browse all {policies.length} policy templates available individually.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.slug}`}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">${product.price.toFixed(2)}</div>
                  {product.originalPrice > product.price && (
                    <div className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-3">
                {product.description.substring(0, 150)}...
              </p>
              {product.soc2Criteria.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {product.soc2Criteria.slice(0, 3).map((criteria) => (
                    <span
                      key={criteria}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                      {criteria}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Why Choose Our Policies */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Why Choose Our Policy Templates?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">SOC 2 Compliant</h3>
              <p className="text-sm text-slate-600">
                Aligned with Trust Service Criteria and auditor expectations
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Four Versions Included</h3>
              <p className="text-sm text-slate-600">
                Enterprise, SMB, Implementation Workbook, and Quick Reference
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                <Package className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Real-World Experience</h3>
              <p className="text-sm text-slate-600">
                Built from actual SOC 2 compliance implementations
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};