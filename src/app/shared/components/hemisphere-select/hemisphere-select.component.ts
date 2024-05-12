import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { HemisphereTypeEnum } from '../../models/hemisphere-type.enum';
import { PreferencesService } from '../../services/preferences.service';
import { PreferenceTypeEnum } from '../../models/preference-type.enum';

@Component({
  selector: 'app-hemisphere-select',
  templateUrl: './hemisphere-select.component.html'
})
export class HemisphereSelectComponent {
  hemisphereTypeEnum = HemisphereTypeEnum;

  constructor(
    public preferencesService: PreferencesService
  ) {
  }

  toggleHemisphere(hemisphere: MatSlideToggleChange) {
    const preference = hemisphere.checked ? HemisphereTypeEnum.MonthArraySouthern : HemisphereTypeEnum.MonthArrayNorthern
    this.preferencesService.hemisphere$.next(preference);
    this.preferencesService.updatePreferences(preference, PreferenceTypeEnum.Hemisphere);
  }
}
