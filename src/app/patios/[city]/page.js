import { notFound } from 'next/navigation';
import LocalServicePage from '@/components/LocalServicePage';
import { getCityBySlug, getLocalServiceParams, servicePageTypes, shouldIndexLocalServicePage } from '@/data/localServicePages';
import { buildMetadata } from '@/lib/seo';

const serviceKey = 'patios';

export function generateStaticParams() {
  return getLocalServiceParams(serviceKey).map(({ city }) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  return buildMetadata({
    path: `/${servicePageTypes[serviceKey].path}/${cityData.citySlug}`,
    title: `Patio Contractor ${cityData.city} VA | Paver & Stone Patios`,
    description: `Patio contractor in ${cityData.city}, VA. Paver patios, bluestone, flagstone, stamped concrete, drainage planning and free local estimates.`,
    image: servicePageTypes[serviceKey].image,
    noIndex: !shouldIndexLocalServicePage(serviceKey, cityData.citySlug),
  });
}

export default async function Page({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();
  return <LocalServicePage city={cityData} serviceKey={serviceKey} />;
}

