import type { Metadata } from 'next';
import { PubliclyAvailableSecurityInformationPageEvidenceClient } from './PubliclyAvailableSecurityInformationPageEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Publicly Available Security Information Page - Evidence Explanation',
    description: 'Documentation requirements for public security program disclosure....',
    alternates: {
      canonical: '/products/publicly-available-security-information-page-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function PubliclyAvailableSecurityInformationPageEvidencePage() {
  return <PubliclyAvailableSecurityInformationPageEvidenceClient />;
}
