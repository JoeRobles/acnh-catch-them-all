import { NameInterface } from '../../models/name.interface';
import { SongResponseInterface } from './song-response.interface';
import { NameModel } from '../../models/name.model';
import { SongInterface } from './song.interface';

export class SongModel implements SongInterface {
  public id: number;
  public fileName: string;
  public name: NameInterface;
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
    this.name = new NameModel(song.name);
    this.buyPrice = song['buy-price'];
    this.sellPrice = song['sell-price'];
    this.isOrderable = song.isOrderable;
    this.musicUri = song.music_uri;
    this.imageUri = song.image_uri;
  }
}
