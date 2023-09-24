import { Component, Input } from '@angular/core';
import { ModelModel } from '../../acnhapi/models/model.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  @Input() model: ModelModel = {} as ModelModel;

  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public preferencesService: PreferencesService
  ) {
    this.preferencesService.language$.subscribe(l => this.language = l);
  }
}
