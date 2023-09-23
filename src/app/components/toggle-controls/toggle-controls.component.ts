import { Component, OnInit } from '@angular/core';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { SongGenreTypeEnum } from '../../shared/models/song-genre-type.enum';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';
import { CritterService } from '../../shared/services/critter.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SongModel } from '../../acnhapi/song/models/song.model';

@Component({
  selector: 'app-toggle-controls',
  templateUrl: './toggle-controls.component.html',
  styleUrls: ['./toggle-controls.component.scss']
})
export class ToggleControlsComponent implements OnInit {

  critterTypeEnum = CritterTypeEnum;
  modeTypeEnum = ModeTypeEnum;
  searchForm: FormGroup = this.fb.group({
    key: [''],
  });
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
  songGenreTypeEnum = SongGenreTypeEnum;
  songList: SongModel[] = [];

  constructor(
    public critterService: CritterService,
    private fb: FormBuilder,
    public toggleControlsService: ToggleControlsService
  ) { }

  ngOnInit(): void {
    this.critterService.songs$.subscribe(song => this.songList = song);
  }

  toggleDiscoveryMode() {
    this.toggleControlsService.mode$.next(ModeTypeEnum.Discovery);
  }

  toggleCollectionMode() {
    this.toggleControlsService.mode$.next(ModeTypeEnum.Collection);
  }

  toggleAllMode() {
    this.toggleControlsService.mode$.next(ModeTypeEnum.All);
  }

  toggleAvailableMode() {
    this.toggleControlsService.mode$.next(ModeTypeEnum.Available);
  }

  toggleDisplayBugs() {
    this.toggleControlsService.display$.next(CritterTypeEnum.Bugs);
  }

  toggleDisplayFish() {
    this.toggleControlsService.display$.next(CritterTypeEnum.Fish);
  }

  toggleDisplaySea() {
    this.toggleControlsService.display$.next(CritterTypeEnum.Sea);
  }

  toggleDisplayFossil() {
    this.toggleControlsService.display$.next(CritterTypeEnum.Fossils);
  }
  toggleDisplayArt() {
    this.toggleControlsService.display$.next(CritterTypeEnum.Art);
  }
  toggleDisplaySongs() {
    this.toggleControlsService.display$.next(CritterTypeEnum.Songs);
  }

  toggleDisplayBugModels() {
    this.toggleControlsService.display$.next(CritterTypeEnum.BugModels);
  }

  toggleDisplayFishModels() {
    this.toggleControlsService.display$.next(CritterTypeEnum.FishModels);
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
