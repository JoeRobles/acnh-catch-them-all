import { NameResponseInterface } from '../../models/name-response.interface';
import { AvailabilityResponseInterface } from '../../models/availability-response.interface';

export interface SeaResponseInterface {
  id: number;
  availability: AvailabilityResponseInterface;
  'catch-phrase': string;
  'file-name': 'bitterling',
  'icon_uri': string;
  'image_uri': string;
  'museum-phrase': string;
  name: NameResponseInterface;
  price: number;
  'price-cj': number;
  shadow: string;
  speed: string;
}
