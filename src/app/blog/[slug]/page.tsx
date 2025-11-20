import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/layout/PageLayout';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  const breadcrumbPath = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];
  
  return (
    <PageLayout
      title={post.title}
      description={post.excerpt}
      showBreadcrumb
      breadcrumbPath={breadcrumbPath}
    >
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        {/* Article Header */}
        <header className="mb-8">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {post.title}
          </h1>
          
          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date + 'T12:00:00-08:00').toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  timeZone: 'America/Los_Angeles'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>
        
        {/* Article Content - MDX Rendered */}
        <div className="prose prose-lg prose-slate max-w-none
          prose-headings:font-semibold
          prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:my-4 prose-ul:space-y-2
          prose-li:text-slate-700
          prose-strong:text-slate-900 prose-strong:font-semibold
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-code:bg-slate-100 prose-code:text-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        ">
          <MDXRemote source={post.content} />
        </div>
        
        {/* Related Products CTA */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Need SOC 2 Templates?
          </h3>
          <p className="text-slate-700 mb-4">
            Save time with our professionally crafted SOC 2 compliance templates and documentation.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Browse Templates
          </Link>
        </div>
        
        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Posts
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}