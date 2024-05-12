import { Component } from '@angular/core';

import { Languages } from '../../models/languages.const';
import { LanguageTypeEnum } from '../../models/language-type.enum';
import { PreferencesService } from '../../services/preferences.service';
import { LanguageType } from '../../models/language.type';
import { PreferenceTypeEnum } from '../../models/preference-type.enum';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html'
})
export class LanguageSelectComponent {
  languages = Languages;
  language: LanguageType = LanguageTypeEnum.NameUSen;

  constructor(
    public preferencesService: PreferencesService
  ) {
  }

  selectLanguage(event: any) {
    this.preferencesService.updatePreferences(event.target.value, PreferenceTypeEnum.Language);
    this.preferencesService.language$.next(event.target.value);
  }
}
