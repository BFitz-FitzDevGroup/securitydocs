import type { Metadata } from 'next';
import { BoardOfDirectorsCharterTemplateClient } from './BoardOfDirectorsCharterTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Board of Directors Charter Template',
    description: 'Comprehensive guidance for creating board of directors charter for governance oversight....',
    alternates: {
      canonical: '/products/board-of-directors-charter-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function BoardOfDirectorsCharterTemplatePage() {
  return <BoardOfDirectorsCharterTemplateClient />;
}
