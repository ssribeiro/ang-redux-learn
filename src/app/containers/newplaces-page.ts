import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as placesActions from '../actions/places';

import * as fromRoot from '../reducers';

@Component({
  selector: 'of-newplaces-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <of-address-list-page></of-address-list-page>
    <of-address-input-page></of-address-input-page>
    <div align="right"><button md-mini-fab [color]="'primary'" (click)="addPlace()"><md-icon>add</md-icon></button></div>
  `,
  styles: [`
    button {
      margin-right: 15px;
      margin-top: 6px;
    }
  `]
})
export class NewplacesPageComponent {

  constructor(private store: Store<fromRoot.State>) {
  }

  addPlace() {
    this.store.dispatch(new placesActions.AddPlaceAction());
  }

}
