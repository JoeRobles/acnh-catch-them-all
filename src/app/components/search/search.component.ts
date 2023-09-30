import { Component } from '@angular/core';
import { CritterService } from '../../shared/services/critter.service';
import { ToggleControlsService } from '../../shared/services/toggle-controls.service';
import { PreferencesService } from '../../shared/services/preferences.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CritterTypeEnum } from '../../shared/models/critter-type.enum';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  bugDistinctLocations = [
    'Flying',
    'Flying (near water)',
    'Flying by light',
    'Flying near hybrid flowers',
    'Hitting rocks',
    'Near trash',
    'On beach rocks',
    'On flowers',
    'On palm trees',
    'On ponds and rivers',
    'On rocks and bush (when raining)',
    'On rotten food',
    'On the beach',
    'On the ground',
    'On tree stumps',
    'On trees',
    'On villagers',
    'On white flowers',
    'Shaking trees',
    'Under trees',
    'Underground',
  ];
  bugFishDisctinctRarity = [
    'Common',
    'Uncommon',
    'Rare',
    'Ultra-rare'
  ];
  critterTypeEnum = CritterTypeEnum;
  fishDistinctLocations = [
    'Pier',
    'Pond',
    'River',
    'River (Clifftop)',
    'River (Clifftop) & Pond',
    'River (Mouth)',
    'Sea',
    'Sea (when raining or snowing)'
  ];
  fishDistinctShadowSizes = [
    'Smallest (1)',
    'Small (2)',
    'Medium (3)',
    'Medium (4)',
    'Medium with fin (4)',
    'Large (5)',
    'Largest (6)',
    'Largest with fin (6)',
    'Narrow',
  ]
  seaDistinctShadowSizes = [
    'Smallest',
    'Small',
    'Medium',
    'Large',
    'Largest',
  ];
  seaDistinctSpeeds = [
    'Stationary',
    'Very slow',
    'Slow',
    'Medium',
    'Fast',
    'Very fast',
  ];
  searchForm: FormGroup = this.fb.group({
    key: [''],
  });

  constructor(
    public critterService: CritterService,
    private fb: FormBuilder,
    public toggleControlsService: ToggleControlsService,
    public preferencesService: PreferencesService
  ) {
    this.searchForm.valueChanges.subscribe(value => {
      console.log('value: ', value);
      this.critterService.search$.next(value.key);
    });
  }
}
