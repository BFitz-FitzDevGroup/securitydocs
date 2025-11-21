import type { Metadata } from 'next';
import { AccessReviewCompletedClient } from './AccessReviewCompletedClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Access Review Completed - Evidence Explanation',
    description: 'Guidance on documenting and presenting completed access reviews to auditors....',
    alternates: {
      canonical: '/products/access-review-completed'
    },
    keywords: ['SOC 2', 'compliance', 'evidence', 'template', 'audit', 'security'],
  };
}

export default function AccessReviewCompletedPage() {
  return <AccessReviewCompletedClient />;
}
