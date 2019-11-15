import { FivPopover } from './popover.component';
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { tap, delay } from 'rxjs/operators';

@Directive({
  selector: '[fivPopover]',
  exportAs: 'fivPopover'
})
export class PopoverElementDirective implements AfterViewInit {
  _show: boolean;
  @Input('fivPopover.delay') delay = 50;
  @Input() fivPopover: FivPopover;

  @Input('fivPopover.show') set show(visible: boolean) {
    this._show = visible;
    setTimeout(() => {
      if (this.show) {
        this.fivPopover.open(this.el);
      } else if (this.fivPopover.overlay && this.fivPopover.overlay.open) {
        this.fivPopover.close();
      }
    }, 0);
  }
  get show() {
    return this._show;
  }

  constructor(private el: ElementRef) {}

  open() {
    this.show = true;
  }
  hide() {
    this.show = false;
  }

  ngAfterViewInit(): void {
    this.fivPopover.overlay.afterInit
      .pipe(
        delay(this.delay),
        tap(() => {
          this.show = this._show;
        })
      )
      .subscribe();
  }
}
