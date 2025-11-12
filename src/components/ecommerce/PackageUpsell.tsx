import React from 'react';
import { Check, Package as PackageIcon } from 'lucide-react';
import { Product, getPackageForPolicy } from '@/lib/products';
import { PurchaseButton } from './PurchaseButton';

interface PackageUpsellProps {
  product: Product;
}

export const PackageUpsell: React.FC<PackageUpsellProps> = ({ product }) => {
  // Only show for policies
  if (product.type !== 'policy') return null;
  
  const packageProduct = getPackageForPolicy(product.slug);
  if (!packageProduct) return null;

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
        productId={packageProduct.id}
        price={packageProduct.price}
        label={`Get Complete Package - Save $${packageProduct.savings.toFixed(0)}`}
        variant="secondary"
        fullWidth
        className="mb-3"
      />
      
      <ul className="text-sm text-slate-600 space-y-1">
        {packageProduct.includes.slice(0, 3).map((item, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
        {packageProduct.itemCount > 3 && (
          <li className="text-slate-500 italic ml-6">
            ... and {packageProduct.itemCount - 3} more items
          </li>
        )}
      </ul>
    </div>
  );
};
