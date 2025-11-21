import type { Metadata } from 'next';
import { VendorSecurityAssessmentQuestionnaireClient } from './VendorSecurityAssessmentQuestionnaireClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Vendor Security Assessment Questionnaire',
    description: 'Questionnaire for assessing vendor security practices and controls....',
    alternates: {
      canonical: '/products/vendor-security-assessment-questionnaire'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function VendorSecurityAssessmentQuestionnairePage() {
  return <VendorSecurityAssessmentQuestionnaireClient />;
}
