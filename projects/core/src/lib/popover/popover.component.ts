import { animIn, animOut } from './popover.animations';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ViewEncapsulation,
  Host,
  Optional,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { FivOverlay } from '../overlay/overlay.component';
import { Platform, IonContent } from '@ionic/angular';
import { fromEvent, Subject, merge, from } from 'rxjs';
import {
  tap,
  takeUntil,
  map,
  throttleTime,
  filter,
  flatMap
} from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import {
  PopoverPositioning,
  PopoverPosition,
  PopoverHorizontalAlign,
  PopoverVerticalAlign
} from './popover.types';
import { after } from '@fivethree/ngx-rxjs-animations';

@Component({
  selector: 'fiv-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FivPopover implements OnInit, AfterViewInit {
  @ViewChild(FivOverlay, { static: false }) overlay: FivOverlay;
  @ViewChild('animation', { static: false }) animationContainer: ElementRef;

  @Input() width: number;
  @Input() height: number;
  @Input() arrow = false;
  @Input() arrowWidth = 24;
  @Input() arrowHeight: number = this.arrowWidth / 1.6;
  @Input() backdrop = true;
  @Input() overlaysTarget = true;
  @Input() closeOnNavigation = true;
  @Input() scrollToTarget = false;
  @Input() scrollSpeed = 100;
  @Input() position: PopoverPositioning = 'auto';
  @Input() classes: string[] = [];

  @Input() inDuration = 200;
  @Input() outDuration = 80;
  @Input() animationIn = (element: ElementRef) =>
    animIn(element, this._position, this.inDuration);
  @Input() animationOut = (element: ElementRef) =>
    animOut(element, this.outDuration);

  _position: PopoverPosition;
  hidden: boolean = false;
  onDestroy$ = new Subject();

  get containerStyles() {
    if (!this._position) {
      return;
    }
    return this.dom.bypassSecurityTrustStyle(
      `margin-top: ${this.getContainerMargin()}px;
        width: ${this.width ? this.width + 'px' : 'auto'}; 
        height: ${this.height ? this.height + 'px' : 'auto'}; 
        left: ${this._position.left}px; 
        top: ${this.getContainerTop()}px;`
    );
  }

  get triangle() {
    return `0,${this.arrowHeight} ${this.arrowWidth / 2},0 ${this.arrowWidth},${
      this.arrowHeight
    }`;
  }

  get svgStyles() {
    if (!this._position) {
      return;
    }
    return this.dom.bypassSecurityTrustStyle(
      `height: ${this.arrowHeight}px; 
      width: ${this.arrowWidth}px; 
      top: ${this.getArrowTop()}px; 
      left: ${this.getArrowLeft()}px;
      transform: rotateZ(${this._position.vertical === 'top' ? 180 : 0}deg);`
    );
  }

  get animationStyles() {
    if (!this._position) {
      return;
    }
    return this.dom.bypassSecurityTrustStyle(
      `height: ${this.arrowHeight}px; 
      width: ${this.arrowWidth}px; 
      top: ${this.getArrowTop()}px; 
      left: ${this.getArrowLeft()}px;
      transform: rotateZ(${this._position.vertical === 'top' ? 180 : 0}deg);`
    );
  }

  constructor(
    private platform: Platform,
    @Host() @Optional() private content: IonContent,
    private dom: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter<NavigationStart>(event => event instanceof NavigationStart),
        filter(() => this.closeOnNavigation && this.overlay.open),
        tap(() => this.close()),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {}

  close() {
    this.animationOut(this.animationContainer)
      .pipe(
        after(() => {
          this.overlay.hide();
          this.onDestroy$.next();
        })
      )
      .subscribe();
  }

  private getPositionOfTarget(target: HTMLElement) {
    const rect = target.getBoundingClientRect();
    console.log(rect);
    return this.calculcatePositioning(
      rect.top,
      rect.left,
      rect.bottom,
      rect.right,
      rect.height,
      rect.width
    );
  }

  open(target: MouseEvent | ElementRef) {
    let element;
    if (target instanceof MouseEvent) {
      element = event.target as HTMLElement;
    } else if (target instanceof ElementRef) {
      element = target.nativeElement as HTMLElement;
    } else {
      return;
    }
    this.openTarget(element);
  }

  openTarget(target: HTMLElement) {
    const position = this.getPositionOfTarget(target);
    this.openAtPosition(position);
    this.watchResize(target);
    this.watchScroll(target);
  }

  private watchResize(target: HTMLElement) {
    fromEvent(window, 'resize')
      .pipe(
        flatMap(() => this.filterInViewport(target)),
        throttleTime(50),
        map(() => this.getPositionOfTarget(target)),
        tap(pos => (this._position = pos)),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  private watchScroll(target: HTMLElement) {
    if (this.content) {
      this.content.scrollEvents = true;
      merge(
        fromEvent(window, 'mousewheel'),
        fromEvent(window, 'touchmove'),
        this.content.ionScroll
      )
        .pipe(
          flatMap(() => this.filterInViewport(target)),
          map(() => this.getPositionOfTarget(target)),
          tap(pos => (this._position = pos)),
          takeUntil(this.onDestroy$)
        )
        .subscribe();
    }
  }

  private filterInViewport(target: HTMLElement) {
    return from(this.inViewport(this.getPositionOfTarget(target))).pipe(
      tap(inViewport =>
        !inViewport ? (this.hidden = true) : (this.hidden = false)
      ),
      filter(inViewPort => this.overlay.open && inViewPort)
    );
  }

  private async openAtPosition(position: PopoverPosition) {
    console.log('open at position', position);
    await this.scrollToPosition(position);
    this._position = position;
    this.overlay.show();
  }

  private async scrollToPosition(position: PopoverPosition) {
    if (this.content && this.scrollToTarget) {
      const isInViewport = await this.inViewport(position);
      if (isInViewport) {
        return;
      }
      await this.content.scrollToPoint(
        position.left,
        position.top,
        this.scrollSpeed
      );
    }
  }
  async inViewport(position: PopoverPosition) {
    const height = this.platform.height();
    const width = this.platform.width();

    return (
      position.top <= height &&
      position.bottom >= 0 &&
      position.left < width &&
      position.right > 0
    );
  }

  private calculcatePositioning(
    top: number,
    left: number,
    bottom: number,
    right: number,
    targetHeight: number,
    targetWidth: number
  ): PopoverPosition {
    const width = this.platform.width();
    const height = this.platform.height();

    // how the popover is spread out
    let horizontal: PopoverHorizontalAlign = 'left';
    let vertical: PopoverVerticalAlign = 'top';
    const _left = width / 2 > left;
    const _right = width / 2 <= left;
    const _top = height / 2 > top;
    const _bottom = height / 2 <= top;

    if (_left && _top) {
      // top left
      horizontal = 'right';
      vertical = 'bottom';
    } else if (_right && _bottom) {
      // bottom right
      left = right - this.width;
      top = bottom - this.height;
      horizontal = 'left';
      vertical = 'top';
    } else if (_right && _top) {
      // top right
      left = right - this.width;
      horizontal = 'left';
      vertical = 'bottom';
    } else if (_left && _bottom) {
      // bottom left
      console.log('bottom left', bottom, this.height, bottom - this.height);
      top = bottom - this.height;
      horizontal = 'right';
      vertical = 'top';
    }

    // alter position when not overlaying click target
    if (!this.overlaysTarget) {
      height / 2 > top ? (top += targetHeight) : (top -= targetHeight);
    }

    return {
      top,
      left,
      bottom,
      right,
      targetHeight,
      targetWidth,
      horizontal,
      vertical
    };
  }

  private getArrowTop() {
    return this._position.vertical === 'bottom'
      ? -1 * this.arrowHeight
      : this.height;
  }

  private getArrowLeft() {
    return this._position.horizontal === 'right'
      ? this._position.targetWidth / 2 - this.arrowWidth / 2
      : this.width - this.arrowWidth / 2 - this._position.targetWidth / 2;
  }

  private getContainerMargin() {
    return this.arrow &&
      !this.overlaysTarget &&
      this._position.vertical === 'bottom'
      ? this.arrowHeight
      : 0;
  }

  private getContainerTop() {
    return this.arrow &&
      !this.overlaysTarget &&
      this._position.vertical === 'top'
      ? this._position.top - this.arrowHeight
      : this._position.top;
  }
}
