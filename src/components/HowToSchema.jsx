import React from 'react';

/**
 * HowToSchema — Structured data for step-by-step guide pages.
 * AI systems extract HowTo schema for direct display in AI answers.
 *
 * @param {string} name - Title of the how-to guide
 * @param {string} description - Brief description
 * @param {string} image - Image URL
 * @param {string} totalTime - ISO 8601 duration (e.g., "PT2H" for 2 hours)
 * @param {{ name: string, text: string, image?: string }[]} steps - Steps in the guide
 */
export default function HowToSchema({ name, description, image, totalTime, steps = [] }) {
  const imageUrl = image?.startsWith('http') ? image : `https://ldndecks.com${image || '/home-page-ldn.webp'}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: imageUrl,
    totalTime,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image ? { image: step.image.startsWith('http') ? step.image : `https://ldndecks.com${step.image}` } : {}),
    })),
  };

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  });
}
