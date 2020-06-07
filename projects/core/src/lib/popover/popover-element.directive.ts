import { FivPopover } from './popover.component';
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[fivPopover]',
  exportAs: 'fivPopover'
})
export class FivPopoverElementDirective implements AfterViewInit {
  _show: boolean;
  ready = false;
  @Input('fivPopover.delay') delay = 150;
  @Input() fivPopover: FivPopover;

  @Input('fivPopover.show') set show(visible: boolean) {
    this._show = visible;
    setTimeout(() => {
      if (this.show && this.ready) {
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
  close() {
    this.show = false;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ready = true;
      this.show = this._show;
    }, this.delay);
  }
}
