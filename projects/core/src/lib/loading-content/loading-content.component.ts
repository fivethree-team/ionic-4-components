import { FivLoadingRefresherContent } from './loading-refresher-content/loading-refresher-content.component';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger, state, AnimationBuilder, AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'fiv-loading-content',
  templateUrl: './loading-content.component.html',
  styleUrls: ['./loading-content.component.scss'],
  animations: [
    trigger('fillAnim', [
      transition('* => fill', [
        style({
          'stroke-dasharray': 180,
          'stroke-dashoffset': 90,
          'transformOrigin': 'center',
          'stroke': '#DE3E35'
        }),
        animate('360ms ease-out')
      ]),
      state('fill', style({
        'stroke-dasharray': 315,
        'stroke-dashoffset': 0,
        'transformOrigin': 'center',
        'stroke': '#1B9A59',
      })
      )]
    ),
    trigger('spinnerAnim', [
      transition('* => void', [
        animate('250ms ease-out', style({ opacity: 0 }))
      ]),
    ]),
    trigger('hintAnim', [
      transition('void => *', [
        style({ transform: 'translateY(0px) translateX(-50%)' }),
        animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)' }))
      ]),
      transition('* => void', [
        style({ width: '112px', opacity: 1, transform: 'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)' }),
        animate('125ms ease-out',
          style({ width: '40px', transform: 'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)' }))
      ]),
    ]
    ),
  ],
})
export class FivLoadingContent implements OnInit {

  @Input() hintText = 'new posts';
  @Input() maxPullHeight = 168;
  @Input() minPullHeight = 112;
  @Output() fivProgressChanged: EventEmitter<number> = new EventEmitter();
  @Output() fivRefresh: EventEmitter<FivLoadingContent> = new EventEmitter();
  @ViewChild('content') content: ElementRef;
  @ViewChild('spinner') spinner: FivLoadingRefresherContent;
  hintVisible = false;
  currentProgress = 0;

  refreshing = false;

  ngOnInit() {

  }

  constructor(private builder: AnimationBuilder, private renderer: Renderer2) {
  }


  refresh() {
    this.refreshing = true;
    this.changeAnimationToProgress(112 / 168);
    this.spinner.load();
    this.fivRefresh.emit(this);
  }

  completeRefresh() {
    this.spinner.complete();
  }

  fillAnimationDone() {
    this.spinner.hide();
  }


  showHint() {
    this.hintVisible = true;
  }

  onHintClicked() {
    this.hintVisible = false;
  }

  postHint(event) {
    if (!event.fromState && event.toState === 'void') {
      this.setPullAnimationProgress(112 / 168);
      this.spinner.load();
      this.refreshing = true;
      this.fivRefresh.emit(this);
    }
  }

  setPullAnimationProgress(progress: number) {
    this.currentProgress = progress;

    if (progress < 1) {
      this.renderer.
        setStyle(this.spinner.element.nativeElement, 'transform', `translateY(${168 * progress}px)`);
    }
  }

  changeAnimationToProgress(progress: number): Promise<any> {
    return new Promise(resolve => {
      const animation = this.builder.build([
        style({ transform: `translateY(${this.currentProgress * 168}px) rotateZ(${360 * this.currentProgress}deg)` }),
        animate('85ms ease-in', style({ transform: `translateY(${progress * 168}px) rotateZ(${360 * progress}deg)` }))
      ]);

      const player = animation.create(this.spinner.element.nativeElement);
      player.play();
      player.onDone(() => {
        this.setPullAnimationProgress(progress);
        player.destroy();
        resolve();
      });
    });
  }

  fivPull(progress: number) {
    this.setPullAnimationProgress(progress);
    this.spinner.show();
    const value = Math.max(0, Math.min(100, progress * 100 * this.maxPullHeight / this.minPullHeight));
    this.spinner.setValue(value * 0.84);
  }

  onRefresh() {
    this.refresh();
    this.spinner.load();
  }

  fivCancel() {
    this.moveBack();
  }

  afterSpinnerHide() {
    this.setPullAnimationProgress(0);
    this.refreshing = false;
    this.spinner.reset();
  }

  moveBack() {
    const animation = this.builder.build([
      style({ transform: `translateY(${this.currentProgress * 168}px) rotateZ(${360 * this.currentProgress}deg)` }),
      animate('145ms ease-in', style({ transform: 'translateY(0) rotateZ(0)' }))
    ]);

    const player = animation.create(this.spinner.element.nativeElement);
    player.play();
    player.onDone(() => {
      this.setPullAnimationProgress(0);
      this.spinner.visible = false;
      player.destroy();
    });

  }

  onSpinnerProgress(progress: number) {
    this.fivProgressChanged.emit(progress);
    this.renderer.
      // tslint:disable-next-line:max-line-length
      setStyle(this.spinner.element.nativeElement, 'transform', `translateY(${168 * this.currentProgress}px) rotateZ(${360 * progress / 200}deg)`);
  }


}
