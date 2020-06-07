import {
  tween,
  transform,
  scale,
  fadeIn,
  easeOutSine,
  beforeStyle,
  fadeOut,
  easeInSine
} from '@fivethree/ngx-rxjs-animations';
import { ElementRef } from '@angular/core';
import { zip } from 'rxjs';
import { PopoverPosition } from './popover.types';

export const scaleIn = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, scale(0, 1)));

export const animIn = (
  element: ElementRef,
  position: PopoverPosition,
  duration: number
) =>
  zip(
    fadeIn(element, easeOutSine, duration),
    scaleIn(element, easeOutSine, duration).pipe(
      beforeStyle(
        element,
        'transform-origin',
        `${position.vertical} ${position.horizontal}`
      )
    )
  );

export const animOut = (element: ElementRef, duration: number) =>
  fadeOut(element, easeInSine, duration);
