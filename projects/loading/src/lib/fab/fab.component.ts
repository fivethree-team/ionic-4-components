import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter, HostBinding } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";

@Component({
    selector: 'fiv-loading-fab',
    template: `
        <ion-fab [@fabAnim] [vertical]="vertical" [horizontal]="horizontal" [slot]="slot" [edge]="edge">
        <svg *ngIf="loading" #spinner class="spinner rotate" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <circle [@fillAnim]="isComplete ? 'fill' : 'spinning'" (@fillAnim.done)="fillAnimationDone($event)" [ngClass]="{'path': !isComplete}" fill="none" stroke-width="4" stroke-linecap="round" cx="36" cy="36" r="32"></circle>
        </svg>
        <ion-fab-button [color]="fabColor" [disabled]="disabled">
            <ion-icon [color]="iconColor" [@rotateAnim]="iconState" (@rotateAnim.done)="changeIconAndReveal($event,'md-checkmark')" [name]="icon"></ion-icon>
        </ion-fab-button>
        </ion-fab>
    `,
    styleUrls: ['fab.scss'],
    animations: [trigger('fabAnim', [
        transition('void => *', [
            style({ transform: 'scale(0)' }),
            animate('250ms ease-out')
        ]),
        transition('* => void', [
            animate('250ms ease-in', style({ transform: 'scale(0)' }))
        ])
    ]),
    trigger('spinnerAnim', [
        transition('void => *', [
            style({ opacity: '0' }),
            animate('250ms ease-out')
        ]),
        transition('* => void', [
            animate('250ms ease-in', style({ opacity: '0' }))
        ])
    ]),
    trigger('rotateAnim', [
        transition('normal => rotate', [
            animate('125ms ease-out')
        ]),
        transition('rotate => normal', [
            animate('125ms ease-in')
        ]),
        state('rotate', style({ opacity: '0', transform: 'rotateZ(45deg)' })),
        state('normal', style({ opacity: '1', transform: 'rotateZ(0deg)' }))
    ]),
    trigger('fillAnim', [
        transition('* => fill', [
            style({
                'stroke-dasharray': 180,
                'stroke-dashoffset': 90,
                'transformOrigin': 'center',
                'stroke': '#DE3E35'
            }),
            animate('1400ms ease-out')
        ]),
        state('fill', style({
            'stroke-dasharray': 315,
            'stroke-dashoffset': 0,
            'transformOrigin': 'center',
            'stroke': '#1B9A59',
            'opacity': 0
        })
        )]
    )],
    host: {}
})
export class FabSpinner implements OnInit {


    @Input() vertical?: 'top' | 'center' | 'bottom';
    @Input() horizontal?: 'center' | 'start' | 'end';
    @Input() edge: boolean;
    @Input() slot: string;
    @Input() icon: string;
    @Input() spinColor: string;
    @Input() fabColor: string;
    @Input() iconColor = '#000';
    @Input() checkmark = false;
    @Input() disabled = false;
    loading: boolean = false;
    isComplete: boolean = false;
    iconState: string = 'normal';

    @HostBinding('class') get classes(): string {
        const verticalClass = !!this.vertical ? `fab-vertical-${this.vertical}` : '';
        const horizontalClass = !!this.horizontal ? `fab-horizontal-${this.horizontal}` : '';
        const edgeClass = this.edge ? `fab-edge-` : '';

        return `${verticalClass} ${horizontalClass} ${edgeClass}`;
    }


    @ViewChild('spinner') spinner: ElementRef;

    @Output() onComplete: EventEmitter<FabSpinner> = new EventEmitter<FabSpinner>();
    @Output() onRefresh: EventEmitter<FabSpinner> = new EventEmitter<FabSpinner>();

    constructor() {
    }

    ngOnInit() {
    }

    toggleSpinner() {
        if (this.icon != 'md-checkmark') {
            this.loading = !this.loading;
        }
    }

    load() {
        this.loading = true;
        this.onRefresh.emit(this);
    }

    unload() {
        this.loading = false;
    }

    complete() {
        if (this.loading) {
            this.isComplete = true;

        }
    }

    fillAnimationDone(event) {
        if (event.fromState == 'spinning') {
            if (this.checkmark) {
                console.log('fill animation done', event);
                this.iconState = "rotate";
            } else {
                this.postComplete();
            }
        }
    }

    changeIconAndReveal(event, icon: string) {
        console.log(event, icon);
        if (event.fromState == 'normal') {
            this.icon = icon;
            this.iconState = "normal";
        } else {
            if (event.fromState === "rotate") {
                this.postComplete();
            }

        }
    }

    postComplete() {
        this.unload();
        this.isComplete = false;
        this.onComplete.emit(this);
    }
}
