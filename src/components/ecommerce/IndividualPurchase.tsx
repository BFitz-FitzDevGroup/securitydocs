import React from 'react';
import { Clock, FileText, Users, Download } from 'lucide-react';
import { Product } from '@/lib/products';
import { PurchaseButton } from './PurchaseButton';

interface IndividualPurchaseProps {
  product: Product;
}

export const IndividualPurchase: React.FC<IndividualPurchaseProps> = ({ product }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-slate-900 mb-4">Individual Purchase</h3>
      
      <div className="flex items-center justify-center mb-4">
        <span className="text-3xl font-bold text-slate-900">${product.price}</span>
        <span className="text-lg text-slate-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
      </div>
      
      <PurchaseButton 
        type="product"
        productId={product.id}
        price={product.price}
        label="Buy This Template"
        variant="outline"
        fullWidth
        className="mb-4"
      />
      
      <ul className="text-sm text-slate-600 space-y-2">
        <li className="flex items-center">
          <Download className="w-4 h-4 text-slate-500 mr-2" />
          Instant download
        </li>
        <li className="flex items-center">
          <Clock className="w-4 h-4 text-slate-500 mr-2" />
          3-download limit
        </li>
        <li className="flex items-center">
          <FileText className="w-4 h-4 text-slate-500 mr-2" />
          Microsoft Word format
        </li>
        <li className="flex items-center">
          <Users className="w-4 h-4 text-slate-500 mr-2" />
          Email support included
        </li>
      </ul>
    </div>
  );
};