import type { Locale } from '@/lib/i18n';

const posts = {
  fr: [{ slug: 'guide-location-aeroport', title: 'Guide location aéroport Casablanca' }],
  en: [{ slug: 'airport-rental-guide', title: 'Casablanca airport rental guide' }],
  ar: [{ slug: 'دليل-كراء-المطار', title: 'دليل كراء السيارات من المطار' }]
};

export const revalidate = 3600;

export default function BlogIndexPage({ params }: { params: { lang: Locale } }) {
  return (
    <main className="container">
      <h1>Blog</h1>
      <ul>{posts[params.lang].map((p) => <li key={p.slug}><a href={`/${params.lang}/blog/${p.slug}`}>{p.title}</a></li>)}</ul>
    </main>
  );
}
