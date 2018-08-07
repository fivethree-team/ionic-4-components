import { OnInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { LoadingService } from '../loading.service';
export declare class ProgressBar implements OnInit, OnDestroy {
    loadingService: LoadingService;
    loading: boolean;
    global: boolean;
    isComplete: boolean;
    onComplete: EventEmitter<boolean>;
    onRefresh: EventEmitter<ProgressBar>;
    bar: ElementRef;
    constructor(loadingService: LoadingService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleSpinner(): void;
    load(): void;
    unload(): void;
    complete(): void;
    fillAnimationComplete(isComplete: boolean): void;
}
