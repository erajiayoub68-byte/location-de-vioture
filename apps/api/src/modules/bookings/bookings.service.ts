import { BadRequestException, Injectable } from '@nestjs/common';
import { bookings, cars } from '../../common/mock-data.js';
import { CreateBookingDto } from './dto-create-booking.js';

@Injectable()
export class BookingsService {
  create(dto: CreateBookingDto) {
    const start = new Date(dto.startDate);
    const end = new Date(dto.endDate);
    if (end <= start) throw new BadRequestException('endDate must be after startDate');

    const overlap = bookings.some((b) =>
      b.carId === dto.carId && !(new Date(b.endDate) <= start || new Date(b.startDate) >= end)
    );
    if (overlap) throw new BadRequestException('Car unavailable in selected period');

    const car = cars.find((item) => item.id === dto.carId);
    if (!car) throw new BadRequestException('Invalid carId');

    const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / 86400000));
    const insurance = dto.insuranceChosen ? 60 * days : 0;
    const totalPrice = car.price * days + insurance + (dto.pickupType === 'airport' ? 80 : 0);

    const reference = `BK-${Date.now().toString().slice(-8)}`;
    bookings.push({ carId: dto.carId, startDate: dto.startDate, endDate: dto.endDate, reference });

    return { reference, status: 'pending', totalPrice };
  }
}
