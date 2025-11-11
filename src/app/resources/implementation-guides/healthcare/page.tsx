"use client"
import React, { useState } from 'react';
import { Check, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, ChevronDown, ChevronRight, Lightbulb, Heart, Database, Eye, KeyRound, Building, CheckCircle, UserCheck, FileSearch } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const HealthcareImplementationGuidePage = () => {
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
    { label: 'Healthcare Technology', href: '/resources/implementation-guides/healthcare' }
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
            <Icon className="w-6 h-6 text-red-600 mr-3" />
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
      <section className="bg-gradient-to-br from-red-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Healthcare Technology Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 for Healthcare Technology
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Specialized guide for HealthTech companies navigating both SOC 2 and HIPAA compliance. 
            Focus on Security + Privacy + Confidentiality with enhanced controls for protected health information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#overview" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
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
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">HealthTech SOC 2 Quick Reference</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-red-800">Recommended Criteria:</strong>
                  <p className="text-slate-700">Security + Privacy + Confidentiality</p>
                </div>
                <div>
                  <strong className="text-red-800">Typical Timeline:</strong>
                  <p className="text-slate-700">9-12 months</p>
                </div>
                <div>
                  <strong className="text-red-800">Key Focus:</strong>
                  <p className="text-slate-700">PHI protection, dual compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Compliance Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Important: Dual Compliance Strategy</h3>
              <p className="text-slate-700 mb-3">
                Healthcare technology companies typically need both SOC 2 and HIPAA compliance. 
                This guide shows how to align requirements and avoid duplicate efforts.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-slate-900">SOC 2 Provides:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• Third-party validation of controls</li>
                    <li>• Enterprise customer requirements</li>
                    <li>• Comprehensive security framework</li>
                    <li>• Vendor risk management</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">HIPAA Requires:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• PHI-specific protections</li>
                    <li>• Business Associate Agreements</li>
                    <li>• Breach notification procedures</li>
                    <li>• Patient rights and access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <GuideSection id="overview" title="Healthcare-Specific Overview" icon={Target}>
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Healthcare technology companies face unique compliance challenges due to the sensitive nature 
                of protected health information (PHI) and the regulatory environment. This guide addresses 
                the intersection of SOC 2 and HIPAA requirements.
              </p>

              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why Security + Privacy + Confidentiality for HealthTech</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-red-900 mb-2">Security:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• PHI protection controls</li>
                      <li>• Access controls and authentication</li>
                      <li>• Threat detection and response</li>
                      <li>• Vulnerability management</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-900 mb-2">Privacy:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Patient consent management</li>
                      <li>• Data use limitations</li>
                      <li>• Third-party data sharing</li>
                      <li>• Individual rights compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-900 mb-2">Confidentiality:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Data encryption requirements</li>
                      <li>• Access logging and monitoring</li>
                      <li>• Data retention and disposal</li>
                      <li>• Confidentiality agreements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Common HealthTech Scope Definition</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Focus your initial SOC 2 scope on systems that handle PHI:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Include in Scope:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Electronic Health Record (EHR) systems</li>
                      <li>• Patient portals and mobile apps</li>
                      <li>• PHI databases and data warehouses</li>
                      <li>• Integration APIs with healthcare providers</li>
                      <li>• Telehealth platforms</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Consider for Future Scope:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Analytics and reporting systems</li>
                      <li>• Research and development environments</li>
                      <li>• Marketing and customer support tools</li>
                      <li>• Administrative and billing systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="phi-protection" title="PHI Protection & Data Classification" icon={Eye}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Protected Health Information (PHI) requires the highest level of protection under both 
                HIPAA and SOC 2. Proper classification and handling is fundamental to compliance.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-900 mb-3">PHI Data Classification</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Highly Sensitive PHI</h5>
                    <p className="text-sm text-slate-700 mb-2">Requires maximum protection and access controls:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Mental health records</li>
                      <li>• Substance abuse treatment records</li>
                      <li>• Genetic information</li>
                      <li>• HIV/AIDS related information</li>
                      <li>• Reproductive health information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Standard PHI</h5>
                    <p className="text-sm text-slate-700 mb-2">All individually identifiable health information:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Medical records and history</li>
                      <li>• Treatment plans and notes</li>
                      <li>• Laboratory and diagnostic results</li>
                      <li>• Prescription and medication data</li>
                      <li>• Insurance and billing information</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">De-identified Data</h5>
                    <p className="text-sm text-slate-700 mb-2">Data with all 18 HIPAA identifiers removed:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Can be used for research and analytics</li>
                      <li>• Still requires secure handling</li>
                      <li>• Document de-identification process</li>
                      <li>• Regular re-identification risk assessments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Technical Safeguards for PHI</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Encryption Requirements</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ AES-256 encryption for data at rest</li>
                      <li>✓ TLS 1.2+ for data in transit</li>
                      <li>✓ End-to-end encryption for messaging</li>
                      <li>✓ Encrypted database backups</li>
                      <li>✓ Secure key management (HSM)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Access Controls</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ Role-based access control (RBAC)</li>
                      <li>✓ Attribute-based access control (ABAC)</li>
                      <li>✓ Multi-factor authentication required</li>
                      <li>✓ Privileged access management (PAM)</li>
                      <li>✓ Just-in-time access provisioning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="access-controls" title="Enhanced Access Controls & Authentication" icon={Lock}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Healthcare environments require enhanced access controls due to the sensitivity of PHI 
                and the need for emergency access capabilities while maintaining security.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Healthcare-Specific Access Patterns</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Role-Based Access Implementation</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Clinical Roles:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Physicians (full patient access)</li>
                          <li>• Nurses (care team access)</li>
                          <li>• Specialists (referral-based access)</li>
                          <li>• Technicians (procedure-specific)</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Administrative Roles:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Medical records staff</li>
                          <li>• Billing and coding staff</li>
                          <li>• Quality assurance staff</li>
                          <li>• Compliance officers</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Technical Roles:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• System administrators</li>
                          <li>• Database administrators</li>
                          <li>• Security analysts</li>
                          <li>• Integration specialists</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Emergency Access Procedures</h5>
                    <p className="text-slate-700 text-sm mb-2">
                      Healthcare requires "break-glass" access for emergency situations:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Documented emergency access procedures</li>
                      <li>• Automatic logging of all emergency access</li>
                      <li>• Post-incident review and justification</li>
                      <li>• Temporary elevated privileges with time limits</li>
                      <li>• Manager approval for emergency access use</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Critical: Minimum Necessary Standard</h4>
                    <p className="text-slate-700 mb-3">
                      HIPAA requires implementing the "minimum necessary" standard - users should only 
                      access the minimum amount of PHI necessary to perform their job functions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Technical Implementation:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Patient-specific access controls</li>
                          <li>• Care team-based permissions</li>
                          <li>• Time-limited access grants</li>
                          <li>• Field-level data restrictions</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Administrative Controls:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Regular access reviews and audits</li>
                          <li>• User activity monitoring</li>
                          <li>• Training on minimum necessary</li>
                          <li>• Documented access justifications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="hipaa-alignment" title="HIPAA & SOC 2 Alignment" icon={FileSearch}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Aligning HIPAA and SOC 2 requirements reduces duplicate efforts and ensures comprehensive 
                compliance coverage. Here's how to map controls between both frameworks.
              </p>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Control Mapping: HIPAA to SOC 2</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded p-4">
                    <h5 className="font-medium text-green-900 mb-2">Administrative Safeguards (HIPAA) → Security Controls (SOC 2)</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">HIPAA Requirements:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Security Officer designation</li>
                          <li>• Workforce training programs</li>
                          <li>• Access management procedures</li>
                          <li>• Contingency planning</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">SOC 2 Coverage:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• CC1.2 - Management oversight</li>
                          <li>• CC1.4 - Personnel competency</li>
                          <li>• CC6.1-6.3 - Access controls</li>
                          <li>• CC3.1-3.3 - Risk management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded p-4">
                    <h5 className="font-medium text-green-900 mb-2">Physical Safeguards (HIPAA) → Security Controls (SOC 2)</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">HIPAA Requirements:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Facility access controls</li>
                          <li>• Workstation security</li>
                          <li>• Device and media controls</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">SOC 2 Coverage:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• CC6.4 - Physical access</li>
                          <li>• CC6.5 - Data disposal</li>
                          <li>• CC7.2 - System monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded p-4">
                    <h5 className="font-medium text-green-900 mb-2">Technical Safeguards (HIPAA) → Multiple SOC 2 Criteria</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">HIPAA Requirements:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Access control (unique IDs, MFA)</li>
                          <li>• Audit controls and logging</li>
                          <li>• Integrity controls</li>
                          <li>• Transmission security</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">SOC 2 Coverage:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• CC6.1-6.3 - Logical access</li>
                          <li>• CC7.1 - System monitoring</li>
                          <li>• CC6.7 - Data encryption</li>
                          <li>• CC6.6 - Network security</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Business Associate Agreement (BAA) Requirements</h4>
                <p className="text-slate-700 text-sm mb-3">
                  If you handle PHI on behalf of covered entities, you need signed BAAs and must demonstrate compliance:
                </p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Use and disclosure limitations for PHI</li>
                  <li>• Safeguard requirements (aligns with SOC 2 Security)</li>
                  <li>• Subcontractor agreements and oversight</li>
                  <li>• Breach notification procedures</li>
                  <li>• Return or destruction of PHI upon contract termination</li>
                  <li>• Allow covered entity to audit your compliance</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="audit-logging" title="Comprehensive Audit Logging & Monitoring" icon={FileText}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Healthcare environments require extensive audit logging to track all PHI access and modifications. 
                This supports both HIPAA audit requirements and SOC 2 monitoring controls.
              </p>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Required Audit Log Elements</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">HIPAA Minimum Required</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ User identification (who)</li>
                      <li>✓ Date and time (when)</li>
                      <li>✓ Action performed (what)</li>
                      <li>✓ Patient/record accessed (which)</li>
                      <li>✓ Source of access (where/how)</li>
                      <li>✓ Success or failure of access attempt</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">SOC 2 Enhanced Logging</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ Session management details</li>
                      <li>✓ Network connection information</li>
                      <li>✓ System changes and configurations</li>
                      <li>✓ Data export and transmission logs</li>
                      <li>✓ Administrative privilege usage</li>
                      <li>✓ Security event correlation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Audit Log Monitoring and Analysis</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Automated Monitoring</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Unusual access pattern detection (off-hours, multiple patients)</li>
                      <li>• Mass data export alerts</li>
                      <li>• Failed authentication attempt monitoring</li>
                      <li>• Privilege escalation detection</li>
                      <li>• Break-glass access usage alerts</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Regular Review Requirements</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Daily review of security alerts</li>
                      <li>• Weekly review of administrative access</li>
                      <li>• Monthly comprehensive audit log analysis</li>
                      <li>• Quarterly access pattern analysis</li>
                      <li>• Annual comprehensive security review</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-2">Critical: Audit Log Integrity</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Audit logs must be tamper-evident and protected from unauthorized modification:
                </p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Write-only access to log repositories</li>
                  <li>• Digital signatures or hash verification</li>
                  <li>• Centralized log management (SIEM)</li>
                  <li>• Real-time log forwarding</li>
                  <li>• Long-term retention (6+ years for HIPAA)</li>
                  <li>• Secure backup and archival</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="incident-response" title="Healthcare Incident Response & Breach Notification" icon={Shield}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Healthcare organizations must be prepared for both security incidents and potential PHI breaches, 
                which have specific notification requirements under HIPAA.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-900 mb-3">HIPAA Breach Notification Requirements</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Individual Notification</h5>
                    <p className="text-xs text-slate-600 mb-2">Within 60 days</p>
                    <ul className="text-xs text-slate-700">
                      <li>• Written notice to affected individuals</li>
                      <li>• Description of breach</li>
                      <li>• Types of information involved</li>
                      <li>• Steps being taken</li>
                      <li>• Contact information</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">HHS Notification</h5>
                    <p className="text-xs text-slate-600 mb-2">Within 60 days</p>
                    <ul className="text-xs text-slate-700">
                      <li>• Report to HHS via web portal</li>
                      <li>• Detailed breach information</li>
                      <li>• Risk assessment documentation</li>
                      <li>• Mitigation actions taken</li>
                      <li>• Corrective measures implemented</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Media Notification</h5>
                    <p className="text-xs text-slate-600 mb-2">If &gt;500 affected</p>
                    <ul className="text-xs text-slate-700">
                      <li>• Prominent media outlets</li>
                      <li>• Same information as individual notice</li>
                      <li>• Reasonable effort to reach affected</li>
                      <li>• Website posting if applicable</li>
                      <li>• Toll-free number if needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Integrated Incident Response Procedures</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Phase 1: Detection and Analysis (0-4 hours)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Incident detection and initial triage</li>
                      <li>• Preliminary risk assessment</li>
                      <li>• Incident classification (security vs. privacy vs. both)</li>
                      <li>• Team notification and escalation</li>
                      <li>• Evidence preservation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Phase 2: Containment and Investigation (4-24 hours)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Incident containment and system isolation</li>
                      <li>• Detailed forensic analysis</li>
                      <li>• Scope determination (what PHI was affected)</li>
                      <li>• Risk assessment for notification requirements</li>
                      <li>• Legal and compliance team involvement</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Phase 3: Notification and Recovery (1-60 days)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Breach notification (if required)</li>
                      <li>• Customer and partner communication</li>
                      <li>• System recovery and restoration</li>
                      <li>• Additional security measures implementation</li>
                      <li>• Regulatory reporting and cooperation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="evidence-collection" title="Healthcare-Specific Evidence Collection" icon={Database}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Healthcare audits require evidence of both SOC 2 controls and HIPAA compliance. 
                Here's what auditors and regulators typically look for.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-3">HIPAA Compliance Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Risk assessment documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Business Associate Agreements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Workforce training records</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Policies and procedures documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Audit log reviews and analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">SOC 2 Enhanced Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Privacy impact assessments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Encryption implementation documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access control testing results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vulnerability assessments and penetration tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Third-party risk assessments</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">Dual Compliance Documentation Strategy</h4>
                <p className="text-slate-700 text-sm mb-4">
                  Create documentation that satisfies both HIPAA and SOC 2 requirements to reduce audit burden:
                </p>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">Unified Security Policies</h5>
                    <p className="text-sm text-slate-700">Write policies that reference both HIPAA and SOC 2 requirements</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">Cross-Referenced Procedures</h5>
                    <p className="text-sm text-slate-700">Map operational procedures to both compliance frameworks</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">Integrated Testing</h5>
                    <p className="text-sm text-slate-700">Design tests that validate controls for both standards simultaneously</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">Shared Evidence Repository</h5>
                    <p className="text-sm text-slate-700">Organize evidence to support both HIPAA and SOC 2 audits</p>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>
        </div>

        {/* Implementation Roadmap */}
        <div className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Healthcare Implementation Roadmap</h2>
          <p className="text-slate-700 mb-6">
            Follow this timeline to implement dual HIPAA and SOC 2 compliance for your healthcare technology:
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-red-600 mb-2">Months 1-3</div>
              <h4 className="font-semibold text-slate-900 mb-2">Foundation & Assessment</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• HIPAA risk assessment</li>
                <li>• SOC 2 scope definition</li>
                <li>• Dual compliance gap analysis</li>
                <li>• Policy framework development</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-orange-600 mb-2">Months 4-6</div>
              <h4 className="font-semibold text-slate-900 mb-2">Technical Implementation</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Enhanced access controls</li>
                <li>• Encryption implementation</li>
                <li>• Audit logging system</li>
                <li>• Monitoring and alerting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-amber-600 mb-2">Months 7-9</div>
              <h4 className="font-semibold text-slate-900 mb-2">Testing & Training</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Control testing and validation</li>
                <li>• Incident response exercises</li>
                <li>• Staff training programs</li>
                <li>• Evidence collection</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-slate-600 mb-2">Months 10-12</div>
              <h4 className="font-semibold text-slate-900 mb-2">Audit Preparation</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Evidence organization</li>
                <li>• Internal readiness assessment</li>
                <li>• Auditor selection and engagement</li>
                <li>• Audit execution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources and Tools */}
        <div className="mt-8 bg-slate-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Healthcare-Specific Templates & Resources</h3>
          <p className="text-slate-700 mb-6">
            Our templates are designed to address both HIPAA and SOC 2 requirements, 
            helping you achieve dual compliance more efficiently.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Healthcare Policy Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">HIPAA-aligned policies covering all SOC 2 criteria</p>
              <a href="/products/policies" className="text-red-600 hover:text-red-700 font-medium">
                View Policies →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <UserCheck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">BAA Templates</h4>
              <p className="text-sm text-slate-600 mb-4">Business Associate Agreement templates and guidance</p>
              <a href="/products/documents" className="text-blue-600 hover:text-blue-700 font-medium">
                View Documents →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Dual Compliance Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Everything for HIPAA + SOC 2 compliance</p>
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
            <a href="/resources/implementation-guides/financial" className="text-blue-600 hover:text-blue-700 text-sm">
              Financial Services Guide →
            </a>
            <a href="/resources/implementation-guides/early-stage" className="text-blue-600 hover:text-blue-700 text-sm">
              Early-Stage Startup Guide →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HealthcareImplementationGuidePage;