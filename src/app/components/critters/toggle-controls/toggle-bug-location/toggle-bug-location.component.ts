import { Component, OnInit } from '@angular/core';

import { BugModel } from '../../../../acnhapi/bug/models/bug.model';
import { BugLocationsEnum } from '../../../../acnhapi/models/bug-locations.enum';
import { CritterTypeEnum } from '../../../../acnhapi/models/critter-type.enum';
import { CritterService } from '../../../../acnhapi/services/critter.service';
import { PreferencesService } from '../../../../shared/services/preferences.service';
import { CritterLocationsType } from '../../../../acnhapi/models/critter-locations.type';
import { toFiveRows } from '../../../../shared/utils/helpers';
import { CritterRarityEnum } from '../../../../acnhapi/models/critter-rarity.enum';

@Component({
  selector: 'app-toggle-bug-location',
  templateUrl: './toggle-bug-location.component.html'
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

  bugRarityFilter: CritterRarityEnum[] = [
    CritterRarityEnum.Common,
    CritterRarityEnum.Uncommon,
    CritterRarityEnum.Rare,
    CritterRarityEnum.UltraRare
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
    this.critterService.bugLocationsFilter$.subscribe(locations => this.bugLocationFilter = locations);
  }

  toggleLocationAll(): void {
    let bugFiltered: BugModel[] = [];
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
      this.bugRarityFilter = [
        CritterRarityEnum.Common,
        CritterRarityEnum.Uncommon,
        CritterRarityEnum.Rare,
        CritterRarityEnum.UltraRare
      ];
      bugFiltered = this.bugList;
    } else {
      this.bugLocationFilter = [];
      this.bugRarityFilter = [];
      bugFiltered = [];
    }
    this.critterService.bugLocationsFilter$.next(this.bugLocationFilter);
    this.critterService.bugRarityFilter$.next(this.bugRarityFilter);
    this.critterService.bugsFiltered$.next(bugFiltered);
    this.critterService.bugsGrid$.next(toFiveRows(bugFiltered));
  }

  toggleLocation(location: BugLocationsEnum): void {
    let filtered: BugModel[] = [];
    const locationIndex = this.bugLocationFilter.indexOf(location);
    if (locationIndex > -1) {
      this.bugLocationFilter.splice(locationIndex, 1);
      const filteredLocation = this.critterService.bugsFiltered$.getValue().filter(b => this.bugLocationFilter.includes(b.availability.location));
      filtered = filteredLocation.filter(b => this.critterService.bugRarityFilter$.getValue().includes(b.availability.rarity));
    } else {
      this.bugLocationFilter.push(location);
      const filteredLocation = this.bugList.filter(b => this.bugLocationFilter.includes(b.availability.location));
      filtered = filteredLocation.filter(b => this.critterService.bugRarityFilter$.getValue().includes(b.availability.rarity));
    }
    this.critterService.bugsFiltered$.next(filtered);
    this.critterService.bugsGrid$.next(toFiveRows(filtered));
  }
}
