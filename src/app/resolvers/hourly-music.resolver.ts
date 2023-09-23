import { Injectable } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { HourlyMusicService } from '../shared/services/hourly-music.service';

@Injectable({
  providedIn: 'root'
})
export class HourlyMusicResolver {
  constructor(
    private hourlyMusicService: HourlyMusicService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.hourlyMusicService.resolveMusic();
  }
}
