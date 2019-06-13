import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[fivViewport]',
  exportAs: 'viewport'
})
export class FivViewport implements OnInit, OnDestroy {
  @Output() fivAppear = new EventEmitter<any>();
  @Output() fivDisappear = new EventEmitter<any>();
  private visible = false;
  private io: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    this.io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.handleIntersection();
        } else {
          this.handleNonIntersection();
        }
      });
    });
    this.io['POLL_INTERVAL'] = 100;
    this.io.observe(this.elementRef.nativeElement);
  }

  handleNonIntersection() {
    if (this.visible) {
      this.fivDisappear.emit(this);
    }
    this.visible = false;
  }
  handleIntersection() {
    if (!this.visible) {
      this.fivAppear.emit(this);
    }
    this.visible = true;
  }

  ngOnDestroy(): void {
    this.io.disconnect();
  }

  isVisible() {
    return this.visible;
  }
}
