import { Component } from '@angular/core';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { ArtModel } from '../../acnhapi/art/models/art.model';
import { CritterService } from '../../shared/services/critter.service';
import { PreferencesService } from '../../shared/services/preferences.service';
import { LanguageType } from '../../shared/models/language.type';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent {
  language: LanguageType = LanguageTypeEnum.NameUSen;
  art: ArtModel = {} as ArtModel;

  constructor(
    private critterService: CritterService,
    public preferencesService: PreferencesService
    ) {
    this.critterService.art.subscribe(a => this.art = a);
    this.preferencesService.language$.subscribe(l => this.language = l);
  }
}
