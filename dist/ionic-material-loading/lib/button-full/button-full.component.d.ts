import { OnInit, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar.component';
export declare class ButtonFull implements OnInit {
    loading: boolean;
    progress: ProgressBar;
    color: string;
    expand: string;
    onRefresh: EventEmitter<ButtonFull>;
    onRefreshComplete: EventEmitter<ButtonFull>;
    constructor();
    ngOnInit(): void;
    toggleSpinner(): void;
    load(): void;
    unload(): void;
    complete(): void;
    onComplete(isComplete: boolean): void;
}
