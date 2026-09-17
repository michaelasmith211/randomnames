import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://randomnamegenerator.dev/sitemap.xml',
    host: 'https://randomnamegenerator.dev',
  };
}
