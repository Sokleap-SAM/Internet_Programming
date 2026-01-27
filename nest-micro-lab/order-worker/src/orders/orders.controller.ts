<<<<<<< Updated upstream
import { Body, Controller, Delete, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Notify } from 'src/notifications/notify.decorator';
import { VerifyCustomerPipe } from 'src/modules/customers/pipes/verify-customer.pipe';
=======
import { Body, Controller, Delete, Get, Post, Req, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Notify } from 'src/notifications/notify.decorator';
import { VerifyCustomerPipe } from 'src/modules/customers/pipes/verify-customer.pipe';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
>>>>>>> Stashed changes

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Post()
  @Notify('Orders', 'order_created')
  create(@Body(VerifyCustomerPipe) body: any) {
    return this.ordersService.createOrder(body);
  }

<<<<<<< Updated upstream
=======
  @UseGuards(JwtAuthGuard)
>>>>>>> Stashed changes
  @Delete()
  delete() {
    return this.ordersService.deleteOrder();
  }
<<<<<<< Updated upstream
=======

  @UseGuards(JwtAuthGuard)
  @Get()
  list(@Req() req: any) {
    return { user: req.user, orders: [] };
  }
>>>>>>> Stashed changes
}
