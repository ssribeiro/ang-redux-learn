import { Component, Input, Output, EventEmitter, NgZone, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'
import { Action } from '../models/action';

@Component({
  selector: 'of-action-list',
  template: `
    <div [@openAnimation]='show_list' align="right">
      <div (click)="toggleList()" [hidden]="!show_list_indeed" id="{{ 'actions_list_button_'+in }}" class="button-menu">
        <span><md-icon>more_horiz</md-icon></span><br>
      </div>
      <div (click)="toggleList()" [hidden]="show_list_indeed" id="{{ 'actions_list_button_2_'+in }}" class="button-menu">
        <span><md-icon>more_vert</md-icon></span><br>
      </div>  
      <div [hidden]="!show_list_indeed" id="{{ 'actions_list_'+in }}">
        <div align="right" class="action-list">
          <div *ngFor="let action of actions; let i=index">
            <of-action-button id="{{ 'actBut_'+i+'_'+in }}" [action]="action" ></of-action-button>
          </div>
        </div>
      <div>
    </div>
  `,
  styles: [`
    button {
      font-size: 0px;
      line-height: 0px;
      height: 0px;
    }
    .button-menu {
      width: 25px;
      height: 25px;
      border-radius: 2px;
      transition: 0.2s;
    }
    .button-menu:hover {
      background-color: #D5D5D5;
    }
    md-icon {
      font-size: 20px;
      padding-bottom: 4px;
    }   
  `],
  animations: [
    trigger('openAnimation', [
      state('closed', style({
        maxWidth:'88px',
        maxHeight:'18px'
      })),
      state('opened', style({
        maxWidth:'880px',
        maxHeight:'180px'
      })),
      transition('opened <=> closed', animate('300ms ease-in'))
    ])
  ]
})
export class ActionListComponent {
  @Input() in:string = '';
  @Input() actions:Array<Action> = [
    {
      name:'AutoVoid EDITAR',
      icon:'mode_edit', 
      action:()=>{console.log('EDITAR CLICADOOOOO')} 
    },
    {
      name:'AutoVoid OUVIR',
      icon:'headset', 
      action:()=>{console.log('Ouvir CLICADOOOOO')} 
    }
  ];
  
  show_list:string = 'closed';
  show_list_indeed:boolean = false;

  constructor(private ref: ChangeDetectorRef){}

  toggleList() {
    if(this.show_list === 'closed') {
      this.show_list_indeed = true;
      this.show_list = 'opened';
    } else {
      this.show_list = 'closed';
      setTimeout(()=>{      
        this.show_list_indeed = false;
        this.ref.markForCheck();
      }, 320);
    } 
  }

}
