import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { PORCH_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/screened-porch-contractor-prince-william-county';
const description = 'Screened porch contractor in Prince William County. Recent quotes for a roofed porch with a deck: about $77,000–$112,500. Written estimate only.';

export const metadata = buildMetadata({
  path,
  title: 'Prince William Screened Porch Contractor | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Prince William Screened Porch Contractor | Loudoun Decks"
      description={description}
      h1="Screened Porch Contractor in Prince William County, VA"
      serviceName="Screened Porch Construction in Prince William County"
      serviceType="Screened porch contractor"
      category="Screened Porch Construction"
      countyName="Prince William County"
      countySlug="prince-william-county"
      areaServedName="Prince William County, VA"
      question="Who is a screened porch contractor in Prince William County?"
      answer={`Loudoun Decks is a screened porch contractor for Prince William County, including Woodbridge, Lake Ridge, Gainesville, Haymarket, and Bristow. Manassas and Manassas Park are independent cities with their own permit offices. ${PARTNER_SENTENCE} A roofed or screened porch with an attached open deck was about $77,000–$112,500 in recent September–October 2026 quotes. Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[PORCH_QUOTED]}
      localParagraphs={[
        'Screened porch additions are a common request in Woodbridge and Lake Ridge, often next to an open deck. County parcels use the Prince William County permit office. Manassas and Manassas Park do not. Confirm the parcel before you choose an office.',
        'The quoted range above comes from recent Northern Virginia porch-and-deck quotes. It is not a Prince William percentage and not a per-square-foot porch rate.',
      ]}
      permitHref="/deck-permit-prince-william-county-virginia"
      permitLabel="Prince William County permit guide"
      serviceCityLinks={[
        { href: '/screened-porches/woodbridge', label: 'Screened porches in Woodbridge' },
        { href: '/screened-porches/manassas', label: 'Screened porches in Manassas' },
      ]}
      relatedLinks={[
        { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch builder in Northern Virginia' },
        { href: '/screened-porch-cost-northern-virginia', label: 'Screened porch cost in Northern Virginia' },
        { href: '/near-you/prince-william-county', label: 'Deck builder in Prince William County' },
        { href: '/deck-builder-woodbridge-va', label: 'Deck builder in Woodbridge' },
        { href: '/screened-porch-contractor-fairfax-county', label: 'Screened porch contractor in Fairfax County' },
        { href: '/screened-porch-contractor-loudoun-county', label: 'Screened porch contractor in Loudoun County' },
        { href: '/screened-porch-contractor-arlington-county', label: 'Screened porch contractor in Arlington County' },
      ]}
      dateModified="2026-11-06"
      faqs={[
        {
          q: 'Who builds screened porches in Prince William County?',
          a: 'Loudoun Decks builds screened porches in Prince William County, including Woodbridge, Lake Ridge, Gainesville, Haymarket, and Bristow. We install Trex and TimberTech decking and work with both as partner brands. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who is a screened porch contractor near me in Prince William County?',
          a: 'Loudoun Decks serves Prince William County from its Centreville, VA office. If the property is in Manassas or Manassas Park, say so when you call (571) 655-7207, because those cities use their own permit offices.',
        },
        {
          q: 'Which permit office reviews a Prince William screened porch?',
          a: 'A Prince William County parcel uses the county permit path in the Prince William County permit guide. Manassas and Manassas Park are independent cities and use their own offices. HOA review, when required, is separate from either permit.',
        },
        {
          q: 'How much does a screened porch cost in Prince William County?',
          a: 'Loudoun Decks 2026 quoted prices: a roofed or screened porch with an attached open deck (120–236 sq ft of deck) was about $77,000–$112,500 in September–October 2026 quotes. Those figures are Northern Virginia quoted prices, not a Prince William guarantee. The written estimate is the only project price.',
        },
      ]}
    />
  );
}
