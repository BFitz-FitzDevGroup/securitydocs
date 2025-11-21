import type { Metadata } from 'next';
import { BoardMeetingMinutesAgendaEvidenceClient } from './BoardMeetingMinutesAgendaEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Board Meeting Minutes/Agenda - Evidence Explanation',
    description: 'How to present board meeting documentation showing governance oversight....',
    alternates: {
      canonical: '/products/board-meeting-minutes-agenda-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function BoardMeetingMinutesAgendaEvidencePage() {
  return <BoardMeetingMinutesAgendaEvidenceClient />;
}
