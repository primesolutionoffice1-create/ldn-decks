import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { PORCH_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/screened-porch-contractor-loudoun-county';
const description = 'Screened porch contractor in Loudoun County. Recent quotes for a roofed porch with a deck: about $77,000–$112,500. Written estimate only.';

export const metadata = buildMetadata({
  path,
  title: 'Screened Porch Contractor in Loudoun County | Loudoun Decks',
  description,
});

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name="Screened Porch Contractor in Loudoun County | Loudoun Decks"
      description={description}
      h1="Screened Porch Contractor in Loudoun County, VA"
      serviceName="Screened Porch Construction in Loudoun County"
      serviceType="Screened porch contractor"
      category="Screened Porch Construction"
      countyName="Loudoun County"
      countySlug="loudoun-county"
      areaServedName="Loudoun County, VA"
      question="Who is a screened porch contractor in Loudoun County?"
      answer={`Loudoun Decks is a screened porch contractor for Loudoun County, including Ashburn, Leesburg, Sterling, Brambleton, Purcellville, and South Riding. ${PARTNER_SENTENCE} A roofed or screened porch with an attached open deck was about $77,000–$112,500 in recent September–October 2026 quotes. Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[PORCH_QUOTED]}
      localParagraphs={[
        'A roofed screened porch in Loudoun County does not use the county Typical Deck path. The porch needs its own plan set. Confirm that path in the Loudoun County permit guide before work starts. Incorporated towns can use a different intake than unincorporated Loudoun.',
        'Screened porch projects here are often tied to an open deck. The quoted range above is for that combined scope in recent Northern Virginia quotes. It is not a per-square-foot porch rate and not a Loudoun-only price.',
      ]}
      permitHref="/deck-permit-loudoun-county-virginia"
      permitLabel="Loudoun County permit guide"
      serviceCityLinks={[
        { href: '/screened-porches/ashburn', label: 'Screened porches in Ashburn' },
        { href: '/screened-porches/leesburg', label: 'Screened porches in Leesburg' },
        { href: '/screened-porches/sterling', label: 'Screened porches in Sterling' },
      ]}
      relatedLinks={[
        { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch builder in Northern Virginia' },
        { href: '/screened-porch-cost-northern-virginia', label: 'Screened porch cost in Northern Virginia' },
        { href: '/near-you/loudoun-county', label: 'Deck builder in Loudoun County' },
        { href: '/deck-builders-loudoun', label: 'Custom deck builders in Loudoun County' },
        { href: '/screened-porch-contractor-fairfax-county', label: 'Screened porch contractor in Fairfax County' },
      ]}
      faqs={[
        {
          q: 'Who builds screened porches in Loudoun County?',
          a: 'Loudoun Decks builds screened porches in Loudoun County, including Ashburn, Leesburg, Sterling, Brambleton, Purcellville, and South Riding. We install Trex and TimberTech decking and work with both as partner brands. Call (571) 655-7207 or request a written estimate.',
        },
        {
          q: 'Who is a screened porch contractor near me in Loudoun County?',
          a: 'Loudoun Decks serves Loudoun County homeowners from its Centreville, VA office. A screened porch near you is scoped after a site visit. Call (571) 655-7207 and ask for a written estimate.',
        },
        {
          q: 'Does a Loudoun County screened porch use the Typical Deck permit?',
          a: 'No. A roofed screened porch needs its own plan set. The Loudoun County permit guide explains the deck path and the limits of the Typical Deck detail. HOA review, when a community requires it, is separate from the county permit.',
        },
        {
          q: 'How much does a screened porch cost in Loudoun County?',
          a: 'Loudoun Decks 2026 quoted prices: a roofed or screened porch with an attached open deck (120–236 sq ft of deck) was about $77,000–$112,500 in September–October 2026 quotes. Those figures are quoted prices for Northern Virginia, not a guarantee and not a Loudoun-only rate. The written estimate is the only project price.',
        },
      ]}
    />
  );
}
