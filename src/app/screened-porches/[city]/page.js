import { notFound } from 'next/navigation';
import LocalServicePage from '@/components/LocalServicePage';
import { getCityBySlug, getLocalServiceParams, servicePageTypes } from '@/data/localServicePages';
import { buildMetadata } from '@/lib/seo';

const serviceKey = 'screened-porches';

export function generateStaticParams() {
  return getLocalServiceParams(serviceKey).map(({ city }) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  return buildMetadata({
    path: `/${servicePageTypes[serviceKey].path}/${cityData.citySlug}`,
    title: `Screened Porch Builder ${cityData.city} VA | Three-Season Rooms`,
    description: `Screened porch builder in ${cityData.city}, VA. Custom porches, covered deck conversions, EZE-Breeze options, permits and HOA support.`,
    image: servicePageTypes[serviceKey].image,
  });
}

export default async function Page({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();
  return <LocalServicePage city={cityData} serviceKey={serviceKey} />;
}

