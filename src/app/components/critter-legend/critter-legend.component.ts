import { Component } from '@angular/core';

import { CritterService } from '../../shared/services/critter.service';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-critter-legend',
  templateUrl: './critter-legend.component.html',
  styleUrls: ['../critter-display/critter-display.component.scss', '../critter-discovery/critter-discovery.component.scss']
})
export class CritterLegendComponent {
  critterTypeEnum = CritterTypeEnum;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService,
    public toggleControlsService: ToggleControlsService
  ) {
  }
}
