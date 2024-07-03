import {
  IsBoolean,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MaxLength(500)
  description?: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  availability: boolean;
}
