import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { Product } from './dto/entities/product.entity';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
<<<<<<< Updated upstream
=======
import { JwtStrategy } from 'src/strategies/jwt.strategy';
>>>>>>> Stashed changes

@Module({
  imports: [DatabaseModule.forFeature([Product])],
  controllers: [ProductController],
<<<<<<< Updated upstream
  providers: [ProductService],
=======
  providers: [ProductService, JwtStrategy],
>>>>>>> Stashed changes
  exports: [ProductService],
})
export class ProductModule {}
