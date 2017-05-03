import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Location } from '../models/location';
import { LatLngLiteral } from '../models/latlngliteral';
import { MAP_STYLES } from '../themes';

import * as fromRoot from '../reducers';
//import * as collection from '../actions/collection';
//import { Greet } from '../models/greet';


@Component({
  selector: 'of-map-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <agm-map *ngIf="loc"
      [style.width]="mapWidth"
      [style.height]="mapHeight"
      [style.transition]="transition"
      [latitude]="loc.lat" 
      [longitude]="loc.lng"
      [disableDoubleClickZoom]="disableDoubleClickZoom"
      [disableDefaultUI]="disableDefaultUI"
      [scrollwheel]="scrollwheel"
      [keyboardShortcuts]="keyboardShortcuts"
      [zoomControl]="zoomControl"
      [scaleControl]="scaleControl"
      [mapDraggable]="mapDraggable"
      [streetViewControl]="streetViewControl"
      [fitBounds]="loc.bounds"
      [styles]="styles"
      [zoom]="zoom"
      (centerChange)="center.emit($event)"
    >

    </agm-map>
  `,
  styles: [`
    agm-map {
      position: absolute;
      padding: 0;
      margin: 0;
      background-color: transparent;
      width: 50px;
      height: 50px;
    }
  `]
})
export class MapPageComponent {
  @Input() loc:Location;
  @Input() mapWidth:string = '50px';
  @Input() mapHeight:string = '50px';
  @Input() transition:string = 'none';
  @Input() disableDoubleClickZoom:boolean = false;
  @Input() disableDefaultUI:boolean = true;
  @Input() scrollwheel:boolean = true;
  @Input() keyboardShortcuts:boolean = false;
  @Input() zoomControl:boolean = false;
  @Input() scaleControl:boolean = true;
  @Input() mapDraggable:boolean = true;
  @Input() streetViewControl:boolean = false;
  @Input() styles:string = MAP_STYLES;
  @Input() zoom:number = 14;
  @Output() center = new EventEmitter<any>();

  constructor(private store: Store<fromRoot.State>) {
  }

}
