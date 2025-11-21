import type { Metadata } from 'next';
import { DocumentBundleClient } from './DocumentBundleClient';

export const metadata: Metadata = {
  title: 'SOC 2 Document Bundle - All Forms & Procedures (38 Templates)',
  description: 'All 38 essential forms, procedures, and document templates for SOC 2 compliance. Save $318 with this comprehensive document bundle.',
  alternates: {
    canonical: '/products/document-bundle'
  },
  keywords: ['SOC 2 documents', 'compliance forms', 'SOC 2 procedures', 'document templates', 'SOC 2 forms bundle'],
};

export default function DocumentBundlePage() {
  return <DocumentBundleClient />;
}