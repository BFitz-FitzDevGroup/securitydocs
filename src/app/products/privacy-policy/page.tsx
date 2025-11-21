import type { Metadata } from 'next';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy',
    description: 'Comprehensive privacy policy for protecting personal information and meeting privacy requirements. Includes enterprise, SMB, implementation workbook, ...',
    alternates: {
      canonical: '/products/privacy-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
