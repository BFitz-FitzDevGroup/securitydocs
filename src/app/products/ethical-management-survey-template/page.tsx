import type { Metadata } from 'next';
import { EthicalManagementSurveyTemplateClient } from './EthicalManagementSurveyTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ethical Management Survey Template',
    description: 'Survey template for assessing management commitment to ethical business practices....',
    alternates: {
      canonical: '/products/ethical-management-survey-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function EthicalManagementSurveyTemplatePage() {
  return <EthicalManagementSurveyTemplateClient />;
}
