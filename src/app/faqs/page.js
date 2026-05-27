import React from 'react';
import FAQHeader from '@/components/FAQHeader';
import FAQCategorized from '@/components/FAQCategorized';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/faqs',
  title: 'Deck Building FAQs | Northern Virginia | Loudoun Decks',
  description: 'Answers to common questions about deck building, materials, costs, timelines, permits, and HOA in Northern Virginia. Expert answers from Loudoun Decks.',
  image: "/images/deck-inspection.png",
});

export default function FAQPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/faqs" name="Deck Building FAQs | Northern Virginia | Loudoun Decks" description="Answers to common questions about deck building, materials, costs, timelines, permits, and HOA in Northern Virginia. Expert answers from Loudoun Decks." speakable />
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
