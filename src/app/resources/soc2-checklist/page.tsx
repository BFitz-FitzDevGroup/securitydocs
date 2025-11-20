import type { Metadata } from 'next';
import { SOC2ChecklistClient } from './SOC2ChecklistClient';

export const metadata: Metadata = {
  title: 'Complete SOC 2 Compliance Checklist - Step-by-Step Guide',
  description: 'Free comprehensive SOC 2 compliance checklist covering all requirements from policies to evidence collection. Download our printable checklist to track your progress.',
  alternates: {
    canonical: '/resources/soc2-checklist'
  },
  keywords: ['SOC 2 checklist', 'compliance checklist', 'SOC 2 requirements', 'audit preparation checklist', 'SOC 2 readiness'],
};

export default function SOC2ChecklistPage() {
  return <SOC2ChecklistClient />;
}