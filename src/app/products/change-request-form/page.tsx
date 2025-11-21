import type { Metadata } from 'next';
import { ChangeRequestFormClient } from './ChangeRequestFormClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Change Request Form',
    description: 'Formal change request form for system and application changes....',
    alternates: {
      canonical: '/products/change-request-form'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function ChangeRequestFormPage() {
  return <ChangeRequestFormClient />;
}
