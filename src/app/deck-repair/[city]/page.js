import { notFound } from 'next/navigation';
import LocalServicePage from '@/components/LocalServicePage';
import { getCityBySlug, getLocalServiceParams, servicePageTypes } from '@/data/localServicePages';
import { buildMetadata } from '@/lib/seo';

const serviceKey = 'deck-repair';

export function generateStaticParams() {
  return getLocalServiceParams(serviceKey).map(({ city }) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  return buildMetadata({
    path: `/${servicePageTypes[serviceKey].path}/${cityData.citySlug}`,
    title: `Deck Repair ${cityData.city} VA | Structural Deck Contractor`,
    description: `Deck repair in ${cityData.city}, VA. Structural inspections, stair repair, railing repair, board replacement and resurfacing guidance from Loudoun Decks.`,
    image: servicePageTypes[serviceKey].image,
  });
}

export default async function Page({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();
  return <LocalServicePage city={cityData} serviceKey={serviceKey} />;
}

