import { ArtResponseInterface } from './art-response.interface';
import { NameModel } from '../../models/name.model';
import { ArtInterface } from './art.interface';
import { environment } from '../../../../environments/environment';

export class ArtModel implements ArtInterface {
  public id: number;
  public fileName: string;
  public name: NameModel;
  public catch: boolean;
  public hasFake: boolean;
  public buyPrice: number;
  public sellPrice: number;
  public iconUri: string;
  public imageUri: string;
  public museumDesc: string;
  public realName: string;
  constructor(art: ArtResponseInterface) {
    this.id = art.id;
    this.fileName = art['file-name'];
    this.name = new NameModel(art.name);
    this.catch = false;
    this.hasFake = art.hasFake;
    this.buyPrice = art['buy-price'];
    this.sellPrice = art['sell-price'];
    this.iconUri = environment.cdnUrl + '/nh/v1/icons/art/' + this.fileName + '.png';
    this.imageUri = environment.cdnUrl + '/nh/v1/images/art/' + this.fileName + '.png';
    this.museumDesc = art['museum-desc'];
    this.realName = art['real-name'];
  }
}
