import { IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsDateString()
  date_sale: Date;

  @IsOptional()
  @IsBoolean()
  is_delivered?: boolean;

  @IsOptional()
  @IsNumber()
  price_delivery?: number;

  @IsOptional()
  @IsNumber()
  price_total?: number;

  // @IsOptional()
  // @IsInt()
  // @IsPositive()
  // userId: number;
}
