(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('hammerjs'), require('rxjs'), require('rxjs/operators'), require('@ionic/angular'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ionic-material-dialog', ['exports', '@angular/core', '@angular/animations', 'hammerjs', 'rxjs', 'rxjs/operators', '@ionic/angular', '@angular/common', '@angular/platform-browser'], factory) :
    (factory((global['ionic-material-dialog'] = {}),global.ng.core,global.ng.animations,null,global.rxjs,global.rxjs.operators,null,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,i0,animations,Hammer,rxjs,operators,angular,common,platformBrowser) { 'use strict';

    var Hammer__default = 'default' in Hammer ? Hammer['default'] : Hammer;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogService = (function () {
        function DialogService() {
        }
        DialogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        DialogService.ctorParameters = function () { return []; };
        /** @nocollapse */ DialogService.ngInjectableDef = i0.defineInjectable({ factory: function DialogService_Factory() { return new DialogService(); }, token: DialogService, providedIn: "root" });
        return DialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogComponent = (function () {
        function DialogComponent(renderer, change) {
            this.renderer = renderer;
            this.change = change;
            this.animationState = 'hidden';
            this.animation = 'slideIn';
            this.verticalAlign = 'bottom';
            this.floating = false;
            this.backdrop = false;
            this.fullscreen = false;
            this.rounded = false;
            this.backdropClose = true;
            this.swipeEnabled = true;
            this.panSubs = [];
        }
        /**
         * @param {?} elem
         * @param {?} threshold
         * @return {?}
         */
        DialogComponent.prototype.setupPan = /**
         * @param {?} elem
         * @param {?} threshold
         * @return {?}
         */
            function (elem, threshold) {
                var _this = this;
                if (!this.swipeEnabled) {
                    return;
                }
                /** @type {?} */
                var hammer = new Hammer__default(elem);
                hammer.get('pan').set({ direction: Hammer__default.DIRECTION_ALL });
                /** @type {?} */
                var panup = rxjs.fromEvent(hammer, 'panup')
                    .pipe(operators.throttleTime(2))
                    .subscribe(function (res) {
                    console.log("panup", res);
                    _this.onSwipeUp(res, threshold);
                });
                /** @type {?} */
                var pandown = rxjs.fromEvent(hammer, 'pandown')
                    .pipe(operators.throttleTime(2))
                    .subscribe(function (res) {
                    console.log("pandown sub", res);
                    _this.onSwipeDown(res, threshold);
                });
                /** @type {?} */
                var panend = rxjs.fromEvent(hammer, 'panend pancancel')
                    .subscribe(function (res) {
                    if (res.distance < threshold) {
                        _this.renderer.setStyle(_this.card.nativeElement, 'transform', "translateY(0px)");
                    }
                });
                this.panSubs.push(pandown, panup, panend);
            };
        /**
         * @return {?}
         */
        DialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.card);
            };
        /**
         * @return {?}
         */
        DialogComponent.prototype.showDialog = /**
         * @return {?}
         */
            function () {
                this.animationState = this.animation + "-" + this.verticalAlign;
            };
        /**
         * @return {?}
         */
        DialogComponent.prototype.hideDialog = /**
         * @return {?}
         */
            function () {
                this.animationState = 'hidden';
                this.panSubs.forEach(function (sub) {
                    sub.unsubscribe();
                });
            };
        /**
         * @return {?}
         */
        DialogComponent.prototype.isFloating = /**
         * @return {?}
         */
            function () {
                return this.floating || (this.rounded && this.verticalAlign === 'center');
            };
        /**
         * @return {?}
         */
        DialogComponent.prototype.roundedTop = /**
         * @return {?}
         */
            function () {
                return this.rounded && this.verticalAlign === 'top' && !this.floating;
            };
        /**
         * @return {?}
         */
        DialogComponent.prototype.roundedBottom = /**
         * @return {?}
         */
            function () {
                return this.rounded && this.verticalAlign === 'bottom' && !this.floating;
            };
        /**
         * @param {?} event
         * @param {?} threshold
         * @return {?}
         */
        DialogComponent.prototype.onSwipeUp = /**
         * @param {?} event
         * @param {?} threshold
         * @return {?}
         */
            function (event, threshold) {
                console.log(Math.exp(event.distance / 50));
                /** @type {?} */
                var velocity = 1 + Math.exp(event.distance / 50) / 50;
                if (this.verticalAlign === 'top') {
                    this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(-" + event.distance * velocity + "px)");
                    if (event.distance > threshold) {
                        console.log('swipe down happened');
                        this.hideDialog();
                    }
                }
            };
        /**
         * @param {?} event
         * @param {?} threshold
         * @return {?}
         */
        DialogComponent.prototype.onSwipeDown = /**
         * @param {?} event
         * @param {?} threshold
         * @return {?}
         */
            function (event, threshold) {
                /** @type {?} */
                var velocity = 1 + Math.exp(event.distance / 50) / 50;
                console.log(velocity);
                if (this.verticalAlign === 'bottom' || this.verticalAlign === 'center') {
                    this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(" + event.distance * velocity + "px)");
                    if (event.distance > threshold) {
                        console.log('swipe down happened');
                        this.hideDialog();
                    }
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DialogComponent.prototype.onDialogAnimationDone = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.toState === 'hidden') {
                    this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(0px)");
                }
                if (event.fromState === 'hidden') {
                    this.setupPan(this.card.nativeElement, 58);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DialogComponent.prototype.backdropAnimDone = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log(this.backdropElem, event);
                if (event.fromState === 'void') {
                    // this.change.detectChanges();
                    console.log(this.backdropElem.nativeElement);
                    this.setupPan(this.backdropElem.nativeElement, 112);
                }
            };
        DialogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gg-dialog',
                        template: "\n  <div #backdrop class=\"gg-backdrop\" [@backdropAnim] (@backdropAnim.done)=\"backdropAnimDone($event)\" (click)=\"backdropClose? hideDialog() : false\" *ngIf=\"animationState !== 'hidden' && backdrop\">\n  </div>\n  <ion-card #card [@dialogAnim]=\"animationState\" (@dialogAnim.done)=\"onDialogAnimationDone($event)\" mode=\"md\" class=\"gg-dialog\" [ngClass]=\"{'floating': isFloating(),'fullscreen':fullscreen,'rounded-top': roundedTop(),'rounded-bottom':roundedBottom()}\">\n  <ng-content></ng-content>\n  </ion-card>\n  ",
                        styles: [".gg-dialog{position:absolute;z-index:5002;background:#fff;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.fullscreen{margin:0;border-radius:0;width:100%;height:100%;box-shadow:0 4px 16px rgba(0,0,0,.12)}.rounded-top{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.rounded-bottom{border-top-left-radius:12px;border-top-right-radius:12px}.gg-backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}"],
                        animations: [
                            animations.trigger('dialogAnim', [
                                animations.transition('hidden => slideIn-top', [
                                    animations.style({
                                        transform: 'translateY(-100%)'
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('hidden => slideIn-bottom', [
                                    animations.style({
                                        transform: 'translateY(100%)'
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('hidden => fadeIn-bottom', [
                                    animations.style({
                                        opacity: 0
                                    }),
                                    animations.animate('360ms ease-out')
                                ]),
                                animations.transition('hidden => fadeIn-top', [
                                    animations.style({
                                        opacity: 0
                                    }),
                                    animations.animate('360ms ease-out')
                                ]),
                                animations.transition('hidden => fadeIn-center', [
                                    animations.style({
                                        opacity: 0,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    }),
                                    animations.animate('360ms ease-out')
                                ]),
                                animations.transition('hidden => slideIn-center', [
                                    animations.style({
                                        top: '50%',
                                        transform: 'translateY(-25%)',
                                        opacity: 0
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('slideIn-center => hidden', [
                                    animations.animate('120ms ease-out', animations.style({
                                        // top: '50%',
                                        // transform: 'translateY(+50%)',
                                        opacity: 0
                                    }))
                                ]),
                                animations.transition('* => hidden', [
                                    animations.animate('240ms ease-out')
                                ]),
                                animations.state('hidden', animations.style({
                                    display: 'none',
                                    opacity: '0',
                                })),
                                animations.state('slideIn-top', animations.style({
                                    top: 0,
                                })),
                                animations.state('slideIn-bottom', animations.style({
                                    bottom: 0
                                })),
                                animations.state('fadeIn-top', animations.style({
                                    top: 0
                                })),
                                animations.state('fadeIn-bottom', animations.style({
                                    bottom: 0
                                })),
                                animations.state('fadeIn-center', animations.style({
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    'margin-top': 0
                                })),
                                animations.state('slideIn-center', animations.style({
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    'margin-top': 0
                                })),
                            ]), animations.trigger('backdropAnim', [
                                animations.transition('void => *', [
                                    animations.style({
                                        opacity: 0
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('120ms 100ms cubic-bezier(0.32,1,0.23,1)'), animations.style({
                                        opacity: 0
                                    }),
                                ])
                            ])
                        ],
                    },] },
        ];
        /** @nocollapse */
        DialogComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ChangeDetectorRef }
            ];
        };
        DialogComponent.propDecorators = {
            animation: [{ type: i0.Input }],
            verticalAlign: [{ type: i0.Input }],
            floating: [{ type: i0.Input }],
            backdrop: [{ type: i0.Input }],
            fullscreen: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            backdropClose: [{ type: i0.Input }],
            swipeEnabled: [{ type: i0.Input }],
            card: [{ type: i0.ViewChild, args: ['card',] }],
            backdropElem: [{ type: i0.ViewChild, args: ['backdrop',] }]
        };
        return DialogComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyHammerConfig = (function (_super) {
        __extends(MyHammerConfig, _super);
        function MyHammerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.overrides = /** @type {?} */ ({
                pan: { direction: Hammer.Hammer.DIRECTION_VERTICAL, threshold: 3 },
            });
            return _this;
        }
        return MyHammerConfig;
    }(platformBrowser.HammerGestureConfig));
    var DialogModule = (function () {
        function DialogModule() {
        }
        DialogModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            common.CommonModule
                        ],
                        declarations: [DialogComponent],
                        exports: [DialogComponent],
                        providers: [
                            {
                                provide: platformBrowser.HAMMER_GESTURE_CONFIG,
                                useClass: MyHammerConfig
                            }
                        ]
                    },] },
        ];
        return DialogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DialogService = DialogService;
    exports.DialogComponent = DialogComponent;
    exports.MyHammerConfig = MyHammerConfig;
    exports.DialogModule = DialogModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtZGlhbG9nLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbWF0ZXJpYWwtZGlhbG9nL2xpYi9kaWFsb2cuc2VydmljZS50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtZGlhbG9nL2xpYi9kaWFsb2cuY29tcG9uZW50LnRzIixudWxsLCJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy9saWIvZGlhbG9nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIHJlZHVjZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCB0eXBlIGFuaW1hdGlvbiA9IFwic2xpZGVJblwiIHwgXCJmYWRlSW5cIlxuZXhwb3J0IHR5cGUgdmVydGljYWxBbGlnbiA9IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNiYWNrZHJvcCBjbGFzcz1cImdnLWJhY2tkcm9wXCIgW0BiYWNrZHJvcEFuaW1dIChAYmFja2Ryb3BBbmltLmRvbmUpPVwiYmFja2Ryb3BBbmltRG9uZSgkZXZlbnQpXCIgKGNsaWNrKT1cImJhY2tkcm9wQ2xvc2U/IGhpZGVEaWFsb2coKSA6IGZhbHNlXCIgKm5nSWY9XCJhbmltYXRpb25TdGF0ZSAhPT0gJ2hpZGRlbicgJiYgYmFja2Ryb3BcIj5cbiAgPC9kaXY+XG4gIDxpb24tY2FyZCAjY2FyZCBbQGRpYWxvZ0FuaW1dPVwiYW5pbWF0aW9uU3RhdGVcIiAoQGRpYWxvZ0FuaW0uZG9uZSk9XCJvbkRpYWxvZ0FuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIG1vZGU9XCJtZFwiIGNsYXNzPVwiZ2ctZGlhbG9nXCIgW25nQ2xhc3NdPVwieydmbG9hdGluZyc6IGlzRmxvYXRpbmcoKSwnZnVsbHNjcmVlbic6ZnVsbHNjcmVlbiwncm91bmRlZC10b3AnOiByb3VuZGVkVG9wKCksJ3JvdW5kZWQtYm90dG9tJzpyb3VuZGVkQm90dG9tKCl9XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tY2FyZD5cbiAgYCxcbiAgc3R5bGVzOiBbYC5nZy1kaWFsb2d7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo1MDAyO2JhY2tncm91bmQ6I2ZmZjttYXJnaW46MDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJX0udG9we3RvcDowfS5ib3R0b217Ym90dG9tOjB9LmZsb2F0aW5ne21hcmdpbjoxNnB4IDIwcHg7Ym9yZGVyLXJhZGl1czo4cHg7d2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7Ym94LXNoYWRvdzowIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKX0uZnVsbHNjcmVlbnttYXJnaW46MDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfS5yb3VuZGVkLXRvcHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEycHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTJweH0ucm91bmRlZC1ib3R0b217Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMnB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEycHh9LmdnLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6NTAwMX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0FuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTI1JSknLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NsaWRlSW4tY2VudGVyID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgZWFzZS1vdXQnLCBzdHlsZSh7XG4gICAgICAgICAgLy8gdG9wOiAnNTAlJyxcbiAgICAgICAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCs1MCUpJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjQwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICdtYXJnaW4tdG9wJzogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICAnbWFyZ2luLXRvcCc6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgIF0pLCB0cmlnZ2VyKCdiYWNrZHJvcEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgXSldLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFuaW1hdGlvblN0YXRlID0gJ2hpZGRlbidcblxuICBASW5wdXQoKSBhbmltYXRpb246IGFuaW1hdGlvbiA9ICdzbGlkZUluJztcbiAgQElucHV0KCkgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnbiA9ICdib3R0b20nO1xuICBASW5wdXQoKSBmbG9hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBiYWNrZHJvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2Ryb3BDbG9zZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHN3aXBlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnY2FyZCcpIGNhcmQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tkcm9wJykgYmFja2Ryb3BFbGVtOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgcGFuU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgfVxuXG4gIHNldHVwUGFuKGVsZW06IEVsZW1lbnRSZWYsIHRocmVzaG9sZDogbnVtYmVyKSB7XG5cbiAgICBpZiAoIXRoaXMuc3dpcGVFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcihlbGVtKTtcbiAgICBoYW1tZXIuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xuXG4gICAgY29uc3QgcGFudXAgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFudXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbnVwXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZVVwKHJlcywgdGhyZXNob2xkKTtcbiAgICAgIH0pXG5cbiAgICBjb25zdCBwYW5kb3duID0gZnJvbUV2ZW50KGhhbW1lciwgJ3BhbmRvd24nKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbmRvd24gc3ViXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZURvd24ocmVzLCB0aHJlc2hvbGQpO1xuICAgICAgfSlcblxuICAgIGNvbnN0IHBhbmVuZCA9IGZyb21FdmVudChoYW1tZXIsICdwYW5lbmQgcGFuY2FuY2VsJylcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGlzdGFuY2UgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMHB4KWApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB0aGlzLnBhblN1YnMucHVzaChwYW5kb3duLCBwYW51cCwgcGFuZW5kKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmQpO1xuICB9XG5cbiAgc2hvd0RpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gYCR7dGhpcy5hbmltYXRpb259LSR7dGhpcy52ZXJ0aWNhbEFsaWdufWA7XG4gIH1cblxuICBoaWRlRGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJztcbiAgICB0aGlzLnBhblN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSlcbiAgfVxuXG4gIGlzRmxvYXRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmxvYXRpbmcgfHwgKHRoaXMucm91bmRlZCAmJiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdjZW50ZXInKVxuICB9XG5cbiAgcm91bmRlZFRvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3VuZGVkICYmIHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcgJiYgIXRoaXMuZmxvYXRpbmdcbiAgfVxuXG4gIHJvdW5kZWRCb3R0b20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91bmRlZCAmJiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdib3R0b20nICYmICF0aGlzLmZsb2F0aW5nXG4gIH1cblxuICBvblN3aXBlVXAoZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnNvbGUubG9nKE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IDEgKyBNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSAvIDUwO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgtJHtldmVudC5kaXN0YW5jZSAqIHZlbG9jaXR5fXB4KWApXG4gICAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXBlIGRvd24gaGFwcGVuZWQnKTtcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Td2lwZURvd24oZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gMSArIE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApIC8gNTA7XG4gICAgY29uc29sZS5sb2codmVsb2NpdHkpO1xuICAgIGlmICh0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdib3R0b20nIHx8IHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke2V2ZW50LmRpc3RhbmNlICogdmVsb2NpdHl9cHgpYClcbiAgICAgIGlmIChldmVudC5kaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGUgZG93biBoYXBwZW5lZCcpO1xuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uRGlhbG9nQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDBweClgKVxuICAgIH1cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5zZXR1cFBhbih0aGlzLmNhcmQubmF0aXZlRWxlbWVudCw1OCk7XG4gICAgfVxuICB9XG5cbiAgYmFja2Ryb3BBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2Ryb3BFbGVtLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICAvLyB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJhY2tkcm9wRWxlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuc2V0dXBQYW4odGhpcy5iYWNrZHJvcEVsZW0ubmF0aXZlRWxlbWVudCwgMTEyKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtIYW1tZXJ9IGZyb20gJ2hhbW1lcmpzJztcblxuZXhwb3J0IGNsYXNzIE15SGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IDxhbnk+e1xuICAgIHBhbjogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwsdGhyZXNob2xkOiAzIH0sXG4gIH07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgIHVzZUNsYXNzOiBNeUhhbW1lckNvbmZpZ1xuICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJIYW1tZXIiLCJmcm9tRXZlbnQiLCJ0aHJvdHRsZVRpbWUiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsInN0eWxlIiwiYW5pbWF0ZSIsInN0YXRlIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIlZpZXdDaGlsZCIsInRzbGliXzEuX19leHRlbmRzIiwiSGFtbWVyR2VzdHVyZUNvbmZpZyIsIk5nTW9kdWxlIiwiSW9uaWNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJIQU1NRVJfR0VTVFVSRV9DT05GSUciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NEJBSkQ7Ozs7Ozs7QUNBQTtRQTBJRSx5QkFBb0IsUUFBbUIsRUFBUyxNQUF5QjtZQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1lBQVMsV0FB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