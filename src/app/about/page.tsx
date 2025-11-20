import { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { Shield, Users, Heart, Lightbulb, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | SecurityDocs',
  description: 'Learn about SecurityDocs - SOC 2 compliance templates and resources built from real-world implementation experience.',
}

export default function AboutPage() {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            About SecurityDocs
          </h1>
          <p className="text-xl text-slate-600">
            SOC 2 compliance guidance built from real-world experience, not theory.
          </p>
        </div>

        {/* Our Story */}
        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            SecurityDocs was born from the frustration of navigating SOC 2 compliance at a bootstrapped SaaS company. Like many startups, we faced the reality of needing enterprise-grade security without enterprise budgets.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            We built comprehensive security programs using tools like Vanta, implemented controls, and provided security attestations to customers. We learned what actually matters in practice - not just what looks good on paper. We experienced firsthand the gap between "compliance theory" and "implementation reality."
          </p>
          <p className="text-slate-700 leading-relaxed">
            SecurityDocs reflects that real-world experience. These aren't generic templates copied from frameworks - they're the actual policies, documents, and guidance we wish we'd had when starting our compliance journey.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What Makes Us Different</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-lg p-3 mr-4 flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Real Implementation Experience</h3>
                <p className="text-slate-600">
                  Our templates come from actually building and operating security programs, not just reading the frameworks. We know what works in practice because we've done it.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-lg p-3 mr-4 flex-shrink-0">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Honest About the Challenges</h3>
                <p className="text-slate-600">
                  We don't pretend compliance is easy or cheap. We're upfront about the bootstrap realities many startups face - because we've been there. Our goal is to make it more manageable, not to oversell quick fixes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 rounded-lg p-3 mr-4 flex-shrink-0">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Built for Bootstrappers</h3>
                <p className="text-slate-600">
                  We understand the "do more with less" mentality. Our templates help you implement professional-grade compliance without paying consultant rates for every document.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 rounded-lg p-3 mr-4 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Practical Over Perfect</h3>
                <p className="text-slate-600">
                  We focus on what actually moves the needle in compliance. Not every company needs a 50-page policy when a 10-page version addresses the same controls effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Approach to Compliance</h2>
          <div className="space-y-4 text-slate-700">
            <p className="leading-relaxed">
              <strong>We're not compliance auditors or lawyers.</strong> We're operators who've built security programs and navigated the compliance journey. That perspective shapes everything we create.
            </p>
            <p className="leading-relaxed">
              Our templates reflect what we learned works in practice: policies that teams actually follow, documentation that auditors actually accept, and guidance that answers the questions we had when starting out.
            </p>
            <p className="leading-relaxed">
              We believe compliance doesn't have to be overwhelming. With the right templates, clear guidance, and honest expectations, companies can achieve SOC 2 certification without breaking the bank or losing months to consultant dependencies.
            </p>
          </div>
        </div>

        {/* Who Uses Our Templates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Uses Our Templates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Early-Stage Startups</h3>
              <p className="text-slate-600 text-sm">
                Companies moving upmarket to enterprise customers who are encountering SOC 2 requirements for the first time.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Bootstrapped SaaS</h3>
              <p className="text-slate-600 text-sm">
                Self-funded companies that need professional compliance documentation without enterprise consulting budgets.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Technical Founders</h3>
              <p className="text-slate-600 text-sm">
                CTOs and technical co-founders who understand security but need help with compliance documentation and audit preparation.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Security Teams</h3>
              <p className="text-slate-600 text-sm">
                Small security teams at growing companies who need to implement SOC 2 alongside their other responsibilities.
              </p>
            </div>
          </div>
        </div>

        {/* What We're Not */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
          <h3 className="font-semibold text-slate-900 mb-3">What We're Not</h3>
          <p className="text-slate-700 mb-3">
            <strong>We're not auditors.</strong> We can't audit your company or issue SOC 2 reports. You'll still need to hire a qualified audit firm when you're ready for certification.
          </p>
          <p className="text-slate-700 mb-3">
            <strong>We're not consultants.</strong> We provide templates and guidance, not hands-on implementation services. Our templates save you from paying consultant rates for documentation.
          </p>
          <p className="text-slate-700">
            <strong>We're not lawyers.</strong> Our templates aren't legal advice. Review everything with your legal team to ensure it fits your specific situation.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h2>
          <div className="space-y-4 text-slate-700">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>Honest positioning:</strong> We share what we know from experience, not what sounds impressive.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>Practical guidance:</strong> Our templates and advice focus on what actually works in real companies.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>Continuous improvement:</strong> We update our templates based on feedback and evolving best practices.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>Responsive support:</strong> We're here to answer questions about implementing our templates.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your SOC 2 Journey?</h2>
          <p className="text-lg text-blue-50 mb-6">
            Explore our templates and resources built from real-world experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Templates
            </Link>
            <Link
              href="/blog"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Our Guides
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-2">Have questions?</p>
          <Link
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}