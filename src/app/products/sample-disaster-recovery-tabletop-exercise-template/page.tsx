import type { Metadata } from 'next';
import { SampleDisasterRecoveryTabletopExerciseTemplateClient } from './SampleDisasterRecoveryTabletopExerciseTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Disaster Recovery Tabletop Exercise',
    description: 'Sample tabletop exercise scenario for testing disaster recovery procedures....',
    alternates: {
      canonical: '/products/sample-disaster-recovery-tabletop-exercise-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleDisasterRecoveryTabletopExerciseTemplatePage() {
  return <SampleDisasterRecoveryTabletopExerciseTemplateClient />;
}
