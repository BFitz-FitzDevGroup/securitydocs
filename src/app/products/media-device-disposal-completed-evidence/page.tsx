import type { Metadata } from 'next';
import { MediaDeviceDisposalCompletedEvidenceClient } from './MediaDeviceDisposalCompletedEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Media Device Disposal Completed - Evidence Explanation',
    description: 'Documentation requirements for secure media disposal and destruction....',
    alternates: {
      canonical: '/products/media-device-disposal-completed-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function MediaDeviceDisposalCompletedEvidencePage() {
  return <MediaDeviceDisposalCompletedEvidenceClient />;
}
