import type { Metadata } from 'next';
import { SampleResponsibleDisclosurePolicyTemplateClient } from './SampleResponsibleDisclosurePolicyTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Responsible Disclosure Policy',
    description: 'Responsible disclosure policy template for security researchers to report vulnerabilities....',
    alternates: {
      canonical: '/products/sample-responsible-disclosure-policy-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleResponsibleDisclosurePolicyTemplatePage() {
  return <SampleResponsibleDisclosurePolicyTemplateClient />;
}
