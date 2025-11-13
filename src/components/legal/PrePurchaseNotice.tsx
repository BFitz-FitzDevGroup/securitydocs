import React from 'react';

interface PrePurchaseNoticeProps {
  productType?: 'policy' | 'document' | 'evidence' | 'bundle';
}

export default function PrePurchaseNotice({ productType = 'policy' }: PrePurchaseNoticeProps) {
  const getProductSpecificMessage = () => {
    switch (productType) {
      case 'bundle':
        return 'This bundle includes multiple templates and guides';
      case 'evidence':
        return 'This evidence explanation provides guidance on what auditors expect';
      case 'document':
        return 'This document template includes both the template and implementation instructions';
      case 'policy':
      default:
        return 'This policy template includes Enterprise, SMB, Workbook, and Implementation Guide versions';
    }
  };

  return (
  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
      <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Before You Purchase
    </h4>
    
    <div className="space-y-3 text-sm text-slate-700">
      <p>
        <strong className="text-slate-900">What You're Getting:</strong> {getProductSpecificMessage()}. 
        All templates are professionally formatted Microsoft Word documents (.docx) that you can immediately edit and customize.
      </p>

      <p>
        <strong className="text-slate-900">Customization Required:</strong> These are <em>starting point templates</em>, not turnkey solutions. 
        You must customize them to accurately reflect your organization's actual practices, systems, and security controls.
      </p>

      <p>
        <strong className="text-slate-900">Digital Product Policy:</strong> Due to the nature of digital downloads, 
        <strong> all sales are final</strong>. You'll receive immediate access to download your purchase (3 downloads allowed). 
        If you have questions or concerns, please <a href="mailto:support@security-docs.com" className="text-blue-600 hover:text-blue-700 underline">contact us</a> before purchasing.
      </p>

      <div className="bg-white border border-amber-200 rounded p-3 mt-3">
        <p className="text-xs text-slate-600 leading-relaxed">
          <strong>Disclaimer:</strong> SecurityDocs templates are educational resources and starting points for your compliance journey. 
          They do not constitute legal, accounting, or professional advice. Using these templates does not guarantee SOC 2 compliance 
          or audit success. You are responsible for ensuring your final documents meet all applicable requirements for your organization. 
          We recommend consulting with compliance professionals and your auditor.
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Instant download after purchase • Professional Word templates • 3 downloads included</span>
      </div>
    </div>
  </div>
);
}