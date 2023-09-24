import { Component, Input } from '@angular/core';

import { FossilModel } from '../../acnhapi/fossil/models/fossil.model';
import { PreferencesService } from '../../shared/services/preferences.service';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { LanguageType } from '../../shared/models/language.type';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';

@Component({
  selector: 'app-fossil',
  templateUrl: './fossil.component.html',
  styleUrls: ['./fossil.component.scss']
})
export class FossilComponent {
  @Input() fossil: FossilModel = {} as FossilModel;

  language: LanguageType = LanguageTypeEnum.NameUSen;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public preferencesService: PreferencesService,
  ) {
    this.preferencesService.language$.subscribe(l => this.language = l);
  }
}
