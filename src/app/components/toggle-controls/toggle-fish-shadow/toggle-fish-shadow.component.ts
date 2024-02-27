import { Component, OnInit } from '@angular/core';

import { FishModel } from '../../../acnhapi/fish/models/fish.model';
import { FishShadowsEnum } from '../../../shared/models/fish-shadows.enum';
import { FishShadowsType } from '../../../shared/models/fish-shadows.type';
import { CritterService } from '../../../shared/services/critter.service';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { toFiveRows } from '../../../shared/utils/helpers';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { BugLocationsEnum } from '../../../shared/models/bug-locations.enum';

@Component({
  selector: 'app-toggle-fish-shadow',
  templateUrl: './toggle-fish-shadow.component.html',
  styleUrls: ['./toggle-fish-shadow.component.scss']
})
export class ToggleFishShadowComponent implements OnInit {

  critterTypeEnum = CritterTypeEnum;
  fishShadowFilter: FishShadowsType[] = [
    FishShadowsEnum.Large,
    FishShadowsEnum.Largest,
    FishShadowsEnum.LargestWithFin,
    FishShadowsEnum.Medium,
    FishShadowsEnum.Medium4,
    FishShadowsEnum.MediumWithFin,
    FishShadowsEnum.Narrow,
    FishShadowsEnum.Small,
    FishShadowsEnum.Smallest
  ];
  fishShadowsEnum = FishShadowsEnum;
  fishList: FishModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.fish$.subscribe(fish => this.fishList = fish);
  }

  toggleShadowAll(): void {
    if (this.fishShadowFilter.length === 0) {
      this.fishShadowFilter = [
        FishShadowsEnum.Large,
        FishShadowsEnum.Largest,
        FishShadowsEnum.LargestWithFin,
        FishShadowsEnum.Medium,
        FishShadowsEnum.Medium4,
        FishShadowsEnum.MediumWithFin,
        FishShadowsEnum.Narrow,
        FishShadowsEnum.Small,
        FishShadowsEnum.Smallest
      ];
    } else {
      this.fishShadowFilter = [];
    }
    const filtered = this.fishList.filter(f => this.fishShadowFilter.includes(f.shadow));
    this.critterService.fishGrid$.next(toFiveRows(filtered));
  }

  toggleShadow(shadow: FishShadowsEnum): void {
    const shadowIndex = this.fishShadowFilter.indexOf(shadow);
    if (shadowIndex > -1) {
      this.fishShadowFilter.splice(shadowIndex, 1);
    } else {
      this.fishShadowFilter.push(shadow);
    }
    const filtered = this.fishList.filter(f => this.fishShadowFilter.includes(f.shadow));
    this.critterService.fishGrid$.next(toFiveRows(filtered));
  }

  protected readonly bugLocationsEnum = BugLocationsEnum;
}
