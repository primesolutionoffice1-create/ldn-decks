import { buildMetadata } from '@/lib/seo';
import { ORG_ID, BUSINESS } from '@/lib/business';
import RelatedGuides from '@/components/RelatedGuides';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  path: '/deck-cost-calculator',
  title: 'Deck Price Calculator | Northern Virginia 2026 Prices | Loudoun Decks',
  description: 'Free interactive deck cost calculator for Northern Virginia. Get instant estimates by material, size, and add-ons. Based on 200+ real projects. 2026 pricing.',
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
  description: 'Interactive calculator that estimates deck construction cost in Northern Virginia by material (pressure-treated wood, cedar, Trex Enhance, Trex Transcend, TimberTech AZEK), size, and optional add-ons (stairs, railings, lighting, pergola, screened porch).',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How accurate is this deck cost calculator?', acceptedAnswer: { '@type': 'Answer', text: 'The calculator reflects 2026 Northern Virginia pricing based on over 200 completed Loudoun Decks projects. Final quotes can vary 10–20% based on lot access, structural conditions, and HOA review requirements.' } },
    { '@type': 'Question', name: 'Does the estimate include permits?', acceptedAnswer: { '@type': 'Answer', text: 'Permit and inspection fees ($200–$800 in Northern Virginia) are not included in the base estimate. Loudoun Decks handles permitting end-to-end and includes the cost in your final proposal.' } },
    { '@type': 'Question', name: 'Why is Northern Virginia pricing higher than the state average?', acceptedAnswer: { '@type': 'Answer', text: 'NoVA deck pricing runs 25–35% above the Virginia state average due to higher labor rates, stricter county building codes, frequent HOA architectural review requirements, and proximity to Washington DC.' } },
    { '@type': 'Question', name: 'Does a deck increase home value?', acceptedAnswer: { '@type': 'Answer', text: 'In Northern Virginia, a composite deck typically recoups 60–80% of its cost at resale. In premium markets like McLean, Great Falls, and Vienna, a quality deck can add $15,000–$40,000 to market value.' } },
    { '@type': 'Question', name: 'What is the cheapest deck material?', acceptedAnswer: { '@type': 'Answer', text: 'Pressure-treated wood is the most affordable at $18–$35 per square foot installed, with a 10–15 year lifespan. Composite materials cost more upfront but have a 25–50 year lifespan with minimal maintenance.' } },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqSchema} />
      {children}
      <RelatedGuides currentPath="/deck-cost-calculator" />
      <ContactHome />
    </>
  );
}
