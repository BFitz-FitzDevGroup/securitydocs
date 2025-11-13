import React from 'react';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export default function DisclaimerFooter() {
  return (
    <div className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Disclaimer */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3">
            <Scale className="w-6 h-6 text-slate-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
               Legal Disclaimer: These templates are starting points that require customization. Learn more about our <Link href="/legal" className="text-slate-400 hover:text-slate-600 transition-colors">legal disclaimer →</Link>
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}