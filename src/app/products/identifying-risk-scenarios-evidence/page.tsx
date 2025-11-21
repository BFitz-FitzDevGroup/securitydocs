import type { Metadata } from 'next';
import { IdentifyingRiskScenariosEvidenceClient } from './IdentifyingRiskScenariosEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Identifying Risk Scenarios - Evidence Explanation',
    description: 'How to document risk assessment process and identified scenarios....',
    alternates: {
      canonical: '/products/identifying-risk-scenarios-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function IdentifyingRiskScenariosEvidencePage() {
  return <IdentifyingRiskScenariosEvidenceClient />;
}
