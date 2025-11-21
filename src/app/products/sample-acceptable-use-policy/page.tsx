import type { Metadata } from 'next';
import { SampleAcceptableUsePolicyClient } from './SampleAcceptableUsePolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Acceptable Use Policy',
    description: 'Sample acceptable use policy for reference and customization....',
    alternates: {
      canonical: '/products/sample-acceptable-use-policy'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleAcceptableUsePolicyPage() {
  return <SampleAcceptableUsePolicyClient />;
}
