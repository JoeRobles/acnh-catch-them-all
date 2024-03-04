import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BugModel } from '../../acnhapi/bug/models/bug.model';
import { BugResponseInterface } from '../../acnhapi/bug/models/bug-response.interface';
import { BugModelModel } from '../../acnhapi/bug-model/models/bug-model.model';
import { ModelResponseInterface } from '../../acnhapi/models/model-response.interface';
import { FishModel } from '../../acnhapi/fish/models/fish.model';
import { FishResponseInterface } from '../../acnhapi/fish/models/fish-response.interface';
import { FishModelModel } from '../../acnhapi/fish-model/models/fish-model.model';
import { SeaModel } from '../../acnhapi/sea/models/sea.model';
import { SeaResponseInterface } from '../../acnhapi/sea/models/sea-response.interface';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { SongResponseInterface } from '../../acnhapi/song/models/song-response.interface';
import { FossilModel } from '../../acnhapi/fossil/models/fossil.model';
import { FossilResponseInterface } from '../../acnhapi/fossil/models/fossils-response.interface';
import { ArtModel } from '../../acnhapi/art/models/art.model';
import { ArtResponseInterface } from '../../acnhapi/art/models/art-response.interface';
import { HttpClient } from '@angular/common/http';
import { MusicModel } from '../../acnhapi/music/models/music.model';
import { MusicResponseInterface } from '../../acnhapi/music/models/music-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CritterApiService {

  apiUrl = '/assets/api/v1a/';
  constructor(private http: HttpClient) { }

  getBugs(): Observable<BugModel[]> {
    const url = `${this.apiUrl}bugs.json`;
    return this.http.get<BugResponseInterface[]>(url)
      .pipe(
        map(bugs => bugs.map(bug => new BugModel(bug)))
      );
  }

  getBugModels(): Observable<BugModelModel[]> {
    const url = `${this.apiUrl}bug-models.json`;
    return this.http.get<ModelResponseInterface[]>(url)
      .pipe(
        map(bugModels => bugModels.map(bugModel => new BugModelModel(bugModel)))
      );
  }

  getFish(): Observable<FishModel[]> {
    const url = `${this.apiUrl}fish.json`;
    return this.http.get<FishResponseInterface[]>(url)
      .pipe(
        map(fish => fish.map(f => new FishModel(f)))
      );
  }

  getFishModels(): Observable<FishModelModel[]> {
    const url = `${this.apiUrl}fish-models.json`;
    return this.http.get<ModelResponseInterface[]>(url)
      .pipe(
        map(fishModels => fishModels.map(fishModel => new FishModelModel(fishModel)))
      );
  }

  getSea(): Observable<SeaModel[]> {
    const url = `${this.apiUrl}sea.json`;
    return this.http.get<SeaResponseInterface[]>(url)
      .pipe(
        map(sea => sea.map(s => new SeaModel(s)))
      );
  }

  getSongs(): Observable<SongModel[]> {
    const url = `${this.apiUrl}songs.json`;
    return this.http.get<SongResponseInterface[]>(url)
      .pipe(
        map(songs => songs.map(s => new SongModel(s)))
      );
  }

  getFossils(): Observable<FossilModel[]> {
    const url = `${this.apiUrl}fossils.json`;
    return this.http.get<FossilResponseInterface[]>(url)
      .pipe(
        map(fossil => fossil.map(f => new FossilModel(f)))
      );
  }

  getArt(): Observable<ArtModel[]> {
    const url = `${this.apiUrl}art.json`;
    return this.http.get<ArtResponseInterface[]>(url)
      .pipe(
        map(art => art.map(a => new ArtModel(a)))
      );
  }

  getMusic(): Observable<MusicModel[]> {
    const url = `${this.apiUrl}hourly.json`;
    return this.http.get<MusicResponseInterface[]>(url)
      .pipe(
        map(music => music.map(m => new MusicModel(m)))
      );
  }
}
