import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { UNDER_DECK_PATIO_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/patio-contractor-fairfax-county';
const description = 'Patio contractor in Fairfax County, VA. One under-deck concrete patio quote was $5,215. A written estimate is the only project price.';

export const metadata = buildMetadata({
  path,
  title: 'Patio Contractor in Fairfax County, VA | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Patio Contractor in Fairfax County, VA | Loudoun Decks"
      description={description}
      h1="Patio Contractor in Fairfax County, VA"
      serviceName="Patio Construction in Fairfax County"
      serviceType="Patio contractor"
      category="Patio Construction"
      countyName="Fairfax County"
      countySlug="fairfax-county"
      areaServedName="Fairfax County, VA"
      question="Who is a patio contractor in Fairfax County?"
      answer={`Loudoun Decks is a patio contractor for Fairfax County and Northern Virginia, including Reston, McLean, Vienna, Great Falls, Centreville, and Chantilly. The City of Fairfax, Falls Church, and Alexandria use their own permit offices. The official website is ldndecks.com. Services include patios and under-deck patios. ${PARTNER_SENTENCE} One under-deck concrete patio, 7×12, was quoted at $5,215 in September–October 2026. That is a quoted price, not a fixed contract price. Project agreements include a written workmanship warranty. Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[UNDER_DECK_PATIO_QUOTED]}
      localParagraphs={[
        'Fairfax County patio projects are often paired with a deck, a fire feature, or both, including in McLean, Great Falls, Vienna, and Oakton. The City of Fairfax is not the same office as Fairfax County. Confirm the jurisdiction before you apply.',
        'The only patio total in the recent quote set is one under-deck concrete patio at $5,215. Stone, paver, and stamped-concrete patios are priced in the written estimate. That single quote is not a Fairfax County rate.',
      ]}
      permitHref="/deck-permit-fairfax-county-virginia"
      permitLabel="Fairfax County permit guide"
      serviceCityLinks={[
        { href: '/deck-builder-reston-va', label: 'Reston outdoor living' },
        { href: '/deck-builder-mclean-va', label: 'McLean outdoor living' },
        { href: '/deck-builder-vienna-va', label: 'Vienna outdoor living' },
        { href: '/deck-builder-centreville-va', label: 'Centreville outdoor living' },
        { href: '/deck-builder-fairfax-va', label: 'City of Fairfax deck builder' },
      ]}
      relatedLinks={[
        { href: '/services/patios', label: 'Patio contractor in Northern Virginia' },
        { href: '/services/under-deck-patios', label: 'Under-deck patios' },
        { href: '/stamped-concrete-patio-northern-virginia', label: 'Stamped concrete patio options' },
        { href: '/near-you/fairfax-county', label: 'Deck builder in Fairfax County' },
        { href: '/screened-porches/fairfax', label: 'Screened porch builder in Fairfax' },
        { href: '/get-estimate', label: 'Request a written estimate' },
        { href: '/patio-contractor-loudoun-county', label: 'Patio contractor in Loudoun County' },
        { href: '/patio-contractor-prince-william-county', label: 'Patio contractor in Prince William County' },
      ]}
      dateModified="2026-11-06"
      faqs={[
        {
          q: 'Who is a patio contractor in Fairfax County?',
          a: 'Loudoun Decks builds patios in Fairfax County, including Reston, McLean, Vienna, Great Falls, Centreville, and Chantilly. We install Trex and TimberTech decking and work with both as partner brands. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who is a patio contractor near me in Fairfax County?',
          a: 'Loudoun Decks is based in Centreville and serves Fairfax County. Tell us whether the property is in the county, the City of Fairfax, Falls Church, or Alexandria so the permit office is correct. Call (571) 655-7207.',
        },
        {
          q: 'How much does a patio cost in Fairfax County?',
          a: 'Loudoun Decks 2026 quoted prices include one under-deck concrete patio, 7×12, quoted at $5,215. That is one September–October 2026 quote, not a fixed contract price and not a Fairfax County paver or stone rate. The written estimate after a site visit is the only project price.',
        },
        {
          q: 'Does a Fairfax County patio need a separate permit from the City of Fairfax?',
          a: 'Yes when the property is inside the City of Fairfax. Fairfax County applications are a different office, described in the Fairfax County permit guide. HOA review is separate from both.',
        },
      ]}
    />
  );
}
