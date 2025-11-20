import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'

export default function BlogPostNotFound() {
  return (
    <PageLayout
      title="Coming Soon"
      description="This guide is being crafted"
    >
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We're working on this comprehensive guide right now. It'll be ready soon.
        </p>
        <Link 
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ← Browse Available Guides
        </Link>
      </div>
    </PageLayout>
  )
}