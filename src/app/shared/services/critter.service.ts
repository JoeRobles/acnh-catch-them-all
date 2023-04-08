import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { CritterTypeEnum } from '../models/critter-type.enum';
import { CatchedCrittersInterface } from '../models/catched-critters.interface';
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';
import { FishModel } from '../../acnhapi/fish/models/fish.model';
import { toFiveColumns, toFiveRows } from '../utils/helpers';
import { SeaModel } from '../../acnhapi/sea/models/sea.model';
import { BugModel } from '../../acnhapi/bug/models/bug.model';
import { BugResponseInterface } from '../../acnhapi/bug/models/bug-response.interface';
import { HttpClient } from '@angular/common/http';
import { FishResponseInterface } from '../../acnhapi/fish/models/fish-response.interface';
import { SeaResponseInterface } from '../../acnhapi/sea/models/sea-response.interface';
import { MonthArrayTypeEnum } from '../models/month-array-type.enum';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { SongResponseInterface } from '../../acnhapi/song/models/song-response.interface';
import { LanguageTypeEnum } from '../models/language-type.enum';
import { ModeTypeEnum } from '../models/mode-type.enum';
import { MusicModel } from '../../acnhapi/models/music.model';
import { MusicResponseInterface } from '../../acnhapi/models/music-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CritterService {
  mode$: BehaviorSubject<ModeTypeEnum> = new BehaviorSubject<ModeTypeEnum>(ModeTypeEnum.Discovery);
  critters: CatchedCrittersInterface = {bugs: [], fish: [], sea: [], songs: [] };
  bug: BehaviorSubject<BugModel> = new BehaviorSubject<BugModel>({} as BugModel);
  fish: BehaviorSubject<FishModel> = new BehaviorSubject<FishModel>({} as FishModel);
  sea: BehaviorSubject<SeaModel> = new BehaviorSubject<SeaModel>({} as SeaModel);
  song: BehaviorSubject<SongModel> = new BehaviorSubject<SongModel>({} as SongModel);
  critterType$: BehaviorSubject<CritterTypeEnum> = new BehaviorSubject<CritterTypeEnum>('' as CritterTypeEnum);
  display$: BehaviorSubject<CritterTypeEnum> = new BehaviorSubject<CritterTypeEnum>(CritterTypeEnum.Bugs);
  bugsAmount = 0;
  fishAmount = 0;
  seaAmount = 0;
  songsAmount = 0;
  bugs$: BehaviorSubject<BugModel[]> = new BehaviorSubject<BugModel[]>([]);
  bugsGrid$: BehaviorSubject<BugModel[][]> = new BehaviorSubject<BugModel[][]>([]);
  fish$: BehaviorSubject<FishModel[]> = new BehaviorSubject<FishModel[]>([]);
  fishGrid$: BehaviorSubject<FishModel[][]> = new BehaviorSubject<FishModel[][]>([]);
  sea$: BehaviorSubject<SeaModel[]> = new BehaviorSubject<SeaModel[]>([]);
  seaGrid$: BehaviorSubject<SeaModel[][]> = new BehaviorSubject<SeaModel[][]>([]);
  songs$: BehaviorSubject<SongModel[]> = new BehaviorSubject<SongModel[]>([]);
  music$: BehaviorSubject<MusicModel[]> = new BehaviorSubject<MusicModel[]>([]);
  songsGrid$: BehaviorSubject<SongModel[][]> = new BehaviorSubject<SongModel[][]>([]);
  hemisphere$: BehaviorSubject<MonthArrayTypeEnum> = new BehaviorSubject<MonthArrayTypeEnum>(MonthArrayTypeEnum.MonthArraySouthern);
  language$: BehaviorSubject<LanguageTypeEnum> = new BehaviorSubject<LanguageTypeEnum>(LanguageTypeEnum.NameUSen);
  shadow: string[] = [];
  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {
    this.getCritters();
  }

  getCritters(): void {
    const data = this.localStorageService.get('critters');
    if (data) {
      this.critters = JSON.parse(data);
      this.bugsAmount = this.critters?.bugs?.length;
      this.fishAmount = this.critters?.fish?.length;
      this.seaAmount = this.critters?.sea?.length;
      this.songsAmount = this.critters?.songs?.length;
    } else {
      this.localStorageService.setObject('critters', this.critters);
    }
  }

  updateCritter(critterId: number, critterType: CritterTypeEnum) {
    const index = this.critters[critterType]?.indexOf(critterId);
    if (index > -1) {
      this.critters[critterType]?.splice(index, 1);
    } else {
      this.critters[critterType]?.push(critterId);
    }
    switch (critterType) {
      case CritterTypeEnum.Bugs:
        this.bugsAmount = this.critters[critterType]?.length;
        break;
      case CritterTypeEnum.Fish:
        this.fishAmount = this.critters[critterType]?.length;
        break;
      case CritterTypeEnum.Sea:
        this.seaAmount = this.critters[critterType]?.length;
        break;
      case CritterTypeEnum.Songs:
        this.songsAmount = this.critters[critterType]?.length;
        break;
      default:
        break;
    }
    this.localStorageService.setObject('critters', this.critters);
  }

  updateCritterList(critterModel: BugModel | FishModel | SeaModel, critterType: CritterTypeEnum) {
    switch (critterType) {
      case CritterTypeEnum.Bugs:
        this.bugs$.pipe(
          map(bug => {
            bug.map(b => {
              if (critterModel.id === b.id) {
                b.catch = !b.catch;
                this.updateCritter(critterModel.id, CritterTypeEnum.Bugs);
              }
            })
          })).subscribe();
        break;
      case CritterTypeEnum.Fish:
        this.fish$.pipe(
          map(fish => {
            fish.map(f => {
              if (critterModel.id === f.id) {
                f.catch = !f.catch;
                this.updateCritter(critterModel.id, CritterTypeEnum.Fish);
              }
            })
          })).subscribe();
        break;
      case CritterTypeEnum.Sea:
        this.sea$.pipe(
          map(sea => {
            sea.map(s => {
              if (critterModel.id === s.id) {
                s.catch = !s.catch;
                this.updateCritter(critterModel.id, CritterTypeEnum.Sea);
              }
            })
          })).subscribe();
        break;
      case CritterTypeEnum.Songs:
        this.songs$.pipe(
          map(songs => {
            songs.map(s => {
              if (critterModel.id === s.id) {
                s.catch = !s.catch;
                this.updateCritter(critterModel.id, CritterTypeEnum.Songs);
              }
            })
          })).subscribe();
        break;
      default:
        break;
    }
  }

  getBugs(): Observable<BugModel[]> {
    const url = `https://acnhapi.com/v1a/bugs`;
    return this.http.get<BugResponseInterface[]>(url)
      .pipe(
        map(bugs => bugs.map(bug => new BugModel(bug)))
      );
  }

  getFish(): Observable<FishModel[]> {
    const url = `https://acnhapi.com/v1a/fish`;
    return this.http.get<FishResponseInterface[]>(url)
      .pipe(
        map(fish => fish.map(f => new FishModel(f)))
      );
  }

  getSea(): Observable<SeaModel[]> {
    const url = `https://acnhapi.com/v1a/sea`;
    return this.http.get<SeaResponseInterface[]>(url)
      .pipe(
        map(sea => sea.map(s => new SeaModel(s)))
      );
  }

  getSongs(): Observable<SongModel[]> {
    const url = `https://acnhapi.com/v1a/songs`;
    return this.http.get<SongResponseInterface[]>(url)
      .pipe(
        map(songs => songs.map(s => new SongModel(s)))
      );
  }

  getMusic(): Observable<MusicModel[]> {
    const url = `https://acnhapi.com/v1a/backgroundmusic`;
    return this.http.get<MusicResponseInterface[]>(url)
      .pipe(
        map(music => music.map(m => new MusicModel(m)))
      );
  }

  resolveCritters() {
    const observable =  forkJoin({
      bugs: this.getBugs(),
      fish: this.getFish(),
      sea: this.getSea(),
      songs: this.getSongs(),
      music: this.getMusic()
    });
    observable.subscribe({
      next: data => {
        this.setCritterList(data.bugs, CritterTypeEnum.Bugs);
        this.setCritterList(data.fish, CritterTypeEnum.Fish);
        this.setCritterList(data.sea, CritterTypeEnum.Sea);
        this.setCritterList(data.songs, CritterTypeEnum.Songs);
        this.setMusicList(data.music);
      },
      error: err => console.log('ACNH API not available: ', err)
    })
  }
  setCritterList(critters: BugModel[] | FishModel[] | SeaModel[] | SongModel[], critterType: CritterTypeEnum) {
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
      case CritterTypeEnum.Fish:
        this.fish$.next(critters as FishModel[]);
        this.fishGrid$.next(toFiveRows(critters));
        break;
      case CritterTypeEnum.Sea:
        this.sea$.next(critters as SeaModel[]);
        this.seaGrid$.next(toFiveRows(critters));
        break;
      case CritterTypeEnum.Songs:
        this.songs$.next(critters as SongModel[]);
        this.songsGrid$.next(toFiveColumns(critters));
        break;
      default:
        break;
    }
  }
  setMusicList(songs: MusicModel[]) {
    this.music$.next(songs);
  }
}
