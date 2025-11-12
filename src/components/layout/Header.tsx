"use client"
import React, { useState } from 'react';
import { Menu, X, Shield, ChevronDown, FileText, Download, File } from 'lucide-react';

const SecurityDocsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white relative">
      {/* Top announcement bar */}
      <div className="bg-emerald-600 text-white text-center py-2 px-4 text-sm">
        <span className="font-medium">SOC 2 Document Templates</span> - Get compliant faster with proven templates and guidance
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">SecurityDocs</div>
              <div className="text-xs text-slate-300 -mt-1">SOC 2 Compliance Templates</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-slate-200 hover:text-white transition-colors">
                <span>Templates</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200">
                    <div className="py-2">
                      <a href="/products/policies" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors">
                        <Shield className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-medium">Policy Templates</div>
                          <div className="text-xs text-slate-500">Ready-to-use SOC 2 policies</div>
                        </div>
                      </a>
                      <a href="/products/documents" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors">
                        <File className="w-5 h-5 text-emerald-600 mr-3" />
                        <div>
                          <div className="font-medium">Documents & Forms</div>
                          <div className="text-xs text-slate-500">Essential documentation templates</div>
                        </div>
                      </a>
                      <a href="/products/evidence" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors">
                        <Download className="w-5 h-5 text-amber-600 mr-3" />
                        <div>
                          <div className="font-medium">Evidence Explanations</div>
                          <div className="text-xs text-slate-500">Clear guidance for audit evidence</div>
                        </div>
                      </a>
                      <a href="/products/bundles" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors border-t border-slate-200">
                        <FileText className="w-5 h-5 text-purple-600 mr-3" />
                        <div>
                          <div className="font-medium">Complete Bundles</div>
                          <div className="text-xs text-slate-500">Save with bundle packages</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/resources" className="text-slate-200 hover:text-white transition-colors">
              Resources
            </a>
            <a href="/resources/soc2-primer" className="text-slate-200 hover:text-white transition-colors">
              SOC 2 Primer
            </a>
            <a href="/about" className="text-slate-200 hover:text-white transition-colors">
              About
            </a>

            {/* CTA Button */}
            <a 
              href="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              View Templates
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-200 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-2 mb-4">
            <div className="px-4 py-2 space-y-3">
              <a href="/products" className="block text-slate-200 hover:text-white py-2 transition-colors">
                All Templates
              </a>
              <a href="/products/policies" className="block text-slate-200 hover:text-white py-2 transition-colors pl-4">
                Policy Templates
              </a>
              <a href="/products/documents" className="block text-slate-200 hover:text-white py-2 transition-colors pl-4">
                Documents & Forms
              </a>
              <a href="/products/evidence" className="block text-slate-200 hover:text-white py-2 transition-colors pl-4">
                Evidence Explanations
              </a>
              <a href="/products/bundles" className="block text-slate-200 hover:text-white py-2 transition-colors pl-4">
                Bundles
              </a>
              <a href="/resources/soc2-primer" className="block text-slate-200 hover:text-white py-2 transition-colors">
                SOC 2 Primer
              </a>
              <a href="/about" className="block text-slate-200 hover:text-white py-2 transition-colors">
                About
              </a>
              <div className="pt-2">
                <a 
                  href="/products" 
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  View Templates
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Export both patterns to support different import styles
export { SecurityDocsHeader as Header };
export default SecurityDocsHeader;
