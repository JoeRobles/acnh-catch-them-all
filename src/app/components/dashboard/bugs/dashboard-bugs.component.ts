import { Component } from '@angular/core';

import { CritterService } from '../../../acnhapi/services/critter.service';

@Component({
  selector: 'app-dashboard-bugs',
  templateUrl: './dashboard-bugs.component.html',
  styleUrls: ['./dashboard-bugs.component.scss']
})
export class DashboardBugsComponent {
  donated = 0;
  donatedPercentage = 0;

  constructor(public critterService: CritterService) {
  }

  protected readonly Number = Number;
}
