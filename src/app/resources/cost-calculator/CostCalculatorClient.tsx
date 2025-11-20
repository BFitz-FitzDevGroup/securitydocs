"use client"
import React, { useState } from 'react';
import { Calculator, ArrowRight, ArrowLeft, DollarSign, Users, Building, Shield, Clock, CheckCircle, AlertTriangle, Info, Download } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

interface FormData {
  companySize: string;
  industry: string;
  criteria: string[];
  currentSecurity: string;
  timeline: string;
  approach: string;
  email: string;
}

interface CostResult {
  auditCost: { min: number; max: number };
  toolCost: { min: number; max: number };
  internalCost: { hours: number; description: string };
  additionalCosts: {
    penetrationTest: { min: number; max: number };
    legal: { min: number; max: number };
    training: { min: number; max: number };
  };
  total: { min: number; max: number };
  timeline: string;
  criteriaCount: number;
  recommendations: string[];
}

export function CostCalculatorClient() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    companySize: '',
    industry: '',
    criteria: [],
    currentSecurity: '',
    timeline: '',
    approach: '',
    email: ''
  });
  const [results, setResults] = useState<CostResult | null>(null);

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Cost Calculator', href: '/resources/cost-calculator' }
  ];

  const steps = [
    { id: 1, title: 'Company Info', icon: Building },
    { id: 2, title: 'Security Status', icon: Shield },
    { id: 3, title: 'Project Scope', icon: Clock },
    { id: 4, title: 'Results', icon: Calculator }
  ];

  const calculateCosts = (): CostResult => {
    // Base audit costs by company size
    const auditCosts: Record<string, { min: number; max: number }> = {
      '1-10': { min: 15000, max: 25000 },
      '11-50': { min: 20000, max: 35000 },
      '51-200': { min: 30000, max: 50000 },
      '201-500': { min: 45000, max: 75000 },
      '500+': { min: 60000, max: 120000 }
    };

    // Tool costs by approach
    const toolCosts: Record<string, { min: number; max: number }> = {
      'diy': { min: 5000, max: 15000 },
      'hybrid': { min: 12000, max: 25000 },
      'consultant': { min: 20000, max: 40000 }
    };

    // Time investment by current security posture
    const timeInvestment: Record<string, { hours: number; description: string }> = {
      'minimal': { hours: 300, description: 'Starting from scratch' },
      'basic': { hours: 200, description: 'Some controls in place' },
      'advanced': { hours: 100, description: 'Strong existing controls' }
    };

    // Criteria multiplier
    const criteriaMultiplier: Record<number, number> = {
      1: 0.6, 2: 1.0, 3: 1.3, 4: 1.6, 5: 2.0
    };

    // Industry complexity multiplier
    const industryMultiplier: Record<string, number> = {
      'saas': 1.0,
      'healthcare': 1.4,
      'financial': 1.5,
      'ecommerce': 1.2,
      'other': 1.1
    };

    const baseAudit = auditCosts[formData.companySize];
    const baseTool = toolCosts[formData.approach];
    const baseTime = timeInvestment[formData.currentSecurity];
    
    const criteriaCount = formData.criteria.length || 2;
    const criteriaMult = criteriaMultiplier[criteriaCount];
    const industryMult = industryMultiplier[formData.industry];

    // Calculate final costs
    const auditCost = {
      min: Math.round(baseAudit.min * criteriaMult * industryMult),
      max: Math.round(baseAudit.max * criteriaMult * industryMult)
    };

    const toolCost = {
      min: Math.round(baseTool.min * criteriaMult),
      max: Math.round(baseTool.max * criteriaMult)
    };

    const internalCost = {
      hours: Math.round(baseTime.hours * criteriaMult * industryMult),
      description: baseTime.description
    };

    // Additional costs
    const additionalCosts = {
      penetrationTest: criteriaCount >= 2 ? { min: 8000, max: 15000 } : { min: 0, max: 0 },
      legal: { min: 2000, max: 8000 },
      training: { min: 1000, max: 3000 }
    };

    const totalMin = auditCost.min + toolCost.min + additionalCosts.penetrationTest.min + additionalCosts.legal.min + additionalCosts.training.min;
    const totalMax = auditCost.max + toolCost.max + additionalCosts.penetrationTest.max + additionalCosts.legal.max + additionalCosts.training.max;

    return {
      auditCost,
      toolCost,
      internalCost,
      additionalCosts,
      total: { min: totalMin, max: totalMax },
      timeline: formData.timeline === 'aggressive' ? '3-6 months' : formData.timeline === 'standard' ? '6-9 months' : '9-12 months',
      criteriaCount,
      recommendations: generateRecommendations()
    };
  };

  const generateRecommendations = (): string[] => {
    const recs: string[] = [];
    
    if (formData.companySize === '1-10') {
      recs.push('Consider starting with Security + Availability criteria only to reduce costs');
    }
    
    if (formData.currentSecurity === 'minimal') {
      recs.push('Invest in compliance automation tools to reduce ongoing effort');
    }
    
    if (formData.industry === 'healthcare') {
      recs.push('Budget for HIPAA compliance overlap and additional privacy controls');
    }
    
    if (formData.approach === 'diy') {
      recs.push('Plan for 20-30% more time than estimated for first-time implementations');
    }
    
    return recs;
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    if (field === 'criteria') {
      const newCriteria = formData.criteria.includes(value) 
        ? formData.criteria.filter(c => c !== value)
        : [...formData.criteria, value];
      setFormData({ ...formData, criteria: newCriteria });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const nextStep = (): void => {
    if (currentStep === 3) {
      const calculatedResults = calculateCosts();
      setResults(calculatedResults);
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = (): void => {
    setCurrentStep(currentStep - 1);
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 1:
        return Boolean(formData.companySize && formData.industry);
      case 2:
        return Boolean(formData.currentSecurity);
      case 3:
        return Boolean(formData.criteria.length > 0 && formData.timeline && formData.approach);
      default:
        return true;
    }
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            SOC 2 Cost Calculator
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Get a personalized estimate for your SOC 2 compliance project in just 5 minutes
          </p>
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm">
            <Clock className="w-4 h-4 mr-2" />
            Takes 5 minutes • Free & No Signup Required
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-blue-600' : 'text-slate-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`ml-4 w-8 h-0.5 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-lg border border-slate-200 p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Company Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Company Size (Number of Employees)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: '1-10', label: '1-10 employees' },
                    { value: '11-50', label: '11-50 employees' },
                    { value: '51-200', label: '51-200 employees' },
                    { value: '201-500', label: '201-500 employees' },
                    { value: '500+', label: '500+ employees' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('companySize', option.value)}
                      className={`p-4 text-left border rounded-lg transition-colors ${
                        formData.companySize === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Users className="w-5 h-5 mb-2" />
                      <div className="font-medium">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Industry
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'saas', label: 'SaaS/Technology', complexity: 'Standard' },
                    { value: 'healthcare', label: 'Healthcare Technology', complexity: 'Complex' },
                    { value: 'financial', label: 'Financial Services', complexity: 'Complex' },
                    { value: 'ecommerce', label: 'E-commerce', complexity: 'Moderate' },
                    { value: 'other', label: 'Other Industry', complexity: 'Moderate' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('industry', option.value)}
                      className={`p-4 text-left border rounded-lg transition-colors ${
                        formData.industry === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Building className="w-5 h-5 mb-2" />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-slate-500">Complexity: {option.complexity}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Current Security Posture</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  How would you describe your current security controls?
                </label>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'minimal', 
                      label: 'Minimal Security', 
                      description: 'Basic password policies, limited monitoring, informal processes',
                      impact: 'Higher implementation effort'
                    },
                    { 
                      value: 'basic', 
                      label: 'Basic Security', 
                      description: 'Some policies in place, MFA enabled, basic monitoring',
                      impact: 'Moderate implementation effort'
                    },
                    { 
                      value: 'advanced', 
                      label: 'Advanced Security', 
                      description: 'Comprehensive policies, centralized logging, regular audits',
                      impact: 'Lower implementation effort'
                    }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('currentSecurity', option.value)}
                      className={`w-full p-4 text-left border rounded-lg transition-colors ${
                        formData.currentSecurity === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-900">{option.label}</h3>
                          <p className="text-sm text-slate-600 mt-1">{option.description}</p>
                          <p className="text-xs text-blue-600 mt-2">{option.impact}</p>
                        </div>
                        <Shield className="w-5 h-5 text-slate-400 ml-3" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Project Scope & Approach</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Which SOC 2 Trust Service Criteria do you need? 
                  <span className="text-slate-500 text-sm ml-1">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: 'security', label: 'Security', description: 'Required for all SOC 2 audits', required: true },
                    { value: 'availability', label: 'Availability', description: 'System uptime and performance', required: false },
                    { value: 'processing', label: 'Processing Integrity', description: 'Data processing accuracy', required: false },
                    { value: 'confidentiality', label: 'Confidentiality', description: 'Data confidentiality controls', required: false },
                    { value: 'privacy', label: 'Privacy', description: 'Personal information protection', required: false }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-start p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.criteria.includes(option.value) || option.required
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.criteria.includes(option.value) || option.required}
                        onChange={() => !option.required && handleInputChange('criteria', option.value)}
                        disabled={option.required}
                        className="mt-1 mr-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900">
                          {option.label}
                          {option.required && <span className="text-red-500 ml-1">*</span>}
                        </h3>
                        <p className="text-sm text-slate-600">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  * Security is required for all SOC 2 audits
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Preferred Timeline
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'aggressive', label: 'Aggressive (3-6 months)', risk: 'Higher stress, potential gaps' },
                    { value: 'standard', label: 'Standard (6-9 months)', risk: 'Balanced approach' },
                    { value: 'conservative', label: 'Conservative (9-12 months)', risk: 'Lower risk, thorough preparation' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('timeline', option.value)}
                      className={`p-4 text-left border rounded-lg transition-colors ${
                        formData.timeline === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Clock className="w-5 h-5 mb-2" />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-slate-500">{option.risk}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Implementation Approach
                </label>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'diy', 
                      label: 'DIY (Do It Yourself)', 
                      description: 'Internal team handles most implementation',
                      cost: 'Lower cost, higher time investment'
                    },
                    { 
                      value: 'hybrid', 
                      label: 'Hybrid (Templates + Some Consulting)', 
                      description: 'Use templates with occasional expert guidance',
                      cost: 'Moderate cost, balanced effort'
                    },
                    { 
                      value: 'consultant', 
                      label: 'Full-Service Consultant', 
                      description: 'Consultant handles most implementation work',
                      cost: 'Higher cost, lower internal effort'
                    }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('approach', option.value)}
                      className={`w-full p-4 text-left border rounded-lg transition-colors ${
                        formData.approach === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-900">{option.label}</h3>
                          <p className="text-sm text-slate-600 mt-1">{option.description}</p>
                          <p className="text-xs text-emerald-600 mt-2">{option.cost}</p>
                        </div>
                        <DollarSign className="w-5 h-5 text-slate-400 ml-3" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && results && (
            <div className="space-y-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">Your SOC 2 Cost Estimate</h2>
                <p className="text-slate-600">Based on your specific requirements and industry</p>
              </div>

              {/* Total Cost Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Total Estimated Cost</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatCurrency(results.total.min)} - {formatCurrency(results.total.max)}
                </div>
                <p className="text-sm text-slate-600">
                  For {results.criteriaCount} criteria • {results.timeline} timeline
                </p>
              </div>

              {/* Cost Breakdown */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Cost Breakdown</h3>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-900">Audit Fees</span>
                      <span className="text-slate-700">
                        {formatCurrency(results.auditCost.min)} - {formatCurrency(results.auditCost.max)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">CPA firm audit and report</p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-900">Tools & Software</span>
                      <span className="text-slate-700">
                        {formatCurrency(results.toolCost.min)} - {formatCurrency(results.toolCost.max)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">Compliance and security tools</p>
                  </div>

                  {results.additionalCosts.penetrationTest.min > 0 && (
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-900">Penetration Testing</span>
                        <span className="text-slate-700">
                          {formatCurrency(results.additionalCosts.penetrationTest.min)} - {formatCurrency(results.additionalCosts.penetrationTest.max)}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">Required for multi-criteria audits</p>
                    </div>
                  )}

                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-900">Legal & Other</span>
                      <span className="text-slate-700">
                        {formatCurrency(results.additionalCosts.legal.min + results.additionalCosts.training.min)} - {formatCurrency(results.additionalCosts.legal.max + results.additionalCosts.training.max)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">Legal review, training, misc.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Time Investment</h3>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-amber-600 mr-2" />
                      <span className="font-medium text-slate-900">Internal Team Hours</span>
                    </div>
                    <div className="text-2xl font-bold text-amber-600 mb-2">
                      ~{results.internalCost.hours} hours
                    </div>
                    <p className="text-sm text-slate-600">{results.internalCost.description}</p>
                  </div>

                  {results.recommendations.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Info className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-slate-900">Recommendations</span>
                      </div>
                      <ul className="space-y-1">
                        {results.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-slate-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 mb-6">
                  Get detailed implementation guidance and templates to reduce your costs and timeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/products/complete-bundle" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    View Complete Bundle
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a 
                    href="/resources/implementation-guides" 
                    className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center justify-center"
                  >
                    Implementation Guides
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  canProceed()
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {currentStep === 3 ? 'Calculate Costs' : 'Next'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={() => window.print()}
                className="flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Save Results
              </button>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Important Notes</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Costs can vary significantly based on specific requirements and auditor selection</li>
                <li>• Timeline estimates assume dedicated team availability and no major scope changes</li>
                <li>• First-year costs are typically higher due to initial implementation</li>
                <li>• Annual maintenance costs are generally 60-70% of first-year costs</li>
                <li>• Consider starting with Security + Availability criteria to reduce initial costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};