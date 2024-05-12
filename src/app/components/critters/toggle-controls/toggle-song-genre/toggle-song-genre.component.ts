import { Component, OnInit } from '@angular/core';

import { SongGenreTypeEnum } from '../../../../acnhapi/models/song-genre-type.enum';
import { CritterService } from '../../../../acnhapi/services/critter.service';
import { SongModel } from '../../../../acnhapi/song/models/song.model';
import { PreferencesService } from '../../../../shared/services/preferences.service';
import { CritterTypeEnum } from '../../../../acnhapi/models/critter-type.enum';

@Component({
  selector: 'app-toggle-song-genre',
  templateUrl: './toggle-song-genre.component.html'
})
export class ToggleSongGenreComponent implements OnInit {

  critterTypeEnum = CritterTypeEnum;
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
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.songs$.subscribe(song => this.songList = song);
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
