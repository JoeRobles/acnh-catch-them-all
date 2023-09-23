import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { ClockService } from '../../shared/services/clock.service';
import { AvailabilityModel } from '../../acnhapi/models/availability.model';
import { MonthArrayTypeEnum } from '../../shared/models/month-array-type.enum';
import { CritterService } from '../../shared/services/critter.service';
import { HemisphereSelectService } from '../../shared/services/hemisphere-select.service';

@Component({
  selector: 'app-critter-seasonality',
  templateUrl: './critter-seasonality.component.html',
  styleUrls: ['./critter-seasonality.component.scss']
})
export class CritterSeasonalityComponent implements OnInit, OnDestroy {
  @Input() availability: AvailabilityModel = {} as AvailabilityModel;
  month: number;
  hemisphere: MonthArrayTypeEnum = MonthArrayTypeEnum.MonthArraySouthern;

  constructor(
    private clockService: ClockService,
    public critterService: CritterService,
    private hemisphereSelectService: HemisphereSelectService
  ) {
    const datetime = new Date();
    this.month = datetime.getMonth() + 1;
  }
  ngOnInit() {
    this.clockService.month$.subscribe(m => this.month = m);
    this.hemisphereSelectService.isSouthernHemisphere$.subscribe(hemisphere => {
      this.hemisphere = hemisphere;
    });
  }

  ngOnDestroy() {
    this.availability = {} as AvailabilityModel;
  }
}
