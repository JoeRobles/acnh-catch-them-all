import { Component, Input } from '@angular/core';

import { SongModel } from '../../acnhapi/song/models/song.model';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song: SongModel = {} as SongModel;

  modeTypeEnum = ModeTypeEnum;
  title = 'Song';

  constructor(
    public preferencesService: PreferencesService
  ) {
    this.preferencesService.language$.subscribe(l => this.title = this.song.name[l]);
  }
}
