import { FivLoadingProgressBar } from './../loading-progress-bar/loading-progress-bar.component';
import {
  EventEmitter, Output, Input, TemplateRef, Type, ElementRef
} from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FivOverlay } from '../overlay/overlay.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Platform } from '@ionic/angular';
export type Content<T> = TemplateRef<T> | Type<T>;

@Component({
  selector: 'fiv-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('slide', [
      transition('out => top', [
        style({ top: '0', transform: 'translateY(-100%)' }),
        animate('220ms ease-out')
      ]),
      transition('out => center', [
        style({ top: '50%', transform: 'translateY(-50%) scale(0)', opacity: 0 }),
        animate('220ms ease-out', style({ top: '50%', transform: 'translateY(-50%) scale(1)', opacity: 1 }))
      ]),
      transition('out => bottom', [
        style({ bottom: '0', transform: 'translateY(100%)' }),
        animate('220ms ease-out')
      ]),
      transition('top => out', [
        style({ top: '0', transform: 'translateY(0)' }),
        animate('140ms ease-in', style({ top: '0', transform: 'translateY(-100%)' }))
      ]),
      transition('center => out', [
        style({ top: '50%', transform: 'translateY(-50%) scale(1)', opacity: 1 }),
        animate('140ms ease-in', style({ top: '50%', transform: 'translateY(-50%) scale(0)', opacity: 0 }))
      ]),
      transition('bottom => out', [
        style({ bottom: '0', transform: 'translateY(0)' }),
        animate('140ms ease-in', style({ bottom: '0', transform: 'translateY(100%)' }))
      ]),
      state('bottom', style({ bottom: '0', transform: 'translateY(0)' })),
      state('top', style({ top: '0', transform: 'translateY(0)' })),
      state('center', style({ top: '50%', transform: 'translateY(-50%)' })),
    ]),
    trigger('fade', [
      transition('out => *', [
        style({ opacity: '{{opacity}}' }),
        animate('{{inDuration}} ease-out', style({ opacity: '1' }))
      ], { params: { opacity: 0, inDuration: '250ms' } }),
      transition('* => out', [
        style({ opacity: '1' }),
        animate('{{outDuration}} ease-in', style({ opacity: '0' }))
      ], { params: { opacity: 0, outDuration: '200ms' } }),
      state('out', style({ opacity: '0' }))
    ])
  ]
})
export class FivDialog implements OnInit {

  @Input() verticalAlign: 'bottom' | 'center' | 'top' = 'top';
  @Input() horizontalAlign: 'left' | 'middle' | 'right' = 'middle';
  @Input() shape: 'fill' | 'card' = 'card';

  @Input() backdrop = true;
  @Input() duration: number;
  // animation data
  @Input() inDuration = 160;
  @Input() outDuration = 120;
  outPosition = '-100%';
  toPosition = '0px';
  translate = '0px';

  @Output() fivClose: EventEmitter<FivDialog> = new EventEmitter();
  @Output() fivDurationOver: EventEmitter<FivDialog> = new EventEmitter();
  @Output() fivOpen: EventEmitter<FivDialog> = new EventEmitter();
  @ViewChild(FivOverlay) overlay: FivOverlay;
  @ViewChild(FivLoadingProgressBar) bar: FivLoadingProgressBar;
  @ViewChild('dialog') dialogRef: ElementRef;

  dialogState: 'top' | 'center' | 'bottom' | 'out' = 'out';

  ngOnInit(): void { }

  constructor(private platform: Platform) { }

  open() {
    this.overlay.show();

    this.dialogState = this.verticalAlign;
    if (this.duration) {
      this.bar.shrinkIn(this.duration);
    }
  }

  doneShrinking() {
    this.fivDurationOver.emit(this);
  }

  close() {
    this.dialogState = 'out';
    this.bar.stopProgressAnimation();
  }

  animationDone(event) {

    if (event.fromState !== 'void' && event.toState === 'out') {
      this.overlay.hide();
      this.fivClose.emit(this);
    }
  }

  backdropAnimDone(event) {
    if (event.fromState === 'out' && event.toState !== 'void') {
      this.fivOpen.emit(this);
    }
  }
}
