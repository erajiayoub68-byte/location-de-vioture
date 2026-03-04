import { Injectable, NotFoundException } from '@nestjs/common';
import { cars } from '../../common/mock-data.js';

@Injectable()
export class CarsService {
  search(filters: Record<string, string>) {
    const lang = (filters.lang as 'ar' | 'fr' | 'en') ?? 'fr';
    const items = cars
      .filter((car) => (!filters.cityId || car.cityId === filters.cityId) && (!filters.gear || car.gear === filters.gear))
      .map((car) => ({ id: car.id, name: car.name[lang], slug: car.slug[lang], price: car.price, gear: car.gear }));
    return { items, pagination: { page: 1, size: 12, total: items.length } };
  }

  findBySlug(slug: string, lang: 'ar' | 'fr' | 'en') {
    const car = cars.find((item) => item.slug[lang] === slug);
    if (!car) throw new NotFoundException('Car not found');
    return { id: car.id, name: car.name[lang], slug, price: car.price, gear: car.gear, seats: car.seats };
  }
}
