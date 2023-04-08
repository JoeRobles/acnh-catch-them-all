import { BugInterface } from './bug.interface';
import { BugResponseInterface } from './bug-response.interface';
import { CritterModel } from '../../models/critter.model';

export class BugModel extends CritterModel implements BugInterface {
  public priceFlick: number;

  constructor(bug: BugResponseInterface) {
    super(bug);
    this.priceFlick = bug['price-flick'];
  }
}
