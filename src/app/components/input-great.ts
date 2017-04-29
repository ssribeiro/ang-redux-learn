import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'of-input-great',
  template: `
<md-input-container>
  <input 
    mdInput 
    id="{{ id }}"
    type="{{ type }}" 
    placeholder="{{ placeholder }}"
    (keyup)="typed.emit($event.target.value)"
  />
</md-input-container>
  `,
  styles: [`
md-input-container {
	width: 100%;
}
  `]
})
export class InputGreatComponent {
  @Input() id:string = ''+Date.now();
  @Input() type:string = 'text';
  @Input() placeholder:string = '';
  @Output() typed = new EventEmitter<string>();
}
