import type { Metadata } from 'next';
import { RiskScenarioIdentificationTemplateClient } from './RiskScenarioIdentificationTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Risk Scenario Identification Template',
    description: 'Template for identifying and documenting potential risk scenarios. Includes instructions and Excel template....',
    alternates: {
      canonical: '/products/risk-scenario-identification-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function RiskScenarioIdentificationTemplatePage() {
  return <RiskScenarioIdentificationTemplateClient />;
}
