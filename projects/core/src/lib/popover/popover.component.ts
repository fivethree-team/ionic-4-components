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
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { FivOverlay } from '../overlay/overlay.component';
import { Platform, IonContent } from '@ionic/angular';
import { ReplaySubject } from 'rxjs';

interface PopoverPosition {
  top: number;
  left: number;
  bottom: number;
  right: number;
  targetWidth: number;
  targetHeight: number;
  vertical: PopoverVerticalAlign;
  horizontal: PopoverHorizontalAlign;
}

export type PopoverHorizontalAlign = 'left' | 'right';
export type PopoverVerticalAlign = 'top' | 'bottom';
export type PopoverPositioning = 'auto' | 'above' | 'below' | 'left' | 'right';

@Component({
  selector: 'fiv-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FivPopover implements OnInit, AfterViewInit {
  @ViewChild(FivOverlay, { static: false }) overlay: FivOverlay;

  @Input() width: number;
  @Input() height: number;
  @Input() arrowWidth = 24;
  @Input() arrowHeight: number = this.arrowWidth / 1.6;
  @Input() overlaysTarget = true;
  @Input() scroll = true;
  @Input() scrollSpeed = 100;
  @Input() backdrop = true;
  @Input() arrow = false;
  @Input() position: PopoverPositioning = 'auto';

  @Output() afterInit = new ReplaySubject();

  _position: PopoverPosition;

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

  constructor(
    private platform: Platform,
    @Host() @Optional() private content: IonContent,
    private dom: DomSanitizer
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.afterInit.next(true);
  }

  close() {
    this.overlay.hide();
  }

  openClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const {
      top,
      left,
      bottom,
      right,
      height,
      width
    } = target.getBoundingClientRect();
    const position = this.calculcatePosition(
      top,
      left,
      bottom,
      right,
      height,
      width
    );
    this.openAtPosition(position);
  }

  openElementRef(element: ElementRef) {
    const target = element.nativeElement as HTMLElement;
    const rect = target.getBoundingClientRect();
    const position = this.calculcatePosition(
      rect.top,
      rect.left,
      rect.bottom,
      rect.right,
      rect.height,
      rect.width
    );
    this.openAtPosition(position);
  }

  openCoords(top: number, left: number) {
    const position = this.calculcatePosition(top, left, top, left, 0, 0);
    this.openAtPosition(position);
  }

  private async openAtPosition(position: PopoverPosition) {
    await this.scrollToPosition(position);
    this._position = position;
    this.overlay.show();
  }

  private async scrollToPosition(position: PopoverPosition) {
    if (this.content && this.scroll) {
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
    const scroll = await this.content.getScrollElement();
    const docViewBottom = scroll.scrollTop + height;
    const docViewEnd = scroll.scrollLeft + width;

    return (
      position.bottom <= docViewBottom &&
      position.top >= scroll.scrollTop &&
      position.right < docViewEnd &&
      position.left > scroll.scrollLeft
    );
  }

  private calculcatePosition(
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
      (left = Math.max(0, left)), (top = Math.max(0, top));
      horizontal = 'right';
      vertical = 'bottom';
    } else if (_right && _bottom) {
      // bottom right
      left = Math.min(width - this.width, right - this.width);
      top = Math.min(height - this.height, bottom - this.height);
      horizontal = 'left';
      vertical = 'top';
    } else if (_right && _top) {
      // top right
      left = Math.min(width - this.width, right - this.width);
      top = Math.max(0, top);
      horizontal = 'left';
      vertical = 'bottom';
    } else if (_left && _bottom) {
      // bottom left
      left = Math.max(0, left);
      top = Math.min(height - this.height, bottom - this.height);
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

  getContainerMargin() {
    return this.arrow &&
      !this.overlaysTarget &&
      this._position.vertical === 'bottom'
      ? this.arrowHeight
      : 0;
  }

  getContainerTop() {
    return this.arrow &&
      !this.overlaysTarget &&
      this._position.vertical === 'top'
      ? this._position.top - this.arrowHeight
      : this._position.top;
  }
}
