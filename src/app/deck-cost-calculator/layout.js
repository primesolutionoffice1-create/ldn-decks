import { buildMetadata } from '@/lib/seo';
import { ORG_ID, BUSINESS } from '@/lib/business';
import RelatedGuides from '@/components/RelatedGuides';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import { calculatorFaqs } from '@/data/deckCostCalculatorFaqs';

const PAGE_TITLE = 'Deck Cost Calculator Northern Virginia | Loudoun Decks';
const PAGE_DESCRIPTION = 'Loudoun Decks 2026 quoted prices: a new open deck about $61–$102 per sq ft, most around $64–$68. Use the planner to record size and options, then request a written estimate.';

const metadataBase = buildMetadata({
  path: '/deck-cost-calculator',
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/deck-cost-calculator-social.png',
});

export const metadata = {
  ...metadataBase,
  description: PAGE_DESCRIPTION,
  openGraph: {
    ...metadataBase.openGraph,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    ...metadataBase.twitter,
    description: PAGE_DESCRIPTION,
  },
};

const PAGE_URL = `${BUSINESS.url}/deck-cost-calculator`;

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${PAGE_URL}#webapp`,
  name: 'Deck Project Planner',
  url: PAGE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any (web)',
  browserRequirements: 'Requires JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': ORG_ID },
  description: 'A scope planner for deck size, material and options. It does not calculate a price; elevation and permits are reviewed in a written estimate.',
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
      <WebPageSchema url={PAGE_URL} name="Deck Project Planner Northern Virginia" description="Plan deck size, material and options before requesting a written project estimate." dateModified="2026-11-27" speakable />
      {children}
      <RelatedGuides currentPath="/deck-cost-calculator" category="deck-core" />
      <ContactHome />
    </>
  );
}
