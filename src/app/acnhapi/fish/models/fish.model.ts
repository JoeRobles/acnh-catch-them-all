import { FishInterface} from './fish.interface';
import { FishResponseInterface } from './fish-response.interface';
import { CritterModel } from '../../models/critter.model';
import { FishShadowsType } from '../../models/fish-shadows.type';

export class FishModel extends CritterModel implements FishInterface {

  public priceCj: number;
  public shadow: FishShadowsType;

  constructor(fish: FishResponseInterface) {
    super(fish);
    this.priceCj = fish['price-cj'];
    this.shadow = fish.shadow as FishShadowsType;
    this.iconUri = fish['icon_uri'];
    this.imageUri = fish['image_uri'];
  }
}
