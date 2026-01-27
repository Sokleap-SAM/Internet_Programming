import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { Category } from './entities/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
<<<<<<< Updated upstream
=======
import { JwtStrategy } from 'src/strategies/jwt.strategy';
>>>>>>> Stashed changes

@Module({
  imports: [DatabaseModule.forFeature([Category])],
  controllers: [CategoryController],
<<<<<<< Updated upstream
  providers: [CategoryService],
=======
  providers: [CategoryService, JwtStrategy],
>>>>>>> Stashed changes
  exports: [CategoryService],
})
export class CategoryModule {}
