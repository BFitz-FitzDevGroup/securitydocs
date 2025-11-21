import type { Metadata } from 'next';
import { RemovableMediaEncryptionEvidenceClient } from './RemovableMediaEncryptionEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Removable Media Encryption - Evidence Explanation',
    description: 'Guidance on documenting encryption requirements for portable devices....',
    alternates: {
      canonical: '/products/removable-media-encryption-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function RemovableMediaEncryptionEvidencePage() {
  return <RemovableMediaEncryptionEvidenceClient />;
}
