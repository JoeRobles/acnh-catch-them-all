import { NameInterface } from '../../models/name.interface';

export interface FossilInterface {
  id: number;
  catch: boolean;
  fileName: string;
  name: NameInterface;
  price: number;
  museumPhrase: string;
  iconUri: string;
  imageUri: string;
  partOf: string;
}
