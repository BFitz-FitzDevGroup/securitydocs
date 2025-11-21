import type { Metadata } from 'next';
import { NetworkDiagramClient } from './NetworkDiagramClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Network Diagram Package',
    description: 'Sample network architecture diagrams showing security zones and data flows. Includes enterprise and SMB versions in PDF and PNG formats....',
    alternates: {
      canonical: '/products/network-diagram'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function NetworkDiagramPage() {
  return <NetworkDiagramClient />;
}
