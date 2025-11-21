import type { Metadata } from 'next';
import { KeySecurityRoleJobDescriptionsEvidenceClient } from './KeySecurityRoleJobDescriptionsEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Key Security Role Job Descriptions - Evidence Explanation',
    description: 'Guidance on documenting security roles and responsibilities....',
    alternates: {
      canonical: '/products/key-security-role-job-descriptions-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function KeySecurityRoleJobDescriptionsEvidencePage() {
  return <KeySecurityRoleJobDescriptionsEvidenceClient />;
}
