import React from 'react';
import BlogHeader from '@/components/BlogHeader';
import BlogList from '@/components/BlogList';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import JsonLd from '@/components/JsonLd';
import { blogPosts } from '@/lib/blogData';

export const metadata = buildMetadata({
  path: '/blog',
  title: 'Deck Building Blog & Expert Tips | Loudoun Decks',
  description: 'Expert advice on deck materials, costs, maintenance, design trends, and outdoor living ideas for Northern Virginia homeowners. By Loudoun Decks.',
  image: '/social/blog-social.png',
});

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://ldndecks.com/blog#collection',
  url: 'https://ldndecks.com/blog',
  name: 'Deck Building Blog & Expert Tips',
  description: 'Expert advice on deck materials, costs, maintenance, design trends, and outdoor living ideas for Northern Virginia homeowners.',
  isPartOf: { '@id': 'https://ldndecks.com/#website' },
  publisher: { '@id': 'https://ldndecks.com/#organization' },
  mainEntity: {
    '@type': 'ItemList',
    '@id': 'https://ldndecks.com/blog#posts',
    itemListElement: blogPosts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://ldndecks.com/blog/${post.slug}`,
      name: post.title,
    })),
  },
};

export default function BlogPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/blog" name="Deck Building Blog &amp; Expert Tips | Loudoun Decks" description="Expert advice on deck materials, costs, maintenance, design trends, and outdoor living ideas for Northern Virginia homeowners. By Loudoun Decks." speakable />
      <JsonLd data={blogCollectionSchema} />
      <BlogHeader />
      <BlogList />
      <RelatedGuides currentPath="/blog" />
    </main>
  );
}
