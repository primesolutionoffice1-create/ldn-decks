import React from 'react';
import BlogHeader from '@/components/BlogHeader';
import BlogList from '@/components/BlogList';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/blog',
  title: 'Deck Building Blog & Expert Tips | Loudoun Decks',
  description: 'Expert advice on deck materials, costs, maintenance, design trends, and outdoor living ideas for Northern Virginia homeowners. By Loudoun Decks.',
});

export default function BlogPage() {
  return (
    <main>
      <BlogHeader />
      <BlogList />
      <RelatedGuides currentPath="/blog" />
    </main>
  );
}
