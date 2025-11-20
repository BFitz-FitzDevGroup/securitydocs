import React from 'react';
import { BookOpen, CheckCircle, Download, Shield, FileText, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">SecurityDocs</div>
                <div className="text-xs text-slate-300 -mt-1">SOC 2 Compliance Templates</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional SOC 2 compliance templates and guidance to help companies achieve certification faster.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Templates</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/policies" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Policy Templates
                </Link>
              </li>
              <li>
                <Link href="/products/documents" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Document Templates
                </Link>
              </li>
              <li>
                <Link href="/products/evidence" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Evidence Explanations
                </Link>
              </li>
              <li>
                <Link href="/products/bundles" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Complete Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/resources/soc2-primer" className="text-slate-400 hover:text-white transition-colors">
                  SOC 2 Primer
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/implementation-guides" className="text-slate-400 hover:text-white transition-colors">
                  Implementation Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/soc2-checklist" className="text-slate-400 hover:text-white transition-colors">
                  Compliance Checklist
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-slate-400 hover:text-white transition-colors">
                  Legal Information
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/refund-policy" className="text-slate-400 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@security-docs.com" 
                  className="text-slate-400 hover:text-white transition-colors flex items-center"
                >
                  support@security-docs.com
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 SecurityDocs. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-slate-400 text-sm">No subscription required</span>
            <span className="text-slate-400 text-sm">•</span>
            <span className="text-slate-400 text-sm">Instant download</span>
            <span className="text-slate-400 text-sm">•</span>
            <span className="text-slate-400 text-sm">Email support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};