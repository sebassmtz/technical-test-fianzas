import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  comment?: string;

  @ManyToOne(() => Order, (order) => order.orderProduct, {})
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderProduct, {
    eager: true,
  })
  product: Product;

  @DeleteDateColumn()
  deletedAt?: Date;
}
