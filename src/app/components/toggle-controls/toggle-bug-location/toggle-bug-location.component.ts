import { Component, OnInit } from '@angular/core';

import { BugModel } from '../../../acnhapi/bug/models/bug.model';
import { BugLocationsEnum } from '../../../shared/models/bug-locations.enum';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { CritterService } from '../../../shared/services/critter.service';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { toFiveRows } from '../../../shared/utils/helpers';
import { CritterLocationsType } from '../../../shared/models/critter-locations.type';

@Component({
  selector: 'app-toggle-bug-location',
  templateUrl: './toggle-bug-location.component.html',
  styleUrls: ['./toggle-bug-location.component.scss']
})
export class ToggleBugLocationComponent implements OnInit {

  critterTypeEnum = CritterTypeEnum;
  bugLocationFilter: CritterLocationsType[] = [
    BugLocationsEnum.Flying,
    BugLocationsEnum.FlyingByLight,
    BugLocationsEnum.FlyingNearHybridFlowers,
    BugLocationsEnum.FlyingNearWater,
    BugLocationsEnum.HittingRocks,
    BugLocationsEnum.NearTrash,
    BugLocationsEnum.OnBeachRocks,
    BugLocationsEnum.OnFlowers,
    BugLocationsEnum.OnPalmTrees,
    BugLocationsEnum.OnPondsAndRivers,
    BugLocationsEnum.OnRocksAndBushWhenRaining,
    BugLocationsEnum.OnRottenFood,
    BugLocationsEnum.OnTheBeach,
    BugLocationsEnum.OnTheGround,
    BugLocationsEnum.OnTrees,
    BugLocationsEnum.OnTreeStumps,
    BugLocationsEnum.OnVillagers,
    BugLocationsEnum.OnWhiteFlowers,
    BugLocationsEnum.ShakingTrees,
    BugLocationsEnum.Underground,
    BugLocationsEnum.UnderTrees
  ];
  bugLocationsEnum = BugLocationsEnum;
  bugList: BugModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.bugs$.subscribe(bug => this.bugList = bug);
  }

  toggleLocationAll(): void {
    if (this.bugLocationFilter.length === 0) {
      this.bugLocationFilter = [
        BugLocationsEnum.Flying,
        BugLocationsEnum.FlyingByLight,
        BugLocationsEnum.FlyingNearHybridFlowers,
        BugLocationsEnum.FlyingNearWater,
        BugLocationsEnum.HittingRocks,
        BugLocationsEnum.NearTrash,
        BugLocationsEnum.OnBeachRocks,
        BugLocationsEnum.OnFlowers,
        BugLocationsEnum.OnPalmTrees,
        BugLocationsEnum.OnPondsAndRivers,
        BugLocationsEnum.OnRocksAndBushWhenRaining,
        BugLocationsEnum.OnRottenFood,
        BugLocationsEnum.OnTheBeach,
        BugLocationsEnum.OnTheGround,
        BugLocationsEnum.OnTrees,
        BugLocationsEnum.OnTreeStumps,
        BugLocationsEnum.OnVillagers,
        BugLocationsEnum.OnWhiteFlowers,
        BugLocationsEnum.ShakingTrees,
        BugLocationsEnum.Underground,
        BugLocationsEnum.UnderTrees
      ];
    } else {
      this.bugLocationFilter = [];
    }
    const filtered = this.bugList.filter(b => this.bugLocationFilter.includes(b.availability.location));
    this.critterService.bugsGrid$.next(toFiveRows(filtered));
  }

  toggleLocation(location: BugLocationsEnum): void {
    const locationIndex = this.bugLocationFilter.indexOf(location);
    if (locationIndex > -1) {
      this.bugLocationFilter.splice(locationIndex, 1);
    } else {
      this.bugLocationFilter.push(location);
    }
    const filtered = this.bugList.filter(b => this.bugLocationFilter.includes(b.availability.location));
    this.critterService.bugsGrid$.next(toFiveRows(filtered));
  }
}
