import { element } from 'protractor';
import { LoadingRefresherContentComponent } from './../loading-refresher-content/loading-refresher-content.component';
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
        animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(112px) translateX(-50%)' }))
      ]),
      transition('* => void', [
        style({ width: '112px', opacity: 1, transform: 'translateY(112px) translateX(-50%)' }),
        animate('125ms ease-out', style({ width: '40px', transform: 'translateY(112px) translateX(-50%)' }))
      ]),
    ]
    ),
  ],
})
export class LoadingContentComponent implements OnInit {

  @Input() hintText = 'new posts';
  @Output() fivProgressChanged: EventEmitter<number> = new EventEmitter();
  @Output() fivRefresh: EventEmitter<LoadingContentComponent> = new EventEmitter();
  @ViewChild('content') content: ElementRef;
  @ViewChild('spinner') spinner: LoadingRefresherContentComponent;
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
    this.fivRefresh.emit(this);
  }

  completeRefresh() {
    this.spinner.complete();
  }

  fillAnimationDone() {
    console.log('fillAnimDone');
    this.spinner.unload();
    this.spinner.hide();
  }


  showHint() {
    this.hintVisible = true;
  }

  onHintClicked() {
    console.log('on hint clicked');
    this.hintVisible = false;

  }

  postHint(event) {
    console.log(event);
    if (!event.fromState && event.toState === 'void') {
      this.setPullAnimationProgress(112 / 168);
      this.spinner.load();
      this.refreshing = true;
      this.fivRefresh.emit(this);
    }
  }

  setPullAnimationProgress(progress: number) {
    console.log('set animation progress', progress);
    this.currentProgress = progress;


    if (progress < 1) {
      console.log('set translate', `${168 * progress}px`);
      this.renderer.setStyle(this.spinner.element.nativeElement, 'transform', `translateY(${168 * progress}px)`);
    }
  }

  changeAnimationToProgress(progress: number): Promise<any> {
    console.log(`set progress from ${this.currentProgress * 168} to ${progress * 168}`);
    return new Promise(resolve => {
      const animation = this.builder.build([
        style({ transform: `translateY(${this.currentProgress * 168}px)` }),
        animate('85ms ease-in', style({ transform: `translateY(${progress * 168}px)` }))
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
  }

  moveBack() {
    const animation = this.builder.build([
      style({ transform: `translateY(${this.currentProgress * 168}px)` }),
      animate('85ms ease-in', style({ transform: 'translateY(0)' }))
    ]);

    const player = animation.create(this.spinner.element.nativeElement);
    player.play();
    player.onDone(() => {
      this.setPullAnimationProgress(0);
      this.spinner.visible = false;
      player.destroy();
    });

  }


}
