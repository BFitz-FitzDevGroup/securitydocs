import type { Metadata } from 'next';
import { VendorInventoryTemplateClient } from './VendorInventoryTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Vendor Inventory Template',
    description: 'Template for tracking third-party vendors and service providers....',
    alternates: {
      canonical: '/products/vendor-inventory-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function VendorInventoryTemplatePage() {
  return <VendorInventoryTemplateClient />;
}
