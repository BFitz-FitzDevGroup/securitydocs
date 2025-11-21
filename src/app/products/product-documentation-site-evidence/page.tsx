import type { Metadata } from 'next';
import { ProductDocumentationSiteEvidenceClient } from './ProductDocumentationSiteEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Product Documentation Site - Evidence Explanation',
    description: 'How to demonstrate comprehensive product documentation and user guides....',
    alternates: {
      canonical: '/products/product-documentation-site-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function ProductDocumentationSiteEvidencePage() {
  return <ProductDocumentationSiteEvidenceClient />;
}
