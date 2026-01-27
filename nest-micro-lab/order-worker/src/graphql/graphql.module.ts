import { Module } from '@nestjs/common';

import { CategoryModule } from 'src/modules/category/category.module';
import { ProductModule } from 'src/modules/products/product.module';
<<<<<<< Updated upstream
import { CategoryCodeFirstResolver } from './resolvers/category.codefirst.resolver';
import { ProductCodeFirstResolver } from './resolvers/product.codefirst.resolver';
// import { CategoryResolver } from './resolvers/category.resolver';
// import { ProductResolver } from './resolvers/product.resolver';
=======
// import { CategoryCodeFirstResolver } from './resolvers/category.codefirst.resolver';
// import { ProductCodeFirstResolver } from './resolvers/product.codefirst.resolver';
import { CategoryResolver } from './resolvers/category.resolver';
import { ProductResolver } from './resolvers/product.resolver';
>>>>>>> Stashed changes

@Module({
  imports: [CategoryModule, ProductModule],
  providers: [
<<<<<<< Updated upstream
    // CategoryResolver,
    CategoryCodeFirstResolver,
    // ProductResolver,
    ProductCodeFirstResolver,
=======
    CategoryResolver,
    // CategoryCodeFirstResolver,
    ProductResolver,
    // ProductCodeFirstResolver,
>>>>>>> Stashed changes
  ],
})
export class AppGraphqlModule {}
