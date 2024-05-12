import { Component, OnInit } from '@angular/core';

import { SongModel } from '../../../acnhapi/song/models/song.model';
import { CritterService } from '../../../acnhapi/services/critter.service';
import { LanguageTypeEnum } from '../../../shared/models/language-type.enum';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { LanguageType } from '../../../shared/models/language.type';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html'
})
export class SongDetailComponent implements OnInit {
  formModal: any;
  song: SongModel = {} as SongModel;
  language: LanguageType = LanguageTypeEnum.NameUSen;

  constructor(
    private critterService: CritterService,
    public preferencesService: PreferencesService,
    ) {
  }
  ngOnInit() {
    this.critterService.song.subscribe(s => this.song = s);
    this.preferencesService.language$.subscribe(l => this.language = l);
  }
}
