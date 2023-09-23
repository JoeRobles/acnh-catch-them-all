import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CritterResolver } from './resolvers/critter.resolver';
import { HourlyMusicResolver } from './resolvers/hourly-music.resolver';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {
      critters: CritterResolver,
      hourlyMusic: HourlyMusicResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
