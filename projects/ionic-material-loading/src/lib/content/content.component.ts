import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { fromEvent } from 'rxjs';



@Component({
    selector: 'gg-loading-content',
    template: `
    <div class="gg-hint-wrapper">
    <ion-chip *ngIf="hintVisible" (click)="onHintClicked()" [@hintAnim] (@hintAnim.done)="postHint($event)" #hint class="gg-hint-container">
  <ion-icon class="icon" name="md-arrow-up"></ion-icon>
  <ion-label class="text">{{hintText}}</ion-label>
</ion-chip>
    </div>
    
    <div [@spinnerAnim] (@spinnerAnim.done)="onSpinnerHidden($event)" *ngIf="spinnerVisible" #spinner class="gg-spinner-container">
        <svg class="spinner rotate" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <circle [@fillAnim]="isComplete ? 'fill' : 'spinning'" (@fillAnim.done)="fillAnimationDone($event)" [ngClass]="{'path': !isComplete}" fill="none" stroke-width="4" stroke-linecap="round" cx="36" cy="36" r="32"></circle>
        </svg>
    </div>
        <ion-refresher (ionStart)="onStart()" [snapbackDuration]="280" [closeDuration]="280" [pullMax]="168" [pullMin]="112" [disabled]="false" slot="fixed" (ionRefresh)="doRefresh($event)" (ionPull)="onPull($event)">
        </ion-refresher>
    `,
    styleUrls: ['content.scss'],
    animations: [
        trigger('fillAnim', [
            transition('* => fill', [
                style({
                    'stroke-dasharray': 180,
                    'stroke-dashoffset': 90,
                    'transformOrigin': 'center',
                    'stroke': '#DE3E35'
                }),
                animate('360ms ease-out')
            ]),
            state('fill', style({
                'stroke-dasharray': 315,
                'stroke-dashoffset': 0,
                'transformOrigin': 'center',
                'stroke': '#1B9A59',
            })
            )]
        ),
        trigger('spinnerAnim', [
            transition('* => void', [
                animate('250ms ease-out', style({ opacity: 0 }))
            ]),
        ]),
        trigger('hintAnim', [
            transition('void => *', [
                style({ opacity: 0, transform: 'translateY(-80px)' }),
                animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
            ]),
            transition('* => void', [
                style({ width: '112px' }),
                animate('125ms ease-out', style({ width: '40px' }))
            ]),
        ]
        ),
    ],

})
export class ContentRefresh implements OnInit {

    @Output() onProgressChanged: EventEmitter<number> = new EventEmitter();
    @Output() onRefresh: EventEmitter<ContentRefresh> = new EventEmitter();
    @ViewChild('spinner') spinner: ElementRef;
    @ViewChild('content') content: ElementRef;
    isComplete = false;
    pulling: boolean = false;
    refreshing: boolean = false;
    spinnerVisible: boolean = true;
    translateY: number = 0;
    hintVisible: boolean = false;
    @Input() hintText: string = 'new posts';


    ngOnInit() {

        fromEvent(document, 'touchend').subscribe(res => {
            console.log('touchend', res);
            if (this.pulling && !this.refreshing) {
                this.changeProgress(0);
            }
        });

    }

    constructor() {
    }

    spinRefresher() {
        this.spinner.nativeElement.style.setProperty('transform', `translateY(168px)`);
        this.refreshing = true;
        this.pulling = false;
    }

    doRefresh(event) {
        this.spinRefresher();
        console.log('refresh here');
        setTimeout(() => {
            event.target.complete();
        }, 140);
        this.refresh();

    }

    refresh() {
        this.onRefresh.emit(this);
    }

    completeRefresh() {
        this.refreshing = false;
        this.isComplete = true;
    }

    onPull(event) {
        this.pulling = true;
        console.log(event);
        const progress = event.target.getProgress();
        if (progress <= 1) {
            this.onProgressChanged.emit(progress);
            this.changeProgress(progress);

        }
    }

    onStart() {
        // this.changeProgress(0);
    }

    public changeProgress(progress: number) {
        this.translateY = 112 * progress;
        const translateY = this.translateY;
        console.log(`translateY(${translateY}px)`);
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', `translateY(${translateY}px)`);
        // this.change.detectChanges();
    }

    fillAnimationDone(event) {

        if (event.toState === 'fill' && event.fromState === 'spinning') {
            console.log('fillAnim complete', event);

            this.spinnerVisible = false;
            this.isComplete = false;
        }
    }

    onSpinnerHidden(event) {
        if (event.fromState !== 'void') {
            console.log('refresh complete', event);
            this.spinnerVisible = true;
        }

    }

    showHint() {
        this.hintVisible = true;
    }

    onHintClicked() {
        console.log('on hint clicked');
        this.hintVisible = false;
    }

    postHint(event) {
        console.log(event);
        if (!event.fromState && event.toState == 'void') {
            this.refresh();
            this.spinRefresher();

        }
    }


}
