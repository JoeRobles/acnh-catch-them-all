import { SeaInterface } from './sea.interface';
import { SeaResponseInterface } from './sea-response.interface';
import { CritterModel } from '../../models/critter.model';
import { SeaShadowsEnum } from '../../../shared/models/sea-shadows.enum';
import { SeaSpeedsEnum } from '../../../shared/models/sea-speeds.enum';
import { environment } from '../../../../environments/environment';

export class SeaModel extends CritterModel implements SeaInterface {
  public priceCj: number;
  public shadow: SeaShadowsEnum;
  public speed: SeaSpeedsEnum;

  constructor(sea: SeaResponseInterface) {
    super(sea);
    this.priceCj = sea['price-cj'];
    this.shadow = sea.shadow as SeaShadowsEnum;
    this.speed = sea.speed as SeaSpeedsEnum;
    this.iconUri = environment.cdnUrl + '/nh/v1/icons/sea/' + this.fileName + '.png';
    this.imageUri = environment.cdnUrl + '/nh/v1/images/sea/' + this.fileName + '.png';
  }
}
