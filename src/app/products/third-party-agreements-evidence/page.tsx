import type { Metadata } from 'next';
import { ThirdPartyAgreementsEvidenceClient } from './ThirdPartyAgreementsEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Third Party Agreements - Evidence Explanation',
    description: 'Documentation requirements for vendor contracts and security commitments....',
    alternates: {
      canonical: '/products/third-party-agreements-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function ThirdPartyAgreementsEvidencePage() {
  return <ThirdPartyAgreementsEvidenceClient />;
}
