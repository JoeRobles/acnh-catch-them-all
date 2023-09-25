import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  datetime$: Subject<Date> = new Subject<Date>;
  day$: Subject<number> = new Subject<number>;
  hours$: Subject<number> = new Subject<number>;
  minutes$: Subject<number> = new Subject<number>;
  month$: Subject<number> = new Subject<number>;

  constructor() {
    setInterval(() => {
      const date = new Date();
      this.datetime$.next(date);
      if (date.getSeconds() === 0) {
        this.day$.next(date.getDay());
        this.hours$.next(date.getHours());
        this.minutes$.next(date.getMinutes());
        this.month$.next(date.getMonth() + 1);
      }
    }, 1000);
  }
}
