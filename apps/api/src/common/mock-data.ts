export const cities = [
  { id: 'casa', name: { fr: 'Casablanca', en: 'Casablanca', ar: 'الدار البيضاء' }, slug: { fr: 'casablanca', en: 'casablanca', ar: 'الدار-البيضاء' } },
  { id: 'marrakech', name: { fr: 'Marrakech', en: 'Marrakech', ar: 'مراكش' }, slug: { fr: 'marrakech', en: 'marrakech', ar: 'مراكش' } }
];

export const cars = [
  { id: 'duster', cityId: 'casa', price: 420, gear: 'automatic', seats: 5, slug: { fr: 'dacia-duster-auto-casa', en: 'dacia-duster-auto-casa', ar: 'داسيا-داستر-اوتوماتيك' }, name: { fr: 'Dacia Duster', en: 'Dacia Duster', ar: 'داسيا داستر' } },
  { id: 'clio', cityId: 'marrakech', price: 280, gear: 'manual', seats: 5, slug: { fr: 'renault-clio-marrakech', en: 'renault-clio-marrakech', ar: 'رينو-كليو-مراكش' }, name: { fr: 'Renault Clio', en: 'Renault Clio', ar: 'رينو كليو' } }
];

export const bookings: Array<{ carId: string; startDate: string; endDate: string; reference: string }> = [];
