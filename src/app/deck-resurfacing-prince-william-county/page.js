import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { RESURFACE_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/deck-resurfacing-prince-william-county';
const description = 'Deck resurfacing in Prince William County. One Chantilly Trex resurfacing quote was $9,020–$12,678. Written estimate only.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Resurfacing in Prince William County | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Deck Resurfacing in Prince William County | Loudoun Decks"
      description={description}
      h1="Deck Resurfacing in Prince William County, VA"
      serviceName="Deck Resurfacing in Prince William County"
      serviceType="Deck resurfacing"
      category="Deck Resurfacing"
      countyName="Prince William County"
      countySlug="prince-william-county"
      areaServedName="Prince William County, VA"
      question="Who resurfaces decks in Prince William County?"
      answer={`Loudoun Decks resurfaces decks in Prince William County, including Woodbridge, Lake Ridge, Gainesville, Haymarket, and Bristow, when the frame passes inspection. Manassas and Manassas Park are independent cities. ${PARTNER_SENTENCE} ${RESURFACE_QUOTED} Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[RESURFACE_QUOTED]}
      localParagraphs={[
        'Composite upgrades from aging pressure-treated decks are a common request in Woodbridge and Lake Ridge. Resurfacing applies only when the posts, beams, joists, ledger, and footings pass inspection. Gainesville and Haymarket decks on newer homes are more often new builds than resurfaces.',
        'The $9,020–$12,678 Trex resurfacing quote was a Chantilly project. It is a Northern Virginia quoted price, not a Prince William County rate. Manassas projects stay on the Manassas city page for the city permit office.',
      ]}
      permitHref="/deck-permit-prince-william-county-virginia"
      permitLabel="Prince William County permit guide"
      serviceCityLinks={[
        { href: '/deck-builder-woodbridge-va', label: 'Woodbridge deck builder' },
        { href: '/deck-builder-gainesville-va', label: 'Gainesville deck builder' },
        { href: '/deck-builder-haymarket-va', label: 'Haymarket deck builder' },
        { href: '/deck-builder-bristow-va', label: 'Bristow deck builder' },
        { href: '/deck-builder-manassas-va', label: 'Manassas deck builder' },
        { href: '/composite-decks/woodbridge', label: 'Composite decks in Woodbridge' },
        { href: '/composite-decks/manassas', label: 'Composite decks in Manassas' },
      ]}
      relatedLinks={[
        { href: '/services/deck-resurfacing', label: 'Deck resurfacing in Northern Virginia' },
        { href: '/deck-resurfacing-vs-replacement', label: 'Resurfacing vs replacement' },
        { href: '/near-you/prince-william-county', label: 'Deck builder in Prince William County' },
      ]}
      faqs={[
        {
          q: 'Who does deck resurfacing in Prince William County?',
          a: 'Loudoun Decks resurfaces decks in Prince William County, including Woodbridge, Lake Ridge, Gainesville, Haymarket, and Bristow, after a frame inspection. We install Trex and TimberTech decking and work with both as partner brands. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who offers deck resurfacing near me in Prince William County?',
          a: 'Loudoun Decks serves Prince William County from Centreville, VA. Woodbridge, Lake Ridge, Dale City, Gainesville, and Haymarket homeowners can call (571) 655-7207 for a written estimate after a frame inspection.',
        },
        {
          q: 'How much does deck resurfacing cost in Prince William County?',
          a: 'Loudoun Decks 2026 quoted prices: Trex deck resurfacing was $9,020–$12,678 in a recent Chantilly quote. That is not a Prince William County rate. The written estimate after inspection is the only project price.',
        },
        {
          q: 'Does Prince William County issue Manassas resurfacing permits?',
          a: 'No. Manassas and Manassas Park use their own city offices. A Prince William County parcel uses the county permit guide. The written estimate names the product line, the permit office, and the HOA review.',
        },
      ]}
    />
  );
}
