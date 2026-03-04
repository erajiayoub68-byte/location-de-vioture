import { IsBoolean, IsDateString, IsEmail, IsEnum, IsString } from 'class-validator';

enum PickupType {
  airport = 'airport',
  downtown = 'downtown'
}

export class CreateBookingDto {
  @IsString() carId!: string;
  @IsString() cityId!: string;
  @IsDateString() startDate!: string;
  @IsDateString() endDate!: string;
  @IsEnum(PickupType) pickupType!: PickupType;
  @IsString() pickupLocation!: string;
  @IsBoolean() insuranceChosen!: boolean;
  @IsString() customerName!: string;
  @IsEmail() customerEmail!: string;
  @IsString() customerPhone!: string;
}
