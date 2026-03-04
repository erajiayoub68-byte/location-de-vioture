import { type Locale, locales } from './i18n';

export function buildAlternateLanguages(pathByLocale: Record<Locale, string>) {
  return {
    canonical: pathByLocale.fr,
    languages: {
      ar: pathByLocale.ar,
      fr: pathByLocale.fr,
      en: pathByLocale.en,
      'x-default': pathByLocale.fr
    }
  };
}

export function canonicalUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}${path}`;
}

export function sitemapSources() {
  return locales.flatMap((lang) => [
    `/sitemaps/${lang}-cities.xml`,
    `/sitemaps/${lang}-cars.xml`,
    `/sitemaps/${lang}-blog.xml`,
    `/sitemaps/${lang}-landings.xml`
  ]);
}
