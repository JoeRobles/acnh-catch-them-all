import { Component } from '@angular/core';
import { MonthArrayTypeEnum } from '../../shared/models/month-array-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MonthArrayType } from '../../shared/models/hemisphere.type';

@Component({
  selector: 'app-hemisphere-select',
  templateUrl: './hemisphere-select.component.html',
  styleUrls: ['./hemisphere-select.component.scss']
})
export class HemisphereSelectComponent {
  monthArrayTypeEnum = MonthArrayTypeEnum;
  preference: MonthArrayType = MonthArrayTypeEnum.MonthArraySouthern;

  constructor(
    public preferencesService: PreferencesService
  ) {
    this.preferencesService.hemisphere$.subscribe(h => this.preference = h);
  }

  toggleHemisphere(hemisphere: MatSlideToggleChange) {
    this.preference = hemisphere.checked ? MonthArrayTypeEnum.MonthArraySouthern : MonthArrayTypeEnum.MonthArrayNorthern
    this.preferencesService.updatePreferences(this.preference, 'hemisphere');
  }
}
