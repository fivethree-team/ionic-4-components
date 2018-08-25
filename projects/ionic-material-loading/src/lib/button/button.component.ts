import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar.component';

export type verticalAlign = "top" | "bottom";


@Component({
    selector: 'gg-loading-button',
    template: `
    <ion-button class="buttonfull" [disabled]="disabled" [expand]="expand" [color]="color">
    <gg-loading-progressbar [verticalAlign]="verticalAlign" (onComplete)="onComplete($event)" #progress [global]="false"></gg-loading-progressbar>
    <ng-content></ng-content>
  </ion-button>
    `,
    styleUrls: ['button.scss'],

})
export class ButtonFull implements OnInit {

    loading: boolean = false;

    @ViewChild('progress') progress: ProgressBar;
    @Input() color: string = 'light';
    @Input() expand: string = 'block';
    @Input() disabled: boolean = false;
    @Input() verticalAlign: verticalAlign = 'top';
    @Output() onRefresh: EventEmitter<ButtonFull> = new EventEmitter();
    @Output() onRefreshComplete: EventEmitter<ButtonFull> = new EventEmitter();


    constructor() {
    }

    ngOnInit() {
    }

    toggleSpinner() {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
        this.onRefresh.emit(this);
    }

    load() {
        this.loading = true;
        this.progress.load();
    }

    unload() {
        this.loading = false;
        this.progress.unload();
    }

    complete() {
        if (this.loading) {
            this.progress.complete();
        }
    }

    onComplete(isComplete: boolean) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    }
}
