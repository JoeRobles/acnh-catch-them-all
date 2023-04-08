import { AvailabilityResponseInterface } from './availability-response.interface';
import { NameResponseInterface } from './name-response.interface';

export interface CritterResponseInterface {
  id: number;
  availability: AvailabilityResponseInterface
  'catch-phrase': string;
  'file-name': string;
  'image_uri': string;
  'icon_uri': string;
  'museum-phrase': string;
  name: NameResponseInterface;
  price: number;
}
