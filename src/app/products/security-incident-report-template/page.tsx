import type { Metadata } from 'next';
import { SecurityIncidentReportTemplateClient } from './SecurityIncidentReportTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Security Incident Report Template',
    description: 'Template for documenting security incidents and response actions....',
    alternates: {
      canonical: '/products/security-incident-report-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SecurityIncidentReportTemplatePage() {
  return <SecurityIncidentReportTemplateClient />;
}
