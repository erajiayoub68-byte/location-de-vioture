import type { MetadataRoute } from 'next';
import { sitemapSources } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapSources().map((path) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${path}`,
    lastModified: new Date()
  }));
}
