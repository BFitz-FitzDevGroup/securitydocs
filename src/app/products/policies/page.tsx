import type { Metadata } from 'next';
import { PoliciesClient } from './PoliciesClient';

export const metadata: Metadata = {
  title: 'SOC 2 Policy Templates - Information Security Policies',
  description: 'Professional SOC 2 policy templates covering all Trust Service Criteria. Includes information security, access control, incident response, risk management, and more.',
  alternates: {
    canonical: '/products/policies'
  },
  keywords: ['SOC 2 policies', 'security policy templates', 'compliance policies', 'information security policies', 'policy templates'],
};

export default function PoliciesPage() {
  return <PoliciesClient />;
}