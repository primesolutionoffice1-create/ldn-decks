import React from 'react';
import JsonLd from './JsonLd';
import { FOUNDER_ID } from '@/lib/business';

/**
 * ArticleSchema — Structured data for informational/guide pages.
 * Helps AI systems (ChatGPT, Perplexity, Gemini, Copilot, Google AI Overview)
 * identify, extract, and cite content from this page.
 *
 * @param {string} title - Article headline
 * @param {string} description - Article description/summary
 * @param {string} path - URL path (e.g. "/how-much-does-a-deck-cost-northern-virginia")
 * @param {string} image - Image URL
 * @param {string} datePublished - ISO date string
 * @param {string} dateModified - ISO date string
 * @param {string[]} speakable - CSS selectors for AI-citable content sections
 */
export default function ArticleSchema({
  title,
  description,
  path,
  image = '/home-page-ldn.webp',
  imageWidth,
  imageHeight,
  datePublished = '2025-01-15',
  dateModified = '2026-04-18',
  speakable = ['[data-speakable]', '.quick-answer'],
}) {
  const url = `https://ldndecks.com${path}`;
  const imageUrl = image.startsWith('http') ? image : `https://ldndecks.com${image}`;

  // Only declare dimensions when caller has verified them.
  const imageObject = { '@type': 'ImageObject', url: imageUrl };
  if (imageWidth && imageHeight) {
    imageObject.width = imageWidth;
    imageObject.height = imageHeight;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    image: imageObject,
    author: [
      {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        name: 'Nick',
        jobTitle: 'Owner & Lead Designer',
        url: 'https://ldndecks.com/team',
      },
      {
        '@type': 'Organization',
        '@id': 'https://ldndecks.com/#organization',
      },
    ],
    publisher: {
      '@type': 'Organization',
      '@id': 'https://ldndecks.com/#organization',
      name: 'Loudoun Decks',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ldndecks.com/ldndecks-logo.webp',
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    about: {
      '@type': 'Thing',
      name: 'Deck Building in Northern Virginia',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakable,
    },
    isAccessibleForFree: true,
    inLanguage: 'en-US',
  };

  return <JsonLd data={schema} />;
}
