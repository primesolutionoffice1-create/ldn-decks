import React from 'react';
import FAQHeader from '@/components/FAQHeader';
import FAQCategorized from '@/components/FAQCategorized';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/faqs',
  title: 'Deck Building FAQs | Northern Virginia | Loudoun Decks',
  description: 'Answers to common questions about deck building, materials, costs, timelines, permits, and HOA in Northern Virginia. Expert answers from Loudoun Decks.',
});

export default function FAQPage() {
  return (
    <main>
      <FAQHeader />
      <FAQCategorized />
      <RelatedGuides currentPath="/faqs" />
      <SimpleCTA
        title="Still have questions?"
        buttonText="Contact Us Today"
        link="/contact"
      />
    </main>
  );
}
