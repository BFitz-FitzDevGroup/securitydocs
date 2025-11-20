import type { Metadata } from 'next';
import { SaaSGuideClient } from './SaaSGuideClient';

export const metadata: Metadata = {
  title: 'SOC 2 for SaaS Companies - Cloud Services Implementation Guide',
  description: 'Complete SOC 2 implementation guide for SaaS and cloud service providers. Address multi-tenancy, data isolation, availability requirements, and customer data protection.',
  alternates: {
    canonical: '/resources/implementation-guides/saas-cloud-services'
  },
  keywords: ['SaaS SOC 2', 'cloud compliance', 'SaaS security', 'cloud services SOC 2', 'multi-tenant security'],
};

export default function SaaSGuidePage() {
  return <SaaSGuideClient />;
}