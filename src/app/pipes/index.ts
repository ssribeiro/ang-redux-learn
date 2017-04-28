import { NgModule } from '@angular/core';

import { AddCommasPipe } from './add-commas';


export const PIPES = [
  AddCommasPipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }
