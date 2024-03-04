import { Component, OnInit } from '@angular/core';

import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { CritterRarityEnum } from '../../../shared/models/critter-rarity.enum';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { CritterService } from '../../../shared/services/critter.service';
import { BugModel } from '../../../acnhapi/bug/models/bug.model';
import { toFiveRows } from '../../../shared/utils/helpers';
import { BugLocationsEnum } from '../../../shared/models/bug-locations.enum';
import { CritterLocationsType } from '../../../shared/models/critter-locations.type';

@Component({
  selector: 'app-toggle-bug-rarity',
  templateUrl: './toggle-bug-rarity.component.html',
  styleUrls: ['./toggle-bug-rarity.component.scss']
})
export class ToggleBugRarityComponent implements OnInit {

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
  bugRarityEnum = CritterRarityEnum;
  bugList: BugModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.bugs$.subscribe(bugs => this.bugList = bugs);
    this.critterService.bugRarityFilter$.subscribe(rarity => this.bugRarityFilter = rarity);
  }

  toggleRarityAll(): void {
    let bugFiltered: BugModel[] = [];
    if (this.bugRarityFilter.length === 0) {
      this.bugRarityFilter = [
        CritterRarityEnum.Common,
        CritterRarityEnum.Uncommon,
        CritterRarityEnum.Rare,
        CritterRarityEnum.UltraRare
      ];
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
      bugFiltered = this.bugList;
    } else {
      this.bugRarityFilter = [];
      this.bugLocationFilter = [];
      bugFiltered = [];
    }
    this.critterService.bugRarityFilter$.next(this.bugRarityFilter);
    this.critterService.bugLocationsFilter$.next(this.bugLocationFilter);
    this.critterService.bugsFiltered$.next(bugFiltered);
    this.critterService.bugsGrid$.next(toFiveRows(bugFiltered));
  }

  toggleRarity(rarity: CritterRarityEnum): void {
    let filtered: BugModel[] = [];
    const rarityIndex = this.bugRarityFilter.indexOf(rarity);
    if (rarityIndex > -1) {
      this.bugRarityFilter.splice(rarityIndex, 1);
      const filteredRarity = this.critterService.bugsFiltered$.getValue().filter(bug => this.bugRarityFilter.includes(bug.availability.rarity));
      filtered = filteredRarity.filter(bug => this.critterService.bugLocationsFilter$.getValue().includes(bug.availability.location));
    } else {
      this.bugRarityFilter.push(rarity);
      const filteredRarity = this.bugList.filter(bug => this.bugRarityFilter.includes(bug.availability.rarity));
      filtered = filteredRarity.filter(bug => this.critterService.bugLocationsFilter$.getValue().includes(bug.availability.location));
    }
    this.critterService.bugsFiltered$.next(filtered);
    this.critterService.bugsGrid$.next(toFiveRows(filtered));
  }
}
