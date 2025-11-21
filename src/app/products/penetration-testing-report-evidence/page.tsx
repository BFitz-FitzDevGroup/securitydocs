import type { Metadata } from 'next';
import { PenetrationTestingReportEvidenceClient } from './PenetrationTestingReportEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Penetration Testing Report - Evidence Explanation',
    description: 'How to present penetration test results and remediation efforts....',
    alternates: {
      canonical: '/products/penetration-testing-report-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function PenetrationTestingReportEvidencePage() {
  return <PenetrationTestingReportEvidenceClient />;
}
