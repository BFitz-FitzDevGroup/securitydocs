import type { Metadata } from 'next';
import { BoardOfDirectorsCharterEvidenceClient } from './BoardOfDirectorsCharterEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Board of Directors Charter - Evidence Explanation',
    description: 'Guidance on documenting board charter and demonstrating governance structure....',
    alternates: {
      canonical: '/products/board-of-directors-charter-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function BoardOfDirectorsCharterEvidencePage() {
  return <BoardOfDirectorsCharterEvidenceClient />;
}
