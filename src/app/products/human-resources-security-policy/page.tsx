import type { Metadata } from 'next';
import { HumanResourcesSecurityPolicyClient } from './HumanResourcesSecurityPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Human Resources Security Policy',
    description: 'HR security policy covering background checks, training, and termination procedures. Includes enterprise, SMB, implementation workbook, and quick refe...',
    alternates: {
      canonical: '/products/human-resources-security-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function HumanResourcesSecurityPolicyPage() {
  return <HumanResourcesSecurityPolicyClient />;
}
