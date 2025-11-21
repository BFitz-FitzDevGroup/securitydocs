import type { Metadata } from 'next';
import { CertificateOfDestructionExternalTemplateClient } from './CertificateOfDestructionExternalTemplateClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Certificate of Destruction (External) Template',
    description: 'Certificate template for documenting secure destruction of media by external vendors....',
    alternates: {
      canonical: '/products/certificate-of-destruction-external-template'
    },
    keywords: ['SOC 2', 'compliance', 'document', 'template', 'audit', 'security'],
  };
}

export default function CertificateOfDestructionExternalTemplatePage() {
  return <CertificateOfDestructionExternalTemplateClient />;
}
