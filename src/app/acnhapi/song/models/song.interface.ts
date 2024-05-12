import { NameInterface } from '../../models/name.interface';
import { SongGenreTypeEnum } from '../../models/song-genre-type.enum';

export interface SongInterface {
  id: number;
  catch: boolean;
  genre: SongGenreTypeEnum;
  fileName: string;
  name: NameInterface,
  number: number;
  isNew: boolean;
  byRequest: boolean;
  buyPrice: number;
  sellPrice: number;
  isOrderable: boolean;
  musicUri: string;
  imageUri: string;
}
