import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class ContentRefresh implements OnInit {
    onProgressChanged: EventEmitter<number>;
    onRefresh: EventEmitter<ContentRefresh>;
    spinner: ElementRef;
    content: ElementRef;
    isComplete: boolean;
    pulling: boolean;
    refreshing: boolean;
    spinnerVisible: boolean;
    translateY: number;
    hintVisible: boolean;
    hintText: string;
    ngOnInit(): void;
    constructor();
    spinRefresher(): void;
    doRefresh(event: any): void;
    refresh(): void;
    completeRefresh(): void;
    onPull(event: any): void;
    onStart(): void;
    changeProgress(progress: number): void;
    fillAnimationDone(event: any): void;
    onSpinnerHidden(event: any): void;
    showHint(): void;
    onHintClicked(): void;
    postHint(event: any): void;
}
