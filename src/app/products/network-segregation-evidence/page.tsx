import type { Metadata } from 'next';
import { NetworkSegregationEvidenceClient } from './NetworkSegregationEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Network Segregation - Evidence Explanation',
    description: 'Guidance on documenting network segmentation and security zones....',
    alternates: {
      canonical: '/products/network-segregation-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function NetworkSegregationEvidencePage() {
  return <NetworkSegregationEvidenceClient />;
}
