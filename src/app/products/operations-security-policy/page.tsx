import type { Metadata } from 'next';
import { OperationsSecurityPolicyClient } from './OperationsSecurityPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Operations Security Policy',
    description: 'Operational security controls for change management, monitoring, and system maintenance. Includes enterprise, SMB, implementation workbook, and quick ...',
    alternates: {
      canonical: '/products/operations-security-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function OperationsSecurityPolicyPage() {
  return <OperationsSecurityPolicyClient />;
}
