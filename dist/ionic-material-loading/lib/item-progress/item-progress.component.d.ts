import { OnInit, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar.component';
export declare class ItemProgress implements OnInit {
    loading: boolean;
    progress: ProgressBar;
    onRefreshComplete: EventEmitter<ItemProgress>;
    onRefresh: EventEmitter<ItemProgress>;
    constructor();
    ngOnInit(): void;
    toggleSpinner(): void;
    load(): void;
    unload(): void;
    complete(): void;
    onComplete(isComplete: boolean): void;
}
