import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { ProgressBar } from '../progress-bar/progress-bar.component';


@Component({
    selector: 'gg-loading-item',
    template: `
    <ion-item [ngClass]="{'loading': loading}">
    <ng-content></ng-content>
  </ion-item>
  <gg-loading-progressbar (onComplete)="onComplete($event)" #progress [global]="false"></gg-loading-progressbar>

    `,
    styleUrls: ['item.scss'],

})
export class ItemProgress implements OnInit {

    loading: boolean = false;

    @ViewChild('progress') progress: ProgressBar;
    @Output() onRefreshComplete: EventEmitter<ItemProgress> = new EventEmitter<ItemProgress>();
    @Output() onRefresh: EventEmitter<ItemProgress> = new EventEmitter<ItemProgress>();


    constructor() {
    }

    ngOnInit() {
    }

    toggleSpinner() {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
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
