import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import * as Helpers from '../../../shared/utils/helpers';
import { ClockService } from '../../../shared/services/clock.service';
import { CritterModel } from '../../../acnhapi/models/critter.model';
import { CritterService } from '../../../shared/services/critter.service';
import { ModeTypeEnum } from '../../../shared/models/mode-type.enum';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { HemisphereSelectService } from '../../../shared/services/hemisphere-select.service';
import { HemisphereTypeEnum } from '../../../shared/models/hemisphere-type.enum';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { HemisphereType } from '../../../shared/models/hemisphere.type';
import { LanguageType } from '../../../shared/models/language.type';
import { LanguageTypeEnum } from '../../../shared/models/language-type.enum';
import { ModeType } from '../../../shared/models/mode.type';

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
  mode: ModeType = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;
  isEndOfMonth: boolean;
  datetime: Date = new Date();
  month: number;
  hours: number;
  minutes: number;
  hemisphere: HemisphereType = HemisphereTypeEnum.MonthArraySouthern;
  language: LanguageType = LanguageTypeEnum.NameUSen;

  constructor(
    public clockService: ClockService,
    public critterService: CritterService,
    public hemisphereSelectionService: HemisphereSelectService,
    public preferencesService: PreferencesService
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
    this.preferencesService.hemisphere$.subscribe(h => this.hemisphere = h);
    this.preferencesService.language$.subscribe(l => this.language = l);
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
