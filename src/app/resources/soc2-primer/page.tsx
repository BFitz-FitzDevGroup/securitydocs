import type { Metadata } from 'next';
import { SOC2PrimerClient } from './SOC2PrimerClient';

export const metadata: Metadata = {
  title: 'SOC 2 Compliance Primer - Complete Beginner\'s Guide',
  description: 'Comprehensive introduction to SOC 2 compliance for beginners. Learn what SOC 2 is, who needs it, the five Trust Service Criteria, and how to get started with certification.',
  alternates: {
    canonical: '/resources/soc2-primer'
  },
  keywords: ['SOC 2 guide', 'SOC 2 basics', 'what is SOC 2', 'SOC 2 for beginners', 'compliance introduction'],
};

export default function SOC2PrimerPage() {
  return <SOC2PrimerClient />;
}