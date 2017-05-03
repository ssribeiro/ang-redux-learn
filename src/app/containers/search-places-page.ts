import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
//import * as collection from '../actions/collection';
//import { Greet } from '../models/greet';


@Component({
  selector: 'of-search-places-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div *ngFor="let result of results$ | async; let i=index;">
        <of-address-view [address]="result" ></of-address-view>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class SearchPlacesPageComponent {
  results$: Observable<any[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.results$ = store.select(fromRoot.getSearchPlacesResults);
  }

  /*
  addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBookAction(book));
  }
  */

}
