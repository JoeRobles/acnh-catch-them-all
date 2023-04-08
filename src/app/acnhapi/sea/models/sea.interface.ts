import { NameInterface } from '../../models/name.interface';
import { AvailabilityInterface } from '../../models/availability.interface';

export interface SeaInterface {
  id: number;
  fileName: string;
  name: NameInterface;
  availability: AvailabilityInterface;
  shadow: string;
  speed: string;
  price: number;
  priceCj: number;
  catchPhrase: string;
  museumPhrase: string;
  imageUri: string;
  iconUri: string;
}
