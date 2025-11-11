import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showBreadcrumb?: boolean;
  breadcrumbPath?: Array<{label: string, href: string}>;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showBreadcrumb = false, 
  breadcrumbPath = [] 
}) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {showBreadcrumb && breadcrumbPath.length > 0 && (
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-slate-600">
              {breadcrumbPath.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2">/</span>}
                  {index === breadcrumbPath.length - 1 ? (
                    <span className="text-slate-900">{item.label}</span>
                  ) : (
                    <a href={item.href} className="hover:text-blue-600">{item.label}</a>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};