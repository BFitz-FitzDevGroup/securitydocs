import type { Metadata } from 'next';
import { FAQClient } from './FAQClient';

export const metadata: Metadata = {
  title: 'SOC 2 FAQ — Common Questions Answered',
  description: 'Answers to the most common SOC 2 compliance questions — from audit basics to using SecurityDocs templates.',
  alternates: {
    canonical: '/resources/faq',
  },
  keywords: ['SOC 2 FAQ', 'SOC 2 questions', 'SOC 2 compliance questions', 'SOC 2 audit FAQ', 'SOC 2 templates FAQ'],
};

const faqItems = [
  {
    question: 'What is SOC 2 compliance?',
    answer: 'SOC 2 (System and Organization Controls 2) is a voluntary compliance framework developed by the AICPA that evaluates how a company manages customer data across five Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Most SaaS companies pursue SOC 2 certification because enterprise customers require it as a condition of doing business.',
  },
  {
    question: 'How long does SOC 2 take?',
    answer: 'SOC 2 Type I (point-in-time assessment) typically takes 2-4 months from start to report. SOC 2 Type II (audit over an observation period) takes 6-12 months because auditors need to observe your controls over time — usually a minimum 6-month period. Most companies pursue Type I first, then Type II in the following year.',
  },
  {
    question: 'How much does SOC 2 cost?',
    answer: 'Total costs typically range from $30,000 to $100,000+ for a first-time certification depending on company size, scope, and whether you use a compliance platform. The main cost buckets are: auditor fees ($15,000-$50,000), documentation and policy development ($5,000-$30,000 if hiring consultants, or significantly less with templates), and security tooling ($5,000-$20,000/year). SecurityDocs templates address the documentation component at a fraction of consultant rates.',
  },
  {
    question: "What's the difference between SOC 2 Type I and Type II?",
    answer: "Type I is a point-in-time assessment — your auditor evaluates whether your controls are designed correctly as of a specific date. Type II evaluates whether those controls actually operated effectively over an observation period (typically 6-12 months). Type II is significantly more valuable to prospects and customers because it demonstrates sustained compliance, not just a snapshot.",
  },
  {
    question: 'Which Trust Service Criteria do I need?',
    answer: "Security (Common Criteria) is mandatory for all SOC 2 audits. The other four — Availability, Processing Integrity, Confidentiality, and Privacy — are optional and should be included based on what your customers care about and what your product does. Most first-time SOC 2 companies start with Security only, then expand criteria in subsequent years.",
  },
  {
    question: 'Do I need SOC 2 or ISO 27001?',
    answer: "If your customers are primarily US-based SaaS companies, SOC 2 is the standard they'll ask for. If you have significant European customers or enterprise deals with international companies, ISO 27001 may be required or preferred. Some companies pursue both. SOC 2 is generally faster and less expensive for US companies starting from scratch.",
  },
  {
    question: 'What do SOC 2 auditors actually look for?',
    answer: 'Auditors evaluate whether you have documented policies and procedures, whether your technical controls match what your policies say, and whether you can produce evidence that controls operated consistently during the audit period. Common evidence includes access logs, change management records, security training completion records, vendor assessments, and incident response documentation.',
  },
  {
    question: 'What evidence do I need to collect?',
    answer: "Evidence requirements vary by criteria but commonly include: user access reviews, background check records, security awareness training completion, penetration test results, vulnerability scan reports, change management tickets, backup test results, vendor risk assessments, and incident response records. Your auditor will provide a specific evidence request list (PBC list) during fieldwork.",
  },
  {
    question: 'How do I choose a SOC 2 auditor?',
    answer: "Look for a CPA firm licensed as a PCAOB-registered auditor with demonstrated SOC 2 experience in your industry. Key evaluation criteria: experience with companies your size, familiarity with your tech stack, responsiveness during the sales process (it predicts audit experience), and transparent pricing. Get quotes from at least three firms. Smaller regional CPA firms often provide better service at lower cost than the big names.",
  },
  {
    question: 'What happens if I fail a SOC 2 audit?',
    answer: "SOC 2 audits don't have a binary pass/fail outcome. Auditors issue opinions ranging from unqualified (clean) to adverse. If controls have exceptions, auditors note them in the report. A report with exceptions isn't ideal but is common for first-time audits. You can work with your auditor to remediate exceptions before the report is finalized, or address them before your next audit cycle.",
  },
  {
    question: "What's included in the templates?",
    answer: 'SecurityDocs templates are professionally written, audit-ready Word documents covering policies, procedures, forms, and evidence guides for SOC 2 compliance. Each template is designed to be customized with your company name and specific details. Templates cover all five Trust Service Criteria across 155+ documents in the Complete Bundle.',
  },
  {
    question: 'Are these templates audit-ready out of the box?',
    answer: "Yes — the templates are written to meet SOC 2 auditor expectations and are based on real-world implementation experience from companies that have successfully completed SOC 2 audits. You'll need to customize them with your company-specific details, system names, and actual procedures, but the structure, language, and control coverage are audit-ready from day one.",
  },
  {
    question: 'Do I need to customize the templates?',
    answer: "Yes. Every company's environment is different, and auditors will expect your policies to reflect your actual systems and processes. At minimum you'll need to replace placeholder text with your company name, system names, and role titles. More thorough customization — adapting procedures to match how your team actually operates — produces better audit outcomes and more useful documentation.",
  },
  {
    question: 'Do the templates cover all five Trust Service Criteria?',
    answer: 'The Complete Bundle covers all five TSC: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Individual packages are organized by criteria so you can purchase only what you need. Most companies start with the Security package or Complete Bundle.',
  },
  {
    question: 'Do templates get updated?',
    answer: 'Yes. SecurityDocs templates are updated periodically as SOC 2 standards evolve and based on customer feedback from audit experiences. Customers who have purchased templates can contact support to request the latest version.',
  },
  {
    question: 'What happens after I purchase?',
    answer: "You'll receive an email with a download link immediately after purchase. The link gives you access to all templates included in your purchase as Word documents (.docx) ready for customization.",
  },
  {
    question: 'Do you offer refunds?',
    answer: "We don't offer refunds on digital template purchases. Because templates are delivered digitally and immediately, all sales are final. If you have questions about whether a specific product is right for your situation before purchasing, reach out at support@security-docs.com and we'll help you make the right choice.",
  },
  {
    question: 'Can I see a sample before buying?',
    answer: 'Yes — download our free sample Information Security Policy (SMB version) to see the quality and format before purchasing. Note that this is one of four documents in the Information Security Policy package alone — the Complete Bundle includes 155+ documents across all Trust Service Criteria. We also offer a free SOC 2 Compliance Checklist. Questions about what\'s included? Contact support@security-docs.com.',
  },
  {
    question: 'Can I use these templates for multiple companies or clients?',
    answer: "Licenses are per-company. If you're a consultant or MSP purchasing templates to use across multiple clients, please contact support@security-docs.com to discuss multi-use licensing options.",
  },
];

// FAQ Schema markup for Google rich results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
