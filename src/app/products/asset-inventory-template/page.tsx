import type { Metadata } from 'next';
import { AssetInventoryTemplateClient } from './AssetInventoryTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Asset Inventory Template',
    description: 'Template for tracking hardware, software, and data assets....',
    alternates: {
      canonical: '/products/asset-inventory-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function AssetInventoryTemplatePage() {
  return <AssetInventoryTemplateClient />;
}
