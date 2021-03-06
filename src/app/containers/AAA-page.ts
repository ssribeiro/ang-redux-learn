import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
//import * as collection from '../actions/collection';
//import { Greet } from '../models/greet';


@Component({
  selector: 'of-AAA-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <of-newplaces-page></of-newplaces-page>
  `,
  styles: [`
  `]
})
export class AAAPageComponent {
  //greet$: Observable<Greet>;

  constructor(private store: Store<fromRoot.State>) {
    //this.greet$ = new Observable<Greet>( (g)=>{ g.next( { hi:'oi' } ) } );
    //this.greet$ = store.select(fromRoot.getDefaultGreet);
    //this.book$ = store.select(fromRoot.getSelectedBook);
    //this.isSelectedBookInCollection$ = store.select(fromRoot.isSelectedBookInCollection);
  }

  /*
  addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBookAction(book));
  }
  */

}
