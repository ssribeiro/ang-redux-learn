import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';

@Component({
  selector: 'of-input-address-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="address-input">
      <of-input-great [type]="'text'" [placeholder]="'Av, Rua, Shopping, Escola, etc..'" [value]="address" ></of-input-great>
    </div>
    <table cellspacing="0"><tr>
      <td>
        <of-input-great [type]="'number'" [placeholder]="'Nº:'" [value]="number" [max]="5"></of-input-great>
      </td>
      <td>
        <of-input-great [type]="'text'" [placeholder]="'Complemento'" [value]="complement" [max]="18"></of-input-great>
      </td>
    </tr></table>
  `,
  styles: [`
    .address-input {
      margin-bottom: -10px;
    }
  `]
})
export class InputAddressPageComponent {

  address:string='';
  number:string='';
  complement:string='';

  constructor(private store: Store<fromRoot.State>) {
  }

}
