import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOrderProductDto {
  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  orderId: number;
}
