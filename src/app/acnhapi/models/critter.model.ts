import { AvailabilityModel } from './availability.model';
import { NameModel } from './name.model';
import { CritterInterface } from './critter-interface';
import { CritterResponseInterface } from './critter-response.interface';

export class CritterModel implements CritterInterface {
  public id: number;
  public availability: AvailabilityModel;
  public catch: boolean;
  public catchPhrase: string;
  public fileName: string;
  public iconUri: string;
  public imageUri: string;
  public museumPhrase: string;
  public name: NameModel;
  public price: number;

  constructor(critter: CritterResponseInterface) {
    this.id = critter.id;
    this.availability = new AvailabilityModel(critter.availability);
    this.catch = false;
    this.catchPhrase = critter['catch-phrase'];
    this.fileName = critter['file-name'];
    this.iconUri = critter.icon_uri;
    this.imageUri = critter.image_uri;
    this.museumPhrase = critter['museum-phrase'];
    this.name = new NameModel(critter.name);
    this.price = critter.price;
  }
}
