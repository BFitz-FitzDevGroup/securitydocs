import type { Metadata } from 'next';
import { EvidenceBundleClient } from './EvidenceBundleClient';

export const metadata: Metadata = {
  title: 'SOC 2 Evidence Bundle - Complete Audit Preparation (43 Guides)',
  description: 'Complete audit preparation guide with 43 evidence explanations covering all SOC 2 requirements. Understand exactly what auditors expect and how to prepare. Save $313.',
  alternates: {
    canonical: '/products/evidence-bundle'
  },
  keywords: ['SOC 2 evidence bundle', 'audit preparation', 'evidence package', 'SOC 2 audit guide', 'complete evidence set'],
};

export default function EvidenceBundlePage() {
  return <EvidenceBundleClient />;
}