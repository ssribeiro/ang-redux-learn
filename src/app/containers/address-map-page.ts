import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Location } from '../models/location';

import * as fromRoot from '../reducers';
//import * as collection from '../actions/collection';
//import { Greet } from '../models/greet';


@Component({
  selector: 'of-address-map-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div (mouseenter)="upSize()" (mouseleave)="downSize()" id="theMap" [style.width]="mapWidthNow" [style.height]="mapHeightNow" *ngIf="loc">
      <of-map-page 
        [loc]="loc"
        [mapWidth]="mapWidthNow" 
        [mapHeight]="mapHeightNow" 
        [disableDoubleClickZoom]="true"
        [scrollwheel]="false"
        [scaleControl]="false"
        [mapDraggable]="false"
        [transition]="'0.3s'"
      ></of-map-page>
    </div>
  `,
  styles: [`
    #theMap {
      background-color: white;
      overflow: hidden;
      /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.3);
      border-width: 2px;
      padding: 0;
      margin: 0;
      transition: 0.3s;
    }
  `]
})
export class AddressMapPageComponent implements OnInit {
  @Input() loc:Location;
  @Input() mapWidth:number = 50;
  mapWidthNow:string = '50px';
  @Input() mapHeight:number = 50;
  mapHeightNow:string = '50px';
  @Input() animateSize:boolean = true;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.mapHeightNow = this.mapHeight+'px';
    this.mapWidthNow = this.mapWidth+'px';
  }

  upSize() {
    if(this.animateSize) {
      this.mapHeightNow = (2*this.mapHeight)+'px';
      this.mapWidthNow = (2*this.mapWidth)+'px';
    }
  }

  downSize() {
    if(this.animateSize) {
      this.mapHeightNow = this.mapHeight+'px';
      this.mapWidthNow = this.mapWidth+'px';
    }
  }

}
