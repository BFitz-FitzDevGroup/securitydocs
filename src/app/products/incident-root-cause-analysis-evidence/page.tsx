import type { Metadata } from 'next';
import { IncidentRootCauseAnalysisEvidenceClient } from './IncidentRootCauseAnalysisEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Incident Root Cause Analysis - Evidence Explanation',
    description: 'How to document incident investigations and corrective actions....',
    alternates: {
      canonical: '/products/incident-root-cause-analysis-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function IncidentRootCauseAnalysisEvidencePage() {
  return <IncidentRootCauseAnalysisEvidenceClient />;
}
