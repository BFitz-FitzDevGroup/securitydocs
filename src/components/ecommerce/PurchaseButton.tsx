import React from 'react';

interface PurchaseButtonProps {
  type: 'product' | 'bundle';
  productId?: string;
  bundleId?: string;
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
  price,
  label,
  variant = 'primary',
  fullWidth = false,
  className = '',
  disabled = false
}) => {
  const handlePurchase = () => {
    // This will be replaced with actual Lemon Squeezy integration
    if (type === 'product' && productId) {
      console.log(`Purchase product: ${productId} for $${price}`);
      // window.location.href = `https://securitydocs.lemonsqueezy.com/checkout/buy/[PRODUCT_ID]`;
    } else if (type === 'bundle' && bundleId) {
      console.log(`Purchase bundle: ${bundleId} for $${price}`);
      // window.location.href = `https://securitydocs.lemonsqueezy.com/checkout/buy/[BUNDLE_ID]`;
    }
  };

  const baseClasses = "font-semibold transition-colors rounded-lg";
  const widthClasses = fullWidth ? "w-full" : "";
  const sizeClasses = "py-3 px-4";
  
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-blue-600 hover:bg-blue-700 text-white";
      break;
    case 'secondary':
      variantClasses = "bg-emerald-600 hover:bg-emerald-700 text-white";
      break;
    case 'outline':
      variantClasses = "bg-slate-600 hover:bg-slate-700 text-white";
      break;
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={handlePurchase}
      disabled={disabled}
      className={`${baseClasses} ${widthClasses} ${sizeClasses} ${variantClasses} ${disabledClasses} ${className}`}
    >
      {label}
    </button>
  );
};