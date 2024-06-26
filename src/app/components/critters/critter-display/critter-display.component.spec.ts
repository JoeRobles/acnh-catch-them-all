import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CritterDisplayComponent } from './critter-display.component';
import { CritterDetailComponent } from './critter-detail/critter-detail.component';
import { ArtDetailComponent } from '../critters/art-detail/art-detail.component';
import { DatetimeDisplayComponent } from '../datetime-display/datetime-display.component';
import { LanguageSelectComponent } from '../language-select/language-select.component';
import { HemisphereSelectComponent } from '../hemisphere-select/hemisphere-select.component';
import { HourlyMusicComponent } from '../hourly-music/hourly-music.component';
import { ToggleSelectDisplayComponent } from '../toggle-controls/toggle-select-display/toggle-select-display.component';
import { CritterLegendComponent } from './critter-legend/critter-legend.component';
import { FossilDetailComponent } from '../critters/fossil-detail/fossil-detail.component';
import { SongDetailComponent } from '../critters/song-detail/song-detail.component';
import { ModelDetailComponent } from '../critters/model-detail/model-detail.component';

describe('CritterDisplayComponent', () => {
  let component: CritterDisplayComponent;
  let fixture: ComponentFixture<CritterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        ArtDetailComponent,
        CritterDetailComponent,
        CritterDisplayComponent,
        CritterLegendComponent,
        DatetimeDisplayComponent,
        FossilDetailComponent,
        HemisphereSelectComponent,
        HourlyMusicComponent,
        LanguageSelectComponent,
        ModelDetailComponent,
        SongDetailComponent,
        ToggleSelectDisplayComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
