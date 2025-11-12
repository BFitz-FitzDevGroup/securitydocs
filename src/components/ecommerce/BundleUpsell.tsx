import React from 'react';
import { Check, Star } from 'lucide-react';
import { Bundle, Product, getBundle } from '@/lib/products';
import { PurchaseButton } from './PurchaseButton';

interface BundleUpsellProps {
  product: Product;
  primaryBundle?: string; // 'complete' | 'policy' | 'document' | 'evidence'
  compact?: boolean;
}

export const BundleUpsell: React.FC<BundleUpsellProps> = ({ 
  product, 
  primaryBundle = 'complete',
  compact = false 
}) => {
  const bundle = getBundle(primaryBundle);
  if (!bundle) return null;

  // Determine category bundle based on product type
  const categoryBundle = getBundle(product.type === 'policy' ? 'policy' : 
                                   product.type === 'document' ? 'document' : 'evidence');

  return (
    <div className="space-y-6">
      {/* Primary Bundle (Complete) */}
      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-amber-500 mr-2" />
          <span className="text-sm font-medium text-slate-700">Most Popular Choice</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">Get the {bundle.name}</h3>
        <p className="text-slate-600 mb-4">
          This template is included in our {bundle.name} with all {bundle.productCount}+ templates and explanations.
        </p>
        
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-600">Individual templates (10+):</span>
            <span className="font-medium text-slate-900">$149+</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-600">{bundle.name}:</span>
            <span className="font-bold text-emerald-600">${bundle.price}</span>
          </div>
          <div className="border-t border-slate-200 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900">You Save:</span>
              <span className="font-bold text-emerald-600">${bundle.savings.toFixed(2)}+</span>
            </div>
          </div>
        </div>
        
        <PurchaseButton 
          type="bundle" 
          bundleId={bundle.id}
          price={bundle.price}
          label={`Get ${bundle.name} - $${bundle.price}`}
          variant="primary"
          fullWidth
          className="mb-3"
        />
        
        <ul className="text-sm text-slate-600 space-y-1">
          {bundle.includes.map((item, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-4 h-4 text-emerald-600 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Category Bundle */}
      {categoryBundle && categoryBundle.id !== primaryBundle && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Just Need {categoryBundle.name.replace(' Bundle', 's')}?
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Get all {categoryBundle.productCount} {product.type} templates including this one
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-600">Individual {product.type}s ({categoryBundle.productCount}):</span>
            <span className="font-medium text-slate-900">${(categoryBundle.productCount * 14.95).toFixed(2)}+</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600">{categoryBundle.name}:</span>
            <span className="font-bold text-emerald-600">${categoryBundle.price}</span>
          </div>
          
          <PurchaseButton 
            type="bundle"
            bundleId={categoryBundle.id}
            price={categoryBundle.price}
            label={`Get ${categoryBundle.name} - Save $${categoryBundle.savings.toFixed(0)}`}
            variant="secondary"
            fullWidth
          />
        </div>
      )}
    </div>
  );
};