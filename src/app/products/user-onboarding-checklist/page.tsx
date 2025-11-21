import type { Metadata } from 'next';
import { UserOnboardingChecklistClient } from './UserOnboardingChecklistClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'User Onboarding Checklist',
    description: 'Checklist for secure employee onboarding and access provisioning....',
    alternates: {
      canonical: '/products/user-onboarding-checklist'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function UserOnboardingChecklistPage() {
  return <UserOnboardingChecklistClient />;
}
