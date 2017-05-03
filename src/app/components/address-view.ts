import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../models/address';

@Component({
  selector: 'of-address-view',
  template: `
    <div *ngIf="address">
      <span class="large">{{ address.address }}</span><br>
      <span class="grey">Nº: {{ address.number }}{{ address.complement ? ', '+address.complement : '' }}</span>
    </div>
  `,
  styles: [`
    .large {
      font-size: 140%;
    }
    .grey {
      filter: opacity(75%);
      padding-left: 1px;
    }
  `]
})
export class AddressViewComponent {
  @Input() address:Address = {
        address:'Rua Bolsomito', 
        number:77, 
        complement:''
      };
  //@Output() typed = new EventEmitter<string>();
}
