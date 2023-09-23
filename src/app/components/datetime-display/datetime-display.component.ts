import { Component } from '@angular/core';

import { ClockService } from '../../shared/services/clock.service';

@Component({
  selector: 'app-datetime-display',
  templateUrl: './datetime-display.component.html',
  styleUrls: ['./datetime-display.component.scss']
})
export class DatetimeDisplayComponent {
  constructor(public clockService: ClockService) {
  }
}
