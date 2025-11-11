export interface Product {
  id: string;
  name: string;
  slug: string;
  type: 'policy' | 'document' | 'evidence';
  price: number;
  originalPrice: number;
  fileName: string;
  description: string;
  soc2Criteria: string[];
  bundleMemberships: string[];
  relatedProducts: string[];
  features: string[];
}

export interface Bundle {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  savings: number;
  description: string;
  includes: string[];
  productCount: number;
}

export const bundles: Bundle[] = [
  {
    id: 'complete',
    name: 'Complete Bundle',
    price: 549.95,
    originalPrice: 1150.00,
    savings: 600.05,
    description: 'Everything you need for SOC 2 compliance',
    includes: ['All 15 Policy Templates', 'All 22 Document Templates', 'All 40 Evidence Explanations', 'SOC 2 Control Mapping'],
    productCount: 77
  },
  {
    id: 'policy',
    name: 'Policy Bundle', 
    price: 129.95,
    originalPrice: 225.00,
    savings: 95.05,
    description: 'Essential policies for SOC 2 compliance',
    includes: ['All 15 Policy Templates', 'Implementation Guides'],
    productCount: 15
  },
  {
    id: 'document',
    name: 'Document Bundle',
    price: 199.95, 
    originalPrice: 325.00,
    savings: 125.05,
    description: 'Process documentation and forms',
    includes: ['All 22 Document Templates', 'Implementation Guidance'],
    productCount: 22
  },
  {
    id: 'evidence',
    name: 'Evidence Bundle',
    price: 349.95,
    originalPrice: 600.00, 
    savings: 250.05,
    description: 'Complete audit preparation guidance',
    includes: ['All 40 Evidence Explanations', 'Audit Preparation Checklist'],
    productCount: 40
  }
];

// Sample products - this will be populated with all 77 from our structure database
export const products: Product[] = [
  {
    id: 'access-control-policy',
    name: 'Access Control Policy Template',
    slug: 'access-control-policy',
    type: 'policy',
    price: 14.95,
    originalPrice: 19.99,
    fileName: 'AccessControlPolicy.docx',
    description: 'Professional access control policy addressing SOC 2 CC6.1-6.3. Includes password policies, MFA requirements, and access reviews.',
    soc2Criteria: ['CC6.1', 'CC6.2', 'CC6.3'],
    bundleMemberships: ['complete', 'policy'],
    relatedProducts: ['access-request-ticket-form', 'access-review-completed-evidence'],
    features: [
      'Complete Access Control Framework',
      'Detailed Password Policy', 
      'Access Review Procedures',
      'Segregation of Duties'
    ]
  },
  {
    id: 'access-request-ticket-form',
    name: 'Access Request Ticket Form Template',
    slug: 'access-request-ticket-form', 
    type: 'document',
    price: 14.95,
    originalPrice: 19.99,
    fileName: 'AccessRequestTicketFormTemplateDocument.docx',
    description: 'Standardized access request form for implementing access control procedures.',
    soc2Criteria: ['CC6.2'],
    bundleMemberships: ['complete', 'document'],
    relatedProducts: ['access-control-policy', 'access-review-ticket-form'],
    features: [
      'Standardized Request Process',
      'Approval Workflow',
      'Access Justification Fields'
    ]
  }
  // ... rest of products will be added from our structure database
];

// Helper functions
export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(productId: string): Product[] {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  return product.relatedProducts
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as Product[];
}

export function getBundle(bundleId: string): Bundle | undefined {
  return bundles.find(b => b.id === bundleId);
}

export function getProductsByType(type: Product['type']): Product[] {
  return products.filter(p => p.type === type);
}
