import { SeaInterface } from './sea.interface';
import { SeaResponseInterface } from './sea-response.interface';
import { CritterModel } from '../../models/critter.model';

export class SeaModel extends CritterModel implements SeaInterface {
  public priceCj: number;
  public shadow: string;
  public speed: string;

  constructor(sea: SeaResponseInterface) {
    super(sea);
    this.priceCj = sea['price-cj'];
    this.shadow = sea.shadow;
    this.speed = sea.speed;
    this.iconUri = '/assets/api/icons/sea/' + this.fileName + '.png';
    this.imageUri = '/assets/api/images/sea/' + this.fileName + '.png';
  }
}
