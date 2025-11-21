"use client"
import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Download, Filter, Check, FileText, Shield, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { products, bundles, Product, Bundle } from '@/lib/products';
import Link from 'next/link';

export function ComparisonClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'policy' | 'document' | 'evidence'>('all');
  const [selectedBundle, setSelectedBundle] = useState<'all' | 'complete' | 'policy' | 'document' | 'evidence'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'type'>('name');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(product => product.type === selectedType);
    }

    // Filter by bundle membership
    if (selectedBundle !== 'all') {
      filtered = filtered.filter(product => 
        product.bundleMemberships.includes(selectedBundle)
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedType, selectedBundle, sortBy]);

  const getTypeIcon = (type: Product['type']) => {
    switch (type) {
      case 'policy':
        return <FileText className="w-4 h-4 text-blue-600" />;
      case 'document':
        return <BookOpen className="w-4 h-4 text-emerald-600" />;
      case 'evidence':
        return <Download className="w-4 h-4 text-amber-600" />;
      default:
        return <Shield className="w-4 h-4 text-slate-600" />;
    }
  };

  const getTypeColor = (type: Product['type']) => {
    switch (type) {
      case 'policy':
        return 'bg-blue-100 text-blue-800';
      case 'document':
        return 'bg-emerald-100 text-emerald-800';
      case 'evidence':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/products' },
    { label: 'Product Comparison', href: '/products/comparison' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Complete Product Comparison
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Compare all {products.length} SOC 2 compliance templates and explanations. 
            Filter by type, bundle, or search for specific documents.
          </p>
          
          {/* Bundle Summary */}
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {bundles.map((bundle) => (
              <div key={bundle.id} className="bg-slate-50 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-slate-900 mb-1">{bundle.name}</h3>
                <p className="text-2xl font-bold text-emerald-600 mb-1">${bundle.price}</p>
                <p className="text-sm text-slate-600">{bundle.productCount} templates</p>
                <p className="text-xs text-emerald-600">Save ${bundle.savings.toFixed(0)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="policy">Policy Templates</option>
              <option value="document">Document Templates</option>
              <option value="evidence">Evidence Explanations</option>
            </select>

            {/* Bundle Filter */}
            <select
              value={selectedBundle}
              onChange={(e) => setSelectedBundle(e.target.value as any)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Bundles</option>
              <option value="complete">Complete Bundle</option>
              <option value="policy">Policy Bundle</option>
              <option value="document">Document Bundle</option>
              <option value="evidence">Evidence Bundle</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="type">Sort by Type</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Showing {filteredProducts.length} of {products.length} templates
            </p>
            {(searchTerm || selectedType !== 'all' || selectedBundle !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                  setSelectedBundle('all');
                }}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Template</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Type</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Price</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Bundles</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">SOC 2 Criteria</th>
                  <th className="text-right py-4 px-6 font-semibold text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50">
                    <td className="py-4 px-6">
                      <div>
                        <h3 className="font-medium text-slate-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {getTypeIcon(product.type)}
                        <span className={`ml-2 text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(product.type)}`}>
                          {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <span className="font-semibold text-slate-900">${product.price}</span>
                        <span className="text-sm text-slate-500 line-through ml-2">${product.originalPrice}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1">
                        {product.bundleMemberships.map((bundleId) => {
                          const bundle = bundles.find(b => b.id === bundleId);
                          return bundle ? (
                            <span key={bundleId} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {bundle.name.replace(' Bundle', '')}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1">
                        {product.soc2Criteria.slice(0, 3).map((criteria) => (
                          <span key={criteria} className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                            {criteria}
                          </span>
                        ))}
                        {product.soc2Criteria.length > 3 && (
                          <span className="text-xs text-slate-500">+{product.soc2Criteria.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No templates found</h3>
            <p className="text-slate-600 mb-4">Try adjusting your search terms or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedBundle('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-slate-900 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-6">
            Save time and money with our complete bundles, or purchase individual templates as needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Bundles
            </Link>
            <Link
              href="/contact"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};