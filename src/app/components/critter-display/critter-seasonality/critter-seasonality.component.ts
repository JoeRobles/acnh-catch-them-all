import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { ClockService } from '../../../shared/services/clock.service';
import { AvailabilityModel } from '../../../acnhapi/models/availability.model';
import { HemisphereTypeEnum } from '../../../shared/models/hemisphere-type.enum';
import { CritterService } from '../../../shared/services/critter.service';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { HemisphereType } from '../../../shared/models/hemisphere.type';

@Component({
  selector: 'app-critter-seasonality',
  templateUrl: './critter-seasonality.component.html',
  styleUrls: ['./critter-seasonality.component.scss']
})
export class CritterSeasonalityComponent implements OnInit, OnDestroy {
  @Input() availability: AvailabilityModel = {} as AvailabilityModel;
  month: number;
  hemisphere: HemisphereType = HemisphereTypeEnum.MonthArraySouthern;

  constructor(
    private clockService: ClockService,
    public critterService: CritterService,
    private preferencesService: PreferencesService
  ) {
    const datetime = new Date();
    this.month = datetime.getMonth() + 1;
  }
  ngOnInit() {
    this.clockService.month$.subscribe(m => this.month = m);
    this.preferencesService.hemisphere$.subscribe(hemisphere => {
      this.hemisphere = hemisphere;
    });
  }

  ngOnDestroy() {
    this.availability = {} as AvailabilityModel;
  }
}
