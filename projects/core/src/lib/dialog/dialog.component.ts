import { EventEmitter, Output, Input, HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'fiv-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialogAnim', [
      state('bottom', style({ bottom: 0 })),
      state('top', style({ top: 0 })),
      state('center', style({
        top: '50%',
        transform: 'translateY(-50%)'
      })),
      state('bottom-slide', style({ bottom: 0, transform: 'translateY(100%)' })),
      state('top-slide', style({ top: 0, transform: 'translateY(-100%)' })),
      state('center-slide', style(
        { bottom: 0, transform: 'translateY(100%)' }
      )),
      state('bottom-fade', style({ bottom: 0, opacity: 0 })),
      state('top-fade', style({ top: 0, opacity: 0, display: 'none' })),
      state('center-fade', style({
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0
      })),
      transition('* => *', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class FivDialog implements OnInit {

  @Input() verticalAlign: 'bottom' | 'center' | 'top' = 'center';
  @Input() animation: 'slide' | 'fade' = 'fade';
  visible = false;
  @Input() backdrop: true;
  @Output() fivClose: EventEmitter<FivDialog> = new EventEmitter();
  @Output() fivOpen: EventEmitter<FivDialog> = new EventEmitter();

  @HostBinding('class.visible') get isVisible() {
    return this.visible;
  }


  constructor() {

  }

  ngOnInit(): void {

  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }



}
