import type { Metadata } from 'next';
import { CostCalculatorClient } from './CostCalculatorClient';

export const metadata: Metadata = {
  title: 'SOC 2 Cost Calculator - Estimate Your Compliance Budget',
  description: 'Free SOC 2 cost calculator. Get a personalized estimate for your compliance project including audit fees, tools, internal effort, and timeline based on your company size and requirements.',
  alternates: {
    canonical: '/resources/cost-calculator'
  },
  keywords: ['SOC 2 cost', 'compliance cost calculator', 'SOC 2 budget', 'audit cost estimate', 'SOC 2 pricing'],
};

export default function CostCalculatorPage() {
  return <CostCalculatorClient />;
}