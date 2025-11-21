import type { Metadata } from 'next';
import { IncidentResponsePlanTestEvidenceClient } from './IncidentResponsePlanTestEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Incident Response Plan Test - Evidence Explanation',
    description: 'Guidance on documenting incident response testing and tabletop exercises....',
    alternates: {
      canonical: '/products/incident-response-plan-test-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function IncidentResponsePlanTestEvidencePage() {
  return <IncidentResponsePlanTestEvidenceClient />;
}
