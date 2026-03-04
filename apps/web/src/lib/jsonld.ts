export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Location de Voiture Maroc',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  sameAs: ['https://www.facebook.com/example', 'https://www.instagram.com/example']
};

export function carProductJsonLd(name: string, price: number, rating = 4.7) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: rating, reviewCount: 128 },
    offers: { '@type': 'Offer', priceCurrency: 'MAD', price, availability: 'https://schema.org/InStock' }
  };
}
