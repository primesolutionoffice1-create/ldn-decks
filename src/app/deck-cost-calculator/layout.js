import { buildMetadata } from '@/lib/seo';
import { ORG_ID, BUSINESS } from '@/lib/business';
import RelatedGuides from '@/components/RelatedGuides';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/deck-cost-calculator',
  title: 'Deck Price Calculator | Northern Virginia 2026 Prices | Loudoun Decks',
  description: 'Free interactive deck cost calculator for Northern Virginia. Estimate a 2026 planning range by material, size, railings, stairs, elevation, permits, and add-ons.',
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
  description: 'Interactive calculator that estimates deck construction cost in Northern Virginia by material (pressure-treated wood, cedar, Trex Enhance, Trex Transcend, TimberTech AZEK), size, and optional add-ons (stairs, railings, lighting, pergola, screened porch).',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How accurate is this deck cost calculator?', acceptedAnswer: { '@type': 'Answer', text: 'The calculator is a planning tool for 2026 Northern Virginia deck budgets. Final quotes can change after site access, framing condition, stair layout, county permit scope, and HOA requirements are reviewed.' } },
    { '@type': 'Question', name: 'Does the estimate include permits?', acceptedAnswer: { '@type': 'Answer', text: 'The calculator includes a permit complexity setting, but the final proposal should confirm drawing needs, county fees, inspections, and HOA review requirements for the specific property.' } },
    { '@type': 'Question', name: 'Why is Northern Virginia deck pricing higher than many online averages?', acceptedAnswer: { '@type': 'Answer', text: 'Northern Virginia projects often involve higher labor costs, stricter county review, HOA architectural rules, elevated structures, and premium composite or PVC material selections.' } },
    { '@type': 'Question', name: 'Should I use the calculator before requesting an estimate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Use it to understand the likely range, then request a written estimate so material choices, structural details, access, railing, stairs, lighting, and permit scope can be itemized.' } },
    { '@type': 'Question', name: 'What is the lowest-cost deck material in the calculator?', acceptedAnswer: { '@type': 'Answer', text: 'Pressure-treated wood is usually the lowest upfront-cost option. Composite and PVC cost more initially but reduce recurring staining and maintenance compared with wood.' } },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqSchema} />
      <WebPageSchema url={PAGE_URL} name="Deck Price Calculator | Northern Virginia 2026 Prices" description="Free interactive deck cost calculator for Northern Virginia. Estimate a 2026 planning range by material, size, railings, stairs, elevation, permits, and add-ons." speakable />
      {children}
      <RelatedGuides currentPath="/deck-cost-calculator" category="deck-core" />
      <ContactHome />
    </>
  );
}
