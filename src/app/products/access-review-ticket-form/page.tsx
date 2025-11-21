import type { Metadata } from 'next';
import { AccessReviewTicketFormClient } from './AccessReviewTicketFormClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Access Review Ticket Form',
    description: 'Form for periodic access reviews to ensure appropriate user permissions. Includes instructions and Excel template....',
    alternates: {
      canonical: '/products/access-review-ticket-form'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function AccessReviewTicketFormPage() {
  return <AccessReviewTicketFormClient />;
}
