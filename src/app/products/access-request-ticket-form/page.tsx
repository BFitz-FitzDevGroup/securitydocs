"use client"
import React, { useState } from 'react';
import { Check, Shield, Star, Download, FileText, ArrowRight, Users, Clock, AlertCircle, ChevronDown, ChevronUp, ClipboardList, UserPlus } from 'lucide-react';

const AccessRequestDocumentPage = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-slate-600">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:text-blue-600">Templates</a>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Access Request Form</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full font-medium">
                  Document Template
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                  Access Management
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Access Request Ticket Form Template
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Professional access request form template that standardizes system access requests and ensures proper approval workflows. 
                Supports SOC 2 access control requirements with built-in approval tracking and documentation.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">What's Included in This Template</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Standardized Request Form</h3>
                    <p className="text-sm text-slate-600">Complete form structure for capturing all required access request information</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Approval Workflow</h3>
                    <p className="text-sm text-slate-600">Manager approval section with signature and contact information fields</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Access Details Table</h3>
                    <p className="text-sm text-slate-600">Structured format for specifying systems, access levels, and timeframes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Implementation Instructions</h3>
                    <p className="text-sm text-slate-600">Step-by-step guidance for completing and processing access requests</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOC 2 Compliance Coverage */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">SOC 2 Compliance Support</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Access Control Documentation:</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-amber-600 mr-2" />
                        <strong>CC6.2:</strong> Supports proper creation and management of access credentials
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-amber-600 mr-2" />
                        <strong>Audit Trail:</strong> Creates documented approval process for access requests
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-amber-600 mr-2" />
                        <strong>Authorization:</strong> Ensures proper management approval before access is granted
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
              
              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-amber-500">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Access Request Ticket Form - Example Company</h3>
                  
                  <h4 className="font-medium text-slate-900 mb-2">Form Structure & Components</h4>
                  <p className="text-slate-700 mb-4">
                    Professional request form that captures all necessary information for secure access provisioning 
                    and maintains compliance audit trails.
                  </p>
                  
                  <h4 className="font-medium text-slate-900 mb-2">Key Form Sections:</h4>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span><strong>Requestor Information:</strong> Employee details, job title, and contact information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span><strong>Access Requested:</strong> System/resource, access level, reason, and timeframe</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span><strong>Business Justification:</strong> Description of tasks requiring access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span><strong>Manager Approval:</strong> Supervisor authorization with signature and contact details</span>
                    </li>
                  </ul>
                  
                  {showFullContent && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="font-medium text-slate-900 mb-2">Template Features:</h4>
                      <div className="bg-white rounded p-4 border border-slate-200">
                        <ul className="space-y-2 text-slate-700 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Access Matrix Table:</strong> Pre-formatted table for multiple system access requests</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Compliance Guidelines:</strong> Built-in rules for least privilege and proper authorization</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Processing Instructions:</strong> Complete guidance for IT teams handling requests</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Digital & Paper Ready:</strong> Works with electronic workflows or physical signatures</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Audit Documentation:</strong> Structured for compliance evidence collection</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">How to Use This Template</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</div>
                  <div>
                    <h3 className="font-medium text-slate-900">Customize for Your Organization</h3>
                    <p className="text-slate-600">Replace company branding and adjust form fields to match your specific systems and approval processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</div>
                  <div>
                    <h3 className="font-medium text-slate-900">Implement Workflow</h3>
                    <p className="text-slate-600">Deploy through your ticketing system, email, or intranet portal as specified in the instructions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</div>
                  <div>
                    <h3 className="font-medium text-slate-900">Train and Document</h3>
                    <p className="text-slate-600">Use the included instructions to train staff and maintain consistent access request documentation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Templates</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-slate-900">Access Control Policy</h3>
                    <span className="text-sm text-slate-500">$14.95</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">The policy framework that governs when and how access requests should be made.</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Template →</button>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-slate-900">Access Review Ticket Form</h3>
                    <span className="text-sm text-slate-500">$14.95</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Companion form for conducting periodic reviews of access granted through this request process.</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Template →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Bundle Upsell */}
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-amber-500 mr-2" />
                <span className="text-sm font-medium text-slate-700">Most Popular Choice</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Get the Complete Bundle</h3>
              <p className="text-slate-600 mb-4">
                This template is included in our Complete Bundle with all 80+ templates and explanations.
              </p>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">Individual templates (10+):</span>
                  <span className="font-medium text-slate-900">$149+</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">Complete Bundle:</span>
                  <span className="font-bold text-emerald-600">$549.95</span>
                </div>
                <div className="border-t border-slate-200 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">You Save:</span>
                    <span className="font-bold text-emerald-600">$600+</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold mb-3 transition-colors">
                Get Complete Bundle - $549.95
              </button>
              
              <ul className="text-sm text-slate-600 space-y-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-600 mr-2" />
                  All 15 Policy Templates
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-600 mr-2" />
                  All 22 Document Templates
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-600 mr-2" />
                  All 40 Evidence Explanations
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-600 mr-2" />
                  SOC 2 Control Mapping
                </li>
              </ul>
            </div>

            {/* Document Bundle Alternative */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Need Process Forms?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Get all 22 document templates for complete process documentation
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-600">Individual documents (22):</span>
                <span className="font-medium text-slate-900">$329+</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-600">Document Bundle:</span>
                <span className="font-bold text-emerald-600">$199.95</span>
              </div>
              
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors">
                Get Document Bundle - Save $129
              </button>
            </div>

            {/* Individual Purchase */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Individual Purchase</h3>
              
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-slate-900">$14.95</span>
                <span className="text-lg text-slate-500 line-through ml-2">$19.99</span>
              </div>
              
              <button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 px-4 rounded-lg font-semibold mb-4 transition-colors">
                Buy This Template
              </button>
              
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center">
                  <Download className="w-4 h-4 text-slate-500 mr-2" />
                  Instant download
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-slate-500 mr-2" />
                  3-download limit
                </li>
                <li className="flex items-center">
                  <FileText className="w-4 h-4 text-slate-500 mr-2" />
                  Microsoft Word format
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 text-slate-500 mr-2" />
                  Email support included
                </li>
              </ul>
            </div>

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
                  <span>Used by companies seeking SOC 2 compliance</span>
                </li>
                <li className="flex items-start">
                  <ClipboardList className="w-4 h-4 text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ready-to-use forms that save development time</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-4 h-4 text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email support for implementation questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessRequestDocumentPage;