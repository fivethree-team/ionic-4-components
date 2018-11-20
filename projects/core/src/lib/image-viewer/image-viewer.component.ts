import { SafeUrl } from '@angular/platform-browser';
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
  ChangeDetectorRef
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription, merge, fromEvent } from 'rxjs';
import * as Hammer from 'hammerjs';
import { DomController, Platform } from '@ionic/angular';
import { flatMap, tap, takeWhile, filter, map } from 'rxjs/operators';

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
    trigger('imageEnter', [
      transition(':enter', [
        // tslint:disable-next-line:max-line-length
        style({ position: 'absolute', top: '{{top}}px', left: '{{left}}px', transform: 'translate(0,0)', height: '{{height}}px', width: '{{width}}px' }),
        // tslint:disable-next-line:max-line-length
        animate('150ms ease-out', style({ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', height: 'auto', width: '100%' }))
      ], { params: { top: '0px', left: '0px', height: '*', width: '*' } })
    ]),
    trigger('imageLeave', [
      transition(':leave', [
        style({ position: 'absolute', top: '{{panTop}}', left: '50%', transform: 'translate(-50%,-50%)', height: 'auto', width: '100%' }),
        // tslint:disable-next-line:max-line-length
        animate('225ms ease-in', style({ position: 'absolute', top: '{{top}}px', left: '{{left}}px', transform: 'translate(0,0)', height: '{{height}}px', width: '{{width}}px' })
        )
      ], { params: { top: '0px', left: '0px', height: '*', width: '*', panTop: '50%' } })
    ])
  ]
})
export class ImageViewerComponent implements OnInit {

  @ViewChild('thumbnail') thumbnail: ElementRef;
  @ViewChild('imageView') imageView: ElementRef;
  @Input() src: SafeUrl;
  componentRef: ComponentRef<ImageViewerComponent>;
  _isOpen = false;

  thumbnailPosition: { offsetTop: number, offsetLeft: number, height: number, width: number, panTop?: string };
  pinchSubscription: Subscription;
  scale = 1;
  top: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private domCtrl: DomController,
    private platform: Platform,
    private renderer: Renderer2,
    private change: ChangeDetectorRef,
    private injector: Injector) {
    this.top = this.platform.height() / 2;
  }

  ngOnInit() {
  }

  open(event) {
    console.log(event);

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

    this.componentRef.instance._isOpen = true;
    this.componentRef.instance.src = this.src;
    this.componentRef.instance.componentRef = this.componentRef;
    this.componentRef.instance.thumbnailPosition = this.getPosition(event);

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
    console.log('removing from', this.thumbnailPosition.panTop);
    this._isOpen = false;
  }

  detach(event) {
    if (event.toState === 'void') {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }

  onEnter(event) {
    if (event.fromState === 'void') {
      this.setupPan();
      this.setupPinch();
    }
  }

  setupPinch() {
    const hammer = new Hammer(this.imageView.nativeElement);
    hammer.get('pinch').set({ enable: true });

    fromEvent(hammer, 'pinchend')
      .subscribe((event: any) => {
        this.scale = Math.max(0, Math.min(this.scale * event.scale, 8));
        if (this.scale < 1) {
          this.setScale(1);
          this.scale = 1;
        }
      });

    fromEvent(hammer, 'pinch')
      .subscribe((event: any) => {
        this.transform(event.scale);
      });
  }

  setupPan() {
    // close pans
    const max_distance = 120;
    const hammer = new Hammer(this.imageView.nativeElement);
    hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_ALL });
    const panstart = fromEvent(hammer, 'panstart');

    const panend = fromEvent(hammer, 'panend');

    const pandown = fromEvent(hammer, 'pandown');
    const panup = fromEvent(hammer, 'panup');

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

    merge(up, down)
      .subscribe((res: any) => {
        this.setTop(this.calculateTop(res));
      });


    panend
      .pipe(
        tap(console.log),
        filter((event: any) => this.scale === 1 && event.distance > max_distance),
      )
      .subscribe(() => { this.remove(); });

    panend
      .pipe(
        filter((event: any) => this.scale === 1 && event.distance <= max_distance)
      )
      .subscribe(() => this.setTop(this.platform.height() / 2));
  }

  transform(scale) {
    const s = Math.max(0, Math.min(this.scale * scale, 8));
    this.setScale(s);

  }

  setScale(scale) {
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

  calculateTop(event: any) {
    const max_distance = 120;
    const distance = event.distance;
    const progress = Math.abs(100 * distance / max_distance);
    // tslint:disable-next-line:max-line-length
    console.log(`[calculateTop]: {top: ${this.platform.height() / 2 + distance}, distance: ${distance}, progress: ${progress}}, type: ${event.type}`);
    return this.platform.height() / 2 + distance;
  }
}
