import { Component, Input, OnInit } from '@angular/core';
import { ModelModel } from '../../acnhapi/models/model.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { CritterService } from '../../shared/services/critter.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  @Input() model: ModelModel = {} as ModelModel;
  modelName = '';
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;
  constructor(private critterService: CritterService) {
    this.critterService.mode$.subscribe(m => this.mode = m);
  }

  ngOnInit() {
    this.modelName = this.model?.name[this.language];
  }
}
