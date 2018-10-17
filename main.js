(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/core/fesm5/fivethree-core.js":
/*!*******************************************!*\
  !*** ./dist/core/fesm5/fivethree-core.js ***!
  \*******************************************/
/*! exports provided: FivethreeCoreModule, DrawerState, AppBarComponent, BottomSheetComponent, BottomSheetContentComponent, ExpandableComponent, LoadingButtonComponent, LoadingContentComponent, LoadingFabComponent, LoadingProgressBarComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, PasswordComponent, RouterItemComponent, StepComponent, StepContentComponent, StepHeaderComponent, StepperComponent, LoadingService, ɵb, ɵa, ɵe, ɵf, ɵd, ɵh, ɵi, ɵl, ɵk, ɵo, ɵm, ɵn, ɵj, ɵc, ɵg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivethreeCoreModule", function() { return FivethreeCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerState", function() { return DrawerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarComponent", function() { return AppBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetContentComponent", function() { return BottomSheetContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonComponent", function() { return LoadingButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingContentComponent", function() { return LoadingContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingFabComponent", function() { return LoadingFabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingProgressBarComponent", function() { return LoadingProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterItemComponent", function() { return RouterItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepContentComponent", function() { return StepContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepHeaderComponent", function() { return StepHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return rotateAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CollapsableMenuButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return CollapsableMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CenterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return IfPlatformDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return PermissionsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return PullDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ViewportDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return IconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return LoadingRefresherContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return LoadingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return RippleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return StepperHorizontalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ToolbarSearchComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var BASE_SIZE = 100;
var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent(_document, _elementRef, change, builder, sanitizer, renderer) {
        this._document = _document;
        this._elementRef = _elementRef;
        this.change = change;
        this.builder = builder;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this._diameter = BASE_SIZE;
        this._strokeWidth = 10;
        this._value = 0;
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.mode = 'indeterminate';
        this.circleRadius = 45;
    }
    Object.defineProperty(LoadingSpinnerComponent.prototype, "class", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode + ' mat-spinner mat-progress-spinner mat-progress-spinner-indeterminate-animation';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.mode);
    };
    Object.defineProperty(LoadingSpinnerComponent.prototype, "viewBox", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var viewBox = this.circleRadius * 2 + this.strokeWidth;
            return "0 0 " + viewBox + " " + viewBox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "strokeCircumference", {
        /** The stroke circumference of the svg circle. */
        get: /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */
        function () {
            return 2 * Math.PI * this.circleRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "strokeDashOffset", {
        /** The dash offset of the svg circle. */
        get: /**
         * The dash offset of the svg circle.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this.strokeCircumference * (100 - this._value) / 100;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "circleStrokeWidth", {
        /** Stroke width of the circle in percent. */
        get: /**
         * Stroke width of the circle in percent.
         * @return {?}
         */
        function () {
            return this.strokeWidth / this.diameter * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "value", {
        /** Value of the progress circle. */
        get: /**
         * Value of the progress circle.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? this._value : 0;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = Math.max(0, Math.min(100, (newValue)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "diameter", {
        get: /**
         * @return {?}
         */
        function () { return this._diameter; },
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this._diameter = size;
            if (!LoadingSpinnerComponent.diameters.has(this._diameter)) {
                this._attachStyleNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "strokeWidth", {
        /** Stroke width of the progress spinner. */
        get: /**
         * Stroke width of the progress spinner.
         * @return {?}
         */
        function () {
            return this._strokeWidth || this.diameter / 10;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @return {?}
     */
    LoadingSpinnerComponent.prototype._attachStyleNode = /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styleTag = LoadingSpinnerComponent.styleTag;
        if (!styleTag) {
            styleTag = this._document.createElement('style');
            this._document.head.appendChild(styleTag);
            LoadingSpinnerComponent.styleTag = styleTag;
        }
        if (styleTag && styleTag.sheet) {
            (/** @type {?} */ (styleTag.sheet)).insertRule(this._getAnimationText(), 0);
        }
        LoadingSpinnerComponent.diameters.add(this.diameter);
    };
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @return {?}
     */
    LoadingSpinnerComponent.prototype._getAnimationText = /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var INDETERMINATE_ANIMATION_TEMPLATE = "\n    @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n       0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n       12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n       12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n       25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n       25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n       37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n       37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n       50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n       50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n       62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n       62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n       75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n       75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n       87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n       87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n       100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n     }\n   ";
        return INDETERMINATE_ANIMATION_TEMPLATE
            // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, "" + 0.95 * this.strokeCircumference)
            .replace(/END_VALUE/g, "" + 0.2 * this.strokeCircumference)
            .replace(/DIAMETER/g, "" + this.diameter);
    };
    /**
     * @param {?} duration
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.completeIn = /**
     * @param {?} duration
     * @return {?}
     */
    function (duration) {
        var _this = this;
        this.mode = 'determinate';
        this.change.detectChanges();
        console.log('complete in', duration);
        console.log('interval', duration / 100);
        console.log('timer length', duration + duration / 50);
        console.log('loop count', (duration + duration / 50) / (duration / 100));
        /** @type {?} */
        var animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                'stroke-dasharray': 180,
                'stroke-dashoffset': 90,
                'transformOrigin': 'center',
                'stroke': '#DE3E35'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                'stroke-dasharray': 315,
                'stroke-dashoffset': 0,
                'transformOrigin': 'center',
                'stroke': '#1B9A59',
                'opacity': 0
            }))
        ]);
        /** @type {?} */
        var player = animation.create(this.determinateCircle.nativeElement);
        player.play();
        player.onDone(function () {
            _this.fivComplete.emit(_this);
            _this._value = 0;
        });
        /** @type {?} */
        var i = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(duration / 100);
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(duration + duration / 50);
        /** @type {?} */
        var progress = i.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(t));
        progress.subscribe(function (p) {
            _this.fivProgress.emit(p);
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.setValue = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.mode = 'determinate';
        this._value = progress;
        this.change.detectChanges();
        console.log('set value', this._value, this.mode);
    };
    /**
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.spin = /**
     * @return {?}
     */
    function () {
        this.mode = 'indeterminate';
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.stopSpinning = /**
     * @return {?}
     */
    function () {
        this._value = 0;
        this.change.detectChanges();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.change.detectChanges();
    };
    LoadingSpinnerComponent.diameters = new Set([BASE_SIZE]);
    LoadingSpinnerComponent.styleTag = null;
    LoadingSpinnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-loading-spinner',
                    template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\" [ngSwitch]=\"mode == 'indeterminate'\">\n\n\n  <circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n\n  <circle class=\"determinate-circle\" #determinateCircle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n</svg>",
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                    styles: ["fiv-loading-spinner{display:block;position:relative}fiv-loading-spinner svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}fiv-loading-spinner circle{fill:transparent;-webkit-transform-origin:center;transform-origin:center;transition:stroke-dashoffset 225ms linear}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.determinate{-webkit-animation:5.6s ease-in-out infinite colors;animation:5.6s ease-in-out infinite colors}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.determinate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.indeterminate{-webkit-animation:5.6s ease-in-out infinite colors,2s linear infinite mat-progress-spinner-linear-rotate;animation:5.6s ease-in-out infinite colors,2s linear infinite mat-progress-spinner-linear-rotate}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.indeterminate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}"]
                }] }
    ];
    /** @nocollapse */
    LoadingSpinnerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
    ]; };
    LoadingSpinnerComponent.propDecorators = {
        fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        determinateCircle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['determinateCircle',] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        circleRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return LoadingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingRefresherContentComponent = /** @class */ (function () {
    function LoadingRefresherContentComponent(element, builder) {
        this.element = element;
        this.builder = builder;
        this.iconColor = '#000';
        this.checkmark = false;
        this.disabled = false;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivShowed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.visible = false;
        this.iconState = 'normal';
    }
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.visible = true;
        this.spinner.spin();
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.spinner.stopSpinning();
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        // this.spinner.completeIn(500);
        if (this.checkmark) {
            console.log('fill animation done', event);
            this.iconState = 'rotate';
        }
        else {
            this.postComplete();
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.visible) {
            console.log('&show');
            this.visible = true;
            /** @type {?} */
            var animation = this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)' }))
            ]);
            /** @type {?} */
            var player_1 = animation.create(this.background.nativeElement);
            player_1.play();
            player_1.onDone(function () {
                _this.fivShowed.emit(_this);
                player_1.destroy();
            });
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.visible) {
            /** @type {?} */
            var transform = "scale(1)";
            /** @type {?} */
            var animation = this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: transform }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }))
            ]);
            /** @type {?} */
            var player_2 = animation.create(this.background.nativeElement);
            player_2.play();
            player_2.onDone(function () {
                _this.fivHidden.emit(_this);
                _this.visible = false;
                player_2.destroy();
            });
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.checkmark) {
            console.log('fill animation done', event);
            this.iconState = 'rotate';
        }
        else {
            this.postComplete();
        }
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        console.log(event, icon);
        if (event.fromState === 'normal') {
            this.icon = icon;
            this.iconState = 'normal';
        }
        else {
            if (event.fromState === 'rotate') {
                this.postComplete();
            }
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        this.unload();
        this.fivComplete.emit(this);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.setValue = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.spinner.setValue(progress);
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.spinner.setMode('indeterminate');
    };
    LoadingRefresherContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-loading-refresher-content',
                    template: "<div #background class=\"spinner-background\">\n    <fiv-loading-spinner #spinner (fivProgress)=\"fivProgress.emit($event)\" (fivComplete)=\"fillAnimationDone()\" class=\"spinner\" [circleRadius]=\"8\" [diameter]=\"20\" [strokeWidth]=\"2\"></fiv-loading-spinner>\n</div>",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1400ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: [":host{position:absolute;width:40px;height:40px;left:calc(50% - 20px);z-index:9}.spinner-background{position:absolute;width:40px;height:40px;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.spinner-background fiv-loading-spinner{position:absolute;top:10px;left:10px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]
                }] }
    ];
    /** @nocollapse */
    LoadingRefresherContentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }
    ]; };
    LoadingRefresherContentComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivShowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['spinner',] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['background',] }]
    };
    return LoadingRefresherContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepComponent = /** @class */ (function () {
    function StepComponent() {
        this.isLast = false;
        this.title = '';
        this.subtitle = '';
    }
    /**
     * @return {?}
     */
    StepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    StepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-step',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StepComponent.ctorParameters = function () { return []; };
    StepComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"],] }]
    };
    return StepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var rotateAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
]);
/** @type {?} */
var listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in')
    ])
]);
/** @type {?} */
var arrowAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('arrowAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateZ(-180deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateZ(0deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in')
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepHeaderComponent = /** @class */ (function () {
    function StepHeaderComponent() {
        this.iconState = 'normal';
    }
    /**
     * @return {?}
     */
    StepHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    StepHeaderComponent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        if (event.fromState === 'normal') {
            this.tempIcon = this.icon;
            this.icon = icon;
            this.iconState = 'normal';
        }
    };
    /**
     * @return {?}
     */
    StepHeaderComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.iconState = 'rotate';
    };
    /**
     * @return {?}
     */
    StepHeaderComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.icon = this.tempIcon;
    };
    StepHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-step-header',
                    template: "<div class=\"number-container\">\n  <span *ngIf=\"index && !icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\">{{index}}</span>\n  <ion-icon *ngIf=\"icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\"\n    [name]=\"icon\"></ion-icon>\n</div>\n<div class=\"step-content\">\n  <ng-content>\n  </ng-content>\n</div>",
                    animations: [rotateAnimation],
                    styles: [":host{display:block;width:100%;height:72px;align-items:center;position:relative;padding-top:8px}.number-container{width:24px;height:24px;border-radius:100%;position:absolute;left:16px;background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}.step-content{padding-left:56px}"]
                }] }
    ];
    /** @nocollapse */
    StepHeaderComponent.ctorParameters = function () { return []; };
    StepHeaderComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StepHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent() {
        this.isOpen = false;
        this.state = 'closed';
        this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ExpandableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ExpandableComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.fivWillOpen.emit(this);
        this.isOpen = true;
        this.state = 'open';
    };
    /**
     * @return {?}
     */
    ExpandableComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isOpen === false) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    ExpandableComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.fivWillClose.emit(this);
        console.log('close');
        this.isOpen = false;
        this.state = 'closed';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ExpandableComponent.prototype.onAnimationEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'closed') {
            this.fivDidOpen.emit(this);
        }
        else if (event.fromState === 'open') {
            this.fivDidClose.emit(this);
        }
    };
    ExpandableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-expandable',
                    template: "<div>\n  <ng-content select=\"[header]\"></ng-content>\n  <div [@listAnim]=\"state\" (@listAnim.done)=\"onAnimationEnd($event)\" style=\"overflow: hidden\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>",
                    animations: [listAnimation],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ExpandableComponent.ctorParameters = function () { return []; };
    ExpandableComponent.propDecorators = {
        fivWillOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivWillClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return ExpandableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepContentComponent = /** @class */ (function () {
    function StepContentComponent() {
        this.isLast = false;
        this.title = '';
        this.subtitle = '';
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    StepContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.step.open();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.step.close();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.header.complete();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.header.reset();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.afterClose = /**
     * @return {?}
     */
    function () {
        this.fivDidClose.emit(this);
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.afterOpen = /**
     * @return {?}
     */
    function () {
        this.fivDidOpen.emit(this);
    };
    StepContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-step-content',
                    template: "<div *ngIf=\"!isLast\" class=\"timeline\"></div>\n<fiv-expandable (fivDidClose)=\"afterClose()\" (fivDidOpen)=\"afterOpen()\" #self>\n  <fiv-ripple header (click)=\"self.open()\">\n      <fiv-step-header #header [index]=\"index\" [icon]=\"icon\">\n          <div class=\"header-title\">{{title}}</div>\n          <div class=\"header-subtitle\">{{subtitle}}</div>\n      </fiv-step-header>\n  </fiv-ripple>\n  <ng-container content>\n    <div class=\"step-content\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</fiv-expandable>",
                    styles: [":host{display:block;width:100%;position:relative}.step-content{padding-left:44px;padding-bottom:24px}.timeline{width:1px;height:calc(100% - 32px);position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));left:27.5px;top:36px}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                }] }
    ];
    /** @nocollapse */
    StepContentComponent.ctorParameters = function () { return []; };
    StepContentComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['self',] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['header',] }]
    };
    return StepContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepperHorizontalComponent = /** @class */ (function () {
    function StepperHorizontalComponent() {
        this.fivSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    StepperHorizontalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.slides.lockSwipes(true);
    };
    /**
     * @return {?}
     */
    StepperHorizontalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.slides.slideTo(0);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperHorizontalComponent.prototype.open = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.log('open slide', index);
        this.slides.lockSwipes(false);
        this.slides.slideTo(index);
        this.slides.lockSwipes(true);
    };
    StepperHorizontalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-stepper-horizontal',
                    template: "<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n        <span *ngIf=\"!f\" class=\"line left\"></span>\n        <div class=\"number-container\">\n          <span *ngIf=\"!content.icon\">{{i +  1}}</span>\n          <ion-icon *ngIf=\"content.icon\"\n            [name]=\"content.icon\"></ion-icon>\n        </div>\n        <span *ngIf=\"!l\" class=\"line right\"></span>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n          <div class=\"horizontal-content\">\n          <div class=\"header-title\">{{content.title}}</div>\n          <div class=\"header-subtitle\">{{content.subtitle}}</div>\n        </div>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-slides #slides pager=\"false\">\n  <ion-slide *ngFor=\"let content of contents; let i = index\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </ion-slide>\n</ion-slides>",
                    animations: [rotateAnimation],
                    styles: [".number-container{width:24px;height:24px;border-radius:100%;position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}ion-col{text-align:center;padding:0}.line{width:calc(50% - 20px);height:1px;position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.left{left:0}.right{right:0}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                }] }
    ];
    /** @nocollapse */
    StepperHorizontalComponent.ctorParameters = function () { return []; };
    StepperHorizontalComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides',] }],
        fivSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return StepperHorizontalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepperComponent = /** @class */ (function () {
    function StepperComponent() {
        this.mode = 'vertical';
        this.currentIndex = 0;
    }
    /**
     * @return {?}
     */
    StepperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.open = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') {
            this.currentIndex = index;
            console.log('+#+#+');
            this.horizontal.open(index);
        }
        else {
            this.currentIndex = index;
            this.steps.toArray()[index].open();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.close = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
        }
        else {
            this.currentIndex = -1;
            this.steps.toArray()[index].close();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.select = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.log('select', index);
        if (index >= 0 && index < this.contents.length) {
            if (this.mode === 'vertical') {
                this.closeAll();
            }
            this.open(index);
        }
    };
    /**
     * @return {?}
     */
    StepperComponent.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
        }
        else {
            this.steps.forEach(function (step) {
                step.close();
            });
        }
    };
    /**
     * @return {?}
     */
    StepperComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var next = this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
        console.log('next index', next);
        this.select(next);
    };
    /**
     * @return {?}
     */
    StepperComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
        console.log('next index', next);
        this.select(next);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.completeStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') ;
        else {
            this.steps.toArray()[index].complete();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.reset = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') ;
        else {
            this.steps.toArray()[index].reset();
        }
    };
    StepperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-stepper',
                    template: "<ion-list *ngIf=\"mode === 'vertical'\">\n  <fiv-step-content *ngFor=\"let content of contents; let i = index; let l = last;\" [icon]=\"content.icon\" [index]=\"i + 1\"\n    [isLast]=\"l\" [title]=\"content.title\" [subtitle]=\"content.subtitle\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </fiv-step-content>\n</ion-list>\n<div *ngIf=\"mode === 'horizontal'\">\n  <fiv-stepper-horizontal (fivSelect)=\"select($event)\" [contents]=\"contents\"></fiv-stepper-horizontal>\n</div>",
                    styles: [":host{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    StepperComponent.ctorParameters = function () { return []; };
    StepperComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StepComponent,] }],
        steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: [StepContentComponent,] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [StepperHorizontalComponent,] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StepperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RouterItemComponent = /** @class */ (function () {
    function RouterItemComponent(router) {
        this.router = router;
        this.active = false;
        this.navigate = true;
        /**
         * The position of the active state.
         * Default value is: `"left"`
         */
        this.position = 'left';
        /**
         * The shape of the active state.
         * Possible values are: `"line"`, `"dot"` and any ionicon.
         * Default value is: `"line"`
         */
        this.shape = 'line';
        this.routeActive = true;
    }
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.onclick = /**
     * @return {?}
     */
    function () {
        if (this.navigate && this.pageUrl) {
            this.router.navigateByUrl(this.pageUrl);
        }
    };
    Object.defineProperty(RouterItemComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.position + " " + this.shape;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterItemComponent.prototype, "activeClass", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isActive = (this.routeActive && this.router.url.startsWith(this.pageUrl))
                || this.active;
            return isActive;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.hasShape = /**
     * @return {?}
     */
    function () {
        return this.shape === 'line'
            || this.shape === 'dot';
    };
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        return this.hasShape() ? [this.position, this.shape] : [this.position];
    };
    RouterItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-router-item',
                    template: "<ng-content></ng-content>\n<span *ngIf=\"hasShape()\" [ngClass]=\"getClasses()\" class=\"indicator\"></span>\n<ion-icon *ngIf=\"!hasShape()\" [ngClass]=\"position\" [name]=\"shape\" class=\"indicator\"></ion-icon>",
                    styles: [":host{display:block;position:relative;width:100%}:host.active .dot{display:block}:host.active .line{background-color:var(--fiv-dot-color,var(--ion-color-primary));display:block}:host.active.left .line{width:2px;height:100%;top:0}:host.active.right .line{width:2px;height:100%;top:0}:host.active.top .line{width:calc(100% - 16px);left:8px;height:2px}:host.active.bottom .line{width:calc(100% - 16px);height:2px;left:8px}:host.active.dot.left{padding-left:24px}.indicator{position:absolute}.dot{width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:50%;border-radius:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:8px;display:none}.dot.left{left:8px;right:unset}.dot.right{right:8px}.left{left:0}.right{right:0}.top{top:0}.bottom{bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    RouterItemComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    RouterItemComponent.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        pageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        routeActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }],
        activeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.active',] }]
    };
    return RouterItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CollapsableMenuDirective = /** @class */ (function () {
    function CollapsableMenuDirective(sanitizer, platform) {
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.collapsed = false;
        this.hovering = false;
        this.hoverMenu = true;
    }
    Object.defineProperty(CollapsableMenuDirective.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.collapsed && (this.platform.is('tablet') || this.platform.is('electron') || this.platform.is('desktop'))) {
                return this.sanitizer
                    .bypassSecurityTrustStyle('min-width: 64px; max-width: 64px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;');
            }
            else {
                return this.sanitizer.bypassSecurityTrustStyle('--border: 0; transition: all cubic-bezier(.55,0,.1,1)  250ms;');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.hover = /**
     * @return {?}
     */
    function () {
        if (this.collapsed && !this.hovering && this.hoverMenu) {
            this.open();
            this.hovering = true;
        }
    };
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (!this.hoverMenu) {
            return;
        }
        if (!this.collapsed && this.hovering) {
            this.close();
        }
        this.hovering = false;
    };
    Object.defineProperty(CollapsableMenuDirective.prototype, "fivCollapseMenu", {
        set: /**
         * @param {?} collapse
         * @return {?}
         */
        function (collapse) {
            this.collapsed = collapse;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        if (this.hovering) {
            this.open();
            this.hovering = false;
            return;
        }
        this.collapsed = !this.collapsed;
    };
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        this.collapsed = false;
    };
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        this.collapsed = true;
    };
    CollapsableMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fivCollapseMenu]',
                    exportAs: 'menuCollapse'
                },] }
    ];
    /** @nocollapse */
    CollapsableMenuDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
    ]; };
    CollapsableMenuDirective.propDecorators = {
        hoverMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style',] }],
        hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mouseenter',] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mouseleave',] }],
        fivCollapseMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CollapsableMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CollapsableMenuButtonComponent = /** @class */ (function () {
    function CollapsableMenuButtonComponent() {
    }
    /**
     * @return {?}
     */
    CollapsableMenuButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CollapsableMenuButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        console.log('###', this.menu);
        this.menu.toggleMenu();
    };
    CollapsableMenuButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-collapsable-menu-button',
                    template: "<ion-button fivCenter (click)=\"onClick()\">\n  <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n</ion-button>",
                    styles: [":host{width:42px;height:42px;display:block}"]
                }] }
    ];
    /** @nocollapse */
    CollapsableMenuButtonComponent.ctorParameters = function () { return []; };
    CollapsableMenuButtonComponent.propDecorators = {
        menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CollapsableMenuButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () { return PasswordComponent; }),
    multi: true
};
var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
        this.hideIcon = 'eye-off';
        this.position = 'floating';
        this.showIcon = 'eye';
        this.clearOnEdit = false;
        this._passwordValue = '';
    }
    /**
     * @return {?}
     */
    PasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PasswordComponent.prototype.toggleShowPassword = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
    };
    Object.defineProperty(PasswordComponent.prototype, "passwordValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._passwordValue;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this._passwordValue) {
                this._passwordValue = v;
                this.onChangeCallback(this._passwordValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    PasswordComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined && value !== this._passwordValue) {
            this._passwordValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    PasswordComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-password',
                    template: "<ion-item>\n    <ion-label *ngIf=\"placeholder\" [position]=\"position\">{{ placeholder }}</ion-label>\n    <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"passwordValue\" [clearOnEdit]=\"clearOnEdit\"></ion-input>\n    <ion-icon slot=\"end\" [name]=\"show ? hideIcon : showIcon\" (click)=\"toggleShowPassword()\"></ion-icon>\n  </ion-item>",
                    providers: [
                        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PasswordComponent.ctorParameters = function () { return []; };
    PasswordComponent.propDecorators = {
        hideIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        clearOnEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return PasswordComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var DrawerState = {
    Bottom: 0,
    Docked: 1,
    Top: 2,
};
DrawerState[DrawerState.Bottom] = 'Bottom';
DrawerState[DrawerState.Docked] = 'Docked';
DrawerState[DrawerState.Top] = 'Top';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BottomSheetContentComponent = /** @class */ (function () {
    function BottomSheetContentComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.rounded = true;
        this.handle = true;
        this.float = true;
        this.fivHandleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.states = DrawerState;
    }
    Object.defineProperty(BottomSheetContentComponent.prototype, "isRounded", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.currentState) {
                case DrawerState.Top: return false;
                case DrawerState.Docked: return this.rounded;
                case DrawerState.Bottom: return this.rounded && !this.float;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomSheetContentComponent.prototype, "styles", {
        get: /**
         * @return {?}
         */
        function () {
            if (!(this.float && this.currentState === DrawerState.Bottom)) {
                return this.sanitizer.bypassSecurityTrustStyle("box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n                                                      border-top: 1px solid var(--ion-color-light);");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BottomSheetContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} state
     * @return {?}
     */
    BottomSheetContentComponent.prototype.updateState = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        console.log('content got state', state$$1);
        this.currentState = state$$1;
    };
    /**
     * @return {?}
     */
    BottomSheetContentComponent.prototype.click = /**
     * @return {?}
     */
    function () {
        this.fivHandleClick.emit();
    };
    BottomSheetContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-bottom-sheet-content',
                    template: "<div class=\"wrapper\">\n  <span (click)=\"click()\" *ngIf=\"currentState !== states.Top && handle\" [fivCenter]=\"{vertical: false, horizontal: true}\" class=\"handle\"></span>\n  <div class=\"content\">\n    <ng-content>\n  \n    </ng-content>\n  </div>\n</div>\n\n\n\n\n",
                    styles: [":host{display:block;width:100%;height:100%}.wrapper{width:100%;height:100%}:host.rounded{border-top-left-radius:12px;border-top-right-radius:12px}.handle{display:block;background:var(--ion-color-light);border-radius:12px;top:8px;width:32px;height:8px;position:absolute}.content{margin-top:24px}"]
                }] }
    ];
    /** @nocollapse */
    BottomSheetContentComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] }
    ]; };
    BottomSheetContentComponent.propDecorators = {
        rounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        handle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        float: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivHandleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        isRounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.rounded',] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style',] }]
    };
    return BottomSheetContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(_element, _renderer, _domCtrl, _platform, sanitizer) {
        this._element = _element;
        this._renderer = _renderer;
        this._domCtrl = _domCtrl;
        this._platform = _platform;
        this.sanitizer = sanitizer;
        this.dockedHeight = 80;
        this.shouldBounce = true;
        this.distanceTop = 56;
        this.transition = '0.25s ease-in-out';
        this.state = DrawerState.Bottom;
        this.minimumHeight = 24;
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivDocked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._BOUNCE_DELTA = 30;
    }
    // @HostBinding('style') get styles() {
    //   if (this.rounded) {
    //     return this.sanitizer
    //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
    //   }
    // }
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log(this._element, this._element.nativeElement.querySelector('.fiv-bottom-drawer-scrollable-content .scroll-y'));
        // this._renderer.
        //   setStyle(this._element.nativeElement.querySelector('.fiv-bottom-drawer-scrollable-content .scroll-y'), 'touch-action', 'none');
        this._setDrawerState(this.state);
        /** @type {?} */
        var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_9__(this._element.nativeElement);
        hammer.get('pan').set({ enable: true, direction: hammerjs__WEBPACK_IMPORTED_MODULE_9__["DIRECTION_VERTICAL"] });
        hammer.on('pan panstart panend', function (ev) {
            switch (ev.type) {
                case 'panstart':
                    _this._handlePanStart();
                    break;
                case 'panend':
                    _this._handlePanEnd(ev);
                    break;
                default:
                    _this._handlePan(ev);
            }
        });
        this.content.fivHandleClick
            .subscribe(function () {
            switch (_this.state) {
                case DrawerState.Bottom: return _this.dock();
                case DrawerState.Docked: return _this.open();
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BottomSheetComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes["state"]) {
            return;
        }
        this._setDrawerState(changes["state"].currentValue);
        this.updateContent(changes["state"].currentValue);
    };
    /**
     * @param {?} state
     * @return {?}
     */
    BottomSheetComponent.prototype.updateContent = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        if (this.content) {
            this.content.updateState(state$$1);
        }
    };
    /**
     * @param {?} state
     * @return {?}
     */
    BottomSheetComponent.prototype._setDrawerState = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
        switch (state$$1) {
            case DrawerState.Bottom:
                this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
                break;
            case DrawerState.Docked:
                this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
                break;
            default:
                this._setTranslateY(this.distanceTop + 'px');
        }
    };
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePanStart = /**
     * @return {?}
     */
    function () {
        this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePanEnd = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.shouldBounce && ev.isFinal) {
            this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
            switch (this.state) {
                case DrawerState.Docked:
                    this._handleDockedPanEnd(ev);
                    break;
                case DrawerState.Top:
                    this._handleTopPanEnd(ev);
                    break;
                default:
                    this._handleBottomPanEnd(ev);
            }
        }
        this.stateChange.emit(this.state);
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleTopPanEnd = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (ev.deltaY > this._BOUNCE_DELTA) {
            if (this.minimumHeight === this.dockedHeight) {
                if (this.state !== DrawerState.Bottom) {
                    this.state = DrawerState.Bottom;
                    this.fivClose.emit(this);
                }
            }
            else {
                if (this.state !== DrawerState.Docked) {
                    this.state = DrawerState.Docked;
                    this.fivDocked.emit(this);
                }
            }
        }
        else {
            this._setTranslateY(this.distanceTop + 'px');
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleDockedPanEnd = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        /** @type {?} */
        var absDeltaY = Math.abs(ev.deltaY);
        if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
            if (this.state !== DrawerState.Top) {
                this.state = DrawerState.Top;
                this.fivOpen.emit();
            }
        }
        else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
            if (this.state !== DrawerState.Bottom) {
                this.state = DrawerState.Bottom;
                this.fivClose.emit();
            }
        }
        else {
            this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleBottomPanEnd = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (-ev.deltaY > this._BOUNCE_DELTA) {
            if (this.state !== DrawerState.Docked) {
                this.state = DrawerState.Docked;
                this.fivDocked.emit();
            }
        }
        else {
            this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePan = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        /** @type {?} */
        var pointerY = ev.center.y;
        this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
        if (pointerY > 0 && pointerY < this._platform.height()) {
            if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                /** @type {?} */
                var newTop = this._startPositionTop + ev.deltaY;
                if (newTop >= this.distanceTop) {
                    this._setTranslateY(newTop + 'px');
                }
                else if (newTop < this.distanceTop) {
                    this._setTranslateY(this.distanceTop + 'px');
                }
                if (newTop > this._platform.height() - this.minimumHeight) {
                    this._setTranslateY((this._platform.height() - this.minimumHeight) + 'px');
                }
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BottomSheetComponent.prototype._setTranslateY = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._domCtrl.write(function () {
            _this._renderer.setStyle(_this._element.nativeElement, 'transform', 'translateY(' + value + ')');
        });
    };
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.state = DrawerState.Top;
        this._setDrawerState(this.state);
        this.updateContent(this.state);
    };
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.state = DrawerState.Bottom;
        this._setDrawerState(this.state);
        this.updateContent(this.state);
    };
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.dock = /**
     * @return {?}
     */
    function () {
        this.state = DrawerState.Docked;
        this._setDrawerState(this.state);
        this.updateContent(this.state);
    };
    BottomSheetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-bottom-sheet',
                    template: "<div class=\"fiv-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}.fiv-bottom-drawer-scrollable-content{width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    BottomSheetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["DomController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] }
    ]; };
    BottomSheetComponent.propDecorators = {
        dockedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        shouldBounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        distanceTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        transition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        minimumHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivDocked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [BottomSheetContentComponent,] }]
    };
    return BottomSheetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToolbarSearchComponent = /** @class */ (function () {
    function ToolbarSearchComponent(renderer) {
        this.renderer = renderer;
        this.searching = false;
        this.titleVisible = true;
        this.closeButtonVisible = false;
        this.small = false;
        this.fivInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.state = 'normal';
    }
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.state = this.small ? 'small' : 'normal';
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.shrink = /**
     * @return {?}
     */
    function () {
        this.state = 'small';
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.grow = /**
     * @return {?}
     */
    function () {
        this.state = 'normal';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ToolbarSearchComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log('on changes', changes);
        if (changes["small"].previousValue === true && changes["small"].currentValue === false) {
            this.state = 'normal';
            return;
        }
        if (changes["small"].previousValue === false && changes["small"].currentValue === true) {
            this.state = 'small';
            return;
        }
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.openSearchbar = /**
     * @return {?}
     */
    function () {
        if (this.small) {
            this.state = 'normal';
            return;
        }
        this._open();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.searchBarStateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('searchbarState', event);
        if (event.fromState === 'normal' && event.toState === 'small') ;
        if (event.fromState === 'small' && event.toState === 'normal') {
            this._open();
        }
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype._open = /**
     * @return {?}
     */
    function () {
        this.searching = true;
        this.titleVisible = false;
        this.open.emit();
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.closeSearchbar = /**
     * @return {?}
     */
    function () {
        if (this.small) {
            this.state = 'small';
        }
        this.closeButtonVisible = false;
        this.fivClose.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.searchAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('###', event);
        if (event.fromState !== 'void') {
            this.closeButtonVisible = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.closeAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('###', event);
        if (event.fromState !== 'void') {
            this.searching = false;
        }
    };
    /**
     * @param {?} event
     * @param {?} input
     * @return {?}
     */
    ToolbarSearchComponent.prototype.seachbarAnimDone = /**
     * @param {?} event
     * @param {?} input
     * @return {?}
     */
    function (event, input) {
        console.log('!!!', event);
        if (event.fromState !== 'void') {
            this.titleVisible = true;
        }
        else {
            input.focus();
        }
    };
    ToolbarSearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-toolbar-search',
                    template: "<ion-toolbar [@searchbarAnim]=\"small ? state : 'normal'\" (@searchbarAnim.done)=\"searchBarStateChange($event)\" [color]=\"color\" [ngClass]=\"{'small': state === 'small'}\">\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"fivInputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input class=\"toolbar-searchbar\"\n    [@titleAnim] (@titleAnim.done)=\"seachbarAnimDone($event,input)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"searchAnimDone($event)\" *ngIf=\"!searching\" (click)=\"openSearchbar()\">\n      <ion-icon style=\"transform: matrix(-1, 0, 0, 1, 0, 0);\" name=\"md-search\"></ion-icon>\n    </ion-button>\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"closeAnimDone($event)\" *ngIf=\"closeButtonVisible\" (click)=\"closeSearchbar()\">\n      <ion-icon name=\"md-close\"></ion-icon>\n    </ion-button>\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('searchbarAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => small', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('95ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '92px' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '100%' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('85ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('65ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' }))
                            ]),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('titleAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateY(-20%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateY(0)' }))
                            ]),
                        ]),
                    ],
                    styles: [":host{position:relative;display:block;width:100%}ion-toolbar{box-shadow:0 1px 4px rgba(0,0,0,.25);transition:border-bottom-right-radius 85ms}ion-toolbar.small{border-bottom-right-radius:12px}.toolbar-searchbar{float:right}"]
                }] }
    ];
    /** @nocollapse */
    ToolbarSearchComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
    ]; };
    ToolbarSearchComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        small: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return ToolbarSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = false;
        this.isComplete = false;
        this.loadChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.loading);
        this.completeChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.isComplete);
    }
    /**
     * @return {?}
     */
    LoadingService.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.loadChange.next(this.loading);
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.loadChange.next(this.loading);
        this.isComplete = false;
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.complete = /**
     * @return {?}
     */
    function () {
        console.log('set service complete');
        this.isComplete = true;
        this.completeChange.next(this.isComplete);
    };
    LoadingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return []; };
    /** @nocollapse */ LoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
    return LoadingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingProgressBarComponent = /** @class */ (function () {
    function LoadingProgressBarComponent(loadingService, builder) {
        this.loadingService = loadingService;
        this.builder = builder;
        this.loading = false;
        this.global = false;
        this.isComplete = false;
        this.progress = 0;
        this.verticalAlign = 'top';
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivDoneShrinking = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.global) {
            this.loadingService.completeChange.subscribe(function (isComplete) {
                if (isComplete) {
                    _this.complete();
                }
            });
        }
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.global) {
            this.loadingService.completeChange.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        if (this.isComplete) {
            this.isComplete = false;
        }
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        console.log('set complete');
        this.isComplete = true;
        console.log(this.isComplete);
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.fillAnimationComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        if (isComplete) {
            console.log('fill animation complete', isComplete);
            this.fivComplete.emit(isComplete);
            this.isComplete = false;
            if (this.global) {
                this.loadingService.unload();
            }
            else {
                this.unload();
            }
        }
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.setProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        if (progress < 0) {
            this.progress = 0;
            return;
        }
        if (progress > 100) {
            this.progress = 100;
            return;
        }
        this.progress = progress;
        console.log('set progress', progress);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.incrementBy = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.setProgress(progress + this.progress);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.decrementBy = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.setProgress(progress + this.progress);
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.fillIn = /**
     * @param {?} ms
     * @return {?}
     */
    function (ms) {
        var _this = this;
        /** @type {?} */
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: this.progress }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '100%' }))
        ]);
        /** @type {?} */
        var player = myAnimation.create(this.linear.nativeElement);
        player.play();
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, ms / (100))
            .subscribe(function () {
            if (_this.progress >= 100) {
                return t.unsubscribe();
            }
            _this.progress++;
            console.log('current progress', _this.progress);
        });
        player.onDone(function () {
            _this.fivComplete.emit(true);
            _this.progress = 100;
            player.destroy();
        });
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.shrinkIn = /**
     * @param {?} ms
     * @return {?}
     */
    function (ms) {
        var _this = this;
        // first define a reusable animation
        this.progress = 100;
        /** @type {?} */
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: this.progress + "%" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: 0 }))
        ]);
        /** @type {?} */
        var player = myAnimation.create(this.linear.nativeElement);
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, ms / (100))
            .subscribe(function () {
            if (_this.progress <= 0) {
                return t.unsubscribe();
            }
            _this.progress--;
            console.log('current progress', _this.progress);
        });
        player.play();
        player.onDone(function () {
            _this.fivDoneShrinking.emit(true);
            _this.progress = 0;
            player.destroy();
        });
    };
    LoadingProgressBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-loading-progress-bar',
                    template: "<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\" [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" >\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n<div #linear [@progressAnimLinear] [style.width]=\"progress + '%'\" class=\"progress\"  [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" ></div>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('progressAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('progressAnimLinear', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('65ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-5%', width: '5%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('850ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%', width: '100%' }))
                            ]),
                        ])
                    ],
                    styles: [".slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.progress{position:absolute;height:5px;width:0;overflow-x:hidden;z-index:5000;background:var(--ion-color-primary);transition:240ms}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}@keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}.top{top:0;left:0}.bottom{bottom:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    LoadingProgressBarComponent.ctorParameters = function () { return [
        { type: LoadingService },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }
    ]; };
    LoadingProgressBarComponent.propDecorators = {
        global: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        isComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivDoneShrinking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['bar',] }],
        linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['linear',] }]
    };
    return LoadingProgressBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingButtonComponent = /** @class */ (function () {
    function LoadingButtonComponent() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.disabled = false;
        this.verticalAlign = 'top';
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivRefreshComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.progress.load();
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.progress.unload();
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.progress.complete();
        }
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    LoadingButtonComponent.prototype.onComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.fivRefreshComplete.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.fivButtonClick.emit(this);
    };
    LoadingButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-loading-button',
                    template: "<ion-button (click)=\"onClick()\" class=\"buttonfull\" [disabled]=\"disabled\" [expand]=\"expand\" [color]=\"color\">\n  <fiv-loading-progress-bar [verticalAlign]=\"verticalAlign\" (fivComplete)=\"onComplete($event)\" #progress [global]=\"false\"></fiv-loading-progress-bar>\n  <ng-content></ng-content>\n</ion-button>",
                    styles: [":host{position:relative;display:block;margin:0 20px}"]
                }] }
    ];
    /** @nocollapse */
    LoadingButtonComponent.ctorParameters = function () { return []; };
    LoadingButtonComponent.propDecorators = {
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['progress',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivRefreshComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return LoadingButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingContentComponent = /** @class */ (function () {
    function LoadingContentComponent(builder, renderer) {
        this.builder = builder;
        this.renderer = renderer;
        this.hintText = 'new posts';
        this.maxPullHeight = 168;
        this.minPullHeight = 112;
        this.fivProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.hintVisible = false;
        this.currentProgress = 0;
        this.refreshing = false;
    }
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.refreshing = true;
        this.changeAnimationToProgress(112 / 168);
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.completeRefresh = /**
     * @return {?}
     */
    function () {
        this.spinner.complete();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        console.log('fillAnimDone');
        this.spinner.hide();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.showHint = /**
     * @return {?}
     */
    function () {
        this.hintVisible = true;
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.onHintClicked = /**
     * @return {?}
     */
    function () {
        console.log('on hint clicked');
        this.hintVisible = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LoadingContentComponent.prototype.postHint = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
        if (!event.fromState && event.toState === 'void') {
            this.setPullAnimationProgress(112 / 168);
            this.spinner.load();
            this.refreshing = true;
            this.fivRefresh.emit(this);
        }
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.setPullAnimationProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.currentProgress = progress;
        if (progress < 1) {
            this.renderer.
                setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * progress + "px) rotateZ(" + 360 * progress + "deg)");
        }
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.changeAnimationToProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        var _this = this;
        return new Promise(function (resolve) {
            /** @type {?} */
            var animation = _this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(" + _this.currentProgress * 168 + "px) rotateZ(" + 360 * _this.currentProgress + "deg)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('85ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(" + progress * 168 + "px) rotateZ(" + 360 * progress + "deg)" }))
            ]);
            /** @type {?} */
            var player = animation.create(_this.spinner.element.nativeElement);
            player.play();
            player.onDone(function () {
                _this.setPullAnimationProgress(progress);
                player.destroy();
                resolve();
            });
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.fivPull = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.setPullAnimationProgress(progress);
        this.spinner.show();
        /** @type {?} */
        var value = Math.max(0, Math.min(100, progress * 100 * this.maxPullHeight / this.minPullHeight));
        this.spinner.setValue(value * 0.84);
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.onRefresh = /**
     * @return {?}
     */
    function () {
        this.refresh();
        this.spinner.load();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.fivCancel = /**
     * @return {?}
     */
    function () {
        this.moveBack();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.afterSpinnerHide = /**
     * @return {?}
     */
    function () {
        this.setPullAnimationProgress(0);
        this.refreshing = false;
        this.spinner.reset();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.moveBack = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(" + this.currentProgress * 168 + "px) rotateZ(" + 360 * this.currentProgress + "deg)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('145ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0) rotateZ(0)' }))
        ]);
        /** @type {?} */
        var player = animation.create(this.spinner.element.nativeElement);
        player.play();
        player.onDone(function () {
            _this.setPullAnimationProgress(0);
            _this.spinner.visible = false;
            player.destroy();
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.onSpinnerProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.renderer.
            setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * this.currentProgress + "px) rotateZ(" + 360 * progress / 200 + "deg)");
    };
    LoadingContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-loading-content',
                    template: "<fiv-loading-refresher-content (fivProgress)=\"onSpinnerProgress($event)\" (fivHidden)=\"afterSpinnerHide()\" (fivComplete)=\"fillAnimationDone()\" #spinner></fiv-loading-refresher-content>\n<ion-chip class=\"gg-hint-wrapper\" *ngIf=\"hintVisible\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" (click)=\"onHintClicked()\"\n  #hint>\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n\n<ion-content fullscreen no-bounce fivPull [maxPullHeight]=\"maxPullHeight\" [minPullHeight]=\"minPullHeight\" (fivPull)=\"fivPull($event)\" (fivRefresh)=\"onRefresh()\" (fivCancel)=\"fivCancel()\" [enabled]=\"!refreshing && !hintVisible\">\n\n  <div class=\"gg-content\">\n    <ng-content></ng-content>\n  </div>\n</ion-content>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ]),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('hintAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0px) translateX(-50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(112px) translateX(-50%)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '112px', opacity: 1, transform: 'translateY(112px) translateX(-50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '40px', transform: 'translateY(112px) translateX(-50%)' }))
                            ]),
                        ]),
                    ],
                    styles: [":host{height:100%;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{position:absolute;z-index:8;opacity:1;left:50%;-webkit-transform:translateY(112px) translateX(-50%);transform:translateY(112px) translateX(-50%);height:40px;padding-left:8px;padding-right:8px;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.gg-content{margin-top:56px}"]
                }] }
    ];
    /** @nocollapse */
    LoadingContentComponent.ctorParameters = function () { return [
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
    ]; };
    LoadingContentComponent.propDecorators = {
        hintText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivProgressChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['content',] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['spinner',] }]
    };
    return LoadingContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingFabComponent = /** @class */ (function () {
    function LoadingFabComponent(renderer) {
        this.renderer = renderer;
        this.iconColor = '#000';
        this.checkmark = false;
        this.disabled = false;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loading = false;
        this.iconState = 'normal';
    }
    Object.defineProperty(LoadingFabComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var verticalClass = !!this.vertical ? "fab-vertical-" + this.vertical : '';
            /** @type {?} */
            var horizontalClass = !!this.horizontal ? "fab-horizontal-" + this.horizontal : '';
            /** @type {?} */
            var edgeClass = this.edge ? "fab-edge-" : '';
            return verticalClass + " " + horizontalClass + " " + edgeClass;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        if (this.icon !== 'md-checkmark') {
            this.loading = !this.loading;
        }
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.spinner.completeIn(500);
        }
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.checkmark) {
            console.log('fill animation done', event);
            this.iconState = 'rotate';
        }
        else {
            this.postComplete();
        }
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    LoadingFabComponent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        console.log(event, icon);
        if (event.fromState === 'normal') {
            this.icon = icon;
            this.iconState = 'normal';
        }
        else {
            if (event.fromState === 'rotate') {
                this.postComplete();
            }
        }
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        this.unload();
        this.fivComplete.emit(this);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingFabComponent.prototype.rotate = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'transform', "rotateZ(" + progress / 200 * 360 + "deg)");
    };
    LoadingFabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-loading-fab',
                    template: "<ion-fab [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [slot]=\"slot\" [edge]=\"edge\">\n  <fiv-loading-spinner (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\" *ngIf=\"loading\" class=\"spinner\" [circleRadius]=\"32\" [diameter]=\"72\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"></fiv-loading-spinner>\n\n  <ion-fab-button [color]=\"fabColor\" [disabled]=\"disabled\">\n    <ion-icon [color]=\"iconColor\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\"\n      [name]=\"icon\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1400ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: [":host{position:absolute;width:72px;height:72px}:host(.fab-vertical-top){top:0}:host(.fab-vertical-top.fab-edge){top:-36px}:host(.fab-vertical-bottom.fab-edge){bottom:-36px}:host(.fab-vertical-bottom){bottom:0}:host(.fab-vertical-center){top:50%}:host(.fab-horizontal-start){left:0}:host(.fab-horizontal-end){right:0}ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}fiv-loading-spinner{position:absolute;left:-8px;top:-8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]
                }] }
    ];
    /** @nocollapse */
    LoadingFabComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
    ]; };
    LoadingFabComponent.propDecorators = {
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        edge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['spinner',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }]
    };
    return LoadingFabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppBarComponent = /** @class */ (function () {
    function AppBarComponent(el) {
        this.el = el;
        this.hidden = false;
        this.fabLeft = true;
        this.fabRight = false;
        this.fabVisible = true;
        this.hideOnScroll = true;
        this.fabIcon = 'md-add';
        this.currentDeltaY = 0;
        this.fivFabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivFabHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivFabShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivAppBarShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivAppBarHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AppBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var content = this.el.nativeElement.closest('ion-content');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(content, 'ionScroll').subscribe(function (event) { return _this.ionScroll(event); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(content, 'ionScrollStart').subscribe(function (event) { return console.log(event); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(content, 'ionScrollEnd').subscribe(function (event) { return _this.ionScrollEnd(event); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.ionScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('scroll', event, this.hideOnScroll);
        if (!this.hideOnScroll) {
            console.log('#####');
            return;
        }
        if (event.detail.deltaY) {
            this.currentDeltaY = event.detail.deltaY;
            console.log(this.currentDeltaY, this.currentDeltaY > 0);
        }
        this.hidden = this.currentDeltaY > 0;
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.onFabClick = /**
     * @return {?}
     */
    function () {
        this.fivFabClick.emit(this);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.ionScrollStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.ionScrollEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.hideFab = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fabVisible = false;
        return new Promise(function (resolve) {
            _this.fivFabHide.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((function (res) { return console.log(res); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.toState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
                console.log('hide fab done', _this);
                resolve(_this);
            });
        });
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.showFab = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fabVisible = true;
        return new Promise(function (resolve) {
            _this.fivFabShow.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.fromState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
                resolve(_this);
            });
        });
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.hideBar = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hidden = true;
        return new Promise(function (resolve) {
            _this.fivAppBarHide.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((function (res) { return console.log(res); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.toState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
                console.log('hide fab done', _this);
                resolve(_this);
            });
        });
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.showBar = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hidden = false;
        return new Promise(function (resolve) {
            _this.fivAppBarShow.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.fromState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
                resolve(_this);
            });
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.onFabAnimStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.onFabAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event.fromState + ' to ' + event.toState);
        if (event.fromState === 'void') {
            this.fivFabShow.emit(event);
        }
        else {
            this.fivFabHide.emit(event);
        }
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.transitionLeft = /**
     * @return {?}
     */
    function () {
        this.fabRight = false;
        this.fabLeft = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(425).toPromise();
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.transitionRight = /**
     * @return {?}
     */
    function () {
        this.fabRight = true;
        this.fabLeft = false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(425).toPromise();
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.transitionMiddle = /**
     * @return {?}
     */
    function () {
        this.fabRight = false;
        this.fabLeft = false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(425).toPromise();
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.cutOutTransitionDone = /**
     * @return {?}
     */
    function () {
        this.fabVisible = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.onAppBarAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event.fromState + ' to ' + event.toState);
        if (event.fromState === 'void') {
            this.fivAppBarShow.emit(event);
        }
        else {
            this.fivAppBarHide.emit(event);
        }
    };
    AppBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-app-bar',
                    template: "<div #shape id=\"shape\" [@appBarAnim] (@appBarAnim.done)=\"onAppBarAnimDone($event)\" *ngIf=\"!hidden\" [ngClass]=\"{'fab-left': fabLeft , 'fab-right':fabRight, 'no-cut': !fabVisible}\">\n  <div [@delayAnim] *ngIf=\"fabVisible\" class=\"box left\"></div>\n  <div [@delayAnim] *ngIf=\"fabVisible\" class=\"box right\"></div>\n  <div [@fullBarAnim] *ngIf=\"!fabVisible\" class=\"box full\"></div>\n  <div [@cutoutAnim]=\"fabLeft && fabVisible ? 'left' : fabRight && fabVisible ? 'right' : fabVisible? 'middle' : ''\"\n    *ngIf=\"fabVisible\" class=\"half\"></div>\n  <ion-buttons id=\"buttons-right\">\n    <ng-content select=\"[end]\"></ng-content>\n  </ion-buttons>\n  <ion-buttons id=\"buttons-left\">\n    <ng-content select=\"[start]\"></ng-content>\n  </ion-buttons>\n</div>\n\n<ion-fab-button color=\"light\" [@fabScrollAnim]=\"hidden ? 'scroll' : 'normal'\" [@fabAnim]=\"fabLeft && fabVisible ? 'left' : fabRight && fabVisible ? 'right' : fabVisible? 'middle' : ''\"\n  *ngIf=\"fabVisible\" (@fabAnim.start)=\"onFabAnimStart($event)\" (@fabAnim.done)=\"onFabAnimDone($event)\" (click)=\"onFabClick()\"\n  id=\"fab\">\n  <ion-icon [name]=\"fabIcon\"></ion-icon>\n</ion-fab-button>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('appBarAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)', opacity: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)', opacity: 0.4 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('delayAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('180ms 175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('180ms 175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.4 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fullBarAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('80ms 335ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('80ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('left => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)', opacity: 0.4 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('right => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)', opacity: 0.4 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('middle => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'scale(1) translateX(-50%)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'scale(0) translateX(-72px)', opacity: 0.0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => left', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '24px', transform: 'scale(0)', opacity: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms 40ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '24px', transform: 'scale(1)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => right', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: 'calc(100% - 80px)', transform: 'scale(0)', opacity: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms 40ms  ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: 'calc(100% - 80px)', transform: 'scale(1)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => middle', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'translateX(-50%) scale(0)', opacity: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms 40ms  ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'translateX(-50%) scale(1)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '24px', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: 'calc(100% - 80px)', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('middle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'translateX(-50%)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fabScrollAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('scroll => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: '-50%' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => scroll', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms 175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: '-16px' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('scroll', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: '-16px' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: '-50%' })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cutoutAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('left => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scaleY(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms 10ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scaleY(0)', opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('right => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scaleY(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms 100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scaleY(0)', opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('middle => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scaleY(1) translateX(-50%)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms 100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scaleY(0) translateX(-50%)', opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => left', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '24px', transform: 'scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    left: '16px', transform: 'scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333'
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => right', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: 'calc(100% - 88px)', transform: 'scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: 'calc(100% - 88px)', transform: 'scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => middle', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'translateX(-50%) scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'translateX(-50%) scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '16px', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: 'calc(100% - 88px)', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('middle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '50%', transform: 'translateX(-50%)' }))
                        ])
                    ],
                    styles: [":host{z-index:5003;position:fixed;width:100%;bottom:0;left:0;height:56px}#shape{width:100%;height:56px;overflow:hidden;position:relative;margin:0 auto;z-index:1}#shape:after,#shape:before{content:'';position:absolute}#shape:before{top:-36px;left:50%;width:72px;height:72px;border-radius:50%;box-shadow:0 0 0 9999px var(--ion-color-primary);z-index:-1;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:220ms}#shape:after{top:0;left:0;width:100%;height:100%}#shape.fab-left:before{left:16px;-webkit-transform:unset;transform:unset}#shape.fab-right:before{left:calc(100% - 72px - 16px);-webkit-transform:unset;transform:unset}#shape.no-cut:before{height:0;transition:220ms 120ms}#fab{position:absolute;top:-50%;border-radius:50%;z-index:5000;transition:.3s;color:var(--ion-color-primary)}#buttons-right{position:absolute;right:0;color:var(--ion-color-primary-contrast);height:56px}#buttons-left{position:absolute;left:0;color:var(--ion-color-primary-contrast);height:56px}.box{width:calc(50% - 36px);height:1px;position:absolute;top:0;box-shadow:0 0 5px #333;transition:.3s}.box.left{left:0}.box.right{right:0}.box.full{left:0;width:100%}.half{top:0;left:50%;width:72px;height:36px;border-bottom-left-radius:72px;border-bottom-right-radius:72px;z-index:-1;-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;box-shadow:inset 0 -4px 6px -4px #333;transition:.3s}.fab-left .half{left:16px;-webkit-transform:unset;transform:unset}.fab-right .half{left:calc(100% - 72px - 16px);-webkit-transform:unset;transform:unset}.fab-right .box.left{width:calc(100% - 72px - 16px)}.fab-left .box.left,.fab-right .box.right{width:16px}.fab-left .box.right{width:calc(100% - 72px - 16px)}"]
                }] }
    ];
    /** @nocollapse */
    AppBarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    AppBarComponent.propDecorators = {
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fabLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fabRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fabVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        hideOnScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fabIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['shape',] }],
        fivFabClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivFabHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivFabShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivAppBarShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivAppBarHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return AppBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IfPlatformDirective = /** @class */ (function () {
    function IfPlatformDirective(platform, viewContainer, templateRef) {
        this.platform = platform;
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
    }
    Object.defineProperty(IfPlatformDirective.prototype, "fivIf", {
        set: /**
         * @param {?} platforms
         * @return {?}
         */
        function (platforms) {
            var _this = this;
            /** @type {?} */
            var show = true;
            platforms.forEach(function (p) {
                if (!_this.platform.is(p)) {
                    show = false;
                }
            });
            console.log('if platforms', platforms, show);
            if (show) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfPlatformDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fivIf]'
                },] }
    ];
    /** @nocollapse */
    IfPlatformDirective.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    IfPlatformDirective.propDecorators = {
        fivIf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return IfPlatformDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CenterDirective = /** @class */ (function () {
    function CenterDirective(sanitizer) {
        this.sanitizer = sanitizer;
        this.vertical = true;
        this.horizontal = true;
    }
    Object.defineProperty(CenterDirective.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var style$$1 = "position: absolute; " + (this.vertical && this.horizontal ? 'top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);' : this.vertical ? 'top: 50%; transform: translateY(-50%);' : 'left: 50%; transform: translateX(-50%);');
            return this.sanitizer.bypassSecurityTrustStyle(style$$1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CenterDirective.prototype, "fivCenter", {
        set: /**
         * @param {?} center
         * @return {?}
         */
        function (center) {
            if (center) {
                this.vertical = center.vertical;
                this.horizontal = center.horizontal;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CenterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('apply position relative to parent here');
    };
    CenterDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fivCenter]'
                },] }
    ];
    /** @nocollapse */
    CenterDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] }
    ]; };
    CenterDirective.propDecorators = {
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style',] }],
        fivCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CenterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PermissionsDirective = /** @class */ (function () {
    function PermissionsDirective(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.allowedPermissions = [];
        this.uPermissions = [];
        console.log('constructor Permissionsdirective');
    }
    Object.defineProperty(PermissionsDirective.prototype, "fivPermissionsUserPermissions", {
        set: /**
         * @param {?} userPermissions
         * @return {?}
         */
        function (userPermissions) {
            console.log('userPermissions', userPermissions);
            this.uPermissions = userPermissions || [];
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionsDirective.prototype, "fivPermissions", {
        set: /**
         * @param {?} allowed
         * @return {?}
         */
        function (allowed) {
            console.log('fivPermissions', allowed);
            this.allowedPermissions = allowed || [];
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PermissionsDirective.prototype.checkPermission = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var show = false;
        this.uPermissions.forEach(function (role) {
            if (_this.allowedPermissions.find(function (a) { return a.toUpperCase() === role.toUpperCase(); })) {
                show = true;
            }
        });
        console.log('has role permission', this.uPermissions, this.allowedPermissions);
        return show;
    };
    /**
     * @return {?}
     */
    PermissionsDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
        if (this.checkPermission()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    };
    PermissionsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fivPermissions]'
                },] }
    ];
    /** @nocollapse */
    PermissionsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    PermissionsDirective.propDecorators = {
        fivPermissionsUserPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return PermissionsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RippleComponent = /** @class */ (function () {
    function RippleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.rippleAnimationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.round = false;
        console.log('ripple constructor');
        this.rippleAnimationEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(750))
            .subscribe(function () {
            renderer.removeClass(el.nativeElement.querySelector('.ripple'), 'show');
            renderer.removeClass(el.nativeElement.querySelector('.rippleWrapper'), 'show');
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RippleComponent.prototype.clickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ripple(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RippleComponent.prototype.PressEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ripple(event);
    };
    Object.defineProperty(RippleComponent.prototype, "isRound", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.round;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    RippleComponent.prototype.ripple = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var ripple = this.el.nativeElement.querySelector('.ripple');
        if (!ripple) {
            this.rippleFactory();
        }
        this.rippleAnimation({ pageX: event.pageX, pageY: event.pageY });
        return;
    };
    /**
     * @return {?}
     */
    RippleComponent.prototype.rippleFactory = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var target = this.el.nativeElement;
        /** @type {?} */
        var rect = target.getBoundingClientRect();
        if (window.getComputedStyle(target).position === 'static') {
            this.position = 'relative';
        }
        /** @type {?} */
        var radius = Math.max(rect.width, rect.height) + 'px';
        /** @type {?} */
        var rippleWrapper = this.renderer.createElement('div');
        this.renderer.addClass(rippleWrapper, 'rippleWrapper');
        /** @type {?} */
        var ripple = this.renderer.createElement('span');
        this.renderer.addClass(ripple, 'ripple');
        this.renderer.setStyle(ripple, 'height', radius);
        this.renderer.setStyle(ripple, 'width', radius);
        this.renderer.appendChild(rippleWrapper, ripple);
        this.renderer.appendChild(target, rippleWrapper);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    RippleComponent.prototype.rippleAnimation = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var pageX = _a.pageX, pageY = _a.pageY;
        /** @type {?} */
        var target = this.el.nativeElement;
        /** @type {?} */
        var rect = target.getBoundingClientRect();
        /** @type {?} */
        var ripple = target.querySelector('.ripple');
        /** @type {?} */
        var rippleWrapper = target.querySelector('.rippleWrapper');
        this.renderer.removeClass(rippleWrapper, 'show');
        this.renderer.removeClass(ripple, 'show');
        /** @type {?} */
        var left = pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
        /** @type {?} */
        var top = pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
        this.renderer.setStyle(ripple, 'top', top);
        this.renderer.setStyle(ripple, 'left', left);
        this.renderer.addClass(rippleWrapper, 'show');
        this.renderer.addClass(ripple, 'show');
        this.rippleAnimationEvent.emit();
    };
    RippleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'fiv-ripple',
                    template: "<ng-content></ng-content>",
                    styles: [":host{display:block;position:relative}:host.round{border-radius:100%}.rippleWrapper{position:absolute;top:0;bottom:0;left:0;width:100%;overflow:hidden;border-radius:inherit}.rippleWrapper::before{content:'';display:block;height:100%;width:100%;-webkit-transform:scale(0);transform:scale(0)}.rippleWrapper.show::before{transition:opacity 1.5s;-webkit-transform:scale(2);transform:scale(2);opacity:0}.ripple{position:absolute;background:rgba(0,0,0,.1);border-radius:100%;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.ripple.show{-webkit-animation:.75s ease-out ripple;animation:.75s ease-out ripple}@-webkit-keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}"]
                }] }
    ];
    /** @nocollapse */
    RippleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
    ]; };
    RippleComponent.propDecorators = {
        round: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.position',] }],
        clickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event'],] }],
        PressEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['press', ['$event'],] }],
        isRound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.round',] }]
    };
    return RippleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ViewportDirective = /** @class */ (function () {
    function ViewportDirective(elementRef) {
        this.elementRef = elementRef;
        this.offset = 0;
        this.fivAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivDisappear = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.visible = false;
    }
    /**
     * @return {?}
     */
    ViewportDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var content = this.elementRef.nativeElement.closest('ion-content');
        this.check();
        content.scrollEvents = true;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.elementRef.nativeElement.closest('ion-content'), 'ionScroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(50))
            .subscribe(function () { return _this.check(); });
        console.log('visible', this.visible, document.body.contains(this.elementRef.nativeElement), this.elementRef.nativeElement.getBoundingClientRect(), this.elementRef.nativeElement, window.innerHeight + this.offset);
    };
    /**
     * @return {?}
     */
    ViewportDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ViewportDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    ViewportDirective.prototype.check = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = {
            target: this.elementRef.nativeElement,
            value: document.body.contains(this.elementRef.nativeElement) &&
                this.elementRef.nativeElement.getBoundingClientRect().top <=
                    window.innerHeight + this.offset
        };
        if (event.value === true) {
            if (!this.visible) {
                this.fivAppear.emit(event);
                this.visible = true;
            }
        }
        else {
            if (this.visible) {
                this.fivDisappear.emit(event);
                this.visible = false;
            }
        }
    };
    /**
     * @return {?}
     */
    ViewportDirective.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.visible;
    };
    ViewportDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fivViewport]',
                    exportAs: 'viewport'
                },] }
    ];
    /** @nocollapse */
    ViewportDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    ViewportDirective.propDecorators = {
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivAppear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivDisappear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return ViewportDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PullDirective = /** @class */ (function () {
    function PullDirective(element, content) {
        this.element = element;
        this.content = content;
        this.minPullHeight = 112;
        this.maxPullHeight = 168;
        this.enabled = true;
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fivPull = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PullDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.content.scrollEvents = true;
        this.content.getScrollElement().then(function (s) {
            _this.scrollY = s; // needed for scrollTop
            _this.setupPanListener();
        });
    };
    /**
     * @return {?}
     */
    PullDirective.prototype.setupPanListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.element.nativeElement, 'touchstart');
        /** @type {?} */
        var touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.element.nativeElement, 'touchmove');
        /** @type {?} */
        var touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.element.nativeElement, 'touchend');
        /** @type {?} */
        var touchcancel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.element.nativeElement, 'touchcancel');
        /** @type {?} */
        var end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(touchend$, touchcancel$);
        /** @type {?} */
        var dragAtTop = touchstart$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return _this.scrollY.scrollTop === 0 && _this.enabled; }));
        /** @type {?} */
        var dragTopDown = dragAtTop
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (start) {
            /** @type {?} */
            var startY = start.touches[0].pageY;
            return touchmove$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (move) {
                /** @type {?} */
                var currentY = move.touches[0].pageY;
                return {
                    startEvent: start,
                    moveEvent: move,
                    startY: startY,
                    currentY: currentY,
                    offset: currentY - startY
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(function (drag) { return drag.offset < 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(end$));
        }));
        dragTopDown.forEach(function (drags) {
            drags.forEach(function (drag) {
                drag.moveEvent.preventDefault();
                /** @type {?} */
                var offset = drag.offset / 2;
                if (offset < 0 || offset > _this.maxPullHeight) {
                    return;
                }
                if (offset <= _this.maxPullHeight) ;
                _this.fivPull.emit(offset / _this.maxPullHeight);
            });
            drags
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["last"])())
                .subscribe(function (drag) {
                /** @type {?} */
                var offset = drag.offset / 2;
                /** @type {?} */
                var refresh = offset >= _this.minPullHeight;
                if (refresh) {
                    _this.fivRefresh.emit();
                }
                else {
                    _this.fivCancel.emit();
                }
            });
        });
    };
    PullDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fivPull]'
                },] }
    ];
    /** @nocollapse */
    PullDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Content"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }] }
    ]; };
    PullDirective.propDecorators = {
        minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fivPull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return PullDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this._indicatorValue = -1;
        this.state = 'normal';
        this.indicatorState = 'scale';
        this.indicatorValueState = 'scale';
    }
    Object.defineProperty(IconComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            console.log('set name');
            if (this._name) {
                this.transform(name);
            }
            else {
                this._name = name;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "indicatorValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._indicatorValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.transformIndicator(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} name
     * @return {?}
     */
    IconComponent.prototype.transform = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.temp = name;
        this.state = 'rotate';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IconComponent.prototype.transformIndicator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        console.log('transform indicator', value);
        if (value === -1) {
            this._indicatorValue = value;
            this.indicatorState = 'scale';
            this.indicatorValueState = 'scale';
        }
        else if (value === 0) {
            this.tempValue = value;
            this.indicatorState = 'normal';
            this.indicatorValueState = 'scale';
        }
        else {
            this.indicatorState = 'scale';
            if (this.indicatorValueState === 'scale') {
                this.indicatorValueState = 'normal';
                this._indicatorValue = value;
            }
            else {
                this.tempValue = value;
                this.indicatorValueState = 'scale';
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IconComponent.prototype.rotateAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'normal' && event.toState === 'rotate') {
            this._name = this.temp;
            this.state = 'normal';
        }
        if (event.fromState === 'rotate' && event.toState === 'normal') {
            console.log('icon transition done');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IconComponent.prototype.incrementDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('increment done', event);
        if (event.fromState === 'normal' && event.toState === 'scale') {
            if (this.tempValue > 0) {
                this.indicatorValueState = 'normal';
                this._indicatorValue = this.tempValue;
            }
            else {
                this._indicatorValue = this.tempValue;
            }
        }
    };
    IconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'fiv-icon',
                    template: "<ion-icon [@rotateAnim]=\"state\" (@rotateAnim.done)=\"rotateAnimDone($event)\" [name]=\"_name\"></ion-icon>\n<span [@scaleAnim]=\"indicatorState\" class=\"indicator\"></span>\n<span *ngIf=\"_indicatorValue > -1\" class=\"indicator-background\">\n</span>\n<span [@scaleAnim]=\"indicatorValueState\" (@scaleAnim.done)=\"incrementDone($event)\" class=\"indicator-value\"><span *ngIf=\"indicatorValue <= 9\">{{indicatorValue}}</span><span *ngIf=\"indicatorValue > 9\">9+</span></span>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0) rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1) rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => scale', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('scale => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('scale', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1)' }))
                        ])
                    ],
                    styles: ["ion-icon{padding:0;margin:0;font-size:1.8em}.indicator{position:absolute;width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:4px;border-radius:100%;right:8px;z-index:12}.indicator-value{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-heigt,14px);background-color:var(--fiv-dot-color,var(--ion-color-primary));color:var(--fiv-dot-color-background,var(--ion-color-light));top:0;border-radius:14px;right:4px;z-index:13}.indicator-value *{position:absolute;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:.6em}.indicator-background{position:absolute;width:var(--fiv-dot-width,10px);height:var(--fiv-dot-heigt,10px);background-color:var(--fiv-dot-color-background,transparent);top:3px;border-radius:100%;right:7px;z-index:11}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return []; };
    IconComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        indicatorValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return IconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FivethreeCoreModule = /** @class */ (function () {
    function FivethreeCoreModule() {
    }
    FivethreeCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]
                    ],
                    declarations: [
                        ExpandableComponent,
                        PasswordComponent,
                        StepperComponent,
                        StepComponent,
                        StepHeaderComponent,
                        StepContentComponent,
                        RouterItemComponent,
                        CenterDirective,
                        CollapsableMenuButtonComponent,
                        CollapsableMenuDirective,
                        BottomSheetComponent,
                        BottomSheetContentComponent,
                        ToolbarSearchComponent,
                        LoadingButtonComponent,
                        LoadingProgressBarComponent,
                        LoadingContentComponent,
                        LoadingFabComponent,
                        AppBarComponent,
                        IfPlatformDirective,
                        PermissionsDirective,
                        RippleComponent,
                        ViewportDirective,
                        PullDirective,
                        LoadingRefresherContentComponent,
                        LoadingSpinnerComponent,
                        StepperHorizontalComponent,
                        IconComponent
                    ],
                    exports: [
                        ExpandableComponent,
                        PasswordComponent,
                        StepperComponent,
                        StepComponent,
                        StepHeaderComponent,
                        StepContentComponent,
                        RouterItemComponent,
                        CollapsableMenuDirective,
                        CenterDirective,
                        CollapsableMenuButtonComponent,
                        BottomSheetComponent,
                        BottomSheetContentComponent,
                        ToolbarSearchComponent,
                        LoadingButtonComponent,
                        LoadingProgressBarComponent,
                        LoadingContentComponent,
                        LoadingFabComponent,
                        AppBarComponent,
                        IfPlatformDirective,
                        PermissionsDirective,
                        RippleComponent,
                        ViewportDirective,
                        PullDirective,
                        LoadingRefresherContentComponent,
                        LoadingSpinnerComponent,
                        StepperHorizontalComponent,
                        IconComponent
                    ]
                },] }
    ];
    return FivethreeCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1yZWZyZXNoZXItY29udGVudC9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwL3N0ZXAuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyLWhvcml6b250YWwvc3RlcHBlci1ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3JvdXRlci1pdGVtL3JvdXRlci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2NvbGxhcHNhYmxlLW1lbnUvY29sbGFwc2FibGUtbWVudS1idXR0b24vY29sbGFwc2FibGUtbWVudS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9ib3R0b20tc2hlZXQvZHJhd2VyLXN0YXRlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmcvbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctcHJvZ3Jlc3MtYmFyL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1jb250ZW50L2xvYWRpbmctY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1mYWIvbG9hZGluZy1mYWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9pZi1wbGF0Zm9ybS5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9jZW50ZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpcmVjdGl2ZXMvcGVybWlzc2lvbnMuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpcmVjdGl2ZXMvdmlld3BvcnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpcmVjdGl2ZXMvcHVsbC5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9maXZldGhyZWUuY29yZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgdGFrZSwgdGFrZVVudGlsLCBsYXN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCxcbiAgSW5qZWN0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgdGltZXIsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5jb25zdCBCQVNFX1NJWkUgPSAxMDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICdbc3R5bGUud2lkdGgucHhdJzogJ2RpYW1ldGVyJyxcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnZGlhbWV0ZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZGlhbWV0ZXJzID0gbmV3IFNldDxudW1iZXI+KFtCQVNFX1NJWkVdKTtcbiAgcHJpdmF0ZSBzdGF0aWMgc3R5bGVUYWc6IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZGlhbWV0ZXIgPSBCQVNFX1NJWkU7XG4gIF9zdHJva2VXaWR0aCA9IDEwO1xuICBfdmFsdWUgPSAwO1xuXG5cbiAgQE91dHB1dCgpIGZpdlByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBmaXZDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1NwaW5uZXJDb21wb25lbnQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ2RldGVybWluYXRlQ2lyY2xlJykgZGV0ZXJtaW5hdGVDaXJjbGU6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG1vZGU6ICdpbmRldGVybWluYXRlJyB8ICdkZXRlcm1pbmF0ZScgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIEBJbnB1dCgpIGNpcmNsZVJhZGl1cyA9IDQ1O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgY2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSArICcgbWF0LXNwaW5uZXIgbWF0LXByb2dyZXNzLXNwaW5uZXIgbWF0LXByb2dyZXNzLXNwaW5uZXItaW5kZXRlcm1pbmF0ZS1hbmltYXRpb24nO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSwgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGUpO1xuICB9XG5cbiAgZ2V0IHZpZXdCb3goKSB7XG4gICAgY29uc3Qgdmlld0JveCA9IHRoaXMuY2lyY2xlUmFkaXVzICogMiArIHRoaXMuc3Ryb2tlV2lkdGg7XG4gICAgcmV0dXJuIGAwIDAgJHt2aWV3Qm94fSAke3ZpZXdCb3h9YDtcbiAgfVxuXG4gIC8qKiBUaGUgc3Ryb2tlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIHN2ZyBjaXJjbGUuICovXG4gIGdldCBzdHJva2VDaXJjdW1mZXJlbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDIgKiBNYXRoLlBJICogdGhpcy5jaXJjbGVSYWRpdXM7XG4gIH1cblxuICAvKiogVGhlIGRhc2ggb2Zmc2V0IG9mIHRoZSBzdmcgY2lyY2xlLiAqL1xuICBnZXQgc3Ryb2tlRGFzaE9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlICogKDEwMCAtIHRoaXMuX3ZhbHVlKSAvIDEwMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTdHJva2Ugd2lkdGggb2YgdGhlIGNpcmNsZSBpbiBwZXJjZW50LiAqL1xuICBnZXQgY2lyY2xlU3Ryb2tlV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Ryb2tlV2lkdGggLyB0aGlzLmRpYW1ldGVyICogMTAwO1xuICB9XG5cbiAgLyoqIFZhbHVlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyB0aGlzLl92YWx1ZSA6IDA7XG4gIH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgKG5ld1ZhbHVlKSkpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpYW1ldGVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9kaWFtZXRlcjsgfVxuICBzZXQgZGlhbWV0ZXIoc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGlhbWV0ZXIgPSBzaXplO1xuXG4gICAgaWYgKCFMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5kaWFtZXRlcnMuaGFzKHRoaXMuX2RpYW1ldGVyKSkge1xuICAgICAgdGhpcy5fYXR0YWNoU3R5bGVOb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFN0cm9rZSB3aWR0aCBvZiB0aGUgcHJvZ3Jlc3Mgc3Bpbm5lci4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoIHx8IHRoaXMuZGlhbWV0ZXIgLyAxMDtcbiAgfVxuICBzZXQgc3Ryb2tlV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdmFsdWU7XG4gIH1cblxuXG4gIC8qKiBEeW5hbWljYWxseSBnZW5lcmF0ZXMgYSBzdHlsZSB0YWcgY29udGFpbmluZyB0aGUgY29ycmVjdCBhbmltYXRpb24gZm9yIHRoaXMgZGlhbWV0ZXIuICovXG4gIHByaXZhdGUgX2F0dGFjaFN0eWxlTm9kZSgpOiB2b2lkIHtcbiAgICBsZXQgc3R5bGVUYWcgPSBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5zdHlsZVRhZztcblxuICAgIGlmICghc3R5bGVUYWcpIHtcbiAgICAgIHN0eWxlVGFnID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHRoaXMuX2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQuc3R5bGVUYWcgPSBzdHlsZVRhZztcbiAgICB9XG5cbiAgICBpZiAoc3R5bGVUYWcgJiYgc3R5bGVUYWcuc2hlZXQpIHtcbiAgICAgIChzdHlsZVRhZy5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KS5pbnNlcnRSdWxlKHRoaXMuX2dldEFuaW1hdGlvblRleHQoKSwgMCk7XG4gICAgfVxuXG4gICAgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQuZGlhbWV0ZXJzLmFkZCh0aGlzLmRpYW1ldGVyKTtcbiAgfVxuXG5cbiAgLyoqIEdlbmVyYXRlcyBhbmltYXRpb24gc3R5bGVzIGFkanVzdGVkIGZvciB0aGUgc3Bpbm5lcidzIGRpYW1ldGVyLiAqL1xuICBwcml2YXRlIF9nZXRBbmltYXRpb25UZXh0KCk6IHN0cmluZyB7XG4gICAgY29uc3QgSU5ERVRFUk1JTkFURV9BTklNQVRJT05fVEVNUExBVEUgPSBgXG4gICAgQGtleWZyYW1lcyBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1zdHJva2Utcm90YXRlLURJQU1FVEVSIHtcbiAgICAgICAwJSAgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgICAgICAxMi41JSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgICAgICAxMi41MDAxJSAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoNzIuNWRlZyk7IH1cbiAgICAgICAyNSUgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDcyLjVkZWcpOyB9XG4gICAgICAgMjUuMDAwMSUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cbiAgICAgICAzNy41JSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxuICAgICAgIDM3LjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgxNjEuNWRlZyk7IH1cbiAgICAgICA1MCUgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDE2MS41ZGVnKTsgfVxuICAgICAgIDUwLjAwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cbiAgICAgICA2Mi41JSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuICAgICAgIDYyLjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgyNTEuNWRlZyk7IH1cbiAgICAgICA3NSUgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDI1MS41ZGVnKTsgfVxuICAgICAgIDc1LjAwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgICAgIDg3LjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cbiAgICAgICA4Ny41MDAxJSAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMzQxLjVkZWcpOyB9XG4gICAgICAgMTAwJSAgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgzNDEuNWRlZyk7IH1cbiAgICAgfVxuICAgYDtcbiAgICByZXR1cm4gSU5ERVRFUk1JTkFURV9BTklNQVRJT05fVEVNUExBVEVcbiAgICAgIC8vIEFuaW1hdGlvbiBzaG91bGQgYmVnaW4gYXQgNSUgYW5kIGVuZCBhdCA4MCVcbiAgICAgIC5yZXBsYWNlKC9TVEFSVF9WQUxVRS9nLCBgJHswLjk1ICogdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlfWApXG4gICAgICAucmVwbGFjZSgvRU5EX1ZBTFVFL2csIGAkezAuMiAqIHRoaXMuc3Ryb2tlQ2lyY3VtZmVyZW5jZX1gKVxuICAgICAgLnJlcGxhY2UoL0RJQU1FVEVSL2csIGAke3RoaXMuZGlhbWV0ZXJ9YCk7XG4gIH1cblxuXG4gIGNvbXBsZXRlSW4oZHVyYXRpb246IG51bWJlcikge1xuICAgIHRoaXMubW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZSBpbicsIGR1cmF0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnaW50ZXJ2YWwnLCBkdXJhdGlvbiAvIDEwMCk7XG4gICAgY29uc29sZS5sb2coJ3RpbWVyIGxlbmd0aCcsIGR1cmF0aW9uICsgZHVyYXRpb24gLyA1MCk7XG4gICAgY29uc29sZS5sb2coJ2xvb3AgY291bnQnLCAoZHVyYXRpb24gKyBkdXJhdGlvbiAvIDUwKSAvIChkdXJhdGlvbiAvIDEwMCkpO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZShgJHtkdXJhdGlvbn1tcyBlYXNlLW91dGAsIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICB9KSlcbiAgICBdKTtcblxuICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5kZXRlcm1pbmF0ZUNpcmNsZS5uYXRpdmVFbGVtZW50KTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5maXZDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgICAgdGhpcy5fdmFsdWUgPSAwO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBpID0gaW50ZXJ2YWwoZHVyYXRpb24gLyAxMDApO1xuICAgIGNvbnN0IHQgPSB0aW1lcihkdXJhdGlvbiArIGR1cmF0aW9uIC8gNTApO1xuICAgIGNvbnN0IHByb2dyZXNzID0gaS5waXBlKHRha2VVbnRpbCh0KSk7XG5cbiAgICBwcm9ncmVzcy5zdWJzY3JpYmUocCA9PiB7XG4gICAgICB0aGlzLmZpdlByb2dyZXNzLmVtaXQocCk7XG4gICAgfSk7XG5cbiAgfVxuICBzZXRWYWx1ZShwcm9ncmVzczogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLm1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuX3ZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGNvbnNvbGUubG9nKCdzZXQgdmFsdWUnLCB0aGlzLl92YWx1ZSwgdGhpcy5tb2RlKTtcbiAgfVxuXG4gIHNwaW4oKSB7XG4gICAgdGhpcy5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHN0b3BTcGlubmluZygpIHtcbiAgICB0aGlzLl92YWx1ZSA9IDA7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2V0TW9kZShtb2RlKSB7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUsIEFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1yZWZyZXNoZXItY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgXSlcbiAgXSksXG4gIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICBdKVxuICBdKSxcbiAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICBdKSxcbiAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgXSksXG4gIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSgnMTQwMG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAnb3BhY2l0eSc6IDBcbiAgICB9KVxuICAgICldXG4gICldXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwaW5Db2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uQ29sb3IgPSAnIzAwMCc7XG4gIEBJbnB1dCgpIGNoZWNrbWFyayA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBmaXZDb21wbGV0ZTogRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdkhpZGRlbjogRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZTaG93ZWQ6IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2UHJvZ3Jlc3M6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IExvYWRpbmdTcGlubmVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdiYWNrZ3JvdW5kJykgYmFja2dyb3VuZDogRWxlbWVudFJlZjtcblxuICB2aXNpYmxlID0gZmFsc2U7XG4gIGljb25TdGF0ZSA9ICdub3JtYWwnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy5zcGlubmVyLnNwaW4oKTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLnNwaW5uZXIuc3RvcFNwaW5uaW5nKCk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvLyB0aGlzLnNwaW5uZXIuY29tcGxldGVJbig1MDApO1xuICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcmc2hvdycpO1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICBhbmltYXRlKCcwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuYmFja2dyb3VuZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICBwbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgdGhpcy5maXZTaG93ZWQuZW1pdCh0aGlzKTtcbiAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHNjYWxlKDEpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiB0cmFuc2Zvcm0gfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuYmFja2dyb3VuZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICBwbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgdGhpcy5maXZIaWRkZW4uZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbGxBbmltYXRpb25Eb25lKCkge1xuICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUljb25BbmRSZXZlYWwoZXZlbnQsIGljb246IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJykge1xuICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ25vcm1hbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdyb3RhdGUnKSB7XG4gICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwb3N0Q29tcGxldGUoKSB7XG4gICAgdGhpcy51bmxvYWQoKTtcbiAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gIH1cblxuICBzZXRWYWx1ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5zcGlubmVyLnNldFZhbHVlKHByb2dyZXNzKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc3Bpbm5lci5zZXRNb2RlKCdpbmRldGVybWluYXRlJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpc0xhc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc3VidGl0bGUgPSAnJztcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgYW5pbWF0ZSwgcXVlcnksIHN0YWdnZXIsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgcm90YXRlQW5pbWF0aW9uID0gdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgXSksXG4gICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWig0NWRlZyknIH0pKSxcbiAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDBkZWcpJyB9KSlcbl0pO1xuXG5leHBvcnQgY29uc3QgbGlzdEFuaW1hdGlvbiA9IHRyaWdnZXIoJ2xpc3RBbmltJywgW1xuICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMCcgfSkpLFxuICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuICAgICAgICBhbmltYXRlKCczNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKVxuICAgIF0pXG5dKTtcblxuZXhwb3J0IGNvbnN0IGFycm93QW5pbWF0aW9uID0gdHJpZ2dlcignYXJyb3dBbmltJywgW1xuICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGVaKC0xODBkZWcpJyB9KSksXG4gICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpLFxuICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuICAgICAgICBhbmltYXRlKCczNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKVxuICAgIF0pXG5dKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcm90YXRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXN0ZXAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3JvdGF0ZUFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgdGVtcEljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMudGVtcEljb24gPSB0aGlzLmljb247XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pY29uID0gdGhpcy50ZW1wSWNvbjtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGxpc3RBbmltYXRpb24gfSBmcm9tICcuLi9hbmltYXRpb25zL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZXhwYW5kYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbbGlzdEFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGlzT3BlbiA9IGZhbHNlO1xuICBzdGF0ZSA9ICdjbG9zZWQnO1xuICBAT3V0cHV0KCkgZml2V2lsbE9wZW46IEV2ZW50RW1pdHRlcjxFeHBhbmRhYmxlQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkRpZE9wZW46IEV2ZW50RW1pdHRlcjxFeHBhbmRhYmxlQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdldpbGxDbG9zZTogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2RGlkQ2xvc2U6IEV2ZW50RW1pdHRlcjxFeHBhbmRhYmxlQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmZpdldpbGxPcGVuLmVtaXQodGhpcyk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSAnb3Blbic7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmZpdldpbGxDbG9zZS5lbWl0KHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnO1xuICB9XG5cbiAgb25BbmltYXRpb25FbmQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gICAgfSBlbHNlIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgdGhpcy5maXZEaWRDbG9zZS5lbWl0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcC1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzTGFzdCA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPFN0ZXBDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkRpZENsb3NlOiBFdmVudEVtaXR0ZXI8U3RlcENvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlbGYnKSBzdGVwOiBFeHBhbmRhYmxlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdoZWFkZXInKSBoZWFkZXI6IFN0ZXBIZWFkZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zdGVwLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc3RlcC5jbG9zZSgpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5oZWFkZXIuY29tcGxldGUoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaGVhZGVyLnJlc2V0KCk7XG4gIH1cblxuICBhZnRlckNsb3NlKCkge1xuICAgIHRoaXMuZml2RGlkQ2xvc2UuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGFmdGVyT3BlbigpIHtcbiAgICB0aGlzLmZpdkRpZE9wZW4uZW1pdCh0aGlzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUXVlcnlMaXN0LCBJbnB1dCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcENvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVzIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgcm90YXRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXN0ZXBwZXItaG9yaXpvbnRhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3JvdGF0ZUFuaW1hdGlvbl1cblxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29udGVudHM6IFF1ZXJ5TGlzdDxTdGVwQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVzJykgc2xpZGVzOiBTbGlkZXM7XG4gIEBPdXRwdXQoKSBmaXZTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2xpZGVzLmxvY2tTd2lwZXModHJ1ZSk7XG4gIH1cblxuICBjbG9zZSgpOiBhbnkge1xuICAgIHRoaXMuc2xpZGVzLnNsaWRlVG8oMCk7XG4gIH1cbiAgb3BlbihpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBjb25zb2xlLmxvZygnb3BlbiBzbGlkZScsIGluZGV4KTtcbiAgICB0aGlzLnNsaWRlcy5sb2NrU3dpcGVzKGZhbHNlKTtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZVRvKGluZGV4KTtcbiAgICB0aGlzLnNsaWRlcy5sb2NrU3dpcGVzKHRydWUpO1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU3RlcENvbXBvbmVudCB9IGZyb20gJy4vLi4vc3RlcC9zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXBwZXItaG9yaXpvbnRhbC9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKFN0ZXBDb21wb25lbnQpIGNvbnRlbnRzOiBRdWVyeUxpc3Q8U3RlcENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oU3RlcENvbnRlbnRDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8U3RlcENvbnRlbnRDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkKFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50KSBob3Jpem9udGFsOiBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudDtcbiAgQElucHV0KCkgbW9kZTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3BlbihpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgY29uc29sZS5sb2coJysjKyMrJyk7XG4gICAgICB0aGlzLmhvcml6b250YWwub3BlbihpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0ub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0gMTtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5jbG9zZSgpO1xuICAgIH1cblxuICB9XG5cbiAgc2VsZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0JywgaW5kZXgpO1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5jb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xuXG4gICAgICB9XG4gICAgICB0aGlzLm9wZW4oaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgdGhpcy5ob3Jpem9udGFsLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgc3RlcC5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCA/IHRoaXMuY3VycmVudEluZGV4ICsgMSA6IC0xO1xuICAgIGNvbnNvbGUubG9nKCduZXh0IGluZGV4JywgbmV4dCk7XG4gICAgdGhpcy5zZWxlY3QobmV4dCk7XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jdXJyZW50SW5kZXggPiAwID8gdGhpcy5jdXJyZW50SW5kZXggKyAtMSA6IC0xO1xuICAgIGNvbnNvbGUubG9nKCduZXh0IGluZGV4JywgbmV4dCk7XG4gICAgdGhpcy5zZWxlY3QobmV4dCk7XG4gIH1cblxuICBjb21wbGV0ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgLy8gbm90IHlldCBpbXBsZXRlbnRlZFxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5jb21wbGV0ZSgpO1xuXG4gICAgfVxuICB9XG5cbiAgcmVzZXQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgLy8gbm90IHlldCBpbXBsZXRlbnRlZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcm91dGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcm91dGVyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb3V0ZXItaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG5hdmlnYXRlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwYWdlVXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYWN0aXZlIHN0YXRlLlxuICAgKiBEZWZhdWx0IHZhbHVlIGlzOiBgXCJsZWZ0XCJgXG4gICAqL1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ3RvcCcgfCAnb3V0bGluZScgPSAnbGVmdCc7XG5cbiAgLyoqXG4gICAqIFRoZSBzaGFwZSBvZiB0aGUgYWN0aXZlIHN0YXRlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBgXCJsaW5lXCJgLCBgXCJkb3RcImAgYW5kIGFueSBpb25pY29uLlxuICAgKiBEZWZhdWx0IHZhbHVlIGlzOiBgXCJsaW5lXCJgXG4gICAqL1xuICBASW5wdXQoKSBzaGFwZTogJ2xpbmUnIHwgJ2RvdCcgfCBzdHJpbmcgPSAnbGluZSc7XG5cbiAgQElucHV0KCkgcm91dGVBY3RpdmUgPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICBpZiAodGhpcy5uYXZpZ2F0ZSAmJiB0aGlzLnBhZ2VVcmwpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5wYWdlVXJsKTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5wb3NpdGlvbn0gJHt0aGlzLnNoYXBlfWA7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIGdldCBhY3RpdmVDbGFzcygpIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICh0aGlzLnJvdXRlQWN0aXZlICYmIHRoaXMucm91dGVyLnVybC5zdGFydHNXaXRoKHRoaXMucGFnZVVybCkpXG4gICAgICB8fCB0aGlzLmFjdGl2ZTtcbiAgICByZXR1cm4gaXNBY3RpdmU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFzU2hhcGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGUgPT09ICdsaW5lJ1xuICAgICAgfHwgdGhpcy5zaGFwZSA9PT0gJ2RvdCc7XG4gIH1cblxuICBnZXRDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTaGFwZSgpID8gW3RoaXMucG9zaXRpb24sIHRoaXMuc2hhcGVdIDogW3RoaXMucG9zaXRpb25dO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdkNvbGxhcHNlTWVudV0nLFxuICBleHBvcnRBczogJ21lbnVDb2xsYXBzZSdcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlIHtcblxuICBjb2xsYXBzZWQgPSBmYWxzZTtcbiAgaG92ZXJpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgaG92ZXJNZW51ID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7IH1cblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuICBnZXQgbXlTdHlsZSgpOiBTYWZlU3R5bGUge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAmJiAodGhpcy5wbGF0Zm9ybS5pcygndGFibGV0JykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnZWxlY3Ryb24nKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdkZXNrdG9wJykpKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplclxuICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCdtaW4td2lkdGg6IDY0cHg7IG1heC13aWR0aDogNjRweDsgLS1ib3JkZXI6IDA7IHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoLjU1LDAsLjEsMSkgMjAwbXM7Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJy0tYm9yZGVyOiAwOyB0cmFuc2l0aW9uOiBhbGwgY3ViaWMtYmV6aWVyKC41NSwwLC4xLDEpICAyNTBtczsnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgaG92ZXIoKSB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICYmICF0aGlzLmhvdmVyaW5nICYmIHRoaXMuaG92ZXJNZW51KSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHRoaXMuaG92ZXJpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBibHVyKCkge1xuICAgIGlmICghdGhpcy5ob3Zlck1lbnUpIHsgcmV0dXJuOyB9XG4gICAgaWYgKCF0aGlzLmNvbGxhcHNlZCAmJiB0aGlzLmhvdmVyaW5nKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBmaXZDb2xsYXBzZU1lbnUoY29sbGFwc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IGNvbGxhcHNlO1xuICB9XG5cblxuICB0b2dnbGVNZW51KCkge1xuICAgIGlmICh0aGlzLmhvdmVyaW5nKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IHRydWU7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUgfSBmcm9tICcuLi9jb2xsYXBzYWJsZS1tZW51LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1jb2xsYXBzYWJsZS1tZW51LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsYXBzYWJsZS1tZW51LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2FibGVNZW51QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtZW51OiBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJyMjIycsIHRoaXMubWVudSk7XG4gICAgdGhpcy5tZW51LnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYXNzd29yZENvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXNzd29yZC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUlxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGhpZGVJY29uID0gJ2V5ZS1vZmYnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2Zsb2F0aW5nJyB8ICdpbmxpbmUnIHwgJ2ZpeGVkJyB8ICdzdGFja2VkJyA9ICdmbG9hdGluZyc7XG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dJY29uID0gJ2V5ZSc7XG4gIEBJbnB1dCgpIGNsZWFyT25FZGl0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcGFzc3dvcmRWYWx1ZSA9ICcnO1xuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdG9nZ2xlU2hvd1Bhc3N3b3JkKCkge1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gIH1cblxuICBnZXQgcGFzc3dvcmRWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZFZhbHVlO1xuICB9XG5cbiAgc2V0IHBhc3N3b3JkVmFsdWUodjogYW55KSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX3Bhc3N3b3JkVmFsdWUpIHtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkVmFsdWUgPSB2O1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX3Bhc3N3b3JkVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB0aGlzLl9wYXNzd29yZFZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXNzd29yZFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbn1cbiIsImV4cG9ydCBlbnVtIERyYXdlclN0YXRlIHtcbiAgICBCb3R0b20sXG4gICAgRG9ja2VkLFxuICAgIFRvcFxufVxuIiwiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhd2VyU3RhdGUgfSBmcm9tICcuLi9kcmF3ZXItc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYm90dG9tLXNoZWV0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLXNoZWV0LWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm91bmRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGhhbmRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGZsb2F0ID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2SGFuZGxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGN1cnJlbnRTdGF0ZTogRHJhd2VyU3RhdGU7XG4gIHN0YXRlcyA9IERyYXdlclN0YXRlO1xuXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yb3VuZGVkJykgZ2V0IGlzUm91bmRlZCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLlRvcDogcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ6IHJldHVybiB0aGlzLnJvdW5kZWQ7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkJvdHRvbTogcmV0dXJuIHRoaXMucm91bmRlZCAmJiAhdGhpcy5mbG9hdDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJykgZ2V0IHN0eWxlcygpIHtcbiAgICBpZiAoISh0aGlzLmZsb2F0ICYmIHRoaXMuY3VycmVudFN0YXRlID09PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO2ApO1xuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShzdGF0ZTogRHJhd2VyU3RhdGUpOiBhbnkge1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGdvdCBzdGF0ZScsIHN0YXRlKTtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5maXZIYW5kbGVDbGljay5lbWl0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21Db250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERyYXdlclN0YXRlIH0gZnJvbSAnLi9kcmF3ZXItc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvdHRvbS1zaGVldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZG9ja2VkSGVpZ2h0ID0gODA7XG5cbiAgQElucHV0KCkgc2hvdWxkQm91bmNlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkaXN0YW5jZVRvcCA9IDU2O1xuXG4gIEBJbnB1dCgpIHRyYW5zaXRpb24gPSAnMC4yNXMgZWFzZS1pbi1vdXQnO1xuXG4gIEBJbnB1dCgpIHN0YXRlOiBEcmF3ZXJTdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcblxuICBASW5wdXQoKSBtaW5pbXVtSGVpZ2h0ID0gMjQ7XG5cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RHJhd2VyU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3ZXJTdGF0ZT4oKTtcbiAgQE91dHB1dCgpIGZpdk9wZW46IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2RG9ja2VkOiBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlOiBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCkgY29udGVudDogQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50O1xuXG4gIHByaXZhdGUgX3N0YXJ0UG9zaXRpb25Ub3A6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfQk9VTkNFX0RFTFRBID0gMzA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2RvbUN0cmw6IERvbUNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7IH1cblxuXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUnKSBnZXQgc3R5bGVzKCkge1xuICAvLyAgIGlmICh0aGlzLnJvdW5kZWQpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzLnNhbml0aXplclxuICAvLyAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCcgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDsgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7Jyk7XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZWxlbWVudCwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXYtYm90dG9tLWRyYXdlci1zY3JvbGxhYmxlLWNvbnRlbnQgLnNjcm9sbC15JykpO1xuICAgIC8vIHRoaXMuX3JlbmRlcmVyLlxuICAgIC8vICAgc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXYtYm90dG9tLWRyYXdlci1zY3JvbGxhYmxlLWNvbnRlbnQgLnNjcm9sbC15JyksICd0b3VjaC1hY3Rpb24nLCAnbm9uZScpO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGhhbW1lci5nZXQoJ3BhbicpLnNldCh7IGVuYWJsZTogdHJ1ZSwgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMIH0pO1xuICAgIGhhbW1lci5vbigncGFuIHBhbnN0YXJ0IHBhbmVuZCcsIChldjogYW55KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgICAgY2FzZSAncGFuc3RhcnQnOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVBhblN0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhbmVuZCc6XG4gICAgICAgICAgdGhpcy5faGFuZGxlUGFuRW5kKGV2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQYW4oZXYpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZW50LmZpdkhhbmRsZUNsaWNrXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Cb3R0b206IHJldHVybiB0aGlzLmRvY2soKTtcbiAgICAgICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDogcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlcy5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXREcmF3ZXJTdGF0ZShjaGFuZ2VzLnN0YXRlLmN1cnJlbnRWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KGNoYW5nZXMuc3RhdGUuY3VycmVudFZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRlbnQoc3RhdGU6IERyYXdlclN0YXRlKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50LnVwZGF0ZVN0YXRlKHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXREcmF3ZXJTdGF0ZShzdGF0ZTogRHJhd2VyU3RhdGUpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgdGhpcy50cmFuc2l0aW9uKTtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkJvdHRvbTpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgnY2FsYygxMDB2aCAtICcgKyB0aGlzLm1pbmltdW1IZWlnaHQgKyAncHgpJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ6XG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkoKHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5kb2NrZWRIZWlnaHQpICsgJ3B4Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGFuU3RhcnQoKSB7XG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvblRvcCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW5FbmQoZXYpIHtcbiAgICBpZiAodGhpcy5zaG91bGRCb3VuY2UgJiYgZXYuaXNGaW5hbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIHRoaXMudHJhbnNpdGlvbik7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVEb2NrZWRQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERyYXdlclN0YXRlLlRvcDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVUb3BQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2hhbmRsZUJvdHRvbVBhbkVuZChldik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGVDaGFuZ2UuZW1pdCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRvcFBhbkVuZChldikge1xuICAgIGlmIChldi5kZWx0YVkgPiB0aGlzLl9CT1VOQ0VfREVMVEEpIHtcbiAgICAgIGlmICh0aGlzLm1pbmltdW1IZWlnaHQgPT09IHRoaXMuZG9ja2VkSGVpZ2h0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuQm90dG9tO1xuICAgICAgICAgIHRoaXMuZml2Q2xvc2UuZW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERyYXdlclN0YXRlLkRvY2tlZCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgICAgICAgdGhpcy5maXZEb2NrZWQuZW1pdCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkodGhpcy5kaXN0YW5jZVRvcCArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZURvY2tlZFBhbkVuZChldikge1xuICAgIGNvbnN0IGFic0RlbHRhWSA9IE1hdGguYWJzKGV2LmRlbHRhWSk7XG4gICAgaWYgKGFic0RlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSAmJiBldi5kZWx0YVkgPCAwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuVG9wKSB7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLlRvcDtcbiAgICAgICAgdGhpcy5maXZPcGVuLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFic0RlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSAmJiBldi5kZWx0YVkgPiAwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuQm90dG9tKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgICAgIHRoaXMuZml2Q2xvc2UuZW1pdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCh0aGlzLl9wbGF0Zm9ybS5oZWlnaHQoKSAtIHRoaXMuZG9ja2VkSGVpZ2h0KSArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUJvdHRvbVBhbkVuZChldikge1xuICAgIGlmICgtZXYuZGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuRG9ja2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgICAgIHRoaXMuZml2RG9ja2VkLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgnY2FsYygxMDB2aCAtICcgKyB0aGlzLm1pbmltdW1IZWlnaHQgKyAncHgpJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGFuKGV2KSB7XG4gICAgY29uc3QgcG9pbnRlclkgPSBldi5jZW50ZXIueTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ25vbmUnKTtcbiAgICBpZiAocG9pbnRlclkgPiAwICYmIHBvaW50ZXJZIDwgdGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkpIHtcbiAgICAgIGlmIChldi5hZGRpdGlvbmFsRXZlbnQgPT09ICdwYW51cCcgfHwgZXYuYWRkaXRpb25hbEV2ZW50ID09PSAncGFuZG93bicpIHtcbiAgICAgICAgY29uc3QgbmV3VG9wID0gdGhpcy5fc3RhcnRQb3NpdGlvblRvcCArIGV2LmRlbHRhWTtcbiAgICAgICAgaWYgKG5ld1RvcCA+PSB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWShuZXdUb3AgKyAncHgnKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdUb3AgPCB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1RvcCA+IHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5taW5pbXVtSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLm1pbmltdW1IZWlnaHQpICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmFuc2xhdGVZKHZhbHVlKSB7XG4gICAgdGhpcy5fZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgdmFsdWUgKyAnKScpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuVG9wO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXBkYXRlQ29udGVudCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgZG9jaygpIHtcbiAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuRG9ja2VkO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXBkYXRlQ29udGVudCh0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUmVuZGVyZXIyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtdG9vbGJhci1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoYmFyQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3NtYWxsID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gc21hbGwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzk1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdzbWFsbCcsIHN0eWxlKHsgd2lkdGg6ICc5MnB4JyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICBhbmltYXRlKCc4NW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzY1bXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCd0aXRsZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yMCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHNlYXJjaGluZyA9IGZhbHNlO1xuICB0aXRsZVZpc2libGUgPSB0cnVlO1xuICBjbG9zZUJ1dHRvblZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc21hbGwgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGZpdklucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHN0YXRlOiAnc21hbGwnIHwgJ25vcm1hbCcgPSAnbm9ybWFsJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuc21hbGwgPyAnc21hbGwnIDogJ25vcm1hbCc7XG4gIH1cblxuICBzaHJpbmsoKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzbWFsbCc7XG4gIH1cbiAgZ3JvdygpIHtcbiAgICB0aGlzLnN0YXRlID0gJ25vcm1hbCc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ29uIGNoYW5nZXMnLCBjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlcy5zbWFsbC5wcmV2aW91c1ZhbHVlID09PSB0cnVlICYmIGNoYW5nZXMuc21hbGwuY3VycmVudFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zbWFsbC5wcmV2aW91c1ZhbHVlID09PSBmYWxzZSAmJiBjaGFuZ2VzLnNtYWxsLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzbWFsbCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgb3BlblNlYXJjaGJhcigpIHtcbiAgICBpZiAodGhpcy5zbWFsbCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vcGVuKCk7XG4gIH1cblxuXG5cbiAgc2VhcmNoQmFyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoYmFyU3RhdGUnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ3NtYWxsJykge1xuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3NtYWxsJyAmJiBldmVudC50b1N0YXRlID09PSAnbm9ybWFsJykge1xuICAgICAgdGhpcy5fb3BlbigpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbigpIHtcbiAgICB0aGlzLnNlYXJjaGluZyA9IHRydWU7XG4gICAgdGhpcy50aXRsZVZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW4uZW1pdCgpO1xuICB9XG5cbiAgY2xvc2VTZWFyY2hiYXIoKSB7XG4gICAgaWYgKHRoaXMuc21hbGwpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc21hbGwnO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZml2Q2xvc2UuZW1pdCgpO1xuXG4gIH1cblxuXG4gIHNlYXJjaEFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJyMjIycsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b25WaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJyMjIycsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2VhY2hiYXJBbmltRG9uZShldmVudCwgaW5wdXQpIHtcbiAgICBjb25zb2xlLmxvZygnISEhJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy50aXRsZVZpc2libGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcblxuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmxvYWRpbmcpO1xuICBwdWJsaWMgY29tcGxldGVDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5pc0NvbXBsZXRlKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IHNlcnZpY2UgY29tcGxldGUnKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxldGVDaGFuZ2UubmV4dCh0aGlzLmlzQ29tcGxldGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIEFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vbG9hZGluZy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGltZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRpbWVJbnRlcnZhbCwgcGx1Y2ssIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3Byb2dyZXNzQW5pbUxpbmVhcicsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICBhbmltYXRlKCc2NW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnLTUlJywgd2lkdGg6ICc1JScgfSksXG4gICAgICAgIGFuaW1hdGUoJzg1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMCUnLCB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgXSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBnbG9iYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICBwcm9ncmVzcyA9IDA7XG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBmaXZEb25lU2hyaW5raW5nOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGluZWFyJykgbGluZWFyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnN1YnNjcmliZShpc0NvbXBsZXRlID0+IHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ29tcGxldGUpO1xuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQoaXNDb21wbGV0ZSk7XG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnVubG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIGlmIChwcm9ncmVzcyA8IDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zb2xlLmxvZygnc2V0IHByb2dyZXNzJywgcHJvZ3Jlc3MpO1xuXG4gIH1cblxuICBpbmNyZW1lbnRCeShwcm9ncmVzcykge1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyB0aGlzLnByb2dyZXNzKTtcbiAgfVxuXG4gIGRlY3JlbWVudEJ5KHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZXRQcm9ncmVzcyhwcm9ncmVzcyArIHRoaXMucHJvZ3Jlc3MpO1xuICB9XG5cbiAgZmlsbEluKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICBjb25zdCBteUFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICBzdHlsZSh7IHdpZHRoOiB0aGlzLnByb2dyZXNzIH0pLFxuICAgICAgYW5pbWF0ZShtcywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIGNvbnN0IHQgPSB0aW1lcigwLCBtcyAvICgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgIHJldHVybiB0LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgfSk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNocmlua0luKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgIGNvbnN0IG15QW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgd2lkdGg6IGAke3RoaXMucHJvZ3Jlc3N9JWAgfSksXG4gICAgICBhbmltYXRlKG1zLCBzdHlsZSh7IHdpZHRoOiAwIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCB0ID0gdGltZXIoMCwgbXMgLyAoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzLS07XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHByb2dyZXNzJywgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkRvbmVTaHJpbmtpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmctcHJvZ3Jlc3MtYmFyL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgQElucHV0KCkgY29sb3IgPSAnbGlnaHQnO1xuICBASW5wdXQoKSBleHBhbmQgPSAnYmxvY2snO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0J1dHRvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxMb2FkaW5nQnV0dG9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0J1dHRvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZml2UmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZml2QnV0dG9uQ2xpY2suZW1pdCh0aGlzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAncHJvdHJhY3Rvcic7XG5pbXBvcnQgeyBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vLi4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICB9KVxuICAgICAgKV1cbiAgICApLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2hpbnRBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMTJweCkgdHJhbnNsYXRlWCgtNTAlKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB3aWR0aDogJzExMnB4Jywgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMTJweCkgdHJhbnNsYXRlWCgtNTAlKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyB3aWR0aDogJzQwcHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDExMnB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSlcbiAgICAgIF0pLFxuICAgIF1cbiAgICApLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaGludFRleHQgPSAnbmV3IHBvc3RzJztcbiAgQElucHV0KCkgbWF4UHVsbEhlaWdodCA9IDE2ODtcbiAgQElucHV0KCkgbWluUHVsbEhlaWdodCA9IDExMjtcbiAgQE91dHB1dCgpIGZpdlByb2dyZXNzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0NvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50O1xuICBoaW50VmlzaWJsZSA9IGZhbHNlO1xuICBjdXJyZW50UHJvZ3Jlc3MgPSAwO1xuXG4gIHJlZnJlc2hpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uVG9Qcm9ncmVzcygxMTIgLyAxNjgpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgIHRoaXMuc3Bpbm5lci5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbGxBbmltRG9uZScpO1xuICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gIH1cblxuXG4gIHNob3dIaW50KCkge1xuICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgb25IaW50Q2xpY2tlZCgpIHtcbiAgICBjb25zb2xlLmxvZygnb24gaGludCBjbGlja2VkJyk7XG4gICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwb3N0SGludChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSAmJiBldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKDExMiAvIDE2OCk7XG4gICAgICB0aGlzLnNwaW5uZXIubG9hZCgpO1xuICAgICAgdGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFB1bGxBbmltYXRpb25Qcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcblxuICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuXG4gICAgICAgIHNldFN0eWxlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgkezE2OCAqIHByb2dyZXNzfXB4KSByb3RhdGVaKCR7MzYwICogcHJvZ3Jlc3N9ZGVnKWApO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUFuaW1hdGlvblRvUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dGhpcy5jdXJyZW50UHJvZ3Jlc3MgKiAxNjh9cHgpIHJvdGF0ZVooJHszNjAgKiB0aGlzLmN1cnJlbnRQcm9ncmVzc31kZWcpYCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnODVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7cHJvZ3Jlc3MgKiAxNjh9cHgpIHJvdGF0ZVooJHszNjAgKiBwcm9ncmVzc31kZWcpYCB9KSlcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFB1bGxBbmltYXRpb25Qcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZml2UHVsbChwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHByb2dyZXNzICogMTAwICogdGhpcy5tYXhQdWxsSGVpZ2h0IC8gdGhpcy5taW5QdWxsSGVpZ2h0KSk7XG4gICAgdGhpcy5zcGlubmVyLnNldFZhbHVlKHZhbHVlICogMC44NCk7XG4gIH1cblxuICBvblJlZnJlc2goKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5zcGlubmVyLmxvYWQoKTtcbiAgfVxuXG4gIGZpdkNhbmNlbCgpIHtcbiAgICB0aGlzLm1vdmVCYWNrKCk7XG4gIH1cblxuICBhZnRlclNwaW5uZXJIaWRlKCkge1xuICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKDApO1xuICAgIHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3Bpbm5lci5yZXNldCgpO1xuICB9XG5cbiAgbW92ZUJhY2soKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3RoaXMuY3VycmVudFByb2dyZXNzICogMTY4fXB4KSByb3RhdGVaKCR7MzYwICogdGhpcy5jdXJyZW50UHJvZ3Jlc3N9ZGVnKWAgfSksXG4gICAgICBhbmltYXRlKCcxNDVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCknIH0pKVxuICAgIF0pO1xuXG4gICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MoMCk7XG4gICAgICB0aGlzLnNwaW5uZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICB9XG5cbiAgb25TcGlubmVyUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMucmVuZGVyZXIuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICBzZXRTdHlsZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHsxNjggKiB0aGlzLmN1cnJlbnRQcm9ncmVzc31weCkgcm90YXRlWigkezM2MCAqIHByb2dyZXNzIC8gMjAwfWRlZylgKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctZmFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctZmFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1mYWIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgIF0pXG4gIF0pLFxuICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgXSlcbiAgXSksXG4gIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgXSksXG4gICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gIF0pLFxuICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICBzdHlsZSh7XG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICB9KSxcbiAgICAgIGFuaW1hdGUoJzE0MDBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgJ29wYWNpdHknOiAwXG4gICAgfSlcbiAgICApXVxuICApXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRmFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB2ZXJ0aWNhbD86ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJztcbiAgQElucHV0KCkgaG9yaXpvbnRhbD86ICdjZW50ZXInIHwgJ3N0YXJ0JyB8ICdlbmQnO1xuICBASW5wdXQoKSBlZGdlOiBib29sZWFuO1xuICBASW5wdXQoKSBzbG90OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25Db2xvciA9ICcjMDAwJztcbiAgQElucHV0KCkgY2hlY2ttYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IExvYWRpbmdTcGlubmVyQ29tcG9uZW50O1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgaWNvblN0YXRlID0gJ25vcm1hbCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdmVydGljYWxDbGFzcyA9ICEhdGhpcy52ZXJ0aWNhbCA/IGBmYWItdmVydGljYWwtJHt0aGlzLnZlcnRpY2FsfWAgOiAnJztcbiAgICBjb25zdCBob3Jpem9udGFsQ2xhc3MgPSAhIXRoaXMuaG9yaXpvbnRhbCA/IGBmYWItaG9yaXpvbnRhbC0ke3RoaXMuaG9yaXpvbnRhbH1gIDogJyc7XG4gICAgY29uc3QgZWRnZUNsYXNzID0gdGhpcy5lZGdlID8gYGZhYi1lZGdlLWAgOiAnJztcblxuICAgIHJldHVybiBgJHt2ZXJ0aWNhbENsYXNzfSAke2hvcml6b250YWxDbGFzc30gJHtlZGdlQ2xhc3N9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIGlmICh0aGlzLmljb24gIT09ICdtZC1jaGVja21hcmsnKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgIH1cbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5jb21wbGV0ZUluKDUwMCk7XG4gICAgfVxuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHBvc3RDb21wbGV0ZSgpIHtcbiAgICB0aGlzLnVubG9hZCgpO1xuICAgIHRoaXMuZml2Q29tcGxldGUuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHJvdGF0ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGByb3RhdGVaKCR7cHJvZ3Jlc3MgLyAyMDAgKiAzNjB9ZGVnKWApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1hcHAtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhcHBCYXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknLCBvcGFjaXR5OiAwLjQgfSksXG4gICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2Utb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgb3BhY2l0eTogMC40IH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdkZWxheUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMC40IH0pLFxuICAgICAgICBhbmltYXRlKCcxODBtcyAxNzVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzE4MG1zIDE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6IDAuNCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZnVsbEJhckFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMC40IH0pLFxuICAgICAgICBhbmltYXRlKCc4MG1zIDMzNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnODBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignbGVmdCA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAwLjQgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3JpZ2h0ID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6IDAuNCB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignbWlkZGxlID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZVgoLTUwJSknLCBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyBlYXNlLWluJywgc3R5bGUoeyBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAnc2NhbGUoMCkgdHJhbnNsYXRlWCgtNzJweCknLCBvcGFjaXR5OiAwLjAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gbGVmdCcsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnMjRweCcsIHRyYW5zZm9ybTogJ3NjYWxlKDApJywgb3BhY2l0eTogMC44IH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyA0MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMjRweCcsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiByaWdodCcsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODBweCknLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6IDAuOCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgNDBtcyAgZWFzZS1vdXQnLCBzdHlsZSh7IGxlZnQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBtaWRkbGUnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMCknLCBvcGFjaXR5OiAwLjggfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIDQwbXMgIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxKScsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdsZWZ0Jywgc3R5bGUoeyBsZWZ0OiAnMjRweCcsIHRyYW5zZm9ybTogJ3Vuc2V0JyB9KSksXG4gICAgICBzdGF0ZSgncmlnaHQnLCBzdHlsZSh7IGxlZnQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsIHRyYW5zZm9ybTogJ3Vuc2V0JyB9KSksXG4gICAgICBzdGF0ZSgnbWlkZGxlJywgc3R5bGUoeyBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmFiU2Nyb2xsQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3Njcm9sbCA9PiBub3JtYWwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyB0b3A6ICctNTAlJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHNjcm9sbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgdG9wOiAnLTE2cHgnIH0pKVxuICAgICAgXSksXG5cbiAgICAgIHN0YXRlKCdzY3JvbGwnLCBzdHlsZSh7IHRvcDogJy0xNnB4JyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyB0b3A6ICctNTAlJyB9KSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignY3V0b3V0QW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ2xlZnQgPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcyMjBtcyAxMG1zIGVhc2UnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3JpZ2h0ID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgMTAwbXMgZWFzZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignbWlkZGxlID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGVZKDEpIHRyYW5zbGF0ZVgoLTUwJSknLCBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcyMjBtcyAxMDBtcyBlYXNlJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZVkoMCkgdHJhbnNsYXRlWCgtNTAlKScsIG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gbGVmdCcsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnMjRweCcsIHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIG9wYWNpdHk6IDAuNCwgJ2JveC1zaGFkb3cnOiAnbm9uZScgfSksXG4gICAgICAgIGFuaW1hdGUoJzIyMG1zIGVhc2UnLCBzdHlsZSh7XG4gICAgICAgICAgbGVmdDogJzE2cHgnLCB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBvcGFjaXR5OiAxLCAnYm94LXNoYWRvdyc6ICdpbnNldCAwcHggLTRweCA2cHggLTRweCAjMzMzJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiByaWdodCcsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODhweCknLCB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBvcGFjaXR5OiAwLjQsICdib3gtc2hhZG93JzogJ25vbmUnIH0pLFxuICAgICAgICBhbmltYXRlKCcyMjBtcyBlYXNlJyxcbiAgICAgICAgICBzdHlsZSh7IGxlZnQ6ICdjYWxjKDEwMCUgLSA4OHB4KScsIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIG9wYWNpdHk6IDEsICdib3gtc2hhZG93JzogJ2luc2V0IDBweCAtNHB4IDZweCAtNHB4ICMzMzMnIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IG1pZGRsZScsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMCknLCBvcGFjaXR5OiAwLjQsICdib3gtc2hhZG93JzogJ25vbmUnIH0pLFxuICAgICAgICBhbmltYXRlKCcyMjBtcyBlYXNlJyxcbiAgICAgICAgICBzdHlsZSh7IGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKScsIG9wYWNpdHk6IDEsICdib3gtc2hhZG93JzogJ2luc2V0IDBweCAtNHB4IDZweCAtNHB4ICMzMzMnIH0pKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnbGVmdCcsIHN0eWxlKHsgbGVmdDogJzE2cHgnLCB0cmFuc2Zvcm06ICd1bnNldCcgfSkpLFxuICAgICAgc3RhdGUoJ3JpZ2h0Jywgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODhweCknLCB0cmFuc2Zvcm06ICd1bnNldCcgfSkpLFxuICAgICAgc3RhdGUoJ21pZGRsZScsIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH0pKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBoaWRkZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmFiTGVmdCA9IHRydWU7XG4gIEBJbnB1dCgpIGZhYlJpZ2h0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZhYlZpc2libGUgPSB0cnVlO1xuICBASW5wdXQoKSBoaWRlT25TY3JvbGwgPSB0cnVlO1xuICBASW5wdXQoKSBmYWJJY29uID0gJ21kLWFkZCc7XG4gIGN1cnJlbnREZWx0YVkgPSAwO1xuICBAVmlld0NoaWxkKCdzaGFwZScpIHRvb2xiYXI6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGZpdkZhYkNsaWNrOiBFdmVudEVtaXR0ZXI8QXBwQmFyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkZhYkhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2RmFiU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZBcHBCYXJTaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkFwcEJhckhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgZnJvbUV2ZW50KGNvbnRlbnQsICdpb25TY3JvbGwnKS5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5pb25TY3JvbGwoZXZlbnQpKTtcbiAgICBmcm9tRXZlbnQoY29udGVudCwgJ2lvblNjcm9sbFN0YXJ0Jykuc3Vic2NyaWJlKGV2ZW50ID0+IGNvbnNvbGUubG9nKGV2ZW50KSk7XG4gICAgZnJvbUV2ZW50KGNvbnRlbnQsICdpb25TY3JvbGxFbmQnKS5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5pb25TY3JvbGxFbmQoZXZlbnQpKTtcbiAgfVxuXG4gIGlvblNjcm9sbChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdzY3JvbGwnLCBldmVudCwgdGhpcy5oaWRlT25TY3JvbGwpO1xuICAgIGlmICghdGhpcy5oaWRlT25TY3JvbGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcjIyMjIycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZGV0YWlsLmRlbHRhWSkge1xuICAgICAgdGhpcy5jdXJyZW50RGVsdGFZID0gZXZlbnQuZGV0YWlsLmRlbHRhWTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudERlbHRhWSwgdGhpcy5jdXJyZW50RGVsdGFZID4gMCk7XG4gICAgfVxuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5jdXJyZW50RGVsdGFZID4gMDtcbiAgfVxuXG4gIG9uRmFiQ2xpY2soKSB7XG4gICAgdGhpcy5maXZGYWJDbGljay5lbWl0KHRoaXMpO1xuICB9XG5cbiAgaW9uU2Nyb2xsU3RhcnQoZXZlbnQpIHtcblxuICB9XG5cbiAgaW9uU2Nyb2xsRW5kKGV2ZW50KSB7XG5cbiAgfVxuXG4gIGhpZGVGYWIoKTogUHJvbWlzZTxBcHBCYXJDb21wb25lbnQ+IHtcbiAgICB0aGlzLmZhYlZpc2libGUgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXBwQmFyQ29tcG9uZW50PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZml2RmFiSGlkZS5waXBlKFxuICAgICAgICB0YXAoKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKSksXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGlkZSBmYWIgZG9uZScsIHRoaXMpO1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93RmFiKCk6IFByb21pc2U8QXBwQmFyQ29tcG9uZW50PiB7XG4gICAgdGhpcy5mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXBwQmFyQ29tcG9uZW50PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZml2RmFiU2hvdy5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlQmFyKCk6IFByb21pc2U8QXBwQmFyQ29tcG9uZW50PiB7XG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcHBCYXJDb21wb25lbnQ+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5maXZBcHBCYXJIaWRlLnBpcGUoXG4gICAgICAgIHRhcCgocmVzID0+IGNvbnNvbGUubG9nKHJlcykpKSxcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudC50b1N0YXRlID09PSAndm9pZCcpLFxuICAgICAgICBmaXJzdCgpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIGZhYiBkb25lJywgdGhpcyk7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dCYXIoKTogUHJvbWlzZTxBcHBCYXJDb21wb25lbnQ+IHtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcHBCYXJDb21wb25lbnQ+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5maXZBcHBCYXJTaG93LnBpcGUoXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpLFxuICAgICAgICBmaXJzdCgpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uRmFiQW5pbVN0YXJ0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG5cbiAgb25GYWJBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmZyb21TdGF0ZSArICcgdG8gJyArIGV2ZW50LnRvU3RhdGUpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5maXZGYWJTaG93LmVtaXQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdkZhYkhpZGUuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgdHJhbnNpdGlvbkxlZnQoKSB7XG4gICAgdGhpcy5mYWJSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuZmFiTGVmdCA9IHRydWU7XG4gICAgcmV0dXJuIHRpbWVyKDQyNSkudG9Qcm9taXNlKCk7XG5cbiAgfVxuXG4gIHRyYW5zaXRpb25SaWdodCgpIHtcbiAgICB0aGlzLmZhYlJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhYkxlZnQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGltZXIoNDI1KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHRyYW5zaXRpb25NaWRkbGUoKSB7XG4gICAgdGhpcy5mYWJSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuZmFiTGVmdCA9IGZhbHNlO1xuICAgIHJldHVybiB0aW1lcig0MjUpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgY3V0T3V0VHJhbnNpdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIG9uQXBwQmFyQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5mcm9tU3RhdGUgKyAnIHRvICcgKyBldmVudC50b1N0YXRlKTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuZml2QXBwQmFyU2hvdy5lbWl0KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXZBcHBCYXJIaWRlLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBQbGF0Zm9ybXMgfSBmcm9tICdAaW9uaWMvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmaXZJZl0nXG59KVxuZXhwb3J0IGNsYXNzIElmUGxhdGZvcm1EaXJlY3RpdmUge1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmaXZJZihwbGF0Zm9ybXM6IFBsYXRmb3Jtc1tdKSB7XG5cblxuICAgIGxldCBzaG93ID0gdHJ1ZTtcbiAgICBwbGF0Zm9ybXMuZm9yRWFjaChwID0+IHtcbiAgICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pcyhwKSkge1xuICAgICAgICBzaG93ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnaWYgcGxhdGZvcm1zJywgcGxhdGZvcm1zLCBzaG93KTtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdkNlbnRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIENlbnRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHZlcnRpY2FsID0gdHJ1ZTtcbiAgaG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBteVN0eWxlKCk6IFNhZmVTdHlsZSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIGNvbnN0IHN0eWxlID0gYHBvc2l0aW9uOiBhYnNvbHV0ZTsgJHt0aGlzLnZlcnRpY2FsICYmIHRoaXMuaG9yaXpvbnRhbCA/ICd0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTsnIDogdGhpcy52ZXJ0aWNhbCA/ICd0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOycgOiAnbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7J31gO1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGZpdkNlbnRlcihjZW50ZXI6IHsgdmVydGljYWw6IGJvb2xlYW4sIGhvcml6b250YWw6IGJvb2xlYW4gfSkge1xuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgIHRoaXMudmVydGljYWwgPSBjZW50ZXIudmVydGljYWw7XG4gICAgICB0aGlzLmhvcml6b250YWwgPSBjZW50ZXIuaG9yaXpvbnRhbDtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdhcHBseSBwb3NpdGlvbiByZWxhdGl2ZSB0byBwYXJlbnQgaGVyZScpO1xuICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2UGVybWlzc2lvbnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc0RpcmVjdGl2ZSB7XG5cbiAgYWxsb3dlZFBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuICB1UGVybWlzc2lvbnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yIFBlcm1pc3Npb25zZGlyZWN0aXZlJyk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgZml2UGVybWlzc2lvbnNVc2VyUGVybWlzc2lvbnModXNlclBlcm1pc3Npb25zOiBzdHJpbmdbXSkge1xuICAgIGNvbnNvbGUubG9nKCd1c2VyUGVybWlzc2lvbnMnLCB1c2VyUGVybWlzc2lvbnMpO1xuICAgIHRoaXMudVBlcm1pc3Npb25zID0gdXNlclBlcm1pc3Npb25zIHx8IFtdO1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZml2UGVybWlzc2lvbnMoYWxsb3dlZDogc3RyaW5nW10pIHtcbiAgICBjb25zb2xlLmxvZygnZml2UGVybWlzc2lvbnMnLCBhbGxvd2VkKTtcbiAgICB0aGlzLmFsbG93ZWRQZXJtaXNzaW9ucyA9IGFsbG93ZWQgfHwgW107XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBjaGVja1Blcm1pc3Npb24oKTogYm9vbGVhbiB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICB0aGlzLnVQZXJtaXNzaW9ucy5mb3JFYWNoKHJvbGUgPT4ge1xuICAgICAgaWYgKHRoaXMuYWxsb3dlZFBlcm1pc3Npb25zLmZpbmQoYSA9PiBhLnRvVXBwZXJDYXNlKCkgPT09IHJvbGUudG9VcHBlckNhc2UoKSkpIHtcbiAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2hhcyByb2xlIHBlcm1pc3Npb24nLCB0aGlzLnVQZXJtaXNzaW9ucywgdGhpcy5hbGxvd2VkUGVybWlzc2lvbnMpO1xuICAgIHJldHVybiBzaG93O1xuICB9XG5cbiAgdXBkYXRlVmlldygpIHtcbiAgICBpZiAodGhpcy5jaGVja1Blcm1pc3Npb24oKSkge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0QmluZGluZywgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2Zpdi1yaXBwbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmlwcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmlwcGxlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJpcHBsZUNvbXBvbmVudCB7XG5cbiAgcHJpdmF0ZSByaXBwbGVBbmltYXRpb25FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgcm91bmQgPSBmYWxzZTtcblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKSBwb3NpdGlvbjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5yaXBwbGUoZXZlbnQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3ByZXNzJywgWyckZXZlbnQnXSlcbiAgUHJlc3NFdmVudChldmVudCkge1xuICAgIHRoaXMucmlwcGxlKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mucm91bmQnKSBnZXQgaXNSb3VuZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnJvdW5kO1xuICB9XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICAgIGNvbnNvbGUubG9nKCdyaXBwbGUgY29uc3RydWN0b3InKTtcbiAgICB0aGlzLnJpcHBsZUFuaW1hdGlvbkV2ZW50LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNzUwKVxuICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKSwgJ3Nob3cnKTtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmlwcGxlV3JhcHBlcicpLCAnc2hvdycpO1xuICAgICAgfSk7XG4gIH1cblxuICByaXBwbGUoZXZlbnQpIHtcbiAgICBjb25zdCByaXBwbGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJpcHBsZScpO1xuICAgIGlmICghcmlwcGxlKSB7XG4gICAgICB0aGlzLnJpcHBsZUZhY3RvcnkoKTtcbiAgICB9XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb24oeyBwYWdlWDogZXZlbnQucGFnZVgsIHBhZ2VZOiBldmVudC5wYWdlWSB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmlwcGxlRmFjdG9yeSgpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCkgKyAncHgnO1xuICAgIGNvbnN0IHJpcHBsZVdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocmlwcGxlV3JhcHBlciwgJ3JpcHBsZVdyYXBwZXInKTtcbiAgICBjb25zdCByaXBwbGUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZSwgJ3JpcHBsZScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmlwcGxlLCAnaGVpZ2h0JywgcmFkaXVzKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ3dpZHRoJywgcmFkaXVzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHJpcHBsZVdyYXBwZXIsIHJpcHBsZSk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0YXJnZXQsIHJpcHBsZVdyYXBwZXIpO1xuICB9XG5cbiAgcmlwcGxlQW5pbWF0aW9uKHsgcGFnZVgsIHBhZ2VZIH0pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCByaXBwbGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnJpcHBsZScpO1xuICAgIGNvbnN0IHJpcHBsZVdyYXBwZXIgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnJpcHBsZVdyYXBwZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHJpcHBsZVdyYXBwZXIsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhyaXBwbGUsICdzaG93Jyk7XG4gICAgY29uc3QgbGVmdCA9IHBhZ2VYIC0gcmVjdC5sZWZ0IC0gcmlwcGxlLm9mZnNldFdpZHRoIC8gMiAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArICdweCc7XG4gICAgY29uc3QgdG9wID0gcGFnZVkgLSByZWN0LnRvcCAtIHJpcHBsZS5vZmZzZXRIZWlnaHQgLyAyIC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyAncHgnO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmlwcGxlLCAndG9wJywgdG9wKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ2xlZnQnLCBsZWZ0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZVdyYXBwZXIsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyaXBwbGUsICdzaG93Jyk7XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb25FdmVudC5lbWl0KCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluVmlld3BvcnRFdmVudCB7XG4gIHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gIHZhbHVlOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2Vmlld3BvcnRdJyxcbiAgZXhwb3J0QXM6ICd2aWV3cG9ydCdcbn0pXG5leHBvcnQgY2xhc3MgVmlld3BvcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQElucHV0KCkgb2Zmc2V0ID0gMDtcbiAgQE91dHB1dCgpIGZpdkFwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8SW5WaWV3cG9ydEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZml2RGlzYXBwZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxJblZpZXdwb3J0RXZlbnQ+KCk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdmlzaWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZW50OiBDb250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29udGVudC5zY3JvbGxFdmVudHMgPSB0cnVlO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1jb250ZW50JyksICdpb25TY3JvbGwnKVxuICAgICAgLnBpcGUobWVyZ2UoZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpKSwgZGVib3VuY2VUaW1lKDUwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGVjaygpKTtcblxuICAgIGNvbnNvbGUubG9nKCd2aXNpYmxlJywgdGhpcy52aXNpYmxlLCBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMub2Zmc2V0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKCkge1xuICAgIGNvbnN0IGV2ZW50OiBJblZpZXdwb3J0RXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgdmFsdWU6XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpICYmXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PVxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLm9mZnNldFxuICAgIH07XG5cbiAgICBpZiAoZXZlbnQudmFsdWUgPT09IHRydWUpIHtcblxuICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5maXZBcHBlYXIuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5maXZEaXNhcHBlYXIuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2libGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2tpcFdoaWxlLCB0YWtlVW50aWwsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2UHVsbF0nXG59KVxuZXhwb3J0IGNsYXNzIFB1bGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1pblB1bGxIZWlnaHQgPSAxMTI7XG4gIEBJbnB1dCgpIG1heFB1bGxIZWlnaHQgPSAxNjg7XG4gIEBJbnB1dCgpIGVuYWJsZWQgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaXZDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZpdlB1bGwgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBzY3JvbGxZOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIEBIb3N0KCkgcHJpdmF0ZSBjb250ZW50OiBDb250ZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuY29udGVudC5zY3JvbGxFdmVudHMgPSB0cnVlO1xuICAgIHRoaXMuY29udGVudC5nZXRTY3JvbGxFbGVtZW50KCkudGhlbihzID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsWSA9IHM7IC8vIG5lZWRlZCBmb3Igc2Nyb2xsVG9wXG4gICAgICB0aGlzLnNldHVwUGFuTGlzdGVuZXIoKTtcbiAgICB9KTtcblxuXG4gIH1cblxuICBwcml2YXRlIHNldHVwUGFuTGlzdGVuZXIoKSB7XG4gICAgY29uc3QgdG91Y2hzdGFydCQgPSBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3VjaHN0YXJ0Jyk7XG4gICAgY29uc3QgdG91Y2htb3ZlJCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNobW92ZScpO1xuICAgIGNvbnN0IHRvdWNoZW5kJCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNoZW5kJyk7XG4gICAgY29uc3QgdG91Y2hjYW5jZWwkID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2hjYW5jZWwnKTtcbiAgICBjb25zdCBlbmQkID0gbWVyZ2UodG91Y2hlbmQkLCB0b3VjaGNhbmNlbCQpO1xuXG4gICAgY29uc3QgZHJhZ0F0VG9wID0gdG91Y2hzdGFydCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZSA9PiB0aGlzLnNjcm9sbFkuc2Nyb2xsVG9wID09PSAwICYmIHRoaXMuZW5hYmxlZClcbiAgICAgICk7XG5cbiAgICBjb25zdCBkcmFnVG9wRG93biA9IGRyYWdBdFRvcFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhcnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHN0YXJ0LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgcmV0dXJuIHRvdWNobW92ZSRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKG1vdmU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZID0gbW92ZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBzdGFydEV2ZW50OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgIG1vdmVFdmVudDogbW92ZSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICAgICAgICAgICAgY3VycmVudFk6IGN1cnJlbnRZLFxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50WSAtIHN0YXJ0WVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBza2lwV2hpbGUoZHJhZyA9PiBkcmFnLm9mZnNldCA8IDApLFxuICAgICAgICAgICAgICB0YWtlVW50aWwoZW5kJClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKTtcblxuXG4gICAgZHJhZ1RvcERvd24uZm9yRWFjaChkcmFncyA9PiB7XG4gICAgICBkcmFncy5mb3JFYWNoKGRyYWcgPT4ge1xuICAgICAgICBkcmFnLm1vdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBkcmFnLm9mZnNldCAvIDI7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+IHRoaXMubWF4UHVsbEhlaWdodCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2Zmc2V0IDw9IHRoaXMubWF4UHVsbEhlaWdodCkge1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXZQdWxsLmVtaXQob2Zmc2V0IC8gdGhpcy5tYXhQdWxsSGVpZ2h0KTtcbiAgICAgIH0pO1xuXG4gICAgICBkcmFnc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBsYXN0KClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGRyYWcgPT4ge1xuICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGRyYWcub2Zmc2V0IC8gMjtcbiAgICAgICAgICBjb25zdCByZWZyZXNoID0gb2Zmc2V0ID49IHRoaXMubWluUHVsbEhlaWdodDtcbiAgICAgICAgICBpZiAocmVmcmVzaCkge1xuICAgICAgICAgICAgdGhpcy5maXZSZWZyZXNoLmVtaXQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXZDYW5jZWwuZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdGF0ZSwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKSByb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSByb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzY2FsZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IG5vcm1hbCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gc2NhbGUnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2NhbGUgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3NjYWxlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9uYW1lOiBzdHJpbmc7XG4gIF9pbmRpY2F0b3JWYWx1ZSA9IC0xO1xuICB0ZW1wVmFsdWU6IG51bWJlcjtcbiAgc3RhdGU6ICdub3JtYWwnIHwgJ3JvdGF0ZScgPSAnbm9ybWFsJztcbiAgdGVtcDogc3RyaW5nO1xuXG4gIGluZGljYXRvclN0YXRlOiAnbm9ybWFsJyB8ICdzY2FsZScgPSAnc2NhbGUnO1xuICBpbmRpY2F0b3JWYWx1ZVN0YXRlOiAnbm9ybWFsJyB8ICdzY2FsZScgPSAnc2NhbGUnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ3NldCBuYW1lJyk7XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgaW5kaWNhdG9yVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kaWNhdG9yVmFsdWU7XG4gIH1cbiAgc2V0IGluZGljYXRvclZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUluZGljYXRvcih2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdHJhbnNmb3JtKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMudGVtcCA9IG5hbWU7XG4gICAgdGhpcy5zdGF0ZSA9ICdyb3RhdGUnO1xuICB9XG5cbiAgdHJhbnNmb3JtSW5kaWNhdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZygndHJhbnNmb3JtIGluZGljYXRvcicsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IC0xKSB7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbmRpY2F0b3JTdGF0ZSA9ICdzY2FsZSc7XG4gICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnc2NhbGUnO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHRoaXMudGVtcFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmluZGljYXRvclN0YXRlID0gJ25vcm1hbCc7XG4gICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnc2NhbGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGljYXRvclN0YXRlID0gJ3NjYWxlJztcbiAgICAgIGlmICh0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPT09ICdzY2FsZScpIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ25vcm1hbCc7XG4gICAgICAgIHRoaXMuX2luZGljYXRvclZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlbXBWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnc2NhbGUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICByb3RhdGVBbmltRG9uZShldmVudCkge1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdyb3RhdGUnKSB7XG4gICAgICB0aGlzLl9uYW1lID0gdGhpcy50ZW1wO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgIH1cblxuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdyb3RhdGUnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBjb25zb2xlLmxvZygnaWNvbiB0cmFuc2l0aW9uIGRvbmUnKTtcbiAgICB9XG4gIH1cblxuICBpbmNyZW1lbnREb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2luY3JlbWVudCBkb25lJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdzY2FsZScpIHtcbiAgICAgIGlmICh0aGlzLnRlbXBWYWx1ZSA+IDApIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ25vcm1hbCc7XG4gICAgICAgIHRoaXMuX2luZGljYXRvclZhbHVlID0gdGhpcy50ZW1wVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHRoaXMudGVtcFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iLCJpbXBvcnQgeyBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3JvdXRlci1pdGVtL3JvdXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbGxhcHNhYmxlLW1lbnUvY29sbGFwc2FibGUtbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sbGFwc2FibGVNZW51QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEJvdHRvbVNoZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbGJhclNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctcHJvZ3Jlc3MtYmFyL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1jb250ZW50L2xvYWRpbmctY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0ZhYkNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1mYWIvbG9hZGluZy1mYWIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcEJhckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZlBsYXRmb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2lmLXBsYXRmb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZW50ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2VudGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wZXJtaXNzaW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmlwcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9yaXBwbGUvcmlwcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3cG9ydERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aWV3cG9ydC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHVsbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wdWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXItaG9yaXpvbnRhbC9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vaWNvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV4cGFuZGFibGVDb21wb25lbnQsXG4gICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgU3RlcHBlckNvbXBvbmVudCxcbiAgICBTdGVwQ29tcG9uZW50LFxuICAgIFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gICAgU3RlcENvbnRlbnRDb21wb25lbnQsXG4gICAgUm91dGVySXRlbUNvbXBvbmVudCxcbiAgICBDZW50ZXJEaXJlY3RpdmUsXG4gICAgQ29sbGFwc2FibGVNZW51QnV0dG9uQ29tcG9uZW50LFxuICAgIENvbGxhcHNhYmxlTWVudURpcmVjdGl2ZSxcbiAgICBCb3R0b21TaGVldENvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQsXG4gICAgVG9vbGJhclNlYXJjaENvbXBvbmVudCxcbiAgICBMb2FkaW5nQnV0dG9uQ29tcG9uZW50LFxuICAgIExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBMb2FkaW5nQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nRmFiQ29tcG9uZW50LFxuICAgIEFwcEJhckNvbXBvbmVudCxcbiAgICBJZlBsYXRmb3JtRGlyZWN0aXZlLFxuICAgIFBlcm1pc3Npb25zRGlyZWN0aXZlLFxuICAgIFJpcHBsZUNvbXBvbmVudCxcbiAgICBWaWV3cG9ydERpcmVjdGl2ZSxcbiAgICBQdWxsRGlyZWN0aXZlLFxuICAgIExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50LFxuICAgIEljb25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEV4cGFuZGFibGVDb21wb25lbnQsXG4gICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgU3RlcHBlckNvbXBvbmVudCxcbiAgICBTdGVwQ29tcG9uZW50LFxuICAgIFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gICAgU3RlcENvbnRlbnRDb21wb25lbnQsXG4gICAgUm91dGVySXRlbUNvbXBvbmVudCxcbiAgICBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUsXG4gICAgQ2VudGVyRGlyZWN0aXZlLFxuICAgIENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQsXG4gICAgVG9vbGJhclNlYXJjaENvbXBvbmVudCxcbiAgICBMb2FkaW5nQnV0dG9uQ29tcG9uZW50LFxuICAgIExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBMb2FkaW5nQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nRmFiQ29tcG9uZW50LFxuICAgIEFwcEJhckNvbXBvbmVudCxcbiAgICBJZlBsYXRmb3JtRGlyZWN0aXZlLFxuICAgIFBlcm1pc3Npb25zRGlyZWN0aXZlLFxuICAgIFJpcHBsZUNvbXBvbmVudCxcbiAgICBWaWV3cG9ydERpcmVjdGl2ZSxcbiAgICBQdWxsRGlyZWN0aXZlLFxuICAgIExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50LFxuICAgIEljb25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaXZldGhyZWVDb3JlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInN0YXRlIiwiSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCIsInN0eWxlIiwibWVyZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQzs7SUFpQ3BCLGlDQUFrRCxTQUFjLEVBQVMsV0FBdUIsRUFDdkYsUUFBbUMsT0FBeUIsRUFBUyxTQUF1QixFQUFVLFFBQW1CO1FBRGhGLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2RixXQUFNLEdBQU4sTUFBTTtRQUE2QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO3lCQWhCOUcsU0FBUzs0QkFDZCxFQUFFO3NCQUNSLENBQUM7MkJBR2MsSUFBSSxZQUFZLEVBQVU7MkJBQzFCLElBQUksWUFBWSxFQUEyQjtvQkFFbEIsZUFBZTs0QkFDeEMsRUFBRTtLQVF6QjtJQU5ELHNCQUEwQiwwQ0FBSzs7OztRQUEvQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxnRkFBZ0YsQ0FBQztTQUNyRzs7O09BQUE7Ozs7SUFN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

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1pzpmodl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1pzpmodl.entry.js",
		"common",
		6
	],
	"./1pzpmodl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1pzpmodl.sc.entry.js",
		"common",
		7
	],
	"./2jswtbop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2jswtbop.entry.js",
		8
	],
	"./2jswtbop.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2jswtbop.sc.entry.js",
		9
	],
	"./2tb9n2ap.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2tb9n2ap.entry.js",
		"common",
		10
	],
	"./2tb9n2ap.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2tb9n2ap.sc.entry.js",
		"common",
		11
	],
	"./4gbfyvzv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4gbfyvzv.entry.js",
		165,
		"common",
		12
	],
	"./4gbfyvzv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4gbfyvzv.sc.entry.js",
		165,
		"common",
		13
	],
	"./4rkkfyla.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4rkkfyla.entry.js",
		"common",
		14
	],
	"./4rkkfyla.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4rkkfyla.sc.entry.js",
		"common",
		15
	],
	"./4tbu6ang.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4tbu6ang.entry.js",
		165,
		"common",
		16
	],
	"./4tbu6ang.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4tbu6ang.sc.entry.js",
		165,
		"common",
		17
	],
	"./66owbfxb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/66owbfxb.entry.js",
		"common",
		18
	],
	"./66owbfxb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/66owbfxb.sc.entry.js",
		"common",
		19
	],
	"./7oweqjmw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7oweqjmw.entry.js",
		"common",
		20
	],
	"./7oweqjmw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7oweqjmw.sc.entry.js",
		"common",
		21
	],
	"./7zvak3av.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7zvak3av.entry.js",
		"common",
		22
	],
	"./7zvak3av.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7zvak3av.sc.entry.js",
		"common",
		23
	],
	"./abbqcyiq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/abbqcyiq.entry.js",
		165,
		"common",
		24
	],
	"./abbqcyiq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/abbqcyiq.sc.entry.js",
		165,
		"common",
		25
	],
	"./agpviox7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/agpviox7.entry.js",
		"common",
		26
	],
	"./agpviox7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/agpviox7.sc.entry.js",
		"common",
		27
	],
	"./amegv4d5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/amegv4d5.entry.js",
		"common",
		28
	],
	"./amegv4d5.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/amegv4d5.sc.entry.js",
		"common",
		29
	],
	"./anfqrtay.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/anfqrtay.entry.js",
		"common",
		30
	],
	"./anfqrtay.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/anfqrtay.sc.entry.js",
		"common",
		31
	],
	"./avaaiatb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/avaaiatb.entry.js",
		"common",
		32
	],
	"./avaaiatb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/avaaiatb.sc.entry.js",
		"common",
		33
	],
	"./aww4ac6s.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/aww4ac6s.entry.js",
		"common",
		34
	],
	"./aww4ac6s.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/aww4ac6s.sc.entry.js",
		"common",
		35
	],
	"./bo1l5nbw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bo1l5nbw.entry.js",
		"common",
		36
	],
	"./bo1l5nbw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bo1l5nbw.sc.entry.js",
		"common",
		37
	],
	"./c6noyomn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c6noyomn.entry.js",
		"common",
		38
	],
	"./c6noyomn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c6noyomn.sc.entry.js",
		"common",
		39
	],
	"./cgokvnwh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cgokvnwh.entry.js",
		"common",
		40
	],
	"./cgokvnwh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cgokvnwh.sc.entry.js",
		"common",
		41
	],
	"./ciqsj4dy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ciqsj4dy.entry.js",
		"common",
		42
	],
	"./ciqsj4dy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ciqsj4dy.sc.entry.js",
		"common",
		43
	],
	"./cwnj34kp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cwnj34kp.entry.js",
		"common",
		44
	],
	"./cwnj34kp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cwnj34kp.sc.entry.js",
		"common",
		45
	],
	"./d9zwne4w.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d9zwne4w.entry.js",
		"common",
		46
	],
	"./d9zwne4w.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d9zwne4w.sc.entry.js",
		"common",
		47
	],
	"./dqxouk28.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dqxouk28.entry.js",
		"common",
		48
	],
	"./dqxouk28.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dqxouk28.sc.entry.js",
		"common",
		49
	],
	"./e4opalas.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e4opalas.entry.js",
		"common",
		50
	],
	"./e4opalas.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e4opalas.sc.entry.js",
		"common",
		51
	],
	"./eftwlusu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/eftwlusu.entry.js",
		"common",
		52
	],
	"./eftwlusu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/eftwlusu.sc.entry.js",
		"common",
		53
	],
	"./fdxwbbw7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fdxwbbw7.entry.js",
		"common",
		54
	],
	"./fdxwbbw7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fdxwbbw7.sc.entry.js",
		"common",
		55
	],
	"./g9jybbru.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/g9jybbru.entry.js",
		"common",
		56
	],
	"./g9jybbru.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/g9jybbru.sc.entry.js",
		"common",
		57
	],
	"./hz9cqqbq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hz9cqqbq.entry.js",
		"common",
		58
	],
	"./hz9cqqbq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hz9cqqbq.sc.entry.js",
		"common",
		59
	],
	"./i65pyu1k.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/i65pyu1k.entry.js",
		165,
		"common",
		60
	],
	"./i65pyu1k.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/i65pyu1k.sc.entry.js",
		165,
		"common",
		61
	],
	"./ijltfkuh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ijltfkuh.entry.js",
		"common",
		62
	],
	"./ijltfkuh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ijltfkuh.sc.entry.js",
		"common",
		63
	],
	"./j66fx9bc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j66fx9bc.entry.js",
		64
	],
	"./j66fx9bc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j66fx9bc.sc.entry.js",
		65
	],
	"./j6o0sevc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j6o0sevc.entry.js",
		"common",
		66
	],
	"./j6o0sevc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j6o0sevc.sc.entry.js",
		"common",
		67
	],
	"./j8ajgnpj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j8ajgnpj.entry.js",
		"common",
		68
	],
	"./j8ajgnpj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j8ajgnpj.sc.entry.js",
		"common",
		69
	],
	"./jqqxsmgi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jqqxsmgi.entry.js",
		165,
		"common",
		70
	],
	"./jqqxsmgi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jqqxsmgi.sc.entry.js",
		165,
		"common",
		71
	],
	"./jsgmefly.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jsgmefly.entry.js",
		165,
		"common",
		72
	],
	"./jsgmefly.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jsgmefly.sc.entry.js",
		165,
		"common",
		73
	],
	"./jtmury4k.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtmury4k.entry.js",
		165,
		"common",
		74
	],
	"./jtmury4k.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtmury4k.sc.entry.js",
		165,
		"common",
		75
	],
	"./kcdmhy07.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kcdmhy07.entry.js",
		"common",
		76
	],
	"./kcdmhy07.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kcdmhy07.sc.entry.js",
		"common",
		77
	],
	"./kgmeu34f.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kgmeu34f.entry.js",
		"common",
		78
	],
	"./kgmeu34f.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kgmeu34f.sc.entry.js",
		"common",
		79
	],
	"./kjeyzltx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kjeyzltx.entry.js",
		165,
		"common",
		80
	],
	"./kjeyzltx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kjeyzltx.sc.entry.js",
		165,
		"common",
		81
	],
	"./m5qundsq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/m5qundsq.entry.js",
		"common",
		82
	],
	"./m5qundsq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/m5qundsq.sc.entry.js",
		"common",
		83
	],
	"./mbwcje7z.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mbwcje7z.entry.js",
		"common",
		84
	],
	"./mbwcje7z.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mbwcje7z.sc.entry.js",
		"common",
		85
	],
	"./mdt74s6p.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mdt74s6p.entry.js",
		165,
		"common",
		86
	],
	"./mdt74s6p.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mdt74s6p.sc.entry.js",
		165,
		"common",
		87
	],
	"./mm8konib.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mm8konib.entry.js",
		"common",
		88
	],
	"./mm8konib.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mm8konib.sc.entry.js",
		"common",
		89
	],
	"./n2nifhdk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2nifhdk.entry.js",
		"common",
		90
	],
	"./n2nifhdk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2nifhdk.sc.entry.js",
		"common",
		91
	],
	"./n2wua36d.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2wua36d.entry.js",
		"common",
		92
	],
	"./n2wua36d.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2wua36d.sc.entry.js",
		"common",
		93
	],
	"./ndbyi7fm.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ndbyi7fm.entry.js",
		"common",
		94
	],
	"./ndbyi7fm.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ndbyi7fm.sc.entry.js",
		"common",
		95
	],
	"./nhxc3mja.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nhxc3mja.entry.js",
		"common",
		96
	],
	"./nhxc3mja.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nhxc3mja.sc.entry.js",
		"common",
		97
	],
	"./nvv9lfjg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nvv9lfjg.entry.js",
		"common",
		98
	],
	"./nvv9lfjg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nvv9lfjg.sc.entry.js",
		"common",
		99
	],
	"./ouevpaq6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ouevpaq6.entry.js",
		"common",
		100
	],
	"./ouevpaq6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ouevpaq6.sc.entry.js",
		"common",
		101
	],
	"./pfpccits.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pfpccits.entry.js",
		"common",
		102
	],
	"./pfpccits.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pfpccits.sc.entry.js",
		"common",
		103
	],
	"./pmodhsil.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmodhsil.entry.js",
		165,
		"common",
		104
	],
	"./pmodhsil.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmodhsil.sc.entry.js",
		165,
		"common",
		105
	],
	"./qs3thx5n.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qs3thx5n.entry.js",
		"common",
		106
	],
	"./qs3thx5n.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qs3thx5n.sc.entry.js",
		"common",
		107
	],
	"./rt66rp5t.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rt66rp5t.entry.js",
		108
	],
	"./rt66rp5t.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rt66rp5t.sc.entry.js",
		109
	],
	"./sdggb8fc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sdggb8fc.entry.js",
		"common",
		110
	],
	"./sdggb8fc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sdggb8fc.sc.entry.js",
		"common",
		111
	],
	"./syslsoun.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/syslsoun.entry.js",
		165,
		"common",
		112
	],
	"./syslsoun.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/syslsoun.sc.entry.js",
		165,
		"common",
		113
	],
	"./t0hn09ko.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t0hn09ko.entry.js",
		165,
		"common",
		114
	],
	"./t0hn09ko.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t0hn09ko.sc.entry.js",
		165,
		"common",
		115
	],
	"./thel3zmh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/thel3zmh.entry.js",
		165,
		"common",
		116
	],
	"./thel3zmh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/thel3zmh.sc.entry.js",
		165,
		"common",
		117
	],
	"./ufdbkxs8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ufdbkxs8.entry.js",
		"common",
		118
	],
	"./ufdbkxs8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ufdbkxs8.sc.entry.js",
		"common",
		119
	],
	"./uiu7lhj6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uiu7lhj6.entry.js",
		"common",
		120
	],
	"./uiu7lhj6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uiu7lhj6.sc.entry.js",
		"common",
		121
	],
	"./ujzgtij1.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ujzgtij1.entry.js",
		"common",
		122
	],
	"./ujzgtij1.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ujzgtij1.sc.entry.js",
		"common",
		123
	],
	"./untco4jo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/untco4jo.entry.js",
		"common",
		124
	],
	"./untco4jo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/untco4jo.sc.entry.js",
		"common",
		125
	],
	"./vmkrep9v.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vmkrep9v.entry.js",
		"common",
		126
	],
	"./vmkrep9v.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vmkrep9v.sc.entry.js",
		"common",
		127
	],
	"./vvipc7rr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vvipc7rr.entry.js",
		"common",
		128
	],
	"./vvipc7rr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vvipc7rr.sc.entry.js",
		"common",
		129
	],
	"./vyajviiv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vyajviiv.entry.js",
		"common",
		130
	],
	"./vyajviiv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vyajviiv.sc.entry.js",
		"common",
		131
	],
	"./wjweccrx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wjweccrx.entry.js",
		165,
		"common",
		132
	],
	"./wjweccrx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wjweccrx.sc.entry.js",
		165,
		"common",
		133
	],
	"./wwxoh75w.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wwxoh75w.entry.js",
		"common",
		134
	],
	"./wwxoh75w.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wwxoh75w.sc.entry.js",
		"common",
		135
	],
	"./xcsewabo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xcsewabo.entry.js",
		136
	],
	"./xcsewabo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xcsewabo.sc.entry.js",
		137
	],
	"./xddssfba.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xddssfba.entry.js",
		"common",
		138
	],
	"./xddssfba.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xddssfba.sc.entry.js",
		"common",
		139
	],
	"./xgggkkjr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgggkkjr.entry.js",
		"common",
		140
	],
	"./xgggkkjr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgggkkjr.sc.entry.js",
		"common",
		141
	],
	"./xofobi9u.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xofobi9u.entry.js",
		"common",
		142
	],
	"./xofobi9u.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xofobi9u.sc.entry.js",
		"common",
		143
	],
	"./xssirbex.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xssirbex.entry.js",
		"common",
		144
	],
	"./xssirbex.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xssirbex.sc.entry.js",
		"common",
		145
	],
	"./yvqnqulj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yvqnqulj.entry.js",
		"common",
		146
	],
	"./yvqnqulj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yvqnqulj.sc.entry.js",
		"common",
		147
	],
	"./yw40bctp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yw40bctp.entry.js",
		148
	],
	"./yw40bctp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yw40bctp.sc.entry.js",
		149
	],
	"./zalxsgrw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zalxsgrw.entry.js",
		"common",
		150
	],
	"./zalxsgrw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zalxsgrw.sc.entry.js",
		"common",
		151
	],
	"./zg6ggdwp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zg6ggdwp.entry.js",
		"common",
		152
	],
	"./zg6ggdwp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zg6ggdwp.sc.entry.js",
		"common",
		153
	],
	"./zzgl2dte.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzgl2dte.entry.js",
		"common",
		154
	],
	"./zzgl2dte.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzgl2dte.sc.entry.js",
		"common",
		155
	],
	"./zzifk9rl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzifk9rl.entry.js",
		"common",
		156
	],
	"./zzifk9rl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzifk9rl.sc.entry.js",
		"common",
		157
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/ionic/svg sync ./!./!./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./ .svg$":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/ionic/svg sync nonrecursive !./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg .svg$ ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ios-add-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-add-circle-outline.svg",
	"./ios-add-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-add-circle.svg",
	"./ios-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-add.svg",
	"./ios-airplane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-airplane.svg",
	"./ios-alarm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-alarm.svg",
	"./ios-albums.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-albums.svg",
	"./ios-alert.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-alert.svg",
	"./ios-american-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-american-football.svg",
	"./ios-analytics.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-analytics.svg",
	"./ios-aperture.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-aperture.svg",
	"./ios-apps.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-apps.svg",
	"./ios-appstore.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-appstore.svg",
	"./ios-archive.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-archive.svg",
	"./ios-arrow-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-back.svg",
	"./ios-arrow-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-down.svg",
	"./ios-arrow-dropdown-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropdown-circle.svg",
	"./ios-arrow-dropdown.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropdown.svg",
	"./ios-arrow-dropleft-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropleft-circle.svg",
	"./ios-arrow-dropleft.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropleft.svg",
	"./ios-arrow-dropright-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropright-circle.svg",
	"./ios-arrow-dropright.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropright.svg",
	"./ios-arrow-dropup-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropup-circle.svg",
	"./ios-arrow-dropup.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropup.svg",
	"./ios-arrow-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-forward.svg",
	"./ios-arrow-round-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-back.svg",
	"./ios-arrow-round-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-down.svg",
	"./ios-arrow-round-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-forward.svg",
	"./ios-arrow-round-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-up.svg",
	"./ios-arrow-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-up.svg",
	"./ios-at.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-at.svg",
	"./ios-attach.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-attach.svg",
	"./ios-backspace.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-backspace.svg",
	"./ios-barcode.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-barcode.svg",
	"./ios-baseball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-baseball.svg",
	"./ios-basket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-basket.svg",
	"./ios-basketball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-basketball.svg",
	"./ios-battery-charging.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-battery-charging.svg",
	"./ios-battery-dead.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-battery-dead.svg",
	"./ios-battery-full.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-battery-full.svg",
	"./ios-beaker.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-beaker.svg",
	"./ios-bed.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bed.svg",
	"./ios-beer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-beer.svg",
	"./ios-bicycle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bicycle.svg",
	"./ios-bluetooth.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bluetooth.svg",
	"./ios-boat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-boat.svg",
	"./ios-body.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-body.svg",
	"./ios-bonfire.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bonfire.svg",
	"./ios-book.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-book.svg",
	"./ios-bookmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bookmark.svg",
	"./ios-bookmarks.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bookmarks.svg",
	"./ios-bowtie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bowtie.svg",
	"./ios-briefcase.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-briefcase.svg",
	"./ios-browsers.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-browsers.svg",
	"./ios-brush.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-brush.svg",
	"./ios-bug.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bug.svg",
	"./ios-build.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-build.svg",
	"./ios-bulb.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bulb.svg",
	"./ios-bus.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bus.svg",
	"./ios-business.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-business.svg",
	"./ios-cafe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cafe.svg",
	"./ios-calculator.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-calculator.svg",
	"./ios-calendar.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-calendar.svg",
	"./ios-call.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-call.svg",
	"./ios-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-camera.svg",
	"./ios-car.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-car.svg",
	"./ios-card.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-card.svg",
	"./ios-cart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cart.svg",
	"./ios-cash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cash.svg",
	"./ios-cellular.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cellular.svg",
	"./ios-chatboxes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-chatboxes.svg",
	"./ios-chatbubbles.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-chatbubbles.svg",
	"./ios-checkbox-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkbox-outline.svg",
	"./ios-checkbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkbox.svg",
	"./ios-checkmark-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkmark-circle-outline.svg",
	"./ios-checkmark-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkmark-circle.svg",
	"./ios-checkmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkmark.svg",
	"./ios-clipboard.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-clipboard.svg",
	"./ios-clock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-clock.svg",
	"./ios-close-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-close-circle-outline.svg",
	"./ios-close-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-close-circle.svg",
	"./ios-close.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-close.svg",
	"./ios-cloud-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-circle.svg",
	"./ios-cloud-done.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-done.svg",
	"./ios-cloud-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-download.svg",
	"./ios-cloud-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-outline.svg",
	"./ios-cloud-upload.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-upload.svg",
	"./ios-cloud.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud.svg",
	"./ios-cloudy-night.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloudy-night.svg",
	"./ios-cloudy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloudy.svg",
	"./ios-code-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-code-download.svg",
	"./ios-code-working.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-code-working.svg",
	"./ios-code.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-code.svg",
	"./ios-cog.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cog.svg",
	"./ios-color-fill.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-fill.svg",
	"./ios-color-filter.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-filter.svg",
	"./ios-color-palette.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-palette.svg",
	"./ios-color-wand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-wand.svg",
	"./ios-compass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-compass.svg",
	"./ios-construct.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-construct.svg",
	"./ios-contact.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contact.svg",
	"./ios-contacts.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contacts.svg",
	"./ios-contract.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contract.svg",
	"./ios-contrast.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contrast.svg",
	"./ios-copy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-copy.svg",
	"./ios-create.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-create.svg",
	"./ios-crop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-crop.svg",
	"./ios-cube.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cube.svg",
	"./ios-cut.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cut.svg",
	"./ios-desktop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-desktop.svg",
	"./ios-disc.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-disc.svg",
	"./ios-document.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-document.svg",
	"./ios-done-all.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-done-all.svg",
	"./ios-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-download.svg",
	"./ios-easel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-easel.svg",
	"./ios-egg.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-egg.svg",
	"./ios-exit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-exit.svg",
	"./ios-expand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-expand.svg",
	"./ios-eye-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-eye-off.svg",
	"./ios-eye.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-eye.svg",
	"./ios-fastforward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-fastforward.svg",
	"./ios-female.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-female.svg",
	"./ios-filing.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-filing.svg",
	"./ios-film.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-film.svg",
	"./ios-finger-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-finger-print.svg",
	"./ios-fitness.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-fitness.svg",
	"./ios-flag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flag.svg",
	"./ios-flame.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flame.svg",
	"./ios-flash-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flash-off.svg",
	"./ios-flash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flash.svg",
	"./ios-flashlight.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flashlight.svg",
	"./ios-flask.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flask.svg",
	"./ios-flower.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flower.svg",
	"./ios-folder-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-folder-open.svg",
	"./ios-folder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-folder.svg",
	"./ios-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-football.svg",
	"./ios-funnel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-funnel.svg",
	"./ios-gift.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-gift.svg",
	"./ios-git-branch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-branch.svg",
	"./ios-git-commit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-commit.svg",
	"./ios-git-compare.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-compare.svg",
	"./ios-git-merge.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-merge.svg",
	"./ios-git-network.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-network.svg",
	"./ios-git-pull-request.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-pull-request.svg",
	"./ios-glasses.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-glasses.svg",
	"./ios-globe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-globe.svg",
	"./ios-grid.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-grid.svg",
	"./ios-hammer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-hammer.svg",
	"./ios-hand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-hand.svg",
	"./ios-happy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-happy.svg",
	"./ios-headset.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-headset.svg",
	"./ios-heart-dislike.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart-dislike.svg",
	"./ios-heart-empty.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart-empty.svg",
	"./ios-heart-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart-half.svg",
	"./ios-heart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart.svg",
	"./ios-help-buoy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help-buoy.svg",
	"./ios-help-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help-circle-outline.svg",
	"./ios-help-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help-circle.svg",
	"./ios-help.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help.svg",
	"./ios-home.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-home.svg",
	"./ios-hourglass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-hourglass.svg",
	"./ios-ice-cream.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-ice-cream.svg",
	"./ios-image.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-image.svg",
	"./ios-images.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-images.svg",
	"./ios-infinite.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-infinite.svg",
	"./ios-information-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-information-circle-outline.svg",
	"./ios-information-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-information-circle.svg",
	"./ios-information.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-information.svg",
	"./ios-jet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-jet.svg",
	"./ios-journal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-journal.svg",
	"./ios-key.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-key.svg",
	"./ios-keypad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-keypad.svg",
	"./ios-laptop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-laptop.svg",
	"./ios-leaf.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-leaf.svg",
	"./ios-link.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-link.svg",
	"./ios-list-box.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-list-box.svg",
	"./ios-list.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-list.svg",
	"./ios-locate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-locate.svg",
	"./ios-lock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-lock.svg",
	"./ios-log-in.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-log-in.svg",
	"./ios-log-out.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-log-out.svg",
	"./ios-magnet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-magnet.svg",
	"./ios-mail-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mail-open.svg",
	"./ios-mail-unread.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mail-unread.svg",
	"./ios-mail.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mail.svg",
	"./ios-male.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-male.svg",
	"./ios-man.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-man.svg",
	"./ios-map.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-map.svg",
	"./ios-medal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-medal.svg",
	"./ios-medical.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-medical.svg",
	"./ios-medkit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-medkit.svg",
	"./ios-megaphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-megaphone.svg",
	"./ios-menu.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-menu.svg",
	"./ios-mic-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mic-off.svg",
	"./ios-mic.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mic.svg",
	"./ios-microphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-microphone.svg",
	"./ios-moon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-moon.svg",
	"./ios-more.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-more.svg",
	"./ios-move.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-move.svg",
	"./ios-musical-note.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-musical-note.svg",
	"./ios-musical-notes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-musical-notes.svg",
	"./ios-navigate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-navigate.svg",
	"./ios-notifications-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-notifications-off.svg",
	"./ios-notifications-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-notifications-outline.svg",
	"./ios-notifications.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-notifications.svg",
	"./ios-nuclear.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-nuclear.svg",
	"./ios-nutrition.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-nutrition.svg",
	"./ios-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-open.svg",
	"./ios-options.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-options.svg",
	"./ios-outlet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-outlet.svg",
	"./ios-paper-plane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-paper-plane.svg",
	"./ios-paper.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-paper.svg",
	"./ios-partly-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-partly-sunny.svg",
	"./ios-pause.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pause.svg",
	"./ios-paw.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-paw.svg",
	"./ios-people.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-people.svg",
	"./ios-person-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-person-add.svg",
	"./ios-person.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-person.svg",
	"./ios-phone-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-phone-landscape.svg",
	"./ios-phone-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-phone-portrait.svg",
	"./ios-photos.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-photos.svg",
	"./ios-pie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pie.svg",
	"./ios-pin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pin.svg",
	"./ios-pint.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pint.svg",
	"./ios-pizza.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pizza.svg",
	"./ios-planet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-planet.svg",
	"./ios-play-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-play-circle.svg",
	"./ios-play.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-play.svg",
	"./ios-podium.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-podium.svg",
	"./ios-power.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-power.svg",
	"./ios-pricetag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pricetag.svg",
	"./ios-pricetags.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pricetags.svg",
	"./ios-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-print.svg",
	"./ios-pulse.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pulse.svg",
	"./ios-qr-scanner.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-qr-scanner.svg",
	"./ios-quote.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-quote.svg",
	"./ios-radio-button-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-radio-button-off.svg",
	"./ios-radio-button-on.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-radio-button-on.svg",
	"./ios-radio.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-radio.svg",
	"./ios-rainy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rainy.svg",
	"./ios-recording.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-recording.svg",
	"./ios-redo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-redo.svg",
	"./ios-refresh-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-refresh-circle.svg",
	"./ios-refresh.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-refresh.svg",
	"./ios-remove-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-remove-circle-outline.svg",
	"./ios-remove-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-remove-circle.svg",
	"./ios-remove.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-remove.svg",
	"./ios-reorder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-reorder.svg",
	"./ios-repeat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-repeat.svg",
	"./ios-resize.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-resize.svg",
	"./ios-restaurant.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-restaurant.svg",
	"./ios-return-left.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-return-left.svg",
	"./ios-return-right.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-return-right.svg",
	"./ios-reverse-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-reverse-camera.svg",
	"./ios-rewind.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rewind.svg",
	"./ios-ribbon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-ribbon.svg",
	"./ios-rocket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rocket.svg",
	"./ios-rose.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rose.svg",
	"./ios-sad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-sad.svg",
	"./ios-save.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-save.svg",
	"./ios-school.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-school.svg",
	"./ios-search.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-search.svg",
	"./ios-send.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-send.svg",
	"./ios-settings.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-settings.svg",
	"./ios-share-alt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-share-alt.svg",
	"./ios-share.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-share.svg",
	"./ios-shirt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-shirt.svg",
	"./ios-shuffle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-shuffle.svg",
	"./ios-skip-backward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-skip-backward.svg",
	"./ios-skip-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-skip-forward.svg",
	"./ios-snow.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-snow.svg",
	"./ios-speedometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-speedometer.svg",
	"./ios-square-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-square-outline.svg",
	"./ios-square.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-square.svg",
	"./ios-star-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-star-half.svg",
	"./ios-star-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-star-outline.svg",
	"./ios-star.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-star.svg",
	"./ios-stats.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-stats.svg",
	"./ios-stopwatch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-stopwatch.svg",
	"./ios-subway.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-subway.svg",
	"./ios-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-sunny.svg",
	"./ios-swap.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-swap.svg",
	"./ios-switch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-switch.svg",
	"./ios-sync.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-sync.svg",
	"./ios-tablet-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tablet-landscape.svg",
	"./ios-tablet-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tablet-portrait.svg",
	"./ios-tennisball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tennisball.svg",
	"./ios-text.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-text.svg",
	"./ios-thermometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thermometer.svg",
	"./ios-thumbs-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thumbs-down.svg",
	"./ios-thumbs-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thumbs-up.svg",
	"./ios-thunderstorm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thunderstorm.svg",
	"./ios-time.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-time.svg",
	"./ios-timer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-timer.svg",
	"./ios-today.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-today.svg",
	"./ios-train.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-train.svg",
	"./ios-transgender.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-transgender.svg",
	"./ios-trash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trash.svg",
	"./ios-trending-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trending-down.svg",
	"./ios-trending-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trending-up.svg",
	"./ios-trophy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trophy.svg",
	"./ios-tv.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tv.svg",
	"./ios-umbrella.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-umbrella.svg",
	"./ios-undo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-undo.svg",
	"./ios-unlock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-unlock.svg",
	"./ios-videocam.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-videocam.svg",
	"./ios-volume-high.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-high.svg",
	"./ios-volume-low.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-low.svg",
	"./ios-volume-mute.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-mute.svg",
	"./ios-volume-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-off.svg",
	"./ios-walk.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-walk.svg",
	"./ios-wallet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-wallet.svg",
	"./ios-warning.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-warning.svg",
	"./ios-watch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-watch.svg",
	"./ios-water.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-water.svg",
	"./ios-wifi.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-wifi.svg",
	"./ios-wine.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-wine.svg",
	"./ios-woman.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-woman.svg",
	"./logo-android.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-android.svg",
	"./logo-angular.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-angular.svg",
	"./logo-apple.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-apple.svg",
	"./logo-bitbucket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-bitbucket.svg",
	"./logo-bitcoin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-bitcoin.svg",
	"./logo-buffer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-buffer.svg",
	"./logo-chrome.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-chrome.svg",
	"./logo-closed-captioning.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-closed-captioning.svg",
	"./logo-codepen.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-codepen.svg",
	"./logo-css3.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-css3.svg",
	"./logo-designernews.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-designernews.svg",
	"./logo-dribbble.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-dribbble.svg",
	"./logo-dropbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-dropbox.svg",
	"./logo-euro.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-euro.svg",
	"./logo-facebook.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-facebook.svg",
	"./logo-flickr.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-flickr.svg",
	"./logo-foursquare.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-foursquare.svg",
	"./logo-freebsd-devil.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-freebsd-devil.svg",
	"./logo-game-controller-a.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-game-controller-a.svg",
	"./logo-game-controller-b.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-game-controller-b.svg",
	"./logo-github.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-github.svg",
	"./logo-google.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-google.svg",
	"./logo-googleplus.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-googleplus.svg",
	"./logo-hackernews.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-hackernews.svg",
	"./logo-html5.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-html5.svg",
	"./logo-instagram.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-instagram.svg",
	"./logo-ionic.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-ionic.svg",
	"./logo-ionitron.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-ionitron.svg",
	"./logo-javascript.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-javascript.svg",
	"./logo-linkedin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-linkedin.svg",
	"./logo-markdown.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-markdown.svg",
	"./logo-model-s.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-model-s.svg",
	"./logo-no-smoking.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-no-smoking.svg",
	"./logo-nodejs.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-nodejs.svg",
	"./logo-npm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-npm.svg",
	"./logo-octocat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-octocat.svg",
	"./logo-pinterest.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-pinterest.svg",
	"./logo-playstation.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-playstation.svg",
	"./logo-polymer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-polymer.svg",
	"./logo-python.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-python.svg",
	"./logo-reddit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-reddit.svg",
	"./logo-rss.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-rss.svg",
	"./logo-sass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-sass.svg",
	"./logo-skype.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-skype.svg",
	"./logo-slack.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-slack.svg",
	"./logo-snapchat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-snapchat.svg",
	"./logo-steam.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-steam.svg",
	"./logo-tumblr.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-tumblr.svg",
	"./logo-tux.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-tux.svg",
	"./logo-twitch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-twitch.svg",
	"./logo-twitter.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-twitter.svg",
	"./logo-usd.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-usd.svg",
	"./logo-vimeo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-vimeo.svg",
	"./logo-vk.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-vk.svg",
	"./logo-whatsapp.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-whatsapp.svg",
	"./logo-windows.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-windows.svg",
	"./logo-wordpress.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-wordpress.svg",
	"./logo-xbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-xbox.svg",
	"./logo-xing.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-xing.svg",
	"./logo-yahoo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-yahoo.svg",
	"./logo-yen.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-yen.svg",
	"./logo-youtube.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-youtube.svg",
	"./md-add-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-add-circle-outline.svg",
	"./md-add-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-add-circle.svg",
	"./md-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-add.svg",
	"./md-airplane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-airplane.svg",
	"./md-alarm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-alarm.svg",
	"./md-albums.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-albums.svg",
	"./md-alert.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-alert.svg",
	"./md-american-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-american-football.svg",
	"./md-analytics.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-analytics.svg",
	"./md-aperture.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-aperture.svg",
	"./md-apps.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-apps.svg",
	"./md-appstore.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-appstore.svg",
	"./md-archive.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-archive.svg",
	"./md-arrow-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-back.svg",
	"./md-arrow-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-down.svg",
	"./md-arrow-dropdown-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropdown-circle.svg",
	"./md-arrow-dropdown.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropdown.svg",
	"./md-arrow-dropleft-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropleft-circle.svg",
	"./md-arrow-dropleft.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropleft.svg",
	"./md-arrow-dropright-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropright-circle.svg",
	"./md-arrow-dropright.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropright.svg",
	"./md-arrow-dropup-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropup-circle.svg",
	"./md-arrow-dropup.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropup.svg",
	"./md-arrow-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-forward.svg",
	"./md-arrow-round-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-back.svg",
	"./md-arrow-round-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-down.svg",
	"./md-arrow-round-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-forward.svg",
	"./md-arrow-round-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-up.svg",
	"./md-arrow-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-up.svg",
	"./md-at.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-at.svg",
	"./md-attach.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-attach.svg",
	"./md-backspace.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-backspace.svg",
	"./md-barcode.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-barcode.svg",
	"./md-baseball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-baseball.svg",
	"./md-basket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-basket.svg",
	"./md-basketball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-basketball.svg",
	"./md-battery-charging.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-battery-charging.svg",
	"./md-battery-dead.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-battery-dead.svg",
	"./md-battery-full.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-battery-full.svg",
	"./md-beaker.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-beaker.svg",
	"./md-bed.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bed.svg",
	"./md-beer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-beer.svg",
	"./md-bicycle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bicycle.svg",
	"./md-bluetooth.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bluetooth.svg",
	"./md-boat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-boat.svg",
	"./md-body.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-body.svg",
	"./md-bonfire.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bonfire.svg",
	"./md-book.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-book.svg",
	"./md-bookmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bookmark.svg",
	"./md-bookmarks.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bookmarks.svg",
	"./md-bowtie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bowtie.svg",
	"./md-briefcase.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-briefcase.svg",
	"./md-browsers.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-browsers.svg",
	"./md-brush.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-brush.svg",
	"./md-bug.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bug.svg",
	"./md-build.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-build.svg",
	"./md-bulb.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bulb.svg",
	"./md-bus.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bus.svg",
	"./md-business.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-business.svg",
	"./md-cafe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cafe.svg",
	"./md-calculator.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-calculator.svg",
	"./md-calendar.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-calendar.svg",
	"./md-call.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-call.svg",
	"./md-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-camera.svg",
	"./md-car.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-car.svg",
	"./md-card.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-card.svg",
	"./md-cart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cart.svg",
	"./md-cash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cash.svg",
	"./md-cellular.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cellular.svg",
	"./md-chatboxes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-chatboxes.svg",
	"./md-chatbubbles.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-chatbubbles.svg",
	"./md-checkbox-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkbox-outline.svg",
	"./md-checkbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkbox.svg",
	"./md-checkmark-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkmark-circle-outline.svg",
	"./md-checkmark-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkmark-circle.svg",
	"./md-checkmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkmark.svg",
	"./md-clipboard.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-clipboard.svg",
	"./md-clock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-clock.svg",
	"./md-close-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-close-circle-outline.svg",
	"./md-close-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-close-circle.svg",
	"./md-close.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-close.svg",
	"./md-cloud-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-circle.svg",
	"./md-cloud-done.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-done.svg",
	"./md-cloud-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-download.svg",
	"./md-cloud-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-outline.svg",
	"./md-cloud-upload.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-upload.svg",
	"./md-cloud.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud.svg",
	"./md-cloudy-night.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloudy-night.svg",
	"./md-cloudy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloudy.svg",
	"./md-code-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-code-download.svg",
	"./md-code-working.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-code-working.svg",
	"./md-code.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-code.svg",
	"./md-cog.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cog.svg",
	"./md-color-fill.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-fill.svg",
	"./md-color-filter.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-filter.svg",
	"./md-color-palette.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-palette.svg",
	"./md-color-wand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-wand.svg",
	"./md-compass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-compass.svg",
	"./md-construct.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-construct.svg",
	"./md-contact.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contact.svg",
	"./md-contacts.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contacts.svg",
	"./md-contract.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contract.svg",
	"./md-contrast.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contrast.svg",
	"./md-copy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-copy.svg",
	"./md-create.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-create.svg",
	"./md-crop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-crop.svg",
	"./md-cube.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cube.svg",
	"./md-cut.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cut.svg",
	"./md-desktop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-desktop.svg",
	"./md-disc.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-disc.svg",
	"./md-document.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-document.svg",
	"./md-done-all.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-done-all.svg",
	"./md-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-download.svg",
	"./md-easel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-easel.svg",
	"./md-egg.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-egg.svg",
	"./md-exit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-exit.svg",
	"./md-expand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-expand.svg",
	"./md-eye-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-eye-off.svg",
	"./md-eye.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-eye.svg",
	"./md-fastforward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-fastforward.svg",
	"./md-female.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-female.svg",
	"./md-filing.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-filing.svg",
	"./md-film.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-film.svg",
	"./md-finger-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-finger-print.svg",
	"./md-fitness.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-fitness.svg",
	"./md-flag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flag.svg",
	"./md-flame.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flame.svg",
	"./md-flash-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flash-off.svg",
	"./md-flash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flash.svg",
	"./md-flashlight.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flashlight.svg",
	"./md-flask.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flask.svg",
	"./md-flower.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flower.svg",
	"./md-folder-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-folder-open.svg",
	"./md-folder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-folder.svg",
	"./md-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-football.svg",
	"./md-funnel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-funnel.svg",
	"./md-gift.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-gift.svg",
	"./md-git-branch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-branch.svg",
	"./md-git-commit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-commit.svg",
	"./md-git-compare.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-compare.svg",
	"./md-git-merge.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-merge.svg",
	"./md-git-network.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-network.svg",
	"./md-git-pull-request.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-pull-request.svg",
	"./md-glasses.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-glasses.svg",
	"./md-globe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-globe.svg",
	"./md-grid.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-grid.svg",
	"./md-hammer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-hammer.svg",
	"./md-hand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-hand.svg",
	"./md-happy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-happy.svg",
	"./md-headset.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-headset.svg",
	"./md-heart-dislike.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart-dislike.svg",
	"./md-heart-empty.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart-empty.svg",
	"./md-heart-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart-half.svg",
	"./md-heart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart.svg",
	"./md-help-buoy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help-buoy.svg",
	"./md-help-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help-circle-outline.svg",
	"./md-help-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help-circle.svg",
	"./md-help.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help.svg",
	"./md-home.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-home.svg",
	"./md-hourglass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-hourglass.svg",
	"./md-ice-cream.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-ice-cream.svg",
	"./md-image.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-image.svg",
	"./md-images.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-images.svg",
	"./md-infinite.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-infinite.svg",
	"./md-information-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-information-circle-outline.svg",
	"./md-information-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-information-circle.svg",
	"./md-information.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-information.svg",
	"./md-jet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-jet.svg",
	"./md-journal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-journal.svg",
	"./md-key.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-key.svg",
	"./md-keypad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-keypad.svg",
	"./md-laptop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-laptop.svg",
	"./md-leaf.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-leaf.svg",
	"./md-link.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-link.svg",
	"./md-list-box.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-list-box.svg",
	"./md-list.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-list.svg",
	"./md-locate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-locate.svg",
	"./md-lock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-lock.svg",
	"./md-log-in.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-log-in.svg",
	"./md-log-out.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-log-out.svg",
	"./md-magnet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-magnet.svg",
	"./md-mail-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mail-open.svg",
	"./md-mail-unread.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mail-unread.svg",
	"./md-mail.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mail.svg",
	"./md-male.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-male.svg",
	"./md-man.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-man.svg",
	"./md-map.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-map.svg",
	"./md-medal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-medal.svg",
	"./md-medical.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-medical.svg",
	"./md-medkit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-medkit.svg",
	"./md-megaphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-megaphone.svg",
	"./md-menu.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-menu.svg",
	"./md-mic-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mic-off.svg",
	"./md-mic.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mic.svg",
	"./md-microphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-microphone.svg",
	"./md-moon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-moon.svg",
	"./md-more.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-more.svg",
	"./md-move.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-move.svg",
	"./md-musical-note.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-musical-note.svg",
	"./md-musical-notes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-musical-notes.svg",
	"./md-navigate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-navigate.svg",
	"./md-notifications-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-notifications-off.svg",
	"./md-notifications-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-notifications-outline.svg",
	"./md-notifications.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-notifications.svg",
	"./md-nuclear.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-nuclear.svg",
	"./md-nutrition.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-nutrition.svg",
	"./md-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-open.svg",
	"./md-options.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-options.svg",
	"./md-outlet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-outlet.svg",
	"./md-paper-plane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-paper-plane.svg",
	"./md-paper.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-paper.svg",
	"./md-partly-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-partly-sunny.svg",
	"./md-pause.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pause.svg",
	"./md-paw.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-paw.svg",
	"./md-people.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-people.svg",
	"./md-person-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-person-add.svg",
	"./md-person.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-person.svg",
	"./md-phone-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-phone-landscape.svg",
	"./md-phone-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-phone-portrait.svg",
	"./md-photos.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-photos.svg",
	"./md-pie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pie.svg",
	"./md-pin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pin.svg",
	"./md-pint.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pint.svg",
	"./md-pizza.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pizza.svg",
	"./md-planet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-planet.svg",
	"./md-play-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-play-circle.svg",
	"./md-play.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-play.svg",
	"./md-podium.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-podium.svg",
	"./md-power.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-power.svg",
	"./md-pricetag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pricetag.svg",
	"./md-pricetags.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pricetags.svg",
	"./md-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-print.svg",
	"./md-pulse.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pulse.svg",
	"./md-qr-scanner.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-qr-scanner.svg",
	"./md-quote.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-quote.svg",
	"./md-radio-button-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-radio-button-off.svg",
	"./md-radio-button-on.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-radio-button-on.svg",
	"./md-radio.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-radio.svg",
	"./md-rainy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rainy.svg",
	"./md-recording.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-recording.svg",
	"./md-redo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-redo.svg",
	"./md-refresh-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-refresh-circle.svg",
	"./md-refresh.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-refresh.svg",
	"./md-remove-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-remove-circle-outline.svg",
	"./md-remove-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-remove-circle.svg",
	"./md-remove.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-remove.svg",
	"./md-reorder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-reorder.svg",
	"./md-repeat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-repeat.svg",
	"./md-resize.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-resize.svg",
	"./md-restaurant.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-restaurant.svg",
	"./md-return-left.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-return-left.svg",
	"./md-return-right.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-return-right.svg",
	"./md-reverse-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-reverse-camera.svg",
	"./md-rewind.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rewind.svg",
	"./md-ribbon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-ribbon.svg",
	"./md-rocket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rocket.svg",
	"./md-rose.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rose.svg",
	"./md-sad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-sad.svg",
	"./md-save.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-save.svg",
	"./md-school.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-school.svg",
	"./md-search.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-search.svg",
	"./md-send.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-send.svg",
	"./md-settings.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-settings.svg",
	"./md-share-alt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-share-alt.svg",
	"./md-share.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-share.svg",
	"./md-shirt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-shirt.svg",
	"./md-shuffle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-shuffle.svg",
	"./md-skip-backward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-skip-backward.svg",
	"./md-skip-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-skip-forward.svg",
	"./md-snow.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-snow.svg",
	"./md-speedometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-speedometer.svg",
	"./md-square-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-square-outline.svg",
	"./md-square.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-square.svg",
	"./md-star-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-star-half.svg",
	"./md-star-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-star-outline.svg",
	"./md-star.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-star.svg",
	"./md-stats.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-stats.svg",
	"./md-stopwatch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-stopwatch.svg",
	"./md-subway.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-subway.svg",
	"./md-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-sunny.svg",
	"./md-swap.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-swap.svg",
	"./md-switch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-switch.svg",
	"./md-sync.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-sync.svg",
	"./md-tablet-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tablet-landscape.svg",
	"./md-tablet-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tablet-portrait.svg",
	"./md-tennisball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tennisball.svg",
	"./md-text.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-text.svg",
	"./md-thermometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thermometer.svg",
	"./md-thumbs-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thumbs-down.svg",
	"./md-thumbs-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thumbs-up.svg",
	"./md-thunderstorm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thunderstorm.svg",
	"./md-time.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-time.svg",
	"./md-timer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-timer.svg",
	"./md-today.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-today.svg",
	"./md-train.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-train.svg",
	"./md-transgender.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-transgender.svg",
	"./md-trash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trash.svg",
	"./md-trending-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trending-down.svg",
	"./md-trending-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trending-up.svg",
	"./md-trophy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trophy.svg",
	"./md-tv.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tv.svg",
	"./md-umbrella.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-umbrella.svg",
	"./md-undo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-undo.svg",
	"./md-unlock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-unlock.svg",
	"./md-videocam.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-videocam.svg",
	"./md-volume-high.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-high.svg",
	"./md-volume-low.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-low.svg",
	"./md-volume-mute.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-mute.svg",
	"./md-volume-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-off.svg",
	"./md-walk.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-walk.svg",
	"./md-wallet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-wallet.svg",
	"./md-warning.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-warning.svg",
	"./md-watch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-watch.svg",
	"./md-water.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-water.svg",
	"./md-wifi.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-wifi.svg",
	"./md-wine.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-wine.svg",
	"./md-woman.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-woman.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/@ionic/core/dist/ionic/svg sync ./!./!./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./ .svg$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/app-bar/app-bar.module": [
		"./src/app/pages/app-bar/app-bar.module.ts",
		"pages-app-bar-app-bar-module"
	],
	"./pages/bottom-sheet/bottom-sheet.module": [
		"./src/app/pages/bottom-sheet/bottom-sheet.module.ts",
		"pages-bottom-sheet-bottom-sheet-module"
	],
	"./pages/components/components.module": [
		"./src/app/pages/components/components.module.ts",
		"pages-components-components-module"
	],
	"./pages/icon/icon.module": [
		"./src/app/pages/icon/icon.module.ts",
		"pages-icon-icon-module"
	],
	"./pages/loading/loading.module": [
		"./src/app/pages/loading/loading.module.ts",
		"pages-loading-loading-module"
	],
	"./pages/native-map-bottom-sheet/native-map-bottom-sheet.module": [
		"./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.module.ts",
		"pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-module",
		"common",
		"pages-native-map-bottom-sheet-native-map-bottom-sheet-module"
	],
	"./pages/native-map/native-map.module": [
		"./src/app/pages/native-map/native-map.module.ts",
		"pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-module",
		"common",
		"pages-native-map-native-map-module"
	],
	"./pages/password/password.module": [
		"./src/app/pages/password/password.module.ts",
		"pages-password-password-module"
	],
	"./pages/toolbar-search/toolbar-search.module": [
		"./src/app/pages/toolbar-search/toolbar-search.module.ts",
		"pages-toolbar-search-toolbar-search-module"
	],
	"./pages/viewport/viewport.module": [
		"./src/app/pages/viewport/viewport.module.ts",
		"pages-viewport-viewport-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        redirectTo: 'components',
        pathMatch: 'full'
    },
    {
        path: 'components',
        loadChildren: './pages/components/components.module#ComponentsPageModule'
    },
    { path: 'bottom-sheet', loadChildren: './pages/bottom-sheet/bottom-sheet.module#BottomSheetPageModule' },
    { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
    { path: 'password', loadChildren: './pages/password/password.module#PasswordPageModule' },
    { path: 'toolbar-search', loadChildren: './pages/toolbar-search/toolbar-search.module#ToolbarSearchPageModule' },
    { path: 'app-bar', loadChildren: './pages/app-bar/app-bar.module#AppBarPageModule' },
    { path: 'viewport', loadChildren: './pages/viewport/viewport.module#ViewportPageModule' },
    { path: 'icon', loadChildren: './pages/icon/icon.module#IconPageModule' },
    { path: 'native-map', loadChildren: './pages/native-map/native-map.module#NativeMapPageModule' },
    {
        path: 'map-bottom-sheet',
        loadChildren: './pages/native-map-bottom-sheet/native-map-bottom-sheet.module#NativeMapBottomSheetPageModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu menuId=\"menuId\" [fivCollapseMenu]=\"true\" [hoverMenu]=\"true\" #menu=menuCollapse >\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n                <fiv-collapsable-menu-button #mb *fivIf=\"['desktop']\" [menu]=\"menu\"></fiv-collapsable-menu-button>\n          </ion-buttons>\n          <ion-title>Logo</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <fiv-router-item position=\"right\" shape=\"dot\" [pageUrl]=\"p.url\" *ngFor=\"let p of appPages\">\n              <ion-menu-toggle auto-hide=\"false\">\n                <fiv-ripple>\n                    <ion-item>\n                        <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n                        <ion-label>\n                          {{p.title}}\n                        </ion-label>\n                      </ion-item>\n                </fiv-ripple>\n                  \n                </ion-menu-toggle>\n          </fiv-router-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: 'Components',
                url: '/components',
                icon: 'home'
            },
            {
                title: 'Password Item',
                url: '/password',
                icon: 'key'
            },
            {
                title: 'Toolbar Search',
                url: '/toolbar-search',
                icon: 'search'
            },
            {
                title: 'Loading',
                url: '/loading',
                icon: 'home'
            },
            {
                title: 'Bottom Sheet',
                url: '/bottom-sheet',
                icon: 'home'
            },
            {
                title: 'App Bar',
                url: '/app-bar',
                icon: 'home'
            },
            {
                title: 'Viewport Directive',
                url: '/viewport',
                icon: 'home'
            },
            {
                title: 'Icon',
                url: '/icon',
                icon: 'home'
            },
            {
                title: 'Native Map',
                url: '/native-map',
                icon: 'map'
            },
            {
                title: 'Native Map with Bottom Sheet',
                url: '/map-bottom-sheet',
                icon: 'map'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                core__WEBPACK_IMPORTED_MODULE_0__["FivethreeCoreModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mj/Dev/fivethree/web-components/fivethree/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map