import React from 'react';

export interface HowToStep {
  name: string;
  text: string;
  position: number;
}

export interface ListItemSchema {
  position: number;
  name: string;
  url: string;
}

interface JsonLdProps {
  type?: 'website' | 'webapp' | 'faq' | 'organization' | 'howto' | 'itemlist';
  faqs?: { question: string; answer: string }[];
  title?: string;
  description?: string;
  url?: string;
  howToSteps?: HowToStep[];
  itemList?: ListItemSchema[];
}

export function JsonLd({
  type = 'website',
  faqs,
  title,
  description,
  url,
  howToSteps,
  itemList,
}: JsonLdProps) {
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

  if (type === 'organization') {
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Random Name Generator',
      url: 'https://randomnamegenerator.dev/',
      logo: 'https://randomnamegenerator.dev/icon',
      description: 'Privacy-first, client-side procedural and verified naming tools for creators, developers, and writers worldwide.',
      sameAs: [
        'https://github.com/michaelasmith211/randomnames',
      ],
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    );
  }

  if (type === 'howto' && howToSteps && howToSteps.length > 0) {
    const howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title || 'How to Generate Random Names Online',
      description: description || 'Learn how to generate authentic, creative names using customizable filters for gender, origin, and style.',
      totalTime: 'PT1M',
      step: howToSteps.map((s) => ({
        '@type': 'HowToStep',
        position: s.position,
        name: s.name,
        text: s.text,
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    );
  }

  if (type === 'itemlist' && itemList && itemList.length > 0) {
    const listSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: itemList.map((item) => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        url: item.url,
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
    );
  }

  if (type === 'webapp') {
    const webAppSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: title || 'Random Name Generator',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Windows, macOS, Android, iOS, Linux',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      softwareVersion: '2.0.0',
      url: currentUrl,
      description: description || 'Instant client-side random name generator for characters, games, stories, usernames, and businesses.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Instant client-side name generation',
        '20+ country and cultural naming datasets',
        'Procedural fantasy morpheme synthesizer for elves, wizards, and dragons',
        'Gamer gamertag and aesthetic username generator',
        'Modern startup and business brand generator',
        'Offline browser localStorage favorites & history',
        'One-click copy with accessible feedback',
        'Formatted plain-text TXT export',
        'Native Web Share API integration',
      ],
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
    );
  }

  // Default WebSite schema with Sitelinks SearchBox
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Random Name Generator',
    alternateName: ['RNG', 'RandomNameGenerator.dev'],
    url: 'https://randomnamegenerator.dev/',
    inLanguage: 'en-US',
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
