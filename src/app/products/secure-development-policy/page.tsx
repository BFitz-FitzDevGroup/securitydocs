import type { Metadata } from 'next';
import { SecureDevelopmentPolicyClient } from './SecureDevelopmentPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Secure Development Policy',
    description: 'Secure software development lifecycle policy with coding standards and testing requirements. Includes enterprise, SMB, implementation workbook, and qu...',
    alternates: {
      canonical: '/products/secure-development-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function SecureDevelopmentPolicyPage() {
  return <SecureDevelopmentPolicyClient />;
}
