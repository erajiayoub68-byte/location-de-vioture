import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { CitiesModule } from './cities/cities.module.js';
import { CarsModule } from './cars/cars.module.js';
import { BookingsModule } from './bookings/bookings.module.js';
import { BlogModule } from './blog/blog.module.js';
import { LandingsModule } from './landings/landings.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 120 }]),
    AuthModule,
    CitiesModule,
    CarsModule,
    BookingsModule,
    BlogModule,
    LandingsModule
  ]
})
export class AppModule {}
