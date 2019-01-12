import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  AfterContentInit,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, merge } from 'rxjs/operators';
import { IonContent } from '@ionic/angular';

export interface InViewportEvent {
  target: HTMLElement;
  value: boolean;
}

@Directive({
  selector: '[fivViewport]',
  exportAs: 'viewport'
})
export class FivViewport implements OnInit, OnDestroy, AfterContentInit {

  @Input() offset = 0;
  @Output() fivAppear = new EventEmitter<InViewportEvent>();
  @Output() fivDisappear = new EventEmitter<InViewportEvent>();
  private subscription: Subscription;
  private visible = false;

  constructor(
    private readonly elementRef: ElementRef
  ) { }

  ngAfterContentInit(): void {
    const content: IonContent = this.elementRef.nativeElement.closest('ion-content');
    this.check();
    content.scrollEvents = true;
    this.subscription = fromEvent(this.elementRef.nativeElement.closest('ion-content'), 'ionScroll')
      .pipe(merge(fromEvent(window, 'resize')), debounceTime(50))
      .subscribe(() => this.check());

    console.log('visible', this.visible, document.body.contains(this.elementRef.nativeElement),
      this.elementRef.nativeElement.getBoundingClientRect(), this.elementRef.nativeElement,
      window.innerHeight + this.offset);
  }

  ngOnInit() {


  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private check() {
    const event: InViewportEvent = {
      target: this.elementRef.nativeElement,
      value:
        document.body.contains(this.elementRef.nativeElement) &&
        this.elementRef.nativeElement.getBoundingClientRect().top <=
        window.innerHeight + this.offset
    };

    if (event.value === true) {

      if (!this.visible) {
        this.fivAppear.emit(event);
        this.visible = true;
      }
    } else {
      if (this.visible) {
        this.fivDisappear.emit(event);
        this.visible = false;
      }

    }
  }

  isVisible() {
    return this.visible;
  }
}
