import { NameResponseInterface } from '../../models/name-response.interface';

export interface FossilResponseInterface {
  id: number;
  'file-name': string;
  name: NameResponseInterface;
  price: number;
  'museum-phrase': string;
  'icon_uri': string;
  'image_uri': string;
  'part-of': string;
}
