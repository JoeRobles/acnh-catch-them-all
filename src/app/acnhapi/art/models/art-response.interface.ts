import { NameResponseInterface } from '../../models/name-response.interface';

export interface ArtResponseInterface {
  id: number;
  'file-name': string;
  name: NameResponseInterface
  hasFake: boolean
  'buy-price': number;
  'sell-price': number;
  'icon_uri': string;
  'image_uri': string;
  'museum-desc': string;
  'real-name': string;
}
