import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class FabSpinner implements OnInit {
    icon: string;
    spinColor: string;
    fabColor: string;
    vertical: string;
    horizontal: string;
    edge: boolean;
    checkmark: boolean;
    loading: boolean;
    isComplete: boolean;
    iconState: string;
    spinner: ElementRef;
    onComplete: EventEmitter<FabSpinner>;
    onRefresh: EventEmitter<FabSpinner>;
    constructor();
    ngOnInit(): void;
    toggleSpinner(): void;
    load(): void;
    unload(): void;
    complete(): void;
    fillAnimationDone(event: any): void;
    changeIconAndReveal(event: any, icon: string): void;
    postComplete(): void;
}
