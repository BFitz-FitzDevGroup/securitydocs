import type { Metadata } from 'next';
import { CustomerDataDeletionRecordEvidenceClient } from './CustomerDataDeletionRecordEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Customer Data Deletion Record - Evidence Explanation',
    description: 'Documentation requirements for customer data deletion requests and retention....',
    alternates: {
      canonical: '/products/customer-data-deletion-record-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function CustomerDataDeletionRecordEvidencePage() {
  return <CustomerDataDeletionRecordEvidenceClient />;
}
