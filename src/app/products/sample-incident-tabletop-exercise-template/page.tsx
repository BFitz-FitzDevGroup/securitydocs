import type { Metadata } from 'next';
import { SampleIncidentTabletopExerciseTemplateClient } from './SampleIncidentTabletopExerciseTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Incident Tabletop Exercise',
    description: 'Sample tabletop exercise scenario for testing incident response procedures....',
    alternates: {
      canonical: '/products/sample-incident-tabletop-exercise-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleIncidentTabletopExerciseTemplatePage() {
  return <SampleIncidentTabletopExerciseTemplateClient />;
}
