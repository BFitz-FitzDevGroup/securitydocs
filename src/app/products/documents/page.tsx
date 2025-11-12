"use client";

import React from 'react';
import { FileText, Check, Package } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getProductsByType, getBundle } from '@/lib/products';

const DocumentsPage = () => {
  const documents = getProductsByType('document');
  const documentBundle = getBundle('document');

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/products' },
    { label: 'Documents', href: '/products/documents' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-lg mb-4">
            <FileText className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            SOC 2 Document Templates & Forms
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Essential documentation templates that provide evidence of your SOC 2 controls in action. 
            Each template includes the document itself plus detailed usage instructions.
          </p>
        </div>

        {/* Document Bundle Upsell */}
        {documentBundle && (
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-8 mb-12">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-sm font-medium text-slate-700 uppercase tracking-wide">Best Value</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Get All {documents.length} Documents in the Document Bundle
                </h2>
                <p className="text-slate-600 mb-6">
                  Save ${documentBundle.savings.toFixed(2)} by getting all document templates together. 
                  Complete documentation toolkit for SOC 2 compliance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {documentBundle.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-8 text-right">
                <div className="mb-4">
                  <div className="text-sm text-slate-600 mb-1">Individual Documents:</div>
                  <div className="text-lg text-slate-900 line-through">${documentBundle.originalPrice.toFixed(2)}</div>
                  <div className="text-3xl font-bold text-emerald-600">${documentBundle.price.toFixed(2)}</div>
                  <div className="text-sm text-emerald-600 font-medium">Save ${documentBundle.savings.toFixed(2)}</div>
                </div>
                <a
                  href={documentBundle.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Document Bundle
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Individual Documents */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Individual Document Templates</h2>
          <p className="text-slate-600 mb-6">
            Browse all {documents.length} document templates available individually.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.slug}`}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-emerald-300 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">${product.price.toFixed(2)}</div>
                  {product.originalPrice > product.price && (
                    <div className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
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

        {/* Why Choose Our Documents */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Why Choose Our Document Templates?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Ready to Use</h3>
              <p className="text-sm text-slate-600">
                Professional formatting with clear fillable fields
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Usage Instructions</h3>
              <p className="text-sm text-slate-600">
                Step-by-step guidance for completing each document
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                <Package className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Audit-Ready</h3>
              <p className="text-sm text-slate-600">
                Designed to meet auditor documentation expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DocumentsPage;
