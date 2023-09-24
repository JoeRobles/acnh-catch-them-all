import { Component } from '@angular/core';
import { Languages } from '../../shared/models/languages.const';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';
import { LanguageType } from '../../shared/models/language.type';
import { PreferenceTypeEnum } from '../../shared/models/preference-type.enum';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
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
