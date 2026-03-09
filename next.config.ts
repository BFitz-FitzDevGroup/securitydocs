import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/taking-baby-steps-toward-soc-2-compliance/:path*',
        destination: '/blog/soc2-preparation-90-days',
        permanent: true,
      },
      {
        source: '/blog/soc2-for-healthtech',
        destination: '/blog/soc2-for-healthcare',
        permanent: true,
      },
      {
        source: '/blog/90-day-soc2-preparation-guide',
        destination: '/blog/soc2-preparation-90-days',
        permanent: true,
      },
      {
        source: '/blog/soc2-cost-breakdown',
        destination: '/blog/soc2-compliance-costs',
        permanent: true,
      },
      {
        source: '/blog/soc2-type-ii-audit-timeline',
        destination: '/blog/soc2-type2-timeline',
        permanent: true,
      },
      {
        source: '/blog/fintech-compliance-soc2-pci',
        destination: '/blog/soc2-for-fintech',
        permanent: true,
      },
      {
        source: '/blog/compliance-certifications-comparison',
        destination: '/blog/compliance-certification-comparison',
        permanent: true,
      },
      {
        source: '/blog/choose-soc2-auditor-guide',
        destination: '/blog/how-to-choose-soc2-auditor',
        permanent: true,
      },
      {
        source: '/blog/healthtech-hipaa-soc2-requirements',
        destination: '/blog/soc2-for-healthtech',
        permanent: true,
      },
      {
        source: '/resources/common-failures',
        destination: '/resources/common-control-failures',
        permanent: true,
      },
      {
        source: '/blog/soc2-roi-analysis',
        destination: '/blog/soc2-compliance-costs',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here if needed in the future
});

export default withMDX(nextConfig);