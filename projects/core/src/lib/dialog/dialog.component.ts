import { FivLoadingProgressBar } from './../loading-progress-bar/loading-progress-bar.component';
import {
  EventEmitter, Output, Input, TemplateRef, Type, ElementRef, HostBinding
} from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { trigger, transition, style, animate, state, AnimationPlayer } from '@angular/animations';
import { IonCard } from '@ionic/angular';
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

  @Input() backdrop = false;
  @Input() duration: number;
  @Input() title: string;
  @Input() subtitle: string;
  // animation data
  @Input() inDuration = 220;
  @Input() outDuration = 180;
  outPosition = '-100%';

  @Output() fivClose: EventEmitter<FivDialog> = new EventEmitter();
  @ViewChild(OverlayComponent) overlay: OverlayComponent;
  @ViewChild(FivLoadingProgressBar) bar: FivLoadingProgressBar;
  @ViewChild('dialog') dialogRef: ElementRef;

  dialogState: 'in' | 'out' = 'out';

  ngOnInit(): void { }

  open() {
    this.outPosition = this.getSlideStartPosition();
    console.log('open from', this.outPosition);
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

  getSlideStartPosition() {
    if (this.verticalAlign === 'top') {
      return '-100%';
    }
    if (this.verticalAlign === 'center') {
      return '60%';
    }
    if (this.verticalAlign === 'bottom') {
      return '100%';
    }
  }
}
