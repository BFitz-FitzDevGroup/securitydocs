import type { Metadata } from 'next';
import { InformationSecurityRolesAndResponsibilitiesClient } from './InformationSecurityRolesAndResponsibilitiesClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Information Security Roles and Responsibilities',
    description: 'Defines security roles, responsibilities, and accountability throughout the organization. Includes enterprise, SMB, implementation workbook, and quick...',
    alternates: {
      canonical: '/products/information-security-roles-and-responsibilities'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function InformationSecurityRolesAndResponsibilitiesPage() {
  return <InformationSecurityRolesAndResponsibilitiesClient />;
}
