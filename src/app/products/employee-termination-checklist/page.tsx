import type { Metadata } from 'next';
import { EmployeeTerminationChecklistClient } from './EmployeeTerminationChecklistClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Termination Checklist - Evidence Explanation',
    description: 'How to demonstrate secure offboarding procedures and access revocation....',
    alternates: {
      canonical: '/products/employee-termination-checklist'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function EmployeeTerminationChecklistPage() {
  return <EmployeeTerminationChecklistClient />;
}
