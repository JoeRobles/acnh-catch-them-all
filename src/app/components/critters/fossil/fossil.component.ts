import { Component, Input, OnInit } from '@angular/core';

import { FossilModel } from '../../../acnhapi/fossil/models/fossil.model';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { ModeTypeEnum } from '../../../acnhapi/models/mode-type.enum';

@Component({
  selector: 'app-fossil',
  templateUrl: './fossil.component.html',
  styleUrls: ['./fossil.component.scss']
})
export class FossilComponent implements OnInit {
  @Input() fossil: FossilModel = {} as FossilModel;

  title = 'Fossil';
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public preferencesService: PreferencesService,
  ) {
  }

  ngOnInit(): void {
    this.preferencesService.language$.subscribe(l => this.title = this.fossil.name[l]);
  }
}
