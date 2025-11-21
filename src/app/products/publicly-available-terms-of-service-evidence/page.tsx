import type { Metadata } from 'next';
import { PubliclyAvailableTermsOfServiceEvidenceClient } from './PubliclyAvailableTermsOfServiceEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Publicly Available Terms of Service - Evidence Explanation',
    description: 'How to present terms of service showing service commitments....',
    alternates: {
      canonical: '/products/publicly-available-terms-of-service-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function PubliclyAvailableTermsOfServiceEvidencePage() {
  return <PubliclyAvailableTermsOfServiceEvidenceClient />;
}
