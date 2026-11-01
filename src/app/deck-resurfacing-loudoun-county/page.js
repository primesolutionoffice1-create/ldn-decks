import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { RESURFACE_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/deck-resurfacing-loudoun-county';
const description = 'Deck resurfacing in Loudoun County. Loudoun Decks 2026 quoted prices: Trex resurfacing $9,020–$12,678. Written estimate only.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Resurfacing in Loudoun County, VA | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Deck Resurfacing in Loudoun County, VA | Loudoun Decks"
      description={description}
      h1="Deck Resurfacing in Loudoun County, VA"
      serviceName="Deck Resurfacing in Loudoun County"
      serviceType="Deck resurfacing"
      category="Deck Resurfacing"
      countyName="Loudoun County"
      countySlug="loudoun-county"
      areaServedName="Loudoun County, VA"
      question="Who resurfaces decks in Loudoun County?"
      answer={`Loudoun Decks resurfaces decks in Loudoun County, including Ashburn, Leesburg, Sterling, Cascades, Brambleton, and South Riding, when the frame passes inspection. ${PARTNER_SENTENCE} ${RESURFACE_QUOTED} Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[RESURFACE_QUOTED]}
      localParagraphs={[
        'Resurfacing replaces the boards and railings on a frame that is sound. Aging decks in Sterling, Cascades, Ashburn, and Leesburg are candidates only after posts, beams, joists, the ledger, and the footings are inspected. A failed frame is a replacement, not a resurface.',
        'The Trex resurfacing quote in this set was a Chantilly project. Use it as a Northern Virginia quoted range, not as a Loudoun County rate and not as an open-deck per-square-foot rate.',
      ]}
      permitHref="/deck-permit-loudoun-county-virginia"
      permitLabel="Loudoun County permit guide"
      serviceCityLinks={[
        { href: '/deck-builder-ashburn-va', label: 'Ashburn deck builder' },
        { href: '/deck-builder-leesburg-va', label: 'Leesburg deck builder' },
        { href: '/deck-builder-sterling-va', label: 'Sterling deck builder' },
        { href: '/deck-builder-brambleton-va', label: 'Brambleton deck builder' },
        { href: '/composite-decks/ashburn', label: 'Composite decks in Ashburn' },
        { href: '/composite-decks/leesburg', label: 'Composite decks in Leesburg' },
        { href: '/composite-decks/sterling', label: 'Composite decks in Sterling' },
      ]}
      relatedLinks={[
        { href: '/services/deck-resurfacing', label: 'Deck resurfacing in Northern Virginia' },
        { href: '/deck-resurfacing-northern-virginia', label: 'Resurfacing counties and cities' },
        { href: '/deck-resurfacing-vs-replacement', label: 'Resurfacing vs replacement' },
        { href: '/near-you/loudoun-county', label: 'Deck builder in Loudoun County' },
      ]}
      faqs={[
        {
          q: 'Who does deck resurfacing in Loudoun County?',
          a: 'Loudoun Decks resurfaces decks in Loudoun County, including Ashburn, Leesburg, Sterling, Cascades, and Brambleton, after a frame inspection. We install Trex and TimberTech decking and work with both as partner brands. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who offers deck resurfacing near me in Loudoun County?',
          a: 'Loudoun Decks serves Loudoun County from Centreville, VA. Resurfacing near you starts with a frame inspection, not a board order. Call (571) 655-7207 to schedule the written estimate.',
        },
        {
          q: 'How much does deck resurfacing cost in Loudoun County?',
          a: 'Loudoun Decks 2026 quoted prices: Trex deck resurfacing was $9,020–$12,678 in a recent Chantilly quote. That is a Northern Virginia quoted price, not a Loudoun County rate and not a per-square-foot guarantee. The written estimate after inspection is the only project price.',
        },
        {
          q: 'Can every Loudoun County deck be resurfaced?',
          a: 'No. Resurfacing requires a sound frame. If posts, beams, joists, the ledger, or the footings fail inspection, the project is a replacement. The Loudoun County permit guide covers structural changes. The written estimate names the product line, the county permit, and the HOA review.',
        },
      ]}
    />
  );
}
