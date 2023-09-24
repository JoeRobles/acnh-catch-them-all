import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { SongGenreTypeEnum } from '../../shared/models/song-genre-type.enum';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';
import { CritterService } from '../../shared/services/critter.service';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { PreferencesService } from '../../shared/services/preferences.service';
import { CritterType } from '../../shared/models/critter.type';
import { ModeType } from '../../shared/models/mode.type';

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
    public toggleControlsService: ToggleControlsService,
    public preferencesService: PreferencesService
  ) { }

  ngOnInit(): void {
    this.critterService.songs$.subscribe(song => this.songList = song);
  }

  toggleDisplay(display: CritterType) {
    this.preferencesService.display$.next(display);
    this.toggleControlsService.setDisplay(display);
  }
  toggleMode(mode: ModeType) {
    this.preferencesService.mode$.next(mode);
    this.toggleControlsService.setMode(mode);
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
