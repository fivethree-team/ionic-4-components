import { animate, query, stagger, style, transition, trigger, state } from '@angular/animations';

export const rotateAnimation = trigger('rotateAnim', [
    transition('normal => rotate', [
        animate('125ms ease-out')
    ]),
    transition('rotate => normal', [
        animate('125ms ease-in')
    ]),
    state('rotate', style({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
    state('normal', style({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
]);

export const listAnimation = trigger('listAnim', [
    state('open', style({ height: '*' })),
    state('closed', style({ height: '0' })),
    transition('closed => open', [
        animate('350ms ease-out')
    ]),
    transition('open => closed', [
        animate('200ms ease-in')
    ])
]);

export const arrowAnimation = trigger('arrowAnim', [
    state('open', style({ transform: 'rotateZ(-180deg)' })),
    state('closed', style({ transform: 'rotateZ(0deg)' })),
    transition('closed => open', [
        animate('350ms ease-out')
    ]),
    transition('open => closed', [
        animate('200ms ease-in')
    ])
]);
