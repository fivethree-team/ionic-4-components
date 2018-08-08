import { OnInit } from '@angular/core';
export declare type animation = "slideIn" | "fadeIn";
export declare type verticalAlign = "top" | "bottom" | "center";
export declare class DialogComponent implements OnInit {
    animationState: string;
    animation: animation;
    verticalAlign: verticalAlign;
    floating: boolean;
    backdrop: boolean;
    constructor();
    ngOnInit(): void;
    showDialog(): void;
    hideDialog(): void;
}
