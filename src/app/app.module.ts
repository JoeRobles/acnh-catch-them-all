import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CritterDiscoveryComponent } from './components/critter-discovery/critter-discovery.component';
import { CritterLegendComponent } from './components/critter-legend/critter-legend.component';
import { CritterDetailComponent } from './components/critter-detail/critter-detail.component';
import { CritterSeasonalityComponent } from './components/critter-seasonality/critter-seasonality.component';
import { CritterActivityComponent } from './components/critter-activity/critter-activity.component';
import { SongComponent } from './components/song/song.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { FossilComponent } from './components/fossil/fossil.component';
import { ArtComponent } from './components/art/art.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelComponent } from './components/model/model.component';
import { ModelDetailComponent } from './components/model-detail/model-detail.component';
import { FossilDetailComponent } from './components/fossil-detail/fossil-detail.component';
import { ArtDetailComponent } from './components/art-detail/art-detail.component';
import { DatetimeDisplayComponent } from './components/datetime-display/datetime-display.component';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { HemisphereSelectComponent } from './components/hemisphere-select/hemisphere-select.component';
import { HourlyMusicComponent } from './components/hourly-music/hourly-music.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { ToggleControlsComponent } from './components/toggle-controls/toggle-controls.component';
import { CritterDisplayComponent } from './components/critter-display/critter-display.component';
import { ToggleGenreComponent } from './components/toggle-genre/toggle-genre.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    ArtDetailComponent,
    CritterActivityComponent,
    CritterDetailComponent,
    CritterDiscoveryComponent,
    CritterLegendComponent,
    CritterSeasonalityComponent,
    DatetimeDisplayComponent,
    FossilComponent,
    FossilDetailComponent,
    HemisphereSelectComponent,
    HourlyMusicComponent,
    LanguageSelectComponent,
    ModelComponent,
    ModelDetailComponent,
    SongComponent,
    SongDetailComponent,
    ToggleControlsComponent,
    CritterDisplayComponent,
    ToggleGenreComponent,
    SearchComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
