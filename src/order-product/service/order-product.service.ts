import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateOrderProductDto } from '../dto/create-order-product.dto';
import { UpdateOrderProductDto } from '../dto/update-order-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from '../entities/order-product.entity';
import { OrderService } from 'src/order/service/order.service';
import { ProductService } from 'src/product/service/product.service';
import { Repository } from 'typeorm';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>,
    @Inject(forwardRef(() => OrderService))
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) {}

  async create(createOrderProductDto: CreateOrderProductDto) {
    const order = await this.orderService.findOne(
      createOrderProductDto.orderId,
    );
    if (!order) {
      throw new BadRequestException('Order not found');
    }
    const product = await this.productService.findOne(
      createOrderProductDto.productId,
    );
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    const orderProduct = this.orderProductRepository.create({
      quantity: createOrderProductDto.quantity,
      comment: createOrderProductDto.comment,
      product: product,
      order: order,
    });
    return await this.orderProductRepository.save(orderProduct);
  }

  async findAll() {
    return await this.orderProductRepository.find();
  }

  async findOne(id: number) {
    const orderProduct = await this.orderProductRepository.findOneBy({ id });
    if (!orderProduct) {
      throw new BadRequestException('OrderProduct not found');
    }
    return orderProduct;
  }

  async update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    const orderProduct = await this.orderProductRepository.findOneBy({ id });
    if (!orderProduct) {
      throw new BadRequestException('OrderProduct not found');
    }

    const order = await this.orderService.findOne(
      updateOrderProductDto.orderId,
    );
    if (!order) {
      throw new BadRequestException('Order not found');
    }
    const product = await this.productService.findOne(
      updateOrderProductDto.productId,
    );
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    return await this.orderProductRepository.update(id, {
      quantity: updateOrderProductDto.quantity,
      comment: updateOrderProductDto.comment,
      order,
      product,
    });
  }

  async remove(id: number) {
    const orderProduct = await this.orderProductRepository.findOneBy({ id });
    if (!orderProduct) {
      throw new BadRequestException('OrderProduct not found');
    }
    return await this.orderProductRepository.softDelete(id);
  }
}
