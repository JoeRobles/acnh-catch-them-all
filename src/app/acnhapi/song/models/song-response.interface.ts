import { NameResponseInterface } from '../../models/name-response.interface';

export interface SongResponseInterface {
  id: number;
  'file-name': string;
  name: NameResponseInterface,
  'buy-price': number;
  'sell-price': number;
  isOrderable: boolean;
  'music_uri': string;
  'image_uri': string;
}
