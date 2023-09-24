import { Component } from '@angular/core';
import { HemisphereTypeEnum } from '../../shared/models/hemisphere-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { PreferenceTypeEnum } from '../../shared/models/preference-type.enum';

@Component({
  selector: 'app-hemisphere-select',
  templateUrl: './hemisphere-select.component.html',
  styleUrls: ['./hemisphere-select.component.scss']
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
