import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Action } from '../models/action';

@Component({
  selector: 'of-action-button',
  template: `
      <button *ngIf="action" (click)="action.action()"><md-icon>{{ action.icon }}</md-icon>{{ action.name }}</button><br>
  `,
  styles: [`
    button {
      height: 26px;
    }
    md-icon {
      font-size: 18px;
      padding-top: 2px;
    }
  `]
})
export class ActionButtonComponent {
  @Input() action:Action = {
        name:'NONE',
        icon:'build', 
        action:()=>{console.log('VOID ACTION FROM VOID ACTION BUTTON')} 
      };
  //@Output() typed = new EventEmitter<string>();
}
