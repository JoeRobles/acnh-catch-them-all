import { NameResponseInterface } from '../../models/name-response.interface';
import { SongGenreTypeEnum } from '../../models/song-genre-type.enum';

export interface SongResponseInterface {
  id: number;
  'file-name': string;
  genre: SongGenreTypeEnum;
  name: NameResponseInterface,
  number: number;
  'is-new': boolean;
  'by-request': boolean;
  'buy-price': number;
  'sell-price': number;
  'is-orderable': boolean;
  'music-uri': string;
  'image-uri': string;
}
