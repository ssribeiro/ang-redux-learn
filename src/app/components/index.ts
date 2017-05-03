import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputGreatComponent } from './input-great';
import { AddressViewComponent } from './address-view';
import { ActionButtonComponent } from './action-button';
import { ActionListComponent } from './action-list';

import { PipesModule } from '../pipes';

export const COMPONENTS:Array<any> = [
  //ToolbarComponent,
  InputGreatComponent,
  AddressViewComponent,
  ActionButtonComponent,
  ActionListComponent,
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
