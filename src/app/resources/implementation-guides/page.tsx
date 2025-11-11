import React from 'react';
import { Check, CheckCircle, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, Lightbulb, Cloud, Server, Database, Zap, Globe, Settings, Heart, DollarSign, Building, Rocket } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const ImplementationGuidesHubPage = () => {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Implementation Guides', href: '/resources/implementation-guides' }
  ];

  interface GuideCard {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    difficulty: 'Easy' | 'Medium' | 'Advanced';
    timeline: string;
    criteria: string;
    audience: string;
    highlights: string[];
    isPopular?: boolean;
    isNew?: boolean;
  }

  const guides: GuideCard[] = [
    {
      title: "SaaS/Cloud Services",
      description: "Complete guide for SaaS companies and cloud service providers. Focus on Security + Availability with cloud-native approaches.",
      icon: Cloud,
      href: "/resources/implementation-guides/saas-cloud-services",
      difficulty: "Medium",
      timeline: "6-9 months",
      criteria: "Security + Availability",
      audience: "SaaS companies, cloud platforms, tech startups",
      highlights: [
        "Multi-tenant security patterns",
        "Cloud provider integration (AWS/Azure/GCP)",
        "API security and rate limiting",
        "Uptime SLA monitoring"
      ],
      isPopular: true
    },
    {
      title: "Healthcare Technology",
      description: "Specialized guidance for HealthTech companies navigating both SOC 2 and HIPAA compliance requirements.",
      icon: Heart,
      href: "/resources/implementation-guides/healthcare",
      difficulty: "Advanced",
      timeline: "9-12 months",
      criteria: "Security + Privacy + Confidentiality",
      audience: "HealthTech, telemedicine, healthcare SaaS",
      highlights: [
        "SOC 2 + HIPAA dual compliance",
        "PHI handling procedures",
        "Enhanced access controls",
        "Business Associate Agreement requirements"
      ]
    },
    {
      title: "Financial Services",
      description: "Enhanced security approach for FinTech and financial services with regulatory compliance considerations.",
      icon: DollarSign,
      href: "/resources/implementation-guides/financial",
      difficulty: "Advanced",
      timeline: "12-18 months",
      criteria: "All Five Criteria",
      audience: "FinTech, payment processors, financial SaaS",
      highlights: [
        "SOC 2 + PCI DSS intersection",
        "Processing Integrity focus",
        "Enhanced security controls",
        "Regulatory reporting requirements"
      ]
    },
    {
      title: "E-commerce Platforms",
      description: "Specialized guide for e-commerce platforms and payment processing with customer data protection focus.",
      icon: Globe,
      href: "/resources/implementation-guides/ecommerce",
      difficulty: "Medium",
      timeline: "6-12 months",
      criteria: "Security + Processing Integrity + Availability",
      audience: "E-commerce platforms, payment processing, retail tech",
      highlights: [
        "Customer payment data flows",
        "PCI DSS considerations",
        "Multi-merchant environments",
        "Seasonal traffic handling"
      ]
    },
    {
      title: "Early-Stage Startups",
      description: "Minimal viable compliance approach for seed to Series A companies with limited resources.",
      icon: Rocket,
      href: "/resources/implementation-guides/early-stage",
      difficulty: "Easy",
      timeline: "3-6 months",
      criteria: "Security + Availability (minimal)",
      audience: "Seed to Series A companies",
      highlights: [
        "Cost-effective tool recommendations",
        "Resource allocation for small teams",
        "Preparing for enterprise sales",
        "Gradual compliance building"
      ],
      isNew: true
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-emerald-600 bg-emerald-50';
      case 'Medium': return 'text-amber-600 bg-amber-50';
      case 'Advanced': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Industry-Specific Guidance
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 Implementation Guides
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Industry-specific SOC 2 implementation guides tailored to your business model, technology stack, 
            and compliance requirements. Choose the path that fits your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#guides" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Browse Guides
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/resources/soc2-primer" 
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center"
            >
              Start with Primer
              <BookOpen className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Selector */}
        <div className="bg-slate-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Find Your Guide</h2>
          <p className="text-slate-600 mb-6">
            Not sure which guide is right for you? Answer these quick questions to find the best starting point.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">What's your industry?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">SaaS/Cloud Software</span>
                  <span className="text-blue-600 font-medium">→ SaaS Guide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Healthcare Technology</span>
                  <span className="text-blue-600 font-medium">→ Healthcare Guide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Financial/Payment Services</span>
                  <span className="text-blue-600 font-medium">→ Financial Guide</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">What's your stage?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Seed to Series A</span>
                  <span className="text-emerald-600 font-medium">→ Early-Stage Guide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Series B+ / Established</span>
                  <span className="text-blue-600 font-medium">→ Industry-Specific Guide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Enterprise</span>
                  <span className="text-red-600 font-medium">→ Advanced Guides</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">What's your goal?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">First SOC 2 audit</span>
                  <span className="text-blue-600 font-medium">→ SaaS or Early-Stage</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Enterprise sales readiness</span>
                  <span className="text-amber-600 font-medium">→ Industry-Specific</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Regulatory compliance</span>
                  <span className="text-red-600 font-medium">→ Healthcare/Financial</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Universal Principles */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Universal SOC 2 Principles</h3>
              <p className="text-slate-700 mb-4">
                While each industry has unique requirements, these principles apply to all successful SOC 2 implementations:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-emerald-900 mb-2">Start Strategic, Not Perfect</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Begin with narrow scope (core customer systems only)</li>
                    <li>• Choose Security + one additional criteria initially</li>
                    <li>• Expand scope and criteria in future audits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-emerald-900 mb-2">Build for Long-Term Success</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Implement controls you can realistically maintain</li>
                    <li>• Document actual practices, not aspirational goals</li>
                    <li>• Plan for evidence collection from day one</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Guides Grid */}
        <div id="guides" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Implementation Path</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Each guide provides specific technical implementations, evidence requirements, 
              and best practices tailored to your industry and business model.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative">
                {guide.isPopular && (
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                {guide.isNew && (
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <guide.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{guide.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{guide.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-slate-500">Difficulty:</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Timeline:</span>
                      <span className="ml-2 text-slate-900 font-medium">{guide.timeline}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Criteria:</span>
                      <span className="ml-2 text-slate-900 font-medium">{guide.criteria}</span>
                    </div>
                    <div></div>
                  </div>

                  <div className="mb-4">
                    <span className="text-slate-500 text-sm">Target Audience:</span>
                    <p className="text-slate-700 text-sm mt-1">{guide.audience}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-slate-900 mb-2 text-sm">Key Focus Areas:</h4>
                    <ul className="space-y-1">
                      {guide.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={guide.href}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    Start This Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Guide Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 text-slate-900 font-semibold">Guide</th>
                  <th className="text-center py-3 text-slate-900 font-semibold">Difficulty</th>
                  <th className="text-center py-3 text-slate-900 font-semibold">Timeline</th>
                  <th className="text-center py-3 text-slate-900 font-semibold">Criteria</th>
                  <th className="text-center py-3 text-slate-900 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {guides.map((guide, index) => (
                  <tr key={index} className="hover:bg-white/50">
                    <td className="py-4">
                      <div className="flex items-center">
                        <guide.icon className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-medium text-slate-900">{guide.title}</span>
                        {guide.isPopular && <Star className="w-4 h-4 text-amber-500 ml-2" />}
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                    </td>
                    <td className="py-4 text-center text-slate-700">{guide.timeline}</td>
                    <td className="py-4 text-center text-slate-700 text-sm">{guide.criteria}</td>
                    <td className="py-4 text-center text-slate-700 text-sm">{guide.audience.split(',')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Common Tools & Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Tools & Resources for All Guides</h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Regardless of which guide you follow, these resources will accelerate your implementation 
            and ensure you dondon'tapos;t miss critical requirements.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <FileText className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Policy Templates</h3>
              <p className="text-slate-600 text-sm mb-4">
                Pre-written policies covering all SOC 2 requirements, customizable for your industry.
              </p>
              <a href="/products/policies" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Browse Policies →
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Compliance Checklist</h3>
              <p className="text-slate-600 text-sm mb-4">
                Interactive checklist to track your progress through SOC 2 implementation.
              </p>
              <a href="/resources/soc2-checklist" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                Use Checklist →
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <Download className="w-10 h-10 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Evidence Guidance</h3>
              <p className="text-slate-600 text-sm mb-4">
                Detailed explanations of what auditors expect to see for each control.
              </p>
              <a href="/products/evidence" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                View Evidence →
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">SOC 2 Primer</h3>
              <p className="text-slate-600 text-sm mb-4">
                Complete introduction to SOC 2 concepts, criteria, and implementation basics.
              </p>
              <a href="/resources/soc2-primer" className="text-slate-600 hover:text-slate-700 font-medium text-sm">
                Read Primer →
              </a>
            </div>
          </div>
        </div>

        {/* Get Started CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your SOC 2 Journey?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Choose your implementation guide and get access to all the templates, checklists, 
            and guidance you need to achieve SOC 2 compliance efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products/complete-bundle" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Get Complete Bundle
              <Shield className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/resources/implementation-guides/saas-cloud-services" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Start with SaaS Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Do I need to follow just one guide?</h3>
                <p className="text-slate-700 text-sm">
                  Start with the guide that best matches your primary business model. You can reference 
                  other guides for specific requirements (e.g., a SaaS company handling healthcare data 
                  might use both SaaS and Healthcare guides).
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Can I switch guides mid-implementation?</h3>
                <p className="text-slate-700 text-sm">
                  Yes, but itit'sapos;s better to choose the right guide upfront. If your business model changes 
                  significantly, you may need to adjust your approach, but the foundational work 
                  (policies, basic controls) will largely carry over.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">How do I know if I'm ready for an audit?</h3>
                <p className="text-slate-700 text-sm">
                  Each guide includes readiness indicators and self-assessment tools. Generally, 
                  you need 3-12 months of evidence showing your controls operated effectively. 
                  Consider a pre-audit assessment before engaging your auditor.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">What if my industry isnisn'tapos;t covered?</h3>
                <p className="text-slate-700 text-sm">
                  Start with the SaaS guide as a foundation - it covers the most common SOC 2 patterns. 
                  Then adapt based on your specific regulatory requirements. Contact us if you need 
                  guidance for a specific industry not covered here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ImplementationGuidesHubPage;