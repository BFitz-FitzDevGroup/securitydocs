import type { Metadata } from 'next';
import { TimelineEstimatorClient } from './TimelineEstimatorClient';

export const metadata: Metadata = {
  title: 'SOC 2 Timeline Estimator - How Long Does Compliance Take?',
  description: 'Estimate how long your SOC 2 compliance project will take based on company size, current security posture, and scope. Get a realistic timeline for achieving certification.',
  alternates: {
    canonical: '/resources/timeline-estimator'
  },
  keywords: ['SOC 2 timeline', 'compliance timeline', 'how long SOC 2', 'audit timeline', 'SOC 2 duration'],
};

export default function TimelineEstimatorPage() {
  return <TimelineEstimatorClient />;
}