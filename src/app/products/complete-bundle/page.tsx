import type { Metadata } from 'next';
import { CompleteBundleClient } from './CompleteBundleClient';

export const metadata: Metadata = {
  title: 'Complete SOC 2 Bundle - All Templates & Guides (155 Files)',
  description: 'Everything you need for SOC 2 compliance: all 98 templates and guides (155 total files) including policies, documents, evidence explanations, and control mapping. Save over $1,100.',
  alternates: {
    canonical: '/products/complete-bundle'
  },
  keywords: ['SOC 2 complete bundle', 'all SOC 2 templates', 'complete compliance package', 'SOC 2 everything', 'full audit package'],
};

export default function CompleteBundlePage() {
  return <CompleteBundleClient />;
}