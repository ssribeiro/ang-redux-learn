import { Component, Input } from '@angular/core';

import { Greet } from '../models/greet';


@Component({
  selector: 'bc-oi',
  template: `
    <of-input-great></of-input-great>
  `
})
export class OiComponent {
  @Input() greet: Greet;

  get hi() {
    return this.greet.hi;
  }
}
