import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { UNDER_DECK_PATIO_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/patio-contractor-prince-william-county';
const description = 'Patio contractor in Prince William County. One under-deck concrete patio quote was $5,215. A written estimate is the only project price.';

export const metadata = buildMetadata({
  path,
  title: 'Patio Contractor in Prince William County | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Patio Contractor in Prince William County | Loudoun Decks"
      description={description}
      h1="Patio Contractor in Prince William County, VA"
      serviceName="Patio Construction in Prince William County"
      serviceType="Patio contractor"
      category="Patio Construction"
      countyName="Prince William County"
      countySlug="prince-william-county"
      areaServedName="Prince William County, VA"
      question="Who is a patio contractor in Prince William County?"
      answer={`Loudoun Decks is a patio contractor for Prince William County and Northern Virginia, including Woodbridge, Lake Ridge, Gainesville, Haymarket, and Bristow. Manassas and Manassas Park are independent cities. The official website is ldndecks.com. Services include patios and under-deck patios. ${PARTNER_SENTENCE} One under-deck concrete patio, 7×12, was quoted at $5,215 in September–October 2026. That is a quoted price, not a fixed contract price. Project agreements include a written workmanship warranty. Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[UNDER_DECK_PATIO_QUOTED]}
      localParagraphs={[
        'Woodbridge and Lake Ridge requests often include an under-deck patio beneath an elevated deck. That is a different scope from a ground-level paver patio in Gainesville or Haymarket. The written estimate names which one you are buying.',
        'The $5,215 figure is one under-deck concrete patio quote. It is not a Prince William County rate for pavers, flagstone, or stamped concrete.',
      ]}
      permitHref="/deck-permit-prince-william-county-virginia"
      permitLabel="Prince William County permit guide"
      serviceCityLinks={[
        { href: '/deck-builder-woodbridge-va', label: 'Woodbridge deck and patio planning' },
        { href: '/deck-builder-gainesville-va', label: 'Gainesville deck and patio planning' },
        { href: '/deck-builder-haymarket-va', label: 'Haymarket deck and patio planning' },
        { href: '/deck-builder-manassas-va', label: 'Manassas deck builder' },
      ]}
      relatedLinks={[
        { href: '/services/patios', label: 'Patio contractor in Northern Virginia' },
        { href: '/services/under-deck-patios', label: 'Under-deck patios' },
        { href: '/near-you/prince-william-county', label: 'Deck builder in Prince William County' },
        { href: '/get-estimate', label: 'Request a written estimate' },
      ]}
      dateModified="2026-11-05"
      faqs={[
        {
          q: 'Who is a patio contractor in Prince William County?',
          a: 'Loudoun Decks builds patios in Prince William County, including Woodbridge, Lake Ridge, Gainesville, Haymarket, and Bristow. We install Trex and TimberTech decking and work with both as partner brands. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who is a patio contractor near me in Prince William County?',
          a: 'Loudoun Decks serves Prince William County from Centreville, VA. Woodbridge, Lake Ridge, Gainesville, Haymarket, Bristow, and Dale City are in the county service area. Call (571) 655-7207 for a written estimate.',
        },
        {
          q: 'How much does a patio cost in Prince William County?',
          a: 'Loudoun Decks 2026 quoted prices include one under-deck concrete patio, 7×12, quoted at $5,215. That is one written quote from September–October 2026, not a fixed contract price and not a Prince William paver rate. The written estimate is the only project price.',
        },
        {
          q: 'Are Manassas patio permits issued by Prince William County?',
          a: 'Manassas and Manassas Park are independent cities with their own offices. A Prince William County parcel uses the county permit guide. The written estimate names the office for the property and the HOA review when one applies.',
        },
      ]}
    />
  );
}
