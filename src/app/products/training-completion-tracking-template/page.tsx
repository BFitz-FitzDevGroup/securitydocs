import type { Metadata } from 'next';
import { TrainingCompletionTrackingTemplateClient } from './TrainingCompletionTrackingTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Training Completion Tracking Template',
    description: 'Template for tracking employee security training completion....',
    alternates: {
      canonical: '/products/training-completion-tracking-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function TrainingCompletionTrackingTemplatePage() {
  return <TrainingCompletionTrackingTemplateClient />;
}
