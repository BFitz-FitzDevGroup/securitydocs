import type { Metadata } from 'next';
import { IncidentResponseProgramTemplateClient } from './IncidentResponseProgramTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Incident Response Program Template',
    description: 'Structured incident response program with roles, procedures, and escalation paths. Includes instructions and Excel template....',
    alternates: {
      canonical: '/products/incident-response-program-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function IncidentResponseProgramTemplatePage() {
  return <IncidentResponseProgramTemplateClient />;
}
