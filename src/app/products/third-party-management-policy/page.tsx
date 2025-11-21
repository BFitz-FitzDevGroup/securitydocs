import type { Metadata } from 'next';
import { ThirdPartyManagementPolicyClient } from './ThirdPartyManagementPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Third-Party Management Policy',
    description: 'Vendor management policy for assessing and monitoring third-party service providers. Includes enterprise, SMB, implementation workbook, and quick refe...',
    alternates: {
      canonical: '/products/third-party-management-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function ThirdPartyManagementPolicyPage() {
  return <ThirdPartyManagementPolicyClient />;
}
