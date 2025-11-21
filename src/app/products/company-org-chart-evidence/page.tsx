import type { Metadata } from 'next';
import { CompanyOrgChartEvidenceClient } from './CompanyOrgChartEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Company Org Chart - Evidence Explanation',
    description: 'How to present organizational structure showing security roles and reporting lines....',
    alternates: {
      canonical: '/products/company-org-chart-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function CompanyOrgChartEvidencePage() {
  return <CompanyOrgChartEvidenceClient />;
}
