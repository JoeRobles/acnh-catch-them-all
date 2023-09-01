import { NameResponseInterface } from '../../models/name-response.interface';
import { ArtResponseInterface } from './art-response.interface';
import { NameModel } from '../../models/name.model';
import { ArtInterface } from './art.interface';

export class ArtModel implements ArtInterface {
  public id: number;
  public fileName: string;
  public name: NameModel;
  public catch: boolean;
  public hasFake: boolean;
  public buyPrice: number;
  public sellPrice: number;
  public imageUri: string;
  public museumDesc: string;

  constructor(art: ArtResponseInterface) {
    this.id = art.id;
    this.fileName = art['file-name'];
    this.name = new NameModel(art.name);
    this.catch = false;
    this.hasFake = art.hasFake;
    this.buyPrice = art['buy-price'];
    this.sellPrice = art['sell-price'];
    this.imageUri = '/assets/api/images/art/' + this.fileName + '.png';
    this.museumDesc = art['museum-desc'];
  }
}
