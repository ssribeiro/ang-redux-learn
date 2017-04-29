import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OiComponent } from './oi';
import { InputGreatComponent } from './input-great';

import { PipesModule } from '../pipes';

export const COMPONENTS:Array<any> = [
  //ToolbarComponent,
  OiComponent,
  InputGreatComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
