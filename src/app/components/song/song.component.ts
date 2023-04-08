import { Component, Input, OnInit } from '@angular/core';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { LanguageTypeEnum } from '../../shared/models/language-type.enum';
import { CritterService } from '../../shared/services/critter.service';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent  implements OnInit {
  @Input() song: SongModel = {} as SongModel;
  songName = '';
  language: LanguageTypeEnum = LanguageTypeEnum.NameUSen;
  mode: ModeTypeEnum = ModeTypeEnum.Discovery;
  modeTypeEnum = ModeTypeEnum;
  constructor(private critterService: CritterService) {
    this.critterService.mode$.subscribe(m => this.mode = m);
  }
  ngOnInit() {
    this.songName = this.song.name[this.language];
  }
}
