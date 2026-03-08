import type { Metadata } from 'next';
import { PoliciesClient } from './PoliciesClient';

export const metadata: Metadata = {
  title: 'SOC 2 Policy Templates — All TSC Covered',
  description: 'Get professionally written SOC 2 policy templates for access control, incident response, risk management, and every Trust Service Criteria.',
  alternates: {
    canonical: '/products/policies'
  },
  keywords: ['SOC 2 policies', 'security policy templates', 'compliance policies', 'information security policies', 'policy templates'],
};

export default function PoliciesPage() {
  return <PoliciesClient />;
}