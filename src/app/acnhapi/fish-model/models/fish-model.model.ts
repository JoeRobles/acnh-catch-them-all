import { ModelModel } from '../../models/model.model';
import { ModelInterface } from '../../models/model.interface';
import { ModelResponseInterface } from '../../models/model-response.interface';

export class FishModelModel extends ModelModel implements ModelInterface {
  constructor(fishModel: ModelResponseInterface) {
    super(fishModel);
    this.imageUri = '/assets/api/images/fish-models/' + this.fileName + '.png';
  }
}
