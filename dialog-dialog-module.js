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
                    selector: 'fiv-dialog',
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWRpYWxvZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZpdmV0aHJlZS9kaWFsb2cvbGliL2RpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2RpYWxvZy9saWIvZGlhbG9nLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9kaWFsb2cvbGliL2RpYWxvZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCByZWR1Y2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuXG5leHBvcnQgdHlwZSBhbmltYXRpb24gPSBcInNsaWRlSW5cIiB8IFwiZmFkZUluXCJcbmV4cG9ydCB0eXBlIHZlcnRpY2FsQWxpZ24gPSBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI2JhY2tkcm9wIGNsYXNzPVwiZ2ctYmFja2Ryb3BcIiBbQGJhY2tkcm9wQW5pbV0gKEBiYWNrZHJvcEFuaW0uZG9uZSk9XCJiYWNrZHJvcEFuaW1Eb25lKCRldmVudClcIiAoY2xpY2spPVwiYmFja2Ryb3BDbG9zZT8gaGlkZURpYWxvZygpIDogZmFsc2VcIiAqbmdJZj1cImFuaW1hdGlvblN0YXRlICE9PSAnaGlkZGVuJyAmJiBiYWNrZHJvcFwiPlxuICA8L2Rpdj5cbiAgPGRpdiAjY2FyZCBbQGRpYWxvZ0FuaW1dPVwiYW5pbWF0aW9uU3RhdGVcIiAoQGRpYWxvZ0FuaW0uZG9uZSk9XCJvbkRpYWxvZ0FuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIG1vZGU9XCJtZFwiIGNsYXNzPVwiZ2ctZGlhbG9nXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWydkaWFsb2cuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMjUlKScsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2xpZGVJbi1jZW50ZXIgPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyBlYXNlLW91dCcsIHN0eWxlKHtcbiAgICAgICAgICAvLyB0b3A6ICc1MCUnLFxuICAgICAgICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoKzUwJSknLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcyNDBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgJ21hcmdpbi10b3AnOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICdtYXJnaW4tdG9wJzogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgXSksIHRyaWdnZXIoJ2JhY2tkcm9wQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJyksIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICBdKV0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJ1xuXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYW5pbWF0aW9uID0gJ3NsaWRlSW4nO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIGJhY2tkcm9wOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJhY2tkcm9wQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzd2lwZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhcmQnKSBjYXJkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdiYWNrZHJvcCcpIGJhY2tkcm9wRWxlbTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIHBhblN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gIH1cblxuICBzZXR1cFBhbihlbGVtOiBFbGVtZW50UmVmLCB0aHJlc2hvbGQ6IG51bWJlcikge1xuXG4gICAgaWYgKCF0aGlzLnN3aXBlRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIoZWxlbSk7XG4gICAgaGFtbWVyLmdldCgncGFuJykuc2V0KHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCB9KTtcblxuICAgIGNvbnN0IHBhbnVwID0gZnJvbUV2ZW50KGhhbW1lciwgJ3BhbnVwJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoMilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYW51cFwiLCByZXMpO1xuICAgICAgICB0aGlzLm9uU3dpcGVVcChyZXMsIHRocmVzaG9sZCk7XG4gICAgICB9KVxuXG4gICAgY29uc3QgcGFuZG93biA9IGZyb21FdmVudChoYW1tZXIsICdwYW5kb3duJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoMilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYW5kb3duIHN1YlwiLCByZXMpO1xuICAgICAgICB0aGlzLm9uU3dpcGVEb3duKHJlcywgdGhyZXNob2xkKTtcbiAgICAgIH0pXG5cbiAgICBjb25zdCBwYW5lbmQgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFuZW5kIHBhbmNhbmNlbCcpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzLmRpc3RhbmNlIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDBweClgKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgdGhpcy5wYW5TdWJzLnB1c2gocGFuZG93biwgcGFudXAsIHBhbmVuZCk7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jYXJkKTtcbiAgfVxuXG4gIHNob3dEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IGAke3RoaXMuYW5pbWF0aW9ufS0ke3RoaXMudmVydGljYWxBbGlnbn1gO1xuICB9XG5cbiAgaGlkZURpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ2hpZGRlbic7XG4gICAgdGhpcy5wYW5TdWJzLmZvckVhY2goc3ViID0+IHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pXG4gIH1cblxuICBvblN3aXBlVXAoZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnNvbGUubG9nKE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IDEgKyBNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSAvIDUwO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgtJHtldmVudC5kaXN0YW5jZSAqIHZlbG9jaXR5fXB4KWApXG4gICAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXBlIGRvd24gaGFwcGVuZWQnKTtcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Td2lwZURvd24oZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gMSArIE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApIC8gNTA7XG4gICAgY29uc29sZS5sb2codmVsb2NpdHkpO1xuICAgIGlmICh0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdib3R0b20nIHx8IHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke2V2ZW50LmRpc3RhbmNlICogdmVsb2NpdHl9cHgpYClcbiAgICAgIGlmIChldmVudC5kaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGUgZG93biBoYXBwZW5lZCcpO1xuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uRGlhbG9nQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDBweClgKVxuICAgIH1cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5zZXR1cFBhbih0aGlzLmNhcmQubmF0aXZlRWxlbWVudCw1OCk7XG4gICAgfVxuICB9XG5cbiAgYmFja2Ryb3BBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2Ryb3BFbGVtLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICAvLyB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJhY2tkcm9wRWxlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuc2V0dXBQYW4odGhpcy5iYWNrZHJvcEVsZW0ubmF0aXZlRWxlbWVudCwgMTEyKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7SGFtbWVyfSBmcm9tICdoYW1tZXJqcyc7XG5cbmV4cG9ydCBjbGFzcyBNeUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBvdmVycmlkZXMgPSA8YW55PntcbiAgICBwYW46IHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMLHRocmVzaG9sZDogMyB9LFxuICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEaWFsb2dDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgICB1c2VDbGFzczogTXlIYW1tZXJDb25maWdcbiAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkhhbW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0JBSkQ7Ozs7Ozs7QUNBQTtJQXVJRSx5QkFBb0IsUUFBbUIsRUFBUyxNQUF5QjtRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7OEJBYnhELFFBQVE7eUJBRU8sU0FBUzs2QkFDRCxRQUFRO3dCQUNuQixLQUFLOzZCQUNBLElBQUk7NEJBQ0wsSUFBSTt1QkFLSCxFQUFFO0tBSW5DOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLElBQWdCLEVBQUUsU0FBaUI7UUFBNUMsaUJBcUNDO1FBbkNDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLE9BQU87U0FDUjs7UUFFRCxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQzs7UUFFM0QsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDckMsSUFBSSxDQUNILFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDaEI7YUFDQSxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFBOztRQUVKLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO2FBQ3pDLElBQUksQ0FDSCxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2hCO2FBQ0EsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2xDLENBQUMsQ0FBQTs7UUFFSixJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDO2FBQ2pELFNBQVMsQ0FBQyxVQUFDLEdBQVE7WUFDbEIsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLFNBQVMsRUFBRTtnQkFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUE7YUFDaEY7U0FDRixDQUFDLENBQUE7UUFFSixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBRzNDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFNLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLGFBQWUsQ0FBQztLQUNqRTs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUN0QixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFBO0tBQ0g7Ozs7OztJQUVELG1DQUFTOzs7OztJQUFULFVBQVUsS0FBSyxFQUFFLFNBQVM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDM0MsSUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFeEQsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsaUJBQWUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLFFBQUssQ0FBQyxDQUFBO1lBQzNHLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1NBQ0Y7S0FDRjs7Ozs7O0lBRUQscUNBQVc7Ozs7O0lBQVgsVUFBWSxLQUFLLEVBQUUsU0FBUzs7UUFDMUIsSUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBYyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsUUFBSyxDQUFDLENBQUE7WUFDMUcsSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRjtLQUVGOzs7OztJQUVELCtDQUFxQjs7OztJQUFyQixVQUFzQixLQUFLO1FBQ3pCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUE7U0FDaEY7UUFDRCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0M7S0FDRjs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBSztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTs7WUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckQ7S0FDRjs7Z0JBaE9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHlZQU1UO29CQUVELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixVQUFVLENBQUMsdUJBQXVCLEVBQUU7Z0NBQ2xDLEtBQUssQ0FBQztvQ0FDSixTQUFTLEVBQUUsbUJBQW1CO2lDQUMvQixDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMsMEJBQTBCLEVBQUU7Z0NBQ3JDLEtBQUssQ0FBQztvQ0FDSixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMseUJBQXlCLEVBQUU7Z0NBQ3BDLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsc0JBQXNCLEVBQUU7Z0NBQ2pDLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMseUJBQXlCLEVBQUU7Z0NBQ3BDLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztvQ0FDVixHQUFHLEVBQUUsS0FBSztvQ0FDVixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDO2dDQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsMEJBQTBCLEVBQUU7Z0NBQ3JDLEtBQUssQ0FBQztvQ0FDSixHQUFHLEVBQUUsS0FBSztvQ0FDVixTQUFTLEVBQUUsa0JBQWtCO29DQUM3QixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMsMEJBQTBCLEVBQUU7Z0NBQ3JDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7OztvQ0FHOUIsT0FBTyxFQUFFLENBQUM7aUNBQ1gsQ0FBQyxDQUFDOzZCQUNKLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTtnQ0FDeEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNwQixPQUFPLEVBQUUsTUFBTTtnQ0FDZixPQUFPLEVBQUUsR0FBRzs2QkFDYixDQUFDLENBQ0Q7NEJBQ0QsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7Z0NBQ3pCLEdBQUcsRUFBRSxDQUFDOzZCQUNQLENBQUMsQ0FDRDs0QkFDRCxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO2dDQUM1QixNQUFNLEVBQUUsQ0FBQzs2QkFDVixDQUFDLENBQ0Q7NEJBQ0QsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7Z0NBQ3hCLEdBQUcsRUFBRSxDQUFDOzZCQUNQLENBQUMsQ0FDRDs0QkFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztnQ0FDM0IsTUFBTSxFQUFFLENBQUM7NkJBQ1YsQ0FBQyxDQUNEOzRCQUNELEtBQUssQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO2dDQUMzQixHQUFHLEVBQUUsS0FBSztnQ0FDVixTQUFTLEVBQUUsa0JBQWtCO2dDQUM3QixZQUFZLEVBQUUsQ0FBQzs2QkFDaEIsQ0FBQyxDQUNEOzRCQUNELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7Z0NBQzVCLEdBQUcsRUFBRSxLQUFLO2dDQUNWLFNBQVMsRUFBRSxrQkFBa0I7Z0NBQzdCLFlBQVksRUFBRSxDQUFDOzZCQUNoQixDQUFDLENBQ0Q7eUJBQ0YsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUU7NEJBQzFCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMseUNBQXlDLENBQUMsRUFBRSxLQUFLLENBQUM7b0NBQ3hELE9BQU8sRUFBRSxDQUFDO2lDQUNYLENBQUM7NkJBQ0gsQ0FBQzt5QkFDSCxDQUFDO3FCQUFDOztpQkFDTjs7OztnQkF2SGtDLFNBQVM7Z0JBQXlCLGlCQUFpQjs7OzRCQTRIbkYsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUVMLFNBQVMsU0FBQyxNQUFNOytCQUNoQixTQUFTLFNBQUMsVUFBVTs7MEJBbkl2Qjs7Ozs7OztJQ09BO0lBQW9DQSxrQ0FBbUI7Ozs0Q0FDcEM7WUFDZixHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUVDLFFBQU0sQ0FBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFO1NBQzNEOzs7eUJBVkg7RUFPb0MsbUJBQW1CLEVBSXRELENBQUE7QUFKRDs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSxjQUFjO3lCQUMzQjtxQkFDQTtpQkFDRjs7dUJBMUJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

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

module.exports = "<fiv-dialog #dialogTop [backdropClose]=\"backdropClose\" [swipeEnabled]=\"swipeEnabled\" [animation]=\"animation\" [verticalAlign]=\"verticalAlign\" [backdrop]=\"backdrop\">\n  <ion-card>\n      <ion-card-content class=\"card\">\n          <ion-card-title>Hello World</ion-card-title>\n      \n          <p>The content for this card</p>\n      \n          <ion-button (click)=\"dialogTop.hideDialog()\">schließen</ion-button>\n        </ion-card-content>\n  </ion-card>\n  \n</fiv-dialog>\n\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>dialog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Backdrop</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"backdrop\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Backdrop click closes dialog</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"backdropClose\"></ion-toggle>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Swipe to close</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"swipeEnabled\"></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label>Animation</ion-label>\n        <ion-select slot=\"end\"  [(ngModel)]=\"animation\">\n          <ion-select-option value=\"fadeIn\">fade in</ion-select-option>\n          <ion-select-option value=\"slideIn\">slide in</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Vertical Alignment</ion-label>\n          <ion-select slot=\"end\"  [(ngModel)]=\"verticalAlign\">\n            <ion-select-option value=\"top\">top</ion-select-option>\n            <ion-select-option value=\"center\">center</ion-select-option>\n            <ion-select-option value=\"bottom\">bottom</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <fiv-loading-button (click)=\"openDialog()\">\n          Zeige Dialog\n        </fiv-loading-button>\n\n  </ion-list>\n\n</ion-content>\n<fiv-dialog #dialogBottom [backdropClose]=\"backdropClose\" [swipeEnabled]=\"swipeEnabled\" [animation]=\"animation\" [verticalAlign]=\"verticalAlign\" [backdrop]=\"backdrop\">\n  <ion-card>\n      <ion-card-content class=\"card\">\n          <ion-card-title>Hello World</ion-card-title>\n      \n          <p>The content for this card</p>\n      \n          <ion-button (click)=\"dialogBottom.hideDialog()\">schließen</ion-button>\n        </ion-card-content>\n  </ion-card>\n  \n</fiv-dialog>"

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