import type { Metadata } from 'next';
import { IntrusionDetectionSystemEvidenceClient } from './IntrusionDetectionSystemEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Intrusion Detection System - Evidence Explanation',
    description: 'How to demonstrate IDS/IPS implementation and monitoring....',
    alternates: {
      canonical: '/products/intrusion-detection-system-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function IntrusionDetectionSystemEvidencePage() {
  return <IntrusionDetectionSystemEvidenceClient />;
}
