import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModeTypeEnum } from '../models/mode-type.enum';
import { CritterTypeEnum } from '../models/critter-type.enum';
import { CritterType } from '../models/critter.type';

@Injectable({
  providedIn: 'root'
})
export class ToggleControlsService {
  display$ = new BehaviorSubject<CritterType>(CritterTypeEnum.Bugs);
  mode$ = new BehaviorSubject<ModeTypeEnum>(ModeTypeEnum.Discovery);

  constructor() { }
}
