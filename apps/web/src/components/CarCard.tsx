import type { Car } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export function CarCard({ car, lang }: { car: Car; lang: Locale }) {
  return (
    <article className="card">
      <h3>{car.name[lang]}</h3>
      <p>{car.gear} · {car.seats} seats</p>
      <p><strong>{car.price} MAD/day</strong></p>
      <a className="btn" href={`/${lang}/cars/${car.slug[lang]}`}>Details</a>
    </article>
  );
}
