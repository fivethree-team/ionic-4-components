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
  ElementRef,
  OnDestroy
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
  PopoverVerticalAlign,
  PopoverArrowPositioning
} from './popover.types';
import { after } from '@fivethree/ngx-rxjs-animations';

@Component({
  selector: 'fiv-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FivPopover implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(FivOverlay, { static: true }) overlay: FivOverlay;
  @ViewChild('animation', { static: false }) animationContainer: ElementRef;

  @Input() width: number;
  @Input() height: number;
  @Input() arrow = false;
  @Input() arrowWidth = 24;
  @Input() arrowHeight: number = this.arrowWidth / 1.6;
  @Input() arrowPosition: PopoverArrowPositioning = 'auto';
  @Input() backdrop = true;
  @Input() overlaysTarget = true;
  @Input() closeOnNavigation = true;
  @Input() scrollToTarget = false;
  @Input() scrollSpeed = 100;
  @Input() position: PopoverPositioning = 'auto';
  @Input() classes: string[] = [];
  @Input() viewportOnly = true;

  _position: PopoverPosition;
  hidden = false;
  onDestroy$ = new Subject();
  onClose$ = new Subject();

  @Input() inDuration = 200;
  @Input() outDuration = 80;
  @Input() animationIn = (element: ElementRef) =>
    animIn(element, this._position, this.inDuration);
  @Input() animationOut = (element: ElementRef) =>
    animOut(element, this.outDuration);

  get styles() {
    if (!this._position) {
      return;
    }
    return this.dom.bypassSecurityTrustStyle(
      ` width: ${this.width ? this.width + 'px' : 'auto'}; 
        height: ${this.height ? this.height + 'px' : 'auto'}; 
        left: ${this.getContainerLeft()}px; 
        top: ${this.getContainerTop()}px;`
    );
  }

  get triangle() {
    const isHorizontal = ['left', 'right'].some(s => s === this.position);
    if (isHorizontal) {
      return `${this.arrowHeight},0 0,${this.arrowWidth / 2} ${
        this.arrowHeight
      },${this.arrowWidth}`;
    }
    return `0,${this.arrowHeight} ${this.arrowWidth / 2},0 ${this.arrowWidth},${
      this.arrowHeight
    }`;
  }

  get svgStyles() {
    if (!this._position) {
      return;
    }
    const isHorizontal = ['left', 'right'].some(s => s === this.position);
    const rotate =
      (this.position === 'auto' && this._position.vertical === 'bottom') ||
      this.position === 'left';
    return this.dom.bypassSecurityTrustStyle(
      `height: ${isHorizontal ? this.arrowWidth : this.arrowHeight}px; 
      width: ${isHorizontal ? this.arrowHeight : this.arrowWidth}px; 
      top: ${this.getArrowTop()}px; 
      left: ${this.getArrowLeft()}px;
      transform: rotateZ(${rotate ? 180 : 0}deg);`
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
      transform: rotateZ(${this._position.vertical === 'bottom' ? 180 : 0}deg);`
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

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  close() {
    this.animationOut(this.animationContainer)
      .pipe(
        after(() => {
          this.overlay.hide();
          this.onClose$.next();
        })
      )
      .subscribe();
  }

  private getPositionOfTarget(target: HTMLElement) {
    const rect = target.getBoundingClientRect();
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
      element = target.target as HTMLElement;
    } else if (target instanceof ElementRef) {
      element = target.nativeElement as HTMLElement;
    } else {
      return;
    }
    this.openTarget(element);
  }

  openTarget(target: HTMLElement) {
    const position = this.getPositionOfTarget(target);
    this.openAtPosition(target, position);
    this.watchResize(target);
    this.watchScroll(target);
  }

  private watchResize(target: HTMLElement) {
    if (!this.viewportOnly) {
      return;
    }
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
    if (!this.viewportOnly) {
      return;
    }
    if (this.content && !this.backdrop) {
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
    return from(this.inViewport(target.getBoundingClientRect())).pipe(
      tap(inViewport =>
        !inViewport ? (this.hidden = true) : (this.hidden = false)
      ),
      filter(inViewPort => this.overlay.open && inViewPort)
    );
  }

  private async openAtPosition(target: HTMLElement, position: PopoverPosition) {
    await this.scrollToPosition(target, position);
    this._position = position;
    this.overlay.show();
  }

  private async scrollToPosition(
    target: HTMLElement,
    position: PopoverPosition
  ) {
    if (this.content && this.scrollToTarget) {
      const isInViewport = await this.inViewport(
        target.getBoundingClientRect()
      );
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
  async inViewport(position: DOMRect | ClientRect) {
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
    // calculates the position of the popover without considering arrow and overlay offset
    const width = this.platform.width();
    const height = this.platform.height();

    const _left =
      this.position === 'right' ||
      (width / 2 > left && this.position !== 'left');
    const _right =
      this.position === 'left' ||
      (width / 2 <= left && this.position !== 'right');
    const _top =
      this.position === 'below' ||
      (height / 2 > top && this.position !== 'above');
    const _bottom =
      this.position === 'above' ||
      (height / 2 <= top && this.position !== 'below');

    // transform origin
    let horizontal: PopoverHorizontalAlign = 'left';
    let vertical: PopoverVerticalAlign = 'top';

    if (_left && _top) {
      // top left
      horizontal = 'left';
      vertical = 'top';
    } else if (_right && _bottom) {
      // bottom right
      left = right - this.width;
      top = bottom - this.height;
      horizontal = 'right';
      vertical = 'bottom';
    } else if (_right && _top) {
      // top right
      left = right - this.width;
      horizontal = 'right';
      vertical = 'top';
    } else if (_left && _bottom) {
      // bottom left
      top = bottom - this.height;
      horizontal = 'left';
      vertical = 'bottom';
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
    const isVert = ['auto', 'below', 'above'].some(s => s === this.position);
    if (isVert) {
      return this._position.vertical === 'top'
        ? -1 * this.arrowHeight
        : this.height;
    }
    if (this.arrowPosition === 'center') {
      return this.height / 2 - this.arrowWidth / 2;
    }
    return this._position.vertical === 'top'
      ? this._position.targetHeight / 2 - this.arrowHeight / 2
      : this.height - this.arrowHeight / 2 - this._position.targetHeight / 2;
  }

  private getArrowLeft() {
    const isHorizontal = ['left', 'right'].some(s => s === this.position);
    if (isHorizontal) {
      return this._position.horizontal === 'left'
        ? -1 * this.arrowHeight
        : this.width;
    }
    if (this.arrowPosition === 'center') {
      return this.width / 2 - this.arrowHeight / 2;
    }
    return this._position.horizontal === 'left'
      ? this._position.targetWidth / 2 - this.arrowWidth / 2
      : this.width - this.arrowWidth / 2 - this._position.targetWidth / 2;
  }

  private getContainerTop() {
    const isVert = ['auto', 'below', 'above'].some(s => s === this.position);
    const isTop = this._position.vertical === 'top';

    let offset = 0;
    if (this.arrow && isTop) {
      offset -= this.getVerticalArrowOffset();
    } else if (this.arrow && !isTop) {
      offset += this.getVerticalArrowOffset();
    }
    if (!isVert) {
      return this._position.top + offset;
    }
    if (!this.overlaysTarget && isTop) {
      offset += this._position.targetHeight;
    } else if (!this.overlaysTarget && !isTop) {
      offset -= this._position.targetHeight;
    }

    if (this.arrow && isTop) {
      offset += this.arrowHeight;
    } else if (this.arrow && !isTop) {
      offset -= this.arrowHeight;
    }
    return this._position.top + offset;
  }

  private getVerticalArrowOffset() {
    let offset = 0;
    const isHorizontal = ['left', 'right'].some(s => s === this.position);
    if (this.arrowPosition === 'center' && isHorizontal) {
      offset += this.height / 2 - this._position.targetHeight / 2;
    }
    return offset;
  }
  private getHorizontalArrowOffset() {
    let offset = 0;
    const isVertical = ['above', 'auto', 'below'].some(
      s => s === this.position
    );
    if (this.arrowPosition === 'center' && isVertical) {
      offset += this.width / 2 - this._position.targetWidth / 2;
    }
    return offset;
  }

  private getContainerLeft() {
    const isHorizontal = ['left', 'right'].some(s => s === this.position);
    const isLeft = this._position.horizontal === 'left';

    let offset = 0;
    if (this.arrow && isLeft) {
      offset -= this.getHorizontalArrowOffset();
    } else if (this.arrow && !isLeft) {
      offset += this.getHorizontalArrowOffset();
    }

    if (!isHorizontal) {
      return this._position.left + offset;
    }
    if (!this.overlaysTarget && isLeft) {
      offset += this._position.targetWidth;
    } else if (!this.overlaysTarget && !isLeft) {
      offset -= this._position.targetWidth;
    }

    if (this.arrow && isLeft) {
      offset += this.arrowHeight;
    } else if (this.arrow && !isLeft) {
      offset -= this.arrowHeight;
    }
    return this._position.left + offset;
  }
}
