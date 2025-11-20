"use client"
import React, { useState } from 'react';
import { BookOpen, Check, CheckCircle, Circle, Download, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, ChevronDown, ChevronRight, Lightbulb, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export function SOC2ChecklistClient() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started']));
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const toggleItem = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'SOC 2 Checklist', href: '/resources/soc2-checklist' }
  ];

  interface ChecklistItemProps {
    id: string;
    children: React.ReactNode;
    isRequired?: boolean;
    difficulty?: 'easy' | 'medium' | 'hard';
  }

  const ChecklistItem: React.FC<ChecklistItemProps> = ({ id, children, isRequired = false, difficulty = 'medium' }) => {
    const isChecked = checkedItems.has(id);
    const difficultyColors = {
      easy: 'text-emerald-600',
      medium: 'text-amber-600', 
      hard: 'text-red-600'
    };

    return (
      <li className="flex items-start py-2">
        <button
          onClick={() => toggleItem(id)}
          className="mr-3 mt-1 flex-shrink-0"
        >
          {isChecked ? (
            <CheckCircle className="w-5 h-5 text-emerald-600" />
          ) : (
            <Circle className="w-5 h-5 text-slate-400 hover:text-slate-600" />
          )}
        </button>
        <div className="flex-1">
          <div className={`${isChecked ? 'line-through text-slate-500' : 'text-slate-700'}`}>
            {children}
            {isRequired && (
              <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                Required
              </span>
            )}
            <span className={`ml-2 text-xs ${difficultyColors[difficulty]}`}>
              {difficulty === 'easy' && '● Easy'}
              {difficulty === 'medium' && '●● Medium'}
              {difficulty === 'hard' && '●●● Advanced'}
            </span>
          </div>
        </div>
      </li>
    );
  };

  interface ChecklistSectionProps {
    id: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
    itemCount: number;
  }

  const ChecklistSection: React.FC<ChecklistSectionProps> = ({ id, title, icon: Icon, children, itemCount }) => {
    const isExpanded = expandedSections.has(id);
    const sectionItems = Array.from(checkedItems).filter(item => item.startsWith(id)).length;
    const progress = itemCount > 0 ? Math.round((sectionItems / itemCount) * 100) : 0;

    return (
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center">
            <Icon className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <span className="ml-3 text-sm text-slate-500">
              {sectionItems}/{itemCount} completed
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-24 bg-slate-200 rounded-full h-2 mr-3">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-slate-500" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-500" />
            )}
          </div>
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
            <CheckCircle className="w-4 h-4 mr-2" />
            Interactive Compliance Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 Compliance Checklist
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Your step-by-step guide to SOC 2 compliance. Track your progress, understand requirements, 
            and ensure you dondon'tapos;t miss critical steps on your compliance journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#checklist" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Checklist
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/resources/soc2-primer" 
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center"
            >
              Read Primer First
              <BookOpen className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Overview */}
        <div className="bg-slate-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Your Progress Overview</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {Math.round((checkedItems.size / 45) * 100)}%
              </div>
              <div className="text-sm text-slate-600">Overall Progress</div>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">
                {checkedItems.size}
              </div>
              <div className="text-sm text-slate-600">Items Completed</div>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <div className="text-2xl font-bold text-slate-600 mb-1">
                {45 - checkedItems.size}
              </div>
              <div className="text-sm text-slate-600">Items Remaining</div>
            </div>
          </div>
        </div>

        {/* Key Tips */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Pro Tips for Success</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Start early:</strong> SOC 2 preparation typically takes 6-12 months</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Focus on your scope:</strong> Don't try to include everything at once</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Document everything:</strong> Evidence collection starts from day one</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Checklist */}
        <div id="checklist" className="space-y-6">
          <ChecklistSection 
            id="getting-started" 
            title="Getting Started (Before Implementation)" 
            icon={Target}
            itemCount={5}
          >
            <div className="mb-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-700 text-sm">
                These foundational steps set you up for success. Complete these before diving into technical implementation.
              </p>
            </div>
            <ul className="space-y-2">
              <ChecklistItem id="getting-started-1" isRequired={true} difficulty="easy">
                <strong>Define your scope</strong> - Identify systems that store, process, or transmit customer data
              </ChecklistItem>
              <ChecklistItem id="getting-started-2" isRequired={true} difficulty="easy">
                <strong>Choose your criteria</strong> - Start with Security + Availability for most SaaS companies
              </ChecklistItem>
              <ChecklistItem id="getting-started-3" isRequired={true} difficulty="medium">
                <strong>Assign ownership</strong> - Designate a compliance lead and cross-functional team
              </ChecklistItem>
              <ChecklistItem id="getting-started-4" difficulty="easy">
                <strong>Set timeline</strong> - Plan 6-12 months for implementation + evidence collection
              </ChecklistItem>
              <ChecklistItem id="getting-started-5" difficulty="medium">
                <strong>Budget planning</strong> - Allocate resources for tools, auditor, and internal time
              </ChecklistItem>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
              <strong>💡 Need help with planning?</strong> Check out our{' '}
              <a href="/resources/implementation-guides" className="underline">Implementation Guides</a>
            </div>
          </ChecklistSection>

          <ChecklistSection 
            id="documentation" 
            title="Documentation & Policies" 
            icon={FileText}
            itemCount={5}
          >
            <div className="mb-4 p-4 bg-emerald-50 rounded-lg">
              <p className="text-slate-700 text-sm">
                <strong>✨ Templates Available:</strong> Save months of work with our professionally written, SOC 2-aligned policy templates.
              </p>
            </div>
            <ul className="space-y-2">
              <ChecklistItem id="documentation-1" isRequired={true} difficulty="hard">
                <strong>Information Security Policy</strong> - Master policy covering all security practices
              </ChecklistItem>
              <ChecklistItem id="documentation-2" isRequired={true} difficulty="medium">
                <strong>Access Control Policy</strong> - User access management and authentication requirements
              </ChecklistItem>
              <ChecklistItem id="documentation-3" isRequired={true} difficulty="medium">
                <strong>Incident Response Plan</strong> - Procedures for detecting and responding to security incidents
              </ChecklistItem>
              <ChecklistItem id="documentation-4" isRequired={true} difficulty="medium">
                <strong>Data Management Policy</strong> - How customer data is handled throughout its lifecycle
              </ChecklistItem>
              <ChecklistItem id="documentation-5" isRequired={true} difficulty="medium">
                <strong>Risk Management Policy</strong> - Process for identifying and mitigating risks
              </ChecklistItem>
            </ul>
            <div className="mt-4 p-3 bg-emerald-50 rounded text-sm text-emerald-800">
              <strong>🎯 Save time:</strong> Our{' '}
              <a href="/products/policies" className="underline">Policy Templates</a> are professionally written and SOC 2 aligned
            </div>
          </ChecklistSection>

          <ChecklistSection 
            id="technical-security" 
            title="Technical Security Controls" 
            icon={Shield}
            itemCount={7}
          >
            <ul className="space-y-2">
              <ChecklistItem id="technical-1" isRequired={true} difficulty="easy">
                <strong>Multi-factor authentication</strong> - Implement MFA for all administrative access
              </ChecklistItem>
              <ChecklistItem id="technical-2" isRequired={true} difficulty="medium">
                <strong>Network security</strong> - Firewalls, network segmentation, VPN access
              </ChecklistItem>
              <ChecklistItem id="technical-3" isRequired={true} difficulty="medium">
                <strong>Data encryption</strong> - Encrypt data at rest and in transit
              </ChecklistItem>
              <ChecklistItem id="technical-4" isRequired={true} difficulty="medium">
                <strong>Backup and recovery</strong> - Regular backups with tested restore procedures
              </ChecklistItem>
              <ChecklistItem id="technical-5" difficulty="hard">
                <strong>System monitoring</strong> - Security information and event management (SIEM)
              </ChecklistItem>
              <ChecklistItem id="technical-6" difficulty="medium">
                <strong>Vulnerability management</strong> - Regular scans and patch management
              </ChecklistItem>
              <ChecklistItem id="technical-7" difficulty="easy">
                <strong>Antivirus/anti-malware</strong> - Endpoint protection across all systems
              </ChecklistItem>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
              <strong>📋 Need detailed guidance?</strong> Check our{' '}
              <a href="/products/evidence" className="underline">Evidence Explanations</a> for implementation details
            </div>
          </ChecklistSection>

          <ChecklistSection 
            id="administrative" 
            title="Administrative Controls" 
            icon={Users}
            itemCount={5}
          >
            <ul className="space-y-2">
              <ChecklistItem id="admin-1" difficulty="easy">
                <strong>Employee background checks</strong> - Verify identity and background for new hires
              </ChecklistItem>
              <ChecklistItem id="admin-2" isRequired={true} difficulty="easy">
                <strong>Security awareness training</strong> - Regular training for all employees
              </ChecklistItem>
              <ChecklistItem id="admin-3" isRequired={true} difficulty="medium">
                <strong>Access reviews</strong> - Quarterly reviews of who has access to what systems
              </ChecklistItem>
              <ChecklistItem id="admin-4" difficulty="medium">
                <strong>Vendor management</strong> - Due diligence and contracts for third-party providers
              </ChecklistItem>
              <ChecklistItem id="admin-5" difficulty="easy">
                <strong>Physical security</strong> - Secure facilities and device management
              </ChecklistItem>
            </ul>
          </ChecklistSection>

          <ChecklistSection 
            id="operational" 
            title="Operational Procedures" 
            icon={Clock}
            itemCount={5}
          >
            <ul className="space-y-2">
              <ChecklistItem id="operational-1" isRequired={true} difficulty="medium">
                <strong>Change management</strong> - Formal process for system and application changes
              </ChecklistItem>
              <ChecklistItem id="operational-2" difficulty="easy">
                <strong>Asset inventory</strong> - Maintain list of all hardware and software assets
              </ChecklistItem>
              <ChecklistItem id="operational-3" isRequired={true} difficulty="medium">
                <strong>Log monitoring</strong> - Collect and review security logs regularly
              </ChecklistItem>
              <ChecklistItem id="operational-4" difficulty="easy">
                <strong>Performance monitoring</strong> - Track system availability and performance
              </ChecklistItem>
              <ChecklistItem id="operational-5" difficulty="medium">
                <strong>Disaster recovery testing</strong> - Regular tests of backup and recovery procedures
              </ChecklistItem>
            </ul>
            <div className="mt-4 p-3 bg-amber-50 rounded text-sm text-amber-800">
              <strong>⚡ Ready-to-use forms:</strong> Our{' '}
              <a href="/products/documents" className="underline">Document Templates</a> provide procedures and forms
            </div>
          </ChecklistSection>

          <ChecklistSection 
            id="evidence" 
            title="Evidence Collection (3-12 months before audit)" 
            icon={Download}
            itemCount={7}
          >
            <div className="mb-4 p-4 bg-amber-50 rounded-lg">
              <p className="text-slate-700 text-sm">
                Start collecting evidence as soon as your controls are operational. Auditors need to see that controls operated effectively over time.
              </p>
            </div>
            <ul className="space-y-2">
              <ChecklistItem id="evidence-1" isRequired={true} difficulty="easy">
                <strong>Access control evidence</strong> - Logs of user provisioning/deprovisioning
              </ChecklistItem>
              <ChecklistItem id="evidence-2" isRequired={true} difficulty="medium">
                <strong>Security monitoring logs</strong> - Evidence of ongoing monitoring activities
              </ChecklistItem>
              <ChecklistItem id="evidence-3" isRequired={true} difficulty="easy">
                <strong>Training records</strong> - Documentation of employee security training
              </ChecklistItem>
              <ChecklistItem id="evidence-4" difficulty="medium">
                <strong>Incident documentation</strong> - Records of any security incidents and responses
              </ChecklistItem>
              <ChecklistItem id="evidence-5" difficulty="medium">
                <strong>Vulnerability scan reports</strong> - Regular security assessments and remediation
              </ChecklistItem>
              <ChecklistItem id="evidence-6" isRequired={true} difficulty="medium">
                <strong>Change management logs</strong> - Documentation of all system changes
              </ChecklistItem>
              <ChecklistItem id="evidence-7" difficulty="easy">
                <strong>Backup verification</strong> - Proof that backups are working and tested
              </ChecklistItem>
            </ul>
            <div className="mt-4 p-3 bg-emerald-50 rounded text-sm text-emerald-800">
              <strong>🎯 Confused about evidence?</strong> Our{' '}
              <a href="/products/evidence-bundle" className="underline">Evidence Bundle</a> explains exactly what auditors expect
            </div>
          </ChecklistSection>

          <ChecklistSection 
            id="pre-audit" 
            title="Pre-Audit Preparation" 
            icon={CheckCircle}
            itemCount={5}
          >
            <ul className="space-y-2">
              <ChecklistItem id="pre-audit-1" difficulty="medium">
                <strong>Internal readiness assessment</strong> - Self-evaluation against SOC 2 requirements
              </ChecklistItem>
              <ChecklistItem id="pre-audit-2" difficulty="easy">
                <strong>Auditor selection</strong> - Research and interview potential audit firms
              </ChecklistItem>
              <ChecklistItem id="pre-audit-3" difficulty="medium">
                <strong>Evidence organization</strong> - Compile all documentation and evidence
              </ChecklistItem>
              <ChecklistItem id="pre-audit-4" difficulty="easy">
                <strong>Team preparation</strong> - Brief all team members who will interact with auditors
              </ChecklistItem>
              <ChecklistItem id="pre-audit-5" difficulty="hard">
                <strong>Gap remediation</strong> - Address any identified control gaps
              </ChecklistItem>
            </ul>
          </ChecklistSection>

          <ChecklistSection 
            id="pitfalls" 
            title="Common Pitfalls to Avoid" 
            icon={AlertCircle}
            itemCount={5}
          >
            <div className="mb-4 p-4 bg-red-50 rounded-lg">
              <p className="text-slate-700 text-sm">
                <strong>⚠️ Avoid these mistakes:</strong> These are the most common reasons companies fail their first audit.
              </p>
            </div>
            <ul className="space-y-2">
              <ChecklistItem id="pitfalls-1" difficulty="easy">
                <strong>Scope too broad</strong> - Start narrow with core customer-facing systems only
              </ChecklistItem>
              <ChecklistItem id="pitfalls-2" difficulty="medium">
                <strong>Documentation overload</strong> - Focus on what you actually do, not aspirational goals
              </ChecklistItem>
              <ChecklistItem id="pitfalls-3" difficulty="medium">
                <strong>Last-minute preparation</strong> - Controls need to operate for months before audit
              </ChecklistItem>
              <ChecklistItem id="pitfalls-4" difficulty="easy">
                <strong>Ignoring availability</strong> - Most SaaS companies need this criterion
              </ChecklistItem>
              <ChecklistItem id="pitfalls-5" difficulty="hard">
                <strong>Weak access controls</strong> - This is the #1 area where companies fail audits
              </ChecklistItem>
            </ul>
          </ChecklistSection>
        </div>

        {/* Download and Resources */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-slate-700 mb-6">
            Don't start from scratch. Our templates and guidance help you implement these controls correctly the first time.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Policy Templates</h4>
              <p className="text-sm text-slate-600 mb-4">Professional policies that address SOC 2 requirements</p>
              <a href="/products/policies" className="text-blue-600 hover:text-blue-700 font-medium">
                View Policies →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Download className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Evidence Guidance</h4>
              <p className="text-sm text-slate-600 mb-4">Learn what auditors look for with detailed explanations</p>
              <a href="/products/evidence" className="text-emerald-600 hover:text-emerald-700 font-medium">
                View Evidence →
              </a>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Complete Bundle</h4>
              <p className="text-sm text-slate-600 mb-4">Everything you need for SOC 2 compliance</p>
              <a href="/products/complete-bundle" className="text-amber-600 hover:text-amber-700 font-medium">
                View Bundle →
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/api/download/checklist" 
              className="inline-flex items-center text-slate-600 hover:text-slate-700 text-sm bg-white border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF Checklist (Print-friendly version)
            </a>
          </div>
        </div>

        {/* Final Note */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            This checklist provides general guidance. Every organization's SOC 2 journey is unique based on their specific systems, risks, and business model.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};