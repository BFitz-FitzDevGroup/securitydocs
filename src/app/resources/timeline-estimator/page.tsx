"use client"
import React, { useState } from 'react';
import { Clock, ArrowRight, ArrowLeft, Calendar, CheckCircle, AlertTriangle, Info, Target, Users, Shield, Zap, TrendingUp } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

interface FormData {
  companySize: string;
  currentState: string;
  criteria: string[];
  urgency: string;
  teamCapacity: string;
  budget: string;
  hasConsultant: string;
  complexity: string[];
}

interface TimelinePhase {
  name: string;
  duration: number;
  description: string;
  tasks: string[];
  dependencies: string[];
  criticalPath: boolean;
}

interface TimelineResult {
  totalWeeks: number;
  phases: TimelinePhase[];
  criticalPath: string[];
  risks: string[];
  recommendations: string[];
  milestones: { week: number; title: string; description: string }[];
}

const SOC2TimelineEstimator = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    companySize: '',
    currentState: '',
    criteria: [],
    urgency: '',
    teamCapacity: '',
    budget: '',
    hasConsultant: '',
    complexity: []
  });
  const [results, setResults] = useState<TimelineResult | null>(null);

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Timeline Estimator', href: '/resources/soc2-timeline-estimator' }
  ];

  const steps = [
    { id: 1, title: 'Current State', icon: Shield },
    { id: 2, title: 'Project Scope', icon: Target },
    { id: 3, title: 'Resources', icon: Users },
    { id: 4, title: 'Timeline', icon: Calendar }
  ];

  const calculateTimeline = (): TimelineResult => {
    // Base timeline by current state (in weeks)
    const baseTimelines: Record<string, number> = {
      'startup': 16,     // 4 months
      'basic': 24,       // 6 months  
      'intermediate': 20, // 5 months
      'advanced': 12     // 3 months
    };

    // Criteria complexity multiplier
    const criteriaMultipliers: Record<number, number> = {
      1: 0.7,  // Security only
      2: 1.0,  // Security + Availability (most common)
      3: 1.3,  // Adding Processing Integrity
      4: 1.5,  // Adding Confidentiality
      5: 1.8   // All five criteria
    };

    // Team capacity multiplier
    const capacityMultipliers: Record<string, number> = {
      'limited': 1.4,    // <25% capacity
      'moderate': 1.0,   // 25-50% capacity
      'dedicated': 0.8   // >50% capacity
    };

    // Urgency multiplier (affects quality/risk)
    const urgencyMultipliers: Record<string, number> = {
      'aggressive': 0.7,  // High risk
      'standard': 1.0,    // Balanced
      'conservative': 1.3 // Lower risk
    };

    // Company size multiplier
    const sizeMultipliers: Record<string, number> = {
      '1-10': 0.9,
      '11-50': 1.0,
      '51-200': 1.2,
      '201-500': 1.4,
      '500+': 1.6
    };

    const baseWeeks = baseTimelines[formData.currentState] || 20;
    const criteriaCount = Math.max(formData.criteria.length, 1);
    const criteriaMult = criteriaMultipliers[criteriaCount] || 1.0;
    const capacityMult = capacityMultipliers[formData.teamCapacity] || 1.0;
    const urgencyMult = urgencyMultipliers[formData.urgency] || 1.0;
    const sizeMult = sizeMultipliers[formData.companySize] || 1.0;

    // Consultant reduces timeline by 20-30%
    const consultantMult = formData.hasConsultant === 'yes' ? 0.75 : 1.0;

    // Complexity factors add time
    const complexityWeeks = formData.complexity.length * 2;

    const totalWeeks = Math.round(
      (baseWeeks * criteriaMult * capacityMult * urgencyMult * sizeMult * consultantMult) + complexityWeeks
    );

    // Generate phases based on timeline
    const phases: TimelinePhase[] = [
      {
        name: 'Planning & Assessment',
        duration: Math.round(totalWeeks * 0.15),
        description: 'Gap analysis, scope definition, and project planning',
        tasks: [
          'Conduct readiness assessment',
          'Define audit scope and criteria',
          'Select audit firm and negotiate timeline',
          'Assign project team and responsibilities',
          'Create project plan and milestones'
        ],
        dependencies: [],
        criticalPath: true
      },
      {
        name: 'Policy Development',
        duration: Math.round(totalWeeks * 0.20),
        description: 'Create and customize security policies',
        tasks: [
          'Draft information security policies',
          'Create incident response procedures',
          'Develop access control policies',
          'Review and approve with legal/leadership',
          'Distribute and train team on policies'
        ],
        dependencies: ['Planning & Assessment'],
        criticalPath: true
      },
      {
        name: 'Control Implementation',
        duration: Math.round(totalWeeks * 0.35),
        description: 'Deploy technical and administrative controls',
        tasks: [
          'Implement access controls and MFA',
          'Deploy monitoring and logging tools',
          'Set up backup and disaster recovery',
          'Configure security tools and alerts',
          'Establish change management processes'
        ],
        dependencies: ['Policy Development'],
        criticalPath: true
      },
      {
        name: 'Testing & Validation',
        duration: Math.round(totalWeeks * 0.15),
        description: 'Test controls and collect evidence',
        tasks: [
          'Test disaster recovery procedures',
          'Validate access control effectiveness',
          'Conduct vulnerability assessments',
          'Perform penetration testing',
          'Document control testing results'
        ],
        dependencies: ['Control Implementation'],
        criticalPath: false
      },
      {
        name: 'Evidence Collection',
        duration: Math.round(totalWeeks * 0.25),
        description: 'Gather audit evidence and prepare documentation',
        tasks: [
          'Collect evidence of control operation',
          'Organize documentation for auditor',
          'Prepare control narratives',
          'Document any control exceptions',
          'Review evidence completeness'
        ],
        dependencies: ['Control Implementation'],
        criticalPath: true
      },
      {
        name: 'Audit Execution',
        duration: Math.round(totalWeeks * 0.15),
        description: 'Work with auditor to complete examination',
        tasks: [
          'Kick-off meeting with auditor',
          'Provide evidence and documentation',
          'Respond to auditor questions',
          'Address any identified gaps',
          'Review draft audit report'
        ],
        dependencies: ['Evidence Collection', 'Testing & Validation'],
        criticalPath: true
      }
    ];

    // Generate risks based on inputs
    const risks: string[] = [];
    if (formData.urgency === 'aggressive') {
      risks.push('Tight timeline may lead to gaps in control implementation');
    }
    if (formData.teamCapacity === 'limited') {
      risks.push('Limited team capacity may cause delays in critical tasks');
    }
    if (formData.currentState === 'startup') {
      risks.push('Minimal existing controls require more comprehensive implementation');
    }
    if (criteriaCount >= 4) {
      risks.push('Multiple criteria increase complexity and potential for scope creep');
    }
    if (formData.complexity.includes('multiRegion')) {
      risks.push('Multi-region deployment adds regulatory and technical complexity');
    }

    // Generate recommendations
    const recommendations: string[] = [];
    if (totalWeeks > 32) {
      recommendations.push('Consider starting with Security + Availability criteria only');
    }
    if (formData.teamCapacity === 'limited') {
      recommendations.push('Consider hiring consultant or dedicating more internal resources');
    }
    if (formData.urgency === 'aggressive' && formData.currentState === 'startup') {
      recommendations.push('Aggressive timeline with minimal current state is high risk - consider extending');
    }
    recommendations.push('Plan for 15-20% buffer time for unexpected issues');
    recommendations.push('Begin evidence collection as soon as controls are implemented');

    // Generate milestones
    let weekCounter = 0;
    const milestones: { week: number; title: string; description: string }[] = [];
    
    phases.forEach((phase) => {
      weekCounter += phase.duration;
      milestones.push({
        week: weekCounter,
        title: `${phase.name} Complete`,
        description: phase.description
      });
    });

    return {
      totalWeeks,
      phases,
      criticalPath: phases.filter(p => p.criticalPath).map(p => p.name),
      risks,
      recommendations,
      milestones
    };
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    if (field === 'criteria' || field === 'complexity') {
      const currentArray = formData[field] as string[];
      const newArray = currentArray.includes(value) 
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      setFormData({ ...formData, [field]: newArray });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const nextStep = (): void => {
    if (currentStep === 3) {
      const calculatedResults = calculateTimeline();
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
        return Boolean(formData.companySize && formData.currentState);
      case 2:
        return Boolean(formData.criteria.length > 0 && formData.urgency);
      case 3:
        return Boolean(formData.teamCapacity && formData.budget && formData.hasConsultant);
      default:
        return true;
    }
  };

  const formatDuration = (weeks: number): string => {
    const months = Math.round(weeks / 4.33);
    if (months < 1) return `${weeks} weeks`;
    if (months === 1) return '1 month';
    return `${months} months`;
  };

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            SOC 2 Timeline Estimator
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Get a personalized implementation timeline based on your current state and resources
          </p>
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm">
            <Clock className="w-4 h-4 mr-2" />
            Takes 5 minutes • Get Your Custom Project Plan
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
                  currentStep >= step.id ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-emerald-600' : 'text-slate-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`ml-4 w-8 h-0.5 ${
                    currentStep > step.id ? 'bg-emerald-600' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-lg border border-slate-200 p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Current State Assessment</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Company Size
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: '1-10', label: '1-10 employees', impact: 'Faster decisions' },
                    { value: '11-50', label: '11-50 employees', impact: 'Standard timeline' },
                    { value: '51-200', label: '51-200 employees', impact: 'More coordination needed' },
                    { value: '201-500', label: '201-500 employees', impact: 'Complex stakeholder management' },
                    { value: '500+', label: '500+ employees', impact: 'Enterprise complexity' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('companySize', option.value)}
                      className={`p-4 text-left border rounded-lg transition-colors ${
                        formData.companySize === option.value
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Users className="w-5 h-5 mb-2" />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-slate-500">{option.impact}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Current Security Maturity
                </label>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'startup', 
                      label: 'Startup/Minimal', 
                      description: 'Basic password policies, informal processes',
                      timeline: '+3-4 months'
                    },
                    { 
                      value: 'basic', 
                      label: 'Basic Controls', 
                      description: 'Some policies, MFA enabled, basic monitoring',
                      timeline: '+6 months baseline'
                    },
                    { 
                      value: 'intermediate', 
                      label: 'Intermediate', 
                      description: 'Documented policies, centralized logging, regular reviews',
                      timeline: '+5 months'
                    },
                    { 
                      value: 'advanced', 
                      label: 'Advanced', 
                      description: 'Comprehensive security program, automated monitoring',
                      timeline: '+3 months'
                    }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('currentState', option.value)}
                      className={`w-full p-4 text-left border rounded-lg transition-colors ${
                        formData.currentState === option.value
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-900">{option.label}</h3>
                          <p className="text-sm text-slate-600 mt-1">{option.description}</p>
                          <p className="text-xs text-emerald-600 mt-2">{option.timeline}</p>
                        </div>
                        <Shield className="w-5 h-5 text-slate-400 ml-3" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Project Scope</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  SOC 2 Trust Service Criteria 
                  <span className="text-slate-500 text-sm ml-1">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: 'security', label: 'Security', description: 'Required for all SOC 2 audits', required: true, weeks: 0 },
                    { value: 'availability', label: 'Availability', description: 'System uptime and performance', required: false, weeks: 2 },
                    { value: 'processing', label: 'Processing Integrity', description: 'Data processing accuracy', required: false, weeks: 3 },
                    { value: 'confidentiality', label: 'Confidentiality', description: 'Data confidentiality controls', required: false, weeks: 4 },
                    { value: 'privacy', label: 'Privacy', description: 'Personal information protection', required: false, weeks: 6 }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-start p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.criteria.includes(option.value) || option.required
                          ? 'border-emerald-500 bg-emerald-50'
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
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-slate-900">
                            {option.label}
                            {option.required && <span className="text-red-500 ml-1">*</span>}
                          </h3>
                          {option.weeks > 0 && (
                            <span className="text-xs text-amber-600">+{option.weeks}w</span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Project Urgency
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'aggressive', label: 'Aggressive (ASAP)', description: 'Need SOC 2 for immediate sales opportunity', risk: 'Higher risk of gaps' },
                    { value: 'standard', label: 'Standard', description: 'Reasonable timeline for quality implementation', risk: 'Balanced approach' },
                    { value: 'conservative', label: 'Conservative', description: 'Thorough implementation with buffer time', risk: 'Lower risk' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('urgency', option.value)}
                      className={`p-4 text-left border rounded-lg transition-colors ${
                        formData.urgency === option.value
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Zap className="w-5 h-5 mb-2" />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-slate-600">{option.description}</div>
                      <div className="text-xs text-slate-500 mt-1">{option.risk}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Complexity Factors <span className="text-slate-500 text-sm">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: 'multiRegion', label: 'Multi-region deployment', impact: '+2 weeks' },
                    { value: 'legacy', label: 'Legacy systems integration', impact: '+3 weeks' },
                    { value: 'customDev', label: 'Custom development required', impact: '+4 weeks' },
                    { value: 'thirdParty', label: 'Many third-party integrations', impact: '+2 weeks' },
                    { value: 'regulatory', label: 'Additional regulatory requirements', impact: '+3 weeks' },
                    { value: 'distributed', label: 'Distributed team/remote work', impact: '+1 week' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                        formData.complexity.includes(option.value)
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.complexity.includes(option.value)}
                        onChange={() => handleInputChange('complexity', option.value)}
                        className="mr-3"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-900">{option.label}</span>
                          <span className="text-xs text-amber-600">{option.impact}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Resources & Approach</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Team Capacity for SOC 2 Project
                </label>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'limited', 
                      label: 'Limited (<25% capacity)', 
                      description: 'Team has other priorities, SOC 2 is secondary',
                      impact: '+40% timeline'
                    },
                    { 
                      value: 'moderate', 
                      label: 'Moderate (25-50% capacity)', 
                      description: 'Balanced approach with other responsibilities',
                      impact: 'Baseline timeline'
                    },
                    { 
                      value: 'dedicated', 
                      label: 'Dedicated (>50% capacity)', 
                      description: 'SOC 2 is top priority with dedicated resources',
                      impact: '-20% timeline'
                    }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('teamCapacity', option.value)}
                      className={`w-full p-4 text-left border rounded-lg transition-colors ${
                        formData.teamCapacity === option.value
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-900">{option.label}</h3>
                          <p className="text-sm text-slate-600 mt-1">{option.description}</p>
                          <p className="text-xs text-emerald-600 mt-2">{option.impact}</p>
                        </div>
                        <Users className="w-5 h-5 text-slate-400 ml-3" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Budget Approach
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'minimal', label: 'Minimal Budget', description: 'DIY with templates', timeline: 'Longer timeline' },
                    { value: 'moderate', label: 'Moderate Budget', description: 'Tools + some consulting', timeline: 'Standard timeline' },
                    { value: 'generous', label: 'Generous Budget', description: 'Full-service approach', timeline: 'Faster timeline' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('budget', option.value)}
                      className={`p-4 text-left border rounded-lg transition-colors ${
                        formData.budget === option.value
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <TrendingUp className="w-5 h-5 mb-2" />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-slate-600">{option.description}</div>
                      <div className="text-xs text-slate-500">{option.timeline}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Will you use external consultants?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: 'yes', label: 'Yes, hiring consultants', description: 'External expertise to accelerate implementation', impact: '-25% timeline' },
                    { value: 'no', label: 'No, internal team only', description: 'Internal team will handle all implementation', impact: 'Baseline timeline' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('hasConsultant', option.value)}
                      className={`p-4 text-left border rounded-lg transition-colors ${
                        formData.hasConsultant === option.value
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <h3 className="font-medium text-slate-900">{option.label}</h3>
                      <p className="text-sm text-slate-600 mt-1">{option.description}</p>
                      <p className="text-xs text-emerald-600 mt-2">{option.impact}</p>
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
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">Your SOC 2 Timeline</h2>
                <p className="text-slate-600">Personalized implementation plan based on your requirements</p>
              </div>

              {/* Timeline Summary */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Estimated Timeline</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {formatDuration(results.totalWeeks)}
                </div>
                <p className="text-sm text-slate-600">
                  {results.totalWeeks} weeks • {formData.criteria.length || 1} criteria
                </p>
              </div>

              {/* Phase Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Implementation Phases</h3>
                <div className="space-y-4">
                  {results.phases.map((phase, index) => (
                    <div key={index} className={`border rounded-lg p-4 ${
                      phase.criticalPath ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-slate-50'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-slate-900">{phase.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-slate-600">{formatDuration(phase.duration)}</span>
                          {phase.criticalPath && (
                            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                              Critical Path
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{phase.description}</p>
                      <div className="text-xs text-slate-500">
                        <strong>Key Tasks:</strong> {phase.tasks.slice(0, 3).join(', ')}
                        {phase.tasks.length > 3 && ` and ${phase.tasks.length - 3} more...`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Milestones</h3>
                  <div className="space-y-3">
                    {results.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-medium">
                          {milestone.week}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-slate-900">{milestone.title}</h4>
                          <p className="text-sm text-slate-600">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {results.risks.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                        <span className="font-medium text-slate-900">Potential Risks</span>
                      </div>
                      <ul className="space-y-1">
                        {results.risks.map((risk, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start">
                            <span className="text-amber-600 mr-2">•</span>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-slate-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Ready to Start Your Implementation?</h3>
                <p className="text-slate-600 mb-6">
                  Get the templates and guidance you need to execute this timeline successfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/products/complete-bundle" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    Get Implementation Templates
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a 
                    href="/resources/implementation-guides" 
                    className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center justify-center"
                  >
                    View Implementation Guides
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
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {currentStep === 3 ? 'Generate Timeline' : 'Next'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={() => window.print()}
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Save Timeline
              </button>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Timeline Assumptions</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Timelines assume dedicated team availability during business hours</li>
                <li>• Delays may occur due to vendor selection, budget approval, or scope changes</li>
                <li>• First-time implementations typically take 20-30% longer than estimated</li>
                <li>• Evidence collection period requires 8-12 weeks minimum for most criteria</li>
                <li>• External dependencies (auditor availability) can affect final timeline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SOC2TimelineEstimator;