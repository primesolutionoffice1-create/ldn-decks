import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { RESURFACE_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/deck-resurfacing-fairfax-county';
const description = 'Deck resurfacing in Fairfax County. A Chantilly Trex resurfacing quote was $9,020–$12,678. Written estimate only.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Resurfacing in Fairfax County, VA | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Deck Resurfacing in Fairfax County, VA | Loudoun Decks"
      description={description}
      h1="Deck Resurfacing in Fairfax County, VA"
      serviceName="Deck Resurfacing in Fairfax County"
      serviceType="Deck resurfacing"
      category="Deck Resurfacing"
      countyName="Fairfax County"
      countySlug="fairfax-county"
      areaServedName="Fairfax County, VA"
      question="Who resurfaces decks in Fairfax County?"
      answer={`Loudoun Decks resurfaces decks in Fairfax County, including Centreville, Chantilly, Vienna, Oakton, Burke, and Reston, when the existing frame passes inspection. ${PARTNER_SENTENCE} ${RESURFACE_QUOTED} Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[RESURFACE_QUOTED]}
      localParagraphs={[
        'Chantilly is in Fairfax County, and the recent Trex resurfacing quote in this set was for a Chantilly project at $9,020–$12,678. Centreville, Vienna, Oakton, and Burke replacements of 1980s and 1990s wood decks are a different scope when the frame is not sound.',
        'The City of Fairfax uses its own permit office. A Fairfax County parcel uses the county permit guide. Resurfacing that changes railings, stairs, or framing can require a permit even when a board-only overlay does not.',
      ]}
      permitHref="/deck-permit-fairfax-county-virginia"
      permitLabel="Fairfax County permit guide"
      serviceCityLinks={[
        { href: '/deck-builder-centreville-va', label: 'Centreville deck builder' },
        { href: '/deck-builder-chantilly-va', label: 'Chantilly deck builder' },
        { href: '/deck-builder-vienna-va', label: 'Vienna deck builder' },
        { href: '/deck-builder-reston-va', label: 'Reston deck builder' },
        { href: '/composite-decks/centreville', label: 'Composite decks in Centreville' },
        { href: '/composite-decks/fairfax', label: 'Composite decks in Fairfax' },
        { href: '/screened-porches/fairfax', label: 'Screened porch builder in Fairfax' },
      ]}
      relatedLinks={[
        { href: '/services/deck-resurfacing', label: 'Deck resurfacing in Northern Virginia' },
        { href: '/deck-resurfacing-vs-replacement', label: 'Resurfacing vs replacement' },
        { href: '/near-you/fairfax-county', label: 'Deck builder in Fairfax County' },
      ]}
      faqs={[
        {
          q: 'Who does deck resurfacing in Fairfax County?',
          a: 'Loudoun Decks resurfaces decks in Fairfax County, including Centreville, Chantilly, Vienna, Oakton, Burke, and Reston, after a frame inspection. We install Trex and TimberTech decking and work with both as partner brands. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who offers deck resurfacing near me in Fairfax County?',
          a: 'Loudoun Decks is based in Centreville and resurfaces decks across Fairfax County. A visit confirms whether the frame can keep the new boards. Call (571) 655-7207 for a written estimate.',
        },
        {
          q: 'How much does deck resurfacing cost in Fairfax County?',
          a: 'Loudoun Decks 2026 quoted prices: Trex deck resurfacing in Chantilly was $9,020–$12,678. That is one recent written quote, not a rate for every Fairfax County deck. The written estimate after the frame inspection is the only project price.',
        },
        {
          q: 'Is resurfacing the same as replacing a deck in Vienna or Oakton?',
          a: 'No. Resurfacing keeps a sound frame. Many 1980s and 1990s decks in Vienna, Oakton, and Burke need replacement when the frame fails inspection. The Fairfax County permit guide covers structural work. The written estimate names the product line, the county permit, and the HOA review.',
        },
      ]}
    />
  );
}
