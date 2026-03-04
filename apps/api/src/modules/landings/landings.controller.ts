import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('landings')
export class LandingsController {
  @Get(':slug')
  findOne(@Param('slug') slug: string, @Query('lang') lang = 'fr') {
    return {
      slug,
      lang,
      templateKey: slug.includes('aeroport') ? 'airport' : slug.includes('pas-cher') ? 'budget' : 'long-duration',
      heroTitle: `Landing ${slug}`
    };
  }
}
