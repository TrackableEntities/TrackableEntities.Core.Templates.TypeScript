import { TrackableEntity } from 'trackable-entities';
import { Order } from './Order';
import { Product } from './Product';

export class OrderDetail extends TrackableEntity {

  orderDetailId: number;
  orderId: number;
  productId: number;
  unitPrice: number;
  quantity: number;
  discount: number;
  order: Order;
  product: Product;

  constructor() {
    super();
    return super.proxify(this);
  }
}
