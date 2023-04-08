import { NameInterface } from './name.interface';
import { NameResponseInterface } from './name-response.interface';
import * as Helpers from '../../shared/utils/helpers';

export class NameModel implements NameInterface {
  nameUSen: string;
  nameEUen: string;
  nameEUde: string;
  nameEUes: string;
  nameUSes: string;
  nameEUfr: string;
  nameUSfr: string;
  nameEUit: string;
  nameEUnl: string;
  nameCNzh: string;
  nameTWzh: string;
  nameJPja: string;
  nameKRko: string;
  nameEUru: string;

  constructor(name: NameResponseInterface) {
    this.nameUSen = Helpers.capitalize(name['name-USen']);
    this.nameEUen = Helpers.capitalize(name['name-EUen']);
    this.nameEUde = Helpers.capitalize(name['name-EUde']);
    this.nameEUes = Helpers.capitalize(name['name-EUes']);
    this.nameUSes = Helpers.capitalize(name['name-USes']);
    this.nameEUfr = Helpers.capitalize(name['name-EUfr']);
    this.nameUSfr = Helpers.capitalize(name['name-USfr']);
    this.nameEUit = Helpers.capitalize(name['name-EUit']);
    this.nameEUnl = name['name-EUnl'];
    this.nameCNzh = name['name-CNzh'];
    this.nameTWzh = name['name-TWzh'];
    this.nameJPja = name['name-JPja'];
    this.nameKRko = name['name-KRko'];
    this.nameEUru = name['name-EUru'];
  }
}
