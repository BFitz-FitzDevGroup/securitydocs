"use client"
import React, { useState } from 'react';
import { Shield, Download, AlertTriangle, CheckCircle, Users, FileText, ArrowRight, Lightbulb, AlertCircle, Clock, Target, Zap, BookOpen } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const VendorAssessmentGuidePage = () => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [scores, setScores] = useState<{[key: string]: number}>({});

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Vendor Assessment Guide', href: '/resources/vendor-assessment' }
  ];

  const riskLevels = [
    {
      level: 'Critical',
      color: 'red',
      description: 'Vendors with access to production systems or customer data',
      examples: ['Cloud infrastructure providers', 'Database hosting services', 'Payment processors', 'Customer support platforms'],
      requirements: ['SOC 2 Type II report required', 'Penetration testing evidence', 'Incident response procedures', 'Data processing agreements']
    },
    {
      level: 'High',
      color: 'amber',
      description: 'Vendors that process or store sensitive company data',
      examples: ['HR platforms', 'Financial software', 'Development tools with code access', 'Backup services'],
      requirements: ['SOC 2 Type I minimum', 'Security questionnaire completion', 'Regular security updates', 'Access control documentation']
    },
    {
      level: 'Medium',
      color: 'blue',
      description: 'Vendors with limited access to internal systems',
      examples: ['Marketing tools', 'Analytics platforms', 'Communication tools', 'Project management software'],
      requirements: ['Basic security questionnaire', 'Privacy policy review', 'Terms of service analysis', 'Data location verification']
    },
    {
      level: 'Low',
      color: 'emerald',
      description: 'Vendors with minimal security impact',
      examples: ['Website themes', 'Stock photo services', 'Documentation tools', 'Non-sensitive SaaS tools'],
      requirements: ['Vendor information sheet', 'Basic contract review', 'Payment security verification']
    }
  ];

  const assessmentSteps = [
    {
      step: 1,
      title: 'Vendor Discovery & Inventory',
      description: 'Identify all third-party vendors and services',
      tasks: [
        'Create comprehensive vendor inventory',
        'Categorize vendors by function and data access',
        'Document data flows and integration points',
        'Identify shadow IT and unauthorized tools'
      ]
    },
    {
      step: 2,
      title: 'Risk Classification',
      description: 'Assess and categorize vendor risk levels',
      tasks: [
        'Evaluate data sensitivity and access levels',
        'Assess business criticality and impact',
        'Review integration depth and dependencies',
        'Classify using risk matrix framework'
      ]
    },
    {
      step: 3,
      title: 'Security Assessment',
      description: 'Evaluate vendor security posture and controls',
      tasks: [
        'Request and review security documentation',
        'Conduct security questionnaire process',
        'Verify compliance certifications',
        'Assess incident response capabilities'
      ]
    },
    {
      step: 4,
      title: 'Due Diligence Review',
      description: 'Perform comprehensive vendor evaluation',
      tasks: [
        'Financial stability assessment',
        'Legal and regulatory compliance review',
        'Reference checks and reputation analysis',
        'Contract terms and SLA evaluation'
      ]
    },
    {
      step: 5,
      title: 'Ongoing Monitoring',
      description: 'Establish continuous vendor oversight',
      tasks: [
        'Regular security posture reviews',
        'Compliance monitoring and reporting',
        'Incident tracking and response',
        'Performance and SLA monitoring'
      ]
    }
  ];

  const redFlags = [
    {
      category: 'Security Concerns',
      flags: [
        'Reluctance to provide security documentation',
        'No SOC 2 or equivalent compliance certifications',
        'Recent security breaches or incidents',
        'Weak password policies or access controls',
        'Unencrypted data transmission or storage'
      ]
    },
    {
      category: 'Operational Issues',
      flags: [
        'Poor customer support responsiveness',
        'Frequent service outages or downtime',
        'Unclear or changing pricing models',
        'Limited backup or disaster recovery capabilities',
        'Inadequate service level agreements'
      ]
    },
    {
      category: 'Legal & Compliance',
      flags: [
        'Unwillingness to sign data processing agreements',
        'Unclear data ownership and retention policies',
        'Non-compliance with relevant regulations',
        'Restrictive or unfavorable contract terms',
        'No clear termination and data return procedures'
      ]
    }
  ];

  const scoringCriteria = [
    { id: 'security_certs', criterion: 'Security Certifications', weight: 25, description: 'SOC 2, ISO 27001, PCI DSS, etc.' },
    { id: 'data_protection', criterion: 'Data Protection', weight: 20, description: 'Encryption, access controls, data handling' },
    { id: 'incident_response', criterion: 'Incident Response', weight: 15, description: 'Procedures, communication, recovery' },
    { id: 'business_continuity', criterion: 'Business Continuity', weight: 15, description: 'Uptime, disaster recovery, redundancy' },
    { id: 'financial_stability', criterion: 'Financial Stability', weight: 10, description: 'Company health, sustainability' },
    { id: 'reputation', criterion: 'Reputation & References', weight: 10, description: 'Customer feedback, market presence' },
    { id: 'contract_terms', criterion: 'Contract Terms', weight: 5, description: 'SLAs, liability, termination clauses' }
  ];

  const calculateWeightedScore = (criterionId: string) => {
    const score = scores[criterionId] || 0;
    const criterion = scoringCriteria.find(c => c.id === criterionId);
    return criterion ? Math.round((score * criterion.weight) / 100 * 100) / 100 : 0;
  };

  const getTotalScore = () => {
    return scoringCriteria.reduce((total, criterion) => {
      return total + calculateWeightedScore(criterion.id);
    }, 0);
  };

  const getScoreRating = (total: number) => {
    if (total >= 4.5) return { rating: 'Excellent', color: 'text-emerald-600 bg-emerald-50' };
    if (total >= 4.0) return { rating: 'Good', color: 'text-blue-600 bg-blue-50' };
    if (total >= 3.5) return { rating: 'Acceptable', color: 'text-amber-600 bg-amber-50' };
    if (total >= 3.0) return { rating: 'Needs Improvement', color: 'text-orange-600 bg-orange-50' };
    return { rating: 'High Risk', color: 'text-red-600 bg-red-50' };
  };

  const updateScore = (criterionId: string, score: number) => {
    setScores(prev => ({ ...prev, [criterionId]: score }));
  };

  const resetScores = () => {
    setScores({});
  };

  const getRiskColor = (level: string) => {
    const colors = {
      red: 'text-red-600 bg-red-50 border-red-200',
      amber: 'text-amber-600 bg-amber-50 border-amber-200',
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    };
    return colors[level as keyof typeof colors] || colors.blue;
  };

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Implementation Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Vendor Assessment Guide
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            A comprehensive framework for evaluating third-party vendors and managing vendor risk for SOC 2 compliance. 
            Includes risk scoring, security questionnaires, and ongoing monitoring procedures.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              10 min read
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Intermediate
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              IT, Security, Procurement
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Summary */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">What You'll Learn</h3>
              <ul className="text-slate-700 space-y-1">
                <li>• How to classify vendors by risk level and data access</li>
                <li>• Security questionnaires and documentation requirements</li>
                <li>• Risk scoring methodology for vendor evaluation</li>
                <li>• Red flags to watch for during vendor assessment</li>
                <li>• Ongoing monitoring and management procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Why Vendor Assessment Matters for SOC 2</h2>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              Third-party vendors represent one of the biggest security risks for modern organizations. SOC 2 auditors 
              will examine how you manage vendor relationships, especially those that process customer data or have 
              access to your production systems.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Risk Management</h3>
                <p className="text-slate-600 text-sm">
                  Proper vendor assessment helps identify and mitigate security risks before they impact your organization.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Compliance</h3>
                <p className="text-slate-600 text-sm">
                  SOC 2 requires documented vendor management processes and evidence of ongoing oversight.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <AlertTriangle className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Incident Prevention</h3>
                <p className="text-slate-600 text-sm">
                  Many security breaches originate from compromised third-party vendors or weak vendor security practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Classification */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Vendor Risk Classification</h2>
          
          <p className="text-slate-700 mb-6">
            Start by classifying your vendors based on their access to sensitive data and business criticality. 
            This determines the level of due diligence required.
          </p>

          <div className="grid gap-4 mb-8">
            {riskLevels.map((risk, index) => (
              <div 
                key={index} 
                className={`border rounded-lg p-6 cursor-pointer transition-all ${
                  selectedRiskLevel === risk.level 
                    ? getRiskColor(risk.color) 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedRiskLevel(selectedRiskLevel === risk.level ? null : risk.level)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {risk.level} Risk
                    </h3>
                    <p className="text-slate-600 text-sm">{risk.description}</p>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    selectedRiskLevel === risk.level ? 'rotate-90' : ''
                  }`} />
                </div>

                {selectedRiskLevel === risk.level && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Examples:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          {risk.examples.map((example, i) => (
                            <li key={i}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Requirements:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          {risk.requirements.map((req, i) => (
                            <li key={i}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assessment Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">5-Step Assessment Process</h2>
          
          <div className="space-y-6">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {step.tasks.map((task, i) => (
                        <div key={i} className="flex items-center text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Scoring Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Interactive Risk Scoring Framework</h2>
          
          <p className="text-slate-700 mb-6">
            Use this weighted scoring system to objectively evaluate and compare vendors. 
            Score each criterion from 1-5, with 5 being the best. The calculator will automatically compute weighted scores.
          </p>

          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Vendor Risk Assessment Calculator</h3>
                <button
                  onClick={resetScores}
                  className="text-sm text-slate-600 hover:text-slate-800 font-medium"
                >
                  Reset All
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {scoringCriteria.map((criterion, index) => (
                <div key={criterion.id} className="px-6 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">{criterion.criterion}</h4>
                      <p className="text-sm text-slate-600">{criterion.description}</p>
                    </div>
                    <div className="text-sm text-slate-500 ml-4">
                      Weight: {criterion.weight}%
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-600 mr-2">Score:</span>
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          onClick={() => updateScore(criterion.id, score)}
                          className={`w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors ${
                            scores[criterion.id] === score
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                          }`}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-slate-500">
                        {scores[criterion.id] || 0} × {criterion.weight}% = 
                      </div>
                      <div className="font-semibold text-slate-900">
                        {calculateWeightedScore(criterion.id).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900">Total Score</h4>
                  <p className="text-sm text-slate-600">Weighted average out of 5.0</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">
                    {getTotalScore().toFixed(2)} / 5.0
                  </div>
                  {getTotalScore() > 0 && (
                    <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getScoreRating(getTotalScore()).color}`}>
                      {getScoreRating(getTotalScore()).rating}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="text-center">
              <div className="font-semibold text-slate-900">4.5 - 5.0</div>
              <div className="text-sm text-emerald-600 font-medium">Excellent</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900">4.0 - 4.4</div>
              <div className="text-sm text-blue-600 font-medium">Good</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900">3.5 - 3.9</div>
              <div className="text-sm text-amber-600 font-medium">Acceptable</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900">3.0 - 3.4</div>
              <div className="text-sm text-orange-600 font-medium">Needs Improvement</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900">Below 3.0</div>
              <div className="text-sm text-red-600 font-medium">High Risk</div>
            </div>
          </div>

          {getTotalScore() > 0 && (
            <div className="mt-6 p-4 bg-white border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Assessment Results</h4>
              <div className="text-slate-700">
                {getTotalScore() >= 4.5 && (
                  <p>This vendor demonstrates excellent security practices and should be considered low-risk for most use cases.</p>
                )}
                {getTotalScore() >= 4.0 && getTotalScore() < 4.5 && (
                  <p>This vendor shows good security practices with minor areas for improvement. Suitable for most business functions.</p>
                )}
                {getTotalScore() >= 3.5 && getTotalScore() < 4.0 && (
                  <p>This vendor meets acceptable standards but may require additional monitoring or contractual safeguards.</p>
                )}
                {getTotalScore() >= 3.0 && getTotalScore() < 3.5 && (
                  <p>This vendor has significant gaps that need improvement. Consider additional security requirements or alternative vendors.</p>
                )}
                {getTotalScore() < 3.0 && (
                  <p>This vendor presents high risk and should undergo thorough review before engagement. Consider requiring additional security measures.</p>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Red Flags */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Red Flags to Watch For</h2>
          
          <p className="text-slate-700 mb-6">
            These warning signs should trigger additional scrutiny or disqualify a vendor entirely.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {redFlags.map((category, index) => (
              <div key={index} className="bg-white border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.flags.map((flag, i) => (
                    <li key={i} className="text-slate-700 text-sm flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Templates CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Need Vendor Assessment Templates?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get our complete vendor management templates including security questionnaires, 
            risk assessment forms, and contract review checklists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products/third-party-management-policy" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Third-Party Management Policy
              <FileText className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/products/complete-bundle" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Get Complete Bundle
              <Download className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Implementation Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Implementation Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Getting Started</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Start with your highest-risk vendors first
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Create a vendor inventory before assessment
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Establish clear evaluation criteria upfront
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Document everything for audit evidence
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Best Practices</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Review vendor security posture annually
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Require notification of security incidents
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Include right-to-audit clauses in contracts
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Maintain current SOC 2 reports from vendors
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Document Your Process</h3>
              <p className="text-slate-600 text-sm mb-3">
                Create formal vendor assessment procedures and documentation templates.
              </p>
              <a href="/products/third-party-management-policy" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Get Policy Template →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Assess Current Vendors</h3>
              <p className="text-slate-600 text-sm mb-3">
                Begin systematic assessment of your existing vendor relationships.
              </p>
              <a href="/resources/soc2-checklist" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                Use Checklist →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Monitor Ongoing Risk</h3>
              <p className="text-slate-600 text-sm mb-3">
                Establish regular review cycles and continuous monitoring processes.
              </p>
              <a href="/resources/common-failures" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                Learn About Failures →
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default VendorAssessmentGuidePage;