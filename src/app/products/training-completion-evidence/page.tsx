import type { Metadata } from 'next';
import { TrainingCompletionEvidenceClient } from './TrainingCompletionEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Training Completion - Evidence Explanation',
    description: 'How to document and demonstrate employee security awareness training completion....',
    alternates: {
      canonical: '/products/training-completion-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function TrainingCompletionEvidencePage() {
  return <TrainingCompletionEvidenceClient />;
}
