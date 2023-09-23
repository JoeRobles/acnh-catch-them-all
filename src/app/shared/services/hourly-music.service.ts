import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';
import { MusicModel } from '../../acnhapi/music/models/music.model';
import { MusicResponseInterface } from '../../acnhapi/music/models/music-response.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HourlyMusicService {
  autoplay$ = new BehaviorSubject<boolean>(false);
  music$ = new BehaviorSubject<MusicModel[]>([]);
  musicUri$: BehaviorSubject<string> = new BehaviorSubject<string>('/assets/music/welcome-horizons.mp3');
  mood$ = new BehaviorSubject<number>(2);

  constructor(private http: HttpClient) { }

  resolveMusic() {
    const observable = forkJoin({
      music: this.getMusic()
    });
    observable.subscribe({
      next: data => this.setMusicList(data.music),
      error: error => console.error('ACNH API not available: ', error)
    });
  }

  getMusic(): Observable<MusicModel[]> {
    const url = `/assets/api/v1a/hourly.json`;
    return this.http.get<MusicResponseInterface[]>(url)
      .pipe(
        map(music => music.map(m => new MusicModel(m)))
      );
  }
  setMusicList(songs: MusicModel[]) {
    this.music$.next(songs);
  }
}
