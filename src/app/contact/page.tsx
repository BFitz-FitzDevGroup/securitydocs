import { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'

export const metadata: Metadata = {
  title: 'Contact Us | SecurityDocs',
  description: 'Get in touch with SecurityDocs for questions about our SOC 2 compliance templates and resources.',
}

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      description="Have questions? We're here to help."
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our SOC 2 compliance templates? Need help choosing the right bundle for your needs? 
            We're here to help.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:support@security-docs.com" 
                className="text-blue-600 hover:text-blue-700"
              >
                support@security-docs.com
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">
                We typically respond within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Quick Questions?</h2>
          <p className="text-gray-700 mb-4">
            Check out our <a href="/blog" className="text-blue-600 hover:text-blue-700 underline">blog</a> for 
            comprehensive guides on SOC 2 compliance, or browse our{' '}
            <a href="/products" className="text-blue-600 hover:text-blue-700 underline">products</a> to see 
            what's included in each bundle.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}