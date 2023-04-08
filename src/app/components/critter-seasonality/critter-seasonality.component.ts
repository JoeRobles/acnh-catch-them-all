import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ClockService } from '../../shared/services/clock.service';
import { AvailabilityModel } from '../../acnhapi/models/availability.model';
import { MonthArrayTypeEnum } from '../../shared/models/month-array-type.enum';
import { CritterService } from '../../shared/services/critter.service';

@Component({
  selector: 'app-critter-seasonality',
  templateUrl: './critter-seasonality.component.html',
  styleUrls: ['./critter-seasonality.component.scss']
})
export class CritterSeasonalityComponent implements OnInit, OnDestroy {
  @Input() availability: AvailabilityModel = {} as AvailabilityModel;
  month: number;
  hemisphere: MonthArrayTypeEnum = MonthArrayTypeEnum.MonthArraySouthern;
  monthArray: number[] = [];
  constructor(
    private clockService: ClockService,
    public critterService: CritterService,
  ) {
    const datetime = new Date();
    this.month = datetime.getMonth() + 1;
  }
  ngOnInit() {
    this.clockService.month$.subscribe(m => this.month = m);
    this.critterService.hemisphere$.subscribe(hemisphere => {
      this.hemisphere = hemisphere;
    });
  }

  ngOnDestroy() {
    this.availability = {} as AvailabilityModel;
  }
}
