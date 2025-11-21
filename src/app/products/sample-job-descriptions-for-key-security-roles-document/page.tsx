import type { Metadata } from 'next';
import { SampleJobDescriptionsForKeySecurityRolesDocumentClient } from './SampleJobDescriptionsForKeySecurityRolesDocumentClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Job Descriptions for Key Security Roles',
    description: 'Job description templates for CISO, security analyst, and other key security positions....',
    alternates: {
      canonical: '/products/sample-job-descriptions-for-key-security-roles-document'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleJobDescriptionsForKeySecurityRolesDocumentPage() {
  return <SampleJobDescriptionsForKeySecurityRolesDocumentClient />;
}
