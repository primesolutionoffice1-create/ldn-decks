import { notFound } from 'next/navigation';
import LocalServicePage from '@/components/LocalServicePage';
import { getCityBySlug, getLocalServiceParams, servicePageTypes, shouldIndexLocalServicePage } from '@/data/localServicePages';
import { FAIRFAX_SCREENED_PORCH_DESCRIPTION, FAIRFAX_SCREENED_PORCH_TITLE } from '@/data/fairfaxScreenedPorchCitation';
import { buildMetadata } from '@/lib/seo';

const serviceKey = 'screened-porches';

export function generateStaticParams() {
  return getLocalServiceParams(serviceKey).map(({ city }) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  const fairfaxScreened = cityData.citySlug === 'fairfax';
  return buildMetadata({
    path: `/${servicePageTypes[serviceKey].path}/${cityData.citySlug}`,
    title: fairfaxScreened ? FAIRFAX_SCREENED_PORCH_TITLE : `Screened Porch Builder ${cityData.city} VA | Three-Season Rooms`,
    description: fairfaxScreened
      ? FAIRFAX_SCREENED_PORCH_DESCRIPTION
      : `Screened porch builder in ${cityData.city}, VA. Custom porches, covered deck conversions, EZE-Breeze options, permits and HOA support.`,
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

