import type { Metadata } from 'next';
import { FinancialGuideClient } from './FinancialGuideClient';

export const metadata: Metadata = {
  title: 'SOC 2 for Financial Services - FinTech Implementation Guide',
  description: 'SOC 2 compliance guide for FinTech and financial services companies. Navigate overlapping requirements with PCI DSS, GLBA, and banking regulations.',
  alternates: {
    canonical: '/resources/implementation-guides/financial'
  },
  keywords: ['FinTech SOC 2', 'financial services compliance', 'banking security', 'FinTech compliance', 'financial SOC 2'],
};

export default function FinancialGuidePage() {
  return <FinancialGuideClient />;
}