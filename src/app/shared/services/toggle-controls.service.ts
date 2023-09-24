import { Injectable } from '@angular/core';

import { CritterType } from '../models/critter.type';
import { PreferencesService } from './preferences.service';
import { PreferenceTypeEnum } from '../models/preference-type.enum';
import { ModeType } from '../models/mode.type';

@Injectable({
  providedIn: 'root'
})
export class ToggleControlsService {

  constructor(
    public preferencesService: PreferencesService
  ) { }

  setDisplay(display: CritterType) {
    this.preferencesService.updatePreferences(display, PreferenceTypeEnum.Display);
  }
  setMode(mode: ModeType) {
    this.preferencesService.updatePreferences(mode, PreferenceTypeEnum.Mode);
  }
}
