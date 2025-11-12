import React from 'react';
import { getProduct, getBundle, packages } from '@/lib/products';

interface PurchaseButtonProps {
  type: 'product' | 'bundle' | 'package';
  productId?: string;
  bundleId?: string;
  packageId?: string;
  price: number;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

export const PurchaseButton: React.FC<PurchaseButtonProps> = ({
  type,
  productId,
  bundleId,
  packageId,
  price,
  label,
  variant = 'primary',
  fullWidth = false,
  className = '',
  disabled = false
}) => {
  const getCheckoutUrl = () => {
    if (type === 'product' && productId) {
      const product = getProduct(productId);
      return product?.checkoutUrl;
    }
    if (type === 'bundle' && bundleId) {
      const bundle = getBundle(bundleId);
      return bundle?.checkoutUrl;
    }
    if (type === 'package' && packageId) {
      const pkg = packages.find(p => p.id === packageId);
      return pkg?.checkoutUrl;
    }
    return null;
  };

  const handlePurchase = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Checkout URL not found for:', { type, productId, bundleId, packageId });
    }
  };

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={handlePurchase}
      disabled={disabled}
      className={`
        ${variantStyles[variant]}
        ${widthClass}
        ${className}
        px-6 py-3 rounded-lg font-semibold
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      `}
    >
      {label}
    </button>
  );
};