import { Component } from '@angular/core';

import { ModeTypeEnum } from '../../../../acnhapi/models/mode-type.enum';
import { CritterTypeEnum } from '../../../../acnhapi/models/critter-type.enum';
import { ToggleControlsService } from '../../../../acnhapi/services/toggle-controls.service';
import { CritterService } from '../../../../acnhapi/services/critter.service';
import { PreferencesService } from '../../../../shared/services/preferences.service';
import { CritterType } from '../../../../acnhapi/models/critter.type';
import { ModeType } from '../../../../acnhapi/models/mode.type';

@Component({
  selector: 'app-toggle-select-display',
  templateUrl: './toggle-select-display.component.html'
})
export class ToggleSelectDisplayComponent {
  critterTypeEnum = CritterTypeEnum;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public critterService: CritterService,
    public toggleControlsService: ToggleControlsService,
    public preferencesService: PreferencesService
  ) { }

  toggleDisplay(display: CritterType) {
    this.preferencesService.display$.next(display);
    this.toggleControlsService.setDisplay(display);
  }

  toggleMode(mode: ModeType) {
    this.preferencesService.mode$.next(mode);
    this.toggleControlsService.setMode(mode);
  }
}
