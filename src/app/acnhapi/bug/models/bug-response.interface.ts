import { AvailabilityResponseInterface } from '../../models/availability-response.interface';
import { NameResponseInterface } from '../../models/name-response.interface';

export interface BugResponseInterface {
  id: number;
  availability: AvailabilityResponseInterface
  'catch-phrase': string;
  'file-name': string;
  'image_uri': string;
  'icon_uri': string;
  'museum-phrase': string;
  name: NameResponseInterface;
  price: number;
  'price-flick': number;
}
