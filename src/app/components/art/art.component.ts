import { Component, Input } from '@angular/core';

import { ArtModel } from '../../acnhapi/art/models/art.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';
import { ModeType } from '../../shared/models/mode.type';
import { LanguageType } from '../../shared/models/language.type';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {
  @Input() art: ArtModel = {} as ArtModel;

  title = 'Art';
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public preferencesService: PreferencesService
  ) {
    this.preferencesService.language$.subscribe(l => this.title = this.art.name[l]);
  }
}
