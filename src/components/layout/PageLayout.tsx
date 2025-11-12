import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import DisclaimerFooter from '@/components/legal/DisclaimerFooter'; // Add this import

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  breadcrumbs?: Array<{label: string, href?: string}>;
  showBreadcrumb?: boolean;
  breadcrumbPath?: Array<{label: string, href: string}>;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ 
  children,
  title,
  description,
  breadcrumbs,
  showBreadcrumb = false, 
  breadcrumbPath = [] 
}) => {
  const finalBreadcrumbs = breadcrumbs || breadcrumbPath;
  const shouldShowBreadcrumb = showBreadcrumb || (breadcrumbs && breadcrumbs.length > 0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {shouldShowBreadcrumb && finalBreadcrumbs.length > 0 && (
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-slate-600">
              {finalBreadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2">/</span>}
                  {index === finalBreadcrumbs.length - 1 || !item.href ? (
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

      {(title || description) && (
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {title && (
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg text-slate-600">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
      
      <main className="flex-1 py-12">
        {children}
      </main>
      
      <DisclaimerFooter />  {/* Add this - appears before navigation footer */}
      <Footer />
    </div>
  );
};