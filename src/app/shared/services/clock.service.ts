import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { ClockNtpResponseInterface } from '../models/clock-ntp-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  datetime$: Subject<Date> = new Subject<Date>;
  month$: Subject<number> = new Subject<number>;
  day$: Subject<number> = new Subject<number>;
  hours$: Subject<number> = new Subject<number>;
  minutes$: Subject<number> = new Subject<number>;

  constructor(private http: HttpClient) {
    setInterval(() => {
      const date = new Date();
      this.datetime$.next(date);
      if (date.getSeconds() === 0) {
        this.month$.next(date.getMonth() + 1);
        this.day$.next(date.getDay());
        this.hours$.next(date.getHours());
        this.minutes$.next(date.getMinutes());
      }
    }, 1000);
  }

  getNtpDateTime(): Observable<ClockNtpResponseInterface> {
    return this.http.get<ClockNtpResponseInterface>('http://worldtimeapi.org/api/ip')
      .pipe(
        tap(res => {
          this.datetime$.next(new Date(res.datetime));
        })
      );
  }
}
