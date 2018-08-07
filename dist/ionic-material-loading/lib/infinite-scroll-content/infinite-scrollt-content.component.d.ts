import { OnInit, ElementRef, EventEmitter, Renderer2, ChangeDetectorRef } from '@angular/core';
export declare class InfiniteScrollContent implements OnInit {
    renderer: Renderer2;
    change: ChangeDetectorRef;
    icon: string;
    spinColor: string;
    fabColor: string;
    vertical: string;
    horizontal: string;
    edge: boolean;
    checkmark: boolean;
    dragProgress: number;
    loading: boolean;
    isComplete: boolean;
    iconState: string;
    spinner: ElementRef;
    onComplete: EventEmitter<InfiniteScrollContent>;
    onRefresh: EventEmitter<InfiniteScrollContent>;
    constructor(renderer: Renderer2, change: ChangeDetectorRef);
    ngOnInit(): void;
    toggleSpinner(): void;
    load(): void;
    unload(): void;
    complete(): void;
    fillAnimationDone(event: any): void;
    changeIconAndReveal(event: any, icon: string): void;
    postComplete(): void;
    changeProgress(progress: number): void;
}
