(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dialog-dialog-module"],{

/***/ "./dist/dialog/fesm5/fivethree-dialog.js":
/*!***********************************************!*\
  !*** ./dist/dialog/fesm5/fivethree-dialog.js ***!
  \***********************************************/
/*! exports provided: DialogService, DialogComponent, MyHammerConfig, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return []; };
    /** @nocollapse */ DialogService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function DialogService_Factory() { return new DialogService(); }, token: DialogService, providedIn: "root" });
    return DialogService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogComponent = /** @class */ (function () {
    function DialogComponent(renderer, change) {
        this.renderer = renderer;
        this.change = change;
        this.animationState = 'hidden';
        this.animation = 'slideIn';
        this.verticalAlign = 'bottom';
        this.backdrop = false;
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
        var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a(elem);
        hammer.get('pan').set({ direction: hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.DIRECTION_ALL });
        /** @type {?} */
        var panup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(hammer, 'panup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["throttleTime"])(2))
            .subscribe(function (res) {
            console.log("panup", res);
            _this.onSwipeUp(res, threshold);
        });
        /** @type {?} */
        var pandown = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(hammer, 'pandown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["throttleTime"])(2))
            .subscribe(function (res) {
            console.log("pandown sub", res);
            _this.onSwipeDown(res, threshold);
        });
        /** @type {?} */
        var panend = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(hammer, 'panend pancancel')
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gg-dialog',
                    template: "\n  <div #backdrop class=\"gg-backdrop\" [@backdropAnim] (@backdropAnim.done)=\"backdropAnimDone($event)\" (click)=\"backdropClose? hideDialog() : false\" *ngIf=\"animationState !== 'hidden' && backdrop\">\n  </div>\n  <div #card [@dialogAnim]=\"animationState\" (@dialogAnim.done)=\"onDialogAnimationDone($event)\" mode=\"md\" class=\"gg-dialog\">\n  <ng-content></ng-content>\n  </div>\n  ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dialogAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => slideIn-top', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateY(-100%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => slideIn-bottom', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateY(100%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => fadeIn-bottom', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => fadeIn-top', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => fadeIn-center', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => slideIn-center', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    top: '50%',
                                    transform: 'translateY(-25%)',
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('slideIn-center => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    // top: '50%',
                                    // transform: 'translateY(+50%)',
                                    opacity: 0
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('240ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                display: 'none',
                                opacity: '0',
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slideIn-top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: 0,
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slideIn-bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                bottom: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fadeIn-top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fadeIn-bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                bottom: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fadeIn-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: '50%',
                                transform: 'translateY(-50%)',
                                'margin-top': 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slideIn-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: '50%',
                                transform: 'translateY(-50%)',
                                'margin-top': 0
                            })),
                        ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('backdropAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('120ms 100ms cubic-bezier(0.32,1,0.23,1)'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                            ])
                        ])
                    ],
                    styles: [".gg-dialog{position:absolute;z-index:5002;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.fullscreen{margin:0;border-radius:0;width:100%;height:100%;box-shadow:0 4px 16px rgba(0,0,0,.12)}.rounded-top{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.rounded-bottom{border-top-left-radius:12px;border-top-right-radius:12px}.gg-backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}"]
                }] }
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DialogComponent.propDecorators = {
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backdropClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        swipeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['card',] }],
        backdropElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['backdrop',] }]
    };
    return DialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyHammerConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = /** @type {?} */ ({
            pan: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_2__["Hammer"].DIRECTION_VERTICAL, threshold: 3 },
        });
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"]));
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
                    ],
                    declarations: [DialogComponent],
                    exports: [DialogComponent],
                    providers: [
                        {
                            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"],
                            useClass: MyHammerConfig
                        }
                    ]
                },] }
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWRpYWxvZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZpdmV0aHJlZS9kaWFsb2cvbGliL2RpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2RpYWxvZy9saWIvZGlhbG9nLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9kaWFsb2cvbGliL2RpYWxvZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCByZWR1Y2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuXG5leHBvcnQgdHlwZSBhbmltYXRpb24gPSBcInNsaWRlSW5cIiB8IFwiZmFkZUluXCJcbmV4cG9ydCB0eXBlIHZlcnRpY2FsQWxpZ24gPSBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2ctZGlhbG9nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjYmFja2Ryb3AgY2xhc3M9XCJnZy1iYWNrZHJvcFwiIFtAYmFja2Ryb3BBbmltXSAoQGJhY2tkcm9wQW5pbS5kb25lKT1cImJhY2tkcm9wQW5pbURvbmUoJGV2ZW50KVwiIChjbGljayk9XCJiYWNrZHJvcENsb3NlPyBoaWRlRGlhbG9nKCkgOiBmYWxzZVwiICpuZ0lmPVwiYW5pbWF0aW9uU3RhdGUgIT09ICdoaWRkZW4nICYmIGJhY2tkcm9wXCI+XG4gIDwvZGl2PlxuICA8ZGl2ICNjYXJkIFtAZGlhbG9nQW5pbV09XCJhbmltYXRpb25TdGF0ZVwiIChAZGlhbG9nQW5pbS5kb25lKT1cIm9uRGlhbG9nQW5pbWF0aW9uRG9uZSgkZXZlbnQpXCIgbW9kZT1cIm1kXCIgY2xhc3M9XCJnZy1kaWFsb2dcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yNSUpJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdzbGlkZUluLWNlbnRlciA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIGVhc2Utb3V0Jywgc3R5bGUoe1xuICAgICAgICAgIC8vIHRvcDogJzUwJScsXG4gICAgICAgICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgrNTAlKScsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI0MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICAnbWFyZ2luLXRvcCc6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgJ21hcmdpbi10b3AnOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICBdKSwgdHJpZ2dlcignYmFja2Ryb3BBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKSwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIF0pXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nXG5cbiAgQElucHV0KCkgYW5pbWF0aW9uOiBhbmltYXRpb24gPSAnc2xpZGVJbic7XG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ24gPSAnYm90dG9tJztcbiAgQElucHV0KCkgYmFja2Ryb3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2Ryb3BDbG9zZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHN3aXBlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnY2FyZCcpIGNhcmQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tkcm9wJykgYmFja2Ryb3BFbGVtOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgcGFuU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgfVxuXG4gIHNldHVwUGFuKGVsZW06IEVsZW1lbnRSZWYsIHRocmVzaG9sZDogbnVtYmVyKSB7XG5cbiAgICBpZiAoIXRoaXMuc3dpcGVFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcihlbGVtKTtcbiAgICBoYW1tZXIuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xuXG4gICAgY29uc3QgcGFudXAgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFudXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbnVwXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZVVwKHJlcywgdGhyZXNob2xkKTtcbiAgICAgIH0pXG5cbiAgICBjb25zdCBwYW5kb3duID0gZnJvbUV2ZW50KGhhbW1lciwgJ3BhbmRvd24nKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbmRvd24gc3ViXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZURvd24ocmVzLCB0aHJlc2hvbGQpO1xuICAgICAgfSlcblxuICAgIGNvbnN0IHBhbmVuZCA9IGZyb21FdmVudChoYW1tZXIsICdwYW5lbmQgcGFuY2FuY2VsJylcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGlzdGFuY2UgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMHB4KWApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB0aGlzLnBhblN1YnMucHVzaChwYW5kb3duLCBwYW51cCwgcGFuZW5kKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmQpO1xuICB9XG5cbiAgc2hvd0RpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gYCR7dGhpcy5hbmltYXRpb259LSR7dGhpcy52ZXJ0aWNhbEFsaWdufWA7XG4gIH1cblxuICBoaWRlRGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJztcbiAgICB0aGlzLnBhblN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSlcbiAgfVxuXG4gIG9uU3dpcGVVcChldmVudCwgdGhyZXNob2xkKSB7XG4gICAgY29uc29sZS5sb2coTWF0aC5leHAoZXZlbnQuZGlzdGFuY2UgLyA1MCkpO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gMSArIE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApIC8gNTA7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbEFsaWduID09PSAndG9wJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKC0ke2V2ZW50LmRpc3RhbmNlICogdmVsb2NpdHl9cHgpYClcbiAgICAgIGlmIChldmVudC5kaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGUgZG93biBoYXBwZW5lZCcpO1xuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblN3aXBlRG93bihldmVudCwgdGhyZXNob2xkKSB7XG4gICAgY29uc3QgdmVsb2NpdHkgPSAxICsgTWF0aC5leHAoZXZlbnQuZGlzdGFuY2UgLyA1MCkgLyA1MDtcbiAgICBjb25zb2xlLmxvZyh2ZWxvY2l0eSk7XG4gICAgaWYgKHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2JvdHRvbScgfHwgdGhpcy52ZXJ0aWNhbEFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7ZXZlbnQuZGlzdGFuY2UgKiB2ZWxvY2l0eX1weClgKVxuICAgICAgaWYgKGV2ZW50LmRpc3RhbmNlID4gdGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZSBkb3duIGhhcHBlbmVkJyk7XG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25EaWFsb2dBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMHB4KWApXG4gICAgfVxuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLnNldHVwUGFuKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LDU4KTtcbiAgICB9XG4gIH1cblxuICBiYWNrZHJvcEFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5iYWNrZHJvcEVsZW0sIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2Ryb3BFbGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5zZXR1cFBhbih0aGlzLmJhY2tkcm9wRWxlbS5uYXRpdmVFbGVtZW50LCAxMTIpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtIYW1tZXJ9IGZyb20gJ2hhbW1lcmpzJztcblxuZXhwb3J0IGNsYXNzIE15SGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IDxhbnk+e1xuICAgIHBhbjogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwsdGhyZXNob2xkOiAzIH0sXG4gIH07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgIHVzZUNsYXNzOiBNeUhhbW1lckNvbmZpZ1xuICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiSGFtbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt3QkFKRDs7Ozs7OztBQ0FBO0lBdUlFLHlCQUFvQixRQUFtQixFQUFTLE1BQXlCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjs4QkFieEQsUUFBUTt5QkFFTyxTQUFTOzZCQUNELFFBQVE7d0JBQ25CLEtBQUs7NkJBQ0EsSUFBSTs0QkFDTCxJQUFJO3VCQUtILEVBQUU7S0FJbkM7Ozs7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

/***/ }),

/***/ "./src/app/dialog/dialog.module.ts":
/*!*****************************************!*\
  !*** ./src/app/dialog/dialog.module.ts ***!
  \*****************************************/
/*! exports provided: DialogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPageModule", function() { return DialogPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _dialog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog.page */ "./src/app/dialog/dialog.page.ts");
/* harmony import */ var dist_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dist/dialog */ "./dist/dialog/fesm5/fivethree-dialog.js");
/* harmony import */ var dist_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dist/loading */ "./dist/loading/fesm5/fivethree-loading.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _dialog_page__WEBPACK_IMPORTED_MODULE_5__["DialogPage"]
    }
];
var DialogPageModule = /** @class */ (function () {
    function DialogPageModule() {
    }
    DialogPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                dist_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
                dist_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dialog_page__WEBPACK_IMPORTED_MODULE_5__["DialogPage"]]
        })
    ], DialogPageModule);
    return DialogPageModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.page.html":
/*!*****************************************!*\
  !*** ./src/app/dialog/dialog.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fiv-dialog #dialogTop [backdropClose]=\"backdropClose\" [swipeEnabled]=\"swipeEnabled\" [animation]=\"animation\" [verticalAlign]=\"verticalAlign\" [backdrop]=\"backdrop\">\n  <ion-card class=\"card\">\n      <ion-card-content>\n          <ion-card-title>Hello World</ion-card-title>\n      \n          <p>The content for this card</p>\n      \n          <ion-button (click)=\"dialogTop.hideDialog()\">schließen</ion-button>\n        </ion-card-content>\n  </ion-card>\n  \n</fiv-dialog>\n\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>dialog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Backdrop</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"backdrop\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Backdrop click closes dialog</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"backdropClose\"></ion-toggle>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Swipe to close</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"swipeEnabled\"></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label>Animation</ion-label>\n        <ion-select slot=\"end\"  [(ngModel)]=\"animation\">\n          <ion-select-option value=\"fadeIn\">fade in</ion-select-option>\n          <ion-select-option value=\"slideIn\">slide in</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Vertical Alignment</ion-label>\n          <ion-select slot=\"end\"  [(ngModel)]=\"verticalAlign\">\n            <ion-select-option value=\"top\">top</ion-select-option>\n            <ion-select-option value=\"center\">center</ion-select-option>\n            <ion-select-option value=\"bottom\">bottom</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <fiv-loading-button (click)=\"openDialog()\">\n          Zeige Dialog\n        </fiv-loading-button>\n\n  </ion-list>\n\n</ion-content>\n<fiv-dialog #dialogBottom [backdropClose]=\"backdropClose\" [swipeEnabled]=\"swipeEnabled\" [animation]=\"animation\" [verticalAlign]=\"verticalAlign\" [backdrop]=\"backdrop\">\n  <ion-card class=\"card\">\n      <ion-card-content>\n          <ion-card-title>Hello World</ion-card-title>\n      \n          <p>The content for this card</p>\n      \n          <ion-button (click)=\"dialogBottom.hideDialog()\">schließen</ion-button>\n        </ion-card-content>\n  </ion-card>\n  \n</fiv-dialog>"

/***/ }),

/***/ "./src/app/dialog/dialog.page.scss":
/*!*****************************************!*\
  !*** ./src/app/dialog/dialog.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "gg-loading-button {\n  margin-top: 16px; }\n\n.card {\n  background: white; }\n"

/***/ }),

/***/ "./src/app/dialog/dialog.page.ts":
/*!***************************************!*\
  !*** ./src/app/dialog/dialog.page.ts ***!
  \***************************************/
/*! exports provided: DialogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPage", function() { return DialogPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dist_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dist/dialog */ "./dist/dialog/fesm5/fivethree-dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogPage = /** @class */ (function () {
    function DialogPage() {
        this.backdrop = true;
        this.verticalAlign = 'top';
        this.animation = 'slideIn';
        this.floating = false;
        this.fullscreen = false;
        this.rounded = true;
        this.backdropClose = false;
        this.swipeEnabled = true;
    }
    DialogPage.prototype.ngOnInit = function () {
    };
    DialogPage.prototype.openDialog = function () {
        if (this.verticalAlign === 'top') {
            this.dialogTop.showDialog();
        }
        else {
            this.dialogBottom.showDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialogTop'),
        __metadata("design:type", dist_dialog__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"])
    ], DialogPage.prototype, "dialogTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialogBottom'),
        __metadata("design:type", dist_dialog__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"])
    ], DialogPage.prototype, "dialogBottom", void 0);
    DialogPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.page.html */ "./src/app/dialog/dialog.page.html"),
            styles: [__webpack_require__(/*! ./dialog.page.scss */ "./src/app/dialog/dialog.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DialogPage);
    return DialogPage;
}());



/***/ })

}]);
//# sourceMappingURL=dialog-dialog-module.js.map