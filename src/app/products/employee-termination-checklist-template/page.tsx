import type { Metadata } from 'next';
import { EmployeeTerminationChecklistTemplateClient } from './EmployeeTerminationChecklistTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Termination Checklist Template',
    description: 'Comprehensive checklist for secure employee offboarding and access revocation....',
    alternates: {
      canonical: '/products/employee-termination-checklist-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function EmployeeTerminationChecklistTemplatePage() {
  return <EmployeeTerminationChecklistTemplateClient />;
}
