import { FossilInterface } from './fossil.interface';
import { FossilResponseInterface } from './fossils-response.interface';
import { NameModel } from '../../models/name.model';

export class FossilModel implements FossilInterface {
  public id: number;
  public fileName: string;
  public name: NameModel;
  public catch: boolean;
  public price: number;
  public museumPhrase: string;
  public imageUri: string;
  public partOf: string;

  constructor(fossil: FossilResponseInterface) {
    this.id = fossil.id;
    this.fileName = fossil['file-name'];
    this.name = new NameModel(fossil.name);
    this.catch = false;
    this.price = fossil.price;
    this.museumPhrase = fossil['museum-phrase'];
    this.imageUri = '/assets/apiv2/images/fossils/' + this.fileName + '.png';
    this.partOf = fossil['part-of'];
  }
}
