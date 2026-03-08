import type { Metadata } from 'next';
import { CompleteBundleClient } from './CompleteBundleClient';

export const metadata: Metadata = {
  title: 'Complete SOC 2 Bundle — 155 Templates',
  description: 'Get every SOC 2 template in one package: 98 policies, documents, and evidence guides across 155 files. Save over $1,100 vs buying separately.',
  alternates: {
    canonical: '/products/complete-bundle'
  },
  keywords: ['SOC 2 complete bundle', 'all SOC 2 templates', 'complete compliance package', 'SOC 2 everything', 'full audit package'],
};

export default function CompleteBundlePage() {
  return <CompleteBundleClient />;
}