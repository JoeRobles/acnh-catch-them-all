import { Component, OnInit } from '@angular/core';

import { FishModel } from '../../../acnhapi/fish/models/fish.model';
import { FishShadowsEnum } from '../../../shared/models/fish-shadows.enum';
import { FishShadowsType } from '../../../shared/models/fish-shadows.type';
import { CritterService } from '../../../shared/services/critter.service';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { toFiveRows } from '../../../shared/utils/helpers';
import { FishLocationsEnum } from '../../../shared/models/fish-locations.enum';
import { CritterLocationsType } from '../../../shared/models/critter-locations.type';
import { CritterRarityEnum } from '../../../shared/models/critter-rarity.enum';

@Component({
  selector: 'app-toggle-fish-shadow',
  templateUrl: './toggle-fish-shadow.component.html',
  styleUrls: ['./toggle-fish-shadow.component.scss']
})
export class ToggleFishShadowComponent implements OnInit {

  protected readonly critterTypeEnum = CritterTypeEnum;
  protected readonly fishShadowsEnum = FishShadowsEnum;
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
  fishRarityFilter: CritterRarityEnum[] = [
    CritterRarityEnum.Common,
    CritterRarityEnum.Uncommon,
    CritterRarityEnum.Rare,
    CritterRarityEnum.UltraRare
  ];
  fishList: FishModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.fish$.subscribe(fish => this.fishList = fish);
    this.critterService.fishShadowFilter$.subscribe(shadows => this.fishShadowFilter = shadows);
  }

  toggleShadowAll(): void {
    let fishFiltered: FishModel[] = [];
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
      this.fishRarityFilter = [
        CritterRarityEnum.Common,
        CritterRarityEnum.Uncommon,
        CritterRarityEnum.Rare,
        CritterRarityEnum.UltraRare
      ];
      fishFiltered = this.fishList;
    } else {
      this.fishShadowFilter = [];
      this.fishLocationFilter = [];
      this.fishRarityFilter = [];
      fishFiltered = [];
    }
    this.critterService.fishShadowFilter$.next(this.fishShadowFilter);
    this.critterService.fishLocationsFilter$.next(this.fishLocationFilter);
    this.critterService.fishRarityFilter$.next(this.fishRarityFilter);
    this.critterService.fishFiltered$.next(fishFiltered);
    this.critterService.fishGrid$.next(toFiveRows(fishFiltered));
  }

  toggleShadow(shadow: FishShadowsEnum): void {
    let filtered: FishModel[] = [];
    const shadowIndex = this.fishShadowFilter.indexOf(shadow);
    if (shadowIndex > -1) {
      this.fishShadowFilter.splice(shadowIndex, 1);
      const filteredShadow = this.critterService.fishFiltered$.getValue().filter(f => this.fishShadowFilter.includes(f.shadow));
      const filteredLocation = filteredShadow.filter(f => this.critterService.fishLocationsFilter$.getValue().includes(f.availability.location));
      filtered = filteredLocation.filter(f => this.critterService.fishRarityFilter$.getValue().includes(f.availability.rarity));
    } else {
      this.fishShadowFilter.push(shadow);
      const filteredShadow = this.fishList.filter(f => this.fishShadowFilter.includes(f.shadow));
      const filteredLocation = filteredShadow.filter(f => this.critterService.fishLocationsFilter$.getValue().includes(f.availability.location));
      filtered = filteredLocation.filter(f => this.critterService.fishRarityFilter$.getValue().includes(f.availability.rarity));
    }
    this.critterService.fishFiltered$.next(filtered);
    this.critterService.fishGrid$.next(toFiveRows(filtered));
  }
}
