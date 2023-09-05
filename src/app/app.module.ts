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

@NgModule({
  declarations: [
    AppComponent,
    CritterDiscoveryComponent,
    CritterLegendComponent,
    CritterDetailComponent,
    CritterSeasonalityComponent,
    CritterActivityComponent,
    SongComponent,
    SongDetailComponent,
    FossilComponent,
    ArtComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
