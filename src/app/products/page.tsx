import type { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';

export const metadata: Metadata = {
  title: 'SOC 2 Templates & Bundles - Compliance Documentation',
  description: 'Professional SOC 2 compliance templates including policies, documents, and evidence explanations. Choose individual templates or save with comprehensive bundles.',
  alternates: {
    canonical: '/products'
  },
  keywords: ['SOC 2 templates', 'compliance templates', 'SOC 2 products', 'audit templates', 'compliance documentation'],
};

export default function ProductsPage() {
  return <ProductsClient />;
}