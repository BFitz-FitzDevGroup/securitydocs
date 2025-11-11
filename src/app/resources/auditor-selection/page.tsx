"use client"
import React, { useState } from 'react';
import { Shield, Users, DollarSign, Clock, AlertTriangle, CheckCircle, FileText, Phone, Building, Award, TrendingUp, Calculator, Lightbulb, Target, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const AuditorSelectionGuidePage = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedFirmSize, setSelectedFirmSize] = useState<string | null>(null);
  const [checkedQuestions, setCheckedQuestions] = useState<{[key: string]: boolean}>({});
  const [firmScores, setFirmScores] = useState<{[key: string]: {[key: string]: number}}>({
    firmA: {},
    firmB: {},
    firmC: {}
  });

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Auditor Selection Guide', href: '/resources/auditor-selection' }
  ];

  const auditorTypes = [
    {
      type: 'Big 4 Firms',
      firms: ['Deloitte', 'PwC', 'EY', 'KPMG'],
      avgCost: '$75,000 - $200,000',
      timeline: '4-6 months',
      bestFor: 'Large enterprises, public companies, complex multi-national organizations',
      pros: [
        'Extensive experience with complex organizations',
        'Global reach and resources',
        'Strong regulatory relationships',
        'Comprehensive service offerings',
        'High brand recognition'
      ],
      cons: [
        'Significantly higher costs',
        'Less personalized attention',
        'Junior staff may handle day-to-day work',
        'Longer engagement timelines',
        'May be overkill for smaller organizations'
      ]
    },
    {
      type: 'Regional Firms',
      firms: ['BDO', 'Grant Thornton', 'RSM', 'CohnReznick'],
      avgCost: '$25,000 - $75,000',
      timeline: '3-4 months',
      bestFor: 'Mid-market companies, growing SaaS businesses, established regional companies',
      pros: [
        'Good balance of expertise and cost',
        'More personalized service',
        'Experienced partners involved',
        'Strong industry specialization',
        'Reasonable pricing for quality'
      ],
      cons: [
        'Limited global presence',
        'May lack expertise in niche industries',
        'Smaller resource pool',
        'Less brand recognition'
      ]
    },
    {
      type: 'Boutique Firms',
      firms: ['Specialized SOC 2 practices', 'Technology-focused CPAs'],
      avgCost: '$15,000 - $40,000',
      timeline: '2-3 months',
      bestFor: 'Startups, small SaaS companies, first-time SOC 2 audits',
      pros: [
        'Cost-effective pricing',
        'Specialized SOC 2 expertise',
        'Direct partner involvement',
        'Faster turnaround times',
        'Better suited for smaller organizations'
      ],
      cons: [
        'Limited resources for complex issues',
        'May lack industry-specific experience',
        'Smaller teams',
        'Less regulatory influence',
        'Quality can vary significantly'
      ]
    }
  ];

  const selectionCriteria = [
    {
      category: 'Experience & Expertise',
      weight: 30,
      questions: [
        'How many SOC 2 audits have you completed in the last 12 months?',
        'Do you have experience with companies in our industry?',
        'What percentage of your practice is SOC 2 work?',
        'Can you provide references from similar-sized companies?',
        'Do you have specialized expertise in our Trust Service Criteria?'
      ]
    },
    {
      category: 'Team & Resources',
      weight: 25,
      questions: [
        'Who will be the engagement partner and manager?',
        'What are their qualifications and experience levels?',
        'How many team members will work on our audit?',
        'What is your staff turnover rate?',
        'Do you have backup resources if key team members leave?'
      ]
    },
    {
      category: 'Cost & Value',
      weight: 20,
      questions: [
        'What is your total fee estimate including expenses?',
        'How do you structure your billing (fixed fee vs. hourly)?',
        'What additional services might incur extra costs?',
        'Do you offer multi-year engagement discounts?',
        'What value-added services do you provide?'
      ]
    },
    {
      category: 'Process & Timeline',
      weight: 15,
      questions: [
        'What is your typical audit timeline?',
        'How do you handle the planning and fieldwork phases?',
        'What is your approach to testing and sampling?',
        'How do you communicate findings and recommendations?',
        'What support do you provide for remediation?'
      ]
    },
    {
      category: 'Technology & Tools',
      weight: 10,
      questions: [
        'What audit management platform do you use?',
        'How do you handle document collection and review?',
        'Do you provide client portals or dashboards?',
        'What technology do you use for remote auditing?',
        'How do you ensure data security during the audit?'
      ]
    }
  ];

  const redFlags = [
    {
      category: 'Experience Issues',
      flags: [
        'Cannot provide recent SOC 2 client references',
        'Has never audited a company in your industry',
        'Primarily focused on traditional financial audits',
        'Staff assigned lack SOC 2 certifications',
        'Cannot explain your specific compliance requirements'
      ]
    },
    {
      category: 'Communication Problems',
      flags: [
        'Slow to respond to initial inquiries',
        'Cannot provide clear timeline estimates',
        'Gives vague answers about their process',
        'Pressures you to make quick decisions',
        'Does not ask detailed questions about your business'
      ]
    },
    {
      category: 'Pricing Concerns',
      flags: [
        'Quote is significantly lower than others without explanation',
        'Unwilling to provide fixed-fee pricing',
        'Hidden costs or unclear fee structure',
        'Requires large upfront payments',
        'No clear scope definition in the proposal'
      ]
    }
  ];

  const interviewQuestions = [
    {
      category: 'Technical Expertise',
      questions: [
        'Walk us through your SOC 2 audit methodology.',
        'How do you approach testing for our specific Trust Service Criteria?',
        'What are the most common deficiencies you see in our industry?',
        'How do you stay current with changes in SOC 2 standards?',
        'Describe a challenging SOC 2 audit you\'ve managed recently.'
      ]
    },
    {
      category: 'Project Management',
      questions: [
        'How do you manage audit timelines and deadlines?',
        'What happens if you identify issues during fieldwork?',
        'How do you handle scope changes or additional work?',
        'What is your escalation process for problems?',
        'How do you ensure consistent quality across your team?'
      ]
    },
    {
      category: 'Client Service',
      questions: [
        'How often will we meet during the audit process?',
        'What level of partner involvement can we expect?',
        'How do you handle urgent questions or issues?',
        'What ongoing support do you provide post-audit?',
        'Can you provide training for our internal team?'
      ]
    }
  ];

  const costFactors = [
    {
      factor: 'Company Size',
      impact: 'High',
      description: 'Revenue, employees, and transaction volume significantly affect audit scope and cost.'
    },
    {
      factor: 'System Complexity',
      impact: 'High', 
      description: 'Number of applications, integrations, and infrastructure components increases testing requirements.'
    },
    {
      factor: 'Trust Service Criteria',
      impact: 'Medium',
      description: 'Security-only audits cost less than all five criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy).'
    },
    {
      factor: 'Geographic Scope',
      impact: 'Medium',
      description: 'Multiple locations, international operations, and remote workforce add complexity.'
    },
    {
      factor: 'First-Time Audit',
      impact: 'Medium',
      description: 'Initial SOC 2 audits require more setup and education than subsequent audits.'
    },
    {
      factor: 'Audit Firm Size',
      impact: 'High',
      description: 'Big 4 firms typically charge 2-3x more than regional or boutique firms.'
    }
  ];

  const handleQuestionCheck = (questionId: string) => {
    setCheckedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const updateFirmScore = (firm: string, category: string, score: number) => {
    setFirmScores(prev => ({
      ...prev,
      [firm]: {
        ...prev[firm],
        [category]: score
      }
    }));
  };

  const calculateWeightedScore = (firm: string, category: string) => {
    const score = firmScores[firm]?.[category] || 0;
    const criteriaItem = selectionCriteria.find(c => c.category === category);
    return criteriaItem ? (score * criteriaItem.weight) / 100 : 0;
  };

  const getTotalScore = (firm: string) => {
    return selectionCriteria.reduce((total, criteria) => {
      return total + calculateWeightedScore(firm, criteria.category);
    }, 0);
  };

  const getScoreRating = (total: number) => {
    if (total >= 4.5) return { rating: 'Excellent', color: 'text-emerald-600 bg-emerald-50' };
    if (total >= 4.0) return { rating: 'Good', color: 'text-blue-600 bg-blue-50' };
    if (total >= 3.5) return { rating: 'Acceptable', color: 'text-amber-600 bg-amber-50' };
    if (total >= 3.0) return { rating: 'Needs Review', color: 'text-orange-600 bg-orange-50' };
    return { rating: 'Poor Fit', color: 'text-red-600 bg-red-50' };
  };

  const resetScores = () => {
    setFirmScores({
      firmA: {},
      firmB: {},
      firmC: {}
    });
  };

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Selection Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 Auditor Selection Guide
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Choose the right SOC 2 auditor for your organization with confidence. Learn how to evaluate 
            audit firms, ask the right questions, and avoid common selection mistakes.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              8 min read
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Intermediate
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Management, Finance
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Overview */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Key Selection Factors</h3>
              <ul className="text-slate-700 space-y-1">
                <li>• <strong>Industry experience</strong> - Look for auditors familiar with your business model</li>
                <li>• <strong>Team qualifications</strong> - Ensure senior staff have relevant SOC 2 expertise</li>
                <li>• <strong>Communication style</strong> - Choose auditors who explain things clearly</li>
                <li>• <strong>Reasonable pricing</strong> - Balance cost with quality and experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Firm Types', icon: Building },
                { id: 'criteria', label: 'Selection Criteria', icon: CheckCircle },
                { id: 'questions', label: 'Interview Questions', icon: Phone },
                { id: 'costs', label: 'Cost Factors', icon: DollarSign }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Types of SOC 2 Audit Firms</h2>
            
            <p className="text-slate-700 mb-8">
              Understanding the different types of audit firms helps you choose the right fit for your organization's 
              size, complexity, and budget. Each has distinct advantages and trade-offs.
            </p>

            <div className="space-y-8">
              {auditorTypes.map((type, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{type.type}</h3>
                      <p className="text-slate-600 text-sm mb-3">{type.bestFor}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {type.firms.map((firm, i) => (
                          <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                            {firm}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-slate-900">{type.avgCost}</div>
                      <div className="text-sm text-slate-600">{type.timeline}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-1">
                        {type.pros.map((pro, i) => (
                          <li key={i} className="text-slate-700 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
                        Considerations
                      </h4>
                      <ul className="space-y-1">
                        {type.cons.map((con, i) => (
                          <li key={i} className="text-slate-700 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-900 mb-3">Choosing the Right Fit</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-slate-900">Startups & Small SaaS:</span>
                  <p className="text-slate-700">Boutique firms offer the best value and personalized attention.</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Growing Companies:</span>
                  <p className="text-slate-700">Regional firms provide good balance of expertise and cost.</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Large Enterprises:</span>
                  <p className="text-slate-700">Big 4 firms have resources for complex, multi-location audits.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedTab === 'criteria' && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Selection Criteria & Evaluation Framework</h2>
            
            <p className="text-slate-700 mb-8">
              Use this weighted framework to objectively evaluate and compare audit firms. Rate each category 
              from 1-5 and calculate a weighted score to guide your decision.
            </p>

            <div className="space-y-6">
              {selectionCriteria.map((criteria, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">{criteria.category}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {criteria.weight}% Weight
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {criteria.questions.map((question, i) => (
                      <div key={i} className="flex items-start">
                        <input
                          type="checkbox"
                          id={`${criteria.category}-${i}`}
                          className="mt-1 mr-3"
                          checked={checkedQuestions[`${criteria.category}-${i}`] || false}
                          onChange={() => handleQuestionCheck(`${criteria.category}-${i}`)}
                        />
                        <label 
                          htmlFor={`${criteria.category}-${i}`}
                          className="text-slate-700 text-sm cursor-pointer"
                        >
                          {question}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-slate-900">Interactive Evaluation Scorecard</h4>
                <button
                  onClick={resetScores}
                  className="text-sm text-slate-600 hover:text-slate-800 font-medium"
                >
                  Reset All Scores
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Header */}
                  <div className="grid grid-cols-6 gap-4 text-sm font-medium text-slate-700 mb-4 pb-2 border-b border-slate-300">
                    <div>Criteria</div>
                    <div>Weight</div>
                    <div>Firm A Score</div>
                    <div>Firm B Score</div>
                    <div>Firm C Score</div>
                    <div>Notes</div>
                  </div>
                  
                  {/* Criteria Rows */}
                  {selectionCriteria.map((criteria, index) => (
                    <div key={index} className="grid grid-cols-6 gap-4 text-sm py-3 border-b border-slate-200 last:border-b-0 items-center">
                      <div className="text-slate-900 font-medium">{criteria.category}</div>
                      <div className="text-slate-600">{criteria.weight}%</div>
                      
                      {/* Firm A Score */}
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((score) => (
                          <button
                            key={score}
                            onClick={() => updateFirmScore('firmA', criteria.category, score)}
                            className={`w-6 h-6 rounded-full border text-xs font-medium transition-colors ${
                              firmScores.firmA?.[criteria.category] === score
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                            }`}
                          >
                            {score}
                          </button>
                        ))}
                        <span className="ml-2 text-xs text-slate-500">
                          = {calculateWeightedScore('firmA', criteria.category).toFixed(1)}
                        </span>
                      </div>
                      
                      {/* Firm B Score */}
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((score) => (
                          <button
                            key={score}
                            onClick={() => updateFirmScore('firmB', criteria.category, score)}
                            className={`w-6 h-6 rounded-full border text-xs font-medium transition-colors ${
                              firmScores.firmB?.[criteria.category] === score
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-slate-300 text-slate-600 hover:border-emerald-400 hover:text-emerald-600'
                            }`}
                          >
                            {score}
                          </button>
                        ))}
                        <span className="ml-2 text-xs text-slate-500">
                          = {calculateWeightedScore('firmB', criteria.category).toFixed(1)}
                        </span>
                      </div>
                      
                      {/* Firm C Score */}
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((score) => (
                          <button
                            key={score}
                            onClick={() => updateFirmScore('firmC', criteria.category, score)}
                            className={`w-6 h-6 rounded-full border text-xs font-medium transition-colors ${
                              firmScores.firmC?.[criteria.category] === score
                                ? 'bg-amber-600 border-amber-600 text-white'
                                : 'border-slate-300 text-slate-600 hover:border-amber-400 hover:text-amber-600'
                            }`}
                          >
                            {score}
                          </button>
                        ))}
                        <span className="ml-2 text-xs text-slate-500">
                          = {calculateWeightedScore('firmC', criteria.category).toFixed(1)}
                        </span>
                      </div>
                      
                      <div>
                        <input
                          type="text"
                          placeholder="Add notes..."
                          className="w-full text-xs px-2 py-1 border border-slate-300 rounded"
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Total Scores */}
                  <div className="grid grid-cols-6 gap-4 text-sm font-semibold text-slate-900 pt-4 mt-4 border-t border-slate-300">
                    <div>Total Score</div>
                    <div>100%</div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">
                        {getTotalScore('firmA').toFixed(1)} / 5.0
                      </div>
                      {getTotalScore('firmA') > 0 && (
                        <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getScoreRating(getTotalScore('firmA')).color}`}>
                          {getScoreRating(getTotalScore('firmA')).rating}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-600">
                        {getTotalScore('firmB').toFixed(1)} / 5.0
                      </div>
                      {getTotalScore('firmB') > 0 && (
                        <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getScoreRating(getTotalScore('firmB')).color}`}>
                          {getScoreRating(getTotalScore('firmB')).rating}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-amber-600">
                        {getTotalScore('firmC').toFixed(1)} / 5.0
                      </div>
                      {getTotalScore('firmC') > 0 && (
                        <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getScoreRating(getTotalScore('firmC')).color}`}>
                          {getScoreRating(getTotalScore('firmC')).rating}
                        </div>
                      )}
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              
              {/* Scoring Guide */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-slate-900 mb-2">Scoring Guide:</h5>
                <div className="grid grid-cols-5 gap-2 text-xs">
                  <div><strong>5:</strong> Excellent</div>
                  <div><strong>4:</strong> Good</div>
                  <div><strong>3:</strong> Acceptable</div>
                  <div><strong>2:</strong> Below Average</div>
                  <div><strong>1:</strong> Poor</div>
                </div>
              </div>
              
              {/* Results Summary */}
              {(getTotalScore('firmA') > 0 || getTotalScore('firmB') > 0 || getTotalScore('firmC') > 0) && (
                <div className="mt-6 p-4 bg-white border border-slate-200 rounded-lg">
                  <h5 className="font-medium text-slate-900 mb-3">Comparison Results</h5>
                  <div className="space-y-2 text-sm">
                    {getTotalScore('firmA') > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">Firm A:</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-slate-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${(getTotalScore('firmA') / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-blue-600">{getTotalScore('firmA').toFixed(1)}</span>
                        </div>
                      </div>
                    )}
                    {getTotalScore('firmB') > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">Firm B:</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-slate-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-emerald-500 h-2 rounded-full"
                              style={{ width: `${(getTotalScore('firmB') / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-emerald-600">{getTotalScore('firmB').toFixed(1)}</span>
                        </div>
                      </div>
                    )}
                    {getTotalScore('firmC') > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">Firm C:</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-slate-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-amber-500 h-2 rounded-full"
                              style={{ width: `${(getTotalScore('firmC') / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-amber-600">{getTotalScore('firmC').toFixed(1)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {selectedTab === 'questions' && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Interview Questions for Audit Firms</h2>
            
            <p className="text-slate-700 mb-8">
              Use these questions during your auditor interviews to assess their capabilities, approach, 
              and fit for your organization. Take notes on their responses for comparison.
            </p>

            <div className="space-y-8">
              {interviewQuestions.map((category, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.questions.map((question, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-900 font-medium">{question}</p>
                          <div className="mt-2 p-2 bg-slate-50 rounded text-sm text-slate-600">
                            <span className="font-medium">Notes:</span> ________________________________
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Red Flags Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Red Flags to Watch For</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {redFlags.map((category, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      {category.category}
                    </h4>
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
            </div>
          </section>
        )}

        {selectedTab === 'costs' && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Understanding SOC 2 Audit Costs</h2>
            
            <p className="text-slate-700 mb-8">
              SOC 2 audit costs vary significantly based on multiple factors. Understanding these cost drivers 
              helps you budget appropriately and compare proposals fairly.
            </p>

            {/* Cost Factors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Cost Drivers</h3>
              <div className="space-y-4">
                {costFactors.map((factor, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900">{factor.factor}</h4>
                        <p className="text-slate-600 text-sm mt-1">{factor.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        factor.impact === 'High' ? 'bg-red-100 text-red-800' :
                        factor.impact === 'Medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {factor.impact} Impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Models */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Common Pricing Models</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Calculator className="w-5 h-5 text-blue-600 mr-2" />
                    Fixed Fee
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-slate-900">Best For:</span>
                      <p className="text-slate-700">Well-defined scope, first-time audits, budget certainty</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Pros:</span>
                      <p className="text-slate-700">Predictable costs, no surprise bills, incentivizes efficiency</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Cons:</span>
                      <p className="text-slate-700">May include contingencies, scope changes cost extra</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-amber-600 mr-2" />
                    Hourly Billing
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-slate-900">Best For:</span>
                      <p className="text-slate-700">Complex audits, uncertain scope, ongoing relationships</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Pros:</span>
                      <p className="text-slate-700">Pays for actual work, flexible scope adjustments</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Cons:</span>
                      <p className="text-slate-700">Unpredictable final costs, potential for scope creep</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Ranges */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="font-medium text-slate-900 mb-4">Typical Cost Ranges by Company Size</h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-slate-900">Startup</div>
                  <div className="text-slate-600">&lt; 50 employees</div>
                  <div className="text-lg font-bold text-blue-600">$15K - $35K</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-900">Small Business</div>
                  <div className="text-slate-600">50 - 200 employees</div>
                  <div className="text-lg font-bold text-blue-600">$25K - $60K</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-900">Mid-Market</div>
                  <div className="text-slate-600">200 - 1,000 employees</div>
                  <div className="text-lg font-bold text-blue-600">$50K - $120K</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-900">Enterprise</div>
                  <div className="text-slate-600">1,000+ employees</div>
                  <div className="text-lg font-bold text-blue-600">$100K - $300K+</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm mt-4 text-center">
                *Costs vary significantly based on complexity, scope, and auditor selection
              </p>
            </div>
          </section>
        )}

        {/* Templates CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white text-center my-12">
          <h2 className="text-2xl font-bold mb-4">Prepare for Your Auditor Interviews</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Having proper documentation ready shows auditors youyou'reapos;re prepared and can significantly 
            reduce your audit costs. Get our proven templates to demonstrate compliance readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products/complete-bundle" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Complete Bundle
              <Download className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/resources/cost-calculator" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Calculate Audit Costs
              <Calculator className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Decision Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Final Decision Framework</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Must-Have Qualifications</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Current CPA license and AICPA membership</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Minimum 20 SOC 2 audits completed annually</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Experience with your industry or business model</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Clear references from similar-sized companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Professional liability insurance coverage</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Making the Final Choice</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <strong>1. Evaluate scores:</strong> Use your weighted scorecard to objectively compare firms.
                </p>
                <p>
                  <strong>2. Check references:</strong> Speak with recent clients about their audit experience.
                </p>
                <p>
                  <strong>3. Assess chemistry:</strong> Choose auditors you can communicate with effectively.
                </p>
                <p>
                  <strong>4. Review proposals:</strong> Ensure scope, timeline, and costs are clearly defined.
                </p>
                <p>
                  <strong>5. Trust your instincts:</strong> Select the firm that feels like the best long-term partner.
                </p>
              </div>
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
              <h3 className="font-medium text-slate-900 mb-2">Get Organized</h3>
              <p className="text-slate-600 text-sm mb-3">
                Prepare your documentation and policies before auditor interviews.
              </p>
              <a href="/products" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Browse Templates →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Plan Your Budget</h3>
              <p className="text-slate-600 text-sm mb-3">
                Use our cost calculator to estimate audit expenses and compare proposals.
              </p>
              <a href="/resources/cost-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                Calculate Costs →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Start Implementation</h3>
              <p className="text-slate-600 text-sm mb-3">
                Begin implementing SOC 2 controls to prepare for your audit engagement.
              </p>
              <a href="/resources/soc2-checklist" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                Use Checklist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AuditorSelectionGuidePage;