import { Component, ChangeDetectionStrategy, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Place } from '../models/place';
import { Action } from '../models/action';
import * as placesActions from '../actions/places';

import * as fromRoot from '../reducers';

@Component({
  selector: 'of-address-item-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="address-item" [ngClass]="{'removed':removed}">
      <table>
        <tr><td class="address-map" *ngIf="!hide_map">
          <of-address-map-page [loc]="place.location"></of-address-map-page>
        </td><td class="address-lines">
          <of-address-view [address]="place.address"></of-address-view>
        </td><td align="right">
          <div align="right"><of-action-list [actions]="actions"></of-action-list></div>
        </td></tr>
      </table>
    </div>
  `,
  styles: [`
    .address-item {
      background-color: #f5f5f5;
      transition: 0.35s;
    }
    table {
      width: 100%;
      overflow: hidden;
      font-size: 10px;
    }
    .address-map {
      width: 50px;  
    }
    @media screen and (max-width: 220px) {
      .address-map {
        visibility: hidden;
      }
    }
    .address-lines {
      padding-right: 25px;
      padding-left: 5px;
    }
    .removed {
      transform: scale(0.7);
      opacity: 0;
      height: 0 !important;
    }
  `]
})
export class AddressItemPageComponent {
  @Input() place:Place;
  @Input() removed:boolean = false;
  actions: Action[] = [
    {
      name: '',
      icon: 'mode_edit',
      action: ()=>{this.store.dispatch(new placesActions.EditPlaceAction(this.place.id))}
    },
    {
      name: '',
      icon: 'delete',
      action: ()=>{this.store.dispatch(new placesActions.RemovePlaceAction(this.place.id))}
    }
  ];
  hide_map:boolean = window.innerWidth<220 ? true : false;

  constructor(private store: Store<fromRoot.State>) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.hide_map = event.target.innerWidth<220 ? true : false; 
  }

}
