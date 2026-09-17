import React from 'react';

interface JsonLdProps {
  type?: 'website' | 'webapp' | 'faq';
  faqs?: { question: string; answer: string }[];
  title?: string;
  description?: string;
  url?: string;
}

export function JsonLd({ type = 'website', faqs, title, description, url }: JsonLdProps) {
  const currentUrl = url || 'https://randomnamegenerator.dev/';

  if (type === 'faq' && faqs && faqs.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    );
  }

  if (type === 'webapp') {
    const webAppSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: title || 'Random Name Generator',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      url: currentUrl,
      description: description || 'Instant client-side random name generator for characters, games, stories, usernames, and businesses.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Client-side random name generation',
        '20+ country and cultural naming datasets',
        'Fantasy, D&D, RPG procedural names',
        'Gamer username and brand name generator',
        'Offline browser localStorage favorites',
        'One-click copy and text export',
      ],
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
    );
  }

  // Default WebSite schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Random Name Generator',
    url: 'https://randomnamegenerator.dev/',
    description: 'Instant random name generation platform for characters, stories, games, usernames, and businesses.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://randomnamegenerator.dev/categories/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
    />
  );
}
