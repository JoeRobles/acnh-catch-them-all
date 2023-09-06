import { Component, OnInit } from '@angular/core';

import { BugModel } from './acnhapi/bug/models/bug.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FishModel } from './acnhapi/fish/models/fish.model';
import { SeaModel } from './acnhapi/sea/models/sea.model';
import { ClockService } from './shared/services/clock.service';
import { CritterService } from './shared/services/critter.service';
import { CritterTypeEnum } from './shared/models/critter-type.enum';
import { MonthArrayTypeEnum } from './shared/models/month-array-type.enum';
import { SongModel } from './acnhapi/song/models/song.model';
import { LanguageTypeEnum } from './shared/models/language-type.enum';
import { Languages } from './shared/models/languages.const';
import { ModeTypeEnum } from './shared/models/mode-type.enum';
import { MusicModel } from './acnhapi/music/models/music.model';
import { SongGenreTypeEnum } from './shared/models/song-genre-type.enum';
import { FossilModel } from './acnhapi/fossil/models/fossil.model';
import { ArtModel } from './acnhapi/art/models/art.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelModel } from './acnhapi/models/model.model';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hours: number;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;
  formModal: any;
  critterTypeEnum = CritterTypeEnum;
  critterType: CritterTypeEnum = CritterTypeEnum.Bugs;
  display: CritterTypeEnum = CritterTypeEnum.Bugs;
  isSouthernHemisphere = true;
  artList: ArtModel[] = [];
  bugsList: BugModel[] = [];
  bugModelsList: BugModel[] = [];
  fishList: FishModel[] = [];
  fishModelsList: FishModel[] = [];
  seaList: SeaModel[] = [];
  song: SongModel = {} as SongModel;
  musicUri$: BehaviorSubject<string> = new BehaviorSubject<string>('/assets/music/welcome-horizons.mp3');
  songList: SongModel[] = [];
  fossilList: FossilModel[] = [];
  musicList: MusicModel[] = [];
  musicBackground$: BehaviorSubject<MusicModel[]> = new BehaviorSubject<MusicModel[]>([]);
  musicBackground: MusicModel[] = [];
  datetime: Date = new Date();
  subscriptions: Subscription[] = [];
  songGenreTypeEnum = SongGenreTypeEnum;
  songGenresFilter = [
    SongGenreTypeEnum.Classic,
    SongGenreTypeEnum.Animal,
    SongGenreTypeEnum.Dance,
    SongGenreTypeEnum.Japanese,
    SongGenreTypeEnum.Jazz,
    SongGenreTypeEnum.Rock,
    SongGenreTypeEnum.Soul,
    SongGenreTypeEnum.Soundtrack,
    SongGenreTypeEnum.World
  ];
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  languages = Languages;

  searchForm: FormGroup = this.fb.group({
    key: [''],
  });

  constructor(
    public clockService: ClockService,
    public critterService: CritterService,
    private fb: FormBuilder,
  ) {
    const datetime = new Date();
    this.hours = datetime.getHours();
    this.clockService.datetime$.subscribe(d => this.datetime = d);
  }

  ngOnInit(): void {
    this.clockService.hours$.subscribe(h => {
      this.hours = h;
      const music = this.musicList.filter(m => m.hour === h);
      this.musicUri$.next(music[2].musicUri);
      this.musicBackground$.next(music);
      this.musicBackground = music;
    });
    this.critterService.bugs$.subscribe(bugs => this.bugsList = bugs);
    this.critterService.fish$.subscribe(fish => this.fishList = fish);
    this.critterService.sea$.subscribe(sea => this.seaList = sea);
    this.critterService.songs$.subscribe(song => this.songList = song);
    this.critterService.fossils$.subscribe(fossil => this.fossilList = fossil);
    this.critterService.art$.subscribe(art => this.artList = art);
    this.critterService.music$.subscribe(music => this.musicList = music);
    this.critterService.language$.subscribe(l => this.language = l);
    this.critterService.mode$.subscribe(m => this.mode = m);
    this.critterService.critterType$.subscribe(c => this.critterType = c);
    this.critterService.display$.subscribe(d => this.display = d);
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    let myModalEl = document.getElementById('myModal');
    // @ts-ignore
    myModalEl.addEventListener('shown.bs.modal', () => {
      // @ts-ignore
      document.getElementById('songPlayer')?.play();
    });
    // @ts-ignore
    myModalEl.addEventListener('hide.bs.modal', () => {
      // @ts-ignore
      document.getElementById('songPlayer')?.pause();
      this.critterService.bug.next({} as BugModel);
      this.critterService.fish.next({} as FishModel);
      this.critterService.sea.next({} as SeaModel);
      this.critterService.song.next({} as SongModel);
    });
    let myMusicPlayerEl = document.getElementById('musicPlayer');
    console.log('myMusicPlayerEl: ', myMusicPlayerEl);
    // @ts-ignore
    myMusicPlayerEl.addEventListener('ended', () => {
      console.log('audio Ended');
      // @ts-ignore
      myMusicPlayerEl.pause();
      // @ts-ignore
      myMusicPlayerEl.src = this.musicBackground[0];
      // @ts-ignore
      myMusicPlayerEl.load();
      // @ts-ignore
      myMusicPlayerEl.play();
    });
  }

  selectCritter(critterModel: any, critterType: CritterTypeEnum) {
    this.critterService.critterType$.next(critterType);
    switch (this.mode) {
      case ModeTypeEnum.Discovery:
      case ModeTypeEnum.Available:
      case ModeTypeEnum.All:
        switch (critterType) {
          case CritterTypeEnum.Bugs:
            this.critterService.bug.next(critterModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Fish:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next(critterModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Sea:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next(critterModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Fossils:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next(critterModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Art:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next(critterModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Songs:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next(critterModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.BugModels:
          case CritterTypeEnum.FishModels:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next(critterModel);
            break;
          default:
            break;
        }
        this.formModal.show();
        break;
      case ModeTypeEnum.Collection:
        this.critterService.updateCritterList(critterModel, critterType);
        break;
      default:
        break;
    }
  }

  toggleHemisphere() {
    this.isSouthernHemisphere = !this.isSouthernHemisphere;
    this.critterService.hemisphere$.next(
      this.isSouthernHemisphere ?
        MonthArrayTypeEnum.MonthArraySouthern :
        MonthArrayTypeEnum.MonthArrayNorthern
    );
  }

  toggleDiscoveryMode() {
    this.critterService.mode$.next(ModeTypeEnum.Discovery);
  }

  toggleCollectionMode() {
    this.critterService.mode$.next(ModeTypeEnum.Collection);
  }

  toggleAllMode() {
    this.critterService.mode$.next(ModeTypeEnum.All);
  }

  toggleAvailableMode() {
    this.critterService.mode$.next(ModeTypeEnum.Available);
  }

  toggleDisplayBugs() {
    this.critterService.display$.next(CritterTypeEnum.Bugs);
  }

  toggleDisplayFish() {
    this.critterService.display$.next(CritterTypeEnum.Fish);
  }

  toggleDisplaySea() {
    this.critterService.display$.next(CritterTypeEnum.Sea);
  }

  toggleDisplayFossil() {
    this.critterService.display$.next(CritterTypeEnum.Fossils);
  }
  toggleDisplayArt() {
    this.critterService.display$.next(CritterTypeEnum.Art);
  }
  toggleDisplaySongs() {
    this.critterService.display$.next(CritterTypeEnum.Songs);
  }

  toggleDisplayBugModels() {
    this.critterService.display$.next(CritterTypeEnum.BugModels);
  }

  toggleDisplayFishModels() {
    this.critterService.display$.next(CritterTypeEnum.FishModels);
  }

  // @ts-ignore
  selectLanguage(event) {
    this.critterService.language$.next(event.target.value);
  }

  toggleGenreAll() {
    if (this.songGenresFilter.length === 0) {
      this.songGenresFilter = [
        SongGenreTypeEnum.Classic,
        SongGenreTypeEnum.Animal,
        SongGenreTypeEnum.Dance,
        SongGenreTypeEnum.Japanese,
        SongGenreTypeEnum.Jazz,
        SongGenreTypeEnum.Rock,
        SongGenreTypeEnum.Soul,
        SongGenreTypeEnum.Soundtrack,
        SongGenreTypeEnum.World
      ];
    } else {
      this.songGenresFilter = [];
    }
    const filtered = this.songList.filter(s => this.songGenresFilter.includes(s.genre));
    this.critterService.songsGrid$.next(filtered);
  }
  toggleGenre(genre: SongGenreTypeEnum) {
    const genreIndex = this.songGenresFilter.indexOf(genre);
    if (genreIndex > -1) {
      this.songGenresFilter.splice(genreIndex, 1);
    } else {
      this.songGenresFilter.push(genre);
    }
    const filtered = this.songList.filter(s => this.songGenresFilter.includes(s.genre));
    this.critterService.songsGrid$.next(filtered);
  }
}
