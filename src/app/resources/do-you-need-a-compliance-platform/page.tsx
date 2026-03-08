import type { Metadata } from 'next';
import { CompliancePlatformClient } from './CompliancePlatformClient';

export const metadata: Metadata = {
  title: 'Do You Need a SOC 2 Compliance Platform? Vanta, Drata & Alternatives Compared',
  description: 'Honest comparison of SOC 2 compliance platforms vs. templates. Learn exactly when Vanta or Drata is worth $15-40k/year — and when it isn\'t.',
  alternates: {
    canonical: '/resources/do-you-need-a-compliance-platform'
  },
  keywords: ['Vanta alternative', 'Drata alternative', 'SOC 2 compliance platform', 'Vanta pricing', 'Drata pricing', 'Secureframe pricing', 'SOC 2 templates vs platform'],
};

export default function CompliancePlatformPage() {
  return <CompliancePlatformClient />;
}
