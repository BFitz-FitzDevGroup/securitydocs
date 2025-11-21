import type { Metadata } from 'next';
import { EvidenceClient } from './EvidenceClient';

export const metadata: Metadata = {
  title: 'SOC 2 Evidence Explanations - Audit Preparation Guides',
  description: 'Comprehensive evidence explanations for SOC 2 audits. Learn exactly what auditors expect and how to present each type of evidence for all Trust Service Criteria.',
  alternates: {
    canonical: '/products/evidence'
  },
  keywords: ['SOC 2 evidence', 'audit evidence', 'SOC 2 audit preparation', 'evidence requirements', 'what auditors want'],
};

export default function EvidencePage() {
  return <EvidenceClient />;
}