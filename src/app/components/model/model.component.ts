import { Component, Input } from '@angular/core';
import { ModelModel } from '../../acnhapi/models/model.model';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  @Input() model: ModelModel = {} as ModelModel;

  title = '';
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.preferencesService.language$.subscribe(l => this.title = this.model.name[l]);
  }
}
