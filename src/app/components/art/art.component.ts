import { Component, Input } from '@angular/core';

import { ArtModel } from '../../acnhapi/art/models/art.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { CritterService } from '../../shared/services/critter.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {
  @Input() art: ArtModel = {} as ArtModel;

  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;

  constructor(private critterService: CritterService) {
    this.critterService.mode$.subscribe(m => this.mode = m);
    this.critterService.language$.subscribe(l => this.language = l);
  }
}
