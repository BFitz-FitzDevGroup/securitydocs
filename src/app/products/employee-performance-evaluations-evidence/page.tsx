import type { Metadata } from 'next';
import { EmployeePerformanceEvaluationsEvidenceClient } from './EmployeePerformanceEvaluationsEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Performance Evaluations - Evidence Explanation',
    description: 'Guidance on documenting performance reviews and accountability measures....',
    alternates: {
      canonical: '/products/employee-performance-evaluations-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function EmployeePerformanceEvaluationsEvidencePage() {
  return <EmployeePerformanceEvaluationsEvidenceClient />;
}
