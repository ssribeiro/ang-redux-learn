import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'of-input-great',
  template: `
<md-input-container [color]=" alert ? 'warn' : 'primary' ">
  <input 
    mdInput 
    id="{{ id }}"
    type="{{ type }}" 
    value="{{ value }}"
    (keyup)="changeValueNow($event.target.value)"
    placeholder="{{ placeholder }}"
    (focusout)="evalEmit($event.target)"
  />
  <md-hint *ngIf="max!=null" align="end" [ngClass]="{'alert':alert}">{{ (''+valueNow).length }} / {{ max }}</md-hint>
</md-input-container>
  `,
  styles: [`
    md-input-container {
    	width: 100%;
      font-size: 12px;
    }
    .alert {
      color: red;
    }
  `]
})
export class InputGreatComponent implements OnInit {
  @Input() id:string = ''+Date.now();
  @Input() type:string = 'text';
  @Input() value:string = '';
  @Input() placeholder:string = '';
  @Input() max:number = null;
  @Output() typed = new EventEmitter<string>();
  valueNow;
  alert:boolean = false;
  
  ngOnInit() {
    this.valueNow = this.value;
  }

  changeValueNow(value) {
    this.valueNow = value;
    if( this.max!=null && value.length > this.max)
      this.alert = true;
    else
      this.alert = false;
  }

  evalEmit(target) {
    if(this.max!=null) {
      if(target.value.length <= this.max)
        this.typed.emit(target.value);
    } else
      this.typed.emit(target.value);
  }
}
