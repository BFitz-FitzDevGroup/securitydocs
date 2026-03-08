import type { Metadata } from 'next';
import { DocumentsClient } from './DocumentsClient';

export const metadata: Metadata = {
  title: 'SOC 2 Document Templates — Forms & Procedures',
  description: 'Download SOC 2 operational document templates including forms, checklists, and procedures. Plug-and-play docs to streamline your audit prep.',
  alternates: {
    canonical: '/products/documents'
  },
  keywords: ['SOC 2 documents', 'compliance forms', 'SOC 2 templates', 'operational documents', 'compliance procedures'],
};

export default function DocumentsPage() {
  return <DocumentsClient />;
}