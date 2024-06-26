import { SeaInterface } from './sea.interface';
import { SeaResponseInterface } from './sea-response.interface';
import { CritterModel } from '../../models/critter.model';
import { SeaShadowsEnum } from '../../models/sea-shadows.enum';
import { SeaSpeedsEnum } from '../../models/sea-speeds.enum';

export class SeaModel extends CritterModel implements SeaInterface {
  public priceCj: number;
  public shadow: SeaShadowsEnum;
  public speed: SeaSpeedsEnum;

  constructor(sea: SeaResponseInterface) {
    super(sea);
    this.priceCj = sea['price-cj'];
    this.shadow = sea.shadow as SeaShadowsEnum;
    this.speed = sea.speed as SeaSpeedsEnum;
    this.iconUri = sea['icon_uri'];
    this.imageUri = sea['image_uri'];
  }
}
