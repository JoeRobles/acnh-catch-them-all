import { Component } from '@angular/core';
import { CritterService } from '../../shared/services/critter.service';
import { Languages } from '../../shared/models/languages.const';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  languages = Languages;
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;

  constructor(
    private critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  selectLanguage(event: any) {
    this.preferencesService.updatePreferences(event.target.value, 'language');
    this.critterService.language$.next(event.target.value);
  }
}
