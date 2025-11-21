import type { Metadata } from 'next';
import { PenetrationTestRemediationEvidenceClient } from './PenetrationTestRemediationEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Penetration Test Remediation - Evidence Explanation',
    description: 'Documentation requirements for addressing penetration test findings....',
    alternates: {
      canonical: '/products/penetration-test-remediation-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function PenetrationTestRemediationEvidencePage() {
  return <PenetrationTestRemediationEvidenceClient />;
}
