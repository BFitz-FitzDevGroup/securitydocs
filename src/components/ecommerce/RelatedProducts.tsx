import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  products, 
  title = "Related Templates" 
}) => {
  if (!products.length) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium text-slate-900">{product.name}</h3>
              <span className="text-sm text-slate-500">${product.price}</span>
            </div>
            <p className="text-sm text-slate-600 mb-3">{product.description}</p>
            <Link 
              href={`/products/${product.slug}`}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View Template →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};