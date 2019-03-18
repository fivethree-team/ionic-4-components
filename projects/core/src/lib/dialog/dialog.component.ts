import { FivLoadingProgressBar } from './../loading-progress-bar/loading-progress-bar.component';
import {
  EventEmitter, Output, Input, TemplateRef, Type, ElementRef, HostBinding
} from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FivOverlay } from '../overlay/overlay.component';
import { trigger, transition, style, animate, state, AnimationPlayer } from '@angular/animations';
export type Content<T> = TemplateRef<T> | Type<T>;

@Component({
  selector: 'fiv-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('slide', [
      transition('out => in', [
        style({ top: '{{top}}' }),
        animate('{{inDuration}} ease-out', style({ top: '*' }))
      ], { params: { top: '-100%', inDuration: '400ms' } }),
      transition('in => out', [
        style({ top: '*' }),
        animate('{{outDuration}} ease-in', style({ top: '{{top}}' }))
      ], { params: { top: '-100%', outDuration: '250ms' } })
    ]),
    trigger('fade', [
      transition('out => in', [
        style({ opacity: '{{opacity}}' }),
        animate('{{inDuration}} ease-out', style({ opacity: '1' }))
      ], { params: { opacity: 0, inDuration: '250ms' } }),
      transition('in => out', [
        style({ opacity: '1' }),
        animate('{{outDuration}} ease-in', style({ opacity: '0' }))
      ], { params: { opacity: 0, outDuration: '200ms' } }),
      state('out', style({ opacity: '0' }))
    ])
  ]
})
export class FivDialog implements OnInit {

  @Input() verticalAlign: 'bottom' | 'center' | 'top' = 'top';
  @Input() horizontalAlign: 'left' | 'center' | 'right' = 'center';
  @Input() shape: 'fill' | 'card' = 'card';

  @Input() backdrop = true;
  @Input() duration: number;
  // animation data
  @Input() inDuration = 160;
  @Input() outDuration = 120;
  outPosition = '-100%';

  @Output() fivClose: EventEmitter<FivDialog> = new EventEmitter();
  @Output() fivOpen: EventEmitter<FivDialog> = new EventEmitter();
  @ViewChild(FivOverlay) overlay: FivOverlay;
  @ViewChild(FivLoadingProgressBar) bar: FivLoadingProgressBar;
  @ViewChild('dialog') dialogRef: ElementRef;

  dialogState: 'in' | 'out' = 'out';

  ngOnInit(): void { }

  open() {
    this.outPosition = this.getSlideStartPosition();
    this.overlay.show();
    this.dialogState = 'in';
    if (this.duration) {
      this.bar.shrinkIn(this.duration);
    }
  }

  close() {
    this.dialogState = 'out';
    this.bar.stopProgressAnimation();
    this.bar.progress = 0;
  }

  animationDone(event) {
    if (event.fromState === 'out' && event.toState === 'in') {

    }
    if (event.fromState === 'in' && event.toState === 'out') {
      this.overlay.hide();
      this.fivClose.emit(this);
    }
  }

  backdropAnimDone(event) {
    if (event.fromState === 'out' && event.toState === 'in') {
      this.fivOpen.emit(this);
    }
  }

  getSlideStartPosition() {
    if (this.verticalAlign === 'top') {
      return '-100%';
    }
    if (this.verticalAlign === 'center') {
      return '54%';
    }
    if (this.verticalAlign === 'bottom') {
      return '100%';
    }
  }
}
