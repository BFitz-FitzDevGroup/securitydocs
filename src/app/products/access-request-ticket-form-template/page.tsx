import type { Metadata } from 'next';
import { AccessRequestTicketFormTemplateClient } from './AccessRequestTicketFormTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Access Request Ticket Form Template',
    description: 'Standardized form for requesting system and data access with manager approval workflow....',
    alternates: {
      canonical: '/products/access-request-ticket-form-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function AccessRequestTicketFormTemplatePage() {
  return <AccessRequestTicketFormTemplateClient />;
}
