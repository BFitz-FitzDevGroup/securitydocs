import type { Metadata } from 'next';
import { Soc2SystemDescriptionEvidenceClient } from './Soc2SystemDescriptionEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SOC 2 System Description - Evidence Explanation',
    description: 'Comprehensive guide to creating the required SOC 2 system description....',
    alternates: {
      canonical: '/products/soc-2-system-description-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function Soc2SystemDescriptionEvidencePage() {
  return <Soc2SystemDescriptionEvidenceClient />;
}
