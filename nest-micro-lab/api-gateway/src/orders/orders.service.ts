import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDERS_SERVICE') private readonly client: ClientProxy) {}

  createOrder(orderDto: any) {
    // In real life we might validate or save to DB first
    // Here we just emit an event
    this.client.emit('order_created', '');
    return { status: 'Order accepted' , orderDto};
  }

  deleteOrder() {
    this.client.emit('order_deleted', 'aaa');
    return { status: 'Order deleted' };
  }
}
