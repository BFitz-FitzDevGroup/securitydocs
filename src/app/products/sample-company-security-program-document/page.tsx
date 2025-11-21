import type { Metadata } from 'next';
import { SampleCompanySecurityProgramDocumentClient } from './SampleCompanySecurityProgramDocumentClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Company Security Program Document',
    description: 'Public-facing security program description for website transparency....',
    alternates: {
      canonical: '/products/sample-company-security-program-document'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleCompanySecurityProgramDocumentPage() {
  return <SampleCompanySecurityProgramDocumentClient />;
}
