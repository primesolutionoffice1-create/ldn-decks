import { notFound } from 'next/navigation';
import LocalServicePage from '@/components/LocalServicePage';
import { getCityBySlug, getLocalServiceParams, servicePageTypes } from '@/data/localServicePages';
import { buildMetadata } from '@/lib/seo';

const serviceKey = 'wood-decks';

export function generateStaticParams() {
  return getLocalServiceParams(serviceKey).map(({ city }) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  return buildMetadata({
    path: `/${servicePageTypes[serviceKey].path}/${cityData.citySlug}`,
    title: `Wood Deck Builder ${cityData.city} VA | Cedar & PT Decks`,
    description: `Wood deck builder in ${cityData.city}, VA. Pressure-treated and cedar deck construction with safe framing, railings, stairs, permits and free estimates.`,
    image: servicePageTypes[serviceKey].image,
  });
}

export default async function Page({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();
  return <LocalServicePage city={cityData} serviceKey={serviceKey} />;
}

