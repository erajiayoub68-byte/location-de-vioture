import { CarCard } from '@/components/CarCard';
import { cars } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export default function SearchPage({ params, searchParams }: { params: { lang: Locale }; searchParams: { city?: string; gear?: string } }) {
  const filtered = cars.filter((car) => (!searchParams.gear || car.gear === searchParams.gear));
  return (
    <main className="container">
      <h1>Search Results ({filtered.length})</h1>
      <div className="grid cards">{filtered.map((car) => <CarCard key={car.id} car={car} lang={params.lang} />)}</div>
    </main>
  );
}
