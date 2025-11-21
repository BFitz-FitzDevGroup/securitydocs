import type { Metadata } from 'next';
import { BundlesClient } from './BundlesClient';

export const metadata: Metadata = {
  title: 'SOC 2 Compliance Bundles - Complete Template Packages',
  description: 'SOC 2 compliance bundle packages with significant savings. Complete bundles for policies, documents, and evidence explanations to streamline your audit preparation.',
  alternates: {
    canonical: '/products/bundles'
  },
  keywords: ['SOC 2 bundles', 'compliance packages', 'SOC 2 templates bundle', 'audit bundle', 'compliance package deals'],
};

export default function BundlesPage() {
  return <BundlesClient />;
}