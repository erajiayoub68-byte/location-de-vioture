import { Controller, Get, Param, Query } from '@nestjs/common';

const posts = {
  fr: [{ slug: 'guide-location-aeroport', title: 'Guide location aéroport', excerpt: 'Évitez les frais cachés.' }],
  en: [{ slug: 'airport-rental-guide', title: 'Airport rental guide', excerpt: 'How to pick the best offer.' }],
  ar: [{ slug: 'دليل-كراء-المطار', title: 'دليل كراء المطار', excerpt: 'خطوات الحجز الذكي.' }]
};

@Controller('blog')
export class BlogController {
  @Get()
  findAll(@Query('lang') lang = 'fr') {
    return { items: posts[lang as 'ar' | 'fr' | 'en'] ?? posts.fr };
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string, @Query('lang') lang = 'fr') {
    const post = (posts[lang as 'ar' | 'fr' | 'en'] ?? []).find((p) => p.slug === slug);
    return { ...post, contentMd: '# Article\nSEO oriented blog content', relatedCities: ['casablanca'] };
  }
}
