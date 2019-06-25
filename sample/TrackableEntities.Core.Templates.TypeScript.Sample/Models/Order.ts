import { TrackableEntity } from 'trackable-entities';
import { Customer } from './Customer';
import { OrderDetail } from './OrderDetail';

export class Order extends TrackableEntity {

  orderId: number;
  customerId: string;
  orderDate: Date;
  shippedDate: Date;
  shipVia: number;
  freight: number;
  customer: Customer;
  orderDetail: OrderDetail[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
