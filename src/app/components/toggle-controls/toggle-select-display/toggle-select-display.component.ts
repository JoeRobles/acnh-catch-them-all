import { Component } from '@angular/core';

import { ModeTypeEnum } from '../../../shared/models/mode-type.enum';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { ToggleControlsService } from '../../../shared/services/toggle-controls.service';
import { CritterService } from '../../../shared/services/critter.service';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { CritterType } from '../../../shared/models/critter.type';
import { ModeType } from '../../../shared/models/mode.type';

@Component({
  selector: 'app-toggle-select-display',
  templateUrl: './toggle-select-display.component.html',
  styleUrls: ['./toggle-select-display.component.scss']
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
