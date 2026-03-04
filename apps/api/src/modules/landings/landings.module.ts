import { Module } from '@nestjs/common';
import { LandingsController } from './landings.controller.js';

@Module({ controllers: [LandingsController] })
export class LandingsModule {}
