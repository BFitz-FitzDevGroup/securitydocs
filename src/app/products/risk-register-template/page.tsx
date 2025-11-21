import type { Metadata } from 'next';
import { RiskRegisterTemplateClient } from './RiskRegisterTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Risk Register Template',
    description: 'Template for tracking identified risks, assessments, and mitigation plans....',
    alternates: {
      canonical: '/products/risk-register-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function RiskRegisterTemplatePage() {
  return <RiskRegisterTemplateClient />;
}
