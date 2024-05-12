import { Injectable } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { CritterService } from '../acnhapi/services/critter.service';

@Injectable({
  providedIn: 'root'
})
export class CritterResolver {
  constructor(
    private critterService: CritterService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.critterService.resolveCritters();
  }
}
