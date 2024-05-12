import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map } from 'rxjs';

import { LocalStorageService } from '../../shared/services/local-storage.service';
import { CritterTypeEnum } from '../models/critter-type.enum';
import { FishModel } from '../fish/models/fish.model';
import { ascByNumber, toFiveRows } from '../../shared/utils/helpers';
import { SeaModel } from '../sea/models/sea.model';
import { BugModel } from '../bug/models/bug.model';
import { SongModel } from '../song/models/song.model';
import { FossilModel } from '../fossil/models/fossil.model';
import { ArtModel } from '../art/models/art.model';
import { SongGenreTypeEnum } from '../models/song-genre-type.enum';
import { BugModelModel } from '../bug-model/models/bug-model.model';
import { FishModelModel } from '../fish-model/models/fish-model.model';
import { ModelModel } from '../models/model.model';
import { CritterType } from '../models/critter.type';
import { PreferencesService } from '../../shared/services/preferences.service';
import { BugLocationsEnum } from '../models/bug-locations.enum';
import { CritterLocationsType } from '../models/critter-locations.type';
import { FishLocationsEnum } from '../models/fish-locations.enum';
import { CaughtCrittersInterface } from '../models/caught-critters.interface';
import { FishShadowsType } from '../models/fish-shadows.type';
import { FishShadowsEnum } from '../models/fish-shadows.enum';
import { CritterRarityEnum } from '../models/critter-rarity.enum';
import { CritterRarityType } from '../models/critter-rarity.type';
import { SeaShadowsEnum } from '../models/sea-shadows.enum';
import { SeaSpeedsEnum } from '../models/sea-speeds.enum';
import { CritterApiService } from './critter-api.service';
import { CritterModel } from "../models/critter.model";

@Injectable({
  providedIn: 'root'
})
export class CritterService {
  art = new BehaviorSubject<ArtModel>({} as ArtModel);
  art$ = new BehaviorSubject<ArtModel[]>([]);
  artAmount = new BehaviorSubject<number>(0);
  artCertFilter$ = new BehaviorSubject<boolean[]>([
    true,
    false
  ]);
  artsGrid$ = new BehaviorSubject<ArtModel[]>([]);
  bug = new BehaviorSubject<BugModel>({} as BugModel);
  bugModels$ = new BehaviorSubject<BugModelModel[]>([]);
  bugModelsAmount = new BehaviorSubject<number>(0);
  bugModelsThreeOfAKindAmount = new BehaviorSubject<number>(0);
  bugModelsGrid$ = new BehaviorSubject<BugModelModel[][]>([]);
  bugs$ = new BehaviorSubject<BugModel[]>([]);
  bugsAmount = new BehaviorSubject<number>(0);
  bugsDonatedAmount = new BehaviorSubject<number>(0);
  bugsFiltered$ = new BehaviorSubject<BugModel[]>([]);
  bugsGrid$ = new BehaviorSubject<BugModel[][]>([]);
  bugLocationsFilter$ = new BehaviorSubject<CritterLocationsType[]>([
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
  ]);
  bugRarityFilter$ = new BehaviorSubject<CritterRarityType[]>([
    CritterRarityEnum.Common,
    CritterRarityEnum.Uncommon,
    CritterRarityEnum.Rare,
    CritterRarityEnum.UltraRare
  ]);
  fishLocationsFilter$ = new BehaviorSubject<CritterLocationsType[]>([
    FishLocationsEnum.Pier,
    FishLocationsEnum.Pond,
    FishLocationsEnum.River,
    FishLocationsEnum.RiverClifftop,
    FishLocationsEnum.RiverClifftopPond,
    FishLocationsEnum.RiverMouth,
    FishLocationsEnum.Sea,
    FishLocationsEnum.SeaRainingSnowing
  ]);
  critters: CaughtCrittersInterface;
  critterType$ = new BehaviorSubject<CritterTypeEnum>('' as CritterTypeEnum);
  fish = new BehaviorSubject<FishModel>({} as FishModel);
  fish$ = new BehaviorSubject<FishModel[]>([]);
  fishAmount = new BehaviorSubject<number>(0);
  fishDonatedAmount = new BehaviorSubject<number>(0);
  fishFiltered$ = new BehaviorSubject<FishModel[]>([]);
  fishGrid$ = new BehaviorSubject<FishModel[][]>([]);
  fishModels$ = new BehaviorSubject<FishModelModel[]>([]);
  fishModelsAmount = new BehaviorSubject<number>(0);
  fishModelsThreeOfAKindAmount = new BehaviorSubject<number>(0);
  fishModelsGrid$ = new BehaviorSubject<FishModelModel[][]>([]);
  fishShadowFilter$ = new BehaviorSubject<FishShadowsType[]>([
    FishShadowsEnum.Large,
    FishShadowsEnum.Largest,
    FishShadowsEnum.LargestWithFin,
    FishShadowsEnum.Medium,
    FishShadowsEnum.Medium4,
    FishShadowsEnum.MediumWithFin,
    FishShadowsEnum.Narrow,
    FishShadowsEnum.Small,
    FishShadowsEnum.Smallest
  ]);
  fishRarityFilter$ = new BehaviorSubject<CritterRarityType[]>([
    CritterRarityEnum.Common,
    CritterRarityEnum.Uncommon,
    CritterRarityEnum.Rare,
    CritterRarityEnum.UltraRare
  ]);
  fossil = new BehaviorSubject<FossilModel>({} as FossilModel);
  fossils$ = new BehaviorSubject<FossilModel[]>([]);
  fossilsAmount = new BehaviorSubject<number>(0);
  fossilsGrid$ = new BehaviorSubject<FossilModel[]>([]);
  model = new BehaviorSubject<ModelModel>({} as ModelModel);
  sea = new BehaviorSubject<SeaModel>({} as SeaModel);
  sea$ = new BehaviorSubject<SeaModel[]>([]);
  seaAmount = new BehaviorSubject<number>(0);
  seaDonatedAmount = new BehaviorSubject<number>(0);
  seaFiltered$ = new BehaviorSubject<SeaModel[]>([]);
  seaGrid$ = new BehaviorSubject<SeaModel[][]>([]);
  seaShadowFilter$ = new BehaviorSubject<SeaShadowsEnum[]>([
    SeaShadowsEnum.Smallest,
    SeaShadowsEnum.Small,
    SeaShadowsEnum.Medium,
    SeaShadowsEnum.Large,
    SeaShadowsEnum.Largest
  ]);
  seaSpeedFilter$ = new BehaviorSubject<SeaSpeedsEnum[]>([
    SeaSpeedsEnum.Stationary,
    SeaSpeedsEnum.VerySlow,
    SeaSpeedsEnum.Slow,
    SeaSpeedsEnum.Medium,
    SeaSpeedsEnum.Fast,
    SeaSpeedsEnum.VeryFast
  ]);
  shadow: string[] = [];
  song = new BehaviorSubject<SongModel>({} as SongModel);
  songGenresFilter$ = new BehaviorSubject<SongGenreTypeEnum[]>([
    SongGenreTypeEnum.Animal,
    SongGenreTypeEnum.Classic,
    SongGenreTypeEnum.Dance,
    SongGenreTypeEnum.Japanese,
    SongGenreTypeEnum.Jazz,
    SongGenreTypeEnum.Rock,
    SongGenreTypeEnum.Soul,
    SongGenreTypeEnum.Soundtrack,
    SongGenreTypeEnum.World,
  ]);
  songs$ = new BehaviorSubject<SongModel[]>([]);
  songsAmount = new BehaviorSubject<number>(0);
  songsGrid$ = new BehaviorSubject<SongModel[]>([]);

  constructor(
    private localStorageService: LocalStorageService,
    private preferencesService: PreferencesService,
    private critterApiService: CritterApiService
  ) {
    this.critters = {
      bugs: [],
      bugsDonated: [],
      fish: [],
      fishDonated: [],
      sea: [],
      seaDonated: [],
      songs: [],
      fossils: [],
      art: [],
      bugModels: [],
      bugModelsThreeOfAKind: [],
      fishModels: [],
      fishModelsThreeOfAKind: [],
    };
    this.getCritters();
    this.preferencesService.getPreferences();
  }

  getCritters(): void {
    const data = this.localStorageService.get('critters');
    if (data) {
      this.critters = JSON.parse(data);
      if (this.critters?.bugs) {
        this.bugsAmount.next(this.critters.bugs.length);
      } else {
        this.critters.bugs = [];
        this.bugsAmount.next(0);
      }
      if (this.critters?.bugsDonated) {
        this.bugsDonatedAmount.next(this.critters.bugsDonated.length);
      } else {
        this.critters.bugsDonated = [];
        this.bugsDonatedAmount.next(0);
      }
      if (this.critters?.fish) {
        this.fishAmount.next(this.critters.fish.length);
      } else {
        this.critters.fish = [];
        this.fishAmount.next(0);
      }
      if (this.critters?.fishDonated) {
        this.fishDonatedAmount.next(this.critters.fishDonated.length);
      } else {
        this.critters.fishDonated = [];
        this.fishDonatedAmount.next(0);
      }
      if (this.critters?.sea) {
        this.seaAmount.next(this.critters.sea.length);
      } else {
        this.critters.sea = [];
        this.seaAmount.next(0);
      }
      if (this.critters?.seaDonated) {
        this.seaDonatedAmount.next(this.critters.seaDonated.length);
      } else {
        this.critters.seaDonated = [];
        this.seaDonatedAmount.next(0);
      }
      if (this.critters?.songs) {
        this.songsAmount.next(this.critters.songs.length);
      } else {
        this.critters.songs = [];
        this.songsAmount.next(0);
      }
      if (this.critters?.fossils) {
        this.fossilsAmount.next(this.critters.fossils.length);
      } else {
        this.critters.fossils = [];
        this.fossilsAmount.next(0);
      }
      if (this.critters?.art) {
        this.artAmount.next(this.critters.art.length);
      } else {
        this.critters.art = [];
        this.artAmount.next(0);
      }
      if (this.critters?.bugModels) {
        this.bugModelsAmount.next(this.critters.bugModels.length);
      } else {
        this.critters.bugModels = [];
        this.bugModelsAmount.next(0);
      }
      if (this.critters?.bugModelsThreeOfAKind) {
        this.bugModelsThreeOfAKindAmount.next(this.critters.bugModelsThreeOfAKind.length);
      } else {
        this.critters.bugModelsThreeOfAKind = [];
        this.bugModelsThreeOfAKindAmount.next(0);
      }
      if (this.critters?.fishModels) {
        this.fishModelsAmount.next(this.critters.fishModels.length);
      } else {
        this.critters.fishModels = [];
        this.fishModelsAmount.next(0);
      }
      if (this.critters?.fishModelsThreeOfAKind) {
        this.fishModelsThreeOfAKindAmount.next(this.critters.fishModelsThreeOfAKind.length);
      } else {
        this.critters.fishModelsThreeOfAKind = [];
        this.fishModelsThreeOfAKindAmount.next(0);
      }
    }
    this.localStorageService.setObject('critters', this.critters);
  }

  updateCritter(critterId: number, critterType: CritterType) {
    const index = this.critters[critterType]?.indexOf(critterId);
    if (index > -1) {
      if (index != null) {
        this.critters[critterType]?.splice(index, 1);
      }
    } else {
      this.critters[critterType]?.push(critterId);
    }

    switch (critterType) {
      case CritterTypeEnum.Bugs:
        this.bugsAmount.next(this.critters[critterType].length);
        break;
      case CritterTypeEnum.Fish:
        this.fishAmount.next(this.critters[critterType].length);
        break;
      case CritterTypeEnum.Sea:
        this.seaAmount.next(this.critters[critterType].length);
        break;
      case CritterTypeEnum.Songs:
        this.songsAmount.next(this.critters[critterType].length);
        break;
      case CritterTypeEnum.Fossils:
        this.fossilsAmount.next(this.critters[critterType].length);
        break;
      case CritterTypeEnum.Art:
        this.artAmount.next(this.critters[critterType].length);
        break;
      case CritterTypeEnum.BugModels:
        this.bugModelsAmount.next(this.critters[critterType].length);
        break;
      case CritterTypeEnum.FishModels:
        this.fishModelsAmount.next(this.critters[critterType].length);
        break;
      default:
        break;
    }
    this.localStorageService.setObject('critters', this.critters);
  }

  updateCritterList(critterModel: BugModel | FishModel | SeaModel, critterType: CritterType) {
    switch (critterType) {
      case CritterTypeEnum.Bugs:
        this.iterateCritterType(this.bugs$, critterModel.id, CritterTypeEnum.Bugs);
        break;
      case CritterTypeEnum.Fish:
        this.iterateCritterType(this.fish$, critterModel.id, CritterTypeEnum.Fish);
        break;
      case CritterTypeEnum.Sea:
        this.iterateCritterType(this.sea$, critterModel.id, CritterTypeEnum.Sea);
        break;
      case CritterTypeEnum.Fossils:
        this.iterateCritterType(this.fossils$, critterModel.id, CritterTypeEnum.Fossils);
        break;
      case CritterTypeEnum.Art:
        this.iterateCritterType(this.art$, critterModel.id, CritterTypeEnum.Art);
        break;
      case CritterTypeEnum.Songs:
        this.iterateCritterType(this.songs$, critterModel.id, CritterTypeEnum.Songs);
        break;
      case CritterTypeEnum.BugModels:
        this.iterateCritterType(this.bugModels$, critterModel.id, CritterTypeEnum.BugModels);
        break;
      case CritterTypeEnum.FishModels:
        this.iterateCritterType(this.fishModels$, critterModel.id, CritterTypeEnum.FishModels);
        break;
      default:
        break;
    }
  }

  iterateCritterType<T>(critter$: BehaviorSubject<any[]>, critterModelId: number, critterType: CritterType) {
    critter$.pipe(
      map(bug => {
        bug.forEach(b => {
          if (critterModelId === b.id) {
            b.catch = !b.catch;
            this.updateCritter(critterModelId, critterType);
          }
        })
      })).subscribe();
  }

  resolveCritters() {
    const observable = forkJoin({
      bugs: this.critterApiService.getBugs(),
      bugModels: this.critterApiService.getBugModels(),
      fish: this.critterApiService.getFish(),
      fishModels: this.critterApiService.getFishModels(),
      sea: this.critterApiService.getSea(),
      songs: this.critterApiService.getSongs(),
      fossils: this.critterApiService.getFossils(),
      art: this.critterApiService.getArt(),
    });
    observable.subscribe({
      next: data => {
        this.setCritterList(data.bugs, CritterTypeEnum.Bugs);
        this.setCritterList(data.bugModels, CritterTypeEnum.BugModels);
        this.setCritterList(data.fish, CritterTypeEnum.Fish);
        this.setCritterList(data.fishModels, CritterTypeEnum.FishModels);
        this.setCritterList(data.sea, CritterTypeEnum.Sea);
        this.setCritterList(data.songs, CritterTypeEnum.Songs);
        this.setCritterList(data.fossils, CritterTypeEnum.Fossils);
        this.setCritterList(data.art, CritterTypeEnum.Art);
      },
      error: error => console.log('ACNH API not available: ', error)
    })
  }

  setCritterList(
    critters: BugModel[] | BugModelModel[] | FishModel[] | FishModelModel[] | SeaModel[] | SongModel[] | FossilModel[] | ArtModel[],
    critterType: CritterTypeEnum.Art | CritterTypeEnum.Bugs | CritterTypeEnum.BugModels | CritterTypeEnum.Fish | CritterTypeEnum.FishModels | CritterTypeEnum.Fossils | CritterTypeEnum.Sea | CritterTypeEnum.Songs
  ) {
    critters.map((b, i) => {
      if (this.critters[critterType]?.length > 0) {
        critters[i].catch = (this.critters[critterType].indexOf(b.id) > -1);
      }
    });
    switch (critterType) {
      case CritterTypeEnum.Bugs:
        this.bugs$.next(critters as BugModel[]);
        this.bugsFiltered$.next(critters as BugModel[]);
        this.bugsGrid$.next(toFiveRows(critters));
        this.bugLocationsFilter$.subscribe(locations => {
          const filtered = this.bugsFiltered$.value.filter((b: BugModel) => locations.indexOf(b.availability.location) > -1);
          this.bugsFiltered$.next(filtered);
          this.bugsGrid$.next(toFiveRows(filtered));
        });
        this.bugRarityFilter$.subscribe(rarities => {
          const filtered = this.bugsFiltered$.value.filter((b: BugModel) => rarities.indexOf(b.availability.rarity) > -1);
          this.bugsFiltered$.next(filtered);
          this.bugsGrid$.next(toFiveRows(filtered));
        });
        break;
      case CritterTypeEnum.Fish:
        this.fish$.next(critters as FishModel[]);
        this.fishFiltered$.next(critters as FishModel[]);
        this.fishGrid$.next(toFiveRows(critters));
        this.fishLocationsFilter$.subscribe(locations => {
          const filtered = this.fishFiltered$.value.filter((f: FishModel) => locations.indexOf(f.availability.location) > -1);
          this.fishFiltered$.next(filtered);
          this.fishGrid$.next(toFiveRows(filtered));
        });
        this.fishShadowFilter$.subscribe(shadows => {
          const filtered = this.fishFiltered$.value.filter((f: FishModel) => shadows.indexOf(f.shadow) > -1);
          this.fishFiltered$.next(filtered);
          this.fishGrid$.next(toFiveRows(filtered));
        });
        this.fishRarityFilter$.subscribe(rarities => {
          const filtered = this.fishFiltered$.value.filter((f: FishModel) => rarities.indexOf(f.availability.rarity) > -1);
          this.fishFiltered$.next(filtered);
          this.fishGrid$.next(toFiveRows(filtered));
        });
        break;
      case CritterTypeEnum.Sea:
        this.sea$.next(critters as SeaModel[]);
        this.seaFiltered$.next(critters as SeaModel[]);
        this.seaGrid$.next(toFiveRows(critters));
        this.seaShadowFilter$.subscribe(shadows => {
          const filtered = this.seaFiltered$.value.filter((s: SeaModel) => shadows.indexOf(s.shadow) > -1);
          this.seaFiltered$.next(filtered);
          this.seaGrid$.next(toFiveRows(filtered));
        });
        this.seaSpeedFilter$.subscribe(speeds => {
          const filtered = this.seaFiltered$.value.filter((s: SeaModel) => speeds.indexOf(s.speed) > -1);
          this.seaFiltered$.next(filtered);
          this.seaGrid$.next(toFiveRows(filtered));
        });
        break;
      case CritterTypeEnum.Fossils:
        this.fossils$.next(critters as FossilModel[]);
        this.fossilsGrid$.next(critters as FossilModel[]);
        break;
      case CritterTypeEnum.Art:
        this.art$.next(critters as ArtModel[]);
        this.artsGrid$.next(critters as ArtModel[]);

        break;
      case CritterTypeEnum.Songs:
        // @ts-ignore
        critters.sort(ascByNumber);
        this.songs$.next(critters as SongModel[]);
        this.songsGrid$.next(critters as SongModel[]);
        this.songGenresFilter$.subscribe(genres =>
          this.songsGrid$.next(this.songs$.value.filter((s: SongModel) => genres.indexOf(s.genre) > -1))
        );
        break;
      case CritterTypeEnum.BugModels:
        this.bugModels$.next(critters as BugModelModel[]);
        this.bugModelsGrid$.next(toFiveRows(critters));
        break;
      case CritterTypeEnum.FishModels:
        this.fishModels$.next(critters as FishModelModel[]);
        this.fishModelsGrid$.next(toFiveRows(critters));
        break;
      default:
        break;
    }
  }

  donate(critterModel: CritterModel, critterType: CritterType) {
    switch (critterType) {
      case CritterTypeEnum.Bugs:
        const indexBD = this.critters.bugsDonated?.indexOf(critterModel.id);
        if (indexBD > -1) {
          if (indexBD != null) {
            this.critters.bugsDonated?.splice(indexBD, 1);
          }
        } else {
          this.critters.bugsDonated?.push(critterModel.id);
        }
        this.bugsDonatedAmount.next(this.critters.bugsDonated.length);
        break;
      case CritterTypeEnum.Fish:
        const indexFD = this.critters.fishDonated?.indexOf(critterModel.id);
        if (indexFD > -1) {
          if (indexFD != null) {
            this.critters.fishDonated?.splice(indexFD, 1);
          }
        } else {
          this.critters.fishDonated?.push(critterModel.id);
        }
        this.fishDonatedAmount.next(this.critters.fishDonated.length);
        break;
      case CritterTypeEnum.Sea:
        const indexSD = this.critters.seaDonated?.indexOf(critterModel.id);
        if (indexSD > -1) {
          if (indexSD != null) {
            this.critters.seaDonated?.splice(indexSD, 1);
          }
        } else {
          this.critters.seaDonated?.push(critterModel.id);
        }
        this.seaDonatedAmount.next(this.critters.seaDonated.length);
        break;
      default:
        break;
    }
    this.localStorageService.setObject('critters', this.critters);
  }

  threeOfAKind(critterModel: CritterModel, critterType: CritterType) {
    switch (critterType) {
      case CritterTypeEnum.BugModels:
        const indexBMT = this.critters.bugModelsThreeOfAKind?.indexOf(critterModel.id);
        if (indexBMT > -1) {
          if (indexBMT != null) {
            this.critters.bugModelsThreeOfAKind?.splice(indexBMT, 1);
          }
        } else {
          this.critters.bugModelsThreeOfAKind?.push(critterModel.id);
        }
        this.bugModelsThreeOfAKindAmount.next(this.critters.bugModelsThreeOfAKind.length);
        break;
      case CritterTypeEnum.FishModels:
        const indexFMT = this.critters.fishModelsThreeOfAKind?.indexOf(critterModel.id);
        if (indexFMT > -1) {
          if (indexFMT != null) {
            this.critters.fishModelsThreeOfAKind?.splice(indexFMT, 1);
          }
        } else {
          this.critters.fishModelsThreeOfAKind?.push(critterModel.id);
        }
        this.fishModelsThreeOfAKindAmount.next(this.critters.fishModelsThreeOfAKind.length);
        break;
      default:
        break;
    }
    this.localStorageService.setObject('critters', this.critters);
  }
}
