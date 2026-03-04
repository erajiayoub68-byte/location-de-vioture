import type { ReactNode } from 'react';
import { directionByLocale, isLocale, type Locale, locales } from '@/lib/i18n';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { lang: string } }) {
  const lang: Locale = isLocale(params.lang) ? params.lang : 'fr';
  return (
    <div lang={lang} dir={directionByLocale[lang]}>
      <header className="header">
        <div className="container">
          <strong>Morocco Cars</strong>
        </div>
      </header>
      {children}
    </div>
  );
}
