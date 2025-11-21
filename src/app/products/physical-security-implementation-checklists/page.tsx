import type { Metadata } from 'next';
import { PhysicalSecurityImplementationChecklistsClient } from './PhysicalSecurityImplementationChecklistsClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Physical Security Implementation Checklists',
    description: 'Comprehensive checklists for implementing physical security controls....',
    alternates: {
      canonical: '/products/physical-security-implementation-checklists'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function PhysicalSecurityImplementationChecklistsPage() {
  return <PhysicalSecurityImplementationChecklistsClient />;
}
