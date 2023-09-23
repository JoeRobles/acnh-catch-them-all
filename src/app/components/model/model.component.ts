import { Component, Input } from '@angular/core';
import { ModelModel } from '../../acnhapi/models/model.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { CritterService } from '../../shared/services/critter.service';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  @Input() model: ModelModel = {} as ModelModel;

  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;

  constructor(
    private critterService: CritterService,
    private toggleControlsService: ToggleControlsService
  ) {
    this.toggleControlsService.mode$.subscribe(m => this.mode = m);
    this.critterService.language$.subscribe(l => this.language = l);
  }
}
