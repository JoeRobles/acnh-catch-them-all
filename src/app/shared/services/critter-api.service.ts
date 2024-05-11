import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ArtModel } from '../../acnhapi/art/models/art.model';
import { ArtResponseInterface } from '../../acnhapi/art/models/art-response.interface';
import { BugModel } from '../../acnhapi/bug/models/bug.model';
import { BugModelModel } from '../../acnhapi/bug-model/models/bug-model.model';
import { BugResponseInterface } from '../../acnhapi/bug/models/bug-response.interface';
import { FishModel } from '../../acnhapi/fish/models/fish.model';
import { FishModelModel } from '../../acnhapi/fish-model/models/fish-model.model';
import { FishResponseInterface } from '../../acnhapi/fish/models/fish-response.interface';
import { FossilModel } from '../../acnhapi/fossil/models/fossil.model';
import { FossilResponseInterface } from '../../acnhapi/fossil/models/fossils-response.interface';
import { ModelResponseInterface } from '../../acnhapi/models/model-response.interface';
import { MusicModel } from '../../acnhapi/music/models/music.model';
import { MusicResponseInterface } from '../../acnhapi/music/models/music-response.interface';
import { SeaModel } from '../../acnhapi/sea/models/sea.model';
import { SeaResponseInterface } from '../../acnhapi/sea/models/sea-response.interface';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { SongResponseInterface } from '../../acnhapi/song/models/song-response.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CritterApiService {

  options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
  apiUrl = environment.apiUrl + '/nh/v1';

  constructor(private http: HttpClient) { }

  getBugs(): Observable<BugModel[]> {
    return this.http.get<BugResponseInterface[]>(`${this.apiUrl}/bugs`, this.options)
      .pipe(
        map(bugs => bugs.map(bug => new BugModel(bug)))
      );
  }

  getBugModels(): Observable<BugModelModel[]> {
    return this.http.get<ModelResponseInterface[]>(`${this.apiUrl}/bug-models`, this.options)
      .pipe(
        map(bugModels => bugModels.map(bugModel => new BugModelModel(bugModel)))
      );
  }

  getFish(): Observable<FishModel[]> {
    return this.http.get<FishResponseInterface[]>(`${this.apiUrl}/fish`, this.options)
      .pipe(
        map(fish => fish.map(f => new FishModel(f)))
      );
  }

  getFishModels(): Observable<FishModelModel[]> {
    return this.http.get<ModelResponseInterface[]>(`${this.apiUrl}/fish-models`, this.options)
      .pipe(
        map(fishModels => fishModels.map(fishModel => new FishModelModel(fishModel)))
      );
  }

  getSea(): Observable<SeaModel[]> {
    return this.http.get<SeaResponseInterface[]>(`${this.apiUrl}/sea`, this.options)
      .pipe(
        map(sea => sea.map(s => new SeaModel(s)))
      );
  }

  getSongs(): Observable<SongModel[]> {
    return this.http.get<SongResponseInterface[]>(`${this.apiUrl}/songs`, this.options)
      .pipe(
        map(songs => songs.map(s => new SongModel(s)))
      );
  }

  getFossils(): Observable<FossilModel[]> {
    return this.http.get<FossilResponseInterface[]>(`${this.apiUrl}/fossils`, this.options)
      .pipe(
        map(fossil => fossil.map(f => new FossilModel(f)))
      );
  }

  getArt(): Observable<ArtModel[]> {
    return this.http.get<ArtResponseInterface[]>(`${this.apiUrl}/art`, this.options)
      .pipe(
        map(art => art.map(a => new ArtModel(a)))
      );
  }

  getMusic(): Observable<MusicModel[]> {
    return this.http.get<MusicResponseInterface[]>(`${this.apiUrl}/hourly`, this.options)
      .pipe(
        map(music => music.map(m => new MusicModel(m)))
      );
  }
}
