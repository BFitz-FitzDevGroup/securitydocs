import type { Metadata } from 'next';
import { SOC2GlossaryClient } from './SOC2GlossaryClient';

export const metadata: Metadata = {
  title: 'SOC 2 Terminology Glossary - Key Terms Defined',
  description: 'Comprehensive glossary of SOC 2 compliance terms and definitions. Understand Trust Service Criteria, control objectives, and audit terminology in plain English.',
  alternates: {
    canonical: '/resources/soc2-glossary'
  },
  keywords: ['SOC 2 glossary', 'compliance terms', 'SOC 2 definitions', 'audit terminology', 'Trust Service Criteria'],
};

export default function SOC2GlossaryPage() {
  return <SOC2GlossaryClient />;
}