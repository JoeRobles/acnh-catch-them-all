import { SongResponseInterface } from './song-response.interface';
import { NameModel } from '../../models/name.model';
import { SongInterface } from './song.interface';
import { SongGenreTypeEnum } from '../../../shared/models/song-genre-type.enum';

export class SongModel implements SongInterface {
  public id: number;
  public fileName: string;
  public genre: SongGenreTypeEnum;
  public name: NameModel;
  public number: number;
  public isNew: boolean;
  public byRequest: boolean;
  public buyPrice: number;
  public sellPrice: number;
  public isOrderable: boolean;
  public musicUri: string;
  public imageUri: string;
  public catch: boolean;

  constructor(song: SongResponseInterface) {
    this.id = song.id;
    this.catch = false;
    this.fileName = song['file-name'];
    this.genre = song.genre;
    this.name = new NameModel(song.name);
    this.number = song.number;
    this.isNew = song['is-new'];
    this.byRequest = song['by-request'];
    this.buyPrice = song['buy-price'];
    this.sellPrice = song['sell-price'];
    this.isOrderable = song['is-orderable'];
    this.musicUri = '/assets/api/music/kk/' + this.fileName + '.mp3';
    this.imageUri = '/assets/api/images/music/' + this.fileName + '.png';
  }
}
