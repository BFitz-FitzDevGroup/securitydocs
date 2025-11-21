import type { Metadata } from 'next';
import { DisasterRecoveryTabletopExerciseEvidenceClient } from './DisasterRecoveryTabletopExerciseEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Disaster Recovery Tabletop Exercise - Evidence Explanation',
    description: 'How to document and present disaster recovery testing exercises....',
    alternates: {
      canonical: '/products/disaster-recovery-tabletop-exercise-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function DisasterRecoveryTabletopExerciseEvidencePage() {
  return <DisasterRecoveryTabletopExerciseEvidenceClient />;
}
