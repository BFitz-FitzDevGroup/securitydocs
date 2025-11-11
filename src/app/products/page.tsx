"use client"
import React, { useState } from 'react';
import { Check, Shield, FileText, ArrowRight, Users, Clock, Zap } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { bundles } from '@/lib/products';

const ProductCatalog = () => {
  const [selectedBundle, setSelectedBundle] = useState('complete');

  const individualProducts = [
    {
      name: 'Information Security Policy',
      price: 14.95,
      originalPrice: 19.99,
      category: 'Policy',
      description: 'Comprehensive security policy template covering all SOC 2 requirements.'
    },
    {
      name: 'Incident Response Policy',
      price: 14.95,
      originalPrice: 19.99,
      category: 'Policy',
      description: 'Complete incident response procedures and documentation templates.'
    },
    {
      name: 'Vendor Management Policy',
      price: 14.95,
      originalPrice: 19.99,
      category: 'Policy',
      description: 'Third-party vendor risk assessment and management procedures.'
    },
    {
      name: 'CC1.1 Evidence Explanation',
      price: 14.95,
      originalPrice: 19.99,
      category: 'Evidence',
      description: 'Detailed explanation of control environment evidence requirements.'
    },
    {
      name: 'CC2.1 Evidence Explanation',
      price: 14.95,
      originalPrice: 19.99,
      category: 'Evidence',
      description: 'Communication and monitoring control evidence guidance.'
    },
    {
      name: 'CC6.1 Evidence Explanation',
      price: 14.95,
      originalPrice: 19.99,
      category: 'Evidence',
      description: 'Logical access control evidence and testing procedures.'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                SOC 2 Compliance Templates
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Professional document templates and guidance to streamline your SOC 2 compliance journey. 
                Choose a bundle for maximum value, or build your own package.
              </p>
            </div>
          </div>
        </div>

        {/* Bundle Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Bundle Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                Recommended Bundles - Save Up to $600
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Choose Your SOC 2 Package
              </h2>
              <p className="text-lg text-slate-600">
                Most customers save time and money by choosing a complete bundle
              </p>
            </div>

            {/* Bundle Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {bundles.map((bundle) => {
                const isPopular = bundle.id === 'complete';
                const iconMap = {
                  complete: Shield,
                  evidence: BookOpen, 
                  policy: FileText,
                  document: BookOpen
                };
                const IconComponent = iconMap[bundle.id as keyof typeof iconMap] || Shield;
                
                const colorMap = {
                  complete: 'blue',
                  evidence: 'emerald',
                  policy: 'amber', 
                  document: 'slate'
                };
                const color = colorMap[bundle.id as keyof typeof colorMap] || 'slate';
                
                return (
                  <div 
                    key={bundle.id}
                    className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 ${
                      isPopular ? 'border-blue-500 shadow-lg scale-105' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Popular Badge */}
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-${color}-100 rounded-full mb-4`}>
                        <IconComponent className={`w-8 h-8 text-${color}-600`} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{bundle.name}</h3>
                      <p className="text-slate-600 mb-4">{bundle.description}</p>
                      
                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-4xl font-bold text-slate-900">${bundle.price}</span>
                          <span className="text-lg text-slate-500 line-through">${bundle.originalPrice}</span>
                        </div>
                        <div className="text-emerald-600 font-medium">
                          Save ${bundle.savings.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 text-center">{bundle.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {bundle.includes.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                      isPopular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : color === 'emerald' 
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : color === 'amber'
                            ? 'bg-amber-600 hover:bg-amber-700 text-white'
                            : 'bg-slate-600 hover:bg-slate-700 text-white'
                    }`}>
                      Get {bundle.name}
                    </button>

                    {/* Trust indicators */}
                    <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        Instant Download
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        3-Download Limit
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bundle Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Choose a Bundle?
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Save Time</h4>
                  <p className="text-slate-600">Get everything you need in one purchase. No guessing what youyou'reapos;re missing.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Save Money</h4>
                  <p className="text-slate-600">Bundle pricing saves you $95-$600 compared to buying individually.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Complete Coverage</h4>
                  <p className="text-slate-600">Ensure you have all required policies and evidence for SOC 2 compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Products Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Or Build Your Own Package
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Need specific documents? Browse our individual templates below.
              </p>
              
              {/* Bundle Upsell */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-2xl mx-auto mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <p className="text-amber-800 font-medium mb-2">
                  💡 Smart Tip: Most customers need 10+ documents
                </p>
                <p className="text-amber-700 text-sm">
                  At $14.95 each, you'll spend $149+ anyway. Save time and money with our Complete Bundle and get all 81 templates and explanations for just $549.95!
                </p>
              </div>
            </div>

            {/* Individual Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {individualProducts.map((product, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">${product.price}</div>
                      <div className="text-sm text-slate-500 line-through">${product.originalPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                  
                  <button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className="text-center mt-12">
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-3 rounded-lg font-medium transition-colors">
                View All Individual Templates
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get SOC 2 Compliant?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Used by companies seeking SOC 2 compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Complete Bundle - $549.95
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Browse Individual Templates
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Instant Download
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                3-Download Limit
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Email Support Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductCatalog;