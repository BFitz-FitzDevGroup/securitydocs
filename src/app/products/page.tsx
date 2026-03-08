import type { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';

export const metadata: Metadata = {
  title: 'SOC 2 Compliance Templates & Bundles',
  description: 'Browse ready-to-use SOC 2 policy, document, and evidence templates. Buy individually or save with bundled packages for full audit coverage.',
  alternates: {
    canonical: '/products'
  },
  keywords: ['SOC 2 templates', 'compliance templates', 'SOC 2 products', 'audit templates', 'compliance documentation'],
};

export default function ProductsPage() {
  return <ProductsClient />;
}