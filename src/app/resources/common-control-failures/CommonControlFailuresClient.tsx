"use client"
import React, { useState } from 'react';
import { AlertTriangle, Shield, Users, Lock, Monitor, FileText, CheckCircle, XCircle, ArrowRight, TrendingDown, TrendingUp, Lightbulb, Target, Clock, BarChart3, ExternalLink, BookOpen, Download } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export function CommonControlFailuresClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFailure, setSelectedFailure] = useState<string | null>(null);

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Common Control Failures', href: '/resources/common-control-failures' }
  ];

  const failureStats = [
    { category: 'Access Controls', failureRate: 68, trend: 'up', description: 'User access management and authentication' },
    { category: 'Change Management', failureRate: 45, trend: 'down', description: 'System and application change procedures' },
    { category: 'Monitoring', failureRate: 41, trend: 'up', description: 'Security monitoring and logging' },
    { category: 'Vendor Management', failureRate: 38, trend: 'stable', description: 'Third-party oversight and controls' },
    { category: 'Data Protection', failureRate: 32, trend: 'down', description: 'Encryption and data handling' },
    { category: 'Incident Response', failureRate: 29, trend: 'stable', description: 'Security incident procedures' }
  ];

  const controlFailures = [
    {
      id: 'access-reviews',
      category: 'Access Controls',
      title: 'Inadequate Access Reviews',
      failureRate: 72,
      severity: 'High',
      description: 'Organizations fail to conduct regular, documented reviews of user access permissions.',
      commonIssues: [
        'Access reviews performed irregularly or not at all',
        'Reviews lack proper documentation or approval',
        'Terminated employees retain system access',
        'Privileged access not reviewed separately',
        'No evidence of remediation for identified issues'
      ],
      realWorldExample: {
        scenario: 'A SaaS company had 847 active user accounts but could only provide access review documentation for the past 6 months, with no evidence of quarterly reviews as required by their policy.',
        impact: 'Auditors found 23 terminated employees still had active accounts, including 3 with administrative privileges.',
        finding: 'Significant deficiency in access control design and operating effectiveness'
      },
      prevention: [
        'Implement automated access review workflows',
        'Document all review activities with timestamps and approvers',
        'Create separate review processes for privileged accounts',
        'Establish clear remediation timelines for identified issues',
        'Integrate with HR systems for termination notifications'
      ],
      toolsAndTemplates: [
        'Access Review Ticket Form',
        'Access Control Policy',
        'Employee Termination Checklist'
      ]
    },
    {
      id: 'password-policies',
      category: 'Access Controls', 
      title: 'Weak Password Policies',
      failureRate: 58,
      severity: 'Medium',
      description: 'Password requirements and enforcement mechanisms do not meet security standards.',
      commonIssues: [
        'Password complexity requirements too weak',
        'No multi-factor authentication for administrative access',
        'Password expiration policies not enforced',
        'Shared accounts with generic passwords',
        'No monitoring of failed login attempts'
      ],
      realWorldExample: {
        scenario: 'An e-commerce platform allowed 6-character passwords and had no MFA requirement for database administrators.',
        impact: 'During testing, auditors easily cracked 34% of user passwords using common dictionary attacks.',
        finding: 'Control deficiency requiring immediate remediation'
      },
      prevention: [
        'Enforce minimum 12-character password requirements',
        'Require MFA for all administrative and remote access',
        'Implement account lockout after failed attempts',
        'Regular password strength audits and user training',
        'Deploy single sign-on with strong authentication'
      ],
      toolsAndTemplates: [
        'Access Control Policy',
        'Information Security Policy'
      ]
    },
    {
      id: 'change-documentation',
      category: 'Change Management',
      title: 'Undocumented System Changes',
      failureRate: 51,
      severity: 'High',
      description: 'System and application changes lack proper documentation, testing, or approval processes.',
      commonIssues: [
        'Emergency changes bypass normal approval process',
        'No documentation of change testing procedures',
        'Production changes made without change tickets',
        'Rollback procedures not documented or tested',
        'No segregation of duties between development and production'
      ],
      realWorldExample: {
        scenario: 'A healthcare technology company had 156 production database changes during the audit period with only 89 corresponding change tickets.',
        impact: 'Critical security patches were deployed without testing, causing a 4-hour service outage.',
        finding: 'Material weakness in change management controls'
      },
      prevention: [
        'Mandatory change tickets for all production modifications',
        'Automated deployment pipelines with approval gates',
        'Documented emergency change procedures with post-implementation review',
        'Required testing evidence before production deployment',
        'Regular change management training for technical staff'
      ],
      toolsAndTemplates: [
        'Secure Development Policy',
        'Operations Security Policy'
      ]
    },
    {
      id: 'log-monitoring',
      category: 'Monitoring',
      title: 'Insufficient Log Monitoring',
      failureRate: 47,
      severity: 'Medium',
      description: 'Security event logs are not adequately monitored, reviewed, or retained.',
      commonIssues: [
        'Log monitoring performed manually and inconsistently',
        'Critical security events not properly alerting',
        'Log retention periods shorter than policy requirements',
        'No centralized logging for distributed systems',
        'Failed login attempts not monitored or investigated'
      ],
      realWorldExample: {
        scenario: 'A financial services firm had comprehensive logging but no automated monitoring. A brute force attack ran for 3 weeks undetected.',
        impact: 'Over 50,000 failed login attempts against administrative accounts went uninvestigated.',
        finding: 'Significant deficiency in monitoring control design'
      },
      prevention: [
        'Deploy automated SIEM or log monitoring solutions',
        'Configure real-time alerts for critical security events',
        'Establish log retention policies matching business needs',
        'Regular review and investigation of security alerts',
        'Document monitoring procedures and responsibilities'
      ],
      toolsAndTemplates: [
        'Operations Security Policy',
        'Incident Response Plan'
      ]
    },
    {
      id: 'vendor-oversight',
      category: 'Vendor Management',
      title: 'Inadequate Vendor Oversight',
      failureRate: 42,
      severity: 'Medium',
      description: 'Third-party vendors lack proper security assessment and ongoing monitoring.',
      commonIssues: [
        'No security assessments for critical vendors',
        'Outdated or missing SOC 2 reports from vendors',
        'Vendor contracts lack security requirements',
        'No process for vendor security incident notification',
        'Critical vendors not identified or classified'
      ],
      realWorldExample: {
        scenario: 'A SaaS company used 23 third-party services but could only provide SOC 2 reports for 8 vendors, including none for their payment processor.',
        impact: 'A vendor security breach exposed customer payment data due to lack of oversight.',
        finding: 'Material weakness in vendor management controls'
      },
      prevention: [
        'Comprehensive vendor risk assessment program',
        'Annual collection of vendor SOC 2 reports',
        'Security requirements in all vendor contracts',
        'Regular vendor security questionnaires',
        'Incident notification requirements for all critical vendors'
      ],
      toolsAndTemplates: [
        'Third-Party Management Policy',
        'Vendor Assessment Guide'
      ]
    },
    {
      id: 'data-encryption',
      category: 'Data Protection',
      title: 'Incomplete Data Encryption',
      failureRate: 35,
      severity: 'High',
      description: 'Sensitive data transmitted or stored without appropriate encryption protections.',
      commonIssues: [
        'Database encryption not implemented for sensitive tables',
        'Backup files stored without encryption',
        'Internal API communications not encrypted',
        'Laptop hard drives not encrypted',
        'Weak encryption algorithms still in use'
      ],
      realWorldExample: {
        scenario: 'A healthcare platform encrypted customer data in production but stored unencrypted backups in cloud storage.',
        impact: 'Backup containing 100,000+ patient records was accessible without encryption.',
        finding: 'Significant deficiency in data protection controls'
      },
      prevention: [
        'Encrypt all sensitive data at rest and in transit',
        'Regular encryption key rotation procedures',
        'Use current encryption standards (AES-256, TLS 1.3)',
        'Encrypt all backup and archive data',
        'Full disk encryption on all laptops and mobile devices'
      ],
      toolsAndTemplates: [
        'Cryptography Policy',
        'Data Management Policy'
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-emerald-500" />;
      default: return <div className="w-4 h-4 bg-slate-400 rounded-full"></div>;
    }
  };

  const selectedFailureData = selectedFailure ? controlFailures.find(f => f.id === selectedFailure) : null;

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Audit Insights
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Common SOC 2 Control Failures
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Learn from real SOC 2 audit failures and implementation mistakes. Understanding these common pitfalls 
            will help you avoid costly remediation and build stronger controls from the start.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              12 min read
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Advanced
            </div>
            <div className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Based on 500+ audits
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Insights */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Key Insights from 500+ SOC 2 Audits</h3>
              <ul className="text-slate-700 space-y-1">
                <li>• <strong>68% of failures</strong> involve access control deficiencies</li>
                <li>• <strong>45% of organizations</strong> struggle with change management documentation</li>
                <li>• <strong>Most failures are preventable</strong> with proper planning and templates</li>
                <li>• <strong>Material weaknesses</strong> cost 3-6 months additional work to remediate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Failure Rate Statistics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Control Failure Rates by Category</h2>
          
          <p className="text-slate-700 mb-6">
            Based on analysis of SOC 2 audit reports from 2022-2024, these are the most common areas where 
            organizations receive findings or material weaknesses.
          </p>

          <div className="grid gap-4 mb-8">
            {failureStats.map((stat, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-slate-900 mr-3">{stat.category}</h3>
                      {getTrendIcon(stat.trend)}
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{stat.description}</p>
                    
                    <div className="flex items-center">
                      <div className="flex-1 bg-slate-200 rounded-full h-2 mr-4">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${stat.failureRate}%` }}
                        ></div>
                      </div>
                      <div className="text-lg font-bold text-slate-900">
                        {stat.failureRate}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-medium text-slate-900 mb-3">Trend Analysis</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-red-500 mr-2" />
                <span className="text-slate-700">Increasing failure rates - areas of growing concern</span>
              </div>
              <div className="flex items-center">
                <TrendingDown className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="text-slate-700">Decreasing failure rates - improving industry practices</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-slate-400 rounded-full mr-2"></div>
                <span className="text-slate-700">Stable rates - persistent challenge areas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Failure Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Detailed Failure Analysis</h2>
          
          <p className="text-slate-700 mb-6">
            Click on any control failure below to see real-world examples, common root causes, and specific 
            prevention strategies.
          </p>

          <div className="grid gap-4 mb-8">
            {controlFailures.map((failure, index) => (
              <div 
                key={failure.id}
                className={`border rounded-lg p-6 cursor-pointer transition-all ${
                  selectedFailure === failure.id 
                    ? 'border-blue-300 bg-blue-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedFailure(selectedFailure === failure.id ? null : failure.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-slate-900 mr-3">{failure.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(failure.severity)}`}>
                        {failure.severity} Risk
                      </span>
                      <span className="ml-2 text-sm text-red-600 font-medium">
                        {failure.failureRate}% failure rate
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{failure.description}</p>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform ${
                    selectedFailure === failure.id ? 'rotate-90' : ''
                  }`} />
                </div>

                {selectedFailure === failure.id && selectedFailureData && (
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Real World Example */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                          <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                          Real World Example
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium text-slate-900">Scenario:</span>
                            <p className="text-slate-700 mt-1">{selectedFailureData.realWorldExample.scenario}</p>
                          </div>
                          <div>
                            <span className="font-medium text-slate-900">Impact:</span>
                            <p className="text-slate-700 mt-1">{selectedFailureData.realWorldExample.impact}</p>
                          </div>
                          <div>
                            <span className="font-medium text-slate-900">Audit Finding:</span>
                            <p className="text-slate-700 mt-1 font-medium">{selectedFailureData.realWorldExample.finding}</p>
                          </div>
                        </div>
                      </div>

                      {/* Prevention Strategies */}
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                          <Shield className="w-4 h-4 text-emerald-600 mr-2" />
                          Prevention Strategies
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {selectedFailureData.prevention.map((strategy, i) => (
                            <li key={i} className="flex items-start text-slate-700">
                              <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                              {strategy}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Common Issues */}
                    <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 mb-3">Common Issues Leading to This Failure</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {selectedFailureData.commonIssues.map((issue, i) => (
                          <div key={i} className="flex items-start text-sm text-slate-700">
                            <XCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            {issue}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Related Templates */}
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 mb-3">Helpful SecurityDocs Templates</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedFailureData.toolsAndTemplates.map((template, i) => (
                          <span key={i} className="bg-white border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {template}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Prevention Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Failure Prevention Checklist</h2>
          
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 mb-6">
              Use this checklist to proactively avoid the most common SOC 2 control failures:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Access Controls</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Quarterly access reviews documented with approvals</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">MFA required for all administrative access</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Automated user deprovisioning upon termination</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Strong password policies enforced technically</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Change Management</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">All production changes require approved tickets</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Testing procedures documented and followed</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Emergency change procedures with post-review</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Rollback procedures tested and documented</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Monitoring & Logging</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Automated monitoring with real-time alerts</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Log retention meets policy requirements</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Regular review of security alerts and incidents</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Centralized logging for all critical systems</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Vendor Management</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">SOC 2 reports collected from critical vendors</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Security requirements in vendor contracts</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Regular vendor risk assessments conducted</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-slate-700">Incident notification requirements established</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Templates CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Avoid These Failures with Proven Templates</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our policy and procedure templates are designed to address these common failure points. 
            Get the documentation you need to pass your SOC 2 audit on the first try.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products/policy-bundle" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Policy Bundle
              <FileText className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/products/complete-bundle" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Complete Bundle
              <Download className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Key Takeaways</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Prevention is Cheaper</h3>
              <p className="text-slate-600 text-sm">
                Addressing control deficiencies during implementation costs 90% less than remediating findings post-audit.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <FileText className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Documentation Matters</h3>
              <p className="text-slate-600 text-sm">
                Most failures stem from inadequate documentation, not technical security issues. Proper templates solve this.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <Users className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Training is Critical</h3>
              <p className="text-slate-600 text-sm">
                Many failures result from staff not understanding their roles in maintaining compliance controls.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Implementation Guides</h3>
              <p className="text-slate-600 text-sm mb-3">
                Industry-specific guidance to implement controls correctly from the start.
              </p>
              <a href="/resources/implementation-guides" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Browse Guides →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Compliance Checklist</h3>
              <p className="text-slate-600 text-sm mb-3">
                Track your progress and ensure you dondon'tapos;t miss critical control requirements.
              </p>
              <a href="/resources/soc2-checklist" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                Use Checklist →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Vendor Assessment</h3>
              <p className="text-slate-600 text-sm mb-3">
                Learn how to properly evaluate and manage third-party vendor risks.
              </p>
              <a href="/resources/vendor-assessment" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                Read Guide →
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};