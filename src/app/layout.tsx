import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { JsonLd } from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/metadata';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <JsonLd type="website" />
        <JsonLd type="webapp" />
        <JsonLd type="organization" />
        {/* Google Analytics GA4 (G-HT87NWEHNT) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HT87NWEHNT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HT87NWEHNT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
