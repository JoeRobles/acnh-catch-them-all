import { Component } from '@angular/core';
import { CritterService } from '../../../shared/services/critter.service';
import { PreferencesService } from '../../../shared/services/preferences.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CritterTypeEnum } from '../../../shared/models/critter-type.enum';
import { toFiveRows } from '../../../shared/utils/helpers';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  protected readonly critterTypeEnum = CritterTypeEnum;
  searchForm: FormGroup = this.fb.group({
    key: [''],
  });

  constructor(
    public critterService: CritterService,
    private fb: FormBuilder,
    public preferencesService: PreferencesService
  ) {
    this.searchForm.valueChanges.subscribe(value => {
      let bugsFiltered = this.critterService.bugs$.value;
      let fishFiltered = this.critterService.fish$.value;
      let seaFiltered = this.critterService.sea$.value;
      let fossilsFiltered = this.critterService.fossils$.value;
      let artFiltered = this.critterService.art$.value;
      let songsFiltered = this.critterService.songs$.value;
      let bugModelsFiltered = this.critterService.bugModels$.value;
      let fishModelsFiltered = this.critterService.fishModels$.value;
      if (value.key !== '') {
        const language = this.preferencesService.language$.value;
        bugsFiltered = this.critterService.bugs$.value.filter(bug => bug.name[language].toLowerCase().includes(value.key.toLowerCase()));
        fishFiltered = this.critterService.fish$.value.filter(fish => fish.name[language].toLowerCase().includes(value.key.toLowerCase()));
        seaFiltered = this.critterService.sea$.value.filter(sea => sea.name[language].toLowerCase().includes(value.key.toLowerCase()));
        fossilsFiltered = this.critterService.fossils$.value.filter(fossil => fossil.name[language].toLowerCase().includes(value.key.toLowerCase()));
        artFiltered = this.critterService.art$.value.filter(art => art.name[language].toLowerCase().includes(value.key.toLowerCase()));
        songsFiltered = this.critterService.songs$.value.filter(song => song.name[language].toLowerCase().includes(value.key.toLowerCase()));
        bugModelsFiltered = this.critterService.bugModels$.value.filter(bug => bug.name[language].toLowerCase().includes(value.key.toLowerCase()));
        fishModelsFiltered = this.critterService.fishModels$.value.filter(fish => fish.name[language].toLowerCase().includes(value.key.toLowerCase()));
      }
      this.critterService.bugsFiltered$.next(bugsFiltered);
      this.critterService.bugsGrid$.next(toFiveRows(bugsFiltered));
      this.critterService.fishFiltered$.next(fishFiltered);
      this.critterService.fishGrid$.next(toFiveRows(fishFiltered));
      this.critterService.seaFiltered$.next(seaFiltered);
      this.critterService.seaGrid$.next(toFiveRows(seaFiltered));
      this.critterService.fossilsGrid$.next(fossilsFiltered);
      this.critterService.artsGrid$.next(artFiltered);
      this.critterService.songsGrid$.next(songsFiltered);
      this.critterService.bugModelsGrid$.next(toFiveRows(bugModelsFiltered));
      this.critterService.fishModelsGrid$.next(toFiveRows(fishModelsFiltered));
    });
  }
}
