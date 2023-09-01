import { Component, OnInit } from '@angular/core';

import { SongModel } from '../../acnhapi/song/models/song.model';
import { CritterService } from '../../shared/services/critter.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {
  formModal: any;
  song: SongModel = {} as SongModel;
  songMusicUri = '';
  constructor(private critterService: CritterService) {
  }
  ngOnInit() {
    this.critterService.song.subscribe(s => this.song = s);
  }
}
