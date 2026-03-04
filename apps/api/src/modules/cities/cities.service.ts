import { Injectable, NotFoundException } from '@nestjs/common';
import { cars, cities } from '../../common/mock-data.js';

@Injectable()
export class CitiesService {
  findAll(lang: 'ar' | 'fr' | 'en') {
    return cities.map((city) => ({ id: city.id, name: city.name[lang], slug: city.slug[lang] }));
  }

  findBySlug(slug: string, lang: 'ar' | 'fr' | 'en') {
    const city = cities.find((item) => item.slug[lang] === slug);
    if (!city) throw new NotFoundException('City not found');
    return {
      id: city.id,
      name: city.name[lang],
      slug,
      cars: cars.filter((car) => car.cityId === city.id).map((car) => ({ id: car.id, name: car.name[lang], price: car.price }))
    };
  }
}
