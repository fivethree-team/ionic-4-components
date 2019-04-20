import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger, state, AnimationBuilder } from '@angular/animations';
import { FivLoadingSpinner } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'fiv-loading-refresher-content',
  templateUrl: './loading-refresher-content.component.html',
  styleUrls: ['./loading-refresher-content.component.scss'],
  animations: [trigger('fabAnim', [
    transition('void => *', [
      style({ transform: 'scale(0)' }),
      animate('250ms ease-out')
    ]),
    transition('* => void', [
      animate('250ms ease-in', style({ transform: 'scale(0)' }))
    ])
  ]),
  trigger('spinnerAnim', [
    transition('void => *', [
      style({ opacity: '0' }),
      animate('250ms ease-out')
    ]),
    transition('* => void', [
      animate('250ms ease-in', style({ opacity: '0' }))
    ])
  ]),
  trigger('rotateAnim', [
    transition('normal => rotate', [
      animate('125ms ease-out')
    ]),
    transition('rotate => normal', [
      animate('125ms ease-in')
    ]),
    state('rotate', style({ opacity: '0', transform: 'rotateZ(45deg)' })),
    state('normal', style({ opacity: '1', transform: 'rotateZ(0deg)' }))
  ]),
  trigger('fillAnim', [
    transition('* => fill', [
      style({
        'stroke-dasharray': 180,
        'stroke-dashoffset': 90,
        'transformOrigin': 'center',
        'stroke': '#DE3E35'
      }),
      animate('1400ms ease-out')
    ]),
    state('fill', style({
      'stroke-dasharray': 315,
      'stroke-dashoffset': 0,
      'transformOrigin': 'center',
      'stroke': '#1B9A59',
      'opacity': 0
    })
    )]
  )]
})
export class FivLoadingRefresherContent implements OnInit {

  @Input() icon: string;
  @Input() spinColor: string;
  @Input() fabColor: string;
  @Input() iconColor = '#000';
  @Input() checkmark = false;
  @Input() disabled = false;
  _progress = 0;
  @Input() set progress(progress) {
    this._progress = progress;
    if (progress < 1) {
      this.renderer.
        setStyle(this.spinnerRef.nativeElement, 'transform', `rotateZ(${360 * progress}deg)`);
    }
  }

  get progress() {
    return this._progress;
  }

  @Output() fivComplete: EventEmitter<FivLoadingRefresherContent> = new EventEmitter<FivLoadingRefresherContent>();
  @Output() fivRefresh: EventEmitter<FivLoadingRefresherContent> = new EventEmitter<FivLoadingRefresherContent>();
  @Output() fivHidden: EventEmitter<FivLoadingRefresherContent> = new EventEmitter<FivLoadingRefresherContent>();
  @Output() fivShowed: EventEmitter<FivLoadingRefresherContent> = new EventEmitter<FivLoadingRefresherContent>();
  @Output() fivProgress: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('spinner') spinner: FivLoadingSpinner;
  @ViewChild('spinner', { read: ElementRef }) spinnerRef: ElementRef;
  @ViewChild('background') background: ElementRef;

  visible = false;
  iconState = 'normal';

  constructor(
    public element: ElementRef,
    private renderer: Renderer2,
    public builder: AnimationBuilder) {
  }

  ngOnInit() {
  }



  load() {
    this.visible = true;
    this.spinner.spin();
    this.fivRefresh.emit(this);
  }

  unload() {
    this.spinner.stopSpinning();
  }

  complete() {
    // this.spinner.completeIn(500);
    if (this.checkmark) {
      this.iconState = 'rotate';
    } else {
      this.postComplete();
    }
  }

  show() {
    if (!this.visible) {
      this.visible = true;
      const animation = this.builder.build([
        style({ transform: 'scale(0)' }),
        animate('0ms ease-out', style({ transform: 'scale(1)' }))
      ]);

      const player = animation.create(this.background.nativeElement);
      player.play();
      player.onDone(() => {
        this.fivShowed.emit(this);
        player.destroy();
      });
    }
  }

  hide() {
    if (this.visible) {
      const transform = `scale(1)`;
      const animation = this.builder.build([
        style({ transform: transform }),
        animate('175ms ease-in', style({ transform: 'scale(0)' }))
      ]);

      const player = animation.create(this.background.nativeElement);
      player.play();
      player.onDone(() => {
        this.fivHidden.emit(this);
        this.visible = false;
        player.destroy();

      });
    }
  }

  fillAnimationDone() {
    if (this.checkmark) {
      this.iconState = 'rotate';
    } else {
      this.postComplete();
    }
  }

  changeIconAndReveal(event, icon: string) {
    if (event.fromState === 'normal') {
      this.icon = icon;
      this.iconState = 'normal';
    } else {
      if (event.fromState === 'rotate') {
        this.postComplete();
      }

    }
  }

  postComplete() {
    this.unload();
    this.fivComplete.emit(this);
  }

  setValue(progress: number) {
    this.spinner.setValue(progress);
  }

  reset() {
    this.spinner.setMode('indeterminate');
  }

}
