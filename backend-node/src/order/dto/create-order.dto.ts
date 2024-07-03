import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { LoadProductDto } from './load-product.dto';

export class CreateOrderDto {
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

  // @IsInt()
  // @IsPositive()
  // userId: number;

  // Array de productos
  @IsOptional()
  @IsArray()
  products: LoadProductDto[];
}
