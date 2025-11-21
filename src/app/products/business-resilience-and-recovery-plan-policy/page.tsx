import type { Metadata } from 'next';
import { BusinessResilienceAndRecoveryPlanPolicyClient } from './BusinessResilienceAndRecoveryPlanPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Business Resilience and Recovery Plan',
    description: 'Comprehensive disaster recovery and business continuity plan template. Includes enterprise, SMB, implementation workbook, and quick reference guide....',
    alternates: {
      canonical: '/products/business-resilience-and-recovery-plan-policy'
    },
    keywords: ['SOC 2', 'compliance', 'policy', 'template', 'audit', 'security'],
  };
}

export default function BusinessResilienceAndRecoveryPlanPolicyPage() {
  return <BusinessResilienceAndRecoveryPlanPolicyClient />;
}
