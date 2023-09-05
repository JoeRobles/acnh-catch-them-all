import { NameInterface } from './name.interface';

export interface ModelInterface {
  id: number;
  catch: boolean;
  fileName: string;
  name: NameInterface;
  sellPrice: number;
  size: string;
  imageUri: string;
}
