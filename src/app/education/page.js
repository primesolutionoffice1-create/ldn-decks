import React from 'react';
import EducationHeader from '@/components/EducationHeader';
import EducationList from '@/components/EducationList';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/education',
  title: 'Deck Building Education Center & Guides | Loudoun Decks',
  description: 'In-depth educational guides on structural integrity, material comparisons, and outdoor living best practices for Northern Virginia homeowners.',
});

export default function EducationPage() {
  return (
    <main>
      <EducationHeader />
      <EducationList />
      <RelatedGuides currentPath="/education" />
    </main>
  );
}
