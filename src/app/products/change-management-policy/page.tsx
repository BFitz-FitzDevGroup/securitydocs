import type { Metadata } from 'next';
import { ChangeManagementPolicyClient } from './ChangeManagementPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Change Management Policy',
    description: 'Formal change management policy for controlling system and application changes. Includes enterprise, SMB, implementation workbook, and quick reference...',
    alternates: {
      canonical: '/products/change-management-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function ChangeManagementPolicyPage() {
  return <ChangeManagementPolicyClient />;
}
