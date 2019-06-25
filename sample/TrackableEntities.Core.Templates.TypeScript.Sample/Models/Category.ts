import { TrackableEntity } from 'trackable-entities';
import { Product } from './Product';

export class Category extends TrackableEntity {

  categoryId: number;
  categoryName: string;
  product: Product[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
