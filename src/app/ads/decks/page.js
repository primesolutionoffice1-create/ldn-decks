import AdLandingPage from '../_components/AdLandingPage';
import { landingPages } from '../landingPages';
import { buildMetadata } from '@/lib/seo';

const page = landingPages.decks;

export const metadata = buildMetadata({
  path: page.path,
  title: 'Custom Deck Estimates in Northern Virginia | Loudoun Decks',
  description: page.description,
  image: page.image.src,
});

export default function AdsDecksPage() {
  return <AdLandingPage page={page} />;
}
