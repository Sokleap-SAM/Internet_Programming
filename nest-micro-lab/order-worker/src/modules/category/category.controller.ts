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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
<<<<<<< Updated upstream
=======
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
>>>>>>> Stashed changes

@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Post()
  create(@Body() dto: CreateCategoryDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
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
