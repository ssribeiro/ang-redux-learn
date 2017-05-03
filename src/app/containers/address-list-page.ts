import { Component, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { Place } from '../models/place';

@Component({
  selector: 'of-address-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <ul class="of-ul">
        <li *ngFor="let place of places; let i=index" >
          <of-address-item-page [removed]="removedId===place.id" [place]="place"></of-address-item-page>
        </li>
      </ul>
  `,
  styles: [`
    li {
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 0;
      margin-right: 0;
      background-color: transparent;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
    }    
  `]
})
export class AddressListPageComponent {
  places$: Observable<Place[]>;
  places: Place[];
  removedId:number = null;

  constructor(private store: Store<fromRoot.State>, private ref:ChangeDetectorRef) {
    this.places$ = store.select(fromRoot.getPlaces);
    this.places$.subscribe((places)=>{
      this.evalPlaces(places);
    });
  }

  evalPlaces(places) {
    if(this.places!=null && places.length!=this.places.length) {
      this.removedId = this.findRemoved(places);
      setTimeout(()=> {
        this.places = places;
        this.removedId = null;
        this.ref.markForCheck();
      }, 350);
    } else
      this.places = places;
    this.ref.markForCheck();
  }

  findRemoved(places) {
    for (let tpI in this.places) {
      let missing = true;
      for (let pI in places) {
        if(this.places[tpI].id===places[pI].id) {
          missing = false;
          break;
        }
      }
      if(missing)
        return this.places[tpI].id;
    }
  }

}
