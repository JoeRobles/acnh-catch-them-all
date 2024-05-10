import { ModelModel } from '../../models/model.model';
import { ModelInterface } from '../../models/model.interface';
import { ModelResponseInterface } from '../../models/model-response.interface';
import { environment } from '../../../../environments/environment';

export class FishModelModel extends ModelModel implements ModelInterface {
  constructor(fishModel: ModelResponseInterface) {
    super(fishModel);
    this.iconUri = environment.cdnUrl + '/nh/v1/icons/fish-models/' + this.fileName + '.png';
  }
}
