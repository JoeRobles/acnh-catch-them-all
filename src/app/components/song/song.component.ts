import { Component, Input } from '@angular/core';

import { SongModel } from '../../acnhapi/song/models/song.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song: SongModel = {} as SongModel;

  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public preferencesService: PreferencesService
  ) {
    this.preferencesService.language$.subscribe(l => this.language = l);
  }
}
