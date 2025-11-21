import type { Metadata } from 'next';
import { CiCdSystemEvidenceClient } from './CiCdSystemEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'CI/CD System - Evidence Explanation',
    description: 'Documentation requirements for continuous integration and deployment pipelines....',
    alternates: {
      canonical: '/products/ci-cd-system-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function CiCdSystemEvidencePage() {
  return <CiCdSystemEvidenceClient />;
}
