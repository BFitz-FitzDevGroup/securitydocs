import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Security & Compliance Blog',
  description: 'Practical insights on SOC 2 compliance, security best practices, and tool reviews from real-world experience.',
  alternates: {
    canonical: '/blog'
  }
};

export const revalidate = 3600; // Rebuild every hour

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <PageLayout
      title="Security & Compliance Blog"
      description="Practical guidance on SOC 2 compliance and security best practices from real-world implementation experience"
      showBreadcrumb
      breadcrumbPath={breadcrumbPath}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Security & Compliance Blog
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical guidance on SOC 2 compliance and security best practices 
            from real-world implementation experience.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date + 'T12:00:00-08:00').toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          timeZone: 'America/Los_Angeles'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">
              Blog posts coming soon! We're working on comprehensive guides to help you 
              with SOC 2 compliance and security best practices.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}