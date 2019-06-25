import { TrackableEntity } from 'trackable-entities';
import { EmployeeTerritories } from './EmployeeTerritories';

export class Territory extends TrackableEntity {

  territoryId: string;
  territoryDescription: string;
  employeeTerritories: EmployeeTerritories[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
