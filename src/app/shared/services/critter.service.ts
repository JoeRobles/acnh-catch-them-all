import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';
import { CritterTypeEnum } from '../models/critter-type.enum';
import { CatchedCrittersInterface } from '../models/catched-critters.interface';
import { FishModel } from '../../acnhapi/fish/models/fish.model';
import { ascByNumber, toFiveRows } from '../utils/helpers';
import { SeaModel } from '../../acnhapi/sea/models/sea.model';
import { BugModel } from '../../acnhapi/bug/models/bug.model';
import { BugResponseInterface } from '../../acnhapi/bug/models/bug-response.interface';
import { FishResponseInterface } from '../../acnhapi/fish/models/fish-response.interface';
import { SeaResponseInterface } from '../../acnhapi/sea/models/sea-response.interface';
import { MonthArrayTypeEnum } from '../models/month-array-type.enum';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { SongResponseInterface } from '../../acnhapi/song/models/song-response.interface';
import { LanguageTypeEnum } from '../models/language-type.enum';
import { ModeTypeEnum } from '../models/mode-type.enum';
import { MusicModel } from '../../acnhapi/music/models/music.model';
import { MusicResponseInterface } from '../../acnhapi/music/models/music-response.interface';
import { FossilModel } from '../../acnhapi/fossil/models/fossil.model';
import { ArtModel } from '../../acnhapi/art/models/art.model';
import { FossilResponseInterface } from '../../acnhapi/fossil/models/fossils-response.interface';
import { ArtResponseInterface } from '../../acnhapi/art/models/art-response.interface';
import { SongGenreTypeEnum } from '../models/song-genre-type.enum';
import { BugModelModel } from '../../acnhapi/bug-model/models/bug-model.model';
import { ModelResponseInterface } from '../../acnhapi/models/model-response.interface';
import { FishModelModel } from '../../acnhapi/fish-model/models/fish-model.model';
import { ModelModel } from '../../acnhapi/models/model.model';
import { CritterType } from '../models/critter.type';

@Injectable({
  providedIn: 'root'
})
export class CritterService {
  art = new BehaviorSubject<ArtModel>({} as ArtModel);
  art$ = new BehaviorSubject<ArtModel[]>([]);
  artAmount = 0;
  artsGrid$ = new BehaviorSubject<ArtModel[]>([]);
  bug = new BehaviorSubject<BugModel>({} as BugModel);
  bugModels$ = new BehaviorSubject<BugModelModel[]>([]);
  bugModelsAmount = 0;
  bugModelsGrid$ = new BehaviorSubject<BugModelModel[][]>([]);
  bugs$ = new BehaviorSubject<BugModel[]>([]);
  bugsAmount = 0;
  bugsGrid$ = new BehaviorSubject<BugModel[][]>([]);
  critters: CatchedCrittersInterface;
  critterType$ = new BehaviorSubject<CritterTypeEnum>('' as CritterTypeEnum);
  display$ = new BehaviorSubject<CritterTypeEnum>(CritterTypeEnum.Bugs);
  fish = new BehaviorSubject<FishModel>({} as FishModel);
  fish$ = new BehaviorSubject<FishModel[]>([]);
  fishAmount = 0;
  fishGrid$ = new BehaviorSubject<FishModel[][]>([]);
  fishModels$ = new BehaviorSubject<FishModelModel[]>([]);
  fishModelsAmount = 0;
  fishModelsGrid$ = new BehaviorSubject<FishModelModel[][]>([]);
  fossil = new BehaviorSubject<FossilModel>({} as FossilModel);
  fossils$ = new BehaviorSubject<FossilModel[]>([]);
  fossilsAmount = 0;
  fossilsGrid$ = new BehaviorSubject<FossilModel[]>([]);
  language$ = new BehaviorSubject<LanguageTypeEnum>(LanguageTypeEnum.NameUSen);
  mode$ = new BehaviorSubject<ModeTypeEnum>(ModeTypeEnum.Discovery);
  model = new BehaviorSubject<ModelModel>({} as ModelModel);
  sea = new BehaviorSubject<SeaModel>({} as SeaModel);
  sea$ = new BehaviorSubject<SeaModel[]>([]);
  seaAmount = 0;
  seaGrid$ = new BehaviorSubject<SeaModel[][]>([]);
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
  songsAmount = 0;
  songsGrid$ = new BehaviorSubject<SongModel[]>([]);

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {
    this.critters = {bugs: [], fish: [], sea: [], songs: [], fossils: [], art: [], bugModels: [], fishModels: []};
    this.getCritters();
  }

  getCritters(): void {
    const data = this.localStorageService.get('critters');
    if (data) {
      this.critters = JSON.parse(data);
      if (this.critters?.bugs) {
        this.bugsAmount = this.critters.bugs.length;
      } else {
        this.critters.bugs = [];
        this.bugsAmount = 0;
      }
      if (this.critters?.fish) {
        this.fishAmount = this.critters.fish.length;
      } else {
        this.critters.fish = [];
        this.fishAmount = 0;
      }
      if (this.critters?.sea) {
        this.seaAmount = this.critters.sea.length;
      } else {
        this.critters.sea = [];
        this.seaAmount = 0;
      }
      if (this.critters?.songs) {
        this.songsAmount = this.critters.songs.length;
      } else {
        this.critters.songs = [];
        this.songsAmount = 0;
      }
      if (this.critters?.fossils) {
        this.fossilsAmount = this.critters.fossils.length;
      } else {
        this.critters.fossils = [];
        this.fossilsAmount = 0;
      }
      if (this.critters?.art) {
        this.artAmount = this.critters.art.length;
      } else {
        this.critters.art = [];
        this.artAmount = 0;
      }
      if (this.critters?.bugModels) {
        this.bugModelsAmount = this.critters.bugModels.length;
      } else {
        this.critters.bugModels = [];
        this.bugModelsAmount = 0;
      }
      if (this.critters?.fishModels) {
        this.fishModelsAmount = this.critters.fishModels.length;
      } else {
        this.critters.fishModels = [];
        this.fishModelsAmount = 0;
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
        this.bugsAmount = this.critters[critterType].length;
        break;
      case CritterTypeEnum.Fish:
        this.fishAmount = this.critters[critterType].length;
        break;
      case CritterTypeEnum.Sea:
        this.seaAmount = this.critters[critterType].length;
        break;
      case CritterTypeEnum.Songs:
        this.songsAmount = this.critters[critterType].length;
        break;
      case CritterTypeEnum.Fossils:
        this.fossilsAmount = this.critters[critterType].length;
        break;
      case CritterTypeEnum.Art:
        this.artAmount = this.critters[critterType].length;
        break;
      case CritterTypeEnum.BugModels:
        this.bugModelsAmount = this.critters[critterType].length;
        break;
      case CritterTypeEnum.FishModels:
        this.fishModelsAmount = this.critters[critterType].length;
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
  getBugs(): Observable<BugModel[]> {
    const url = `/assets/api/v1a/bugs.json`;
    return this.http.get<BugResponseInterface[]>(url)
      .pipe(
        map(bugs => bugs.map(bug => new BugModel(bug)))
      );
  }

  getBugModels(): Observable<BugModelModel[]> {
    const url = `/assets/api/v1a/bug-models.json`;
    return this.http.get<ModelResponseInterface[]>(url)
      .pipe(
        map(bugModels => bugModels.map(bugModel => new BugModelModel(bugModel)))
      );
  }

  getFish(): Observable<FishModel[]> {
    const url = `/assets/api/v1a/fish.json`;
    return this.http.get<FishResponseInterface[]>(url)
      .pipe(
        map(fish => fish.map(f => new FishModel(f)))
      );
  }

  getFishModels(): Observable<FishModelModel[]> {
    const url = `/assets/api/v1a/fish-models.json`;
    return this.http.get<ModelResponseInterface[]>(url)
      .pipe(
        map(fishModels => fishModels.map(fishModel => new FishModelModel(fishModel)))
      );
  }

  getSea(): Observable<SeaModel[]> {
    const url = `/assets/api/v1a/sea.json`;
    return this.http.get<SeaResponseInterface[]>(url)
      .pipe(
        map(sea => sea.map(s => new SeaModel(s)))
      );
  }

  getSongs(): Observable<SongModel[]> {
    const url = `/assets/api/v1a/songs.json`;
    return this.http.get<SongResponseInterface[]>(url)
      .pipe(
        map(songs => songs.map(s => new SongModel(s)))
      );
  }

  getFossils(): Observable<FossilModel[]> {
    const url = `/assets/api/v1a/fossils.json`;
    return this.http.get<FossilResponseInterface[]>(url)
      .pipe(
        map(fossil => fossil.map(f => new FossilModel(f)))
      );
  }

  getArt(): Observable<ArtModel[]> {
    const url = `/assets/api/v1a/art.json`;
    return this.http.get<ArtResponseInterface[]>(url)
      .pipe(
        map(art => art.map(a => new ArtModel(a)))
      );
  }

  resolveCritters() {
    const observable = forkJoin({
      bugs: this.getBugs(),
      bugModels: this.getBugModels(),
      fish: this.getFish(),
      fishModels: this.getFishModels(),
      sea: this.getSea(),
      songs: this.getSongs(),
      fossils: this.getFossils(),
      art: this.getArt(),
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
        this.bugsGrid$.next(toFiveRows(critters));
        break;
      case CritterTypeEnum.BugModels:
        this.bugModels$.next(critters as BugModelModel[]);
        this.bugModelsGrid$.next(toFiveRows(critters));
        break;
      case CritterTypeEnum.Fish:
        this.fish$.next(critters as FishModel[]);
        this.fishGrid$.next(toFiveRows(critters));
        break;
      case CritterTypeEnum.FishModels:
        this.fishModels$.next(critters as FishModelModel[]);
        this.fishModelsGrid$.next(toFiveRows(critters));
        break;
      case CritterTypeEnum.Sea:
        this.sea$.next(critters as SeaModel[]);
        this.seaGrid$.next(toFiveRows(critters));
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
      case CritterTypeEnum.Fossils:
        this.fossils$.next(critters as FossilModel[]);
        this.fossilsGrid$.next(critters as FossilModel[]);
        break;
      case CritterTypeEnum.Art:
        this.art$.next(critters as ArtModel[]);
        this.artsGrid$.next(critters as ArtModel[]);
        break;
      default:
        break;
    }
  }
}
