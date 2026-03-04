import type { Locale } from '@/lib/i18n';

export type City = { id: string; slug: Record<Locale, string>; name: Record<Locale, string>; teaser: Record<Locale, string> };
export type Car = { id: string; cityId: string; slug: Record<Locale, string>; name: Record<Locale, string>; price: number; gear: 'automatic' | 'manual'; seats: number };

export const cities: City[] = [
  {
    id: 'casa',
    slug: { fr: 'casablanca', en: 'casablanca', ar: 'الدار-البيضاء' },
    name: { fr: 'Casablanca', en: 'Casablanca', ar: 'الدار البيضاء' },
    teaser: {
      fr: 'Offres premium avec retrait aéroport CMN.',
      en: 'Premium deals with airport and downtown pickup.',
      ar: 'عروض ممتازة مع الاستلام من المطار أو وسط المدينة.'
    }
  },
  {
    id: 'marrakech',
    slug: { fr: 'marrakech', en: 'marrakech', ar: 'مراكش' },
    name: { fr: 'Marrakech', en: 'Marrakech', ar: 'مراكش' },
    teaser: {
      fr: 'SUV et citadines pour la médina et l’Atlas.',
      en: 'City cars and SUVs tailored for Medina trips.',
      ar: 'سيارات اقتصادية وSUV مناسبة للتنقل داخل وخارج المدينة.'
    }
  }
];

export const cars: Car[] = [
  { id: 'duster', cityId: 'casa', slug: { fr: 'dacia-duster-auto-casa', en: 'dacia-duster-auto-casa', ar: 'داسيا-داستر-اوتوماتيك' }, name: { fr: 'Dacia Duster Auto', en: 'Dacia Duster Auto', ar: 'داسيا داستر أوتوماتيك' }, price: 420, gear: 'automatic', seats: 5 },
  { id: 'clio', cityId: 'marrakech', slug: { fr: 'renault-clio-marrakech', en: 'renault-clio-marrakech', ar: 'رينو-كليو-مراكش' }, name: { fr: 'Renault Clio', en: 'Renault Clio', ar: 'رينو كليو' }, price: 280, gear: 'manual', seats: 5 }
];

export const homeCopy: Record<Locale, { title: string; subtitle: string }> = {
  fr: { title: 'Location de voiture au Maroc', subtitle: 'Réservation rapide, prix transparents, assistance 7j/7.' },
  en: { title: 'Morocco car rental platform', subtitle: 'Fast booking, transparent pricing, multilingual support.' },
  ar: { title: 'منصة كراء سيارات في المغرب', subtitle: 'حجز سريع، أسعار واضحة، ودعم مستمر.' }
};
