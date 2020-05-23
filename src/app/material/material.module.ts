import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

const MaterialComponent =[
  MatButtonModule,
  MatSliderModule,
  MatToolbarModule,
  MatCardModule
]


@NgModule({
  imports: [
    MaterialComponent
  ],
  exports: [
      MaterialComponent
    ]
})
export class MaterilModule { }
