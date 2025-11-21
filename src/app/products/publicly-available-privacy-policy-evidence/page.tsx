import type { Metadata } from 'next';
import { PubliclyAvailablePrivacyPolicyEvidenceClient } from './PubliclyAvailablePrivacyPolicyEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Publicly Available Privacy Policy - Evidence Explanation',
    description: 'How to present privacy policy and data protection commitments....',
    alternates: {
      canonical: '/products/publicly-available-privacy-policy-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function PubliclyAvailablePrivacyPolicyEvidencePage() {
  return <PubliclyAvailablePrivacyPolicyEvidenceClient />;
}
