import type { Locale } from '@/lib/i18n';

const labels: Record<Locale, { city: string; pickup: string; dropoff: string; cta: string }> = {
  fr: { city: 'Ville', pickup: 'Départ', dropoff: 'Retour', cta: 'Rechercher' },
  en: { city: 'City', pickup: 'Pickup', dropoff: 'Return', cta: 'Search' },
  ar: { city: 'المدينة', pickup: 'تاريخ الاستلام', dropoff: 'تاريخ الإرجاع', cta: 'ابحث' }
};

export function SearchWidget({ lang }: { lang: Locale }) {
  const t = labels[lang];
  return (
    <form className="card grid" action={`/${lang}/search`}>
      <label>{t.city}<input name="city" defaultValue="casablanca" /></label>
      <label>{t.pickup}<input name="start" type="date" /></label>
      <label>{t.dropoff}<input name="end" type="date" /></label>
      <button className="btn" type="submit">{t.cta}</button>
    </form>
  );
}
