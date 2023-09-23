import { Component } from '@angular/core';
import { MonthArrayTypeEnum } from '../../shared/models/month-array-type.enum';
import { HemisphereSelectService } from '../../shared/services/hemisphere-select.service';

@Component({
  selector: 'app-hemisphere-select',
  templateUrl: './hemisphere-select.component.html',
  styleUrls: ['./hemisphere-select.component.scss']
})
export class HemisphereSelectComponent {
  monthArrayTypeEnum = MonthArrayTypeEnum;

  constructor(
    public hemisphereSelectService: HemisphereSelectService
  ) {
  }

  toggleHemisphere() {
    this.hemisphereSelectService.isSouthernHemisphere$.next(
      this.hemisphereSelectService.isSouthernHemisphere$.value === MonthArrayTypeEnum.MonthArrayNorthern ?
        MonthArrayTypeEnum.MonthArraySouthern :
        MonthArrayTypeEnum.MonthArrayNorthern
    );
  }
}
