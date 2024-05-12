import { Component } from '@angular/core';

import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-datetime-display',
  templateUrl: './datetime-display.component.html'
})
export class DatetimeDisplayComponent {
  constructor(public clockService: ClockService) {
  }
}
