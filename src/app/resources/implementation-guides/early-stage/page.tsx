"use client"
import React, { useState } from 'react';
import { Check, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, ChevronDown, ChevronRight, Lightbulb, Rocket, DollarSign, TrendingUp, Database, Settings, CheckCircle, BarChart, Zap, Building, Calendar } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const EarlyStageStartupGuidePage = () => {
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
    { label: 'Early-Stage Startups', href: '/resources/implementation-guides/early-stage' }
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
            <Icon className="w-6 h-6 text-emerald-600 mr-3" />
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
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Early-Stage Startup Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 for Early-Stage Startups
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Minimal viable compliance approach for seed to Series A companies. 
            Focus on Security + Availability with cost-effective, scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#overview" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
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
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Early-Stage Startup SOC 2 Quick Reference</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-emerald-800">Recommended Criteria:</strong>
                  <p className="text-slate-700">Security + Availability (minimal)</p>
                </div>
                <div>
                  <strong className="text-emerald-800">Typical Timeline:</strong>
                  <p className="text-slate-700">3-6 months</p>
                </div>
                <div>
                  <strong className="text-emerald-800">Key Focus:</strong>
                  <p className="text-slate-700">Enterprise sales readiness, cost efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Startup Reality Check */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <DollarSign className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Startup Reality: Balance Compliance with Growth</h3>
              <p className="text-slate-700 mb-3">
                Early-stage startups need SOC 2 to win enterprise customers, but cancan'tapos;t afford to over-engineer compliance. 
                This guide focuses on the minimum viable approach that opens enterprise sales doors.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-slate-900">Why Startups Need SOC 2:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• Enterprise customers require it for vendor approval</li>
                    <li>• Differentiates from competitors without compliance</li>
                    <li>• Enables higher ACV and shorter sales cycles</li>
                    <li>• Prepares for due diligence in future funding rounds</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">Common Startup Constraints:</strong>
                  <ul className="text-slate-700 mt-1">
                    <li>• Limited budget for compliance tools/consultants</li>
                    <li>• Small team wearing multiple hats</li>
                    <li>• Rapidly changing technology stack</li>
                    <li>• Need to balance compliance with product development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <GuideSection id="overview" title="Startup-Specific Approach" icon={Target}>
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Early-stage startups (seed to Series A) need a pragmatic approach to SOC 2 that enables 
                enterprise sales without consuming all available resources. Focus on Security + Availability 
                only, with narrow scope and cost-effective implementations.
              </p>

              <div className="bg-emerald-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Minimal Viable SOC 2 Strategy</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-emerald-900 mb-2">Start Narrow:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Security + Availability criteria only</li>
                      <li>• Core customer-facing application only</li>
                      <li>• Production environment only (exclude dev/staging)</li>
                      <li>• Essential integrations only</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-900 mb-2">Build for Scale:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Choose tools that grow with you</li>
                      <li>• Document processes for future team members</li>
                      <li>• Automate where possible to reduce ongoing effort</li>
                      <li>• Plan for expanding scope in future audits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Startup SOC 2 Timeline Expectations</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Realistic timeline for startups with limited resources:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Months 1-2:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Gap analysis and planning</li>
                      <li>• Policy creation and tool selection</li>
                      <li>• Basic security controls implementation</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Months 3-4:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Monitoring and logging setup</li>
                      <li>• Access control implementation</li>
                      <li>• Backup and incident response</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Months 5-6:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Evidence collection period</li>
                      <li>• Internal testing and refinement</li>
                      <li>• Auditor selection and examination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="cost-effective-tools" title="Cost-Effective Tool Stack" icon={Settings}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Startups need security tools that provide SOC 2 compliance without breaking the budget. 
                Focus on multi-purpose tools and leverage free/freemium options where appropriate.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">Essential Security Stack for Startups</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Identity & Access Management (Free - $10/user/month)</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Google Workspace / Microsoft 365:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Built-in MFA and SSO</li>
                          <li>• Admin console for user management</li>
                          <li>• Audit logs and activity monitoring</li>
                          <li>• Device management capabilities</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Okta Starter ($2/user/month):</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Centralized SSO for all applications</li>
                          <li>• Advanced MFA options</li>
                          <li>• User lifecycle management</li>
                          <li>• Detailed access reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Security Monitoring ($0 - $50/month)</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Cloud Provider Native Tools:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• AWS CloudTrail (free tier available)</li>
                          <li>• Azure Monitor (free tier available)</li>
                          <li>• GCP Cloud Logging (free tier available)</li>
                          <li>• Built-in security monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">LogRocket / Datadog (free tier):</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Application performance monitoring</li>
                          <li>• Error tracking and alerting</li>
                          <li>• User session monitoring</li>
                          <li>• Custom dashboards</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Backup & Recovery ($20 - $100/month)</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Automated Database Backups:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• RDS automated backups (AWS)</li>
                          <li>• Azure Database backup</li>
                          <li>• Google Cloud SQL backups</li>
                          <li>• Point-in-time recovery capability</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Code & Configuration:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Git repositories (GitHub, GitLab)</li>
                          <li>• Infrastructure as Code (Terraform)</li>
                          <li>• Container image registries</li>
                          <li>• Secrets management (AWS Secrets Manager)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Budget-Conscious Tool Selection</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Free/Freemium Options:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• <strong>1Password Business Starter:</strong> Password manager for teams</li>
                      <li>• <strong>Cloudflare:</strong> DDoS protection and WAF (free tier)</li>
                      <li>• <strong>Let's Encrypt:</strong> Free SSL certificates</li>
                      <li>• <strong>GitHub:</strong> Security scanning and vulnerability alerts</li>
                      <li>• <strong>UptimeRobot:</strong> Basic uptime monitoring (free for 50 monitors)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Startup-Friendly Paid Tools:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• <strong>Vanta ($8k+/year):</strong> Automated compliance monitoring</li>
                      <li>• <strong>Secureframe ($12k+/year):</strong> SOC 2 automation platform</li>
                      <li>• <strong>PagerDuty ($19/user/month):</strong> Incident response</li>
                      <li>• <strong>Sentry ($26/month):</strong> Error tracking and performance</li>
                      <li>• <strong>LogDNA ($3/GB/month):</strong> Log management and analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="lean-security" title="Lean Security Implementation" icon={Shield}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Implement essential security controls without over-engineering. Focus on controls that 
                provide maximum security value with minimal ongoing maintenance burden.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Critical: Don't Compromise on These</h4>
                    <p className="text-slate-700 mb-3">
                      While startups should be lean, certain security controls are non-negotiable for SOC 2 compliance:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Access Controls (Mandatory):</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Multi-factor authentication for all admin access</li>
                          <li>• Unique user accounts (no shared credentials)</li>
                          <li>• Regular access reviews and deprovisioning</li>
                          <li>• Privileged access management</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Data Protection (Mandatory):</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Encryption at rest and in transit</li>
                          <li>• Secure data backup and recovery</li>
                          <li>• Customer data isolation</li>
                          <li>• Secure data disposal procedures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Startup Security Control Priorities</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Phase 1: Foundation (Month 1-2)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Enable MFA on all critical accounts (AWS, GitHub, email)</li>
                      <li>• Implement password manager for team</li>
                      <li>• Set up basic logging and monitoring</li>
                      <li>• Configure automated backups</li>
                      <li>• Create employee onboarding/offboarding checklist</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Phase 2: Monitoring (Month 3-4)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Deploy endpoint protection on all devices</li>
                      <li>• Set up uptime monitoring and alerting</li>
                      <li>• Implement vulnerability scanning</li>
                      <li>• Create incident response procedures</li>
                      <li>• Establish change management process</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Phase 3: Documentation (Month 5-6)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Document all security policies and procedures</li>
                      <li>• Conduct security awareness training</li>
                      <li>• Perform backup and disaster recovery testing</li>
                      <li>• Complete vendor risk assessments</li>
                      <li>• Collect evidence for audit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="team-efficiency" title="Small Team Efficiency" icon={Users}>
            <div className="space-y-6">
              <p className="text-slate-700">
                When everyone wears multiple hats, SOC 2 implementation must be efficient and not 
                disrupt core business operations. Focus on automation and clear role definitions.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">Role Distribution for Small Teams</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">CTO/Technical Co-founder (Security Officer)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Overall SOC 2 program ownership and strategy</li>
                      <li>• Technical security control implementation</li>
                      <li>• Infrastructure security and monitoring setup</li>
                      <li>• Vendor security assessments</li>
                      <li>• Security incident response leadership</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">CEO/Business Co-founder (Executive Sponsor)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Board reporting and governance oversight</li>
                      <li>• Budget approval for compliance tools</li>
                      <li>• Customer communication about SOC 2 status</li>
                      <li>• Business continuity and risk management</li>
                      <li>• Auditor relationship management</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Operations/HR Lead (Administrative Controls)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Employee onboarding and offboarding procedures</li>
                      <li>• Security awareness training coordination</li>
                      <li>• Access review and user account management</li>
                      <li>• Policy documentation and maintenance</li>
                      <li>• Evidence collection and organization</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">All Team Members (Shared Responsibilities)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Following security policies and procedures</li>
                      <li>• Reporting security incidents and concerns</li>
                      <li>• Participating in security training</li>
                      <li>• Maintaining secure coding practices (engineers)</li>
                      <li>• Customer data handling compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">Automation & Efficiency Tips</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Automate Routine Tasks:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• User provisioning/deprovisioning workflows</li>
                      <li>• Security scanning and vulnerability assessment</li>
                      <li>• Backup verification and testing</li>
                      <li>• Log collection and basic analysis</li>
                      <li>• Policy acknowledgment and training tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Leverage Templates & Standards:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Use pre-written SOC 2 policy templates</li>
                      <li>• Implement standard security configurations</li>
                      <li>• Follow established incident response procedures</li>
                      <li>• Use compliance automation tools (Vanta, Secureframe)</li>
                      <li>• Adopt cloud provider security best practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Weekly SOC 2 Tasks (1-2 hours/week)</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Once implemented, ongoing SOC 2 maintenance should be minimal for startups:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Weekly Tasks:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Review security alerts and incidents</li>
                      <li>• Check backup success notifications</li>
                      <li>• Monitor system availability metrics</li>
                      <li>• Review access change requests</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Monthly Tasks:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Review and approve access reviews</li>
                      <li>• Update security training materials</li>
                      <li>• Test disaster recovery procedures</li>
                      <li>• Collect compliance evidence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="enterprise-readiness" title="Enterprise Sales Readiness" icon={TrendingUp}>
            <div className="space-y-6">
              <p className="text-slate-700">
                The primary goal for startup SOC 2 compliance is enabling enterprise sales. 
                Here's how to position your SOC 2 status effectively with prospects.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">Sales Enablement Strategy</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Security Questionnaire Responses</h5>
                    <p className="text-slate-700 text-sm mb-2">
                      Enterprise prospects will send security questionnaires. Prepare standard responses:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• "We are SOC 2 Type II compliant for Security and Availability criteria"</li>
                      <li>• "Our SOC 2 report is available under NDA during the evaluation process"</li>
                      <li>• "We undergo annual SOC 2 audits by [Auditor Name], a certified public accounting firm"</li>
                      <li>• "We maintain 99.9% uptime SLA with automatic failover capabilities"</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Competitive Differentiation</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Against Non-Compliant Competitors:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• "We're SOC 2 compliant, theythey'reapos;re not"</li>
                          <li>• "Independent audit verification of our security"</li>
                          <li>• "Reduces your vendor risk assessment time"</li>
                          <li>• "Meets your procurement security requirements"</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Against Larger Competitors:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• "Same enterprise-grade security standards"</li>
                          <li>• "More responsive support with proven security"</li>
                          <li>• "Transparent about our security practices"</li>
                          <li>• "Regular independent security audits"</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">SOC 2 Report Sharing Process</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Share SOC 2 report under NDA after initial qualification</li>
                      <li>• Provide executive summary for security teams</li>
                      <li>• Offer security deep-dive calls with your CTO</li>
                      <li>• Include SOC 2 status in RFP responses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">ROI of SOC 2 for Startups</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Sales Impact:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• 25-50% faster enterprise sales cycles</li>
                      <li>• Higher win rates against non-compliant competitors</li>
                      <li>• Access to larger deal sizes ($50k+ ACV)</li>
                      <li>• Reduced procurement friction</li>
                      <li>• Faster vendor approval processes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Business Benefits:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Improved security posture and risk reduction</li>
                      <li>• Better employee security awareness</li>
                      <li>• Structured approach to incident response</li>
                      <li>• Foundation for future compliance (ISO 27001, FedRAMP)</li>
                      <li>• Due diligence readiness for funding rounds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="scaling-preparation" title="Preparing for Scale" icon={BarChart}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Your initial SOC 2 implementation should be designed to scale as your startup grows. 
                Plan for expanding scope, team, and compliance requirements.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">Scaling Your SOC 2 Program</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Series A-B Considerations (10-50 employees)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Add dedicated Security/DevOps engineer</li>
                      <li>• Expand scope to include development environments</li>
                      <li>• Consider adding Processing Integrity criteria</li>
                      <li>• Implement more advanced monitoring and alerting</li>
                      <li>• Establish formal change management procedures</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Series B+ Considerations (50+ employees)</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Hire dedicated compliance/security team</li>
                      <li>• Expand to all five SOC 2 criteria</li>
                      <li>• Consider additional compliance frameworks (ISO 27001)</li>
                      <li>• Implement enterprise security tools (SIEM, DLP)</li>
                      <li>• Formal security governance and risk management</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Technology Stack Evolution</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Early Stage (Free/Low Cost):</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Cloud provider native tools</li>
                          <li>• Open source monitoring (Prometheus)</li>
                          <li>• Basic compliance automation</li>
                          <li>• Manual evidence collection</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Growth Stage (Paid Tools):</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Enterprise security platforms (Splunk)</li>
                          <li>• Advanced compliance automation (Vanta Pro)</li>
                          <li>• SIEM and threat detection</li>
                          <li>• Automated evidence collection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Common Startup SOC 2 Mistakes to Avoid</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Scope & Planning Mistakes:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Starting with all five criteria (too complex)</li>
                      <li>• Including non-customer-facing systems</li>
                      <li>• Not planning for evidence collection time</li>
                      <li>• Choosing audit firm based only on price</li>
                      <li>• Underestimating time investment required</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Implementation Mistakes:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Documenting aspirational vs. actual processes</li>
                      <li>• Over-engineering security controls</li>
                      <li>• Ignoring user experience impact</li>
                      <li>• Not testing disaster recovery procedures</li>
                      <li>• Weak access control implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="budget-timeline" title="Startup Budget & Timeline" icon={Calendar}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Realistic budget and timeline expectations for early-stage startups implementing SOC 2 compliance.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">Total SOC 2 Implementation Cost</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Year 1 Costs (Implementation):</h5>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Audit Fee:</strong> $15,000 - $25,000</li>
                      <li>• <strong>Compliance Tools:</strong> $8,000 - $15,000</li>
                      <li>• <strong>Security Tools:</strong> $5,000 - $12,000</li>
                      <li>• <strong>Legal/Consultant:</strong> $3,000 - $8,000</li>
                      <li>• <strong>Internal Time:</strong> 200-400 hours</li>
                      <li className="font-medium border-t pt-2"><strong>Total:</strong> $31,000 - $60,000</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Ongoing Annual Costs:</h5>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Annual Audit:</strong> $12,000 - $20,000</li>
                      <li>• <strong>Tool Subscriptions:</strong> $8,000 - $15,000</li>
                      <li>• <strong>Maintenance:</strong> $2,000 - $5,000</li>
                      <li>• <strong>Training/Updates:</strong> $1,000 - $3,000</li>
                      <li>• <strong>Internal Time:</strong> 50-100 hours</li>
                      <li className="font-medium border-t pt-2"><strong>Total:</strong> $23,000 - $43,000</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">6-Month Implementation Timeline</h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded p-3">
                      <h5 className="font-medium text-blue-900 mb-2">Months 1-2: Foundation</h5>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Gap analysis and scope definition</li>
                        <li>• Tool selection and procurement</li>
                        <li>• Policy template customization</li>
                        <li>• Basic security control implementation</li>
                        <li>• Team training and role assignment</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h5 className="font-medium text-blue-900 mb-2">Months 3-4: Implementation</h5>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Complete security control deployment</li>
                        <li>• Monitoring and alerting setup</li>
                        <li>• Access control implementation</li>
                        <li>• Backup and DR procedures</li>
                        <li>• Incident response testing</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h5 className="font-medium text-blue-900 mb-2">Months 5-6: Audit Prep</h5>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Evidence collection and organization</li>
                        <li>• Internal readiness assessment</li>
                        <li>• Auditor selection and engagement</li>
                        <li>• Audit execution and remediation</li>
                        <li>• SOC 2 report receipt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Cost Optimization Tips for Startups</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Reduce Audit Costs:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Start with Security + Availability only</li>
                      <li>• Use compliance automation tools</li>
                      <li>• Organize evidence systematically</li>
                      <li>• Prepare team for efficient audit process</li>
                      <li>• Consider remote audit to reduce travel costs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Leverage Free/Cheap Tools:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Cloud provider native security tools</li>
                      <li>• Open source monitoring solutions</li>
                      <li>• Free tiers of commercial tools</li>
                      <li>• SOC 2 policy templates vs. custom development</li>
                      <li>• Community resources and guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>
        </div>

        {/* Templates and Resources */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Startup-Optimized Templates</h2>
          <p className="text-slate-700 mb-6">
            Save time and money with templates designed specifically for resource-constrained startups:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <FileText className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Lean Policy Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Minimal policies covering Security + Availability only</p>
              <a href="/products/policies" className="text-emerald-600 hover:text-emerald-700 font-medium">
                View Policies →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Startup Checklist</h4>
              <p className="text-sm text-slate-600 mb-4">Focused checklist for early-stage implementation</p>
              <a href="/resources/soc2-checklist" className="text-blue-600 hover:text-blue-700 font-medium">
                Use Checklist →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Rocket className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Complete Startup Kit</h4>
              <p className="text-sm text-slate-600 mb-4">Everything you need for lean SOC 2 compliance</p>
              <a href="/products/complete-bundle" className="text-amber-600 hover:text-amber-700 font-medium">
                Get Started →
              </a>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">As You Scale, Consider These Guides:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/resources/implementation-guides/saas-cloud-services" className="text-emerald-600 hover:text-emerald-700 text-sm">
              Full SaaS Implementation →
            </a>
            <a href="/resources/implementation-guides/healthcare" className="text-emerald-600 hover:text-emerald-700 text-sm">
              Healthcare Compliance →
            </a>
            <a href="/resources/implementation-guides/financial" className="text-emerald-600 hover:text-emerald-700 text-sm">
              Financial Services →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EarlyStageStartupGuidePage;