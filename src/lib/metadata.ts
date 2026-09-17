import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Random Name Generator',
  domain: 'randomnamegenerator.dev',
  url: 'https://randomnamegenerator.dev',
  defaultTitle: 'Random Name Generator - Generate Random Names',
  defaultDescription: 'Generate random names instantly for characters, stories, games, usernames, businesses, and more. Choose your style, gender, origin, and number of names.',
  creator: 'Random Name Generator Team',
};

export function constructMetadata({
  title = SITE_CONFIG.defaultTitle,
  description = SITE_CONFIG.defaultDescription,
  path = '',
  keywords = [
    'random name generator',
    'name generator',
    'random names',
    'character name generator',
    'fantasy name generator',
    'username generator',
    'random full name generator',
    'baby name generator',
    'business name generator',
  ],
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
} = {}): Metadata {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const canonicalUrl = `${SITE_CONFIG.url}${cleanPath}${cleanPath.endsWith('/') || cleanPath === '' ? '' : '/'}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_CONFIG.creator }],
    creator: SITE_CONFIG.creator,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${SITE_CONFIG.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_CONFIG.url}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon-48x48.png', type: 'image/png', sizes: '48x48' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
  };
}
