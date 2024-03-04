import { Component, OnInit } from '@angular/core';

import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { SeaShadowsEnum } from '../../../shared/models/sea-shadows.enum';
import { SeaModel } from '../../../acnhapi/sea/models/sea.model';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { CritterService } from '../../../shared/services/critter.service';
import { toFiveRows } from '../../../shared/utils/helpers';
import { SeaSpeedsEnum } from '../../../shared/models/sea-speeds.enum';

@Component({
  selector: 'app-toggle-sea-shadows',
  templateUrl: './toggle-sea-shadows.component.html',
  styleUrls: ['./toggle-sea-shadows.component.scss']
})
export class ToggleSeaShadowsComponent implements OnInit {

  protected readonly critterTypeEnum = CritterTypeEnum;
  protected readonly seaShadowsEnum = SeaShadowsEnum;
  seaShadowFilter: SeaShadowsEnum[] = [
    SeaShadowsEnum.Smallest,
    SeaShadowsEnum.Small,
    SeaShadowsEnum.Medium,
    SeaShadowsEnum.Large,
    SeaShadowsEnum.Largest
  ];
  seaSpeedFilter: SeaSpeedsEnum[] = [
    SeaSpeedsEnum.Stationary,
    SeaSpeedsEnum.VerySlow,
    SeaSpeedsEnum.Slow,
    SeaSpeedsEnum.Medium,
    SeaSpeedsEnum.Fast,
    SeaSpeedsEnum.VeryFast
  ];
  seaList: SeaModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.sea$.subscribe(sea => this.seaList = sea);
    this.critterService.seaShadowFilter$.subscribe(shadows => this.seaShadowFilter = shadows);
  }

  toggleShadowAll(): void {
    let seaFiltered: SeaModel[] = [];
    if (this.seaShadowFilter.length === 0) {
      this.seaShadowFilter = [
        SeaShadowsEnum.Smallest,
        SeaShadowsEnum.Small,
        SeaShadowsEnum.Medium,
        SeaShadowsEnum.Large,
        SeaShadowsEnum.Largest
      ];
      this.seaSpeedFilter = [
        SeaSpeedsEnum.Stationary,
        SeaSpeedsEnum.VerySlow,
        SeaSpeedsEnum.Slow,
        SeaSpeedsEnum.Medium,
        SeaSpeedsEnum.Fast,
        SeaSpeedsEnum.VeryFast
      ];
      seaFiltered = this.seaList;
    } else {
      this.seaShadowFilter = [];
      this.seaSpeedFilter = [];
      seaFiltered = [];
    }
    this.critterService.seaShadowFilter$.next(this.seaShadowFilter);
    this.critterService.seaSpeedFilter$.next(this.seaSpeedFilter);
    this.critterService.seaFiltered$.next(seaFiltered);
    this.critterService.seaGrid$.next(toFiveRows(seaFiltered));
  }

  toggleShadow(shadow: SeaShadowsEnum): void {
    let filtered: SeaModel[] = [];
    const shadowIndex = this.seaShadowFilter.indexOf(shadow);
    if (shadowIndex > -1) {
      this.seaShadowFilter.splice(shadowIndex, 1);
      const filteredShadow = this.critterService.seaFiltered$.getValue().filter(sea => this.seaShadowFilter.includes(sea.shadow));
      filtered = filteredShadow.filter(sea => this.critterService.seaSpeedFilter$.getValue().includes(sea.speed));
    } else {
      this.seaShadowFilter.push(shadow);
      const filteredShadow = this.seaList.filter(sea => this.seaShadowFilter.includes(sea.shadow));
      filtered = filteredShadow.filter(sea => this.critterService.seaSpeedFilter$.getValue().includes(sea.speed));
    }
    this.critterService.seaFiltered$.next(filtered);
    this.critterService.seaGrid$.next(toFiveRows(filtered));
  }
}
