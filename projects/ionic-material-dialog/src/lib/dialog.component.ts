import { Component, OnInit, Input } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";


export type animation = "slideIn" | "fadeIn"
export type verticalAlign = "top" | "bottom" | "center"

@Component({
  selector: 'gg-dialog',
  template: `
  <div class="gg-backdrop" [@backdropAnim] (click)="hideDialog()" *ngIf="animationState !== 'hidden' && backdrop">
  </div>
  <ion-card [@dialogAnim]="animationState" mode="md" class="gg-dialog" [ngClass]="{'floating': floating}">
  <ng-content></ng-content>
  </ion-card>
  `,
  styleUrls: ['dialog.scss'],
  animations: [
    trigger('dialogAnim', [
      transition('hidden => slideIn-top', [
        style({
          transform: 'translateY(-100%)'
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('hidden => slideIn-bottom', [
        style({
          transform: 'translateY(100%)'
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('hidden => fadeIn-bottom', [
        style({
          opacity: 0
        }),
        animate('360ms ease-out')
      ]),
      transition('hidden => fadeIn-top', [
        style({
          opacity: 0
        }),
        animate('360ms ease-out')
      ]),
      transition('hidden => fadeIn-center', [
        style({
          opacity: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }),
        animate('360ms ease-out')
      ]),
      transition('hidden => slideIn-center', [
        style({
          top: '50%',
          transform: 'translateY(-25%)',
           opacity: 0
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('slideIn-center => hidden', [
        animate('240ms ease-out',style({top: '50%',
        transform: 'translateY(-25%)',
         opacity: 0 }))
      ]),
      transition('* => hidden', [
        animate('240ms ease-out')
      ]),
      state('hidden', style({
        display: 'none',
        opacity: '0',
      })
      ),
      state('slideIn-top', style({
        top: 0,
      })
      ),
      state('slideIn-bottom', style({
        bottom: 0
      })
      ),
      state('fadeIn-top', style({
        top: 0
      })
      ),
      state('fadeIn-bottom', style({
        bottom: 0
      })
      ),
      state('fadeIn-center', style({
        top: '50%',
        transform: 'translateY(-50%)',
      })
      ),
      state('slideIn-center', style({
        top: '50%',
        transform: 'translateY(-50%)',
      })
      ),
    ]), trigger('backdropAnim', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('* => void', [
        animate('120ms 100ms cubic-bezier(0.32,1,0.23,1)'), style({
          opacity: 0
        }),
      ])
    ])],
})
export class DialogComponent implements OnInit {

  animationState = 'hidden'

  @Input() animation: animation = 'slideIn';
  @Input() verticalAlign: verticalAlign = 'bottom';
  @Input() floating: boolean = false;
  @Input() backdrop: boolean = false;

  constructor() {

  }

  ngOnInit() {

  }

  showDialog() {
    this.animationState = `${this.animation}-${this.verticalAlign}`;
  }

  hideDialog() {
    this.animationState = 'hidden';
  }

}
