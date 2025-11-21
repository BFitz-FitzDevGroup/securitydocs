import type { Metadata } from 'next';
import { AnonymousWhistleblowerChannelEvidenceClient } from './AnonymousWhistleblowerChannelEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Anonymous Whistleblower Channel - Evidence Explanation',
    description: 'How to demonstrate existence and effectiveness of anonymous reporting channels....',
    alternates: {
      canonical: '/products/anonymous-whistleblower-channel-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function AnonymousWhistleblowerChannelEvidencePage() {
  return <AnonymousWhistleblowerChannelEvidenceClient />;
}
