import { directionByLocale, locales } from '../../lib/i18n';
import { buildAlternateLanguages } from '../../lib/seo';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: { lang: 'ar' | 'fr' | 'en' } }) {
  const { lang } = params;
  return {
    title: { fr: 'Location voiture Maroc', en: 'Car rental Morocco', ar: 'كراء سيارات المغرب' }[lang],
    alternates: buildAlternateLanguages({ ar: '/ar', fr: '/fr', en: '/en' })
  };
}

export default function HomePage({ params }: { params: { lang: 'ar' | 'fr' | 'en' } }) {
  return (
    <main dir={directionByLocale[params.lang]}>
      <h1>Conversion-first home with search widget, featured cars, reviews and FAQs.</h1>
    </main>
  );
}
