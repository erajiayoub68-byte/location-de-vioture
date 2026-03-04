import { cities } from '@/data/content';
import type { Locale } from '@/lib/i18n';

function resolveSeoType(slug: string) {
  if (slug.startsWith('location-voiture-') || slug.startsWith('rent-car-') || slug.startsWith('كراء-سيارات-')) return 'city';
  if (slug.startsWith('location-voiture-aeroport-') || slug.startsWith('location-voiture-pas-cher-') || slug.startsWith('location-voiture-longue-duree-')) return 'landing';
  return 'unknown';
}

export default function SeoDynamicPage({ params }: { params: { lang: Locale; seoSlug: string } }) {
  const pageType = resolveSeoType(params.seoSlug);
  const matchCity = cities.find((c) => params.seoSlug.includes(c.slug[params.lang]));

  if (pageType === 'unknown') return <main className="container">Not found</main>;

  return (
    <main className="container card">
      <h1>{pageType === 'city' ? 'City SEO Page' : 'Landing SEO Page'}</h1>
      <p>Slug: {params.seoSlug}</p>
      <p>City: {matchCity?.name[params.lang] ?? 'N/A'}</p>
    </main>
  );
}
