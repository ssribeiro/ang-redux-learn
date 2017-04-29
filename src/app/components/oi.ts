import { Component, Input } from '@angular/core';

import { Greet } from '../models/greet';


@Component({
  selector: 'of-oi',
  template: `
    oi
  `
})
export class OiComponent {
  @Input() greet: Greet;

  get hi() {
    return this.greet.hi;
  }
}
