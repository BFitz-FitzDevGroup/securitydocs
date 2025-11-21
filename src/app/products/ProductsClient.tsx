"use client";

import React, { useState, useMemo } from 'react';
import { Search, Filter, Package, FileText, Download, Shield, Check } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { getAllProducts, getAllBundles } from '@/lib/products';

export function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const allProducts = getAllProducts();
  const allBundles = getAllBundles();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'type') return a.type.localeCompare(b.type);
      return 0;
    });

    return filtered;
  }, [allProducts, selectedType, searchQuery, sortBy]);

  // Group by type
  const groupedProducts = {
    policy: filteredProducts.filter(p => p.type === 'policy'),
    document: filteredProducts.filter(p => p.type === 'document'),
    evidence: filteredProducts.filter(p => p.type === 'evidence')
  };

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/products' }
  ];

  return (
    <PageLayout showBreadcrumb breadcrumbPath={breadcrumbPath}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            SOC 2 Compliance Templates
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional templates and guidance to help you achieve SOC 2 compliance faster. 
            Choose individual templates or save with our comprehensive bundles.
          </p>
        </div>

        {/* Bundle Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Compare Our Bundles</h2>
          <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Bundle</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">What's Included</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Items</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Price</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Savings</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {allBundles.map((bundle) => (
                    <tr key={bundle.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-slate-900">{bundle.name}</div>
                          <div className="text-sm text-slate-600">{bundle.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-slate-600 space-y-1">
                          {bundle.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-center font-medium text-slate-900">
                        {bundle.productCount}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-emerald-600 text-lg">${bundle.price.toFixed(2)}</div>
                        <div className="text-sm text-slate-500 line-through">${bundle.originalPrice.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-emerald-600">
                        ${bundle.savings.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col gap-2">
                          <a
                            href={`/products/${bundle.id}-bundle`}
                            className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            View Details
                          </a>
                          <a
                            href={bundle.checkoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            Get Bundle
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType('policy')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedType === 'policy'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Policies
            </button>
            <button
              onClick={() => setSelectedType('document')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedType === 'document'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Documents
            </button>
            <button
              onClick={() => setSelectedType('evidence')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedType === 'evidence'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Evidence
            </button>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>

        {/* Results Summary */}
        <div className="mb-6 text-slate-600">
          Showing {filteredProducts.length} of {allProducts.length} templates
        </div>

        {/* Policies Section */}
        {(selectedType === 'all' || selectedType === 'policy') && groupedProducts.policy.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Policy Templates ({groupedProducts.policy.length})</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedProducts.policy.map((product) => (
                <a
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">${product.price.toFixed(2)}</div>
                      {product.originalPrice > product.price && (
                        <div className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                    {product.description.substring(0, 120)}...
                  </p>
                  {product.soc2Criteria && product.soc2Criteria.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {product.soc2Criteria.slice(0, 3).map((criteria, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                        >
                          {criteria}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Documents Section */}
        {(selectedType === 'all' || selectedType === 'document') && groupedProducts.document.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Document Templates ({groupedProducts.document.length})</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedProducts.document.map((product) => (
                <a
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <FileText className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">${product.price.toFixed(2)}</div>
                      {product.originalPrice > product.price && (
                        <div className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                    {product.description.substring(0, 120)}...
                  </p>
                  {product.soc2Criteria && product.soc2Criteria.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {product.soc2Criteria.slice(0, 3).map((criteria, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                        >
                          {criteria}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Evidence Section */}
        {(selectedType === 'all' || selectedType === 'evidence') && groupedProducts.evidence.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Download className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Evidence Explanations ({groupedProducts.evidence.length})</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedProducts.evidence.map((product) => (
                <a
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-amber-300 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <Download className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">${product.price.toFixed(2)}</div>
                      {product.originalPrice > product.price && (
                        <div className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                    {product.description.substring(0, 120)}...
                  </p>
                  {product.soc2Criteria && product.soc2Criteria.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {product.soc2Criteria.slice(0, 3).map((criteria, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                        >
                          {criteria}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg mb-4">No templates found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};