import type { Metadata } from 'next';
import { SampleCompanySecurityProgramTemplateClient } from './SampleCompanySecurityProgramTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Company Security Program Template',
    description: 'Template for creating public security program documentation....',
    alternates: {
      canonical: '/products/sample-company-security-program-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleCompanySecurityProgramTemplatePage() {
  return <SampleCompanySecurityProgramTemplateClient />;
}
