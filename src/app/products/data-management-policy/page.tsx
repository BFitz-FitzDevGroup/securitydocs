import type { Metadata } from 'next';
import { DataManagementPolicyClient } from './DataManagementPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Data Management Policy',
    description: 'Comprehensive data lifecycle management including classification, retention, and disposal. Includes enterprise, SMB, implementation workbook, and quic...',
    alternates: {
      canonical: '/products/data-management-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function DataManagementPolicyPage() {
  return <DataManagementPolicyClient />;
}
