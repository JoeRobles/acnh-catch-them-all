import { Component, Input, OnInit } from '@angular/core';

import { FossilModel } from '../../acnhapi/fossil/models/fossil.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { CritterService } from '../../shared/services/critter.service';

@Component({
  selector: 'app-fossil',
  templateUrl: './fossil.component.html',
  styleUrls: ['./fossil.component.scss']
})
export class FossilComponent implements OnInit {
  @Input() fossil: FossilModel = {} as FossilModel;
  fossilName = '';
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;
  constructor(private critterService: CritterService) {
    this.critterService.mode$.subscribe(m => this.mode = m);
  }

  ngOnInit() {
    this.fossilName = this.fossil?.name[this.language];
  }
}
