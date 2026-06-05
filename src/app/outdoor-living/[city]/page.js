import { notFound } from 'next/navigation';
import LocalServicePage from '@/components/LocalServicePage';
import { getCityBySlug, getLocalServiceParams, servicePageTypes } from '@/data/localServicePages';
import { buildMetadata } from '@/lib/seo';

const serviceKey = 'outdoor-living';

export function generateStaticParams() {
  return getLocalServiceParams(serviceKey).map(({ city }) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  return buildMetadata({
    path: `/${servicePageTypes[serviceKey].path}/${cityData.citySlug}`,
    title: `Outdoor Living Contractor ${cityData.city} VA | Decks & Patios`,
    description: `Outdoor living contractor in ${cityData.city}, VA. Decks, patios, screened porches, pergolas, fire features, lighting and complete backyard plans.`,
    image: servicePageTypes[serviceKey].image,
  });
}

export default async function Page({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();
  return <LocalServicePage city={cityData} serviceKey={serviceKey} />;
}

