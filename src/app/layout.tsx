import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'SecurityDocs - SOC 2 Compliance Templates & Documentation',
    template: '%s | SecurityDocs'
  },
  description: 'Professional SOC 2 compliance templates, policies, and evidence explanations. Save months of work with battle-tested templates from security experts.',
  keywords: ['SOC 2', 'compliance templates', 'security policies', 'audit preparation', 'SOC 2 templates'],
  authors: [{ name: 'SecurityDocs' }],
  creator: 'SecurityDocs',
  publisher: 'SecurityDocs',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://security-docs.com',
    siteName: 'SecurityDocs',
    title: 'SecurityDocs - SOC 2 Compliance Templates',
    description: 'Professional SOC 2 compliance templates and documentation',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}