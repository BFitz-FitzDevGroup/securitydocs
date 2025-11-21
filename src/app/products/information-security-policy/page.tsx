import type { Metadata } from 'next';
import { InformationSecurityPolicyClient } from './InformationSecurityPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Information Security Policy',
    description: 'Master information security policy establishing overall security program framework. Includes enterprise, SMB, implementation workbook, and quick refer...',
    alternates: {
      canonical: '/products/information-security-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function InformationSecurityPolicyPage() {
  return <InformationSecurityPolicyClient />;
}
