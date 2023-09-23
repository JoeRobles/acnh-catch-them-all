import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const MaterialModules = [
  MatButtonToggleModule,
  MatChipsModule,
  MatSlideToggleModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialModules
  ],
  exports: [
    MaterialModules
  ]
})
export class MaterialModule { }
