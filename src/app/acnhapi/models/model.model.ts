import { NameModel } from './name.model';
import { ModelInterface } from './model.interface';
import { ModelResponseInterface } from './model-response.interface';

export class ModelModel  implements ModelInterface {
  public id: number;
  public catch: boolean;
  public fileName: string;
  public name: NameModel;
  public sellPrice: number;
  public size: string;
  public imageUri: string;

  constructor(model: ModelResponseInterface) {
    this.id = model.id;
    this.catch = false;
    this.fileName = model['file-name'];
    this.name = new NameModel(model.name);
    this.sellPrice = model['sell-price'];
    this.size = model.size;
    this.imageUri = '';
  }
}
