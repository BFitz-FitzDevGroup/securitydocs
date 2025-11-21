import type { Metadata } from 'next';
import { NetworkSecurityPolicyClient } from './NetworkSecurityPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Network Security Policy',
    description: 'Network security controls including firewalls, segmentation, and intrusion detection. Includes enterprise, SMB, implementation workbook, and quick ref...',
    alternates: {
      canonical: '/products/network-security-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function NetworkSecurityPolicyPage() {
  return <NetworkSecurityPolicyClient />;
}
