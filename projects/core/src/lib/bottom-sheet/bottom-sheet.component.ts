import { FivBottomSheetContent } from './bottom-sheet-content/bottom-sheet-content.component';
import {
  Component,
  AfterViewInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  SimpleChanges,
  ContentChild,
  OnDestroy
} from '@angular/core';
import { DomController, Platform } from '@ionic/angular';
import { DrawerState } from './drawer-state';
import { merge, Subject, fromEvent, from } from 'rxjs';
import {
  takeUntil,
  map,
  tap,
  flatMap,
  repeat,
  withLatestFrom,
  filter,
  first,
  take,
  repeatWhen,
  skipWhile
} from 'rxjs/operators';

export interface PanEvent {
  currentOffset: number;
  startOffset: number;
  currentTop: number;
  startTop: number;
  distance: number;
  touch: TouchEvent;
}

@Component({
  selector: 'fiv-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class FivBottomSheet implements AfterViewInit, OnChanges, OnDestroy {
  @Input() dockedHeight = 80;

  @Input() shouldBounce = true;

  @Input() distanceTop = 56;

  @Input() transition = '0.25s';

  @Input() state: DrawerState = DrawerState.Bottom;

  @Input() bounceThreshold = 40;
  @Input() panThreshold = 20;

  @Input() panEnabled = true;

  @Output() stateChange: EventEmitter<DrawerState> = new EventEmitter<
    DrawerState
  >();
  @Output() fivOpen: EventEmitter<FivBottomSheet> = new EventEmitter<
    FivBottomSheet
  >();
  @Output() fivDocked: EventEmitter<FivBottomSheet> = new EventEmitter<
    FivBottomSheet
  >();
  @Output() fivClose: EventEmitter<FivBottomSheet> = new EventEmitter<
    FivBottomSheet
  >();
  @Output() fivProgress: EventEmitter<number> = new EventEmitter<number>();

  @ContentChild(FivBottomSheetContent, { static: true })
  content: FivBottomSheetContent;

  private _startPositionTop: number;
  _startPositionOffset: number;
  scrollTop = 0;

  $onDestroy = new Subject();

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _domCtrl: DomController,
    private _platform: Platform
  ) {}

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }

  ngAfterViewInit() {
    this._setDrawerState(this.state);
    this.content.shouldBounce = this.shouldBounce;

    const touchmove = fromEvent<TouchEvent>(
      this._element.nativeElement,
      'touchmove',
      {
        passive: true
      }
    );
    const touchend = merge(
      fromEvent<TouchEvent>(this._element.nativeElement, 'touchend', {
        passive: true
      }),
      fromEvent<TouchEvent>(this._element.nativeElement, 'touchcancel', {
        passive: true
      })
    );

    const getScrollContent = from(this.content.content.getScrollElement());

    const scroll = this.content.content.ionScroll.pipe(
      tap(el => (this.scrollTop = el.detail.scrollTop)),
      takeUntil(this.$onDestroy)
    );
    scroll.subscribe();

    this.content.content.ionScrollEnd
      .pipe(
        filter(el => this.scrollTop === 0 && this.state === DrawerState.Top),
        tap(() => this.content.content.scrollByPoint(0, 1, 0)),
        takeUntil(this.$onDestroy)
      )
      .subscribe();

    const canStart = touchmove.pipe(filter(() => this.scrollTop === 0));

    const start = canStart.pipe(
      take(1),
      tap((s: TouchEvent) => this._handlePanStart(s))
    );

    const pan = start.pipe(
      filter(() => this.panEnabled),
      flatMap(() => touchmove),
      map((tm: TouchEvent) => this.calculatePanEvent(tm))
    );

    const handlePan = pan.pipe(
      filter(p => Math.abs(p.distance) > this.panThreshold),
      map(tm => this._handlePan(tm)),
      takeUntil(touchend),
      repeat(),
      takeUntil(this.$onDestroy)
    );

    const handleBackPan = pan
      .pipe(
        filter(
          p => Math.abs(p.distance) <= this.panThreshold && this.content.panning
        ),
        map(tm => this._handlePan(tm)),
        takeUntil(touchend),
        repeat(),
        takeUntil(this.$onDestroy)
      )
      .subscribe();

    handlePan
      .pipe(
        first(),
        tap(() => (this.content.panning = true)),
        repeatWhen(() => touchend),
        takeUntil(this.$onDestroy)
      )
      .subscribe();

    handlePan
      .pipe(
        flatMap(() => touchend),
        first(),
        withLatestFrom<TouchEvent, PanEvent>(pan),
        tap(() => this.content.content.scrollByPoint(0, 1, 0)),
        tap(() => (this.content.panning = false)),
        map(ev => ev[1]),
        repeat(),
        takeUntil<PanEvent>(this.$onDestroy)
      )
      .subscribe(ev => this._handlePanEnd(ev));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.state) {
      return;
    }
    this._setDrawerState(changes.state.currentValue);
    this.updateContent(changes.state.currentValue);
  }

  updateContent(state: DrawerState) {
    if (this.content) {
      this.content.updateState(state);
    }
  }

  private _setDrawerState(state: DrawerState) {
    this._renderer.setStyle(
      this._element.nativeElement,
      'transition',
      this.transition
    );
    switch (state) {
      case DrawerState.Bottom:
        this.content.content.scrollToTop(0);
        this._setTranslateY(this._platform.height());
        break;
      case DrawerState.Docked:
        this.content.content.scrollToTop(0);
        this._setTranslateY(this._platform.height() - this.dockedHeight);
        break;
      default:
        this._setTranslateY(this.distanceTop);
    }
  }

  private _handlePanStart(event: TouchEvent) {
    this._startPositionTop = this.getCurrentTop();
    this._startPositionOffset = event.touches[0].pageY;
  }

  getCurrentTop() {
    return this._element.nativeElement.getBoundingClientRect().top;
  }

  private _handlePanEnd(ev: PanEvent) {
    if (this.shouldBounce) {
      this._renderer.setStyle(
        this._element.nativeElement,
        'transition',
        this.transition
      );

      switch (this.state) {
        case DrawerState.Docked:
          this._handleDockedPanEnd(ev);
          break;
        case DrawerState.Top:
          this._handleTopPanEnd(ev);
          break;
        default:
          this._handleBottomPanEnd(ev);
      }
    }
    this.stateChange.emit(this.state);
  }

  private _handleTopPanEnd(ev: PanEvent) {
    if (ev.distance > this.bounceThreshold) {
      if (this.state !== DrawerState.Docked) {
        this.state = DrawerState.Docked;
        this.fivDocked.emit(this);
      }
    } else {
      this._setTranslateY(this.distanceTop);
    }
  }

  private _handleDockedPanEnd(ev: PanEvent) {
    const absDeltaY = Math.abs(ev.distance);
    if (absDeltaY > this.bounceThreshold && ev.distance < 0) {
      if (this.state !== DrawerState.Top) {
        this.state = DrawerState.Top;
        this.fivOpen.emit();
      }
    } else if (absDeltaY > this.bounceThreshold && ev.distance > 0) {
      if (this.state !== DrawerState.Bottom) {
        this.close();
      }
    } else {
      this._setTranslateY(this._platform.height() - this.dockedHeight);
    }
  }

  private _handleBottomPanEnd(ev: PanEvent) {
    if (-ev.distance > this.bounceThreshold) {
      if (this.state !== DrawerState.Docked) {
        this.state = DrawerState.Docked;
        this.fivDocked.emit();
      }
    } else {
      this._setTranslateY('100vh');
    }
  }

  calculatePanEvent(ev: TouchEvent): PanEvent {
    return {
      currentOffset: ev.touches[0].pageY,
      startOffset: this._startPositionOffset,
      startTop: this._startPositionTop,
      currentTop: this.getCurrentTop(),
      distance: ev.touches[0].pageY - this._startPositionOffset,
      touch: ev
    };
  }

  private _handlePan(event: PanEvent) {
    this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
    if (event.currentTop >= 0 && event.currentTop <= this._platform.height()) {
      const newTop = this._startPositionTop + event.distance;
      if (newTop >= this.distanceTop) {
        this._setTranslateY(newTop);
      } else if (newTop <= this.distanceTop && this.content.panning) {
        this._setTranslateY(this.distanceTop);
        this.content.content.scrollToPoint(0, 0 - newTop, 0);
      }
      return event;
    }
  }

  private _setTranslateY(value) {
    this.fivProgress.emit(
      1 - value / (this._platform.height() - this.dockedHeight)
    );
    this._domCtrl.write(() => {
      this._renderer.setStyle(
        this._element.nativeElement,
        'transform',
        'translateY(' + value + 'px)'
      );
    });
  }

  open() {
    this.state = DrawerState.Top;
    this._setDrawerState(this.state);
    this.updateContent(this.state);
  }

  close() {
    this.state = DrawerState.Bottom;
    this._setDrawerState(this.state);
    this.updateContent(this.state);
    this.fivClose.emit();
  }

  dock() {
    this.state = DrawerState.Docked;
    this._setDrawerState(this.state);
    this.updateContent(this.state);
  }
}
