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
  ContentChild
} from '@angular/core';
import { DomController, Platform } from '@ionic/angular';
import * as Hammer from 'hammerjs';
import { DrawerState } from './drawer-state';

@Component({
  selector: 'fiv-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class FivBottomSheet implements AfterViewInit, OnChanges {
  @Input() dockedHeight = 80;

  @Input() shouldBounce = true;

  @Input() distanceTop = 56;

  @Input() transition = '0.25s ease-in-out';

  @Input() state: DrawerState = DrawerState.Bottom;

  @Input() minimumHeight = 24;

  @Input() panEnabled = true;

  @Output() stateChange: EventEmitter<DrawerState> = new EventEmitter<DrawerState>();
  @Output() fivOpen: EventEmitter<FivBottomSheet> = new EventEmitter<FivBottomSheet>();
  @Output() fivDocked: EventEmitter<FivBottomSheet> = new EventEmitter<FivBottomSheet>();
  @Output() fivClose: EventEmitter<FivBottomSheet> = new EventEmitter<FivBottomSheet>();

  @ContentChild(FivBottomSheetContent) content: FivBottomSheetContent;

  private _startPositionTop: number;
  private readonly _BOUNCE_DELTA = 30;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _domCtrl: DomController,
    private _platform: Platform
  ) { }


  // @HostBinding('style') get styles() {
  //   if (this.rounded) {
  //     return this.sanitizer
  //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
  //   }

  // }

  ngAfterViewInit() {
    // this._renderer.
    //   setStyle(this._element.nativeElement.querySelector('.fiv-bottom-drawer-scrollable-content .scroll-y'), 'touch-action', 'none');
    this._setDrawerState(this.state);

    const hammer = new Hammer(this._element.nativeElement);
    hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_VERTICAL });
    hammer.on('pan panstart panend', (ev: any) => {
      if (!this.panEnabled) {
        return;
      }

      switch (ev.type) {
        case 'panstart':
          this._handlePanStart();
          break;
        case 'panend':
          this._handlePanEnd(ev);
          break;
        default:
          this._handlePan(ev);
      }
    });

    this.content.fivHandleClick
      .subscribe(() => {
        switch (this.state) {
          case DrawerState.Bottom: return this.dock();
          case DrawerState.Docked: return this.open();
        }
      });
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
    this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
    switch (state) {
      case DrawerState.Bottom:
        this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
        break;
      case DrawerState.Docked:
        this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
        break;
      default:
        this._setTranslateY(this.distanceTop + 'px');
    }
  }

  private _handlePanStart() {
    this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
  }

  private _handlePanEnd(ev) {
    if (this.shouldBounce && ev.isFinal) {
      this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);

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

  private _handleTopPanEnd(ev) {
    if (ev.deltaY > this._BOUNCE_DELTA) {
      if (this.minimumHeight === this.dockedHeight) {
        if (this.state !== DrawerState.Bottom) {
          this.state = DrawerState.Bottom;
          this.fivClose.emit(this);
        }
      } else {
        if (this.state !== DrawerState.Docked) {
          this.state = DrawerState.Docked;
          this.fivDocked.emit(this);
        }

      }
    } else {
      this._setTranslateY(this.distanceTop + 'px');
    }
  }

  private _handleDockedPanEnd(ev) {
    const absDeltaY = Math.abs(ev.deltaY);
    if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
      if (this.state !== DrawerState.Top) {

        this.state = DrawerState.Top;
        this.fivOpen.emit();
      }
    } else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
      if (this.state !== DrawerState.Bottom) {
        this.state = DrawerState.Bottom;
        this.fivClose.emit();
      }
    } else {
      this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
    }
  }

  private _handleBottomPanEnd(ev) {
    if (-ev.deltaY > this._BOUNCE_DELTA) {
      if (this.state !== DrawerState.Docked) {
        this.state = DrawerState.Docked;
        this.fivDocked.emit();
      }
    } else {
      this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
    }
  }

  private _handlePan(ev) {
    const pointerY = ev.center.y;
    this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
    if (pointerY > 0 && pointerY < this._platform.height()) {
      if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
        const newTop = this._startPositionTop + ev.deltaY;
        if (newTop >= this.distanceTop) {
          this._setTranslateY(newTop + 'px');
        } else if (newTop < this.distanceTop) {
          this._setTranslateY(this.distanceTop + 'px');
        }
        if (newTop > this._platform.height() - this.minimumHeight) {
          this._setTranslateY((this._platform.height() - this.minimumHeight) + 'px');
        }
      }
    }
  }

  private _setTranslateY(value) {
    this._domCtrl.write(() => {
      this._renderer.setStyle(this._element.nativeElement, 'transform', 'translateY(' + value + ')');
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
  }

  dock() {
    this.state = DrawerState.Docked;
    this._setDrawerState(this.state);
    this.updateContent(this.state);
  }
}
