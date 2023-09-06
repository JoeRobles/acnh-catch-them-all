import { Component } from '@angular/core';
import { CritterService } from '../../shared/services/critter.service';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModelModel } from '../../acnhapi/models/model.model';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.scss']
})
export class ModelDetailComponent {
  protected readonly ModeTypeEnum = ModeTypeEnum;
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  model: ModelModel = {} as ModelModel;
  constructor(private critterService: CritterService) {
    this.critterService.model.subscribe(m => this.model = m);
    this.critterService.language$.subscribe(l => this.language = l);
  }
}
