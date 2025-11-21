import type { Metadata } from 'next';
import { ContractorAgreementEvidenceClient } from './ContractorAgreementEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contractor Agreements - Evidence Explanation',
    description: 'How to document contractor security requirements and confidentiality obligations....',
    alternates: {
      canonical: '/products/contractor-agreement-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function ContractorAgreementEvidencePage() {
  return <ContractorAgreementEvidenceClient />;
}
