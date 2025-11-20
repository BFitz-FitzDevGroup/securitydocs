"use client"
import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, FileText, Lightbulb, Tag, Users, Shield, Clock, CheckCircle, BookOpen, Download } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export function SOC2GlossaryClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'SOC 2 Glossary', href: '/resources/glossary' }
  ];

  const categories = [
    { id: 'all', label: 'All Terms', count: 45 },
    { id: 'criteria', label: 'Trust Service Criteria', count: 12 },
    { id: 'audit', label: 'Audit Process', count: 8 },
    { id: 'controls', label: 'Controls & Procedures', count: 10 },
    { id: 'compliance', label: 'Compliance & Risk', count: 9 },
    { id: 'technical', label: 'Technical Terms', count: 6 }
  ];

  const glossaryTerms = [
    {
      id: 'soc-2',
      term: 'SOC 2',
      category: 'audit',
      definition: 'Service Organization Control 2 - An auditing procedure that ensures service companies securely manage data to protect the interests of their organization and client data.',
      explanation: 'SOC 2 is based on the AICPA Trust Service Criteria and focuses on five "trust service principles": Security, Availability, Processing Integrity, Confidentiality, and Privacy. It\'s designed for service organizations that store customer data in the cloud.',
      relatedTerms: ['Trust Service Criteria', 'Type I Report', 'Type II Report', 'Service Organization'],
      example: 'A SaaS company undergoes a SOC 2 Type II audit to demonstrate to enterprise customers that they have proper security controls in place.',
      templates: ['SOC 2 System Description', 'All Policy Templates']
    },
    {
      id: 'trust-service-criteria',
      term: 'Trust Service Criteria (TSC)',
      category: 'criteria',
      definition: 'A framework developed by the AICPA that defines criteria for evaluating controls at service organizations.',
      explanation: 'The Trust Service Criteria consist of five categories: Security (required for all SOC 2 audits), Availability, Processing Integrity, Confidentiality, and Privacy. Each category contains specific criteria that organizations must meet.',
      relatedTerms: ['Common Criteria', 'Security', 'Availability', 'Processing Integrity', 'Confidentiality', 'Privacy'],
      example: 'An organization chooses Security and Availability criteria for their SOC 2 audit because they provide cloud-based services that must be secure and highly available.',
      templates: ['Complete Bundle']
    },
    {
      id: 'type-i-report',
      term: 'Type I Report',
      category: 'audit',
      definition: 'An audit report that evaluates the design of controls at a specific point in time.',
      explanation: 'Type I reports examine whether controls are suitably designed to meet the relevant trust service criteria as of a specific date. They do not test the operating effectiveness of controls over time.',
      relatedTerms: ['Type II Report', 'Point-in-Time', 'Control Design'],
      example: 'A startup gets a Type I report to demonstrate they have proper controls designed before seeking enterprise customers.',
      templates: []
    },
    {
      id: 'type-ii-report',
      term: 'Type II Report',
      category: 'audit',
      definition: 'An audit report that evaluates both the design and operating effectiveness of controls over a period of time.',
      explanation: 'Type II reports test controls over a minimum period (usually 6-12 months) to determine if they are operating effectively. This is the more comprehensive and preferred type of SOC 2 report.',
      relatedTerms: ['Type I Report', 'Operating Effectiveness', 'Audit Period'],
      example: 'An established SaaS company undergoes a Type II audit covering 12 months to prove their controls have been operating effectively over time.',
      templates: []
    },
    {
      id: 'security',
      term: 'Security',
      category: 'criteria',
      definition: 'Protection against unauthorized access to systems, applications, and data.',
      explanation: 'Security is the foundational trust service criterion required for all SOC 2 audits. It includes logical access controls, network security, and protection against cyber threats.',
      relatedTerms: ['Access Controls', 'Authentication', 'Authorization', 'Encryption'],
      example: 'Security controls include multi-factor authentication, regular access reviews, and encryption of sensitive data.',
      templates: ['Access Control Policy', 'Information Security Policy']
    },
    {
      id: 'availability',
      term: 'Availability',
      category: 'criteria',
      definition: 'The accessibility of systems, applications, and data for operation and use as committed or agreed.',
      explanation: 'Availability focuses on system uptime, performance monitoring, incident response, and business continuity. It ensures services are accessible when needed.',
      relatedTerms: ['Uptime', 'Business Continuity', 'Disaster Recovery', 'Performance Monitoring'],
      example: 'Availability controls include monitoring system uptime, having disaster recovery procedures, and maintaining backup systems.',
      templates: ['Business Resilience and Recovery Plan', 'Incident Response Plan']
    },
    {
      id: 'processing-integrity',
      term: 'Processing Integrity',
      category: 'criteria',
      definition: 'System processing that is complete, valid, accurate, timely, and authorized.',
      explanation: 'Processing Integrity ensures that data processing meets the organization\'s objectives and that data is processed completely and accurately.',
      relatedTerms: ['Data Validation', 'Error Handling', 'Data Quality', 'Transaction Processing'],
      example: 'Processing integrity controls include input validation, error detection and correction, and audit trails for all transactions.',
      templates: ['Secure Development Policy', 'Operations Security Policy']
    },
    {
      id: 'confidentiality',
      term: 'Confidentiality',
      category: 'criteria',
      definition: 'Information designated as confidential is protected as committed or agreed.',
      explanation: 'Confidentiality protects sensitive information from unauthorized disclosure and is distinct from privacy, which specifically relates to personal information.',
      relatedTerms: ['Data Classification', 'Information Handling', 'Encryption', 'Privacy'],
      example: 'Confidentiality controls include data classification schemes, encryption of confidential data, and confidentiality agreements.',
      templates: ['Data Management Policy', 'Employee Confidentiality Agreement']
    },
    {
      id: 'privacy',
      term: 'Privacy',
      category: 'criteria',
      definition: 'Personal information is collected, used, retained, disclosed, and disposed of in conformity with privacy commitments.',
      explanation: 'Privacy focuses specifically on personal information and requires organizations to have privacy policies and procedures that align with their privacy commitments.',
      relatedTerms: ['Personal Information', 'Privacy Policy', 'Data Retention', 'Consent'],
      example: 'Privacy controls include privacy policies, consent management, data retention schedules, and rights management for data subjects.',
      templates: ['Sample Privacy Policy', 'GDPR Sample Privacy Policy']
    },
    {
      id: 'common-criteria',
      term: 'Common Criteria (CC)',
      category: 'criteria',
      definition: 'Control criteria that relate to all five trust service categories and form the foundation of SOC 2 audits.',
      explanation: 'Common Criteria cover fundamental areas like control environment, communication, risk assessment, monitoring activities, and control activities. They apply regardless of which trust service criteria are selected.',
      relatedTerms: ['Control Environment', 'Risk Assessment', 'Control Activities'],
      example: 'CC1.1 requires the entity to demonstrate a commitment to integrity and ethical values.',
      templates: ['Code of Conduct', 'Risk Management Policy']
    },
    {
      id: 'service-organization',
      term: 'Service Organization',
      category: 'audit',
      definition: 'An entity that provides services to user entities where those services are part of the user entities\' information systems.',
      explanation: 'Service organizations are companies that provide services to other organizations, typically involving the processing, storage, or transmission of data.',
      relatedTerms: ['User Entity', 'Subservice Organization', 'Service Auditor'],
      example: 'Cloud storage providers, payroll processors, and SaaS companies are examples of service organizations.',
      templates: []
    },
    {
      id: 'user-entity',
      term: 'User Entity',
      category: 'audit',
      definition: 'An entity that uses a service organization and whose financial statements are being audited.',
      explanation: 'User entities rely on service organizations and need assurance about the controls at those service organizations for their own compliance requirements.',
      relatedTerms: ['Service Organization', 'User Auditor', 'Complementary Controls'],
      example: 'A manufacturing company using a cloud-based accounting system is a user entity of that SaaS provider.',
      templates: []
    },
    {
      id: 'control-deficiency',
      term: 'Control Deficiency',
      category: 'controls',
      definition: 'A deficiency in the design or operation of a control that does not allow management to prevent or detect misstatements.',
      explanation: 'Control deficiencies are identified during SOC 2 audits when controls are not designed properly or are not operating effectively.',
      relatedTerms: ['Significant Deficiency', 'Material Weakness', 'Exception'],
      example: 'A control deficiency might be identified if access reviews are not performed quarterly as required by policy.',
      templates: ['Access Control Policy']
    },
    {
      id: 'material-weakness',
      term: 'Material Weakness',
      category: 'controls',
      definition: 'A deficiency or combination of deficiencies in internal control that is of such magnitude that there is a reasonable possibility of material noncompliance.',
      explanation: 'Material weaknesses are the most serious type of finding in a SOC 2 audit and typically require immediate attention and remediation.',
      relatedTerms: ['Control Deficiency', 'Significant Deficiency', 'Remediation'],
      example: 'A material weakness might be identified if there are no access controls protecting customer data.',
      templates: []
    },
    {
      id: 'complementary-controls',
      term: 'Complementary Controls',
      category: 'controls',
      definition: 'Controls that user entities should implement to complement the service organization\'s controls.',
      explanation: 'These are controls that user entities need to have in place for the service organization\'s controls to be effective in meeting the user entity\'s objectives.',
      relatedTerms: ['User Entity', 'Service Organization', 'Control Objectives'],
      example: 'A user entity should maintain strong password policies when using a cloud service that relies on user authentication.',
      templates: []
    },
    {
      id: 'control-activities',
      term: 'Control Activities',
      category: 'controls',
      definition: 'Policies and procedures that help ensure management directives are carried out.',
      explanation: 'Control activities are specific actions taken to mitigate risks and ensure that control objectives are met. They include both automated and manual controls.',
      relatedTerms: ['Policies', 'Procedures', 'Automated Controls', 'Manual Controls'],
      example: 'Examples include approval procedures, authorization controls, reconciliations, and security protocols.',
      templates: ['All Policy Templates']
    },
    {
      id: 'risk-assessment',
      term: 'Risk Assessment',
      category: 'compliance',
      definition: 'The identification and analysis of relevant risks to achievement of objectives.',
      explanation: 'Risk assessment is a fundamental component of SOC 2 that involves identifying threats, vulnerabilities, and potential impacts to determine appropriate control measures.',
      relatedTerms: ['Risk Management', 'Threat Assessment', 'Vulnerability Management'],
      example: 'A risk assessment might identify data breach risks and lead to implementation of encryption controls.',
      templates: ['Risk Management Policy', 'Risk Scenario Identification Template']
    },
    {
      id: 'penetration-testing',
      term: 'Penetration Testing',
      category: 'technical',
      definition: 'Authorized simulated attacks on computer systems to evaluate security.',
      explanation: 'Penetration testing helps identify security vulnerabilities that could be exploited by attackers and is often required for SOC 2 compliance.',
      relatedTerms: ['Vulnerability Assessment', 'Security Testing', 'Ethical Hacking'],
      example: 'An annual penetration test identifies vulnerabilities in web applications and network infrastructure.',
      templates: ['Penetration Test and Report Evidence Explanation']
    },
    {
      id: 'encryption',
      term: 'Encryption',
      category: 'technical',
      definition: 'The process of converting information into a coded format to prevent unauthorized access.',
      explanation: 'Encryption is a critical security control that protects data both at rest (stored) and in transit (being transmitted).',
      relatedTerms: ['Cryptography', 'Data Protection', 'Key Management'],
      example: 'Customer data is encrypted using AES-256 encryption both in the database and during transmission.',
      templates: ['Cryptography Policy', 'Data Management Policy']
    },
    {
      id: 'access-controls',
      term: 'Access Controls',
      category: 'controls',
      definition: 'Security measures that regulate who can view or use resources in a computing environment.',
      explanation: 'Access controls ensure that only authorized users can access systems and data, typically involving authentication and authorization mechanisms.',
      relatedTerms: ['Authentication', 'Authorization', 'Multi-Factor Authentication', 'Role-Based Access'],
      example: 'Access controls include user passwords, multi-factor authentication, and role-based permissions.',
      templates: ['Access Control Policy', 'Access Request Ticket Form']
    },
    {
      id: 'incident-response',
      term: 'Incident Response',
      category: 'controls',
      definition: 'Organized approach to addressing and managing security breaches or cyber attacks.',
      explanation: 'Incident response involves preparation, detection, analysis, containment, eradication, recovery, and post-incident activities.',
      relatedTerms: ['Security Incident', 'Incident Management', 'Business Continuity'],
      example: 'When a security breach is detected, the incident response team follows documented procedures to contain and remediate the issue.',
      templates: ['Incident Response Plan', 'Sample Incident Tabletop Exercise']
    },
    {
      id: 'change-management',
      term: 'Change Management',
      category: 'controls',
      definition: 'Process of controlling modifications to systems, applications, and infrastructure.',
      explanation: 'Change management ensures that all changes are properly authorized, tested, documented, and implemented without negatively impacting security or operations.',
      relatedTerms: ['Change Control', 'Configuration Management', 'Version Control'],
      example: 'All production system changes require approval, testing documentation, and rollback procedures.',
      templates: ['Secure Development Policy', 'Operations Security Policy']
    },
    {
      id: 'vendor-management',
      term: 'Vendor Management',
      category: 'compliance',
      definition: 'Process of evaluating, selecting, and overseeing third-party service providers.',
      explanation: 'Vendor management includes due diligence, contract management, ongoing monitoring, and ensuring vendors meet security and compliance requirements.',
      relatedTerms: ['Third-Party Risk', 'Due Diligence', 'Vendor Assessment'],
      example: 'All critical vendors must provide SOC 2 reports and undergo annual security assessments.',
      templates: ['Third-Party Management Policy', 'Vendor Assessment Guide']
    },
    {
      id: 'business-continuity',
      term: 'Business Continuity',
      category: 'compliance',
      definition: 'Planning and preparation to ensure critical business functions can continue during and after a disaster.',
      explanation: 'Business continuity involves identifying critical processes, implementing redundancies, and developing recovery procedures to minimize downtime.',
      relatedTerms: ['Disaster Recovery', 'Business Impact Analysis', 'Recovery Time Objective'],
      example: 'Business continuity plans include backup data centers, redundant systems, and documented recovery procedures.',
      templates: ['Business Resilience and Recovery Plan']
    },
    {
      id: 'monitoring',
      term: 'Monitoring',
      category: 'controls',
      definition: 'Ongoing evaluation of the performance and effectiveness of controls.',
      explanation: 'Monitoring involves regular assessment of controls to ensure they are operating effectively and identifying areas for improvement.',
      relatedTerms: ['Continuous Monitoring', 'Log Analysis', 'Performance Metrics'],
      example: 'Security monitoring includes analyzing system logs, tracking failed login attempts, and reviewing access patterns.',
      templates: ['Operations Security Policy']
    },
    {
      id: 'data-classification',
      term: 'Data Classification',
      category: 'compliance',
      definition: 'Process of organizing data by relevant categories so it can be used and protected more efficiently.',
      explanation: 'Data classification helps organizations understand what data they have, where it resides, and how it should be protected based on its sensitivity.',
      relatedTerms: ['Information Handling', 'Data Protection', 'Sensitivity Levels'],
      example: 'Data might be classified as Public, Internal, Confidential, or Restricted based on sensitivity and impact if disclosed.',
      templates: ['Data Management Policy', 'Information Security Policy']
    },
    {
      id: 'logical-access',
      term: 'Logical Access',
      category: 'technical',
      definition: 'Access to computer systems, applications, and data through software-based controls.',
      explanation: 'Logical access controls include user authentication, authorization, and account management to protect digital resources.',
      relatedTerms: ['Physical Access', 'User Authentication', 'Access Rights'],
      example: 'Logical access controls include usernames/passwords, multi-factor authentication, and role-based permissions.',
      templates: ['Access Control Policy']
    },
    {
      id: 'physical-access',
      term: 'Physical Access',
      category: 'technical',
      definition: 'Access to physical locations where systems and data are housed.',
      explanation: 'Physical access controls protect against unauthorized entry to facilities, data centers, and other locations containing sensitive equipment.',
      relatedTerms: ['Logical Access', 'Facility Security', 'Environmental Controls'],
      example: 'Physical access controls include key cards, biometric scanners, security guards, and surveillance systems.',
      templates: ['Physical Security Policy']
    },
    {
      id: 'system-description',
      term: 'System Description',
      category: 'audit',
      definition: 'Document prepared by management that describes the service organization\'s system.',
      explanation: 'The system description provides details about the organization, services provided, control environment, and how the system meets the applicable trust service criteria.',
      relatedTerms: ['Management Assertion', 'Service Description', 'Control Environment'],
      example: 'The system description includes information about the company, its services, infrastructure, software, people, procedures, and data.',
      templates: ['SOC 2 System Description']
    },
    {
      id: 'complementary-user-entity-controls',
      term: 'Complementary User Entity Controls (CUECs)',
      category: 'controls',
      definition: 'Controls that user entities should implement to complement service organization controls.',
      explanation: 'CUECs are specific controls that user entities need to have in place for the service organization\'s controls to be effective.',
      relatedTerms: ['User Entity', 'Complementary Controls', 'Shared Responsibility'],
      example: 'A CUEC might require user entities to implement strong password policies when using a cloud service.',
      templates: []
    },
    {
      id: 'control-environment',
      term: 'Control Environment',
      category: 'controls',
      definition: 'The foundation for all other components of internal control, providing discipline and structure.',
      explanation: 'The control environment includes the organization\'s commitment to integrity, ethical values, governance oversight, and organizational structure.',
      relatedTerms: ['Tone at the Top', 'Governance', 'Organizational Structure'],
      example: 'A strong control environment includes a code of conduct, ethics training, and clear reporting relationships.',
      templates: ['Code of Conduct', 'Human Resource Security Policy']
    },
    {
      id: 'subservice-organization',
      term: 'Subservice Organization',
      category: 'audit',
      definition: 'A service organization used by another service organization to perform some services.',
      explanation: 'When service organizations use other service providers, those become subservice organizations that may need to be included in SOC 2 scope.',
      relatedTerms: ['Service Organization', 'Carve-Out Method', 'Inclusive Method'],
      example: 'A SaaS company using Amazon Web Services as their cloud infrastructure provider - AWS would be a subservice organization.',
      templates: ['Third-Party Management Policy']
    },
    {
      id: 'carve-out-method',
      term: 'Carve-Out Method',
      category: 'audit',
      definition: 'Audit approach where subservice organization controls are excluded from the service auditor\'s testing.',
      explanation: 'With the carve-out method, the service organization\'s description and auditor\'s testing excludes controls at subservice organizations.',
      relatedTerms: ['Inclusive Method', 'Subservice Organization', 'Hybrid Method'],
      example: 'Using carve-out method, the audit report states that controls at the cloud provider are not included in the testing.',
      templates: []
    },
    {
      id: 'inclusive-method',
      term: 'Inclusive Method',
      category: 'audit',
      definition: 'Audit approach where subservice organization controls are included in the service auditor\'s testing.',
      explanation: 'With the inclusive method, the service organization\'s auditor tests controls at both the service organization and relevant subservice organizations.',
      relatedTerms: ['Carve-Out Method', 'Subservice Organization', 'Hybrid Method'],
      example: 'Using inclusive method, the auditor tests both the SaaS company\'s controls and relevant controls at their cloud provider.',
      templates: []
    },
    {
      id: 'bridge-letter',
      term: 'Bridge Letter',
      category: 'audit',
      definition: 'Letter that extends the period covered by a SOC 2 report without performing a full audit.',
      explanation: 'Bridge letters are used when there\'s a gap between SOC 2 report periods, typically covering 1-3 months with limited procedures.',
      relatedTerms: ['Gap Period', 'Limited Procedures', 'Report Extension'],
      example: 'A bridge letter might cover January-March when the previous SOC 2 report ended in December and the new audit starts in April.',
      templates: []
    },
    {
      id: 'exception',
      term: 'Exception',
      category: 'audit',
      definition: 'Instance where a control did not operate as designed during the audit period.',
      explanation: 'Exceptions are identified during testing and represent control failures that need to be evaluated for their impact on the control objectives.',
      relatedTerms: ['Control Deficiency', 'Testing', 'Control Failure'],
      example: 'An exception might be found if an access review was performed late or if a required approval was missing.',
      templates: []
    },
    {
      id: 'sampling',
      term: 'Sampling',
      category: 'audit',
      definition: 'Process of selecting a subset of items from a population for testing.',
      explanation: 'Auditors use sampling to test controls efficiently while still obtaining reasonable assurance about control effectiveness.',
      relatedTerms: ['Sample Size', 'Population', 'Testing Procedures'],
      example: 'An auditor might sample 25 access provisioning requests from the 200 requests made during the year.',
      templates: []
    },
    {
      id: 'walkthrough',
      term: 'Walkthrough',
      category: 'audit',
      definition: 'Procedure where the auditor traces a transaction from origination through the system.',
      explanation: 'Walkthroughs help auditors understand how controls operate in practice and identify potential gaps or inefficiencies.',
      relatedTerms: ['Process Documentation', 'Control Testing', 'Transaction Flow'],
      example: 'A walkthrough of the user provisioning process follows a new hire from HR request through system access granting.',
      templates: []
    },
    {
      id: 'scoping',
      term: 'Scoping',
      category: 'audit',
      definition: 'Process of defining what systems, applications, and processes are included in the SOC 2 audit.',
      explanation: 'Proper scoping ensures the audit covers all relevant systems while excluding out-of-scope items to control costs and complexity.',
      relatedTerms: ['Audit Boundary', 'System Components', 'Service Description'],
      example: 'Scoping might include the production environment but exclude development and testing systems.',
      templates: []
    },
    {
      id: 'readiness-assessment',
      term: 'Readiness Assessment',
      category: 'audit',
      definition: 'Preliminary evaluation to determine an organization\'s preparedness for a SOC 2 audit.',
      explanation: 'Readiness assessments identify gaps and areas for improvement before the formal audit begins, helping ensure a successful audit outcome.',
      relatedTerms: ['Gap Analysis', 'Pre-Audit Assessment', 'Compliance Review'],
      example: 'A readiness assessment might reveal missing policies or inadequate access controls that need to be addressed.',
      templates: ['Complete Bundle']
    }
  ];

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = searchTerm === '' || 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.relatedTerms.some(related => related.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const selectedTermData = selectedTerm ? glossaryTerms.find(t => t.id === selectedTerm) : null;

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Reference Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 Glossary
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Comprehensive definitions and explanations of SOC 2 terms, concepts, and compliance jargon. 
            Your complete reference guide for understanding SOC 2 compliance.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-600 justify-center">
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              45 Terms
            </div>
            <div className="flex items-center">
              <Search className="w-4 h-4 mr-2" />
              Searchable
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              All Levels
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search terms, definitions, or related concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center text-sm text-slate-600">
            <Filter className="w-4 h-4 mr-2" />
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
            {searchTerm && (
              <span className="ml-2">
                matching "<span className="font-medium text-slate-900">{searchTerm}</span>"
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Terms List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredTerms.map((term, index) => (
                <div 
                  key={term.id}
                  className={`bg-white border rounded-lg p-6 cursor-pointer transition-all ${
                    selectedTerm === term.id 
                      ? 'border-blue-300 bg-blue-50' 
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                  onClick={() => setSelectedTerm(selectedTerm === term.id ? null : term.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-slate-900 mr-3">{term.term}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          term.category === 'criteria' ? 'bg-blue-100 text-blue-800' :
                          term.category === 'audit' ? 'bg-emerald-100 text-emerald-800' :
                          term.category === 'controls' ? 'bg-amber-100 text-amber-800' :
                          term.category === 'compliance' ? 'bg-purple-100 text-purple-800' :
                          'bg-slate-100 text-slate-800'
                        }`}>
                          {categories.find(c => c.id === term.category)?.label.replace(' Terms', '') || term.category}
                        </span>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{term.definition}</p>
                      
                      {term.relatedTerms.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {term.relatedTerms.slice(0, 3).map((related, i) => (
                            <span key={i} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                              {related}
                            </span>
                          ))}
                          {term.relatedTerms.length > 3 && (
                            <span className="text-slate-500 text-xs py-1">
                              +{term.relatedTerms.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform ml-4 ${
                      selectedTerm === term.id ? 'rotate-90' : ''
                    }`} />
                  </div>

                  {selectedTerm === term.id && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Detailed Explanation</h4>
                          <p className="text-slate-700 text-sm leading-relaxed">{term.explanation}</p>
                        </div>

                        {term.example && (
                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Example</h4>
                            <p className="text-slate-700 text-sm leading-relaxed italic">{term.example}</p>
                          </div>
                        )}

                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Related Terms</h4>
                          <div className="flex flex-wrap gap-2">
                            {term.relatedTerms.map((related, i) => (
                              <button
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSearchTerm(related);
                                  setSelectedTerm(null);
                                }}
                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1 rounded text-sm font-medium transition-colors"
                              >
                                {related}
                              </button>
                            ))}
                          </div>
                        </div>

                        {term.templates && term.templates.length > 0 && (
                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Related Templates</h4>
                            <div className="flex flex-wrap gap-2">
                              {term.templates.map((template, i) => (
                                <span key={i} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded text-sm font-medium">
                                  {template}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">No terms found</h3>
                <p className="text-slate-600">
                  Try adjusting your search criteria or browse all terms by selecting "All Terms" above.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Links */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Quick Access</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => { setSearchTerm('Trust Service Criteria'); setSelectedCategory('criteria'); }}
                    className="w-full text-left text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Trust Service Criteria →
                  </button>
                  <button
                    onClick={() => { setSearchTerm('Common Criteria'); setSelectedCategory('criteria'); }}
                    className="w-full text-left text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Common Criteria →
                  </button>
                  <button
                    onClick={() => { setSearchTerm('Type II Report'); setSelectedCategory('audit'); }}
                    className="w-full text-left text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Audit Reports →
                  </button>
                  <button
                    onClick={() => { setSearchTerm('Access Controls'); setSelectedCategory('controls'); }}
                    className="w-full text-left text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Controls & Procedures →
                  </button>
                </div>
              </div>

              {/* Popular Terms */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Most Referenced Terms</h3>
                <div className="space-y-2">
                  {['SOC 2', 'Trust Service Criteria', 'Type II Report', 'Security', 'Access Controls'].map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(term)}
                      className="block text-slate-700 hover:text-blue-600 text-sm transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Learning Resources */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                  Need More Help?
                </h3>
                <div className="space-y-3">
                  <a 
                    href="/resources/soc2-primer" 
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    SOC 2 Primer →
                  </a>
                  <a 
                    href="/resources/implementation-guides" 
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Implementation Guides →
                  </a>
                  <a 
                    href="/resources/soc2-checklist" 
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Compliance Checklist →
                  </a>
                </div>
              </div>

              {/* Templates CTA */}
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Ready to Implement?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Get professionally written policies and procedures to implement these concepts.
                </p>
                <div className="space-y-2">
                  <a 
                    href="/products/complete-bundle" 
                    className="block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-medium text-center transition-colors"
                  >
                    Complete Bundle
                  </a>
                  <a 
                    href="/products" 
                    className="block text-emerald-600 hover:text-emerald-700 text-sm font-medium text-center"
                  >
                    Browse All Templates →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat.id !== 'all').map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`text-left p-6 rounded-lg border transition-all ${
                  selectedCategory === category.id
                    ? 'border-blue-300 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  category.id === 'criteria' ? 'bg-blue-100' :
                  category.id === 'audit' ? 'bg-emerald-100' :
                  category.id === 'controls' ? 'bg-amber-100' :
                  category.id === 'compliance' ? 'bg-purple-100' :
                  'bg-slate-100'
                }`}>
                  {category.id === 'criteria' ? <Shield className="w-6 h-6 text-blue-600" /> :
                   category.id === 'audit' ? <FileText className="w-6 h-6 text-emerald-600" /> :
                   category.id === 'controls' ? <Users className="w-6 h-6 text-amber-600" /> :
                   category.id === 'compliance' ? <CheckCircle className="w-6 h-6 text-purple-600" /> :
                   <Clock className="w-6 h-6 text-slate-600" />}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{category.label}</h3>
                <p className="text-slate-600 text-sm mb-3">
                  {category.count} terms covering{' '}
                  {category.id === 'criteria' ? 'Trust Service Criteria and Common Criteria' :
                   category.id === 'audit' ? 'audit processes, reports, and procedures' :
                   category.id === 'controls' ? 'control activities and procedures' :
                   category.id === 'compliance' ? 'risk management and compliance concepts' :
                   'technical security terms and concepts'}
                </p>
                <div className="text-blue-600 text-sm font-medium">
                  Browse {category.count} terms →
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">How to Use This Glossary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-slate-900 mb-3">Finding Terms</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Use the search box to find specific terms or concepts</li>
                <li>• Filter by category to browse related terms</li>
                <li>• Click on related terms to explore connections</li>
                <li>• Use quick access links for common lookups</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-slate-900 mb-3">Understanding Definitions</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Each term includes a concise definition and detailed explanation</li>
                <li>• Examples show real-world applications</li>
                <li>• Related terms help you understand connections</li>
                <li>• Template suggestions show practical implementation tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};