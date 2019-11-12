import { RectPosition } from './tween';
import { Observable } from 'rxjs';
import { ElementRef } from '@angular/core';
import { tap, map, first, last } from 'rxjs/operators';
import { parseRgb } from './colors';

export const positionStyles = ['position', 'top', 'left', 'height', 'width'];
export const elementStyles = ['border-radius', 'box-shadow'];
export const fontStyles = ['font-size', 'font-weight'];
export const colorStyles = ['color', 'background-color', 'border-color'];
export const paddingStyles = [
  'padding-top',
  'padding-bottom',
  'padding-left',
  'padding-right'
];

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
        id = requestAnimationFrame(() => {
          observer.complete();
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
      const value = m ? m(te) : te + 'px';
      el.nativeElement.style[style] = value;
    })
  );

export const reverse = () => <T>(source: Observable<number>) =>
  source.pipe(map(t => 1 - t));

export const before = (next: () => void) => <T>(source: Observable<T>) => {
  source
    .pipe(
      first(),
      tap(() => next())
    )
    .subscribe();
  return source;
};
export const beforeStyle = (
  target: ElementRef,
  style: string,
  value: string
) => <T>(source: Observable<T>) => {
  source
    .pipe(before(() => (target.nativeElement.style[style] = value)))
    .subscribe();
  return source;
};

export const after = (next: () => void) => <T>(source: Observable<T>) => {
  source
    .pipe(
      last(),
      tap(() => next())
    )
    .subscribe();
  return source;
};

export const removeStyle = (el: ElementRef, style) => <T>(
  source: Observable<T>
) => {
  source.pipe(after(() => (el.nativeElement.style[style] = ''))).subscribe();
  return source;
};
export const removeStyles = (el: ElementRef, style: string[]) => <T>(
  source: Observable<number>
) => {
  source
    .pipe(after(() => style.forEach(s => (el.nativeElement.style[s] = ''))))
    .subscribe();
  return source;
};

export const fromToStylePixels = (
  target: ElementRef,
  fromEl: ElementRef,
  style: string
) => <T>(source: Observable<number>) =>
  source.pipe(
    fromTo(
      target,
      style,
      getStylePixels(fromEl, style),
      getStylePixels(target, style)
    )
  );

export const fromToPadding = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  return source.pipe(
    fromToStylePixels(target, fromEl, 'padding-left'),
    fromToStylePixels(target, fromEl, 'padding-right'),
    fromToStylePixels(target, fromEl, 'padding-top'),
    fromToStylePixels(target, fromEl, 'padding-bottom'),
    removeStyles(target, paddingStyles)
  );
};

export const fromToPosition = (
  target: ElementRef,
  from: RectPosition,
  to: RectPosition
) => <T>(source: Observable<number>) => {
  target.nativeElement.style.position = 'fixed';
  return source.pipe(
    fromTo(target, 'top', from.top, to.top),
    fromTo(target, 'left', from.left, to.left),
    fromTo(target, 'height', from.height, to.height),
    fromTo(target, 'width', from.width, to.width),
    removeStyles(target, positionStyles)
  );
};

export const fromToElement = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  const from = getPosition(fromEl);
  const to = getPosition(target);
  target.nativeElement.style.position = 'fixed';
  target.nativeElement.style.boxShadow = getComputedStyle(
    fromEl.nativeElement
  ).boxShadow;
  return source.pipe(
    fromToPosition(target, from, to),
    fromToStylePixels(target, fromEl, 'border-radius'),
    removeStyles(target, elementStyles)
  );
};

export const fromToColor = (
  target: ElementRef,
  fromEl: ElementRef,
  style = 'color'
) => <T>(source: Observable<number>) => {
  const targetColor = getComputedStyle(target.nativeElement).getPropertyValue(
    style
  );
  const fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(
    style
  );
  const tRGB = parseRgb(targetColor).map(v => +v);
  const fRGB = parseRgb(fromColor).map(v => +v);
  return source.pipe(
    fromTo(target, style, 0, 1, t => {
      const rgb = `rgb(${t * (tRGB[1] - fRGB[1]) + fRGB[1]},${t *
        (tRGB[2] - fRGB[2]) +
        fRGB[2]},${t * (tRGB[3] - fRGB[3]) + fRGB[3]})`;
      return rgb;
    }),
    removeStyles(target, colorStyles)
  );
};

export const morph = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  return source.pipe(
    fromToElement(target, fromEl),
    fromToPadding(target, fromEl),
    fromToColor(target, fromEl, 'background-color')
  );
};

export const fps = () => <T>(source: Observable<number>) => {
  let lastTime = 0;
  let startTime = 0;
  let frames = [];
  return source.pipe(
    before(() => {
      lastTime = performance.now();
      startTime = lastTime;
    }),
    tap(() => frames.push(1000 / (performance.now() - lastTime))),
    tap(() => (lastTime = performance.now())),
    tap(console.log),
    after(() => {
      const duration = performance.now() - startTime;
      const f = frames.filter(function(item, pos) {
        return frames.indexOf(item) === pos;
      });
      console.log(`Total duration: ${duration}ms`);
      console.log(`FRAMES: ${f.length}`);
      console.log(`MIN: ${Math.min.apply(Math, f)}`);
      console.log(`MAX: ${Math.max.apply(Math, f)}`);
    })
  );
};

export const morphText = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  return source.pipe(
    fromToElement(target, fromEl),
    fromToPadding(target, fromEl),
    fromToColor(target, fromEl),
    fromToStylePixels(target, fromEl, 'font-size'),
    fromToStylePixels(target, fromEl, 'font-weight')
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

export function getStylePixels(el: ElementRef, style: string) {
  return +getComputedStyle(el.nativeElement)
    .getPropertyValue(style)
    .match(/\d+/)[0];
}

export interface RectPosition {
  top: number;
  left: number;
  height: number;
  width: number;
}

export const transformF = (
  from: number,
  to: number,
  m?: (t: number) => string
) => <T>(t: number) => {
  const te = t * (to - from) + from;
  return m ? m(te) : `${te}`;
};

export const translateY = (from, to) => {
  return transformF(from, to, t => `translateY(${t}%)`);
};

export const translateX = (from, to) => {
  return transformF(from, to, t => `translateX(${t}%)`);
};

export const translateZ = (from, to) => {
  return transformF(from, to, t => `translateZ(${t}%)`);
};

export const scale = (from, to) => {
  return transformF(from, to, t => `scale(${t})`);
};
export const scaleX = (from, to) => {
  return transformF(from, to, t => `scaleX(${t})`);
};
export const scaleY = (from, to) => {
  return transformF(from, to, t => `scaleY(${t})`);
};

export const transform = (
  target: ElementRef,
  ...ts: (<T>(number) => string)[]
) => <T>(source: Observable<number>) => {
  return source.pipe(
    tap(t => {
      const styles = ts.map(s => s(t)).join(' ');
      target.nativeElement.style.transform = styles;
    })
  );
};

export const slideOutDown = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(0, 100)));

export const slideOutUp = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(0, -100)));
export const slideOutLeft = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(0, -100)));
export const slideOutRight = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(0, 100)));
export const slideInDown = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(-100, 0)));
export const slideInUp = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(100, 0)));
export const slideInLeft = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(-100, 0)));
export const slideInRight = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(100, 0)));

export const fadeIn = (target, easing, duration) =>
  tween(easing, duration).pipe(fromTo(target, 'opacity', 0, 1, t => `${t}`));
export const fadeOut = (target, easing, duration) =>
  tween(easing, duration).pipe(fromTo(target, 'opacity', 1, 0, t => `${t}`));
export const scaleYOut = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, scaleY(1, 0)));
