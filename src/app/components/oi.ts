import { Component, Input } from '@angular/core';

import { Greet } from '../models/greet';


@Component({
  selector: 'bc-oi',
  template: `
    <span>
      {{ hi }}
    </span>
  `,
  styles: [`
    span {
      background-color: black;
      color: white;
    }
  `]
})
export class OiComponent {
  @Input() greet: Greet;

  get hi() {
    return this.greet.hi;
  }
}
