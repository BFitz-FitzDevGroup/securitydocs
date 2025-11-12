import React from 'react';
import { Check, Package as PackageIcon } from 'lucide-react';
import { Product, getPackageForPolicy } from '@/lib/products';
import { PurchaseButton } from './PurchaseButton';

interface PackageUpsellProps {
  product: Product;
}

// Helper function to convert slug to proper title
const slugToTitle = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/Template$/, 'Template') // Keep "Template" capitalized
    .replace(/Checklist$/, 'Checklist') // Keep "Checklist" capitalized
    .replace(/Evidence$/, 'Evidence'); // Keep "Evidence" capitalized
};

export const PackageUpsell: React.FC<PackageUpsellProps> = ({ product }) => {
  // Only show for policies
  if (product.type !== 'policy') return null;
  
  const packageProduct = getPackageForPolicy(product.slug);
  if (!packageProduct) return null;

  // Parse includes if it's a JSON string, otherwise use as-is
  let includesList: string[] = [];
  if (typeof packageProduct.includes === 'string') {
    try {
      includesList = JSON.parse(packageProduct.includes);
    } catch {
      includesList = packageProduct.includes;
    }
  } else if (Array.isArray(packageProduct.includes)) {
    includesList = packageProduct.includes;
  }

  // Convert slugs to proper titles
  const formattedIncludes = includesList.map(slug => {
    // Remove quotes if present
    const cleanSlug = slug.replace(/["']/g, '');
    return slugToTitle(cleanSlug);
  });

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <PackageIcon className="w-5 h-5 text-emerald-600 mr-2" />
        <span className="text-sm font-medium text-slate-700">Complete Policy Package</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        {packageProduct.name}
      </h3>
      
      <p className="text-slate-600 mb-4 text-sm">
        Get this policy plus {packageProduct.itemCount - 1} related documents and evidence explanations in one complete package.
      </p>
      
      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-600 text-sm">Individual items:</span>
          <span className="font-medium text-slate-900">${packageProduct.originalPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-600 text-sm">{packageProduct.name}:</span>
          <span className="font-bold text-emerald-600">${packageProduct.price.toFixed(2)}</span>
        </div>
        <div className="border-t border-slate-200 pt-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-900 text-sm">You Save:</span>
            <span className="font-bold text-emerald-600">${packageProduct.savings.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <PurchaseButton 
        type="package" 
        packageId={packageProduct.id}
        price={packageProduct.price}
        label={`Get Complete Package - Save $${packageProduct.savings.toFixed(0)}`}
        variant="secondary"
        fullWidth
        className="mb-3"
      />
      
      <ul className="text-sm text-slate-600 space-y-1">
        {formattedIncludes.map((item, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};