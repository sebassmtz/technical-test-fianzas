import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class LoadProductDto {
  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsNumber()
  @IsNotEmpty()
  productId: number;
}
