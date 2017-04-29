import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'of-input-great',
  template: `
<md-input-container>
  <input 
    mdInput 
    id="{{ id }}"
    type="{{ type }}" 
    value="{{ value }}"
    placeholder="{{ placeholder }}"
    (keyup)="typed.emit($event.target.value)"
  />
  <md-hint *ngIf="max!=null" align="end">{{ value.length }} / {{ max }}</md-hint>
</md-input-container>
  `,
  styles: [`
md-input-container {
	width: 100%;
  font-size: 12px;
}
  `]
})
export class InputGreatComponent {
  @Input() id:string = ''+Date.now();
  @Input() type:string = 'text';
  @Input() value:string = '';
  @Input() placeholder:string = '';
  @Input() max:number = null;
  @Output() typed = new EventEmitter<string>();
}
