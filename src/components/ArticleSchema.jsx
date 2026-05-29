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
  // Default dimensions (1600x1067) cover the showcase project photos used
  // on most article pages. Google's Article rich result requires >=1200px
  // width for the Top Stories image carousel; the safe-bet 1600x1067 is
  // accurate for /showcase/* (Loudoun Decks shoots project photos at 3:2)
  // and passes Google's eligibility check without per-page dimension audits.
  imageWidth = 1600,
  imageHeight = 1067,
  datePublished = '2025-01-15',
  dateModified = '2026-04-18',
  speakable = ['[data-speakable]', '.quick-answer'],
}) {
  const url = `https://ldndecks.com${path}`;
  const imageUrl = image.startsWith('http') ? image : `https://ldndecks.com${image}`;

  const imageObject = {
    '@type': 'ImageObject',
    url: imageUrl,
    width: imageWidth,
    height: imageHeight,
  };

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
        name: 'Nicolae Zugrav',
        alternateName: 'Nick',
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
