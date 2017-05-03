import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as placesActions from '../actions/places';
import { Place } from '../models/place'

@Component({
  selector: 'of-address-input-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="place" class="editing-place-back" [ngClass]="{'editing-back-appeared':appeared, 'hidden':!visible}" (click)="stopEditing()">
    </div>
    <div *ngIf="place" class="editing-place" [ngClass]="{'editing-appeared':appeared, 'hidden':!visible}">
      <div class="address-input">
        <of-input-great (typed)="addressChange($event)" [type]="'text'" [placeholder]="'Av, Rua, Shopping, Escola, etc..'" [value]="place.address.address" ></of-input-great>
      </div>
      <table cellspacing="0"><tr>
        <td>
          <of-input-great (typed)="numberChange($event)" [type]="'number'" [placeholder]="'Nº:'" [value]="place.address.number" [max]="5"></of-input-great>
        </td>
        <td>
          <of-input-great (typed)="complementChange($event)" [type]="'text'" [placeholder]="'Complemento'" [value]="place.address.complement" [max]="18"></of-input-great>
        </td>
      </tr></table>
      <of-search-places-page></of-search-places-page>
      <div align="right"><button md-button (click)="stopEditing()">OK</button></div>
    </div>
  `,
  styles: [`
    .editing-place {
      position: fixed;
      padding: 5px;
      background-color: #f5f5f5;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: 0.35s;
      top: 10%;
      left: 15%;
      right: 15%;
      opacity: 0;
      z-index: 1 !important;
    }
    .editing-appeared {
      top: 2%;
      left: 1%;
      right: 1%;
      opacity: 1;
    }
    .editing-place-back {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      opacity: 0;
      background-color: #000;
      transition: 0.35s;
      z-index: 1 !important;
    }
    .editing-back-appeared {
      opacity: 0.7;
    }
    .address-input {
      margin-bottom: -10px;
    }
  `]
})
export class AddressInputPageComponent {
  place$: Observable<Place>;
  place;
  appeared:boolean = false;
  visible:boolean = false;

  constructor(private store: Store<fromRoot.State>, private ref:ChangeDetectorRef) {
    this.place$ = store.select(fromRoot.getEditingPlace);
    this.place$.subscribe(p=>{
      if(p!=null) {
        this.place = {...p,
          address: {
            address: p.address.address,
            number: p.address.number,
            complement: p.address.complement
          }
        };
        this.ref.markForCheck();
        this.startEditing();
      }
    });
  }

  startEditing() {
    this.visible = true;
    setTimeout(()=>{
      this.appeared = true;
      this.ref.markForCheck();
    }
    ,1);
  }

  stopEditing() {
    this.appeared = false;
    setTimeout(()=>{
      this.store.dispatch(new placesActions.StopEditingAction());
      this.store.dispatch(new placesActions.PlaceChangeAction(this.place));
      this.visible = false;
      this.ref.markForCheck();
    }
    ,350);
  }

  addressChange(value) {
    this.place.address.address = value;
    this.store.dispatch(new placesActions.PlaceChangeAction(this.place));
  }

  numberChange(value) {
    this.place.address.number = value;
    this.store.dispatch(new placesActions.PlaceChangeAction(this.place));
  }

  complementChange(value) {
    this.place.address.complement = value;
    this.store.dispatch(new placesActions.PlaceChangeAction(this.place));
  }

}
