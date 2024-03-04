import { Component, OnInit } from '@angular/core';

import { SeaSpeedsEnum } from '../../../shared/models/sea-speeds.enum';
import { SeaModel } from '../../../acnhapi/sea/models/sea.model';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { CritterService } from '../../../shared/services/critter.service';
import { SeaShadowsEnum } from '../../../shared/models/sea-shadows.enum';
import { toFiveRows } from '../../../shared/utils/helpers';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';

@Component({
  selector: 'app-toggle-sea-speeds',
  templateUrl: './toggle-sea-speeds.component.html',
  styleUrls: ['./toggle-sea-speeds.component.scss']
})
export class ToggleSeaSpeedsComponent implements OnInit {

  protected readonly critterTypeEnum = CritterTypeEnum;
  protected readonly seaSpeedsEnum = SeaSpeedsEnum;
  seaSpeedFilter: SeaSpeedsEnum[] = [
    SeaSpeedsEnum.Stationary,
    SeaSpeedsEnum.VerySlow,
    SeaSpeedsEnum.Slow,
    SeaSpeedsEnum.Medium,
    SeaSpeedsEnum.Fast,
    SeaSpeedsEnum.VeryFast
  ];
  seaShadowFilter: SeaShadowsEnum[] = [
    SeaShadowsEnum.Smallest,
    SeaShadowsEnum.Small,
    SeaShadowsEnum.Medium,
    SeaShadowsEnum.Large,
    SeaShadowsEnum.Largest
  ];
  seaList: SeaModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.sea$.subscribe(sea => this.seaList = sea);
    this.critterService.seaSpeedFilter$.subscribe(speeds => this.seaSpeedFilter = speeds);
  }

  toggleSpeedAll(): void {
    let seaFiltered: SeaModel[] = [];
    if (this.seaSpeedFilter.length === 0) {
      this.seaSpeedFilter = [
        SeaSpeedsEnum.Stationary,
        SeaSpeedsEnum.VerySlow,
        SeaSpeedsEnum.Slow,
        SeaSpeedsEnum.Medium,
        SeaSpeedsEnum.Fast,
        SeaSpeedsEnum.VeryFast
      ];
      this.seaShadowFilter = [
        SeaShadowsEnum.Smallest,
        SeaShadowsEnum.Small,
        SeaShadowsEnum.Medium,
        SeaShadowsEnum.Large,
        SeaShadowsEnum.Largest
      ];
      seaFiltered = this.seaList;
    } else {
      this.seaSpeedFilter = [];
      this.seaShadowFilter = [];
      seaFiltered = [];
    }
    this.critterService.seaSpeedFilter$.next(this.seaSpeedFilter);
    this.critterService.seaShadowFilter$.next(this.seaShadowFilter);
    this.critterService.seaFiltered$.next(seaFiltered);
    this.critterService.seaGrid$.next(toFiveRows(seaFiltered));
  }

  toggleSpeed(speed: SeaSpeedsEnum): void {
    let filtered: SeaModel[] = [];
    const speedIndex = this.seaSpeedFilter.indexOf(speed);
    if (speedIndex > -1) {
      this.seaSpeedFilter.splice(speedIndex, 1);
      const filteredSpeed = this.critterService.seaFiltered$.getValue().filter(sea => this.seaSpeedFilter.includes(sea.speed));
      filtered = filteredSpeed.filter(sea => this.critterService.seaShadowFilter$.getValue().includes(sea.shadow));
    } else {
      this.seaSpeedFilter.push(speed);
      const filteredSpeed = this.seaList.filter(sea => this.seaSpeedFilter.includes(sea.speed));
      filtered = filteredSpeed.filter(sea => this.critterService.seaShadowFilter$.getValue().includes(sea.shadow));
    }
    this.critterService.seaFiltered$.next(filtered);
    this.critterService.seaGrid$.next(toFiveRows(filtered));
  }
}
