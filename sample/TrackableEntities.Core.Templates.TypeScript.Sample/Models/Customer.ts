import { TrackableEntity } from 'trackable-entities';
import { CustomerSetting } from './CustomerSetting';
import { Order } from './Order';

export class Customer extends TrackableEntity {

  customerId: string;
  companyName: string;
  contactName: string;
  city: string;
  country: string;
  customerSetting: CustomerSetting;
  order: Order[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
