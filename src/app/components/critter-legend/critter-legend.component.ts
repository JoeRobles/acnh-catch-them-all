import { Component } from '@angular/core';
import { CritterService } from '../../shared/services/critter.service';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';

@Component({
  selector: 'app-critter-legend',
  templateUrl: './critter-legend.component.html',
  styleUrls: ['../../app.component.scss', '../critter-discovery/critter-discovery.component.scss']
})
export class CritterLegendComponent {
  display: CritterTypeEnum = CritterTypeEnum.Bugs;
  critterTypeEnum = CritterTypeEnum;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public critterService: CritterService,
    public toggleControlsService: ToggleControlsService) {

  }
  ngOnInit() {
    this.toggleControlsService.display$.subscribe(d => this.display = d);
  }
}
