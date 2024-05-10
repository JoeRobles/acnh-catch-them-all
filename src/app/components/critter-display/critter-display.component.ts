import { Component, OnInit } from '@angular/core';

import { CritterService } from '../../shared/services/critter.service';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { ModeTypeEnum } from '../../shared/models/mode-type.enum';
import { FishModel } from '../../acnhapi/fish/models/fish.model';
import { SeaModel } from '../../acnhapi/sea/models/sea.model';
import { FossilModel } from '../../acnhapi/fossil/models/fossil.model';
import { ArtModel } from '../../acnhapi/art/models/art.model';
import { SongModel } from '../../acnhapi/song/models/song.model';
import { ModelModel } from '../../acnhapi/models/model.model';
import { BugModel } from '../../acnhapi/bug/models/bug.model';
import { PreferencesService } from '../../shared/services/preferences.service';
import * as BootstrapMenu from 'bootstrap-menu';
declare var window: any;

@Component({
  selector: 'app-critter-display',
  templateUrl: './critter-display.component.html',
  styleUrls: ['./critter-display.component.scss']
})
export class CritterDisplayComponent implements OnInit {
  critterTypeEnum = CritterTypeEnum;
  critterType = CritterTypeEnum.Bugs;
  formModal: any;

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit(): void {
    this.critterService.critterType$.subscribe(c => this.critterType = c);
    if (window.bootstrap !== undefined) {
      this.formModal = new window.bootstrap.Modal(
        document.getElementById('myModal')
      );
      let myModalEl = document.getElementById('myModal');
      // @ts-ignore
      myModalEl.addEventListener('shown.bs.modal', () => {
        // @ts-ignore
        document.getElementById('songPlayer')?.play();
      });
      // @ts-ignore
      myModalEl.addEventListener('hide.bs.modal', () => {
        // @ts-ignore
        document.getElementById('songPlayer')?.pause();
        this.critterService.bug.next({} as BugModel);
        this.critterService.fish.next({} as FishModel);
        this.critterService.sea.next({} as SeaModel);
        this.critterService.song.next({} as SongModel);
      });
      let myMusicPlayerEl = document.getElementById('musicPlayer');
      // @ts-ignore
      myMusicPlayerEl.addEventListener('ended', () => {
        console.log('audio Ended');
        // @ts-ignore
        myMusicPlayerEl.pause();
        // @ts-ignore
        myMusicPlayerEl.src = this.musicBackground[0];
        // @ts-ignore
        myMusicPlayerEl.load();
        // @ts-ignore
        myMusicPlayerEl.play();
      });
    }
  }

  selectCritter(critterModel: any, critterType: CritterTypeEnum) {
    this.critterService.critterType$.next(critterType);
    switch (this.preferencesService.mode$.value) {
      case ModeTypeEnum.All:
      case ModeTypeEnum.Available:
      case ModeTypeEnum.Discovery:
        switch (critterType) {
          case CritterTypeEnum.Bugs:
            this.critterService.bug.next(critterModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Fish:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next(critterModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Sea:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next(critterModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Fossils:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next(critterModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Art:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next(critterModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.Songs:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next(critterModel);
            this.critterService.model.next({} as ModelModel);
            break;
          case CritterTypeEnum.BugModels:
          case CritterTypeEnum.FishModels:
            this.critterService.bug.next({} as BugModel);
            this.critterService.fish.next({} as FishModel);
            this.critterService.sea.next({} as SeaModel);
            this.critterService.fossil.next({} as FossilModel);
            this.critterService.art.next({} as ArtModel);
            this.critterService.song.next({} as SongModel);
            this.critterService.model.next(critterModel);
            break;
          default:
            break;
        }
        this.formModal.show();
        break;
      case ModeTypeEnum.Collection:
        if (critterType === CritterTypeEnum.Bugs || critterType === CritterTypeEnum.Fish || critterType === CritterTypeEnum.Sea) {
          this.catchDonate(critterModel, critterType);
        }
        if (critterType === CritterTypeEnum.BugModels || critterType === CritterTypeEnum.FishModels) {
          this.threeToModel(critterModel, critterType);
        }
        break;
      default:
        break;
    }
  }

  catchDonate(critterModel: any,  critterType: CritterTypeEnum) {
    var menu1 = new BootstrapMenu('.critter-name', {
      menuEvent: 'click',
      menuSource: 'element',
      menuPosition: 'belowLeft',
      actions: [
        {
          name: 'Donate',
          classNames: 'contextual',
          iconClass: 'bi bi-building-fill',
          onClick: () =>
            this.critterService.donate(critterModel, critterType)
        },
        {
          name: 'Catch',
          classNames: 'contextual',
          iconClass: 'bi bi-basket2-fill',
          onClick: () =>
            this.critterService.updateCritterList(critterModel, critterType)
        }
      ]
    });
  }

  threeToModel(critterModel: any,  critterType: CritterTypeEnum) {
    var menu2 = new BootstrapMenu('.model-name', {
      menuEvent: 'click',
      menuSource: 'element',
      menuPosition: 'belowLeft',
      actions: [
        {
          name: 'To commission',
          classNames: 'contextual',
          iconClass: 'bi bi-3-circle-fill',
          onClick: () =>
            this.critterService.threeOfAKind(critterModel, critterType)
        },
        {
          name: 'Arrived',
          classNames: 'contextual',
          iconClass: 'bi bi-gift-fill',
          onClick: () =>
            this.critterService.updateCritterList(critterModel, critterType)
        }
      ]
    });
  }
}
