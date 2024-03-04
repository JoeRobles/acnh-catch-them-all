import { Component, OnInit } from '@angular/core';

import { FishModel } from '../../../acnhapi/fish/models/fish.model';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { CritterRarityEnum } from '../../../shared/models/critter-rarity.enum';
import { CritterService } from '../../../shared/services/critter.service';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { toFiveRows } from '../../../shared/utils/helpers';
import { CritterLocationsType } from '../../../shared/models/critter-locations.type';
import { FishLocationsEnum } from '../../../shared/models/fish-locations.enum';
import { FishShadowsType } from '../../../shared/models/fish-shadows.type';
import { FishShadowsEnum } from '../../../shared/models/fish-shadows.enum';

@Component({
  selector: 'app-toggle-fish-rarity',
  templateUrl: './toggle-fish-rarity.component.html',
  styleUrls: ['./toggle-fish-rarity.component.scss']
})
export class ToggleFishRarityComponent implements OnInit {

  critterTypeEnum = CritterTypeEnum;
  fishRarityFilter: CritterRarityEnum[] = [
    CritterRarityEnum.Common,
    CritterRarityEnum.Uncommon,
    CritterRarityEnum.Rare,
    CritterRarityEnum.UltraRare
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
  fishRarityEnum = CritterRarityEnum;
  fishList: FishModel[] = [];
  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) { }

  ngOnInit(): void {
    this.critterService.fish$.subscribe(fish => this.fishList = fish);
    this.critterService.fishRarityFilter$.subscribe(rarity => this.fishRarityFilter = rarity);
  }

  toggleRarityAll(): void {
    let fishFiltered: FishModel[] = [];
    if (this.fishRarityFilter.length === 0) {
      this.fishRarityFilter = [
        CritterRarityEnum.Common,
        CritterRarityEnum.Uncommon,
        CritterRarityEnum.Rare,
        CritterRarityEnum.UltraRare
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
      fishFiltered = this.fishList;
    } else {
      this.fishRarityFilter = [];
      this.fishLocationFilter = [];
      this.fishShadowFilter = [];
      fishFiltered = [];
    }
    this.critterService.fishRarityFilter$.next(this.fishRarityFilter);
    this.critterService.fishLocationsFilter$.next(this.fishLocationFilter);
    this.critterService.fishShadowFilter$.next(this.fishShadowFilter);
    this.critterService.fishFiltered$.next(fishFiltered);
    this.critterService.fishGrid$.next(toFiveRows(fishFiltered));
  }

  toggleRarity(rarity: CritterRarityEnum): void {
    let filtered: FishModel[] = [];
    const rarityIndex = this.fishRarityFilter.indexOf(rarity);
    if (rarityIndex > -1) {
      this.fishRarityFilter.splice(rarityIndex, 1);
      const filteredRarity = this.critterService.fishFiltered$.getValue().filter(fish => this.fishRarityFilter.includes(fish.availability.rarity));
      const filteredLocation = filteredRarity.filter(fish => this.critterService.fishLocationsFilter$.getValue().includes(fish.availability.location));
      filtered = filteredLocation.filter(fish => this.critterService.fishShadowFilter$.getValue().includes(fish.shadow));
    } else {
      this.fishRarityFilter.push(rarity);
      const filteredRarity = this.fishList.filter(fish => this.fishRarityFilter.includes(fish.availability.rarity));
      const filteredLocation = filteredRarity.filter(fish => this.critterService.fishLocationsFilter$.getValue().includes(fish.availability.location));
      filtered = filteredLocation.filter(fish => this.critterService.fishShadowFilter$.getValue().includes(fish.shadow));
    }
    this.critterService.fishFiltered$.next(filtered);
    this.critterService.fishGrid$.next(toFiveRows(filtered));
  }
}
