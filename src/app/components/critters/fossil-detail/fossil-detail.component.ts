import { Component } from '@angular/core';

import { LanguageTypeEnum } from '../../../shared/models/language-type.enum';
import { CritterService } from '../../../acnhapi/services/critter.service';
import { FossilModel } from '../../../acnhapi/fossil/models/fossil.model';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { LanguageType } from '../../../shared/models/language.type';

@Component({
  selector: 'app-fossil-detail',
  templateUrl: './fossil-detail.component.html'
})
export class FossilDetailComponent {
  language: LanguageType = LanguageTypeEnum.NameUSen;
  fossil: FossilModel = {} as FossilModel;

  constructor(
    private critterService: CritterService,
    public preferencesService: PreferencesService,
    ) {
    this.critterService.fossil.subscribe(f => this.fossil = f);
    this.preferencesService.language$.subscribe(l => this.language = l);
  }
}
