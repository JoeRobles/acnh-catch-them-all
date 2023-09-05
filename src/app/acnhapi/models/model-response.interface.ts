import { NameResponseInterface } from './name-response.interface';

export interface ModelResponseInterface {
  id: number;
  'file-name': string;
  name: NameResponseInterface;
  'sell-price': number;
  size: string;
  'image_uri': string;
}
