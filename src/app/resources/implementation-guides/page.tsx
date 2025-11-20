import type { Metadata } from 'next';
import { ImplementationGuidesClient } from './ImplementationGuidesClient';

export const metadata: Metadata = {
  title: 'SOC 2 Implementation Guides by Industry',
  description: 'Industry-specific SOC 2 implementation guides for SaaS, healthcare, financial services, e-commerce, and early-stage startups. Tailored guidance for your business type.',
  alternates: {
    canonical: '/resources/implementation-guides'
  },
  keywords: ['SOC 2 implementation', 'industry compliance guides', 'SOC 2 by industry', 'implementation roadmap', 'compliance guide'],
};

export default function ImplementationGuidesPage() {
  return <ImplementationGuidesClient />;
}