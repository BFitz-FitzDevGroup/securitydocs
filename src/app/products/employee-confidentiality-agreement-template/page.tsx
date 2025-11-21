import type { Metadata } from 'next';
import { EmployeeConfidentialityAgreementTemplateClient } from './EmployeeConfidentialityAgreementTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Employee Confidentiality Agreement Template',
    description: 'Confidentiality agreement for employees protecting company information....',
    alternates: {
      canonical: '/products/employee-confidentiality-agreement-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function EmployeeConfidentialityAgreementTemplatePage() {
  return <EmployeeConfidentialityAgreementTemplateClient />;
}
