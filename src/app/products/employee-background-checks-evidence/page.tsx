import type { Metadata } from 'next';
import { EmployeeBackgroundChecksEvidenceClient } from './EmployeeBackgroundChecksEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Background Checks - Evidence Explanation',
    description: 'How to document background check procedures and maintain records....',
    alternates: {
      canonical: '/products/employee-background-checks-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function EmployeeBackgroundChecksEvidencePage() {
  return <EmployeeBackgroundChecksEvidenceClient />;
}
