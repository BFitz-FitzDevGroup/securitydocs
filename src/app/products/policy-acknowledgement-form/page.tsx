import type { Metadata } from 'next';
import { PolicyAcknowledgementFormClient } from './PolicyAcknowledgementFormClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Policy Acknowledgement Form',
    description: 'Form for employees to acknowledge receipt and understanding of company policies....',
    alternates: {
      canonical: '/products/policy-acknowledgement-form'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function PolicyAcknowledgementFormPage() {
  return <PolicyAcknowledgementFormClient />;
}
