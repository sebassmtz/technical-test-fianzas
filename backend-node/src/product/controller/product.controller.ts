import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Auth(Role.USER)
  @Post()
  @ApiOperation({
    summary: 'Create product',
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all products',
  })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get product by id',
  })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Auth(Role.USER)
  @Patch(':id')
  @ApiOperation({
    summary: 'Update product by id',
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Auth(Role.USER)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete product by id',
  })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
