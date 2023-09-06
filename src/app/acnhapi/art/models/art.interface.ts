import { NameModel } from '../../models/name.model';

export interface ArtInterface {
  id: number;
  catch: boolean;
  fileName: string;
  name: NameModel;
  hasFake: boolean;
  buyPrice: number;
  sellPrice: number;
  imageUri: string;
  museumDesc: string;
  realName: string;
}
