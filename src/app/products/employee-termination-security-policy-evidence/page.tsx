import type { Metadata } from 'next';
import { EmployeeTerminationSecurityPolicyEvidenceClient } from './EmployeeTerminationSecurityPolicyEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Termination Security Policy - Evidence Explanation',
    description: 'Documentation requirements for post-employment security obligations....',
    alternates: {
      canonical: '/products/employee-termination-security-policy-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function EmployeeTerminationSecurityPolicyEvidencePage() {
  return <EmployeeTerminationSecurityPolicyEvidenceClient />;
}
