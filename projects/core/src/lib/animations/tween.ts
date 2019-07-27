import { Observable } from 'rxjs';
import { ElementRef } from '@angular/core';
import { tap, map } from 'rxjs/operators';

export function tween(
  easingFunction: Function,
  duration: number
): Observable<number> {
  return new Observable(observer => {
    let startTime;
    let id = requestAnimationFrame(function sample(time) {
      startTime = startTime || time;
      const t = time - startTime;
      if (t < duration) {
        observer.next(easingFunction(t, 0, 1, duration));
        id = requestAnimationFrame(sample);
      } else {
        observer.next(easingFunction(duration, 0, 1, duration));
        id = requestAnimationFrame(function() {
          return observer.complete();
        });
      }
    });
    return function() {
      if (id) {
        cancelAnimationFrame(id);
      }
    };
  });
}

export const fromTo = (
  el: ElementRef,
  style: string,
  from: number,
  to: number,
  m?: (t: number) => string
) => <T>(source: Observable<number>) =>
  source.pipe(
    tap(t => {
      const te = t * (to - from) + from;
      el.nativeElement.style[style] = m ? m(te) : te + 'px';
    })
  );

export const morph = (fromEl: ElementRef, toEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  const from = getPosition(fromEl);
  const to = getPosition(toEl);
  return source.pipe(
    fromTo(fromEl, 'top', from.top, to.top),
    fromTo(fromEl, 'left', from.left, to.left),
    fromTo(fromEl, 'height', from.height, to.height),
    fromTo(fromEl, 'width', from.width, to.width)
  );
};

export function getPosition(el: ElementRef): RectPosition {
  const bounds = el.nativeElement.getBoundingClientRect();
  return {
    top: bounds.top,
    left: bounds.left,
    height: el.nativeElement.clientHeight,
    width: el.nativeElement.clientWidth
  };
}
export function setPosition(el: ElementRef, r: RectPosition): ElementRef {
  el.nativeElement.style.top = r.top + 'px';
  el.nativeElement.style.left = r.left + 'px';
  el.nativeElement.style.height = r.height + 'px';
  el.nativeElement.style.width = r.width + 'px';
  return el;
}

export interface RectPosition {
  top: number;
  left: number;
  height: number;
  width: number;
}
