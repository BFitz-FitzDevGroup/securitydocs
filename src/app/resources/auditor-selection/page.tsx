import type { Metadata } from 'next';
import { AuditorSelectionClient } from './AuditorSelectionClient';

export const metadata: Metadata = {
  title: 'How to Choose a SOC 2 Auditor - Selection Guide',
  description: 'Expert guide to selecting the right SOC 2 auditor for your organization. Compare audit firms, understand pricing, and learn key questions to ask during the selection process.',
  alternates: {
    canonical: '/resources/auditor-selection'
  },
  keywords: ['SOC 2 auditor', 'choosing audit firm', 'SOC 2 CPA', 'auditor selection', 'audit firm comparison'],
};

export default function AuditorSelectionPage() {
  return <AuditorSelectionClient />;
}