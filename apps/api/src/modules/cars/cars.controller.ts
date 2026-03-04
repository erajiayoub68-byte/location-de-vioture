import { Controller, Get, Param, Query } from '@nestjs/common';
import { CarsService } from './cars.service.js';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(@Query() query: Record<string, string>) {
    return this.carsService.search(query);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string, @Query('lang') lang = 'fr') {
    return this.carsService.findBySlug(slug, lang as 'ar' | 'fr' | 'en');
  }
}
