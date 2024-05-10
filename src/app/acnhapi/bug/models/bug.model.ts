import { BugInterface } from './bug.interface';
import { BugResponseInterface } from './bug-response.interface';
import { CritterModel } from '../../models/critter.model';
import { environment } from '../../../../environments/environment';

export class BugModel extends CritterModel implements BugInterface {
  public priceFlick: number;

  constructor(bug: BugResponseInterface) {
    super(bug);
    this.priceFlick = bug['price-flick'];
    this.iconUri = environment.cdnUrl + '/nh/v1/icons/bugs/' + this.fileName + '.png';
    this.imageUri = environment.cdnUrl + '/nh/v1/images/bugs/' + this.fileName + '.png';
  }
}
