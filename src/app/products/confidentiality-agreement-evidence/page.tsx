import type { Metadata } from 'next';
import { ConfidentialityAgreementEvidenceClient } from './ConfidentialityAgreementEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Confidentiality Agreements - Evidence Explanation',
    description: 'Guidance on maintaining and presenting employee confidentiality agreements....',
    alternates: {
      canonical: '/products/confidentiality-agreement-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function ConfidentialityAgreementEvidencePage() {
  return <ConfidentialityAgreementEvidenceClient />;
}
