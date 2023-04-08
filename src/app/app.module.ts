import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CritterDiscoveryComponent } from './components/critter-discovery/critter-discovery.component';
import { CritterLegendComponent } from './components/critter-legend/critter-legend.component';
import { CritterDetailComponent } from './components/critter-detail/critter-detail.component';
import { CritterSeasonalityComponent } from './components/critter-seasonality/critter-seasonality.component';
import { CritterActivityComponent } from './components/critter-activity/critter-activity.component';
import { SongComponent } from './components/song/song.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CritterDiscoveryComponent,
    CritterLegendComponent,
    CritterDetailComponent,
    CritterSeasonalityComponent,
    CritterActivityComponent,
    SongComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
