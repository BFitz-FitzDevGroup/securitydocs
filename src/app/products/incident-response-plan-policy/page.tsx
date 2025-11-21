import type { Metadata } from 'next';
import { IncidentResponsePlanPolicyClient } from './IncidentResponsePlanPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Incident Response Plan',
    description: 'Detailed incident response procedures for detecting, responding to, and recovering from security incidents. Includes enterprise, SMB, implementation w...',
    alternates: {
      canonical: '/products/incident-response-plan-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function IncidentResponsePlanPolicyPage() {
  return <IncidentResponsePlanPolicyClient />;
}
