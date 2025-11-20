import React from 'react';
import { BookOpen, Download, ExternalLink, Check, Shield, AlertCircle, Users, Lock, FileText, Clock, Target, ArrowRight, Lightbulb, Cloud, CheckCircle, Globe, Zap, Play } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOC 2 Compliance Resources & Tools',
  description: 'Free SOC 2 compliance resources including implementation guides, cost calculators, checklists, glossary, and timeline estimators to help you achieve certification.',
  alternates: {
    canonical: '/resources'
  },
  keywords: ['SOC 2 resources', 'compliance tools', 'SOC 2 checklist', 'SOC 2 guide', 'compliance calculator'],
};

const ResourcesHubPage = () => {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' }
  ];

  interface ResourceCard {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    type: 'Guide' | 'Tool' | 'Reference';
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    readTime: string;
    isPopular?: boolean;
    isNew?: boolean;
  }

  const featuredResources: ResourceCard[] = [
    {
      title: "SOC 2 Primer",
      description: "Complete introduction to SOC 2 compliance, from basic concepts to implementation strategy.",
      icon: BookOpen,
      href: "/resources/soc2-primer",
      type: "Guide",
      difficulty: "Beginner",
      readTime: "15 min read",
      isPopular: true
    },
    {
      title: "Implementation Guides",
      description: "Industry-specific guides for SaaS, healthcare, financial services, and more.",
      icon: Target,
      href: "/resources/implementation-guides",
      type: "Guide",
      difficulty: "Intermediate",
      readTime: "20-30 min read",
      isPopular: true
    },
    {
      title: "SOC 2 Compliance Checklist",
      description: "Interactive checklist to track your progress through SOC 2 implementation.",
      icon: CheckCircle,
      href: "/resources/soc2-checklist",
      type: "Tool",
      difficulty: "Beginner",
      readTime: "Interactive",
      isNew: true
    }
  ];

  const additionalResources: ResourceCard[] = [
    {
      title: "Cost Calculator",
      description: "Estimate SOC 2 implementation costs based on your company size and scope.",
      icon: Clock,
      href: "/resources/cost-calculator",
      type: "Tool",
      difficulty: "Beginner",
      readTime: "5 min tool"
    },
    {
      title: "Timeline Estimator",
      description: "Get a realistic timeline for your SOC 2 implementation based on current maturity.",
      icon: Zap,
      href: "/resources/timeline-estimator",
      type: "Tool",
      difficulty: "Beginner",
      readTime: "5 min tool"
    },
    {
      title: "Vendor Assessment Guide",
      description: "How to evaluate and manage third-party vendors for SOC 2 compliance.",
      icon: Users,
      href: "/resources/vendor-assessment",
      type: "Guide",
      difficulty: "Intermediate",
      readTime: "10 min read"
    },
    {
      title: "Common Control Failures",
      description: "Learn from common SOC 2 audit failures and how to avoid them.",
      icon: AlertCircle,
      href: "/resources/common-control-failures",
      type: "Reference",
      difficulty: "Advanced",
      readTime: "12 min read"
    },
    {
      title: "Auditor Selection Guide",
      description: "How to choose the right SOC 2 auditor for your organization.",
      icon: Shield,
      href: "/resources/auditor-selection",
      type: "Guide",
      difficulty: "Intermediate",
      readTime: "8 min read"
    },
    {
      title: "SOC 2 Glossary",
      description: "Comprehensive glossary of SOC 2 terms, concepts, and compliance jargon.",
      icon: FileText,
      href: "/resources/soc2-glossary",
      type: "Reference",
      difficulty: "Beginner",
      readTime: "Reference"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-emerald-600 bg-emerald-50';
      case 'Intermediate': return 'text-amber-600 bg-amber-50';
      case 'Advanced': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Guide': return 'text-blue-600 bg-blue-50';
      case 'Tool': return 'text-emerald-600 bg-emerald-50';
      case 'Reference': return 'text-slate-600 bg-slate-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Free SOC 2 Resources
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SOC 2 Compliance Resources
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Everything you need to understand, implement, and maintain SOC 2 compliance. 
            From beginner guides to advanced implementation tools, all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resources/soc2-primer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start with SOC 2 Primer
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/resources/soc2-checklist" 
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center"
            >
              Use the Checklist
              <CheckCircle className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Path */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Recommended Learning Path</h3>
              <p className="text-slate-700 mb-4">
                New to SOC 2? Follow this path to build your knowledge systematically:
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                  <div>
                    <div className="font-medium text-slate-900">SOC 2 Primer</div>
                    <div className="text-sm text-slate-600">Learn the basics</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                  <div>
                    <div className="font-medium text-slate-900">Implementation Guide</div>
                    <div className="text-sm text-slate-600">Choose your industry</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                  <div>
                    <div className="font-medium text-slate-900">Compliance Checklist</div>
                    <div className="text-sm text-slate-600">Track progress</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                  <div>
                    <div className="font-medium text-slate-900">Get Templates</div>
                    <div className="text-sm text-slate-600">Accelerate implementation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Resources</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative group">
                {resource.isPopular && (
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                {resource.isNew && (
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors">
                      <resource.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{resource.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{resource.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    <span className="text-xs text-slate-500">{resource.readTime}</span>
                  </div>

                  <a 
                    href={resource.href}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm group-hover:bg-blue-700"
                  >
                    {resource.type === 'Tool' ? 'Use Tool' : 'Read Guide'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">All Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalResources.map((resource, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-slate-50 p-2 rounded-lg mr-3">
                    <resource.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{resource.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{resource.readTime}</span>
                      <a 
                        href={resource.href}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-slate-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Quick Start Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Learn the Basics</h3>
              <p className="text-slate-600 text-sm mb-4">
                Start with our SOC 2 Primer to understand the fundamentals of SOC 2 compliance.
              </p>
              <a href="/resources/soc2-primer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Read Primer →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Choose Your Path</h3>
              <p className="text-slate-600 text-sm mb-4">
                Select an industry-specific implementation guide that matches your business model.
              </p>
              <a href="/resources/implementation-guides" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                View Guides →
              </a>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Track Progress</h3>
              <p className="text-slate-600 text-sm mb-4">
                Use our interactive checklist to track your implementation progress.
              </p>
              <a href="/resources/soc2-checklist" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                Use Checklist →
              </a>
            </div>
          </div>
        </div>

        {/* Need Templates CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Accelerate Your Implementation?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our resources provide the knowledge, but our templates provide the implementation. 
            Get professionally written policies, procedures, and evidence guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Browse Templates
              <FileText className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/products/complete-bundle" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Get Complete Bundle
              <Download className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* External Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Official References</h2>
          <p className="text-slate-600 text-center mb-8">
            Links to official SOC 2 documentation and regulatory resources.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                <ExternalLink className="w-5 h-5 text-slate-600 mr-2" />
                AICPA Trust Services Criteria
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Official AICPA documentation on Trust Service Criteria and SOC 2 requirements.
              </p>
              <a 
                href="https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/trustdataintegrity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Visit AICPA →
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                <ExternalLink className="w-5 h-5 text-slate-600 mr-2" />
                SOC for Service Organizations
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Comprehensive guide to SOC engagements and reporting standards.
              </p>
              <a 
                href="https://www.ssae-16.com/soc-2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Need Additional Support?</h2>
          <p className="text-slate-600 mb-6">
            Can't find what youyou'reapos;re looking for? We're here to help with your SOC 2 compliance journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Contact Support
            </a>
            <a 
              href="/resources/faq" 
              className="bg-white hover:bg-slate-100 text-slate-700 px-6 py-2 rounded-lg font-medium border border-slate-300 transition-colors text-sm"
            >
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResourcesHubPage;