import { AvailabilityResponseInterface } from '../../models/availability-response.interface';
import { NameResponseInterface } from '../../models/name-response.interface';

export interface FishResponseInterface {
  id: number;
  availability: AvailabilityResponseInterface;
  'catch-phrase': string;
  'file-name': string;
  icon_uri: string;
  image_uri: string
  'museum-phrase': string;
  name: NameResponseInterface;
  price: number;
  'price-cj': number;
  shadow: string;
}
