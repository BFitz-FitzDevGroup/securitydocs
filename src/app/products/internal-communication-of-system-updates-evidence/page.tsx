import type { Metadata } from 'next';
import { InternalCommunicationOfSystemUpdatesEvidenceClient } from './InternalCommunicationOfSystemUpdatesEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Internal Communication of System Updates - Evidence Explanation',
    description: 'Documentation requirements for change communication and notification....',
    alternates: {
      canonical: '/products/internal-communication-of-system-updates-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function InternalCommunicationOfSystemUpdatesEvidencePage() {
  return <InternalCommunicationOfSystemUpdatesEvidenceClient />;
}
