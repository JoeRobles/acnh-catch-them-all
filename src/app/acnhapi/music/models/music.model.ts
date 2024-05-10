import { MusicResponseInterface } from './music-response.interface';
import { MusicInterface } from './music.interface';
import { environment } from '../../../../environments/environment';

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
    this.musicUri = environment.cdnUrl + '/nh/v1/music/hourly/' + this.fileName + '.mp3';
  }
}
