import type { Metadata } from 'next';
import { EarlyStageGuideClient } from './EarlyStageGuideClient';

export const metadata: Metadata = {
  title: 'SOC 2 for Early-Stage Startups - Implementation Guide',
  description: 'Budget-friendly SOC 2 compliance guide for seed and Series A startups. Learn how to achieve certification with limited resources and small teams.',
  alternates: {
    canonical: '/resources/implementation-guides/early-stage'
  },
  keywords: ['startup SOC 2', 'early stage compliance', 'seed stage SOC 2', 'startup security', 'bootstrap compliance'],
};

export default function EarlyStageGuidePage() {
  return <EarlyStageGuideClient />;
}