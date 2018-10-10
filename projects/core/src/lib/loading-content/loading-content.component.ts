import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { fromEvent } from 'rxjs';
import { Refresher } from '@ionic/angular';

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
        style({ opacity: 0, transform: 'translateY(-80px)' }),
        animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('* => void', [
        style({ width: '112px' }),
        animate('125ms ease-out', style({ width: '40px' }))
      ]),
    ]
    ),
  ],
})
export class LoadingContentComponent implements OnInit {

  @Input() hintText = 'new posts';
  @Output() fivProgressChanged: EventEmitter<number> = new EventEmitter();
  @Output() fivRefresh: EventEmitter<LoadingContentComponent> = new EventEmitter();
  @ViewChild('spinner') spinner: ElementRef;
  @ViewChild('content') content: ElementRef;
  refresher: Refresher;
  isComplete = false;
  pulling = false;
  refreshing = false;
  spinnerVisible = true;
  translateY = 0;
  hintVisible = false;

  ngOnInit() {

    fromEvent(document, 'touchend').subscribe(res => {
      console.log('touchend', res);
      if (this.pulling && !this.refreshing) {
        this.changeProgress(0);
      }
    });

  }

  constructor() {
  }

  spinRefresher() {
    this.spinner.nativeElement.style.setProperty('transform', `translateY(168px)`);
    this.refreshing = true;
    this.pulling = false;
  }

  doRefresh(event) {
    this.spinner.nativeElement.style.setProperty('transition', `all 400ms ease`);
    this.spinRefresher();
    console.log('refresh here');
    setTimeout(() => {
      this.refresh();
      event.target.closeDuration = '400ms';
      this.refresher = event.target.complete();

    }, 400);
  }

  refresh() {
    this.fivRefresh.emit(this);
  }

  completeRefresh() {
    this.spinner.nativeElement.style.setProperty('transition', `0`);
    this.refreshing = false;
    this.isComplete = true;
  }

  onPull(event) {
    this.pulling = true;
    console.log(event);
    const progress = event.target.getProgress();
    if (progress <= 1) {
      this.fivProgressChanged.emit(progress);
      this.changeProgress(progress);

    }
  }

  onStart() {
    // this.changeProgress(0);
  }

  public changeProgress(progress: number) {
    this.translateY = 112 * progress;
    const translateY = this.translateY;
    console.log(`translateY(${translateY}px)`);
    // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
    this.spinner.nativeElement.style.setProperty('transform', `translateY(${translateY}px)`);
    // this.change.detectChanges();
  }

  fillAnimationDone(event) {

    if (event.toState === 'fill' && event.fromState === 'spinning') {
      console.log('fillAnim complete', event);

      this.spinnerVisible = false;
      this.isComplete = false;
    }
  }

  onSpinnerHidden(event) {
    if (event.fromState !== 'void') {
      console.log('refresh complete', event);
      this.spinnerVisible = true;
    }

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
      this.refresh();
      this.spinRefresher();

    }
  }

}
