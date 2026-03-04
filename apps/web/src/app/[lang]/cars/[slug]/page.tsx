import { cars } from '@/data/content';
import { carProductJsonLd } from '@/lib/jsonld';
import type { Locale } from '@/lib/i18n';

export const revalidate = 1800;

export default function CarDetailsPage({ params }: { params: { lang: Locale; slug: string } }) {
  const car = cars.find((item) => item.slug[params.lang] === params.slug);
  if (!car) return <main className="container">Car not found</main>;

  return (
    <main className="container card">
      <h1>{car.name[params.lang]}</h1>
      <p>{car.price} MAD/day</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carProductJsonLd(car.name[params.lang], car.price)) }} />
    </main>
  );
}
