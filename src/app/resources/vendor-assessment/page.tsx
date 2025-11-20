import type { Metadata } from 'next';
import { VendorAssessmentClient } from './VendorAssessmentClient';

export const metadata: Metadata = {
  title: 'SOC 2 Vendor Security Assessment Guide',
  description: 'Comprehensive guide to assessing third-party vendors for SOC 2 compliance. Includes questionnaires, risk evaluation criteria, and vendor management best practices.',
  alternates: {
    canonical: '/resources/vendor-assessment'
  },
  keywords: ['vendor assessment', 'third-party risk', 'vendor security', 'SOC 2 vendors', 'supplier evaluation'],
};

export default function VendorAssessmentPage() {
  return <VendorAssessmentClient />;
}