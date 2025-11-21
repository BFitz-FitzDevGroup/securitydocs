import type { Metadata } from 'next';
import { PolicyAcknowledgementEvidenceClient } from './PolicyAcknowledgementEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Policy Acknowledgement - Evidence Explanation',
    description: 'How to collect, track, and present employee policy acknowledgements to auditors....',
    alternates: {
      canonical: '/products/policy-acknowledgement-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function PolicyAcknowledgementEvidencePage() {
  return <PolicyAcknowledgementEvidenceClient />;
}
