import type { Metadata } from 'next';
import { ISPClient } from './ISPClient';

export const metadata: Metadata = {
  title: 'Free Information Security Policy Template — SOC 2 Ready',
  description: 'Download a free SOC 2 information security policy template for startups and SMBs. See the quality before you buy — no email required.',
  alternates: {
    canonical: '/resources/information-security-policy-template',
  },
  keywords: [
    'information security policy template',
    'free SOC 2 template',
    'security policy sample',
    'SOC 2 policy template',
    'information security policy',
    'free compliance template',
  ],
};

export default function InformationSecurityPolicyTemplatePage() {
  return <ISPClient />;
}
