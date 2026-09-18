import React from 'react';
import { SOCIAL_URLS } from '@/data/social';

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
  type?: 'website' | 'webapp' | 'faq' | 'organization' | 'howto' | 'itemlist' | 'image' | 'video';
  faqs?: { question: string; answer: string }[];
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  howToSteps?: HowToStep[];
  itemList?: ListItemSchema[];
  duration?: string;
  transcript?: string;
  contentUrl?: string;
  embedUrl?: string;
  uploadDate?: string;
}

export function JsonLd({
  type = 'website',
  faqs,
  title,
  description,
  url,
  image,
  howToSteps,
  itemList,
  duration,
  transcript,
  contentUrl,
  embedUrl,
  uploadDate,
}: JsonLdProps) {
  const currentUrl = url || 'https://randomnamegenerator.dev/';

  if (type === 'video') {
    const videoSchema = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: title || 'How the Random Name Generator Works - Step-by-Step Video Guide',
      description:
        description ||
        'Learn how to generate authentic, culturally accurate names and procedural fantasy aliases instantly in your browser with zero server logging.',
      thumbnailUrl:
        image || 'https://randomnamegenerator.dev/images/how-it-works-video-poster.jpg',
      uploadDate: uploadDate || '2026-09-18T00:00:00Z',
      duration: duration || 'PT44S',
      contentUrl:
        contentUrl || 'https://randomnamegenerator.dev/videos/how-random-name-generator-works.mp4',
      embedUrl: embedUrl || 'https://randomnamegenerator.dev/#how-it-works',
      transcript:
        transcript ||
        'Welcome to Random Name Generator.dev — the fast, privacy-first platform for instant name generation. Step 1: Choose your preferences. Filter by full name, gender, 20+ cultural origins, style, and quantity. Step 2: Procedural synthesis. Over 1,200 verified names and authentic surnames combined in milliseconds. Step 3: Copy and export. 1-click clipboard copy, save favorites offline, or download complete TXT files. Explore over 50 specialized generators today at randomnamegenerator.dev.',
      publisher: {
        '@type': 'Organization',
        name: 'Random Name Generator',
        url: 'https://randomnamegenerator.dev/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://randomnamegenerator.dev/icon-192x192.png',
        },
      },
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
    );
  }

  if (type === 'image') {
    const imageSchema = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: image || 'https://randomnamegenerator.dev/images/how-random-name-generator-works.jpg',
      url: image || 'https://randomnamegenerator.dev/images/how-random-name-generator-works.jpg',
      name: title || 'How the Random Name Generator Works - Visual Infographic Guide',
      description:
        description ||
        'Step-by-step visual infographic explaining how the Random Name Generator produces creative names with culture filters, surnames, and procedural algorithms.',
      caption: 'Step-by-step visual infographic showing how to generate random names online.',
      inLanguage: 'en-US',
      representativeOfPage: true,
      author: {
        '@type': 'Organization',
        name: 'Random Name Generator Team',
        url: 'https://randomnamegenerator.dev/',
      },
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
    );
  }

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
      logo: 'https://randomnamegenerator.dev/icon-192x192.png',
      description: 'Privacy-first, client-side procedural and verified naming tools for creators, developers, and writers worldwide.',
      sameAs: [
        ...SOCIAL_URLS,
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
      image: image || 'https://randomnamegenerator.dev/images/how-random-name-generator-works.jpg',
      totalTime: 'PT1M',
      step: howToSteps.map((s) => ({
        '@type': 'HowToStep',
        position: s.position,
        name: s.name,
        text: s.text,
        url: `${currentUrl}#how-it-works`,
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1420',
        bestRating: '5',
        worstRating: '1',
      },
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
    sameAs: SOCIAL_URLS,
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
