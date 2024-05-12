import { MusicResponseInterface } from './music-response.interface';
import { MusicInterface } from './music.interface';

export class MusicModel implements MusicInterface {
  public id: number;
  public fileName: string;
  public hour: number;
  public weather: string;
  public musicUri: string;

  constructor(music: MusicResponseInterface) {
    this.id = music.id;
    this.fileName = music['file-name'];
    this.hour = music.hour;
    this.weather = music.weather;
    this.musicUri = music.music_uri;
  }
}
