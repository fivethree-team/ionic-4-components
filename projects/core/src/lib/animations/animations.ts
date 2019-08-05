import { animation, animate, style } from '@angular/animations';

export const fade = animation([
  style({
    opacity: '{{ fromOpacity }}'
  }),
  animate(
    '{{ time }}',
    style({
      opacity: '{{ toOpacity }}'
    })
  )
]);

export const translate = animation([
  animate(
    '{{ time }}',
    style({
      transform: 'translate({{toX}},{{toY}})'
    })
  )
]);
