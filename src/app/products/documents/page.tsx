import type { Metadata } from 'next';
import { DocumentsClient } from './DocumentsClient';

export const metadata: Metadata = {
  title: 'SOC 2 Document Templates - Forms & Procedures',
  description: 'Professional SOC 2 document templates including forms, checklists, procedures, and implementation guides. Essential operational documents for compliance.',
  alternates: {
    canonical: '/products/documents'
  },
  keywords: ['SOC 2 documents', 'compliance forms', 'SOC 2 templates', 'operational documents', 'compliance procedures'],
};

export default function DocumentsPage() {
  return <DocumentsClient />;
}