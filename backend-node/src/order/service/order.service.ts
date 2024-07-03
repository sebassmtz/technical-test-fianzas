import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { OrderProductService } from 'src/order-product/service/order-product.service';
import { LoadProductDto } from '../dto/load-product.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @Inject(forwardRef(() => OrderProductService))
    private readonly orderProductService: OrderProductService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.save({
      date_sale: createOrderDto.date_sale,
      is_delivered: createOrderDto.is_delivered,
      price_delivery: createOrderDto.price_delivery,
      price_total: createOrderDto.price_total,
    });
    //  Agregan los productos a la orden
    if (createOrderDto.products) {
      const products = await this.addProductToOrder(
        createOrderDto.products,
        order.id,
      );
      if (!products) {
        throw new BadRequestException('Error adding products to order');
      }
      return await this.findOne(order.id);
    } else {
      return order;
    }
  }

  async addProductToOrder(products: LoadProductDto[], orderId: number) {
    console.info('agregar productos a la orden');
    for (const product of products) {
      try {
        console.log('ID De la orden:', orderId);

        await this.orderProductService.create({
          productId: product.productId,
          orderId: orderId,
          quantity: product.quantity,
          comment: product.comment,
        });
      } catch (error) {
        return false;
      }
    }
    return true;
  }

  async findAll() {
    return await this.orderRepository.find({
      relations: ['orderProduct'],
    });
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new BadRequestException('Order not found');
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const product = await this.orderRepository.findOneBy({ id });
    if (!product) {
      throw new BadRequestException('Order not found');
    }
    return await this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new BadRequestException('Order not found');
    }
    return await this.orderRepository.softDelete(order);
  }
}
