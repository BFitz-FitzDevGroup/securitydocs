import type { Metadata } from 'next';
import { AcceptableUsePolicyClient } from './AcceptableUsePolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Acceptable Use Policy',
    description: 'Employee acceptable use policy defining appropriate use of company systems, data, and resources. Includes enterprise, SMB, implementation workbook, an...',
    alternates: {
      canonical: '/products/acceptable-use-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function AcceptableUsePolicyPage() {
  return <AcceptableUsePolicyClient />;
}
