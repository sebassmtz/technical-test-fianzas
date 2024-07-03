import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from '../service/order.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';

@Controller('order')
@ApiTags('Order o Perdido')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Auth(Role.USER)
  @Post()
  @ApiOperation({
    summary: 'Crear un pedido',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los pedidos',
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un pedido por id',
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Auth(Role.USER)
  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar un pedido por id',
  })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Auth(Role.USER)
  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un pedido por id',
  })
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
