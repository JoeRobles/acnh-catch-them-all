import { Component, Input } from '@angular/core';

import { SongModel } from '../../acnhapi/song/models/song.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { CritterService } from '../../shared/services/critter.service';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song: SongModel = {} as SongModel;

  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    private critterService: CritterService,
    private toggleControlsService: ToggleControlsService
  ) {
    this.toggleControlsService.mode$.subscribe(m => this.mode = m);
    this.critterService.language$.subscribe(l => this.language = l);
  }
}
