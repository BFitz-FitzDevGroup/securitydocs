import React from 'react';
import { Check, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const SOC2PrimerPage = () => {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'SOC 2 Primer', href: '/resources/soc2-primer' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Complete SOC 2 Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Complete SOC 2 Primer
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Everything you need to know about SOC 2 compliance, from the basics to implementation. 
            A comprehensive guide for businesses seeking to understand and achieve SOC 2 certification.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#getting-started" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Reading
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/products" 
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center"
            >
              View Templates
              <FileText className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <div className="bg-slate-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#what-is-soc2" className="block text-blue-600 hover:text-blue-700 transition-colors">
                1. What is SOC 2?
              </a>
              <a href="#trust-service-criteria" className="block text-blue-600 hover:text-blue-700 transition-colors">
                2. Trust Service Criteria
              </a>
              <a href="#getting-started" className="block text-blue-600 hover:text-blue-700 transition-colors">
                3. Getting Started
              </a>
              <a href="#implementation-steps" className="block text-blue-600 hover:text-blue-700 transition-colors">
                4. Implementation Steps
              </a>
            </div>
            <div className="space-y-2">
              <a href="#timeline-costs" className="block text-blue-600 hover:text-blue-700 transition-colors">
                5. Timeline & Costs
              </a>
              <a href="#common-challenges" className="block text-blue-600 hover:text-blue-700 transition-colors">
                6. Common Challenges
              </a>
              <a href="#choosing-auditor" className="block text-blue-600 hover:text-blue-700 transition-colors">
                7. Choosing an Auditor
              </a>
              <a href="#next-steps" className="block text-blue-600 hover:text-blue-700 transition-colors">
                8. Next Steps
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-slate max-w-none">
          {/* What is SOC 2? */}
          <section id="what-is-soc2" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              What is SOC 2?
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Key Definition</h3>
                  <p className="text-slate-700">
                    SOC 2 (Service Organization Control 2) is an auditing standard developed by the American Institute of CPAs (AICPA) 
                    that evaluates how effectively an organization safeguards customer data and ensures the secure operation of its systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Good News: SOC 2 is Flexible!</h3>
                  <p className="text-slate-700 mb-3">
                    SOC 2 is <strong>not</strong> an all-or-nothing process. You can start small and focused, then expand over time:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span><strong>Choose your criteria:</strong> Only Security is required; other criteria are optional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span><strong>Define your scope:</strong> Start with core customer-facing systems only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span><strong>Expand gradually:</strong> Add more criteria and systems in future audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-700 mb-6">
              SOC 2 is particularly important for technology companies, SaaS providers, and any organization that stores, 
              processes, or transmits customer data. Unlike SOC 1, which focuses on financial reporting controls, 
              SOC 2 addresses the broader security and operational aspects of a service organization.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">Why SOC 2 Matters</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-2">For Your Business</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Demonstrates commitment to security</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Competitive advantage in sales</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Risk management framework</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-2">For Your Customers</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Assurance of data protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Third-party validation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Regulatory compliance support</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Trust Service Criteria */}
          <section id="trust-service-criteria" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Target className="w-8 h-8 text-emerald-600 mr-3" />
              Trust Service Criteria - Choose What Fits Your Business
            </h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Start Strategic, Not Overwhelming</h3>
                  <p className="text-slate-700">
                    You dondon'tapos;t need all five criteria! Most companies start with just <strong>Security + Availability</strong> 
                    for their core customer platform, then expand based on business needs and customer requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 mb-6">
              SOC 2 evaluates organizations based on five Trust Service Criteria. Security is required for all audits, 
              while the other four criteria are optional based on your business needs and customer requirements.
            </p>

            <div className="space-y-6">
              {/* Security */}
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Security <span className="text-red-600 text-sm font-medium">(Required for All)</span>
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Protection against unauthorized access, both physical and logical. This includes access controls, 
                      network security, and data protection measures.
                    </p>
                    <div className="text-sm text-slate-600 mb-3">
                      <strong>Key Areas:</strong> Access management, network security, data classification, incident response
                    </div>
                    <div className="text-sm text-emerald-700 bg-emerald-50 p-2 rounded">
                      <strong>Who needs this:</strong> Every organization - this is the foundation of SOC 2
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Availability <span className="text-blue-600 text-sm font-medium">(Most Common Add-on)</span>
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Systems and services are available for operation and use as committed or agreed upon. 
                      This includes monitoring, capacity planning, and disaster recovery.
                    </p>
                    <div className="text-sm text-slate-600 mb-3">
                      <strong>Key Areas:</strong> System monitoring, backup procedures, disaster recovery, capacity planning
                    </div>
                    <div className="text-sm text-blue-700 bg-blue-50 p-2 rounded">
                      <strong>Who needs this:</strong> SaaS companies, cloud providers, mission-critical applications
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Integrity */}
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Processing Integrity <span className="text-slate-500 text-sm font-medium">(Specialized Use)</span>
                    </h3>
                    <p className="text-slate-700 mb-3">
                      System processing is complete, valid, accurate, timely, and authorized. 
                      Ensures data integrity throughout processing workflows.
                    </p>
                    <div className="text-sm text-slate-600 mb-3">
                      <strong>Key Areas:</strong> Data validation, error handling, processing controls, audit trails
                    </div>
                    <div className="text-sm text-emerald-700 bg-emerald-50 p-2 rounded">
                      <strong>Who needs this:</strong> Payment processors, financial services, data transformation platforms
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Lock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Confidentiality <span className="text-slate-500 text-sm font-medium">(Industry Specific)</span>
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Information designated as confidential is protected as committed or agreed upon. 
                      Covers data classification and protection throughout its lifecycle.
                    </p>
                    <div className="text-sm text-slate-600 mb-3">
                      <strong>Key Areas:</strong> Data classification, encryption, access controls, data handling procedures
                    </div>
                    <div className="text-sm text-purple-700 bg-purple-50 p-2 rounded">
                      <strong>Who needs this:</strong> Companies handling trade secrets, proprietary algorithms, confidential business data
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Privacy <span className="text-slate-500 text-sm font-medium">(Data-Heavy Businesses)</span>
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Personal information is collected, used, retained, disclosed, and disposed of in accordance 
                      with privacy policies and applicable regulations.
                    </p>
                    <div className="text-sm text-slate-600 mb-3">
                      <strong>Key Areas:</strong> Privacy policies, consent management, data minimization, privacy by design
                    </div>
                    <div className="text-sm text-amber-700 bg-amber-50 p-2 rounded">
                      <strong>Who needs this:</strong> Companies processing personal data, especially under GDPR/CCPA compliance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Combinations */}
            <div className="mt-8 bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Common Criteria Combinations by Industry</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Most SaaS Companies Start With:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Security (required)</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Availability (for uptime commitments)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Enterprise/Healthcare Often Add:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Confidentiality (for sensitive data)</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-slate-700">Privacy (for personal information)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with SOC 2</h2>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Start Small and Strategic</h3>
                  <p className="text-slate-700 mb-3">
                    The biggest mistake companies make is trying to do everything at once. Instead, start with a narrow, 
                    focused scope and expand over time as your business grows and customer requirements evolve.
                  </p>
                  <div className="text-sm text-emerald-800 bg-emerald-100 p-3 rounded">
                    <strong>Recommended first-time approach:</strong> Security + Availability for your core customer-facing application only. 
                    This covers 80% of what most customers need to see.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Before You Begin</h3>
                  <p className="text-slate-700">
                    SOC 2 compliance requires significant preparation and ongoing commitment. Most organizations need 3-12 months 
                    to implement proper controls before theythey'reapos;re ready for an audit, but this varies greatly based on your starting point and scope.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">Prerequisites for SOC 2</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900">Executive Leadership Buy-in</h4>
                  <p className="text-slate-600">Leadership must commit to the time, resources, and cultural changes required.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900">Dedicated Resources</h4>
                  <p className="text-slate-600">Assign team members to own and manage the compliance program.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900">Documented Processes</h4>
                  <p className="text-slate-600">Existing business processes should be documented and followed consistently.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900">Technology Infrastructure</h4>
                  <p className="text-slate-600">Stable systems with proper monitoring and backup procedures in place.</p>
                </div>
              </div>
            </div>

            {/* Scope Definition */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Defining Your SOC 2 Scope (Critical First Step)</h3>
              <p className="text-slate-700 mb-4">
                Your "scope" defines exactly what systems, processes, and data are included in your SOC 2 audit. 
                A well-defined scope is crucial for controlling costs and timeline.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-emerald-900 mb-2">✅ Good Starting Scope</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Core customer-facing application</li>
                    <li>• Production database</li>
                    <li>• Customer support systems</li>
                    <li>• Essential infrastructure (AWS/cloud)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-red-900 mb-2">❌ Scope to Avoid Initially</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Internal HR systems</li>
                    <li>• Development/staging environments</li>
                    <li>• Marketing tools and analytics</li>
                    <li>• Non-customer-facing applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Steps */}
          <section id="implementation-steps" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Implementation Steps</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Step 1: Scope Definition & Gap Analysis</h3>
                  <p className="text-slate-700">
                    Define what systems and processes will be included in your SOC 2 scope, then assess current state versus requirements.
                  </p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Identify all systems that store, process, or transmit customer data</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Document current security controls and policies</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Identify gaps between current state and SOC 2 requirements</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Step 2: Policy Development</h3>
                  <p className="text-slate-700">
                    Create comprehensive policies and procedures that address SOC 2 requirements for your chosen criteria.
                  </p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Information Security Policy (master policy)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Access Control and User Management policies</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Incident Response and Risk Management policies</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Data management and privacy policies (if applicable)</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="bg-amber-50 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Step 3: Control Implementation</h3>
                  <p className="text-slate-700">
                    Implement technical and administrative controls required by your policies and SOC 2 criteria.
                  </p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Deploy security tools (monitoring, backup, antivirus, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Implement access control systems and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Establish monitoring and logging capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Configure backup and disaster recovery systems</span>
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Step 4: Evidence Collection & Testing</h3>
                  <p className="text-slate-700">
                    Operate controls for the required period and collect evidence to demonstrate their effectiveness.
                  </p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Run controls for minimum required period (3-12 months)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Document control operation and collect evidence</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Conduct internal testing and remediate any issues</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Prepare for external audit</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline & Costs */}
          <section id="timeline-costs" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Timeline & Costs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Typical Timeline</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Gap Analysis & Planning</span>
                    <span className="font-medium text-slate-900">1-2 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Policy Development</span>
                    <span className="font-medium text-slate-900">1-3 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Control Implementation</span>
                    <span className="font-medium text-slate-900">2-6 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Evidence Collection</span>
                    <span className="font-medium text-slate-900">3-12 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-700 font-medium">Total Timeline</span>
                    <span className="font-bold text-slate-900">6-18 months</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cost Considerations</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">External Auditor</span>
                    <span className="font-medium text-slate-900">$15K - $50K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Consultant (optional)</span>
                    <span className="font-medium text-slate-900">$20K - $100K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Security Tools & Software</span>
                    <span className="font-medium text-slate-900">$5K - $50K/year</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Internal Resources</span>
                    <span className="font-medium text-slate-900">0.5 - 2 FTE</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-700 font-medium">Annual Maintenance</span>
                    <span className="font-bold text-slate-900">$30K - $150K</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section id="common-challenges" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Challenges & Solutions</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 text-red-900">Challenge: Scope Creep</h3>
                <p className="text-slate-700 mb-3">
                  Organizations often start with too broad a scope, making the audit more complex and expensive than necessary.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Solution:</h4>
                  <p className="text-slate-700">Start with a minimal viable scope focusing on core customer-facing systems. Expand in future audits as needed.</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 text-amber-900">Challenge: Documentation Overhead</h3>
                <p className="text-slate-700 mb-3">
                  The amount of documentation required can be overwhelming, especially for smaller organizations.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Solution:</h4>
                  <p className="text-slate-700">Use templates and automation where possible. Focus on policies that reflect actual practices rather than aspirational goals.</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 text-blue-900">Challenge: Employee Adoption</h3>
                <p className="text-slate-700 mb-3">
                  Getting all employees to follow new security procedures consistently can be difficult.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Solution:</h4>
                  <p className="text-slate-700">Provide regular training, make procedures easy to follow, and establish clear consequences for non-compliance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Choosing an Auditor */}
          <section id="choosing-auditor" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Choosing the Right Auditor</h2>
            
            <p className="text-lg text-slate-700 mb-6">
              Selecting the right auditing firm is crucial for a successful SOC 2 experience. Consider these factors:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Industry Experience:</strong>
                      <p className="text-slate-600">Look for auditors with experience in your industry and company size.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Technical Expertise:</strong>
                      <p className="text-slate-600">Ensure they understand your technology stack and infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Communication Style:</strong>
                      <p className="text-slate-600">Choose auditors who explain findings clearly and provide actionable recommendations.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Questions to Ask</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Timeline:</strong>
                      <p className="text-slate-600">How long will the audit take from start to finish?</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Support:</strong>
                      <p className="text-slate-600">What level of support do you provide during preparation?</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">References:</strong>
                      <p className="text-slate-600">Can you provide references from similar companies?</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Next Steps</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ready to Begin Your SOC 2 Journey?</h3>
              <p className="text-slate-700 mb-6">
                Start with the right foundation. Our templates and guidance can help you avoid common pitfalls and 
                accelerate your compliance timeline.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">Start with Policies</h4>
                  <p className="text-sm text-slate-600 mb-4">Get professional policy templates that address SOC 2 requirements.</p>
                  <a href="/products/policies" className="text-blue-600 hover:text-blue-700 font-medium">
                    View Policies →
                  </a>
                </div>

                <div className="bg-white rounded-lg p-4 text-center">
                  <Download className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">Understand Evidence</h4>
                  <p className="text-sm text-slate-600 mb-4">Learn what auditors look for with our evidence explanations.</p>
                  <a href="/products/evidence" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    View Evidence →
                  </a>
                </div>

                <div className="bg-white rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">Get Everything</h4>
                  <p className="text-sm text-slate-600 mb-4">Complete bundle with all templates and guidance you need.</p>
                  <a href="/products/complete-bundle" className="text-amber-600 hover:text-amber-700 font-medium">
                    View Bundle →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need SOC 2 Type I or Type II?</h3>
                <p className="text-slate-700">
                  Most organizations should pursue SOC 2 Type II, which tests the effectiveness of controls over time (usually 3-12 months). 
                  Type I only evaluates the design of controls at a point in time and is less valuable to customers and stakeholders.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How often do I need to get audited?</h3>
                <p className="text-slate-700">
                  SOC 2 reports are typically valid for one year. Most organizations get audited annually to maintain their compliance status. 
                  Some may choose to get audited more frequently if required by major customers.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I handle SOC 2 without external help?</h3>
                <p className="text-slate-700">
                  Yes, many organizations successfully achieve SOC 2 compliance using internal resources and templates. 
                  However, the complexity depends on your organization size, technical infrastructure, and existing security maturity. 
                  External consultants can accelerate the process but aren't strictly required.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What happens if I fail the audit?</h3>
                <p className="text-slate-700">
                  If your organization doesndoesn'tapos;t meet SOC 2 requirements, the auditor will issue a qualified or adverse opinion, 
                  detailing the deficiencies. You can remediate the issues and undergo another audit. 
                  Many organizations use readiness assessments to identify and fix issues before the formal audit.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I maintain SOC 2 compliance after the audit?</h3>
                <p className="text-slate-700">
                  SOC 2 compliance requires ongoing effort. You must continue operating your controls effectively, 
                  collect evidence, monitor for changes, and address any issues that arise. 
                  Annual audits help ensure your controls remain effective over time.
                </p>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section id="additional-resources" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Additional Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Official Resources</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <a href="https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/trustdataintegrity" 
                       className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                      AICPA Trust Services Criteria
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <a href="https://www.ssae-16.com/soc-2/" 
                       className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                      SOC 2 Overview (SSAE-16.com)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">SecurityDocs Resources</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <a href="/products/policies" className="text-emerald-600 hover:text-emerald-700">
                      SOC 2 Policy Templates
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <a href="/products/evidence" className="text-emerald-600 hover:text-emerald-700">
                      Evidence Explanations
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <a href="/products/complete-bundle" className="text-emerald-600 hover:text-emerald-700">
                      Complete Compliance Bundle
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <div className="bg-slate-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your SOC 2 Journey?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Don't start from scratch. Our templates and guidance help you avoid common pitfalls 
            and accelerate your path to SOC 2 compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Browse Templates
              <FileText className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/contact" 
              className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 transition-colors inline-flex items-center justify-center"
            >
              Get Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SOC2PrimerPage;