import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CritterResolver } from './resolvers/critter.resolver';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {
      critters: CritterResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
