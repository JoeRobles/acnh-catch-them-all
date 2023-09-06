import { Component } from '@angular/core';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ArtModel } from '../../acnhapi/art/models/art.model';
import { CritterService } from '../../shared/services/critter.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent {
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  art: ArtModel = {} as ArtModel;
  constructor(private critterService: CritterService) {
    this.critterService.art.subscribe(a => this.art = a);
    this.critterService.language$.subscribe(l => this.language = l);
  }
}
