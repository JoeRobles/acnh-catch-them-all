import { Component, OnInit } from '@angular/core';

import { BugModel } from '../../../../acnhapi/bug/models/bug.model';
import { FishModel } from '../../../../acnhapi/fish/models/fish.model';
import { SeaModel } from '../../../../acnhapi/sea/models/sea.model';
import { CritterTypeEnum } from '../../../../acnhapi/models/critter-type.enum';
import { CritterService } from '../../../../acnhapi/services/critter.service';
import { LanguageTypeEnum } from '../../../../shared/models/language-type.enum';
import { LanguageType } from '../../../../shared/models/language.type';
import { PreferencesService } from '../../../../shared/services/preferences.service';

@Component({
  selector: 'app-critter-detail',
  templateUrl: './critter-detail.component.html',
  styleUrls: ['./critter-detail.component.scss']
})
export class CritterDetailComponent implements OnInit {
  bug: BugModel = {} as BugModel;
  bugName = '';
  fish: FishModel = {} as FishModel;
  fishName = '';
  sea: SeaModel = {} as SeaModel;
  seaName = '';
  critterType: CritterTypeEnum = '' as CritterTypeEnum;
  language: LanguageType = LanguageTypeEnum.NameUSen;

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
    ) {
  }

  ngOnInit(): void {
    this.preferencesService.language$.subscribe(l => this.language = l);
    this.critterService.critterType$.subscribe(critterType => {
      this.critterType = critterType;
      switch (critterType) {
        case CritterTypeEnum.Bugs:
          this.critterService.bug.subscribe(bug => {
            this.bug = bug;
            this.bugName = bug.name ? bug.name[this.language] : '';
          });
          break;
        case CritterTypeEnum.Fish:
          this.critterService.fish.subscribe(fish => {
            this.fish = fish;
            this.fishName = fish.name ? fish.name[this.language] : '';
          });
          break;
        case CritterTypeEnum.Sea:
          this.critterService.sea.subscribe(sea => {
            this.sea = sea;
            this.seaName = sea.name ? sea.name[this.language] : '';
          });
          break;
        default:
          break;
      }
    });
  }
}
