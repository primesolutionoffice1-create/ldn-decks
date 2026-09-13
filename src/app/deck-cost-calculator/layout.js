import { buildMetadata } from '@/lib/seo';
import { ORG_ID, BUSINESS } from '@/lib/business';
import RelatedGuides from '@/components/RelatedGuides';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import { calculatorFaqs } from '@/data/deckCostCalculatorFaqs';

export const metadata = buildMetadata({
  path: '/deck-cost-calculator',
  title: 'Deck Cost Calculator Northern Virginia | Budget Planner',
  description: 'Explore an illustrative deck budget by size, material and selected add-ons. Review model assumptions, then request an itemized Northern Virginia project quote.',
  image: '/social/deck-cost-calculator-social.png',
});

const PAGE_URL = `${BUSINESS.url}/deck-cost-calculator`;

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${PAGE_URL}#webapp`,
  name: 'Deck Cost Calculator',
  url: PAGE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any (web)',
  browserRequirements: 'Requires JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': ORG_ID },
  description: 'Illustrative deck budget planner using preset material rates, size, optional add-ons and a model adjustment. Not a supplier quote or verified local price dataset; there are no elevation or permit controls.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: calculatorFaqs.map(({ q, a }) => ({
    '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqSchema} />
      <WebPageSchema url={PAGE_URL} name="Deck Cost Calculator Northern Virginia | Budget Planner" description="Illustrative deck budget by size, material and selected add-ons, with explicit model assumptions and a written-quote checklist." dateModified="2026-09-13" speakable />
      {children}
      <RelatedGuides currentPath="/deck-cost-calculator" category="deck-core" />
      <ContactHome />
    </>
  );
}
