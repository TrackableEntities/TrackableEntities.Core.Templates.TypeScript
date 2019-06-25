import { TrackableEntity } from 'trackable-entities';
import { Category } from './Category';
import { OrderDetail } from './OrderDetail';

export class Product extends TrackableEntity {

  productId: number;
  productName: string;
  categoryId: number;
  unitPrice: number;
  discontinued: boolean;
  rowVersion: any;
  category: Category;
  orderDetail: OrderDetail[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
