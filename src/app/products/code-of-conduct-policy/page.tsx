import type { Metadata } from 'next';
import { CodeOfConductPolicyClient } from './CodeOfConductPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Code of Conduct Policy',
    description: 'Employee code of conduct establishing ethical standards and behavioral expectations. Includes enterprise, SMB, implementation workbook, and quick refe...',
    alternates: {
      canonical: '/products/code-of-conduct-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function CodeOfConductPolicyPage() {
  return <CodeOfConductPolicyClient />;
}
