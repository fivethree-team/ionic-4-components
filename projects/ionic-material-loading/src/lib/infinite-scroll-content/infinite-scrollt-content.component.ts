import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { fromEvent } from 'rxjs';


@Component({
    selector: 'gg-loading-infinite-scroll',
    template: `
    <div class="gg-refresher">

    <div #spinner class="gg-spinner-container">
    <svg class="spinner rotate" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <circle [@fillAnim]="isComplete ? 'fill' : 'spinning'" (@fillAnim.done)="fillAnimationDone($event)" [ngClass]="{'path': !isComplete}" fill="none" stroke-width="4" stroke-linecap="round" cx="36" cy="36" r="32"></circle>
 </svg>
    </div>

    
    </div>
    `,
    styleUrls: ['infinite-scroll-content.scss'],
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
            animate('800ms ease-out')
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

})
export class InfiniteScrollContent implements OnInit {

    @Input() icon: string;
    @Input() spinColor: string;
    @Input() fabColor: string;
    @Input() vertical: string = "bottom";
    @Input() horizontal: string = "end";
    @Input() edge: boolean = false;
    @Input() checkmark: boolean = false;
    dragProgress: number = 0;
    loading: boolean = false;
    isComplete: boolean = false;
    iconState: string = 'normal';

    @ViewChild('spinner') spinner: ElementRef;

    @Output() onComplete: EventEmitter<InfiniteScrollContent> = new EventEmitter<InfiniteScrollContent>();
    @Output() onRefresh: EventEmitter<InfiniteScrollContent> = new EventEmitter<InfiniteScrollContent>();

    constructor(public renderer: Renderer2, public change: ChangeDetectorRef) {
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
        this.onRefresh.emit();
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

    public changeProgress(progress: number) {
        this.dragProgress = progress;
        const translateY = Math.floor(-80 + 80 * progress);
        console.log(`translateY(${translateY}px)`);
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', `translateY(${translateY}px)`)
        this.change.detectChanges();
    }
}
