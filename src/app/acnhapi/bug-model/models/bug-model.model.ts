import { ModelModel } from '../../models/model.model';
import { ModelInterface } from '../../models/model.interface';
import { ModelResponseInterface } from '../../models/model-response.interface';
import { environment } from '../../../../environments/environment';

export class BugModelModel extends ModelModel implements ModelInterface {
  constructor(bugModel: ModelResponseInterface) {
    super(bugModel);
    this.iconUri = environment.cdnUrl + '/nh/v1/icons/bugs-models/' + this.fileName + '.png';
  }
}
