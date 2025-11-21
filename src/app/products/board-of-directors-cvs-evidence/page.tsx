import type { Metadata } from 'next';
import { BoardOfDirectorsCvsEvidenceClient } from './BoardOfDirectorsCvsEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Board of Directors CVs - Evidence Explanation',
    description: 'How to present board member qualifications and expertise to auditors....',
    alternates: {
      canonical: '/products/board-of-directors-cvs-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function BoardOfDirectorsCvsEvidencePage() {
  return <BoardOfDirectorsCvsEvidenceClient />;
}
