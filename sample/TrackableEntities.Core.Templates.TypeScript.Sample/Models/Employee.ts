import { TrackableEntity } from 'trackable-entities';
import { EmployeeTerritories } from './EmployeeTerritories';

export class Employee extends TrackableEntity {

  employeeId: number;
  lastName: string;
  firstName: string;
  birthDate: Date;
  hireDate: Date;
  city: string;
  country: string;
  employeeTerritories: EmployeeTerritories[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
