import { CarCard } from '@/components/CarCard';
import { CityCard } from '@/components/CityCard';
import { SearchWidget } from '@/components/SearchWidget';
import { cars, cities, homeCopy } from '@/data/content';
import type { Locale } from '@/lib/i18n';
import { buildAlternateLanguages } from '@/lib/seo';

export const revalidate = 600;

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return {
    title: homeCopy[lang].title,
    description: homeCopy[lang].subtitle,
    alternates: buildAlternateLanguages({ ar: '/ar', fr: '/fr', en: '/en' })
  };
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <main className="container grid">
      <section className="card">
        <h1>{homeCopy[lang].title}</h1>
        <p>{homeCopy[lang].subtitle}</p>
      </section>
      <SearchWidget lang={lang} />
      <section>
        <h2>Featured Cars</h2>
        <div className="grid cards">{cars.map((car) => <CarCard key={car.id} car={car} lang={lang} />)}</div>
      </section>
      <section>
        <h2>Top Cities</h2>
        <div className="grid cards">{cities.map((city) => <CityCard key={city.id} city={city} lang={lang} />)}</div>
      </section>
    </main>
  );
}
