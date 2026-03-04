import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  search(filters: Record<string, string>) {
    return { filters, items: [], pagination: { page: 1, size: 12, total: 0 } };
  }

  findBySlug(slug: string, lang: string) {
    return { slug, lang, priceBreakdown: null, reviews: [] };
  }
}
