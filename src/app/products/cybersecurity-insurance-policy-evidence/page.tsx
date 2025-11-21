import type { Metadata } from 'next';
import { CybersecurityInsurancePolicyEvidenceClient } from './CybersecurityInsurancePolicyEvidenceClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cybersecurity Insurance Policy - Evidence Explanation',
    description: 'Guidance on presenting cyber insurance as part of risk management strategy....',
    alternates: {
      canonical: '/products/cybersecurity-insurance-policy-evidence'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function CybersecurityInsurancePolicyEvidencePage() {
  return <CybersecurityInsurancePolicyEvidenceClient />;
}
