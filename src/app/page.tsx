import React from 'react';
import { Check, Shield, FileText, ArrowRight, Star } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { BundleUpsell } from '@/components/ecommerce/BundleUpsell';

const HomePage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust badge */}
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by companies seeking SOC 2 compliance
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              SOC 2 Compliance
              <span className="block text-blue-600">Made Simple</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Professional document templates and clear guidance to help you navigate SOC 2 compliance. 
              <span className="block mt-2 font-medium text-slate-700">
                Start with proven templates, not blank pages.
              </span>
            </p>

            {/* Value props */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10 text-slate-600">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-blue-600 mr-2" />
                <span>Ready-to-use templates</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-emerald-600 mr-2" />
                <span>Clear implementation guidance</span>
              </div>
              <div className="flex items-center">
                <Download className="w-5 h-5 text-amber-600 mr-2" />
                <span>Instant download</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/products" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                Browse Templates
                <FileText className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/resources/soc2-primer" 
                className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg border border-slate-300 transition-colors inline-flex items-center"
              >
                Read SOC 2 Primer
                <BookOpen className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">No subscription required • Instant access • 3-download limit per purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Everything You Need to Get Started
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
            Our templates and guidance help you understand what's required and provide a solid starting point for your SOC 2 compliance journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Policy Templates</h3>
              <p className="text-slate-600 mb-4">Professional policy templates that you can customize for your organization's needs.</p>
              <a href="/products/policies" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                View Policies <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Implementation Guidance</h3>
              <p className="text-slate-600 mb-4">Clear explanations of what each requirement means and how to address it.</p>
              <a href="/resources/soc2-primer" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Start Learning <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Download className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Evidence Examples</h3>
              <p className="text-slate-600 mb-4">Understand what auditors are looking for with real evidence explanations.</p>
              <a href="/products/evidence" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center">
                View Evidence <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Showcase */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Popular Bundle Options
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Save time and money with our comprehensive bundles that include everything you need for SOC 2 compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Complete Bundle */}
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Complete Bundle</h3>
                <div className="text-3xl font-bold text-slate-900 mb-1">$549.95</div>
                <div className="text-sm text-slate-500 line-through mb-4">$1,150.00</div>
                <p className="text-slate-600 mb-6">Everything you need for SOC 2 compliance</p>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    All 15 policy templates
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    All 22 document templates
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    All 40 evidence explanations
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    SOC 2 control mapping
                  </li>
                </ul>
                <a 
                  href="/products/complete-bundle"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Get Complete Bundle
                </a>
              </div>
            </div>

            {/* Policy Bundle */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Policy Bundle</h3>
                <div className="text-3xl font-bold text-slate-900 mb-1">$129.95</div>
                <div className="text-sm text-slate-500 line-through mb-4">$225.00</div>
                <p className="text-slate-600 mb-6">Essential policies for SOC 2 compliance</p>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    15 policy templates
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    Implementation guides
                  </li>
                </ul>
                <a 
                  href="/products/policy-bundle"
                  className="block bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Get Policy Bundle
                </a>
              </div>
            </div>

            {/* Evidence Bundle */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Evidence Bundle</h3>
                <div className="text-3xl font-bold text-slate-900 mb-1">$349.95</div>
                <div className="text-sm text-slate-500 line-through mb-4">$600.00</div>
                <p className="text-slate-600 mb-6">Complete audit preparation guidance</p>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    40 evidence explanations
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-600 mr-2" />
                    Audit preparation checklist
                  </li>
                </ul>
                <a 
                  href="/products/evidence-bundle"
                  className="block bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Get Evidence Bundle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Trusted by Companies Worldwide
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "SecurityDocs templates saved us months of work. The policies were comprehensive and easy to customize."
              </p>
              <div className="font-medium text-slate-900">Tech Startup</div>
              <div className="text-sm text-slate-500">Series A Company</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "The evidence explanations were invaluable during our audit. Clear and actionable guidance."
              </p>
              <div className="font-medium text-slate-900">SaaS Company</div>
              <div className="text-sm text-slate-500">50+ Employees</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "Professional templates that gave us confidence during our SOC 2 journey."
              </p>
              <div className="font-medium text-slate-900">Consulting Firm</div>
              <div className="text-sm text-slate-500">Enterprise Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your SOC 2 Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the templates and guidance you need to navigate SOC 2 compliance with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Browse All Templates
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/resources/soc2-primer" 
              className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 transition-colors inline-flex items-center justify-center"
            >
              Learn About SOC 2
              <BookOpen className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;