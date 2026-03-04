import type { City } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export function CityCard({ city, lang }: { city: City; lang: Locale }) {
  return (
    <article className="card">
      <h3>{city.name[lang]}</h3>
      <p>{city.teaser[lang]}</p>
      <a href={`/${lang}/location-voiture-${city.slug[lang]}`}>SEO page</a>
    </article>
  );
}
