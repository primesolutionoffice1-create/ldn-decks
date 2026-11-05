import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { PORCH_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/screened-porch-contractor-fairfax-county';
const description = 'Screened porch contractor in Fairfax County. Recent quotes for a roofed porch with a deck: about $77,000–$112,500. Written estimate only.';

export const metadata = buildMetadata({
  path,
  title: 'Screened Porch Contractor in Fairfax County | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Screened Porch Contractor in Fairfax County | Loudoun Decks"
      description={description}
      h1="Screened Porch Contractor in Fairfax County, VA"
      serviceName="Screened Porch Construction in Fairfax County"
      serviceType="Screened porch contractor"
      category="Screened Porch Construction"
      countyName="Fairfax County"
      countySlug="fairfax-county"
      areaServedName="Fairfax County, VA"
      question="Who is a screened porch contractor in Fairfax County?"
      answer={`Loudoun Decks is a screened porch contractor for Fairfax County, including Fairfax, Centreville, McLean, Vienna, Herndon, and Reston. The City of Fairfax, Falls Church, and Alexandria use their own permit offices. ${PARTNER_SENTENCE} A roofed or screened porch with an attached open deck was about $77,000–$112,500 in recent September–October 2026 quotes. Those figures are Northern Virginia quotes, not a Fairfax-only price. Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[PORCH_QUOTED]}
      localParagraphs={[
        'Screened porch projects in Fairfax County are often tied to an open deck. The quoted range above is for that combined scope in recent Northern Virginia quotes. It is not a per-square-foot porch rate and not a Fairfax-only price.',
        'The City of Fairfax, Falls Church, and Alexandria use their own permit offices. A Fairfax County parcel uses the Fairfax County permit guide. Confirm the jurisdiction before you apply.',
      ]}
      permitHref="/deck-permit-fairfax-county-virginia"
      permitLabel="Fairfax County permit guide"
      serviceCityLinks={[
        { href: '/screened-porches/fairfax', label: 'Screened porches in Fairfax' },
        { href: '/screened-porches/centreville', label: 'Screened porches in Centreville' },
        { href: '/screened-porches/mclean', label: 'Screened porches in McLean' },
        { href: '/screened-porches/vienna', label: 'Screened porches in Vienna' },
        { href: '/screened-porches/herndon', label: 'Screened porches in Herndon' },
        { href: '/screened-porches/reston', label: 'Screened porches in Reston' },
      ]}
      relatedLinks={[
        { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch builder in Northern Virginia' },
        { href: '/screened-porch-cost-northern-virginia', label: 'Screened porch cost in Northern Virginia' },
        { href: '/near-you/fairfax-county', label: 'Deck builder in Fairfax County' },
        { href: '/deck-builder-fairfax-va', label: 'Deck builder in Fairfax' },
      ]}
      dateModified="2026-11-05"
      faqs={[
        {
          q: 'Who builds screened porches in Fairfax County?',
          a: `Loudoun Decks builds screened porches in Fairfax County, including Fairfax, Centreville, McLean, Vienna, Herndon, and Reston. ${PARTNER_SENTENCE} Call (571) 655-7207 or request a written estimate.`,
        },
        {
          q: 'Who is a screened porch contractor near me in Fairfax County?',
          a: 'Loudoun Decks serves Fairfax County from its Centreville, VA office. If the property is in the City of Fairfax, Falls Church, or Alexandria, say so when you call (571) 655-7207, because those cities use their own permit offices.',
        },
        {
          q: 'Which permit office reviews a Fairfax County screened porch?',
          a: 'A Fairfax County parcel uses the county permit path in the Fairfax County permit guide. The City of Fairfax, Falls Church, and Alexandria use their own offices. HOA review, when required, is separate from either permit.',
        },
        {
          q: 'How much does a screened porch cost in Fairfax County?',
          a: 'Loudoun Decks 2026 quoted prices: a roofed or screened porch with an attached open deck (120–236 sq ft of deck) was about $77,000–$112,500 in September–October 2026 quotes. Those figures are quoted prices for Northern Virginia, not a guarantee and not a Fairfax-only rate. The written estimate is the only project price.',
        },
      ]}
    />
  );
}
