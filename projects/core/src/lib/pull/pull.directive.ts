import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import { fromEvent, merge } from 'rxjs';
import { filter, map, skipWhile, takeUntil, takeLast } from 'rxjs/operators';

@Directive({
  selector: '[fivPull]'
})
export class FivPull implements OnInit {
  @Input() minPullHeight = 112;
  @Input() maxPullHeight = 168;
  @Input() enabled = true;
  @Input() enableScroll = false;
  @Input() direction: 'up' | 'down' = 'down';

  @Output() fivRefresh = new EventEmitter<any>();
  @Output() fivCancel = new EventEmitter<number>();
  @Output() fivPull = new EventEmitter<number>();

  scrollY: HTMLElement;

  constructor(
    private element: ElementRef,
    private platform: Platform,
    private content: IonContent
  ) {}

  ngOnInit(): void {
    this.init();
  }
  init(
    minPullHeight = 112,
    maxPullHeight = 168,
    direction: 'up' | 'down' = 'down'
  ) {
    this.minPullHeight = minPullHeight;
    this.maxPullHeight = maxPullHeight;
    this.direction = direction;
    this.content.scrollEvents = true;
    this.content.getScrollElement().then(s => {
      this.scrollY = s; // needed for scrollTop
      this.setupPanListener();
    });
  }

  private setupPanListener() {
    const touchstart$ = fromEvent(this.element.nativeElement, 'touchstart', {
      passive: true
    });
    const touchmove$ = fromEvent(this.element.nativeElement, 'touchmove', {
      passive: true
    });
    const touchend$ = fromEvent(this.element.nativeElement, 'touchend', {
      passive: true
    });
    const touchcancel$ = fromEvent(this.element.nativeElement, 'touchcancel', {
      passive: true
    });
    const end$ = merge(touchend$, touchcancel$);

    const dragAtTop = touchstart$.pipe(
      filter(
        e =>
          (this.scrollY.scrollTop === 0 || this.enableScroll) &&
          this.direction === 'down' &&
          this.enabled
      )
    );

    const dragAtBottom = touchstart$.pipe(
      filter(
        e =>
          (this.scrollY.scrollTop ===
            this.scrollY.clientHeight - this.platform.height() ||
            this.enableScroll) &&
          this.direction === 'up' &&
          this.enabled
      )
    );

    const dragTopDown = dragAtTop.pipe(
      map((start: any) => {
        const startY = start.touches[0].pageY;
        return touchmove$.pipe(
          map((move: any) => {
            const currentY = move.touches[0].pageY;
            return {
              startEvent: start,
              moveEvent: move,
              startY: startY,
              currentY: currentY,
              offset: currentY - startY
            };
          }),
          skipWhile(drag => drag.offset < 0),
          takeUntil(end$)
        );
      })
    );

    dragTopDown.forEach(drags => {
      drags.forEach(drag => {
        const offset = drag.offset / 2;
        if (offset < 0 || offset > this.maxPullHeight) {
          return;
        }
        if (offset <= this.maxPullHeight) {
        }
        this.fivPull.emit(offset / this.maxPullHeight);
      });

      drags.pipe(takeLast(1)).subscribe(drag => {
        const offset = drag.offset / 2;
        const refresh = offset >= this.minPullHeight;
        if (refresh) {
          this.fivRefresh.emit(offset / this.maxPullHeight);
        } else {
          this.fivCancel.emit(offset / this.maxPullHeight);
        }
      });
    });

    const dragBottomUp = dragAtBottom.pipe(
      map((start: any) => {
        const startY = start.touches[0].pageY;
        return touchmove$.pipe(
          map((move: any) => {
            const currentY = move.touches[0].pageY;
            return {
              startEvent: start,
              moveEvent: move,
              startY: startY,
              currentY: currentY,
              offset: startY - currentY
            };
          }),
          skipWhile(drag => drag.offset < 0),
          takeUntil(end$)
        );
      })
    );

    dragBottomUp.forEach(drags => {
      drags.forEach(drag => {
        const offset = drag.offset / 2;
        if (offset < 0 || offset > this.maxPullHeight) {
          return;
        }
        this.fivPull.emit(offset / this.maxPullHeight);
      });

      drags.pipe(takeLast(1)).subscribe(drag => {
        const offset = drag.offset / 2;
        const refresh = offset >= this.minPullHeight;
        if (refresh) {
          this.fivRefresh.emit(offset / this.maxPullHeight);
        } else {
          this.fivCancel.emit(offset / this.maxPullHeight);
        }
      });
    });
  }
}
