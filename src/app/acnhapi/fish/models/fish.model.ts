import { FishInterface} from './fish.interface';
import { FishResponseInterface } from './fish-response.interface';
import { CritterModel } from '../../models/critter.model';

export class FishModel extends CritterModel implements FishInterface {

  public priceCj: number;
  public shadow: string;

  constructor(fish: FishResponseInterface) {
    super(fish);
    this.priceCj = fish['price-cj'];
    this.shadow = fish.shadow;
  }
}
