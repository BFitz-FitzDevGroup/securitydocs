import type { Metadata } from 'next';
import { MasterServicesAgreementEvidenceClient } from './MasterServicesAgreementEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Master Services Agreement - Evidence Explanation',
    description: 'How to present customer service agreements showing security commitments....',
    alternates: {
      canonical: '/products/master-services-agreement-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function MasterServicesAgreementEvidencePage() {
  return <MasterServicesAgreementEvidenceClient />;
}
