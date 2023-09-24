import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HemisphereTypeEnum } from '../models/hemisphere-type.enum';

@Injectable({
  providedIn: 'root'
})
export class HemisphereSelectService {
  public isSouthernHemisphere$ = new BehaviorSubject<HemisphereTypeEnum>(HemisphereTypeEnum.MonthArraySouthern);
  constructor() { }
}
