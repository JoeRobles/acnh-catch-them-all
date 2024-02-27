import { Component, OnInit } from '@angular/core';

import { FishModel } from '../../../acnhapi/fish/models/fish.model';
import { CritterLocationsType } from '../../../shared/models/critter-locations.type';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { FishLocationsEnum } from '../../../shared/models/fish-locations.enum';
import { CritterService } from '../../../shared/services/critter.service';
import { toFiveRows } from '../../../shared/utils/helpers';
import { BugLocationsEnum } from '../../../shared/models/bug-locations.enum';
import { PreferencesService } from '../../../shared/services/preferences.service';

@Component({
  selector: 'app-toggle-fish-location',
  templateUrl: './toggle-fish-location.component.html',
  styleUrls: ['./toggle-fish-location.component.scss']
})
export class ToggleFishLocationComponent implements OnInit {

  critterTypeEnum = CritterTypeEnum;
  fishLocationFilter: CritterLocationsType[] = [
    FishLocationsEnum.Pond,
    FishLocationsEnum.River,
    FishLocationsEnum.RiverClifftop,
    FishLocationsEnum.RiverClifftopPond,
    FishLocationsEnum.RiverMouth,
    FishLocationsEnum.Sea,
    FishLocationsEnum.Pier,
    FishLocationsEnum.SeaRainingSnowing
  ];
  fishLocationsEnum = FishLocationsEnum;
  fishList: FishModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.fish$.subscribe(fish => this.fishList = fish);
  }

  toggleLocationAll(): void {
    if (this.fishLocationFilter.length === 0) {
      this.fishLocationFilter = [
        FishLocationsEnum.Pond,
        FishLocationsEnum.River,
        FishLocationsEnum.RiverClifftop,
        FishLocationsEnum.RiverClifftopPond,
        FishLocationsEnum.RiverMouth,
        FishLocationsEnum.Sea,
        FishLocationsEnum.Pier,
        FishLocationsEnum.SeaRainingSnowing
      ];
    } else {
      this.fishLocationFilter = [];
    }
    const filtered = this.fishList.filter(f => this.fishLocationFilter.includes(f.availability.location));
    this.critterService.fishGrid$.next(toFiveRows(filtered));
  }

  toggleLocation(location: FishLocationsEnum): void {
    const locationIndex = this.fishLocationFilter.indexOf(location);
    if (locationIndex > -1) {
      this.fishLocationFilter.splice(locationIndex, 1);
    } else {
      this.fishLocationFilter.push(location);
    }
    const filtered = this.fishList.filter(f => this.fishLocationFilter.includes(f.availability.location));
    this.critterService.fishGrid$.next(toFiveRows(filtered));
  }

  protected readonly bugLocationsEnum = BugLocationsEnum;
}
