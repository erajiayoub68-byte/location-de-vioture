import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('api/blog')
export class BlogController {
  @Get()
  findAll(@Query('lang') lang = 'fr') {
    return { lang, items: [] };
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string, @Query('lang') lang = 'fr') {
    return { slug, lang, toc: [], relatedLinks: [] };
  }
}
