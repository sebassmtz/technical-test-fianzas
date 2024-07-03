import { OrderProduct } from 'src/order-product/entities/order-product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date_sale: Date;

  @Column({ default: false })
  is_delivered?: boolean;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  price_delivery?: number;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  price_total?: number;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    eager: true,
    cascade: true,
  })
  orderProduct: OrderProduct[];

  @DeleteDateColumn()
  deletedAt?: Date;
}
