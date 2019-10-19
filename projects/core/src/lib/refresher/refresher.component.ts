import { takeUntil, tap, filter } from 'rxjs/operators';
import { FivPull } from './../pull/pull.directive';
import { FivRefresherContent } from './refresher-content/refresher-content.component';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
  Renderer2,
  Host,
  OnDestroy
} from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state,
  AnimationBuilder
} from '@angular/animations';
import { IonContent, Platform } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'fiv-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
  animations: [
    trigger('fillAnim', [
      transition('* => fill', [
        style({
          'stroke-dasharray': 180,
          'stroke-dashoffset': 90,
          transformOrigin: 'center',
          stroke: '#DE3E35'
        }),
        animate('360ms ease-out')
      ]),
      state(
        'fill',
        style({
          'stroke-dasharray': 315,
          'stroke-dashoffset': 0,
          transformOrigin: 'center',
          stroke: '#1B9A59'
        })
      )
    ]),
    trigger('spinnerAnim', [
      transition('* => void', [
        animate('250ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('hintAnim', [
      transition('void => *', [
        style({ transform: 'translateY(0px) translateX(-50%)' }),
        animate(
          '150ms ease-in',
          style({
            opacity: 1,
            transform:
              'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)'
          })
        )
      ]),
      transition('* => void', [
        style({
          width: '112px',
          opacity: 1,
          transform:
            'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)'
        }),
        animate(
          '125ms ease-out',
          style({
            width: '40px',
            transform:
              'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)'
          })
        )
      ])
    ])
  ]
})
export class FivRefresher implements OnInit, OnDestroy {
  @Input() hintText = 'new posts';
  @Input() spinColor = 'light';
  @Input() maxPullHeight = 168;
  @Input() minPullHeight = 112;
  @Output() fivProgressChanged: EventEmitter<number> = new EventEmitter();
  @Output() fivRefresh: EventEmitter<FivRefresher> = new EventEmitter();
  @ViewChild('spinner') spinner: FivRefresherContent;
  hintVisible = false;
  currentProgress = 0;

  refreshing = false;

  $onDestroy = new Subject();

  constructor(
    private builder: AnimationBuilder,
    private refresher: ElementRef,
    private renderer: Renderer2,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.attachPullDirective();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }
  attachPullDirective() {
    const content: IonContent = this.refresher.nativeElement.closest(
      'ion-content'
    );

    if (!content) {
      throw new Error(
        'The fiv-refresher component needs to be inside of an ion-content.'
      );
    }
    content.scrollEvents = true;
    const pull = new FivPull(new ElementRef(content), this.platform, content);
    pull.init();

    pull.fivPull
      .pipe(
        filter(() => !this.refreshing && !this.hintVisible),
        tap(progress => this.fivPull(progress)),
        takeUntil(this.$onDestroy)
      )
      .subscribe();

    pull.fivRefresh
      .pipe(
        tap(() => this.onRefresh()),
        takeUntil(this.$onDestroy)
      )
      .subscribe();

    pull.fivCancel
      .pipe(
        tap(() => this.fivCancel()),
        takeUntil(this.$onDestroy)
      )
      .subscribe();
  }

  refresh() {
    if (!this.refreshing) {
      return;
    }
    this.refreshing = true;
    this.changeAnimationToProgress(112 / 168);
    this.spinner.load();
    this.fivRefresh.emit(this);
  }

  complete() {
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
      this.renderer.setStyle(
        this.spinner.element.nativeElement,
        'transform',
        `translateY(${this.minPullHeight * progress}px)`
      );
    }
  }

  changeAnimationToProgress(progress: number): Promise<any> {
    return new Promise(resolve => {
      const animation = this.builder.build([
        style({
          transform: `translateY(${100 *
            this.currentProgress}px) rotateZ(${360 * this.currentProgress}deg)`
        }),
        animate(
          '85ms ease-in',
          style({
            transform: `translateY(${100 * progress}px) rotateZ(${360 *
              progress}deg)`
          })
        )
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
    const value = Math.max(
      0,
      Math.min(100, (progress * 100 * this.maxPullHeight) / this.minPullHeight)
    );
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
      style({
        transform: `translateY(${this.currentProgress * 168}px) rotateZ(${360 *
          this.currentProgress}deg)`
      }),
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
    this.renderer
      // tslint:disable-next-line:max-line-length
      .setStyle(
        this.spinner.element.nativeElement,
        'transform',
        `translateY(${168 * this.currentProgress}px) rotateZ(${(360 *
          progress) /
          200}deg)`
      );
  }
}
