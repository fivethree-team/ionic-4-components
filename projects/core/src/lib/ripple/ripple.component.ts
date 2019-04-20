import {
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
  EventEmitter,
  Component,
  Input,
  Output
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fiv-ripple, [fivRipple]',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class FivRipple {

  private rippleAnimationEvent = new EventEmitter();
  @Input() round = false;
  @Input() hover = false;
  @Output() fivClick = new EventEmitter<any>();


  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    this.ripple(event);
    this.fivClick.emit(event);
  }

  @HostBinding('class.round') get isRound() {
    return !!this.round;
  }
  @HostBinding('class.hover') get canHover() {
    return !!this.hover;
  }


  constructor(private el: ElementRef,
    public renderer: Renderer2) {


    this.rippleAnimationEvent.pipe(
      debounceTime(750)
    )
      .subscribe(() => {
        renderer.removeClass(el.nativeElement.querySelector('.ripple'), 'show');
        renderer.removeClass(el.nativeElement.querySelector('.rippleWrapper'), 'show');
      });
  }

  ripple(event?) {
    const ripple = this.el.nativeElement.querySelector('.ripple');
    if (!ripple) {
      this.rippleFactory();
    }
    if (!event) {
      const target = this.el.nativeElement;
      const rect = target.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const centerX = rect.left + rect.width / 2;
      event = { pageX: centerX, pageY: centerY };
      
    }
    this.rippleAnimation({ pageX: event.pageX, pageY: event.pageY });
    return;
  }
  rippleFactory() {
    const target = this.el.nativeElement;
    const rect = target.getBoundingClientRect();
    const radius = Math.max(rect.width, rect.height) + 'px';
    const rippleWrapper = this.renderer.createElement('div');
    this.renderer.addClass(rippleWrapper, 'rippleWrapper');
    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple');
    this.renderer.setStyle(ripple, 'height', radius);
    this.renderer.setStyle(ripple, 'width', radius);
    this.renderer.appendChild(rippleWrapper, ripple);
    this.renderer.appendChild(target, rippleWrapper);
  }

  rippleAnimation({ pageX, pageY }) {
    const target = this.el.nativeElement;
    const rect = target.getBoundingClientRect();
    const ripple = target.querySelector('.ripple');
    const rippleWrapper = target.querySelector('.rippleWrapper');
    this.renderer.removeClass(rippleWrapper, 'show');
    this.renderer.removeClass(ripple, 'show');
    const left = pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
    const top = pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
    this.renderer.setStyle(ripple, 'top', top);
    this.renderer.setStyle(ripple, 'left', left);
    this.renderer.addClass(rippleWrapper, 'show');
    this.renderer.addClass(ripple, 'show');
    this.rippleAnimationEvent.emit();
  }


}
