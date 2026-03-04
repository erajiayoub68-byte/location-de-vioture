import { Injectable } from '@nestjs/common';

@Injectable()
export class CitiesService {
  findAll(lang: string) {
    return { lang, items: [], cache: 'redis:5m' };
  }

  findBySlug(slug: string, lang: string) {
    return { slug, lang, faqs: [], cars: [] };
  }
}
