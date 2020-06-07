import { FivLoadingProgressBar } from './../loading-progress-bar/loading-progress-bar.component';
import {
  EventEmitter,
  Output,
  Input,
  TemplateRef,
  Type,
  ElementRef,
  Renderer2
} from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FivOverlay } from '../overlay/overlay.component';
import {
  trigger,
  transition,
  style,
  animate,
  state,
  AnimationBuilder
} from '@angular/animations';
import { DomController } from '@ionic/angular';
export type Content<T> = TemplateRef<T> | Type<T>;

@Component({
  selector: 'fiv-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('slide', [
      transition('out => top', [
        style({ top: '0', transform: 'translateY(-100%) {{translateX}}' }),
        animate('220ms ease-out')
      ]),
      transition('out => center', [
        style({
          top: '50%',
          transform: 'translateY(-50%) {{translateX}} scale(0)',
          opacity: 0
        }),
        animate(
          '220ms ease-out',
          style({
            top: '50%',
            transform: 'translateY(-50%) {{translateX}} scale(1)',
            opacity: 1
          })
        )
      ]),
      transition('out => bottom', [
        style({ bottom: '0', transform: 'translateY(100%) {{translateX}}' }),
        animate('220ms ease-out')
      ]),
      transition('top => out', [
        style({ top: '0', transform: '*' }),
        animate(
          '140ms ease-in',
          style({ top: '0', transform: 'translateY(-100%) {{translateX}}' })
        )
      ]),
      transition('center => out', [
        style({
          top: '50%',
          transform: '*',
          opacity: 1
        }),
        animate(
          '140ms ease-in',
          style({
            top: '50%',
            transform: 'translateY(-50%) {{translateX}} scale(0)',
            opacity: 0
          })
        )
      ]),
      transition('bottom => out', [
        style({ bottom: '0', transform: '*' }),
        animate(
          '140ms ease-in',
          style({ bottom: '0', transform: 'translateY(100%) {{translateX}}' })
        )
      ])
      // state('bottom', style({ bottom: '0', transform: '*' })),
      // state('top', style({ top: '0', transform: '*' })),
      // state('center', style({ top: '50%', transform: 'translateY(-50%) {{translateX}}' }))
    ]),
    trigger('fade', [
      transition(
        'out => *',
        [
          style({ opacity: '{{opacity}}' }),
          animate('{{inDuration}} ease-out', style({ opacity: '1' }))
        ],
        { params: { opacity: 0, inDuration: '250ms' } }
      ),
      transition(
        '* => out',
        [
          style({ opacity: '1' }),
          animate('{{outDuration}} ease-in', style({ opacity: '0' }))
        ],
        { params: { opacity: 0, outDuration: '200ms' } }
      ),
      state('out', style({ opacity: '0' }))
    ])
  ]
})
export class FivDialog implements OnInit {
  @Input() verticalAlign: 'bottom' | 'center' | 'top' = 'top';
  @Input() horizontalAlign: 'left' | 'middle' | 'right' = 'middle';
  @Input() shape: 'fill' | 'card' = 'card';
  @Input() priority = 20001;

  @Input() backdrop = true;
  @Input() backdropDismiss = true;
  @Input() pullEnabled = true;
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
  @ViewChild(FivOverlay, { static: false }) overlay: FivOverlay;
  @ViewChild(FivLoadingProgressBar, { static: false })
  bar: FivLoadingProgressBar;
  @ViewChild('dialog', { static: false }) dialogRef: ElementRef;

  dialogState: 'top' | 'center' | 'bottom' | 'out' = 'out';
  currentPullProgress: number;

  ngOnInit(): void {}

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
    private animation: AnimationBuilder
  ) {}

  open() {
    this.overlay.show(this.priority);

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

  backdropClick() {
    if (this.backdropDismiss) {
      this.close();
    }
  }

  animationDone(event) {
    if (event.fromState !== 'void' && event.toState === 'out') {
      this.transformDialog(0);
      this.overlay.hide();
      this.fivClose.emit(this);
    }
  }

  backdropAnimDone(event) {
    if (event.fromState === 'out' && event.toState !== 'void') {
      this.fivOpen.emit(this);
    }
  }

  onRefresh() {
    this.close();
  }

  fivCancel() {
    this.resetDialog(this.currentPullProgress);
  }

  transformDialog(progress: number) {
    this.currentPullProgress = progress;
    this.domCtrl.write(() => {
      if (this.verticalAlign === 'bottom') {
        this.renderer.setStyle(
          this.dialogRef.nativeElement,
          'margin-bottom',
          `-${progress * 120}px`
        );
      } else if (this.verticalAlign === 'top') {
        this.renderer.setStyle(
          this.dialogRef.nativeElement,
          'margin-top',
          `-${progress * 120}px`
        );
      } else if (this.verticalAlign === 'center') {
        this.renderer.setStyle(
          this.dialogRef.nativeElement,
          'margin-top',
          `${progress * 120}px`
        );
      }
    });
  }

  resetDialog(progress: number) {
    let reset;
    if (this.verticalAlign === 'bottom') {
      reset = this.animation.build([
        style({ 'margin-bottom': `-${progress * 120}px` }),
        animate('150ms', style({ 'margin-bottom': `0px` }))
      ]);
    } else if (this.verticalAlign === 'top') {
      reset = this.animation.build([
        style({ 'margin-top': `-${progress * 120}px` }),
        animate('150ms', style({ 'margin-top': `0px` }))
      ]);
    } else if (this.verticalAlign === 'center') {
      reset = this.animation.build([
        style({ 'margin-top': `${progress * 120}px` }),
        animate('150ms', style({ 'margin-top': `0px` }))
      ]);
    }

    const animation = reset.create(this.dialogRef.nativeElement);
    animation.play();
    animation.onDone(() => {
      animation.destroy();
      this.transformDialog(0);
    });
  }
}
