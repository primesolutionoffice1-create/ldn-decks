import { notFound } from 'next/navigation';
import LocalServicePage from '@/components/LocalServicePage';
import { getCityBySlug, getLocalServiceParams, servicePageTypes, shouldIndexLocalServicePage } from '@/data/localServicePages';
import { buildMetadata } from '@/lib/seo';

const serviceKey = 'composite-decks';

export function generateStaticParams() {
  return getLocalServiceParams(serviceKey).map(({ city }) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  return buildMetadata({
    path: `/${servicePageTypes[serviceKey].path}/${cityData.citySlug}`,
    title: `Composite Deck Builder ${cityData.city} VA | Trex & TimberTech`,
    description: `Composite deck builder in ${cityData.city}, VA. Trex, TimberTech and AZEK decks with permits, HOA support, hidden fasteners and free estimates.`,
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

