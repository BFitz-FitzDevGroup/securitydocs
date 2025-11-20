import type { Metadata } from 'next';
import { CommonControlFailuresClient } from './CommonControlFailuresClient';

export const metadata: Metadata = {
  title: 'Common SOC 2 Control Failures - What Auditors Flag Most',
  description: 'Learn the most common SOC 2 audit findings and control failures that cause companies to fail audits. Discover how to identify and fix these issues before your audit.',
  alternates: {
    canonical: '/resources/common-control-failures'
  },
  keywords: ['SOC 2 failures', 'audit findings', 'control failures', 'SOC 2 mistakes', 'audit remediation'],
};

export default function CommonControlFailuresPage() {
  return <CommonControlFailuresClient />;
}