import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import * as Helpers from '../../shared/utils/helpers';
import { ClockService } from '../../shared/services/clock.service';
import { CritterModel } from '../../acnhapi/models/critter.model';
import { CritterService } from '../../shared/services/critter.service';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { HemisphereSelectService } from '../../shared/services/hemisphere-select.service';
import { MonthArrayTypeEnum } from '../../shared/models/month-array-type.enum';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';

@Component({
  selector: 'app-critter-discovery',
  templateUrl: './critter-discovery.component.html',
  styleUrls: ['./critter-discovery.component.scss']
})
export class CritterDiscoveryComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @Input() critter: CritterModel;
  @Input() critterType: CritterTypeEnum = CritterTypeEnum.Bugs
  critterTypeEnum = CritterTypeEnum;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;
  isEndOfMonth: boolean;
  datetime: Date = new Date();
  month: number;
  hours: number;
  minutes: number;
  hemisphere: MonthArrayTypeEnum.MonthArrayNorthern | MonthArrayTypeEnum.MonthArraySouthern = MonthArrayTypeEnum.MonthArraySouthern;
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;

  constructor(
    public clockService: ClockService,
    public critterService: CritterService,
    private toggleControlsService: ToggleControlsService,
    public hemisphereSelectionService: HemisphereSelectService
  ) {
    const datetime = new Date();
    this.month = datetime.getMonth() + 1;
    this.hours = datetime.getHours();
    this.minutes = datetime.getMinutes();
    this.isEndOfMonth = Helpers.isEndOfMonth(datetime);
  }
  ngOnInit() {
    this.clockService.datetime$.subscribe(d => this.datetime = d);
    this.clockService.month$.subscribe(m => this.month = m);
    this.clockService.hours$.subscribe(h => this.hours = h);
    this.clockService.minutes$.subscribe(m => this.minutes = m);
    this.hemisphereSelectionService.isSouthernHemisphere$.subscribe(h => this.hemisphere = h);
    this.critterService.language$.subscribe(l => this.language = l);
    this.toggleControlsService.mode$.subscribe(m => this.mode = m);
  }
  remainingMinutes(minutes: number): string {
    return Helpers.remainingMinutes(minutes);
  }
  remainingHours(available: number[], current: number): number {
    return Helpers.remainingHours(available, current);
  }
  remainingDays(available: number[], current: number): number {
    return Helpers.remainingDays(this.datetime, available, current);
  }
  hoursLeft(available: number[], current: number): number {
    return Helpers.hoursLeft(available, current);
  }

  ngOnDestroy() {
    this.critter = {} as CritterModel;
  }
}
