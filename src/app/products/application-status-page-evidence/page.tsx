import type { Metadata } from 'next';
import { ApplicationStatusPageEvidenceClient } from './ApplicationStatusPageEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Application Status Page - Evidence Explanation',
    description: 'Guidance on implementing and documenting public-facing system status pages....',
    alternates: {
      canonical: '/products/application-status-page-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function ApplicationStatusPageEvidencePage() {
  return <ApplicationStatusPageEvidenceClient />;
}
