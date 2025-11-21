import type { Metadata } from 'next';
import { EmployeePerformanceReviewFormClient } from './EmployeePerformanceReviewFormClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Performance Review Form',
    description: 'Structured performance review form for evaluating employee performance. Includes instructions and Excel template....',
    alternates: {
      canonical: '/products/employee-performance-review-form'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function EmployeePerformanceReviewFormPage() {
  return <EmployeePerformanceReviewFormClient />;
}
