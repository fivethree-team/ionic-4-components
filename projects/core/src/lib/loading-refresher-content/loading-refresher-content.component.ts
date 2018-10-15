import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger, state, AnimationBuilder } from '@angular/animations';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

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
export class LoadingRefresherContentComponent implements OnInit {

  @Input() icon: string;
  @Input() spinColor: string;
  @Input() fabColor: string;
  @Input() iconColor = '#000';
  @Input() checkmark = false;
  @Input() disabled = false;

  @Output() fivComplete: EventEmitter<LoadingRefresherContentComponent> = new EventEmitter<LoadingRefresherContentComponent>();
  @Output() fivRefresh: EventEmitter<LoadingRefresherContentComponent> = new EventEmitter<LoadingRefresherContentComponent>();
  @Output() fivHidden: EventEmitter<LoadingRefresherContentComponent> = new EventEmitter<LoadingRefresherContentComponent>();
  @Output() fivShowed: EventEmitter<LoadingRefresherContentComponent> = new EventEmitter<LoadingRefresherContentComponent>();
  @Output() fivProgress: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('spinner') spinner: LoadingSpinnerComponent;
  @ViewChild('background') background: ElementRef;

  visible = false;
  iconState = 'normal';

  constructor(public element: ElementRef, public builder: AnimationBuilder) {
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
      console.log('fill animation done', event);
      this.iconState = 'rotate';
    } else {
      this.postComplete();
    }
  }

  show() {
    if (!this.visible) {
      console.log('&show');
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
      console.log('fill animation done', event);
      this.iconState = 'rotate';
    } else {
      this.postComplete();
    }
  }

  changeIconAndReveal(event, icon: string) {
    console.log(event, icon);
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
