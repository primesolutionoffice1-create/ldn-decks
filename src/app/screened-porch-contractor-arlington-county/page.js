import CountyServiceHub from '@/components/CountyServiceHub';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import { PORCH_QUOTED } from '@/lib/quotedPrices';
import { buildMetadata } from '@/lib/seo';

const path = '/screened-porch-contractor-arlington-county';
const title = 'Screened Porch Contractor in Arlington County | Loudoun Decks';
const description = 'Screened porch contractor in Arlington County. Recent quotes for a roofed porch with a deck: about $77,000–$112,500. Written estimate only.';

// buildMetadata trims titles to 60 characters and would drop "County".
// The published title stays the full string.
const metadataBase = buildMetadata({ path, title, description });

export const metadata = {
  ...metadataBase,
  title,
  openGraph: {
    ...metadataBase.openGraph,
    title,
    images: (metadataBase.openGraph.images || []).map((image) => (
      image && typeof image === 'object' ? { ...image, alt: title } : image
    )),
  },
  twitter: {
    ...metadataBase.twitter,
    title,
  },
};

export default function Page() {
  return (
    <CountyServiceHub
      path={path}
      name={title}
      description={description}
      h1="Screened Porch Contractor in Arlington County, VA"
      serviceName="Screened Porch Construction in Arlington County"
      serviceType="Screened porch contractor"
      category="Screened Porch Construction"
      countyName="Arlington County"
      countySlug="arlington-county"
      areaServedName="Arlington County, VA"
      question="Who is a screened porch contractor in Arlington County?"
      answer={`Loudoun Decks is a screened porch contractor for Arlington County, including Arlington, Rosslyn, Ballston, Clarendon, Crystal City, and Shirlington. Alexandria, Falls Church, and McLean are nearby and have their own pages. Alexandria and Falls Church use their own permit offices. McLean is in Fairfax County. ${PARTNER_SENTENCE} A roofed or screened porch with an attached open deck was about $77,000–$112,500 in recent September–October 2026 quotes. Those figures are Northern Virginia quotes, not an Arlington-only price. Call (571) 655-7207 or request a written estimate.`}
      priceParagraphs={[PORCH_QUOTED]}
      localParagraphs={[
        'Screened porch projects in Arlington County are often tied to an open deck. The quoted range above is for that combined scope in recent Northern Virginia quotes. It is not a per-square-foot porch rate and not an Arlington-only price.',
        'An Arlington County parcel uses the Arlington County permit guide. The City of Alexandria and the City of Falls Church use their own permit offices. McLean is in Fairfax County and uses the Fairfax County permit path. Confirm the jurisdiction before you apply.',
      ]}
      permitHref="/deck-permit-arlington-county-virginia"
      permitLabel="Arlington County permit guide"
      serviceCityLinks={[
        { href: '/deck-builder-arlington-va', label: 'Deck builder in Arlington' },
        { href: '/screened-porches/alexandria', label: 'Screened porches in Alexandria' },
        { href: '/screened-porches/falls-church', label: 'Screened porches in Falls Church' },
        { href: '/screened-porches/mclean', label: 'Screened porches in McLean' },
      ]}
      relatedLinks={[
        { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch builder in Northern Virginia' },
        { href: '/screened-porch-cost-northern-virginia', label: 'Screened porch cost in Northern Virginia' },
        { href: '/near-you/arlington-county', label: 'Deck builder in Arlington County' },
        { href: '/screened-porch-contractor-fairfax-county', label: 'Screened porch contractor in Fairfax County' },
        { href: '/screened-porch-contractor-loudoun-county', label: 'Screened porch contractor in Loudoun County' },
        { href: '/screened-porch-contractor-prince-william-county', label: 'Screened porch contractor in Prince William County' },
      ]}
      dateModified="2026-11-05"
      faqs={[
        {
          q: 'Who builds screened porches in Arlington County?',
          a: `Loudoun Decks builds screened porches in Arlington County, including Arlington, Rosslyn, Ballston, Clarendon, Crystal City, and Shirlington. ${PARTNER_SENTENCE} Call (571) 655-7207 or request a written estimate.`,
        },
        {
          q: 'Who is a screened porch contractor near me in Arlington County?',
          a: 'Loudoun Decks serves Arlington County from its Centreville, VA office. If the property is in the City of Alexandria or the City of Falls Church, say so when you call (571) 655-7207, because those cities use their own permit offices. McLean is in Fairfax County.',
        },
        {
          q: 'Which permit office reviews an Arlington County screened porch?',
          a: 'An Arlington County parcel uses the county permit path in the Arlington County permit guide. The City of Alexandria and the City of Falls Church use their own offices. McLean is in Fairfax County. HOA review, when required, is separate from the permit.',
        },
        {
          q: 'How much does a screened porch cost in Arlington County?',
          a: 'Loudoun Decks 2026 quoted prices: a roofed or screened porch with an attached open deck (120–236 sq ft of deck) was about $77,000–$112,500 in September–October 2026 quotes. Those figures are quoted prices for Northern Virginia, not a guarantee and not an Arlington-only rate. The written estimate is the only project price.',
        },
      ]}
    />
  );
}
