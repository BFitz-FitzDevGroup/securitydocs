import type { Metadata } from 'next';
import { SampleWhistleblowerPolicyDocumentClient } from './SampleWhistleblowerPolicyDocumentClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Whistleblower Policy',
    description: 'Whistleblower policy template for anonymous reporting of unethical conduct....',
    alternates: {
      canonical: '/products/sample-whistleblower-policy-document'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleWhistleblowerPolicyDocumentPage() {
  return <SampleWhistleblowerPolicyDocumentClient />;
}
