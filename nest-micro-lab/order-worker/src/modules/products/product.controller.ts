import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
<<<<<<< Updated upstream
=======
  UseGuards,
>>>>>>> Stashed changes
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
<<<<<<< Updated upstream
=======
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
>>>>>>> Stashed changes

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.service.create(dto);
  }

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Get()
  findAll() {
    return this.service.findAll();
  }

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.service.update(id, dto);
  }

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
