import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { DatetimeDisplayComponent } from './components/datetime-display/datetime-display.component';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { HemisphereSelectComponent } from './components/hemisphere-select/hemisphere-select.component';
import { HourlyMusicComponent } from './components/hourly-music/hourly-music.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToggleSelectDisplayComponent } from './components/toggle-controls/toggle-select-display/toggle-select-display.component';
import { CritterDisplayComponent } from './components/critter-display/critter-display.component';
import { CritterLegendComponent } from './components/critter-display/critter-legend/critter-legend.component';
import { CritterDetailComponent } from './components/critter-display/critter-detail/critter-detail.component';
import { ArtDetailComponent } from './components/art-detail/art-detail.component';
import { FossilDetailComponent } from './components/fossil-detail/fossil-detail.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { ModelDetailComponent } from './components/model-detail/model-detail.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
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
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
