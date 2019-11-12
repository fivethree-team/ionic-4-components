import { takeUntil, tap, filter, map } from 'rxjs/operators';
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
  OnDestroy
} from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationBuilder
} from '@angular/animations';
import { IonContent, Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { easeOutSine, tween, reverse } from '@fivethree/ngx-rxjs-animations';

@Component({
  selector: 'fiv-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
  animations: [
    trigger('hintAnim', [
      transition('void => *', [
        style({ transform: 'translateY(0px) translateX(-50%)' }),
        animate(
          '150ms ease-in',
          style({
            opacity: 1,
            transform: 'translateY(72px) translateX(-50%)'
          })
        )
      ]),
      transition('* => void', [
        style({
          width: '*',
          opacity: 1,
          transform: 'translateY(72px) translateX(-50%)'
        }),
        animate(
          '150ms 125ms ease-out',
          style({
            width: '40px',
            transform: 'translateY(72px) translateX(-50%)'
          })
        )
      ])
    ])
  ]
})
export class FivRefresher implements OnInit, OnDestroy {
  @Input() hintText = 'new posts';
  @Input() maxPullHeight = 168;
  @Input() minPullHeight = 112;
  @Output() fivProgressChanged: EventEmitter<number> = new EventEmitter();
  @Output() fivRefresh: EventEmitter<FivRefresher> = new EventEmitter();
  @ViewChild('spinner', { static: false }) spinner: FivRefresherContent;
  hintVisible = false;
  currentProgress = 0;

  refreshing = false;

  private $onDestroy = new Subject();

  constructor(
    private builder: AnimationBuilder,
    private refresher: ElementRef,
    private renderer: Renderer2,
    private platform: Platform
  ) {}

  async ngOnInit() {
    await this.attachPullDirective();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }

  private async attachPullDirective() {
    const content: IonContent = this.refresher.nativeElement.closest(
      'ion-content'
    );

    if (!content) {
      throw new Error(
        'The fiv-refresher component needs to be inside of an ion-content.'
      );
    }
    content.scrollEvents = true;
    const scroll = await content.getScrollElement();
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
        tap(() => this.refresh()),
        takeUntil(this.$onDestroy)
      )
      .subscribe();

    pull.fivCancel
      .pipe(
        tap(() => this.moveBack()),
        takeUntil(this.$onDestroy)
      )
      .subscribe();

    this.spinner.fivComplete.pipe(takeUntil(this.$onDestroy)).subscribe();

    this.fivRefresh
      .pipe(
        tap(() => scroll.scrollTo({ top: 0, behavior: 'smooth' })),
        takeUntil(this.$onDestroy)
      )
      .subscribe();
  }

  refresh() {
    if (this.refreshing) {
      return;
    }
    this.refreshing = true;
    this.spinner.load();
    this.setPullAnimationProgress(112 / 168);
    this.fivRefresh.emit(this);
  }

  complete() {
    if (!this.refreshing) {
      return;
    }
    this.spinner.complete();
  }

  onDone() {
    this.spinner.hide();
  }

  onHidden() {
    this.refreshing = false;
    this.setPullAnimationProgress(0);
  }

  showHint() {
    this.hintVisible = true;
  }

  onHintClicked() {
    this.hintVisible = false;
  }

  postHint(event) {
    if (!event.fromState && event.toState === 'void') {
      this.refresh();
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

  moveBack() {
    const animation = this.builder.build([
      style({
        transform: `translateY(${this.currentProgress *
          this.minPullHeight}px) rotateZ(${360 * this.currentProgress}deg)`
      }),
      animate('205ms ease-in', style({ transform: 'translateY(0) rotateZ(0)' }))
    ]);
    const player = animation.create(this.spinner.element.nativeElement);

    tween(easeOutSine, 145)
      .pipe(
        reverse(),
        map(n =>
          Math.max(
            0,
            Math.min(
              100,
              (this.currentProgress * n * 100 * this.maxPullHeight) /
                this.minPullHeight
            )
          )
        ),
        tap(value => this.spinner.setValue(value))
      )
      .subscribe();
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
        `translateY(${this.maxPullHeight *
          this.currentProgress}px) rotateZ(${(360 * progress) / 200}deg)`
      );
  }
}
