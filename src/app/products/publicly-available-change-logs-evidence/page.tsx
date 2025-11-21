import type { Metadata } from 'next';
import { PubliclyAvailableChangeLogsEvidenceClient } from './PubliclyAvailableChangeLogsEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Publicly Available Change Logs - Evidence Explanation',
    description: 'Guidance on maintaining public release notes and change documentation....',
    alternates: {
      canonical: '/products/publicly-available-change-logs-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function PubliclyAvailableChangeLogsEvidencePage() {
  return <PubliclyAvailableChangeLogsEvidenceClient />;
}
