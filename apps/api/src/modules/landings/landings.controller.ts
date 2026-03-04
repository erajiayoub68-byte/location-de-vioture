import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('api/landings')
export class LandingsController {
  @Get(':slug')
  findOne(@Param('slug') slug: string, @Query('lang') lang = 'fr') {
    return { slug, lang, templateKey: 'airport-city', content: {} };
  }
}
