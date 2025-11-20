import type { Metadata } from 'next';
import { HealthcareGuideClient } from './HealthcareGuideClient';

export const metadata: Metadata = {
  title: 'SOC 2 for Healthcare Technology - HealthTech Compliance Guide',
  description: 'SOC 2 implementation guide for healthcare technology companies. Understand HIPAA overlap, PHI requirements, and healthcare-specific security controls.',
  alternates: {
    canonical: '/resources/implementation-guides/healthcare'
  },
  keywords: ['HealthTech SOC 2', 'healthcare compliance', 'HIPAA SOC 2', 'medical software security', 'healthcare SOC 2'],
};

export default function HealthcareGuidePage() {
  return <HealthcareGuideClient />;
}