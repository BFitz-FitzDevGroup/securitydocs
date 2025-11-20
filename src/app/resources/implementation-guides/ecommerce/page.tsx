import type { Metadata } from 'next';
import { EcommerceGuideClient } from './EcommerceGuideClient';

export const metadata: Metadata = {
  title: 'SOC 2 for E-commerce Companies - Implementation Guide',
  description: 'SOC 2 compliance guide for online retailers and e-commerce platforms. Address payment processing, customer data protection, and platform-specific requirements.',
  alternates: {
    canonical: '/resources/implementation-guides/ecommerce'
  },
  keywords: ['e-commerce SOC 2', 'online retail compliance', 'e-commerce security', 'payment compliance', 'retail SOC 2'],
};

export default function EcommerceGuidePage() {
  return <EcommerceGuideClient />;
}