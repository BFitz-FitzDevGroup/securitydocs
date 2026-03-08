'use client';

import React from 'react';
import { Check, X, AlertCircle, ArrowRight, FileText, HelpCircle, DollarSign, Building2, Users, Shield, Scale, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export function CompliancePlatformClient() {
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Compliance Platform Comparison', href: '/resources/do-you-need-a-compliance-platform' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scale className="w-4 h-4 mr-2" />
            Honest Comparison
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Do You Actually Need a SOC 2 Compliance Platform?
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Vanta, Drata, Secureframe, and similar platforms are powerful tools &mdash; but they&apos;re not the right fit
            for every company. Here&apos;s an honest breakdown to help you decide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#decision-framework"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Skip to Decision Framework
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#what-platforms-do"
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-300 transition-colors inline-flex items-center"
            >
              Read Full Comparison
              <FileText className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">A Note on Transparency</h3>
              <p className="text-slate-700">
                We want to be upfront: SecurityDocs sells SOC 2 compliance templates, not a compliance management platform.
                Before you decide what you need, we think you deserve an honest breakdown of both options &mdash; including
                the situations where a platform genuinely makes more sense than what we sell.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#what-platforms-do" className="block text-blue-600 hover:text-blue-700 transition-colors">
                1. What Compliance Platforms Do
              </a>
              <a href="#platform-costs" className="block text-blue-600 hover:text-blue-700 transition-colors">
                2. What They Cost
              </a>
              <a href="#when-worth-it" className="block text-blue-600 hover:text-blue-700 transition-colors">
                3. When a Platform IS Worth It
              </a>
              <a href="#when-not-worth-it" className="block text-blue-600 hover:text-blue-700 transition-colors">
                4. When a Platform Probably Isn&apos;t Worth It
              </a>
            </div>
            <div className="space-y-2">
              <a href="#middle-path" className="block text-blue-600 hover:text-blue-700 transition-colors">
                5. The Middle Path
              </a>
              <a href="#what-we-provide" className="block text-blue-600 hover:text-blue-700 transition-colors">
                6. What SecurityDocs Provides
              </a>
              <a href="#decision-framework" className="block text-blue-600 hover:text-blue-700 transition-colors">
                7. Decision Framework
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">

          {/* Section 1: What Platforms Do */}
          <section id="what-platforms-do" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              What SOC 2 Compliance Platforms Actually Do
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              Platforms like Vanta, Drata, and Secureframe are compliance automation tools. They connect to your existing
              infrastructure &mdash; AWS, GCP, Azure, GitHub, Okta, Slack, HR systems &mdash; and continuously monitor whether
              your technical controls are working as expected.
            </p>

            <p className="text-lg text-slate-700 mb-6">
              Instead of manually taking screenshots and compiling spreadsheets for your auditor, these platforms automatically
              pull evidence from your systems: access logs, encryption configurations, deployment records, vulnerability scan
              results. They present everything in an auditor-ready dashboard that makes the audit process significantly smoother.
            </p>

            <p className="text-lg text-slate-700 mb-6">
              The best platforms also handle vendor questionnaire management, employee onboarding tracking, policy version control,
              and ongoing compliance posture scoring &mdash; giving you a real-time view of where you stand against your chosen
              Trust Service Criteria.
            </p>

            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Core Platform Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Continuous control monitoring via integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automated evidence collection (API pulls, logs)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Auditor-ready dashboards and evidence rooms</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Vendor questionnaire management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Employee security training tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time compliance posture scoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Platform Costs */}
          <section id="platform-costs" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
              What Compliance Platforms Cost
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              Platform pricing is rarely published and varies by employee count, number of integrations, and which
              frameworks you&apos;re pursuing. These ranges are based on publicly available data and reported customer quotes.
              Always get a custom quote for your situation.
            </p>

            {/* Pricing Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-900 border border-slate-200">Platform</th>
                    <th className="text-left p-4 font-semibold text-slate-900 border border-slate-200">Estimated Annual Cost</th>
                    <th className="text-left p-4 font-semibold text-slate-900 border border-slate-200">3-Year Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-slate-200 font-medium text-slate-900">Vanta</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$15,000 &ndash; $40,000/yr</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$45,000 &ndash; $120,000</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border border-slate-200 font-medium text-slate-900">Drata</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$12,000 &ndash; $30,000/yr</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$36,000 &ndash; $90,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200 font-medium text-slate-900">Secureframe</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$10,000 &ndash; $25,000/yr</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$30,000 &ndash; $75,000</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border border-slate-200 font-medium text-slate-900">Tugboat Logic / OneTrust</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$15,000 &ndash; $35,000/yr</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$45,000 &ndash; $105,000</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="p-4 border border-slate-200 font-medium text-slate-900">SecurityDocs Templates</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$549.95 (one-time)</td>
                    <td className="p-4 border border-slate-200 text-slate-700">$549.95 (no renewal)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-600">
                <strong>Note:</strong> Platform pricing varies significantly based on employee count, number of frameworks,
                and add-on modules. Multi-year contracts often include discounts. These figures represent commonly reported ranges
                and should not substitute for getting a direct quote.
              </p>
            </div>
          </section>

          {/* Section 3: When Worth It */}
          <section id="when-worth-it" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Building2 className="w-8 h-8 text-blue-600 mr-3" />
              When a Compliance Platform IS Worth It
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              There are real scenarios where spending $15,000&ndash;$40,000 per year on a compliance platform is a smart
              investment. If several of these describe your situation, a platform is probably the right call.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">50+ employees with complex, multi-system infrastructure</h3>
                    <p className="text-slate-700 mt-1">
                      When you have dozens of SaaS tools, multiple cloud providers, and a growing team, manually tracking
                      access reviews and configuration changes becomes impractical. Automation earns its cost through time savings alone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Pursuing multiple frameworks simultaneously</h3>
                    <p className="text-slate-700 mt-1">
                      If you need SOC 2 + ISO 27001 + HIPAA, platforms excel at mapping controls across frameworks so you don&apos;t
                      duplicate effort. The cross-framework mapping alone can justify the investment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Enterprise customers requiring continuous monitoring evidence</h3>
                    <p className="text-slate-700 mt-1">
                      Some enterprise buyers want to see a live trust page or continuous compliance dashboard. If that&apos;s a
                      requirement in your sales process, a platform provides this out of the box.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">You have a dedicated compliance team or CISO</h3>
                    <p className="text-slate-700 mt-1">
                      Platforms are most effective when someone is actively managing compliance as their primary role.
                      They give that person leverage. Without a dedicated owner, platforms can become expensive shelfware.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Revenue stage where $15k&ndash;$40k/year is a reasonable ops cost</h3>
                    <p className="text-slate-700 mt-1">
                      If you&apos;re doing $5M+ ARR and compliance is directly enabling enterprise deals, the platform cost
                      is a rounding error on the revenue it unlocks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: When Not Worth It */}
          <section id="when-not-worth-it" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
              When a Platform Probably Isn&apos;t Worth It
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              Platforms solve real problems, but not every company has those problems yet. If most of these sound like you,
              starting with templates is the more practical choice.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="flex items-start">
                  <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">It&apos;s your first SOC 2 audit with 10&ndash;50 employees</h3>
                    <p className="text-slate-700 mt-1">
                      At this stage, the hardest part isn&apos;t monitoring &mdash; it&apos;s getting the policies, procedures, and
                      controls documented in the first place. Templates solve this directly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="flex items-start">
                  <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Bootstrap or Series A stage where $15k&ndash;$40k/year is significant</h3>
                    <p className="text-slate-700 mt-1">
                      That budget could fund actual security tooling (an MDR solution, a SIEM, penetration testing) that
                      both strengthens your security posture and generates audit evidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="flex items-start">
                  <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">You have a technical team capable of implementing controls directly</h3>
                    <p className="text-slate-700 mt-1">
                      If your engineers can configure SSO, enable audit logging, set up automated backups, and deploy
                      vulnerability scanning, you don&apos;t need a platform to tell you to do it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="flex items-start">
                  <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">You&apos;re pursuing Type I first</h3>
                    <p className="text-slate-700 mt-1">
                      A Type I audit is a point-in-time assessment, typically over a shorter period. The continuous monitoring
                      value of a platform is less impactful here compared to a Type II observation period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="flex items-start">
                  <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Your infrastructure is straightforward</h3>
                    <p className="text-slate-700 mt-1">
                      One cloud provider, one identity provider, a small team &mdash; there simply isn&apos;t enough complexity
                      to justify automation. You can manage evidence collection manually without drowning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: The Middle Path */}
          <section id="middle-path" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <ArrowRight className="w-8 h-8 text-blue-600 mr-3" />
              The Middle Path Most Companies Take
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              In practice, many companies don&apos;t start with a platform. They follow a pragmatic sequence that looks
              something like this:
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Start with templates to build documentation quickly</h3>
                  <p className="text-slate-700">
                    Get your policies, procedures, and evidence frameworks in place for a fraction of the cost. This is the
                    foundation &mdash; you need these documents regardless of whether you use a platform later.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Invest the savings in actual security tooling</h3>
                  <p className="text-slate-700">
                    The difference between $550 and $15,000+ can fund an MDR solution, a SIEM trial, penetration testing, or
                    security awareness training &mdash; all of which generate audit evidence while genuinely improving security.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Layer in a platform when complexity demands it</h3>
                  <p className="text-slate-700">
                    As your team grows, your infrastructure expands, and you take on additional frameworks, that&apos;s the natural
                    time to bring in automation. You&apos;ll also be a more informed buyer because you&apos;ll understand exactly
                    which features you actually need.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-700">
                  This isn&apos;t a knock on platforms &mdash; it&apos;s about sequencing the investment appropriately. The
                  documentation work isn&apos;t wasted. Every platform still requires you to have written policies and procedures.
                  Templates give you a head start regardless of which path you take next.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: What SecurityDocs Provides */}
          <section id="what-we-provide" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              What SecurityDocs Provides
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              We sell SOC 2 compliance templates &mdash; the documentation layer that every company needs regardless of
              whether they use a platform. Here&apos;s what&apos;s included in the Complete Bundle:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-5 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>155+ files covering policies, documents, and evidence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>All five Trust Service Criteria covered</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Built from real SOC 2 implementation experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>One-time purchase &mdash; no annual subscription</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-3">What You Don&apos;t Get</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-slate-400 mr-2 mt-1 flex-shrink-0" />
                    <span>No automated evidence collection</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-slate-400 mr-2 mt-1 flex-shrink-0" />
                    <span>No infrastructure integrations</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-slate-400 mr-2 mt-1 flex-shrink-0" />
                    <span>No continuous monitoring dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-slate-400 mr-2 mt-1 flex-shrink-0" />
                    <span>No vendor questionnaire management</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Decision Framework */}
          <section id="decision-framework" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              Decision Framework: Which Path Is Right for You?
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              Run through these questions honestly. There&apos;s no wrong answer &mdash; both paths lead to a successful audit.
            </p>

            <div className="space-y-4 mb-8">
              {/* Question 1 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">How many employees does your company have?</h3>
                </div>
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      &lt;50
                    </div>
                    <span className="text-slate-700">Templates are likely sufficient. Manual processes are still manageable at this scale.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      50+
                    </div>
                    <span className="text-slate-700">Seriously consider a platform. The automation ROI increases with headcount.</span>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">How many compliance frameworks are you pursuing?</h3>
                </div>
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      SOC 2 only
                    </div>
                    <span className="text-slate-700">Templates cover this well. You don&apos;t need cross-framework mapping.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      2+ frameworks
                    </div>
                    <span className="text-slate-700">A platform&apos;s control mapping across frameworks saves significant duplicate work.</span>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">What&apos;s your compliance budget?</h3>
                </div>
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      Constrained
                    </div>
                    <span className="text-slate-700">Start with templates, invest the rest in security tooling. Revisit platforms later.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      $15k+/yr available
                    </div>
                    <span className="text-slate-700">A platform is a reasonable operational expense at this budget level.</span>
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Which audit type are you targeting first?</h3>
                </div>
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      Type I
                    </div>
                    <span className="text-slate-700">Point-in-time assessment &mdash; less automation value. Templates are ideal here.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      Type II
                    </div>
                    <span className="text-slate-700">Ongoing observation period benefits from continuous monitoring a platform provides.</span>
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Do enterprise customers require a live compliance dashboard?</h3>
                </div>
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      No
                    </div>
                    <span className="text-slate-700">Most buyers accept a SOC 2 report. You don&apos;t need a trust page yet.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      Yes
                    </div>
                    <span className="text-slate-700">A platform&apos;s trust center feature is the most practical way to deliver this.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Reading Your Results</h3>
                  <p className="text-slate-700">
                    If most of your answers landed in the <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded">left column</span>,
                    templates are the practical starting point. If most landed in the <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded">right column</span>,
                    a compliance platform deserves serious consideration. A mix? The middle path from Section 5 is probably your best bet.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Closing CTA */}
        <div className="bg-slate-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Whichever Path You Choose, Get Started With Confidence</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            If a compliance platform is right for you, we&apos;d genuinely recommend getting quotes from Vanta and
            Drata &mdash; they&apos;re good products. If you&apos;re earlier in the journey or want to get your
            documentation sorted first, that&apos;s where we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products/complete-bundle"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              View Complete Bundle &mdash; $549.95
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/resources/soc2-checklist"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 transition-colors inline-flex items-center justify-center"
            >
              Free SOC 2 Checklist
              <FileText className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
