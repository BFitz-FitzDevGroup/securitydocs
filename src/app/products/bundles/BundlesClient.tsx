"use client";

import React from 'react';
import { Package, Check, Shield, FileText, Download, Star } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getAllBundles } from '@/lib/products';

export function BundlesClient() {
  const bundles = getAllBundles();
  const completeBundle = bundles.find(b => b.id === 'complete');
  const categoryBundles = bundles.filter(b => b.id !== 'complete');

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/products' },
    { label: 'Bundles', href: '/products/bundles' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
            <Package className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            SOC 2 Template Bundles
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Save time and money with our comprehensive bundles. Get everything you need for SOC 2 compliance 
            at a significant discount compared to purchasing items individually.
          </p>
        </div>

        {/* Complete Bundle - Featured */}
        {completeBundle && (
          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-lg p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="bg-amber-500 text-white px-4 py-2 rounded-full font-semibold flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Most Popular
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Package className="w-8 h-8 mr-3" />
                <span className="text-sm font-medium uppercase tracking-wide">Complete Solution</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">{completeBundle.name}</h2>
              <p className="text-xl text-blue-50 mb-8 max-w-2xl">
                {completeBundle.description} - Everything you need in one comprehensive package.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">What's Included:</h3>
                  <ul className="space-y-2">
                    {completeBundle.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-center mb-4">
                    <div className="text-sm mb-2">Individual Items Would Cost:</div>
                    <div className="text-2xl line-through opacity-75">${completeBundle.originalPrice.toFixed(2)}</div>
                    <div className="text-5xl font-bold my-4">${completeBundle.price.toFixed(2)}</div>
                    <div className="text-xl font-semibold text-amber-300">
                      Save ${completeBundle.savings.toFixed(2)}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`/products/complete-bundle`}
                      className="block w-full bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-lg font-bold text-center transition-colors text-lg"
                    >
                      View Details
                    </a>
                    <a
                      href={completeBundle.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-center transition-colors text-lg"
                    >
                      Get Complete Bundle
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{completeBundle.productCount}</div>
                  <div className="text-sm text-blue-50">Total Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">${(completeBundle.savings / completeBundle.productCount).toFixed(0)}</div>
                  <div className="text-sm text-blue-50">Saved Per Item</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{Math.round((completeBundle.savings / completeBundle.originalPrice) * 100)}%</div>
                  <div className="text-sm text-blue-50">Total Discount</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Bundles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
            Or Choose a Category Bundle
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Need just one category? Save with our focused bundles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categoryBundles.map((bundle) => {
            const icon = bundle.id === 'policy' ? Shield : bundle.id === 'document' ? FileText : Download;
            const IconComponent = icon;
            const color = bundle.id === 'policy' ? 'blue' : bundle.id === 'document' ? 'emerald' : 'amber';
            
            return (
              <div key={bundle.id} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-${color}-100 rounded-lg mb-4`}>
                  <IconComponent className={`w-6 h-6 text-${color}-600`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{bundle.name}</h3>
                <p className="text-slate-600 mb-4">{bundle.description}</p>

                <div className="mb-6">
                  <ul className="space-y-2 text-sm">
                    {bundle.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={`w-4 h-4 text-${color}-600 mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Individual Items:</span>
                    <span className="text-slate-900 line-through">${bundle.originalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Bundle Price:</span>
                    <span className={`text-xl font-bold text-${color}-600`}>${bundle.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">You Save:</span>
                    <span className={`font-semibold text-${color}-600`}>${bundle.savings.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={`/products/${bundle.id}-bundle`}
                    className="block w-full bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                  >
                    View Details
                  </a>
                  <a
                    href={bundle.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full bg-${color}-600 hover:bg-${color}-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors`}
                  >
                    Get {bundle.name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Bundles */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Why Choose a Bundle?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Maximum Savings</h3>
              <p className="text-sm text-slate-600">
                Save hundreds compared to purchasing items individually
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Complete Coverage</h3>
              <p className="text-sm text-slate-600">
                Get everything you need without missing critical components
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Faster Implementation</h3>
              <p className="text-sm text-slate-600">
                Start your SOC 2 journey immediately with all materials ready
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Not sure which bundle is right for you?
          </p>
          <a
            href="/products"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Compare all bundles and individual templates →
          </a>
        </div>
      </div>
    </PageLayout>
  );
};