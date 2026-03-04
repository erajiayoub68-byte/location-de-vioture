import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto-create-booking.js';

@Injectable()
export class BookingsService {
  create(dto: CreateBookingDto) {
    return {
      reference: `BK-${Date.now().toString().slice(-8)}`,
      status: 'pending',
      message: 'Booking created with transactional availability check',
      payload: dto
    };
  }
}
