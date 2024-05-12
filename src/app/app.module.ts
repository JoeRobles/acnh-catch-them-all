import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtComponent } from './components/critters/art/art.component';
import { ArtDetailComponent } from './components/critters/art-detail/art-detail.component';
import { CritterActivityComponent } from './components/critters/critter-display/critter-activity/critter-activity.component';
import { CritterDiscoveryComponent } from './components/critters/critter-display/critter-discovery/critter-discovery.component';
import { CritterDisplayComponent } from './components/critters/critter-display/critter-display.component';
import { CritterDetailComponent } from './components/critters/critter-display/critter-detail/critter-detail.component';
import { CritterLegendComponent } from './components/critters/critter-display/critter-legend/critter-legend.component';
import { CrittersComponent } from './pages/critters/critters.component';
import { CritterSeasonalityComponent } from './components/critters/critter-display/critter-seasonality/critter-seasonality.component';
import { DashboardBugsComponent } from './components/dashboard/bugs/dashboard-bugs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatetimeDisplayComponent } from './shared/components/datetime-display/datetime-display.component';
import { FossilComponent } from './components/critters/fossil/fossil.component';
import { FossilDetailComponent } from './components/critters/fossil-detail/fossil-detail.component';
import { HemisphereSelectComponent } from './shared/components/hemisphere-select/hemisphere-select.component';
import { HourlyMusicComponent } from './shared/components/hourly-music/hourly-music.component';
import { LanguageSelectComponent } from './shared/components/language-select/language-select.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { ModelComponent } from './components/critters/model/model.component';
import { ModelDetailComponent } from './components/critters/model-detail/model-detail.component';
import { SearchComponent } from './components/critters/toggle-controls/search/search.component';
import { SongComponent } from './components/critters/song/song.component';
import { SongDetailComponent } from './components/critters/song-detail/song-detail.component';
import { ToggleArtCertComponent } from './components/critters/toggle-controls/toggle-art-cert/toggle-art-cert.component';
import { ToggleBugLocationComponent } from './components/critters/toggle-controls/toggle-bug-location/toggle-bug-location.component';
import { ToggleBugRarityComponent } from './components/critters/toggle-controls/toggle-bug-rarity/toggle-bug-rarity.component';
import { ToggleControlsComponent } from './components/critters/toggle-controls/toggle-controls.component';
import { ToggleFilterComponent } from './components/critters/toggle-controls/toggle-filter/toggle-filter.component';
import { ToggleFishLocationComponent } from './components/critters/toggle-controls/toggle-fish-location/toggle-fish-location.component';
import { ToggleFishRarityComponent } from './components/critters/toggle-controls/toggle-fish-rarity/toggle-fish-rarity.component';
import { ToggleFishShadowComponent } from './components/critters/toggle-controls/toggle-fish-shadow/toggle-fish-shadow.component';
import { ToggleSeaShadowsComponent } from './components/critters/toggle-controls/toggle-sea-shadows/toggle-sea-shadows.component';
import { ToggleSeaSpeedsComponent } from './components/critters/toggle-controls/toggle-sea-speeds/toggle-sea-speeds.component';
import { ToggleSelectDisplayComponent } from './components/critters/toggle-controls/toggle-select-display/toggle-select-display.component';
import { ToggleSongGenreComponent } from './components/critters/toggle-controls/toggle-song-genre/toggle-song-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    ArtDetailComponent,
    CritterActivityComponent,
    CritterDetailComponent,
    CritterDiscoveryComponent,
    CritterDisplayComponent,
    CritterLegendComponent,
    CrittersComponent,
    CritterSeasonalityComponent,
    DashboardComponent,
    DashboardBugsComponent,
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
    SearchComponent,
    ToggleArtCertComponent,
    ToggleBugLocationComponent,
    ToggleBugRarityComponent,
    ToggleControlsComponent,
    ToggleFilterComponent,
    ToggleFishLocationComponent,
    ToggleFishRarityComponent,
    ToggleFishShadowComponent,
    ToggleSeaShadowsComponent,
    ToggleSeaSpeedsComponent,
    ToggleSelectDisplayComponent,
    ToggleSongGenreComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    LazyLoadImageModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
