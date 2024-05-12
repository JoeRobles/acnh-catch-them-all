import { ModelModel } from '../../models/model.model';
import { ModelInterface } from '../../models/model.interface';
import { ModelResponseInterface } from '../../models/model-response.interface';

export class BugModelModel extends ModelModel implements ModelInterface {
  constructor(bugModel: ModelResponseInterface) {
    super(bugModel);
  }
}
