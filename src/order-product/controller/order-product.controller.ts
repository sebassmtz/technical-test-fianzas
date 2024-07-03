import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderProductService } from '../service/order-product.service';
import { CreateOrderProductDto } from '../dto/create-order-product.dto';
import { UpdateOrderProductDto } from '../dto/update-order-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('order-product')
@ApiTags('Order-Product (Solo para test, se utilizan internamente en Order)')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post()
  @ApiOperation({
    summary: 'Create order-product',
  })
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductService.create(createOrderProductDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all order-products',
  })
  findAll() {
    return this.orderProductService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get order-product by id',
  })
  findOne(@Param('id') id: string) {
    return this.orderProductService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update order-product by id',
  })
  update(
    @Param('id') id: string,
    @Body() updateOrderProductDto: UpdateOrderProductDto,
  ) {
    return this.orderProductService.update(+id, updateOrderProductDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete order-product by id',
  })
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(+id);
  }
}
