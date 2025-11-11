"use client"
import React, { useState } from 'react';
import { Check, Shield, FileText, ArrowRight, Users, Clock, AlertCircle, ChevronDown, ChevronUp, Eye, CheckCircle } from 'lucide-react';

const AccessReviewEvidenceExplanationPage = () => {
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
            <span className="text-slate-900">Access Review Evidence</span>
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
                <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-medium">
                  Evidence Explanation
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                  Audit Preparation
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Access Review Completed - Evidence Explanation
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Clear guidance on demonstrating completed access reviews for SOC 2 Trust Service Criteria CC6.2, CC6.3, and CC6.4. 
                Learn what auditors expect to see and how to document your access review process effectively.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">What This Evidence Explanation Covers</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Why Access Reviews Matter</h3>
                    <p className="text-sm text-slate-600">Understanding the compliance importance and risk mitigation benefits</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Documentation Requirements</h3>
                    <p className="text-sm text-slate-600">Specific evidence auditors need to see for compliance validation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Process Implementation</h3>
                    <p className="text-sm text-slate-600">Step-by-step guidance for establishing repeatable access review procedures</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Audit Preparation Tips</h3>
                    <p className="text-sm text-slate-600">Best practices for organizing and presenting evidence to auditors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOC 2 Compliance Coverage */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">SOC 2 Compliance Coverage</h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Trust Service Criteria Addressed:</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-emerald-600 mr-2" />
                        <strong>CC6.2:</strong> Access credentials are properly created, managed, and removed
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-emerald-600 mr-2" />
                        <strong>CC6.3:</strong> Network access is restricted through security controls
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-emerald-600 mr-2" />
                        <strong>CC6.4:</strong> Physical access to facilities and computing resources is restricted
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-slate-900">Evidence Explanation Preview</h2>
                <button 
                  onClick={() => setShowFullContent(!showFullContent)}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showFullContent ? 'Show Less' : 'Show More'}
                  {showFullContent ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                </button>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-emerald-500">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Access Review Evidence Requirements</h3>
                  
                  <h4 className="font-medium text-slate-900 mb-2">Understanding Access Reviews</h4>
                  <p className="text-slate-700 mb-4">
                    This explanation covers why regular access reviews are crucial for SOC 2 compliance, 
                    how they mitigate insider threats, and what specific evidence auditors expect to see.
                  </p>
                  
                  <h4 className="font-medium text-slate-900 mb-2">Key Areas Covered:</h4>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Mitigating insider threats through systematic access monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Maintaining principle of least privilege in dynamic environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Preventing privilege creep through regular review cycles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Meeting regulatory compliance requirements for access management</span>
                    </li>
                  </ul>
                  
                  {showFullContent && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="font-medium text-slate-900 mb-2">Evidence Documentation Guidance:</h4>
                      <div className="bg-white rounded p-4 border border-slate-200">
                        <ul className="space-y-2 text-slate-700 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Documentation Standards:</strong> Detailed requirements for review records, scope, and outcomes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Change Management:</strong> How to document access modifications resulting from reviews</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>System Reports:</strong> Leveraging access control system capabilities for evidence generation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Approval Workflows:</strong> Establishing proper sign-off and review validation processes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span><strong>Repeatability Framework:</strong> Creating systematic processes for ongoing compliance</span>
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
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">How to Use This Evidence Explanation</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</div>
                  <div>
                    <h3 className="font-medium text-slate-900">Understand the Requirements</h3>
                    <p className="text-slate-600">Learn why access reviews are critical and what auditors specifically look for during SOC 2 assessments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</div>
                  <div>
                    <h3 className="font-medium text-slate-900">Implement the Process</h3>
                    <p className="text-slate-600">Use the guidance to establish systematic access review procedures in your organization.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</div>
                  <div>
                    <h3 className="font-medium text-slate-900">Document and Prepare</h3>
                    <p className="text-slate-600">Follow the documentation standards to create audit-ready evidence for your SOC 2 examination.</p>
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
                  <p className="text-sm text-slate-600 mb-3">The policy framework that establishes access review requirements.</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Template →</button>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-slate-900">Access Review Ticket Form</h3>
                    <span className="text-sm text-slate-500">$14.95</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Standardized form template for conducting the access reviews described in this guidance.</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Template →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Bundle Upsell */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-amber-500 mr-2" />
                <span className="text-sm font-medium text-slate-700">Most Popular Choice</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Get the Complete Bundle</h3>
              <p className="text-slate-600 mb-4">
                This explanation is included in our Complete Bundle with all 80+ templates and explanations.
              </p>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">Individual explanations (10+):</span>
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

            {/* Evidence Bundle Alternative */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Need Audit Guidance?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Get all 40 evidence explanations for complete audit preparation
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-600">Individual explanations (40):</span>
                <span className="font-medium text-slate-900">$598+</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-600">Evidence Bundle:</span>
                <span className="font-bold text-emerald-600">$349.95</span>
              </div>
              
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors">
                Get Evidence Bundle - Save $248
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
                Buy This Explanation
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
                  <Shield className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Developed from real-world SOC 2 compliance experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Used by companies seeking SOC 2 compliance</span>
                </li>
                <li className="flex items-start">
                  <Eye className="w-4 h-4 text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Clear guidance on what auditors expect to see</span>
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

export default AccessReviewEvidenceExplanationPage;