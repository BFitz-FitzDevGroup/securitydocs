import type { Metadata } from 'next';
import { SampleSubscriptionTermsOfServiceDocumentClient } from './SampleSubscriptionTermsOfServiceDocumentClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sample Subscription Terms of Service',
    description: 'Terms of service template for subscription-based SaaS products....',
    alternates: {
      canonical: '/products/sample-subscription-terms-of-service-document'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function SampleSubscriptionTermsOfServiceDocumentPage() {
  return <SampleSubscriptionTermsOfServiceDocumentClient />;
}
