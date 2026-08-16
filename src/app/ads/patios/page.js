import AdLandingPage from '../_components/AdLandingPage';
import { landingPages } from '../landingPages';
import { buildMetadata } from '@/lib/seo';

const page = landingPages.patios;

export const metadata = buildMetadata({
  path: page.path,
  title: 'Deck and Patio Estimates Northern Virginia | Loudoun Decks',
  description: page.description,
  image: page.image.src,
});

export default function AdsPatiosPage() {
  return <AdLandingPage page={page} />;
}
