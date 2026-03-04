import { Controller, Get, Param, Query } from '@nestjs/common';
import { IsIn, IsOptional } from 'class-validator';
import { CitiesService } from './cities.service.js';

class LangQueryDto {
  @IsOptional()
  @IsIn(['ar', 'fr', 'en'])
  lang?: 'ar' | 'fr' | 'en';
}

@Controller('api/cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll(@Query() query: LangQueryDto) {
    return this.citiesService.findAll(query.lang ?? 'fr');
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string, @Query() query: LangQueryDto) {
    return this.citiesService.findBySlug(slug, query.lang ?? 'fr');
  }
}
