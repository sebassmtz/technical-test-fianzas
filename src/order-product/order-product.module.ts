import { forwardRef, Module } from '@nestjs/common';
import { OrderProductService } from './service/order-product.service';
import { OrderProductController } from './controller/order-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { ProductModule } from 'src/product/product.module';
import { OrderModule } from 'src/order/order.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderProduct]),
    ProductModule,
    forwardRef(() => OrderModule),
    AuthModule,
  ],
  controllers: [OrderProductController],
  providers: [OrderProductService],
  exports: [OrderProductService],
})
export class OrderProductModule {}
