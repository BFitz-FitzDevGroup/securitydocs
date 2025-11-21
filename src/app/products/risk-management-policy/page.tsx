import type { Metadata } from 'next';
import { RiskManagementPolicyClient } from './RiskManagementPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Risk Management Policy',
    description: 'Framework for identifying, assessing, and managing organizational risks. Includes enterprise, SMB, implementation workbook, and quick reference guide....',
    alternates: {
      canonical: '/products/risk-management-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function RiskManagementPolicyPage() {
  return <RiskManagementPolicyClient />;
}
