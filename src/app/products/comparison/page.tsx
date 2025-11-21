import type { Metadata } from 'next';
import { ComparisonClient } from './ComparisonClient';

export const metadata: Metadata = {
  title: 'SOC 2 Products Comparison - Templates vs Bundles',
  description: 'Compare SOC 2 compliance templates, bundles, and packages to find the right solution for your organization. See pricing, features, and savings side-by-side.',
  alternates: {
    canonical: '/products/comparison'
  },
  keywords: ['SOC 2 comparison', 'template comparison', 'bundle comparison', 'compliance package comparison', 'pricing comparison'],
};

export default function ComparisonPage() {
  return <ComparisonClient />;
}