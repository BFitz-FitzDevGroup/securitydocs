import type { Metadata } from 'next';
import { SampleBusinessContinuityPlanClient } from './SampleBusinessContinuityPlanClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Business Continuity Plan',
    description: 'Sample business continuity plan template....',
    alternates: {
      canonical: '/products/sample-business-continuity-plan'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleBusinessContinuityPlanPage() {
  return <SampleBusinessContinuityPlanClient />;
}
