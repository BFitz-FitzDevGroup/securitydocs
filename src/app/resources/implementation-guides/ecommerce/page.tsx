"use client"
import React, { useState } from 'react';
import { Check, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, ChevronDown, ChevronRight, Lightbulb, Globe, ShoppingCart, CreditCard, TrendingUp, Database, Settings, CheckCircle, BarChart, Zap, Eye, UserCheck, Calendar } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const EcommerceImplementationGuidePage = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Implementation Guides', href: '/resources/implementation-guides' },
    { label: 'E-commerce Platforms', href: '/resources/implementation-guides/ecommerce' }
  ];

  interface GuideSection {
    id: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
  }

  const GuideSection: React.FC<GuideSection> = ({ id, title, icon: Icon, children }) => {
    const isExpanded = expandedSections.has(id);

    return (
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center">
            <Icon className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-slate-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-slate-500" />
          )}
        </button>
        {isExpanded && (
          <div className="px-6 pb-6">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            E-commerce Platform Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 for E-commerce Platforms
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Specialized guide for e-commerce platforms and payment processing with focus on 
            Security + Processing Integrity + Availability and PCI DSS alignment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#overview" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Implementation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/resources/soc2-checklist" 
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center"
            >
              Use Checklist
              <CheckCircle className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Reference */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">E-commerce SOC 2 Quick Reference</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-purple-800">Recommended Criteria:</strong>
                  <p className="text-slate-700">Security + Processing Integrity + Availability</p>
                </div>
                <div>
                  <strong className="text-purple-800">Typical Timeline:</strong>
                  <p className="text-slate-700">6-12 months</p>
                </div>
                <div>
                  <strong className="text-purple-800">Key Focus:</strong>
                  <p className="text-slate-700">Payment security, transaction integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PCI DSS Integration Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <CreditCard className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Important: PCI DSS Integration</h3>
              <p className="text-slate-700 mb-3">
                E-commerce platforms handling payment card data need both SOC 2 and PCI DSS compliance. 
                This guide shows how to align requirements and leverage shared controls.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-slate-900">SOC 2 Provides:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• Comprehensive security framework</li>
                    <li>• Third-party validation</li>
                    <li>• Customer trust and vendor requirements</li>
                    <li>• Broader operational controls</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">PCI DSS Requires:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• Specific cardholder data protection</li>
                    <li>• Network segmentation requirements</li>
                    <li>• Vulnerability management</li>
                    <li>• Regular security testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <GuideSection id="overview" title="E-commerce Platform Overview" icon={Target}>
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                E-commerce platforms have unique SOC 2 requirements driven by payment processing, 
                customer data handling, seasonal traffic variations, and often multi-merchant environments 
                that require sophisticated data isolation and processing integrity controls.
              </p>

              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why Security + Processing Integrity + Availability for E-commerce</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-purple-900 mb-2">Security:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Payment card data protection</li>
                      <li>• Customer personal information</li>
                      <li>• Merchant account security</li>
                      <li>• API and integration security</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-900 mb-2">Processing Integrity:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Accurate order processing</li>
                      <li>• Payment transaction accuracy</li>
                      <li>• Inventory management integrity</li>
                      <li>• Tax calculation accuracy</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-900 mb-2">Availability:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Peak season handling (Black Friday)</li>
                      <li>• 24/7 e-commerce operations</li>
                      <li>• Global customer base support</li>
                      <li>• Mobile commerce reliability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">E-commerce Platform Scope Definition</h4>
                <p className="text-slate-700 text-sm mb-3">
                  E-commerce scope typically includes customer-facing and payment processing systems:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Core E-commerce (Must Include):</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• E-commerce platform and storefront</li>
                      <li>• Payment processing systems</li>
                      <li>• Customer account management</li>
                      <li>• Order management systems</li>
                      <li>• Inventory management</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Supporting Systems:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Customer support platforms</li>
                      <li>• Fraud detection systems</li>
                      <li>• Analytics and reporting</li>
                      <li>• Mobile applications</li>
                      <li>• Third-party integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="payment-security" title="Payment Security & PCI DSS Alignment" icon={CreditCard}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Payment security is the cornerstone of e-commerce SOC 2 compliance. Aligning 
                SOC 2 controls with PCI DSS requirements creates comprehensive protection for 
                cardholder data while meeting broader security objectives.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Critical: Cardholder Data Environment (CDE)</h4>
                    <p className="text-slate-700 mb-3">
                      The Cardholder Data Environment must be clearly defined and protected with 
                      enhanced controls that exceed standard SOC 2 requirements.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">CDE Components:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Payment processing servers</li>
                          <li>• Databases storing cardholder data</li>
                          <li>• Web servers accepting payments</li>
                          <li>• Network infrastructure in payment flow</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Enhanced Controls:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Network segmentation and isolation</li>
                          <li>• Enhanced access controls and MFA</li>
                          <li>• Continuous monitoring and logging</li>
                          <li>• Regular security testing and scanning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Tokenization and Payment Processing</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Modern e-commerce platforms should minimize PCI scope through tokenization:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use payment processors that provide tokenization services (Stripe, PayPal, Square)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implement point-to-point encryption (P2PE) for card data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Store only tokens, never actual card numbers in your systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Validate that tokens cannot be reverse-engineered to original data</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implement regular token lifecycle management and rotation</span>
                  </li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="processing-integrity" title="E-commerce Processing Integrity" icon={TrendingUp}>
            <div className="space-y-6">
              <p className="text-slate-700">
                E-commerce platforms must ensure accurate processing of orders, payments, 
                inventory updates, and customer data across complex, often multi-tenant environments.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">Order Processing Integrity Framework</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Order Lifecycle Controls</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Input validation for all order data (quantities, prices, customer info)</li>
                      <li>• Inventory availability verification before order confirmation</li>
                      <li>• Tax calculation accuracy based on location and product type</li>
                      <li>• Shipping cost calculation validation</li>
                      <li>• Discount and coupon code verification</li>
                      <li>• Payment authorization before order processing</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Financial Transaction Accuracy</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Payment amount verification against order total</li>
                      <li>• Currency conversion accuracy (for international sales)</li>
                      <li>• Refund and chargeback processing accuracy</li>
                      <li>• Settlement amount reconciliation</li>
                      <li>• Financial reporting data integrity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="seasonal-availability" title="Seasonal Traffic & High Availability" icon={Zap}>
            <div className="space-y-6">
              <p className="text-slate-700">
                E-commerce platforms face extreme seasonal variations (Black Friday, Cyber Monday, 
                holiday seasons) that require sophisticated capacity planning and availability controls.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Critical: Peak Traffic Management</h4>
                    <p className="text-slate-700 mb-3">
                      E-commerce platforms can see 10-50x normal traffic during peak periods. 
                      Failure during these times results in significant revenue loss and customer dissatisfaction.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Capacity Planning:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Historical traffic analysis and forecasting</li>
                          <li>• Auto-scaling configuration and testing</li>
                          <li>• Load balancing optimization</li>
                          <li>• Database performance tuning</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Performance Monitoring:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Real-time performance dashboards</li>
                          <li>• Application performance monitoring (APM)</li>
                          <li>• Database query optimization</li>
                          <li>• Content delivery network (CDN) optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="customer-data" title="Customer Data Management & Privacy" icon={Users}>
            <div className="space-y-6">
              <p className="text-slate-700">
                E-commerce platforms collect extensive customer data including personal information, 
                purchase history, and behavioral data that requires comprehensive protection and 
                privacy controls.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">E-commerce Data Classification</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Highly Sensitive Data</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Payment card information (PAN, CVV, expiration dates)</li>
                      <li>• Bank account and ACH information</li>
                      <li>• Social Security Numbers (for tax reporting)</li>
                      <li>• Driver's license numbers (for age verification)</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Sensitive Personal Information</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Customer names, addresses, phone numbers</li>
                      <li>• Email addresses and communication preferences</li>
                      <li>• Purchase history and transaction details</li>
                      <li>• Browsing behavior and analytics data</li>
                      <li>• Account credentials and authentication data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">Privacy Control Implementation</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Consent Management</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Granular consent collection and tracking</li>
                      <li>• Cookie consent and preference management</li>
                      <li>• Marketing communication opt-in/opt-out</li>
                      <li>• Data processing purpose specification</li>
                      <li>• Consent withdrawal mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Data Subject Rights</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Data portability and export capabilities</li>
                      <li>• Right to deletion implementation</li>
                      <li>• Data access request processing</li>
                      <li>• Data correction and rectification</li>
                      <li>• Processing restriction mechanisms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="evidence-collection" title="E-commerce Evidence Collection" icon={FileText}>
            <div className="space-y-6">
              <p className="text-slate-700">
                E-commerce platforms need specific evidence to demonstrate SOC 2 compliance, 
                particularly around payment processing, transaction integrity, and seasonal readiness.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-3">Security Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>PCI DSS compliance certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Payment processor security attestations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Network segmentation documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vulnerability assessment reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fraud detection system logs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-3">Processing Integrity Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Order processing accuracy reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Payment reconciliation documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Inventory management controls testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tax calculation validation reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data validation and error handling logs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Availability Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Peak season performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Load testing documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Uptime monitoring and SLA reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Disaster recovery test results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capacity planning documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </GuideSection>
        </div>

        {/* Implementation Roadmap */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">E-commerce Implementation Roadmap</h2>
          <p className="text-slate-700 mb-6">
            Follow this timeline to implement SOC 2 controls for your e-commerce platform:
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-purple-600 mb-2">Months 1-3</div>
              <h4 className="font-semibold text-slate-900 mb-2">Foundation & PCI Alignment</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Define scope (include payment systems)</li>
                <li>• PCI DSS gap analysis</li>
                <li>• Payment security controls</li>
                <li>• Policy development</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-green-600 mb-2">Months 4-6</div>
              <h4 className="font-semibold text-slate-900 mb-2">Processing & Security Controls</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Order processing controls</li>
                <li>• Payment integrity validation</li>
                <li>• Data protection implementation</li>
                <li>• Monitoring and logging setup</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-blue-600 mb-2">Months 7-9</div>
              <h4 className="font-semibold text-slate-900 mb-2">Availability & Performance</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Load testing and optimization</li>
                <li>• Peak season preparation</li>
                <li>• Disaster recovery testing</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-amber-600 mb-2">Months 10-12</div>
              <h4 className="font-semibold text-slate-900 mb-2">Evidence & Audit</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Evidence collection</li>
                <li>• Internal assessment</li>
                <li>• Auditor engagement</li>
                <li>• SOC 2 examination</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources and Tools */}
        <div className="mt-8 bg-slate-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">E-commerce Templates & Resources</h3>
          <p className="text-slate-700 mb-6">
            Specialized templates for e-commerce platforms, including payment processing controls 
            and processing integrity documentation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <CreditCard className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Payment Security Policies</h4>
              <p className="text-sm text-slate-600 mb-4">PCI DSS aligned policies and procedures</p>
              <a href="/products/policies" className="text-purple-600 hover:text-purple-700 font-medium">
                View Policies →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Processing Integrity Controls</h4>
              <p className="text-sm text-slate-600 mb-4">Order and transaction accuracy documentation</p>
              <a href="/products/documents" className="text-green-600 hover:text-green-700 font-medium">
                View Documents →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Complete E-commerce Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Everything needed for e-commerce SOC 2</p>
              <a href="/products/complete-bundle" className="text-blue-600 hover:text-blue-700 font-medium">
                Get Everything →
              </a>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Explore Other Implementation Guides</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/resources/implementation-guides/saas-cloud-services" className="text-purple-600 hover:text-purple-700 text-sm">
              SaaS/Cloud Services Guide →
            </a>
            <a href="/resources/implementation-guides/financial" className="text-purple-600 hover:text-purple-700 text-sm">
              Financial Services Guide →
            </a>
            <a href="/resources/implementation-guides/early-stage" className="text-purple-600 hover:text-purple-700 text-sm">
              Early-Stage Startup Guide →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EcommerceImplementationGuidePage;