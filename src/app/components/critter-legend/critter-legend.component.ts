import { Component } from '@angular/core';
import { CritterService } from '../../shared/services/critter.service';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';

@Component({
  selector: 'app-critter-legend',
  templateUrl: './critter-legend.component.html',
  styleUrls: ['../../app.component.scss', '../critter-discovery/critter-discovery.component.scss']
})
export class CritterLegendComponent {
  display: CritterTypeEnum = CritterTypeEnum.Bugs;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  constructor(private critterService: CritterService) {

  }
  ngOnInit() {
    this.critterService.display$.subscribe(d => this.display = d);
    this.critterService.mode$.subscribe(m => this.mode = m);
  }

  protected readonly CritterTypeEnum = CritterTypeEnum;
  protected readonly ModeTypeEnum = ModeTypeEnum;
}
