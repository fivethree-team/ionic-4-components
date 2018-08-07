import { Component, Input, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { LoadingService } from '../loading.service';


@Component({
    selector: 'gg-loading-progressbar',
    template: `
<div [@progressAnim] *ngIf="(!global && loading) || (global && loadingService.loading)" class="slider">
  <div *ngIf="!isComplete" class="line"></div>
  <div *ngIf="!isComplete" class="subline inc"></div>
  <div [@fillAnim] (@fillAnim.done)="fillAnimationComplete(isComplete)" *ngIf="isComplete" class="subline fill"></div>
  <div *ngIf="!isComplete" class="subline dec"></div>
</div>
    `,
    styleUrls: ['progress-bar.scss'],
    animations: [
        trigger('progressAnim', [
            transition('void => *', [
                style({ height: '0px' }),
                animate('250ms ease-out')
            ]),
            transition('* => void', [
                animate('299ms ease-in', style({ height: '0px' }))
            ])
        ]),
        trigger('fillAnim', [
            transition('void => *', [
                style({ left: '-5%', width: '5%' }),
                animate('850ms ease-out', style({ left: '0%', width: '100%' }))
            ]),
        ])
    ]
})
export class ProgressBar implements OnInit, OnDestroy {

    loading: boolean = false;
    @Input() global: boolean = false;
    @Input() isComplete: boolean = false;
    @Output() onComplete: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onRefresh: EventEmitter<ProgressBar> = new EventEmitter<ProgressBar>();

    @ViewChild('bar') bar: ElementRef;

    constructor(public loadingService: LoadingService) {
    }

    ngOnInit() {
        if (this.global) {
            this.loadingService.completeChange.subscribe(isComplete => {
                if (isComplete) {
                    this.complete();
                }
            })
        }
    }

    ngOnDestroy() {
        if (this.global) {
            this.loadingService.completeChange.unsubscribe();
        }
    }

    toggleSpinner() {
        this.loading = !this.loading;
    }

    load() {
        this.loading = true;
        this.onRefresh.emit(this);
    }

    unload() {
        this.loading = false;
        if (this.isComplete) {
            this.isComplete = false;
        }
    }

    complete() {
        console.log('set complete');
        this.isComplete = true;
        console.log(this.isComplete);
    }

    fillAnimationComplete(isComplete: boolean) {
        if (isComplete) {
            console.log('fill animation complete', isComplete);
            this.onComplete.emit(isComplete);
            this.isComplete = false;
            if (this.global) {
                this.loadingService.unload();
            } else {
                this.unload();
            }
        }
    }
}
