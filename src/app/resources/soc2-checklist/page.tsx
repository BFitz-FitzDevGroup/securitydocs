import type { Metadata } from 'next';
import { SOC2ChecklistClient } from './SOC2ChecklistClient';

export const metadata: Metadata = {
  title: 'Free SOC 2 Checklist Template — Download Now',
  description: 'Download our free SOC 2 compliance checklist. Track policies, controls, and evidence collection step-by-step to get audit-ready faster.',
  alternates: {
    canonical: '/resources/soc2-checklist'
  },
  keywords: ['SOC 2 checklist', 'compliance checklist', 'SOC 2 requirements', 'audit preparation checklist', 'SOC 2 readiness'],
};

export default function SOC2ChecklistPage() {
  return <SOC2ChecklistClient />;
}