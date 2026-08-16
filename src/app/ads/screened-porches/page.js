import AdLandingPage from '../_components/AdLandingPage';
import { landingPages } from '../landingPages';
import { buildMetadata } from '@/lib/seo';

const page = landingPages.screenedPorches;

export const metadata = buildMetadata({
  path: page.path,
  title: 'Screened Porch Estimates Northern Virginia | Loudoun Decks',
  description: page.description,
  image: page.image.src,
});

export default function AdsScreenedPorchesPage() {
  return <AdLandingPage page={page} />;
}
