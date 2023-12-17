import { NameResponseInterface } from './name-response.interface';

export interface ModelResponseInterface {
  id: number;
  'file-name': string;
  name: NameResponseInterface;
  'sell-price': number;
  size: string;
  'icon_uri': string;
}
