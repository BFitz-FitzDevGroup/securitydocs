import type { Metadata } from 'next';
import { ConsultingServicesAgreementTemplateClient } from './ConsultingServicesAgreementTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Consulting Services Agreement Template',
    description: 'Legal agreement template for engaging consultants with security and confidentiality clauses....',
    alternates: {
      canonical: '/products/consulting-services-agreement-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function ConsultingServicesAgreementTemplatePage() {
  return <ConsultingServicesAgreementTemplateClient />;
}
