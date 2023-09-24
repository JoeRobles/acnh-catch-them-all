import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { ClockService } from '../../shared/services/clock.service';

@Component({
  selector: 'app-critter-activity',
  templateUrl: './critter-activity.component.html',
  styleUrls: ['./critter-activity.component.scss']
})
export class CritterActivityComponent implements OnInit, OnDestroy {
  @Input() timeArray: number[] = [];
  hours: number;

  constructor(private clockService: ClockService) {
    const datetime = new Date();
    this.hours = datetime.getHours();
  }

  ngOnInit() {
    this.clockService.hours$.subscribe(h => this.hours = h);
  }

  ngOnDestroy() {
    this.timeArray = [];
  }
}
