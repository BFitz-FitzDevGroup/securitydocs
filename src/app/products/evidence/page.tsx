import type { Metadata } from 'next';
import { EvidenceClient } from './EvidenceClient';

export const metadata: Metadata = {
  title: 'SOC 2 Evidence Guides — What Auditors Expect',
  description: 'Learn exactly what evidence SOC 2 auditors require and how to present it. Covers all Trust Service Criteria with step-by-step explanations.',
  alternates: {
    canonical: '/products/evidence'
  },
  keywords: ['SOC 2 evidence', 'audit evidence', 'SOC 2 audit preparation', 'evidence requirements', 'what auditors want'],
};

export default function EvidencePage() {
  return <EvidenceClient />;
}