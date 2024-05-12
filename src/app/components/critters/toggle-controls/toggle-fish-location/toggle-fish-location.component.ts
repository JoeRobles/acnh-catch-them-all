import { Component, OnInit } from '@angular/core';

import { FishModel } from '../../../../acnhapi/fish/models/fish.model';
import { CritterLocationsType } from '../../../../acnhapi/models/critter-locations.type';
import { CritterTypeEnum } from '../../../../acnhapi/models/critter-type.enum';
import { FishLocationsEnum } from '../../../../acnhapi/models/fish-locations.enum';
import { CritterService } from '../../../../acnhapi/services/critter.service';
import { PreferencesService } from '../../../../shared/services/preferences.service';
import { toFiveRows } from '../../../../shared/utils/helpers';
import { FishShadowsEnum } from '../../../../acnhapi/models/fish-shadows.enum';
import { FishShadowsType } from '../../../../acnhapi/models/fish-shadows.type';
import { CritterRarityEnum } from '../../../../acnhapi/models/critter-rarity.enum';

@Component({
  selector: 'app-toggle-fish-location',
  templateUrl: './toggle-fish-location.component.html'
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
  fishRarityFilter: CritterRarityEnum[] = [
    CritterRarityEnum.Common,
    CritterRarityEnum.Uncommon,
    CritterRarityEnum.Rare,
    CritterRarityEnum.UltraRare
  ];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.fish$.subscribe(fish => this.fishList = fish);
    this.critterService.fishLocationsFilter$.subscribe(locations => this.fishLocationFilter = locations);
  }

  toggleLocationAll(): void {
    let fishFiltered: FishModel[] = [];
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
      this.fishRarityFilter = [
        CritterRarityEnum.Common,
        CritterRarityEnum.Uncommon,
        CritterRarityEnum.Rare,
        CritterRarityEnum.UltraRare
      ];
      fishFiltered = this.fishList;
    } else {
      this.fishLocationFilter = [];
      this.fishShadowFilter = [];
      this.fishRarityFilter = [];
      fishFiltered = [];
    }
    this.critterService.fishLocationsFilter$.next(this.fishLocationFilter);
    this.critterService.fishShadowFilter$.next(this.fishShadowFilter);
    this.critterService.fishRarityFilter$.next(this.fishRarityFilter);
    this.critterService.fishFiltered$.next(fishFiltered)
    this.critterService.fishGrid$.next(toFiveRows(fishFiltered));
  }

  toggleLocation(location: FishLocationsEnum): void {
    let filtered: FishModel[] = [];
    const locationIndex = this.fishLocationFilter.indexOf(location);
    if (locationIndex > -1) {
      this.fishLocationFilter.splice(locationIndex, 1);
      const filteredLocation = this.critterService.fishFiltered$.getValue().filter(f => this.fishLocationFilter.includes(f.availability.location));
      const filteredShadow = filteredLocation.filter(f => this.critterService.fishShadowFilter$.getValue().includes(f.shadow));
      filtered = filteredShadow.filter(f => this.critterService.fishRarityFilter$.getValue().includes(f.availability.rarity));
    } else {
      this.fishLocationFilter.push(location);
      const filteredLocation = this.fishList.filter(f => this.fishLocationFilter.includes(f.availability.location));
      const filteredShadow = filteredLocation.filter(f => this.critterService.fishShadowFilter$.getValue().includes(f.shadow));
      filtered = filteredShadow.filter(f => this.critterService.fishRarityFilter$.getValue().includes(f.availability.rarity));
    }
    this.critterService.fishFiltered$.next(filtered)
    this.critterService.fishGrid$.next(toFiveRows(filtered));
  }
}
