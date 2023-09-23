import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MonthArrayTypeEnum } from '../models/month-array-type.enum';

@Injectable({
  providedIn: 'root'
})
export class HemisphereSelectService {
  public isSouthernHemisphere$ = new BehaviorSubject<MonthArrayTypeEnum>(MonthArrayTypeEnum.MonthArraySouthern);
  constructor() { }
}
