import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './modules/app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.use(helmet());
  app.enableCors({ origin: process.env.WEB_ORIGIN?.split(',') ?? ['http://localhost:3000'] });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const swagger = new DocumentBuilder()
    .setTitle('Morocco Car Rental API')
    .setDescription('Public and admin endpoints for multi-language rental platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swagger));

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
