import type { Metadata } from 'next';
import { CertificateOfDestructionInternalTemplateClient } from './CertificateOfDestructionInternalTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Certificate of Destruction (Internal) Template',
    description: 'Certificate template for documenting secure destruction of media performed internally....',
    alternates: {
      canonical: '/products/certificate-of-destruction-internal-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function CertificateOfDestructionInternalTemplatePage() {
  return <CertificateOfDestructionInternalTemplateClient />;
}
