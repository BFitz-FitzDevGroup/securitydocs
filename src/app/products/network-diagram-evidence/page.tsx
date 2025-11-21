import type { Metadata } from 'next';
import { NetworkDiagramEvidenceClient } from './NetworkDiagramEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Network Diagram - Evidence Explanation',
    description: 'How to create and present network diagrams showing security architecture....',
    alternates: {
      canonical: '/products/network-diagram-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function NetworkDiagramEvidencePage() {
  return <NetworkDiagramEvidenceClient />;
}
