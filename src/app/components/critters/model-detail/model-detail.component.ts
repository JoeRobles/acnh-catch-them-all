import { Component } from '@angular/core';

import { CritterService } from '../../../acnhapi/services/critter.service';
import { LanguageTypeEnum } from '../../../shared/models/language-type.enum';
import { ModelModel } from '../../../acnhapi/models/model.model';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { LanguageType } from '../../../shared/models/language.type';

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html'
})
export class ModelDetailComponent {
  language: LanguageType = LanguageTypeEnum.NameUSen;
  model: ModelModel = {} as ModelModel;

  constructor(
    private critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
    this.critterService.model.subscribe(m => this.model = m);
    this.preferencesService.language$.subscribe(l => this.language = l);
  }
}
