import { TrackableEntity } from 'trackable-entities';
import { Customer } from './Customer';

export class CustomerSetting extends TrackableEntity {

  customerId: string;
  setting: string;
  customer: Customer;

  constructor() {
    super();
    return super.proxify(this);
  }
}
