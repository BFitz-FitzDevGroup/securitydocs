"use client"
import React, { useState } from 'react';
import { Check, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, ChevronDown, ChevronRight, Lightbulb, Cloud, Server, Database, Zap, Globe, Settings, CheckCircle } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const SaaSImplementationGuidePage = () => {
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
    { label: 'SaaS/Cloud Services', href: '/resources/implementation-guides/saas-cloud-services' }
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
            <Icon className="w-6 h-6 text-blue-600 mr-3" />
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
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cloud className="w-4 h-4 mr-2" />
            SaaS/Cloud Services Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 for SaaS & Cloud Services
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Complete implementation guide for SaaS companies and cloud service providers. 
            Focus on Security + Availability criteria with practical, cloud-native approaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#overview" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
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
              <h3 className="font-semibold text-slate-900 mb-2">SaaS SOC 2 Quick Reference</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-emerald-800">Recommended Criteria:</strong>
                  <p className="text-slate-700">Security + Availability</p>
                </div>
                <div>
                  <strong className="text-emerald-800">Typical Timeline:</strong>
                  <p className="text-slate-700">6-9 months</p>
                </div>
                <div>
                  <strong className="text-emerald-800">Key Focus:</strong>
                  <p className="text-slate-700">Customer data security, uptime SLAs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <GuideSection id="overview" title="SaaS-Specific Overview" icon={Target}>
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                SaaS companies have unique SOC 2 requirements driven by multi-tenant architectures, 
                customer data handling, and uptime commitments. This guide focuses on the most 
                common and practical approach for SaaS organizations.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why Security + Availability Works for SaaS</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Security Addresses:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Customer data protection</li>
                      <li>• Access controls and authentication</li>
                      <li>• Multi-tenant data isolation</li>
                      <li>• API security and rate limiting</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Availability Covers:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Uptime SLA commitments</li>
                      <li>• Disaster recovery procedures</li>
                      <li>• Performance monitoring</li>
                      <li>• Capacity planning and scaling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium text-amber-900 mb-2">Common SaaS Scope Definition</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Most SaaS companies start with this focused scope to control costs and complexity:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Include in Scope:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Production application environment</li>
                      <li>• Customer-facing APIs</li>
                      <li>• Production databases</li>
                      <li>• Customer support systems</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Exclude Initially:</strong>
                    <ul className="text-slate-700 mt-1">
                      <li>• Development/staging environments</li>
                      <li>• Internal HR/finance systems</li>
                      <li>• Marketing tools and analytics</li>
                      <li>• Non-customer-facing systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="cloud-architecture" title="Cloud Architecture & Infrastructure" icon={Cloud}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Modern SaaS applications typically run on cloud infrastructure. Here's how to implement 
                SOC 2 controls across major cloud providers.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded mr-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AWS</span>
                    </div>
                    Amazon Web Services
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use AWS Config for compliance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>CloudTrail for comprehensive audit logs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>GuardDuty for threat detection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>KMS for encryption key management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded mr-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AZ</span>
                    </div>
                    Microsoft Azure
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Azure Security Center for monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Azure Monitor for logging and alerts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Key Vault for secrets management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sentinel for SIEM capabilities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded mr-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">GCP</span>
                    </div>
                    Google Cloud Platform
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Security Command Center</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cloud Audit Logs for tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cloud KMS for encryption</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Chronicle for security analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Infrastructure Security Checklist</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Network Security</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ VPC/Virtual Network with private subnets</li>
                      <li>✓ Web Application Firewall (WAF)</li>
                      <li>✓ DDoS protection enabled</li>
                      <li>✓ Network segmentation for different tiers</li>
                      <li>✓ VPN for administrative access</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Data Security</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ Encryption at rest (databases, storage)</li>
                      <li>✓ Encryption in transit (TLS 1.2+)</li>
                      <li>✓ Database backup encryption</li>
                      <li>✓ Secure key management service</li>
                      <li>✓ Data classification and handling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="multitenant-security" title="Multi-Tenant Security Controls" icon={Users}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Multi-tenant SaaS applications require special attention to data isolation and access controls 
                to ensure customer data remains secure and segregated.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Critical: Data Isolation</h4>
                    <p className="text-slate-700 mb-3">
                      Data isolation failures are the #1 cause of security incidents in multi-tenant applications. 
                      Implement multiple layers of protection.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-900">Application Level:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Tenant ID in every database query</li>
                          <li>• Row-level security policies</li>
                          <li>• API endpoint tenant validation</li>
                          <li>• Session-based tenant context</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-slate-900">Infrastructure Level:</strong>
                        <ul className="text-slate-700 mt-1">
                          <li>• Separate databases per tenant (enterprise)</li>
                          <li>• Schema-level isolation</li>
                          <li>• Network micro-segmentation</li>
                          <li>• Container/pod isolation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Multi-Tenant Access Control Implementation</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">1. Tenant-Aware Authentication</h5>
                    <p className="text-slate-700 text-sm mb-2">Ensure users can only access their organization's data:</p>
                    <div className="bg-white rounded p-3 text-sm font-mono text-slate-800">
                      // Example: Tenant context in JWT token<br/>
                      {`{`}<br/>
                      &nbsp;&nbsp;"sub": "user123",<br/>
                      &nbsp;&nbsp;"tenant_id": "org_abc123",<br/>
                      &nbsp;&nbsp;"roles": ["admin", "viewer"]<br/>
                      {`}`}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">2. Database-Level Controls</h5>
                    <p className="text-slate-700 text-sm mb-2">Implement row-level security:</p>
                    <div className="bg-white rounded p-3 text-sm font-mono text-slate-800">
                      // PostgreSQL Row Level Security example<br/>
                      CREATE POLICY tenant_isolation ON customer_data<br/>
                      &nbsp;&nbsp;FOR ALL TO application_role<br/>
                      &nbsp;&nbsp;USING (tenant_id = current_setting('app.tenant_id'));
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">3. API Security Patterns</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Validate tenant context on every request</li>
                      <li>• Rate limiting per tenant</li>
                      <li>• Tenant-specific API keys for integrations</li>
                      <li>• Audit logging with tenant attribution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="availability-monitoring" title="Availability & Performance Monitoring" icon={Zap}>
            <div className="space-y-6">
              <p className="text-slate-700">
                SaaS companies typically commit to uptime SLAs (99.9%, 99.95%, 99.99%). 
                SOC 2 Availability criteria requires demonstrating how you monitor and maintain these commitments.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-900 mb-3">Monitoring Stack Essentials</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Uptime Monitoring:</strong> External service checks (Pingdom, UptimeRobot)</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>APM:</strong> Application performance monitoring (DataDog, New Relic)</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Infrastructure:</strong> Server/container monitoring (Prometheus, Grafana)</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Database:</strong> Query performance and connection monitoring</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 mb-3">Alerting & Response</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Escalation Matrix:</strong> Define who gets alerted when</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Response Times:</strong> SLA for incident acknowledgment</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Status Page:</strong> Customer communication during incidents</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Post-Mortems:</strong> Document and learn from incidents</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">SLA Monitoring Best Practices</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">99.9% Uptime</h5>
                    <p className="text-xs text-slate-600 mb-2">8.77 hours downtime/year</p>
                    <ul className="text-xs text-slate-700">
                      <li>• Good for most SaaS startups</li>
                      <li>• Easier to achieve initially</li>
                      <li>• Lower infrastructure costs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">99.95% Uptime</h5>
                    <p className="text-xs text-slate-600 mb-2">4.38 hours downtime/year</p>
                    <ul className="text-xs text-slate-700">
                      <li>• Enterprise customer expectation</li>
                      <li>• Requires redundancy planning</li>
                      <li>• Auto-failover capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">99.99% Uptime</h5>
                    <p className="text-xs text-slate-600 mb-2">52.6 minutes downtime/year</p>
                    <ul className="text-xs text-slate-700">
                      <li>• Mission-critical applications</li>
                      <li>• Significant infrastructure investment</li>
                      <li>• Multi-region deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="disaster-recovery" title="Disaster Recovery & Business Continuity" icon={Shield}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Availability criteria requires demonstrating your ability to recover from disasters and 
                maintain business operations during disruptions.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Recovery Objectives</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-slate-900">RTO (Recovery Time Objective)</h5>
                      <p className="text-sm text-slate-700">How quickly you restore service after an incident</p>
                      <div className="mt-1 text-xs text-blue-800 bg-blue-100 px-2 py-1 rounded">
                        SaaS typical: 1-4 hours
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">RPO (Recovery Point Objective)</h5>
                      <p className="text-sm text-slate-700">Maximum acceptable data loss in time</p>
                      <div className="mt-1 text-xs text-blue-800 bg-blue-100 px-2 py-1 rounded">
                        SaaS typical: 15 minutes - 1 hour
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-900 mb-3">Backup Strategy</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Database className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Database:</strong> Automated backups + point-in-time recovery</span>
                    </li>
                    <li className="flex items-start">
                      <Server className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Application:</strong> Infrastructure as code + container images</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Files:</strong> Object storage with cross-region replication</span>
                    </li>
                    <li className="flex items-start">
                      <Settings className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Configuration:</strong> Version-controlled infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Disaster Recovery Testing Requirements</h4>
                <p className="text-slate-700 text-sm mb-4">
                  SOC 2 auditors will want to see evidence that your DR plan actually works. 
                  Regular testing is essential.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Quarterly Tests</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Database backup restoration</li>
                      <li>• Application deployment to DR environment</li>
                      <li>• Network failover procedures</li>
                      <li>• Communication plan execution</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Annual Tests</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Full production failover simulation</li>
                      <li>• Complete DR environment activation</li>
                      <li>• End-to-end customer impact testing</li>
                      <li>• Post-test improvement planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="api-security" title="API Security & Integration Controls" icon={Globe}>
            <div className="space-y-6">
              <p className="text-slate-700">
                SaaS applications heavily rely on APIs for customer integrations and internal communications. 
                Securing these APIs is critical for SOC 2 compliance.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-900 mb-3">API Security Essentials</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Authentication & Authorization</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ OAuth 2.0 / OpenID Connect</li>
                      <li>✓ API key management and rotation</li>
                      <li>✓ JWT token validation</li>
                      <li>✓ Scope-based permissions</li>
                      <li>✓ Rate limiting per client/user</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">Data Protection</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ TLS 1.2+ for all API calls</li>
                      <li>✓ Input validation and sanitization</li>
                      <li>✓ Output encoding</li>
                      <li>✓ SQL injection prevention</li>
                      <li>✓ OWASP API security compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Third-Party Integration Security</h4>
                <p className="text-slate-700 text-sm mb-4">
                  When your SaaS integrates with external services, you need to ensure security throughout the integration chain.
                </p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Vendor Assessment</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Review third-party SOC 2 reports</li>
                      <li>• Assess data handling practices</li>
                      <li>• Evaluate security controls</li>
                      <li>• Document risk acceptance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Integration Controls</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Encrypt data in transit to/from third parties</li>
                      <li>• Validate all incoming data</li>
                      <li>• Log all integration activities</li>
                      <li>• Monitor for integration failures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="evidence-collection" title="SaaS-Specific Evidence Collection" icon={FileText}>
            <div className="space-y-6">
              <p className="text-slate-700">
                Collecting the right evidence is crucial for passing your SOC 2 audit. 
                Here's what auditors typically look for in SaaS environments.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-900 mb-3">Security Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>User access provisioning/deprovisioning logs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multi-factor authentication configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vulnerability scan reports and remediation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Penetration testing reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Security awareness training records</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Availability Evidence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Uptime monitoring reports and SLA metrics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Incident response documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Disaster recovery test results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Backup verification and restoration tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capacity planning and monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Cloud Provider Evidence</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Leverage your cloud provider's SOC 2 compliance to reduce your audit scope:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Cloud Provider SOC 2 Reports:</strong> AWS, Azure, GCP provide SOC 2 Type II reports</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Shared Responsibility Model:</strong> Document what cloud provider covers vs. your responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Service Configuration:</strong> Show how you've configured cloud services securely</span>
                  </li>
                </ul>
              </div>
            </div>
          </GuideSection>
        </div>

        {/* Implementation Roadmap */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">SaaS Implementation Roadmap</h2>
          <p className="text-slate-700 mb-6">
            Follow this timeline to implement SOC 2 controls for your SaaS application:
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-blue-600 mb-2">Months 1-2</div>
              <h4 className="font-semibold text-slate-900 mb-2">Foundation</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Define scope and criteria</li>
                <li>• Gap analysis</li>
                <li>• Policy development</li>
                <li>• Team training</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-emerald-600 mb-2">Months 3-4</div>
              <h4 className="font-semibold text-slate-900 mb-2">Implementation</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Deploy security tools</li>
                <li>• Configure monitoring</li>
                <li>• Implement access controls</li>
                <li>• Set up backup/DR</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-amber-600 mb-2">Months 5-6</div>
              <h4 className="font-semibold text-slate-900 mb-2">Testing & Tuning</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Test all controls</li>
                <li>• DR exercises</li>
                <li>• Evidence collection</li>
                <li>• Process refinement</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-slate-600 mb-2">Months 7-9</div>
              <h4 className="font-semibold text-slate-900 mb-2">Pre-Audit</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Evidence organization</li>
                <li>• Internal assessment</li>
                <li>• Auditor selection</li>
                <li>• Audit execution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources and Tools */}
        <div className="mt-8 bg-slate-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Get Started with Templates</h3>
          <p className="text-slate-700 mb-6">
            Don't build everything from scratch. Our templates are specifically designed for SaaS companies 
            and include the policies, procedures, and evidence guidance you need.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">SaaS Policy Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Pre-written policies covering Security + Availability</p>
              <a href="/products/policies" className="text-blue-600 hover:text-blue-700 font-medium">
                View Policies →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Download className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Evidence Guidance</h4>
              <p className="text-sm text-slate-600 mb-4">What auditors expect to see from SaaS companies</p>
              <a href="/products/evidence" className="text-emerald-600 hover:text-emerald-700 font-medium">
                View Evidence →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Complete Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Everything you need for SaaS SOC 2 compliance</p>
              <a href="/products/complete-bundle" className="text-amber-600 hover:text-amber-700 font-medium">
                Get Everything →
              </a>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Need a Different Approach?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/resources/implementation-guides/healthcare" className="text-blue-600 hover:text-blue-700 text-sm">
              Healthcare Tech Guide →
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

export default SaaSImplementationGuidePage;