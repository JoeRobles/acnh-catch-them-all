import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CritterResolver } from './resolvers/critter.resolver';
import { HourlyMusicResolver } from './resolvers/hourly-music.resolver';
import { CrittersComponent } from './pages/critters/critters.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CrittersComponent,
    resolve: {
      critters: CritterResolver,
      hourlyMusic: HourlyMusicResolver
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
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
