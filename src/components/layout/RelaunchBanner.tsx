'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export function RelaunchBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-slate-200 text-slate py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center text-sm">
          <span className="font-medium">🎉 Welcome to our newly redesigned site!</span>
          <span className="ml-2">If you notice any issues, please</span>
          <a 
            href="mailto:support@security-docs.com" 
            className="ml-1 underline hover:text-blue-700 font-medium"
          >
            let us know
          </a>
          <span>.</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-blue-700 rounded p-1 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}