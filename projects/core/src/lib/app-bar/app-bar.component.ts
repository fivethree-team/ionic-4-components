import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { fromEvent, timer } from 'rxjs';
import { first, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'fiv-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
  animations: [
    trigger('appBarAnim', [
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 0.4 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition('* => void', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0.4 }))
      ])
    ]),
    trigger('delayAnim', [
      transition('void => *', [
        style({ opacity: 0.4 }),
        animate('180ms 175ms ease-out', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('180ms 175ms ease-in', style({ opacity: 0.4 }))
      ])
    ]),
    trigger('fullBarAnim', [
      transition('void => *', [
        style({ opacity: 0.4 }),
        animate('80ms 335ms ease-out', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('80ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('fabAnim', [
      transition('left => void', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('175ms ease-in', style({ transform: 'scale(0)', opacity: 0.4 }))
      ]),
      transition('right => void', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('175ms ease-in', style({ transform: 'scale(0)', opacity: 0.4 }))
      ]),
      transition('middle => void', [
        style({ left: '50%', transform: 'scale(1) translateX(-50%)', opacity: 1 }),
        animate('175ms ease-in', style({ left: '50%', transform: 'scale(0) translateX(-72px)', opacity: 0.0 }))
      ]),
      transition('void => left', [
        style({ left: '24px', transform: 'scale(0)', opacity: 0.8 }),
        animate('175ms 40ms ease-out', style({ left: '24px', transform: 'scale(1)', opacity: 1 }))
      ]),
      transition('void => right', [
        style({ left: 'calc(100% - 80px)', transform: 'scale(0)', opacity: 0.8 }),
        animate('175ms 40ms  ease-out', style({ left: 'calc(100% - 80px)', transform: 'scale(1)', opacity: 1 }))
      ]),
      transition('void => middle', [
        style({ left: '50%', transform: 'translateX(-50%) scale(0)', opacity: 0.8 }),
        animate('175ms 40ms  ease-out', style({ left: '50%', transform: 'translateX(-50%) scale(1)', opacity: 1 }))
      ]),
      state('left', style({ left: '24px', transform: 'unset' })),
      state('right', style({ left: 'calc(100% - 80px)', transform: 'unset' })),
      state('middle', style({ left: '50%', transform: 'translateX(-50%)' }))
    ]),
    trigger('fabScrollAnim', [
      transition('scroll => normal', [
        animate('125ms ease-out', style({ top: '-50%' }))
      ]),
      transition('normal => scroll', [
        animate('175ms 175ms ease-in', style({ top: '-16px' }))
      ]),

      state('scroll', style({ top: '-16px' })),
      state('normal', style({ top: '-50%' })),
    ]),
    trigger('cutoutAnim', [
      transition('left => void', [
        style({ transform: 'scaleY(1)', opacity: 1 }),
        animate('220ms 10ms ease', style({ transform: 'scaleY(0)', opacity: 0 }))
      ]),
      transition('right => void', [
        style({ transform: 'scaleY(1)', opacity: 1 }),
        animate('220ms 100ms ease', style({ transform: 'scaleY(0)', opacity: 0 }))
      ]),
      transition('middle => void', [
        style({ transform: 'scaleY(1) translateX(-50%)', opacity: 1 }),
        animate('220ms 100ms ease', style({ transform: 'scaleY(0) translateX(-50%)', opacity: 0 }))
      ]),
      transition('void => left', [
        style({ left: '24px', transform: 'scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
        animate('220ms ease', style({
          left: '16px', transform: 'scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333'
        }))
      ]),
      transition('void => right', [
        style({ left: 'calc(100% - 88px)', transform: 'scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
        animate('220ms ease',
          style({ left: 'calc(100% - 88px)', transform: 'scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333' }))
      ]),
      transition('void => middle', [
        style({ left: '50%', transform: 'translateX(-50%) scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
        animate('220ms ease',
          style({ left: '50%', transform: 'translateX(-50%) scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333' }))
      ]),
      state('left', style({ left: '16px', transform: 'unset' })),
      state('right', style({ left: 'calc(100% - 88px)', transform: 'unset' })),
      state('middle', style({ left: '50%', transform: 'translateX(-50%)' }))
    ])
  ]
})
export class AppBarComponent implements OnInit {

  @Input() hidden = false;
  @Input() fabLeft = true;
  @Input() fabRight = false;
  @Input() fabVisible = true;
  @Input() hideOnScroll = true;
  @Input() fabIcon = 'md-add';
  currentDeltaY = 0;
  @ViewChild('shape') toolbar: ElementRef;

  @Output() fivFabClick: EventEmitter<AppBarComponent> = new EventEmitter();
  @Output() fivFabHide: EventEmitter<any> = new EventEmitter();
  @Output() fivFabShow: EventEmitter<any> = new EventEmitter();
  @Output() fivAppBarShow: EventEmitter<any> = new EventEmitter();
  @Output() fivAppBarHide: EventEmitter<any> = new EventEmitter();

  constructor(public el: ElementRef) {

  }

  ngOnInit() {
    const content = this.el.nativeElement.closest('ion-content');
    fromEvent(content, 'ionScroll').subscribe(event => this.ionScroll(event));
    fromEvent(content, 'ionScrollStart').subscribe(event => console.log(event));
    fromEvent(content, 'ionScrollEnd').subscribe(event => this.ionScrollEnd(event));
  }

  ionScroll(event) {
    console.log('scroll', event, this.hideOnScroll);
    if (!this.hideOnScroll) {
      console.log('#####');
      return;
    }
    if (event.detail.deltaY) {
      this.currentDeltaY = event.detail.deltaY;
      console.log(this.currentDeltaY, this.currentDeltaY > 0);
    }
    this.hidden = this.currentDeltaY > 0;
  }

  onFabClick() {
    this.fivFabClick.emit(this);
  }

  ionScrollStart(event) {

  }

  ionScrollEnd(event) {

  }

  hideFab(): Promise<AppBarComponent> {
    this.fabVisible = false;
    return new Promise<AppBarComponent>(resolve => {
      this.fivFabHide.pipe(
        tap((res => console.log(res))),
        filter((event: any) => event.toState === 'void'),
        first()
      ).subscribe(() => {
        console.log('hide fab done', this);
        resolve(this);
      });
    });
  }

  showFab(): Promise<AppBarComponent> {
    this.fabVisible = true;
    return new Promise<AppBarComponent>(resolve => {
      this.fivFabShow.pipe(
        filter((event: any) => event.fromState === 'void'),
        first()
      ).subscribe(() => {
        resolve(this);
      });
    });
  }

  hideBar(): Promise<AppBarComponent> {
    this.hidden = true;
    return new Promise<AppBarComponent>(resolve => {
      this.fivAppBarHide.pipe(
        tap((res => console.log(res))),
        filter((event: any) => event.toState === 'void'),
        first()
      ).subscribe(() => {
        console.log('hide fab done', this);
        resolve(this);
      });
    });
  }

  showBar(): Promise<AppBarComponent> {
    this.hidden = false;
    return new Promise<AppBarComponent>(resolve => {
      this.fivAppBarShow.pipe(
        filter((event: any) => event.fromState === 'void'),
        first()
      ).subscribe(() => {
        resolve(this);
      });
    });
  }

  onFabAnimStart(event) {
    console.log(event);
  }

  onFabAnimDone(event) {
    console.log(event.fromState + ' to ' + event.toState);
    if (event.fromState === 'void') {
      this.fivFabShow.emit(event);
    } else {
      this.fivFabHide.emit(event);
    }
  }

  transitionLeft() {
    this.fabRight = false;
    this.fabLeft = true;
    return timer(425).toPromise();

  }

  transitionRight() {
    this.fabRight = true;
    this.fabLeft = false;
    return timer(425).toPromise();
  }

  transitionMiddle() {
    this.fabRight = false;
    this.fabLeft = false;
    return timer(425).toPromise();
  }

  cutOutTransitionDone() {
    this.fabVisible = true;
  }

  onAppBarAnimDone(event) {
    console.log(event.fromState + ' to ' + event.toState);
    if (event.fromState === 'void') {
      this.fivAppBarShow.emit(event);
    } else {
      this.fivAppBarHide.emit(event);
    }
  }

}
