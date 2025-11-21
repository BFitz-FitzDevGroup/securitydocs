import type { Metadata } from 'next';
import { AccessControlPolicyClient } from './AccessControlPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Access Control Policy',
    description: 'Comprehensive access control policy covering user access management, authentication, MFA, and access reviews. Includes enterprise, SMB, implementation...',
    alternates: {
      canonical: '/products/access-control-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function AccessControlPolicyPage() {
  return <AccessControlPolicyClient />;
}
