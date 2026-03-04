import { Controller, Get, Query } from '@nestjs/common';
import { cars } from '../../common/mock-data.js';

@Controller('search')
export class SearchController {
  @Get()
  find(@Query() query: Record<string, string>) {
    const lang = (query.lang as 'ar' | 'fr' | 'en') ?? 'fr';
    const items = cars.filter((car) => !query.gear || car.gear === query.gear).map((car) => ({
      slug: car.slug[lang],
      name: car.name[lang],
      price: car.price
    }));
    return { query, items };
  }
}
