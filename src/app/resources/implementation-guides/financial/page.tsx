"use client"
import React, { useState } from 'react';
import { Check, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, ChevronDown, ChevronRight, Lightbulb, DollarSign, CreditCard, Building, Gavel, Eye, Database, CheckCircle, TrendingUp, BarChart, Settings } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const FinancialImplementationGuidePage = () => {
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
    { label: 'Financial Services', href: '/resources/implementation-guides/financial' }
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
            <Icon className="w-6 h-6 text-green-600 mr-3" />
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
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4 mr-2" />
            Financial Services Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 for Financial Services
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Enhanced security approach for FinTech and financial services with comprehensive coverage 
            of all five SOC 2 criteria and regulatory compliance considerations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#overview" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
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
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Financial Services SOC 2 Quick Reference</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-green-800">Recommended Criteria:</strong>
                  <p className="text-slate-700">All Five Criteria</p>
                </div>
                <div>
                  <strong className="text-green-800">Typical Timeline:</strong>
                  <p className="text-slate-700">12-18 months</p>
                </div>
                <div>
                  <strong className="text-green-800">Key Focus:</strong>
                  <p className="text-slate-700">Processing Integrity, regulatory compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Landscape */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Gavel className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Complex Regulatory Environment</h3>
              <p className="text-slate-700 mb-3">
                Financial services companies operate in a heavily regulated environment with multiple 
                overlapping compliance requirements that must align with SOC 2 controls.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-slate-900">Key Regulations:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• PCI DSS (payment card data)</li>
                    <li>• SOX (publicly traded companies)</li>
                    <li>• GLBA (financial privacy)</li>
                    <li>• FFIEC guidelines (banking)</li>
                    <li>• State money transmitter laws</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">Regulatory Bodies:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• Federal Reserve (Fed)</li>
                    <li>• FDIC (deposit insurance)</li>
                    <li>• OCC (national banks)</li>
                    <li>• FINRA (broker-dealers)</li>
                    <li>• State banking regulators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <GuideSection id="overview" title="Financial Services Overview" icon={Target}>
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Financial services companies require the most comprehensive SOC 2 implementation, 
                typically needing all five Trust Service Criteria due to the critical nature of 
                financial data and regulatory requirements.
              </p>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why All Five Criteria for Financial Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-900 mb-2">Security & Confidentiality:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Customer financial data protection</li>
                      <li>• Transaction security and fraud prevention</li>
                      <li>• Regulatory data confidentiality requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-900 mb-2">Availability & Processing Integrity:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• 24/7 financial service availability</li>
                      <li>• Accurate transaction processing</li>
                      <li>• Real-time payment processing integrity</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-green-900 mb-2">Privacy:</h5>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• GLBA privacy requirements for financial institutions</li>
                    <li>• Customer consent and preference management</li>
                    <li>• Third-party data sharing governance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Financial Services Scope Considerations</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Financial services scope typically includes all customer-facing and transaction processing systems:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Core Systems (Must Include):</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Payment processing platforms</li>
                      <li>• Core banking systems</li>
                      <li>• Customer account management</li>
                      <li>• Transaction monitoring systems</li>
                      <li>• Digital banking platforms</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Supporting Systems:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Risk management platforms</li>
                      <li>• Regulatory reporting systems</li>
                      <li>• Customer onboarding (KYC/AML)</li>
                      <li>• Fraud detection and prevention</li>
                      <li>• Customer support systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="processing-integrity" title="Processing Integrity Controls" icon={TrendingUp}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Processing Integrity is particularly critical for financial services, ensuring that 
                transactions are processed completely, accurately, and in a timely manner.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Critical: Transaction Integrity</h4>
                    <p className="text-slate-700 mb-3">
                      Financial transactions must be processed with absolute accuracy. Any processing 
                      errors can result in financial loss, regulatory violations, and customer harm.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Input Controls:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Data validation and format checking</li>
                          <li>• Duplicate transaction detection</li>
                          <li>• Amount and account verification</li>
                          <li>• Source authentication</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Processing Controls:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Transaction sequencing</li>
                          <li>• Balance validation</li>
                          <li>• Rate limiting and velocity checks</li>
                          <li>• Error handling and rollback</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Financial Processing Control Framework</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-green-900 mb-2">Real-Time Transaction Monitoring</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Transaction pattern analysis and anomaly detection</li>
                      <li>• Real-time fraud scoring and risk assessment</li>
                      <li>• Automated transaction blocking for suspicious activity</li>
                      <li>• Balance verification and overdraft protection</li>
                      <li>• Currency conversion accuracy checks</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-900 mb-2">End-to-End Transaction Auditing</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Complete transaction lifecycle tracking</li>
                      <li>• Immutable audit logs with digital signatures</li>
                      <li>• Reconciliation controls and exception reporting</li>
                      <li>• Failed transaction analysis and retry mechanisms</li>
                      <li>• Performance monitoring and SLA compliance</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-900 mb-2">Financial Calculation Accuracy</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Interest calculation validation and testing</li>
                      <li>• Fee computation accuracy controls</li>
                      <li>• Rounding error detection and correction</li>
                      <li>• Multi-currency calculation verification</li>
                      <li>• Regulatory calculation compliance (APR, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="regulatory-compliance" title="Regulatory Compliance Integration" icon={Building}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Financial services companies must demonstrate how SOC 2 controls support broader 
                regulatory compliance requirements across multiple jurisdictions and regulatory bodies.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">SOC 2 Integration with Financial Regulations</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded p-4">
                    <h5 className="font-medium text-blue-900 mb-2">PCI DSS Alignment</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">PCI DSS Requirements:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Secure network architecture</li>
                          <li>• Cardholder data protection</li>
                          <li>• Strong access controls</li>
                          <li>• Regular security testing</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">SOC 2 Support:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• CC6.1-6.7 Network and data security</li>
                          <li>• CC6.7 Encryption controls</li>
                          <li>• CC6.1-6.3 Access management</li>
                          <li>• CC7.1-7.2 Monitoring and testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded p-4">
                    <h5 className="font-medium text-blue-900 mb-2">GLBA (Gramm-Leach-Bliley Act) Mapping</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">GLBA Requirements:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Privacy rule compliance</li>
                          <li>• Safeguards rule implementation</li>
                          <li>• Customer notice requirements</li>
                          <li>• Opt-out provisions</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">SOC 2 Coverage:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• P1.0-P8.1 Privacy criteria</li>
                          <li>• CC6.1-6.8 Security safeguards</li>
                          <li>• CC2.1-2.3 Communication controls</li>
                          <li>• CC1.2-1.5 Governance framework</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded p-4">
                    <h5 className="font-medium text-blue-909 mb-2">FFIEC Guidelines Integration</h5>
                    <p className="text-slate-700 text-sm mb-2">
                      Federal Financial Institutions Examination Council guidelines for IT risk management:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Risk assessment and management processes</li>
                      <li>• Information security program requirements</li>
                      <li>• Business continuity and disaster recovery</li>
                      <li>• Vendor management and third-party oversight</li>
                      <li>• Incident response and reporting procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Regulatory Reporting Integration</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Leverage SOC 2 evidence and controls for regulatory reporting requirements:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Operational Risk Reporting:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Incident management documentation</li>
                      <li>• Risk assessment and mitigation evidence</li>
                      <li>• Control testing and validation results</li>
                      <li>• Third-party risk management records</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Cybersecurity Reporting:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Security control effectiveness metrics</li>
                      <li>• Vulnerability management programs</li>
                      <li>• Penetration testing and assessment results</li>
                      <li>• Security awareness training records</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="anti-fraud-controls" title="Anti-Fraud & AML Controls" icon={Eye}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Financial services companies must implement comprehensive anti-fraud and 
                Anti-Money Laundering (AML) controls that integrate with SOC 2 requirements.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-900 mb-3">Fraud Detection and Prevention Framework</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Real-Time Fraud Monitoring</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Machine learning-based transaction scoring</li>
                      <li>• Behavioral analytics and pattern recognition</li>
                      <li>• Device fingerprinting and geolocation analysis</li>
                      <li>• Velocity checks and transaction limits</li>
                      <li>• Cross-channel fraud detection</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Identity Verification and KYC</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Multi-factor identity verification processes</li>
                      <li>• Document authentication and validation</li>
                      <li>• Biometric verification capabilities</li>
                      <li>• Sanctions screening and watchlist monitoring</li>
                      <li>• Ongoing customer due diligence</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Suspicious Activity Monitoring</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Automated suspicious activity report (SAR) generation</li>
                      <li>• Currency transaction report (CTR) compliance</li>
                      <li>• Unusual pattern detection and investigation</li>
                      <li>• Case management and investigation workflows</li>
                      <li>• Regulatory reporting and filing procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">AML Program Integration with SOC 2</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Data Quality and Integrity</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ Customer data accuracy and completeness</li>
                      <li>✓ Transaction data integrity controls</li>
                      <li>✓ Source system reliability monitoring</li>
                      <li>✓ Data lineage and audit trails</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">System Availability and Performance</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ 24/7 monitoring system availability</li>
                      <li>✓ Real-time alert processing</li>
                      <li>✓ Backup and disaster recovery testing</li>
                      <li>✓ Performance monitoring and optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="third-party-risk" title="Third-Party Risk Management" icon={Users}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Financial services companies face heightened third-party risk requirements due to 
                regulatory expectations and the critical nature of financial services.
              </p>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Enhanced Third-Party Due Diligence</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-green-900 mb-2">Risk-Based Vendor Classification</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">High Risk:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Core banking services</li>
                          <li>• Payment processors</li>
                          <li>• Cloud infrastructure</li>
                          <li>• Customer data analytics</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Medium Risk:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Customer support tools</li>
                          <li>• Marketing platforms</li>
                          <li>• Office productivity suites</li>
                          <li>• HR management systems</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Low Risk:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Facility management</li>
                          <li>• Office supplies</li>
                          <li>• General utilities</li>
                          <li>• Non-data processing services</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-900 mb-2">Regulatory Due Diligence Requirements</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• SOC 2 Type II report verification (required for high-risk vendors)</li>
                      <li>• Financial stability and business continuity assessment</li>
                      <li>• Regulatory compliance history review</li>
                      <li>• Information security assessment and penetration testing</li>
                      <li>• Data residency and cross-border transfer compliance</li>
                      <li>• Incident response and breach notification capabilities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Ongoing Vendor Oversight</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Continuous Monitoring</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Quarterly risk assessments for high-risk vendors</li>
                      <li>• Annual SOC 2 report review and gap analysis</li>
                      <li>• Real-time security rating monitoring</li>
                      <li>• Financial health monitoring</li>
                      <li>• Regulatory action and news monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Performance Management</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• SLA monitoring and reporting</li>
                      <li>• Incident tracking and root cause analysis</li>
                      <li>• Regular business reviews</li>
                      <li>• Contract compliance verification</li>
                      <li>• Exit planning and data recovery procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="business-continuity" title="Enhanced Business Continuity & Resilience" icon={Shield}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Financial services require enhanced business continuity planning due to regulatory 
                requirements and the critical nature of financial services to the economy.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Regulatory Business Continuity Requirements</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Recovery Time Objectives (RTO)</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Critical Systems:</strong>
                        <p className="text-slate-700">RTO: 15 minutes - 1 hour</p>
                        <ul className="text-slate-700 mt-1">
                          <li>• Payment processing</li>
                          <li>• ATM networks</li>
                          <li>• Online banking</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Important Systems:</strong>
                        <p className="text-slate-700">RTO: 2-4 hours</p>
                        <ul className="text-slate-700 mt-1">
                          <li>• Account management</li>
                          <li>• Customer service</li>
                          <li>• Fraud monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Supporting Systems:</strong>
                        <p className="text-slate-700">RTO: 4-24 hours</p>
                        <ul className="text-slate-700 mt-1">
                          <li>• Reporting systems</li>
                          <li>• Analytics platforms</li>
                          <li>• Administrative tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Recovery Point Objectives (RPO)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Financial transactions: RPO of 0 (no data loss acceptable)</li>
                      <li>• Customer account data: RPO of 15 minutes maximum</li>
                      <li>• Configuration changes: RPO of 1 hour maximum</li>
                      <li>• Analytical data: RPO of 4-24 hours acceptable</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Critical: Financial Services Continuity Testing</h4>
                    <p className="text-slate-700 mb-3">
                      Regulators require annual business continuity testing with specific documentation and reporting requirements.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Testing Requirements:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Full disaster recovery exercise annually</li>
                          <li>• Quarterly component testing</li>
                          <li>• Monthly backup verification</li>
                          <li>• Staff training and awareness</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Documentation:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Test plans and procedures</li>
                          <li>• Results and gap analysis</li>
                          <li>• Improvement plans and timelines</li>
                          <li>• Regulatory reporting requirements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="evidence-collection" title="Financial Services Evidence Collection" icon={Database}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Financial services audits require comprehensive evidence collection covering 
                all five SOC 2 criteria plus regulatory compliance documentation.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-3">Core SOC 2 Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive access control testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Transaction processing integrity validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Business continuity testing results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Privacy control implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>System availability monitoring</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Regulatory Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>PCI DSS compliance validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AML program effectiveness testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fraud detection system validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Third-party risk assessment documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regulatory reporting compliance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Financial Services Audit Timeline</h4>
                <p className="text-slate-700 text-sm mb-4">
                  Financial services audits typically require 12-18 months of evidence collection:
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Months 1-3:</strong>
                    <p className="text-slate-700">Control implementation and initial testing</p>
                  </div>
                  <div>
                    <strong className="text-slate-900">Months 4-9:</strong>
                    <p className="text-slate-700">Ongoing operation and evidence collection</p>
                  </div>
                  <div>
                    <strong className="text-slate-900">Months 10-12:</strong>
                    <p className="text-slate-700">Comprehensive testing and validation</p>
                  </div>
                  <div>
                    <strong className="text-slate-900">Months 13-18:</strong>
                    <p className="text-slate-700">Pre-audit preparation and audit execution</p>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>
        </div>

        {/* Implementation Roadmap */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Financial Services Implementation Roadmap</h2>
          <p className="text-slate-700 mb-6">
            Follow this comprehensive timeline to implement all five SOC 2 criteria for your financial services organization:
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-green-600 mb-2">Months 1-4</div>
              <h4 className="font-semibold text-slate-900 mb-2">Foundation & Planning</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Regulatory requirements mapping</li>
                <li>• Risk assessment and gap analysis</li>
                <li>• Governance framework setup</li>
                <li>• Policy development</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-blue-600 mb-2">Months 5-8</div>
              <h4 className="font-semibold text-slate-900 mb-2">Core Implementation</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Security controls implementation</li>
                <li>• Processing integrity systems</li>
                <li>• Fraud prevention deployment</li>
                <li>• Third-party risk program</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-amber-600 mb-2">Months 9-12</div>
              <h4 className="font-semibold text-slate-900 mb-2">Testing & Validation</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Comprehensive control testing</li>
                <li>• Business continuity exercises</li>
                <li>• Regulatory compliance validation</li>
                <li>• Evidence collection</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-slate-600 mb-2">Months 13-18</div>
              <h4 className="font-semibold text-slate-900 mb-2">Audit & Certification</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Pre-audit readiness assessment</li>
                <li>• Auditor selection and engagement</li>
                <li>• Type II audit execution</li>
                <li>• Remediation and certification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources and Tools */}
        <div className="mt-8 bg-slate-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Financial Services Templates & Resources</h3>
          <p className="text-slate-700 mb-6">
            Our comprehensive templates address the unique requirements of financial services, 
            covering all five SOC 2 criteria and regulatory compliance considerations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Financial Services Policy Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Comprehensive policies covering all five criteria</p>
              <a href="/products/policies" className="text-green-600 hover:text-green-700 font-medium">
                View Policies →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Processing Integrity Controls</h4>
              <p className="text-sm text-slate-600 mb-4">Specialized templates for transaction processing</p>
              <a href="/products/documents" className="text-blue-600 hover:text-blue-700 font-medium">
                View Documents →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Complete Financial Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Everything for comprehensive financial compliance</p>
              <a href="/products/complete-bundle" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Get Everything →
              </a>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Explore Other Industry Guides</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/resources/implementation-guides/saas-cloud-services" className="text-blue-600 hover:text-blue-700 text-sm">
              SaaS/Cloud Services Guide →
            </a>
            <a href="/resources/implementation-guides/healthcare" className="text-blue-600 hover:text-blue-700 text-sm">
              Healthcare Technology Guide →
            </a>
            <a href="/resources/implementation-guides/ecommerce" className="text-blue-600 hover:text-blue-700 text-sm">
              E-commerce Platform Guide →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FinancialImplementationGuidePage;