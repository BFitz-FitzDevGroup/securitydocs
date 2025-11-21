import type { Metadata } from 'next';
import { CryptographyPolicyClient } from './CryptographyPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cryptography Policy',
    description: 'Policy for encryption standards, key management, and cryptographic controls. Includes enterprise, SMB, implementation workbook, and quick reference gu...',
    alternates: {
      canonical: '/products/cryptography-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function CryptographyPolicyPage() {
  return <CryptographyPolicyClient />;
}
