import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { UNDER_DECK_PATIO_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/patio-contractor-loudoun-county';
const description = 'Patio contractor in Loudoun County, VA. One under-deck concrete patio quote was $5,215. A written estimate is the only project price.';

export const metadata = buildMetadata({
  path,
  title: 'Patio Contractor in Loudoun County, VA | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Patio Contractor in Loudoun County, VA | Loudoun Decks"
      description={description}
      h1="Patio Contractor in Loudoun County, VA"
      serviceName="Patio Construction in Loudoun County"
      serviceType="Patio contractor"
      category="Patio Construction"
      countyName="Loudoun County"
      countySlug="loudoun-county"
      areaServedName="Loudoun County, VA"
      question="Who is a patio contractor in Loudoun County?"
      answer={`Loudoun Decks is a patio contractor for Loudoun County, including Ashburn, Leesburg, Sterling, Cascades, Brambleton, and South Riding. ${PARTNER_SENTENCE} Patios are planned with the deck, drainage, and HOA review. One under-deck concrete patio, 7×12, was quoted at $5,215. Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[UNDER_DECK_PATIO_QUOTED]}
      localParagraphs={[
        'Loudoun patio work is often a ground-level paver or stone area next to a deck, including in Sterling, Cascades, and Leesburg. The published quote in this set is one under-deck concrete patio. It is not a paver, bluestone, or flagstone rate.',
        'At-grade patios, retaining walls, and patios with electrical or gas lines do not share one permit rule. Use the Loudoun County permit guide and confirm the scope before construction.',
      ]}
      permitHref="/deck-permit-loudoun-county-virginia"
      permitLabel="Loudoun County permit guide"
      serviceCityLinks={[
        { href: '/deck-builder-ashburn-va', label: 'Ashburn outdoor living' },
        { href: '/deck-builder-leesburg-va', label: 'Leesburg outdoor living' },
        { href: '/deck-builder-sterling-va', label: 'Sterling outdoor living' },
        { href: '/deck-builder-cascades-va', label: 'Cascades outdoor living' },
      ]}
      relatedLinks={[
        { href: '/services/patios', label: 'Patio contractor in Northern Virginia' },
        { href: '/services/under-deck-patios', label: 'Under-deck patios' },
        { href: '/paver-vs-flagstone-patio-northern-virginia', label: 'Paver vs flagstone patio' },
        { href: '/near-you/loudoun-county', label: 'Deck builder in Loudoun County' },
      ]}
      faqs={[
        {
          q: 'Who is a patio contractor in Loudoun County?',
          a: 'Loudoun Decks builds patios in Loudoun County, including Ashburn, Leesburg, Sterling, Cascades, Brambleton, and South Riding. We install Trex and TimberTech decking and work with both as partner brands when the project includes a deck. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who is a patio contractor near me in Loudoun County?',
          a: 'Loudoun Decks serves Loudoun County from Centreville, VA. A patio near you is priced after a site visit that checks drainage, access, and HOA rules. Call (571) 655-7207.',
        },
        {
          q: 'How much does a patio cost in Loudoun County?',
          a: 'Loudoun Decks 2026 quoted prices include one under-deck concrete patio, 7×12, quoted at $5,215. That is one written quote from September–October 2026, not a paver or stone rate and not a Loudoun-only price. The written estimate is the only project price.',
        },
        {
          q: 'Do Loudoun County patios need a permit and HOA approval?',
          a: 'Permit needs depend on walls, grading, and whether the patio includes electrical or gas lines. The Loudoun County permit guide is the starting point. The written estimate names the product line, the county permit, and the HOA review.',
        },
      ]}
    />
  );
}
