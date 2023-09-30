import { Component, OnInit } from '@angular/core';
import { SongGenreTypeEnum } from '../../shared/models/song-genre-type.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CritterService } from '../../shared/services/critter.service';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { PreferencesService } from '../../shared/services/preferences.service';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';

@Component({
  selector: 'app-toggle-genre',
  templateUrl: './toggle-genre.component.html',
  styleUrls: ['./toggle-genre.component.scss']
})
export class ToggleGenreComponent implements OnInit {

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
