import type { Metadata } from 'next';
import { SOC2PrimerClient } from './SOC2PrimerClient';

export const metadata: Metadata = {
  title: 'SOC 2 Compliance Guide for Beginners',
  description: 'Learn what SOC 2 is, who needs it, and the five Trust Service Criteria. Start your compliance journey with this plain-English primer.',
  alternates: {
    canonical: '/resources/soc2-primer'
  },
  keywords: ['SOC 2 guide', 'SOC 2 basics', 'what is SOC 2', 'SOC 2 for beginners', 'compliance introduction'],
};

export default function SOC2PrimerPage() {
  return <SOC2PrimerClient />;
}