import { Component } from '@angular/core';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { CritterService } from '../../shared/services/critter.service';
import { FossilModel } from '../../acnhapi/fossil/models/fossil.model';

@Component({
  selector: 'app-fossil-detail',
  templateUrl: './fossil-detail.component.html',
  styleUrls: ['./fossil-detail.component.scss']
})
export class FossilDetailComponent {
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  fossil: FossilModel = {} as FossilModel;
  constructor(private critterService: CritterService) {
    this.critterService.fossil.subscribe(f => this.fossil = f);
    this.critterService.language$.subscribe(l => this.language = l);
  }
}
