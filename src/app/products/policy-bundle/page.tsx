import type { Metadata } from 'next';
import { PolicyBundleClient } from './PolicyBundleClient';

export const metadata: Metadata = {
  title: 'SOC 2 Policy Bundle - All 19 Policy Templates (76 Files)',
  description: 'Complete collection of all 19 SOC 2 policy templates (76 total files with all variants) covering all Trust Service Criteria. Save $274 with this comprehensive policy bundle.',
  alternates: {
    canonical: '/products/policy-bundle'
  },
  keywords: ['SOC 2 policy bundle', 'security policies package', 'all policies', 'policy templates bundle', 'compliance policies'],
};

export default function PolicyBundlePage() {
  return <PolicyBundleClient />;
}