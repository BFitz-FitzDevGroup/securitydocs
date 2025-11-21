import type { Metadata } from 'next';
import { CustomerSupportSiteEvidenceClient } from './CustomerSupportSiteEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Customer Support Site - Evidence Explanation',
    description: 'How to demonstrate customer support capabilities and service commitments....',
    alternates: {
      canonical: '/products/customer-support-site-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function CustomerSupportSiteEvidencePage() {
  return <CustomerSupportSiteEvidenceClient />;
}
