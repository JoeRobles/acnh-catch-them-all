import { Component, Input, OnInit } from '@angular/core';

import { ArtModel } from '../../acnhapi/art/models/art.model';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  @Input() art: ArtModel = {} as ArtModel;

  title = 'Art';
  modeTypeEnum = ModeTypeEnum;

  constructor(
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.preferencesService.language$.subscribe(l => this.title = this.art.name[l]);
  }
}
