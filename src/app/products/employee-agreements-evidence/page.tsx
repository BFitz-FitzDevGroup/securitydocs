import type { Metadata } from 'next';
import { EmployeeAgreementsEvidenceClient } from './EmployeeAgreementsEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Agreements - Evidence Explanation',
    description: 'Documentation requirements for employment contracts and security acknowledgments....',
    alternates: {
      canonical: '/products/employee-agreements-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function EmployeeAgreementsEvidencePage() {
  return <EmployeeAgreementsEvidenceClient />;
}
