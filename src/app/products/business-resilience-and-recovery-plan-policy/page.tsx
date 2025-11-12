"use client";

import React from 'react';
import { Check, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { BundleUpsell } from '@/components/ecommerce/BundleUpsell';
import { PackageUpsell } from '@/components/ecommerce/PackageUpsell';
import { IndividualPurchase } from '@/components/ecommerce/IndividualPurchase';
import { RelatedProducts } from '@/components/ecommerce/RelatedProducts';
import { getProduct, getRelatedProducts } from '@/lib/products';

const BusinessResilienceAndRecoveryPlanPolicyPage = () => {
  const [showFullContent, setShowFullContent] = React.useState(false);

  // Get product data
  const product = getProduct('business-resilience-and-recovery-plan-policy');
  const relatedProducts = getRelatedProducts('business-resilience-and-recovery-plan-policy');

  // Handle product not found
  if (!product) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
            <p className="text-slate-600">The requested product could not be found.</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/products' },
    { label: product.name, href: `/products/${product.slug}` }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                  Policy Template
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-medium">
                  SOC 2 Compliant
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Business Resilience and Recovery Plan
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Comprehensive disaster recovery and business continuity plan template. Includes enterprise, SMB, implementation workbook, and quick reference guide.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">What's Included in This Template</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Complete Policy Document</h3>
                    <p className="text-sm text-slate-600">Professional Microsoft Word template ready to customize</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Implementation Guidance</h3>
                    <p className="text-sm text-slate-600">Step-by-step instructions for rolling out the policy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Customizable Parameters</h3>
                    <p className="text-sm text-slate-600">Bracketed placeholders for your specific requirements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOC 2 Compliance Coverage */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">SOC 2 Compliance Coverage</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900 mb-3">Trust Service Criteria Addressed:</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>CC3.2:</strong> COSO Principle 10: The entity evaluates risks from external sources</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>CC5.3:</strong> COSO Principle 17: The entity deploys policies and procedures</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>CC7.5:</strong> The entity identifies, develops, and implements activities to recover from identified security incidents</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Preview */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-slate-900">Template Preview</h2>
                <button 
                  onClick={() => setShowFullContent(!showFullContent)}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showFullContent ? 'Show Less' : 'Show More'}
                  {showFullContent ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                </button>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Business Resilience and Recovery Plan - Example Company</h3>
                  <p className="text-slate-700 mb-4">
                    <strong>Document Owner:</strong> [Your Organization]<br/>
                    <strong>Effective Date:</strong> [Customizable Field]<br/>
                    <strong>Review Cycle:</strong> Annual
                  </p>
                  
                  <h4 className="font-medium text-slate-900 mb-2">Template Structure</h4>
                  <p className="text-slate-700 mb-4">
                    Professional template with comprehensive coverage of all requirements. Includes customizable sections for your organization's specific needs.
                  </p>
                  
                  {showFullContent && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="font-medium text-slate-900 mb-3">Key Features:</h4>
                      <div className="bg-white rounded p-4 border border-slate-200">
                        <ul className="space-y-2 text-slate-700 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>Recovery procedures</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>Backup protocols</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>Testing requirements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>Professional policy template</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>Customizable for your organization</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Related Products */}
            <RelatedProducts products={relatedProducts} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Bundle Upsells */}
            <BundleUpsell product={product} />
            
            {/* Package Upsell (for policies only) */}
            <PackageUpsell product={product} />
            
            {/* Individual Purchase */}
            <IndividualPurchase product={product} />

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

export default BusinessResilienceAndRecoveryPlanPolicyPage;
