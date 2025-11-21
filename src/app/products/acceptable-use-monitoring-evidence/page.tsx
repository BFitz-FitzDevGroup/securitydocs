import type { Metadata } from 'next';
import { AcceptableUseMonitoringEvidenceClient } from './AcceptableUseMonitoringEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Acceptable Use Monitoring - Evidence Explanation',
    description: 'How to monitor and enforce acceptable use policies through technical controls and oversight....',
    alternates: {
      canonical: '/products/acceptable-use-monitoring-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function AcceptableUseMonitoringEvidencePage() {
  return <AcceptableUseMonitoringEvidenceClient />;
}
