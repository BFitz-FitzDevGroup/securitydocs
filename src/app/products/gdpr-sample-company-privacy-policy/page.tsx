import type { Metadata } from 'next';
import { GdprSampleCompanyPrivacyPolicyClient } from './GdprSampleCompanyPrivacyPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'GDPR Sample Company Privacy Policy',
    description: 'GDPR-compliant privacy policy template for EU data protection compliance....',
    alternates: {
      canonical: '/products/gdpr-sample-company-privacy-policy'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function GdprSampleCompanyPrivacyPolicyPage() {
  return <GdprSampleCompanyPrivacyPolicyClient />;
}
