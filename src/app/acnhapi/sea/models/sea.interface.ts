import { NameInterface } from '../../models/name.interface';
import { AvailabilityInterface } from '../../models/availability.interface';
import { SeaShadowsEnum } from '../../models/sea-shadows.enum';
import { SeaSpeedsEnum } from '../../models/sea-speeds.enum';

export interface SeaInterface {
  id: number;
  fileName: string;
  name: NameInterface;
  availability: AvailabilityInterface;
  shadow: SeaShadowsEnum;
  speed: SeaSpeedsEnum;
  price: number;
  priceCj: number;
  catchPhrase: string;
  museumPhrase: string;
  imageUri: string;
  iconUri: string;
}
