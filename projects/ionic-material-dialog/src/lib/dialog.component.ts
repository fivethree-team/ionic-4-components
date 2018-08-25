import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import Hammer from 'hammerjs';
import { fromEvent } from 'rxjs';
import { throttleTime, reduce } from 'rxjs/operators';
import { Subscription } from 'rxjs';


export type animation = "slideIn" | "fadeIn"
export type verticalAlign = "top" | "bottom" | "center"

@Component({
  selector: 'gg-dialog',
  template: `
  <div #backdrop class="gg-backdrop" [@backdropAnim] (@backdropAnim.done)="backdropAnimDone($event)" (click)="backdropClose? hideDialog() : false" *ngIf="animationState !== 'hidden' && backdrop">
  </div>
  <div #card [@dialogAnim]="animationState" (@dialogAnim.done)="onDialogAnimationDone($event)" mode="md" class="gg-dialog" [ngClass]="{'floating': isFloating(),'fullscreen':fullscreen,'rounded-top': roundedTop(),'rounded-bottom':roundedBottom()}">
  <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['dialog.scss'],
  animations: [
    trigger('dialogAnim', [
      transition('hidden => slideIn-top', [
        style({
          transform: 'translateY(-100%)'
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('hidden => slideIn-bottom', [
        style({
          transform: 'translateY(100%)'
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('hidden => fadeIn-bottom', [
        style({
          opacity: 0
        }),
        animate('360ms ease-out')
      ]),
      transition('hidden => fadeIn-top', [
        style({
          opacity: 0
        }),
        animate('360ms ease-out')
      ]),
      transition('hidden => fadeIn-center', [
        style({
          opacity: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }),
        animate('360ms ease-out')
      ]),
      transition('hidden => slideIn-center', [
        style({
          top: '50%',
          transform: 'translateY(-25%)',
          opacity: 0
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('slideIn-center => hidden', [
        animate('120ms ease-out', style({
          // top: '50%',
          // transform: 'translateY(+50%)',
          opacity: 0
        }))
      ]),
      transition('* => hidden', [
        animate('240ms ease-out')
      ]),
      state('hidden', style({
        display: 'none',
        opacity: '0',
      })
      ),
      state('slideIn-top', style({
        top: 0,
      })
      ),
      state('slideIn-bottom', style({
        bottom: 0
      })
      ),
      state('fadeIn-top', style({
        top: 0
      })
      ),
      state('fadeIn-bottom', style({
        bottom: 0
      })
      ),
      state('fadeIn-center', style({
        top: '50%',
        transform: 'translateY(-50%)',
        'margin-top': 0
      })
      ),
      state('slideIn-center', style({
        top: '50%',
        transform: 'translateY(-50%)',
        'margin-top': 0
      })
      ),
    ]), trigger('backdropAnim', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
      ]),
      transition('* => void', [
        animate('120ms 100ms cubic-bezier(0.32,1,0.23,1)'), style({
          opacity: 0
        }),
      ])
    ])],
})
export class DialogComponent implements OnInit {

  animationState = 'hidden'

  @Input() animation: animation = 'slideIn';
  @Input() verticalAlign: verticalAlign = 'bottom';
  @Input() floating: boolean = false;
  @Input() backdrop: boolean = false;
  @Input() fullscreen: boolean = false;
  @Input() rounded: boolean = false;
  @Input() backdropClose: boolean = true;
  @Input() swipeEnabled: boolean = true;

  @ViewChild('card') card: ElementRef;
  @ViewChild('backdrop') backdropElem: ElementRef;

  private panSubs: Subscription[] = [];

  constructor(private renderer: Renderer2, public change: ChangeDetectorRef) {

  }

  setupPan(elem: ElementRef, threshold: number) {

    if (!this.swipeEnabled) {
      return;
    }

    const hammer = new Hammer(elem);
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    const panup = fromEvent(hammer, 'panup')
      .pipe(
        throttleTime(2)
      )
      .subscribe(res => {
        console.log("panup", res);
        this.onSwipeUp(res, threshold);
      })

    const pandown = fromEvent(hammer, 'pandown')
      .pipe(
        throttleTime(2)
      )
      .subscribe(res => {
        console.log("pandown sub", res);
        this.onSwipeDown(res, threshold);
      })

    const panend = fromEvent(hammer, 'panend pancancel')
      .subscribe((res: any) => {
        if (res.distance < threshold) {
          this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(0px)`)
        }
      })

    this.panSubs.push(pandown, panup, panend);


  }

  ngOnInit() {
    console.log(this.card);
  }

  showDialog() {
    this.animationState = `${this.animation}-${this.verticalAlign}`;
  }

  hideDialog() {
    this.animationState = 'hidden';
    this.panSubs.forEach(sub => {
      sub.unsubscribe();
    })
  }

  isFloating(): boolean {
    return this.floating || (this.rounded && this.verticalAlign === 'center')
  }

  roundedTop(): boolean {
    return this.rounded && this.verticalAlign === 'top' && !this.floating
  }

  roundedBottom(): boolean {
    return this.rounded && this.verticalAlign === 'bottom' && !this.floating
  }

  onSwipeUp(event, threshold) {
    console.log(Math.exp(event.distance / 50));
    const velocity = 1 + Math.exp(event.distance / 50) / 50;

    if (this.verticalAlign === 'top') {
      this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(-${event.distance * velocity}px)`)
      if (event.distance > threshold) {
        console.log('swipe down happened');
        this.hideDialog();
      }
    }
  }

  onSwipeDown(event, threshold) {
    const velocity = 1 + Math.exp(event.distance / 50) / 50;
    console.log(velocity);
    if (this.verticalAlign === 'bottom' || this.verticalAlign === 'center') {
      this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(${event.distance * velocity}px)`)
      if (event.distance > threshold) {
        console.log('swipe down happened');
        this.hideDialog();
      }
    }

  }

  onDialogAnimationDone(event) {
    if (event.toState === 'hidden') {
      this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(0px)`)
    }
    if (event.fromState === 'hidden') {
      this.setupPan(this.card.nativeElement,58);
    }
  }

  backdropAnimDone(event) {
    console.log(this.backdropElem, event);
    if (event.fromState === 'void') {
      // this.change.detectChanges();
      console.log(this.backdropElem.nativeElement);
      this.setupPan(this.backdropElem.nativeElement, 112);
    }
  }

}
