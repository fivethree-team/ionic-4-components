import { SafeUrl, SafeStyle, DomSanitizer } from '@angular/platform-browser';
import {
  Component, OnInit, Input, ViewEncapsulation,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { trigger, transition, style, animate, AnimationBuilder } from '@angular/animations';
import { Subscription, merge, fromEvent } from 'rxjs';
import * as Hammer from 'hammerjs';
import { DomController, Platform } from '@ionic/angular';
import { flatMap, tap, takeWhile, filter, map, debounce, debounceTime, takeUntil, race, take, skipWhile } from 'rxjs/operators';

@Component({
  selector: 'fiv-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('backdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        // tslint:disable-next-line:max-line-length
        animate('75ms 125ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        // tslint:disable-next-line:max-line-length
        animate('100ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('125ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('imageEnter', [
      transition(':enter', [
        // tslint:disable-next-line:max-line-length
        style({ position: 'absolute', top: '{{top}}px', left: '{{left}}px', transform: 'translate(0,0)', height: '{{height}}px', width: '{{width}}px' }),
        // tslint:disable-next-line:max-line-length
        animate('150ms', style({ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', height: 'auto', width: '100%' }))
      ], { params: { top: '0px', left: '0px', height: '*', width: '*' } })
    ]),
    trigger('imageLeave', [
      transition(':leave', [
        style({ position: 'absolute', top: '{{panTop}}', left: '50%', transform: 'translate(-50%,-50%)', height: 'auto', width: '100%' }),
        // tslint:disable-next-line:max-line-length
        animate('225ms', style({ position: 'absolute', top: '{{top}}px', left: '{{left}}px', transform: 'translate(0,0)', height: '{{height}}px', width: '{{width}}px' })
        )
      ], { params: { top: '0px', left: '0px', height: '*', width: '*', panTop: '50%' } })
    ])
  ]
})
export class ImageViewerComponent implements OnInit {

  @HostBinding('style')
  get myStyle(): SafeStyle {
    if (this._isOpen) {
      return this.sanitizer.bypassSecurityTrustStyle(`height: 100%; width: 100%; display: block;`);
    }
    return this.sanitizer.bypassSecurityTrustStyle(`height: ${this.height}px; width: ${this.width}px; display: block;`);
  }

  @ViewChild('thumbnail') thumbnail: ElementRef;
  @ViewChild('imageView') imageView: ElementRef;
  @ViewChild('footer') footer: ElementRef;
  @Input() src: SafeUrl;
  @Input() height = 100;
  @Input() width = 100;
  @Input() actions: ImageViewerAction[] = [];
  @Output() fivClose = new EventEmitter();
  componentRef: ComponentRef<ImageViewerComponent>;
  _isOpen = false;
  _controlsVisible = true;
  thumbnailVisible = true;

  thumbnailPosition: { offsetTop: number, offsetLeft: number, height: number, width: number, panTop?: string };
  scale = 1;
  top: number;
  left: number;
  pinchend: Subscription;
  pinch: Subscription;
  verticalPan: Subscription;
  panRemove: Subscription;
  panReset: Subscription;
  doubletap: Subscription;
  singletap: Subscription;
  closeSub: Subscription;
  pinchPan: Subscription;

  singletapHammer;
  doubleTapHammer;
  pinchHammer;
  panHammer;


  pinchCenter: { x: number, y: number };

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private domCtrl: DomController,
    private platform: Platform,
    private renderer: Renderer2,
    private change: ChangeDetectorRef,
    private animation: AnimationBuilder,
    private sanitizer: DomSanitizer,
    private injector: Injector) {
  }

  ngOnInit() {
  }

  open(event) {
    this.appendComponentToBody(event);
  }

  getPosition(event) {
    let offsetLeft = 0;
    let offsetTop = 0;

    let el = event.srcElement.parentElement;

    while (el) {
      offsetLeft += el.offsetLeft;
      offsetTop += el.offsetTop;
      el = el.parentElement;
    }
    return { offsetTop: offsetTop, offsetLeft: offsetLeft, height: event.srcElement.clientHeight, width: event.srcElement.clientWidth };
  }

  appendComponentToBody(event) {
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ImageViewerComponent)
      .create(this.injector);

    this.thumbnailVisible = false;
    this.componentRef.instance._isOpen = true;
    this.componentRef.instance.src = this.src;
    this.componentRef.instance.componentRef = this.componentRef;
    this.componentRef.instance.thumbnailPosition = this.getPosition(event);
    this.componentRef.instance.actions = this.actions;

    this.closeSub = this.componentRef.instance.fivClose
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.closeSub.unsubscribe();
        this.thumbnailVisible = true;
      });

    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

  }

  remove() {
    if (!this.thumbnailPosition.panTop) {
      this.thumbnailPosition.panTop = this.top + 'px';
      this.change.detectChanges();
    }
    this._isOpen = false;
  }
  clearSubscriptions(): any {
    this.panRemove.unsubscribe();
    this.panReset.unsubscribe();
    this.verticalPan.unsubscribe();
    this.pinch.unsubscribe();
    this.pinchend.unsubscribe();
    this.singletap.unsubscribe();
    this.doubletap.unsubscribe();
    this.pinchPan.unsubscribe();
  }

  removeHammerManager(): any {
    this.singletapHammer.destroy();
    this.doubleTapHammer.destroy();
    this.pinchHammer.destroy();
    this.panHammer.destroy();
  }

  detach(event) {
    if (event.toState === 'void') {
      this.appRef.detachView(this.componentRef.hostView);
      this.clearSubscriptions();
      this.removeHammerManager();
      this.fivClose.emit();
      this.componentRef.destroy();
    }
  }

  onEnter(event) {
    if (event.fromState === 'void') {
      // setup variables in fullscreen
      this.top = this.platform.height() / 2;
      this.left = 0;
      this.pinchCenter = { x: this.platform.width() / 2, y: this.platform.height() / 2 };
      this.setupClicks();
      this.setupPan();
      this.setupPinch();
    }
  }
  setupClicks(): any {
    this.doubleTapHammer = new Hammer(this.imageView.nativeElement);
    this.doubleTapHammer.get('tap').set({ enable: true, taps: 2 });

    this.singletapHammer = new Hammer(this.imageView.nativeElement);
    this.singletapHammer.get('tap').set({ enable: true, taps: 1 });

    const doubletap$ = fromEvent(this.doubleTapHammer, 'tap');
    const singletap$ = fromEvent(this.singletapHammer, 'tap')
      .pipe(
        debounceTime(300),
        race(doubletap$),
        filter((event: any) => event.tapCount === 1)
      );

    this.doubletap = doubletap$.subscribe(res => this.handleDoubleTap(res));
    this.singletap = singletap$.subscribe(res => this.handleSingleTap());
  }

  setupPinch() {
    this.pinchHammer = new Hammer(this.imageView.nativeElement);
    this.pinchHammer.get('pinch').set({ enable: true });

    const pinchend$ = fromEvent(this.pinchHammer, 'pinchend');
    this.pinchend = pinchend$.subscribe((event: any) => {

      this.scale = Math.max(0, Math.min(this.scale * event.scale, 8));
      if (this.scale < 1) {
        this.setScale(1);
        this.scale = 1;
      }
    });

    const pinch$ = fromEvent(this.pinchHammer, 'pinch');
    this.pinch = pinch$.subscribe((event: any) => {
      console.log('pinch', event.scale);
      this.transform(event.scale);
    });
  }

  setupPan() {
    // close pans
    const max_distance = 120;
    this.panHammer = new Hammer(this.imageView.nativeElement);
    this.panHammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_ALL });
    const panstart = fromEvent(this.panHammer, 'panstart');

    const panend = fromEvent(this.panHammer, 'panend');
    const panmove = fromEvent(this.panHammer, 'panmove');

    const pandown = fromEvent(this.panHammer, 'pandown');
    const panup = fromEvent(this.panHammer, 'panup');

    const down = panstart
      .pipe(
        flatMap(() => pandown.pipe(
          filter(() => this.scale === 1)))
      );

    const up = panstart
      .pipe(
        flatMap(() => panup.pipe(
          filter(() => this.scale === 1)))
      );

    const verticalPan$ = merge(up, down);

    this.verticalPan = verticalPan$.subscribe((res: any) => {
      this.setBottom(this.calculateBottom(res));
      this.setTop(this.calculateTop(res));
    });

    const pinchPanMove = panmove
      .pipe(
        filter(() => this.scale > 1)
      );

    const pinchPan$ = panstart
      .pipe(
        tap((event: any) => this.pinchCenter = event.center),
        flatMap(() => pinchPanMove
      ));

    this.pinchPan = pinchPan$
      .subscribe((res: any) => {
        this.move(res);
      });


    this.panRemove = panend
      .pipe(
        filter((event: any) => this.scale === 1 && event.distance > max_distance),
      )
      .subscribe(() => { this.remove(); });

    this.panReset = panend
      .pipe(
        filter((event: any) => this.scale === 1 && event.distance <= max_distance)
      )
      .subscribe((event) => {
        this.resetPan();
        this.resetFooter(this.calculateBottom(event));
      });
  }

  move(event: any) {
    if (!this.pinchCenter) {
      this.pinchCenter = event.center;
    }
    const moveV = event.center.y - this.pinchCenter.y;
    const moveH = event.center.x - this.pinchCenter.x;
    const newTop = this.top + moveV;
    const newLeft = this.left + moveH;
    console.log(`
    lastTop: ${this.top}, lastLeft: ${this.left}, moveV: ${moveV}, moveH: ${moveH}, newTop: ${newTop}, newLeft: ${newLeft}
    `);
    this.pinchCenter = event.center;
    this.setTop(newTop);
    this.setLeft(newLeft);
  }

  setBottom(bottom: number) {
    if (this._controlsVisible) {
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.footer.nativeElement, 'bottom', `-${bottom}px`);
      });
    }
  }

  calculatePanProgress(event: any): number {
    const max_distance = 120;
    return Math.abs(100 * event.distance / max_distance);
  }

  transform(scale) {
    const s = Math.max(0, Math.min(this.scale * scale, 8));
    this.setScale(s, true);
  }

  calculateBottom(event) {
    const progress = this.calculatePanProgress(event);
    return event.distance * progress / 100;
  }

  setScale(scale, skip?) {
    if (!skip) {
      this.scale = scale;
    }
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.imageView.nativeElement, 'transform', `translateY(-50%) scale(${scale})`);
    });
  }

  setTop(top) {
    this.top = top;
    this.thumbnailPosition.panTop = this.top + 'px';
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.imageView.nativeElement, 'top', `${top}px`);
    });
  }

  setLeft(left) {
    this.left = left;
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.imageView.nativeElement, 'left', `${left}px`);
    });
  }

  calculateTop(event: any) {
    const distance = event.distance;
    // const progress = Math.abs(100 * distance / max_distance);
    return this.platform.height() / 2 + distance;
  }

  resetPan() {
    const reset = this.animation.build([
      style({ top: `${this.top}px` }),
      animate('150ms ease', style({ top: `${this.platform.height() / 2}px` }))
    ]);

    const animation = reset.create(this.imageView.nativeElement);
    animation.play();
    animation.onDone(() => {
      animation.destroy();
      this.setTop(this.platform.height() / 2);
    });
  }

  resetFooter(start) {
    const reset = this.animation.build([
      style({ bottom: `-${start}px` }),
      animate('150ms ease', style({ bottom: `0px` }))
    ]);

    const animation = reset.create(this.footer.nativeElement);
    animation.play();
    animation.onDone(() => {
      animation.destroy();
      this.setBottom(0);
    });
  }

  animateScale(toScale: number, toPosition: { x: number, y: number }) {
    // const deltaX = this.pinchCenter.x - toPosition.x;
    // const deltaY = this.pinchCenter.y - toPosition.y;
    const deltaX = (this.pinchCenter.x - toPosition.x) * toScale;
    const deltaY = (this.pinchCenter.y - toPosition.y) * toScale;
    const newLeft = this.left + deltaX / toScale;
    const newTop = this.top + deltaY / toScale;
    const scale = this.animation.build([
      style({ transform: `translateY(-50%) scale(${this.scale})`, top: `${this.top}px`, left: `${this.left}px` }),
      animate('200ms ease', style({ transform: `translateY(-50%) scale(${toScale})`, top: `${newTop}px`, left: `${newLeft}px` }))
    ]);
    const animation = scale.create(this.imageView.nativeElement);
    animation.play();
    animation.onDone(() => {
      animation.destroy();
      this.setScale(toScale);
      this.setTop(newTop);
      this.setLeft(newLeft);
      this.pinchCenter = toPosition;
    });
  }

  resetScale() {
    const t = this.platform.height() / 2;
    const scale = this.animation.build([
      style({ transform: `translateY(-50%) scale(${this.scale})`, top: `${this.top}px`, left: `${this.left}px` }),
      animate('200ms ease', style({ transform: `translateY(-50%) scale(${1})`, top: `${t}px`, left: `${0}px` }))
    ]);
    const animation = scale.create(this.imageView.nativeElement);
    animation.play();
    animation.onDone(() => {
      animation.destroy();
      this.setScale(1);
      this.setTop(t);
      this.setLeft(0);
      this.pinchCenter = this.getAbsoluteCenter();
    });
  }

  handleSingleTap() {
    this._controlsVisible = !this._controlsVisible;
  }

  handleDoubleTap(event) {
    if (this.scale === 1) {
      this.animateScale(2, event.center);
    } else {
      this.resetScale();
    }

  }

  getCurrentImageHeight() {
    return this.imageView.nativeElement.clientHeight * this.scale;
  }
  getCurrentImageWidth() {
    return this.imageView.nativeElement.clientWidth * this.scale;
  }

  getAbsoluteCenter() {
    return { x: this.platform.width() / 2, y: this.platform.height() / 2 };
  }
}



export interface ImageViewerAction {
  name?: string;
  icon?: string;
}
