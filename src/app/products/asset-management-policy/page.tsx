import type { Metadata } from 'next';
import { AssetManagementPolicyClient } from './AssetManagementPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Asset Management Policy',
    description: 'Policy for managing hardware, software, and data assets throughout their lifecycle. Includes enterprise, SMB, implementation workbook, and quick refer...',
    alternates: {
      canonical: '/products/asset-management-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function AssetManagementPolicyPage() {
  return <AssetManagementPolicyClient />;
}
