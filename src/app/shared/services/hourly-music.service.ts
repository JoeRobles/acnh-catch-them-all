import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';
import { MusicModel } from '../../acnhapi/music/models/music.model';
import { MusicResponseInterface } from '../../acnhapi/music/models/music-response.interface';
import { HttpClient } from '@angular/common/http';
import { CritterApiService } from '../../acnhapi/services/critter-api.service';

@Injectable({
  providedIn: 'root'
})
export class HourlyMusicService {
  music$ = new BehaviorSubject<MusicModel[]>([]);
  musicUri$: BehaviorSubject<string> = new BehaviorSubject<string>('/assets/music/welcome-horizons.mp3');

  constructor(private critterApiService: CritterApiService) { }

  resolveMusic() {
    const observable = forkJoin({
      music: this.critterApiService.getMusic()
    });
    observable.subscribe({
      next: data => this.setMusicList(data.music),
      error: error => console.error('ACNH API not available: ', error)
    });
  }

  setMusicList(songs: MusicModel[]) {
    this.music$.next(songs);
  }
}
