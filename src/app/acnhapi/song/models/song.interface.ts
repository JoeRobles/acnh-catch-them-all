import { NameInterface } from '../../models/name.interface';

export interface SongInterface {
  id: number;
  catch: boolean;
  fileName: string;
  name: NameInterface,
  buyPrice: number;
  sellPrice: number;
  isOrderable: boolean;
  musicUri: string;
  imageUri: string;
}
