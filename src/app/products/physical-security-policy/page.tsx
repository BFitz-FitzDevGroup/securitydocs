import type { Metadata } from 'next';
import { PhysicalSecurityPolicyClient } from './PhysicalSecurityPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Physical Security Policy',
    description: 'Physical security controls for facilities, equipment, and access management. Includes enterprise, SMB, implementation workbook, and quick reference gu...',
    alternates: {
      canonical: '/products/physical-security-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function PhysicalSecurityPolicyPage() {
  return <PhysicalSecurityPolicyClient />;
}
