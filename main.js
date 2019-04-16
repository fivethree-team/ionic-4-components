(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/@fivethree/core/fesm5/fivethree-core.js":
/*!******************************************************!*\
  !*** ./dist/@fivethree/core/fesm5/fivethree-core.js ***!
  \******************************************************/
/*! exports provided: MyHammerConfig, FivethreeCoreModule, DrawerState, FivAppBar, FivBottomSheet, FivBottomSheetContent, FivCollapsableMenuButton, FivDialog, CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR, FivEditableLabel, FivExpandable, FivExpandableIndicator, FivLoadingButton, FivLoadingContent, FivLoadingFab, FivLoadingProgressBar, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FivPasswordInput, FivRouterItem, FivStep, FivStepContent, FivStepHeader, FivStepper, FivStepperHorizontal, FivToolbarSearch, FivAppBarTab, FivAppBarTabContent, FivButtons, FivButton, FivNetworkStatus, FivBackButton, FivGallery, FivGalleryImage, Position, LoadingService, ImageService, FivOverlayService, FivDialogService, FivRoutingStateService, ɵb, ɵa, ɵc, ɵn, ɵd, ɵg, ɵf, ɵj, ɵh, ɵi, ɵm, ɵk, ɵl, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivethreeCoreModule", function() { return FivethreeCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerState", function() { return DrawerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivAppBar", function() { return FivAppBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBottomSheet", function() { return FivBottomSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBottomSheetContent", function() { return FivBottomSheetContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivCollapsableMenuButton", function() { return FivCollapsableMenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivDialog", function() { return FivDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivEditableLabel", function() { return FivEditableLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivExpandable", function() { return FivExpandable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivExpandableIndicator", function() { return FivExpandableIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingButton", function() { return FivLoadingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingContent", function() { return FivLoadingContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingFab", function() { return FivLoadingFab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingProgressBar", function() { return FivLoadingProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivPasswordInput", function() { return FivPasswordInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivRouterItem", function() { return FivRouterItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStep", function() { return FivStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepContent", function() { return FivStepContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepHeader", function() { return FivStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepper", function() { return FivStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepperHorizontal", function() { return FivStepperHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivToolbarSearch", function() { return FivToolbarSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivAppBarTab", function() { return FivAppBarTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivAppBarTabContent", function() { return FivAppBarTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivButtons", function() { return FivButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivButton", function() { return FivButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivNetworkStatus", function() { return FivNetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBackButton", function() { return FivBackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivGallery", function() { return FivGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivGalleryImage", function() { return FivGalleryImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivOverlayService", function() { return FivOverlayService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivDialogService", function() { return FivDialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivRoutingStateService", function() { return FivRoutingStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FivCollapsableMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FivCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FivIfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return LazyImageDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FivPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return FivPull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return FivViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return FivIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return FivLoadingRefresherContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return FivLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return FivOverlayContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return FivOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return FivPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return FivRipple; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivOverlayContent = /** @class */ (function () {
    function FivOverlayContent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(FivOverlayContent.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.priority ? this.sanitizer.bypassSecurityTrustStyle("z-index: " + this.priority) : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivOverlayContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    FivOverlayContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-overlay-content',
                    template: "<ng-content #content></ng-content>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FivOverlayContent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    FivOverlayContent.propDecorators = {
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['style',] }]
    };
    return FivOverlayContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivOverlayService = /** @class */ (function () {
    function FivOverlayService(componentFactoryResolver, rendererFactory, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @template T
     * @param {?} component
     * @param {?=} content
     * @return {?}
     */
    FivOverlayService.prototype.createOverlay = /**
     * @template T
     * @param {?} component
     * @param {?=} content
     * @return {?}
     */
    function (component, content) {
        /** @type {?} */
        var resolvedContent = this.resolveNgContent(content);
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector, resolvedContent);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        document.body.appendChild(domElem);
        return componentRef;
    };
    /**
     * @private
     * @template T
     * @param {?} content
     * @return {?}
     */
    FivOverlayService.prototype.resolveNgContent = /**
     * @private
     * @template T
     * @param {?} content
     * @return {?}
     */
    function (content) {
        if (!content) {
            return;
        }
        if (typeof content === 'string') {
            /** @type {?} */
            var element = this.renderer.createText(content);
            return [[element]];
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_10__["TemplateRef"]) {
            /** @type {?} */
            var viewRef = content.createEmbeddedView(null);
            return [viewRef.rootNodes];
        }
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */
        var componentRef = factory.create(this.injector);
        return [[componentRef.location.nativeElement]];
    };
    FivOverlayService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FivOverlayService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["RendererFactory2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injector"] }
    ]; };
    /** @nocollapse */ FivOverlayService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["defineInjectable"])({ factory: function FivOverlayService_Factory() { return new FivOverlayService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_10__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_10__["INJECTOR"])); }, token: FivOverlayService, providedIn: "root" });
    return FivOverlayService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivOverlay = /** @class */ (function () {
    function FivOverlay(overlay) {
        this.overlay = overlay;
        this._open = false;
    }
    /**
     * @param {?=} priority
     * @return {?}
     */
    FivOverlay.prototype.show = /**
     * @param {?=} priority
     * @return {?}
     */
    function (priority) {
        if (!this.componentRef) {
            this.componentRef = this.overlay.createOverlay(FivOverlayContent, this.ngContent);
            this._open = true;
            this.componentRef.instance.priority = priority;
            return this.componentRef.instance;
        }
    };
    /**
     * @return {?}
     */
    FivOverlay.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
            this._open = false;
        }
    };
    Object.defineProperty(FivOverlay.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    FivOverlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-overlay',
                    template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FivOverlay.ctorParameters = function () { return [
        { type: FivOverlayService }
    ]; };
    FivOverlay.propDecorators = {
        ngContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['content',] }],
        priority: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivOverlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageService = /** @class */ (function () {
    function ImageService() {
    }
    /**
     * @param {?} imgEl
     * @return {?}
     */
    ImageService.prototype.getAverageRGB = /**
     * @param {?} imgEl
     * @return {?}
     */
    function (imgEl) {
        /** @type {?} */
        var blockSize = 5;
        /** @type {?} */
        var // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 };
        /** @type {?} */
        var // for non-supporting envs
        canvas = document.createElement('canvas');
        /** @type {?} */
        var context = canvas.getContext && canvas.getContext('2d');
        /** @type {?} */
        var rgb = { r: 0, g: 0, b: 0 };
        /** @type {?} */
        var data;
        /** @type {?} */
        var width;
        /** @type {?} */
        var height;
        /** @type {?} */
        var length;
        /** @type {?} */
        var i = -4;
        /** @type {?} */
        var count = 0;
        if (!context) {
            return "rgb(" + defaultRGB.r + "," + defaultRGB.g + "," + defaultRGB.b + ")";
        }
        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
        context.drawImage(imgEl, 0, 0);
        try {
            data = context.getImageData(0, 0, width, height);
        }
        catch (e) {
            /* security error, img on diff domain */
            console.log('return default rgb', e);
            return "rgb(" + defaultRGB.r + "," + defaultRGB.g + "," + defaultRGB.b + ")";
        }
        length = data.data.length;
        while ((i += blockSize * 4) < length) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
        }
        // ~~ used to floor values
        rgb.r = Math.floor(rgb.r / count);
        rgb.g = Math.floor(rgb.g / count);
        rgb.b = Math.floor(rgb.b / count);
        return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    };
    ImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ImageService.ctorParameters = function () { return []; };
    /** @nocollapse */ ImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["defineInjectable"])({ factory: function ImageService_Factory() { return new ImageService(); }, token: ImageService, providedIn: "root" });
    return ImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivGalleryImage = /** @class */ (function () {
    function FivGalleryImage(gallery, imageService) {
        this.gallery = gallery;
        this.imageService = imageService;
        this.viewerState = 'in';
        this.backdropColor = 'rgb(0,0,0)';
    }
    /**
     * @return {?}
     */
    FivGalleryImage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FivGalleryImage.prototype.open = /**
     * @return {?}
     */
    function () {
        this.animationParams = this.getThumbnailPosition(this.image);
        console.log(this.animationParams);
        this.overlay.show(49999);
        this.backdropColor = this.imageService.getAverageRGB(this.image.nativeElement);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    FivGalleryImage.prototype.close = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.animationParams = this.animationParams = this.getThumbnailPosition(this.image);
        this.animationParams.translate = position.translate;
        this.viewerState = 'out';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivGalleryImage.prototype.handleViewerAnimation = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event.fromState, event.toState);
        if (event.fromState === 'void' && event.toState === 'in') {
            this.gallery.open(this.index, this);
        }
        if (event.fromState === 'hidden' && event.toState === 'out') {
            this.overlay.hide();
            this.viewerState = 'in';
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?=} progress
     * @return {?}
     */
    FivGalleryImage.prototype.getThumbnailPosition = /**
     * @private
     * @param {?} element
     * @param {?=} progress
     * @return {?}
     */
    function (element, progress) {
        /** @type {?} */
        var bounds = element.nativeElement.getBoundingClientRect();
        return {
            top: bounds.top,
            left: bounds.left,
            height: element.nativeElement.clientHeight,
            width: element.nativeElement.clientWidth
        };
    };
    FivGalleryImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-gallery-image',
                    template: "  <img #thumbnail [ngClass]=\"{'hidden': overlay.open}\" class=\"thumbnail\" [src]=\"src\" (click)=\"open()\">\n<fiv-overlay #overlay>\n\n  <div [style.backgroundColor]=\"backdropColor\" *ngIf=\"overlay.open && viewerState !== 'out'\" [@fade] class=\"backdrop\"></div>\n\n  <img *ngIf=\"overlay.open\" class=\"viewer-image\" (@image.done)=\"handleViewerAnimation($event)\"\n    [@image]=\"{ value: viewerState, params : animationParams}\" [src]=\"src\">\n\n</fiv-overlay>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('image', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => in', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    position: 'absolute',
                                    top: '{{top}}px',
                                    left: '{{left}}px',
                                    transform: 'translate(0%,0%)',
                                    height: '{{height}}px',
                                    width: '{{width}}px',
                                    opacity: 1,
                                    borderRadius: '*'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('160ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%,-50%)',
                                    height: '*',
                                    width: '*',
                                    opacity: 1,
                                    borderRadius: '0'
                                }))
                            ], { params: { top: '0', left: '0', height: '*', width: '*' } }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => out', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    position: 'absolute',
                                    top: '{{translate}}px',
                                    left: '50%',
                                    transform: 'translate(-50%,-50%)',
                                    height: '*',
                                    width: '*',
                                    opacity: 1,
                                    borderRadius: '0'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('175ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    position: 'absolute',
                                    top: '{{top}}px',
                                    left: '{{left}}px',
                                    transform: 'translate(0%,0%)',
                                    height: '{{height}}px',
                                    width: '{{width}}px',
                                    opacity: 1,
                                    borderRadius: '*'
                                })),
                            ], { params: { top: '0', left: '0', height: '*', width: '*', translate: '0' } }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0.3, offset: 0.75 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0.97, offset: 1 })
                                ]))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0.97 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0.97, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0.6, offset: 0.8 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, offset: 1 })
                                ]))
                            ])
                        ])
                    ],
                    styles: [":host{display:block;--max-height:100%;--border-radius:0px}.backdrop{width:100vw;height:100vh;opacity:.97;position:absolute;transition:background-color .3s}.thumbnail{-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;display:block;height:auto;max-height:var(--max-height);width:100%;border-radius:var(--border-radius)}.hidden{opacity:0}.viewer-image{-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:auto;max-height:100%;width:auto;max-width:100%;border-radius:var(--border-radius)}"]
                }] }
    ];
    /** @nocollapse */
    FivGalleryImage.ctorParameters = function () { return [
        { type: FivGallery, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Host"] }] },
        { type: ImageService }
    ]; };
    FivGalleryImage.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['thumbnail',] }],
        overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['overlay',] }]
    };
    return FivGalleryImage;
}());
var Position = /** @class */ (function () {
    function Position() {
    }
    return Position;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Key = {
    Backspace: 8,
    Tab: 9,
    Enter: 13,
    Shift: 16,
    Ctrl: 17,
    Alt: 18,
    PauseBreak: 19,
    CapsLock: 20,
    Escape: 27,
    Space: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    LeftArrow: 37,
    UpArrow: 38,
    RightArrow: 39,
    DownArrow: 40,
    Insert: 45,
    Delete: 46,
    Zero: 48,
    ClosedParen: 48,
    One: 49,
    ExclamationMark: 49,
    Two: 50,
    AtSign: 50,
    Three: 51,
    PoundSign: 51,
    Hash: 51,
    Four: 52,
    DollarSign: 52,
    Five: 53,
    PercentSign: 53,
    Six: 54,
    Caret: 54,
    Hat: 54,
    Seven: 55,
    Ampersand: 55,
    Eight: 56,
    Star: 56,
    Asterik: 56,
    Nine: 57,
    OpenParen: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    LeftWindowKey: 91,
    RightWindowKey: 92,
    SelectKey: 93,
    Numpad0: 96,
    Numpad1: 97,
    Numpad2: 98,
    Numpad3: 99,
    Numpad4: 100,
    Numpad5: 101,
    Numpad6: 102,
    Numpad7: 103,
    Numpad8: 104,
    Numpad9: 105,
    Multiply: 106,
    Add: 107,
    Subtract: 109,
    DecimalPoint: 110,
    Divide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NumLock: 144,
    ScrollLock: 145,
    SemiColon: 186,
    Equals: 187,
    Comma: 188,
    Dash: 189,
    Period: 190,
    UnderScore: 189,
    PlusSign: 187,
    ForwardSlash: 191,
    Tilde: 192,
    GraveAccent: 192,
    OpenBracket: 219,
    ClosedBracket: 221,
    Quote: 222,
};
Key[Key.Backspace] = 'Backspace';
Key[Key.Tab] = 'Tab';
Key[Key.Enter] = 'Enter';
Key[Key.Shift] = 'Shift';
Key[Key.Ctrl] = 'Ctrl';
Key[Key.Alt] = 'Alt';
Key[Key.PauseBreak] = 'PauseBreak';
Key[Key.CapsLock] = 'CapsLock';
Key[Key.Escape] = 'Escape';
Key[Key.Space] = 'Space';
Key[Key.PageUp] = 'PageUp';
Key[Key.PageDown] = 'PageDown';
Key[Key.End] = 'End';
Key[Key.Home] = 'Home';
Key[Key.LeftArrow] = 'LeftArrow';
Key[Key.UpArrow] = 'UpArrow';
Key[Key.RightArrow] = 'RightArrow';
Key[Key.DownArrow] = 'DownArrow';
Key[Key.Insert] = 'Insert';
Key[Key.Delete] = 'Delete';
Key[Key.Zero] = 'Zero';
Key[Key.ClosedParen] = 'ClosedParen';
Key[Key.One] = 'One';
Key[Key.ExclamationMark] = 'ExclamationMark';
Key[Key.Two] = 'Two';
Key[Key.AtSign] = 'AtSign';
Key[Key.Three] = 'Three';
Key[Key.PoundSign] = 'PoundSign';
Key[Key.Hash] = 'Hash';
Key[Key.Four] = 'Four';
Key[Key.DollarSign] = 'DollarSign';
Key[Key.Five] = 'Five';
Key[Key.PercentSign] = 'PercentSign';
Key[Key.Six] = 'Six';
Key[Key.Caret] = 'Caret';
Key[Key.Hat] = 'Hat';
Key[Key.Seven] = 'Seven';
Key[Key.Ampersand] = 'Ampersand';
Key[Key.Eight] = 'Eight';
Key[Key.Star] = 'Star';
Key[Key.Asterik] = 'Asterik';
Key[Key.Nine] = 'Nine';
Key[Key.OpenParen] = 'OpenParen';
Key[Key.A] = 'A';
Key[Key.B] = 'B';
Key[Key.C] = 'C';
Key[Key.D] = 'D';
Key[Key.E] = 'E';
Key[Key.F] = 'F';
Key[Key.G] = 'G';
Key[Key.H] = 'H';
Key[Key.I] = 'I';
Key[Key.J] = 'J';
Key[Key.K] = 'K';
Key[Key.L] = 'L';
Key[Key.M] = 'M';
Key[Key.N] = 'N';
Key[Key.O] = 'O';
Key[Key.P] = 'P';
Key[Key.Q] = 'Q';
Key[Key.R] = 'R';
Key[Key.S] = 'S';
Key[Key.T] = 'T';
Key[Key.U] = 'U';
Key[Key.V] = 'V';
Key[Key.W] = 'W';
Key[Key.X] = 'X';
Key[Key.Y] = 'Y';
Key[Key.Z] = 'Z';
Key[Key.LeftWindowKey] = 'LeftWindowKey';
Key[Key.RightWindowKey] = 'RightWindowKey';
Key[Key.SelectKey] = 'SelectKey';
Key[Key.Numpad0] = 'Numpad0';
Key[Key.Numpad1] = 'Numpad1';
Key[Key.Numpad2] = 'Numpad2';
Key[Key.Numpad3] = 'Numpad3';
Key[Key.Numpad4] = 'Numpad4';
Key[Key.Numpad5] = 'Numpad5';
Key[Key.Numpad6] = 'Numpad6';
Key[Key.Numpad7] = 'Numpad7';
Key[Key.Numpad8] = 'Numpad8';
Key[Key.Numpad9] = 'Numpad9';
Key[Key.Multiply] = 'Multiply';
Key[Key.Add] = 'Add';
Key[Key.Subtract] = 'Subtract';
Key[Key.DecimalPoint] = 'DecimalPoint';
Key[Key.Divide] = 'Divide';
Key[Key.F1] = 'F1';
Key[Key.F2] = 'F2';
Key[Key.F3] = 'F3';
Key[Key.F4] = 'F4';
Key[Key.F5] = 'F5';
Key[Key.F6] = 'F6';
Key[Key.F7] = 'F7';
Key[Key.F8] = 'F8';
Key[Key.F9] = 'F9';
Key[Key.F10] = 'F10';
Key[Key.F11] = 'F11';
Key[Key.F12] = 'F12';
Key[Key.NumLock] = 'NumLock';
Key[Key.ScrollLock] = 'ScrollLock';
Key[Key.SemiColon] = 'SemiColon';
Key[Key.Equals] = 'Equals';
Key[Key.Comma] = 'Comma';
Key[Key.Dash] = 'Dash';
Key[Key.Period] = 'Period';
Key[Key.UnderScore] = 'UnderScore';
Key[Key.PlusSign] = 'PlusSign';
Key[Key.ForwardSlash] = 'ForwardSlash';
Key[Key.Tilde] = 'Tilde';
Key[Key.GraveAccent] = 'GraveAccent';
Key[Key.OpenBracket] = 'OpenBracket';
Key[Key.ClosedBracket] = 'ClosedBracket';
Key[Key.Quote] = 'Quote';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivGallery = /** @class */ (function () {
    function FivGallery(domCtrl, renderer, animation, change, platform, document, imageService) {
        this.domCtrl = domCtrl;
        this.renderer = renderer;
        this.animation = animation;
        this.change = change;
        this.platform = platform;
        this.document = document;
        this.imageService = imageService;
        // properties for the slides
        this.activeIndex = 0;
        this.options = {
            zoom: true,
            initialSlide: 0
        };
        this.controlsVisible = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FivGallery.prototype.keyEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.overlay && this.overlay.open && this.initialImage && this.initialImage.viewerState === 'hidden') {
            this.handleKeyboardEvents(event);
        }
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateImages();
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.updateImages = /**
     * @return {?}
     */
    function () {
        this.images.forEach(function (img, i) { return img.index = i; });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivGallery.prototype.handleKeyboardEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === Key.RightArrow) {
            this.next();
            return;
        }
        if (event.keyCode === Key.LeftArrow) {
            this.prev();
            return;
        }
        if (event.keyCode === Key.DownArrow || event.keyCode === Key.Escape) {
            this.close();
            return;
        }
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.open && this.initialImage && this.initialImage.viewerState === 'hidden') {
            this.slides.slideNext();
        }
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.open && this.initialImage && this.initialImage.viewerState === 'hidden') {
            this.slides.slidePrev();
        }
    };
    /**
     * @param {?} index
     * @param {?} initial
     * @return {?}
     */
    FivGallery.prototype.open = /**
     * @param {?} index
     * @param {?} initial
     * @return {?}
     */
    function (index, initial) {
        this.options.initialSlide = index;
        this.overlay.show(50000);
        this.initialImage = initial;
        this.showControls();
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeFromPullDown(0);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FivGallery.prototype.closeFromPullDown = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.transformSlides(0);
        /** @type {?} */
        var position = this.getImagePosition(this.images.toArray()[this.activeIndex].image, progress);
        console.log('close from position', position);
        this.initialImage.close(position);
        if (this.inFullscreen) {
            this.closeFullscreen();
        }
        this.slidesLoaded = false;
        this.overlay.hide();
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FivGallery.prototype.resetPan = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.resetSlides(progress);
    };
    /**
     * @private
     * @param {?} element
     * @param {?=} offset
     * @return {?}
     */
    FivGallery.prototype.getImagePosition = /**
     * @private
     * @param {?} element
     * @param {?=} offset
     * @return {?}
     */
    function (element, offset) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var bounds = element.nativeElement.getBoundingClientRect();
        return {
            top: bounds.top,
            left: bounds.left,
            height: element.nativeElement.clientHeight,
            width: element.nativeElement.clientWidth,
            translate: this.platform.height() / 2 + offset * 120
        };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FivGallery.prototype.transformSlides = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        var _this = this;
        if (this.controlsVisible) {
            this.hideControls();
        }
        this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.viewer.nativeElement, 'transform', "translateY(" + progress * 120 + "px)");
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FivGallery.prototype.resetSlides = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        var _this = this;
        /** @type {?} */
        var reset = this.animation.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: "translateY(" + progress * 120 + "px)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: "translateY(0px)" }))
        ]);
        /** @type {?} */
        var animation = reset.create(this.viewer.nativeElement);
        animation.play();
        animation.onDone(function () {
            animation.destroy();
            _this.transformSlides(0);
            _this.showControls();
        });
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.slideDidChange = /**
     * @return {?}
     */
    function () {
        this.activeIndex = this.swiper.nativeElement.swiper.activeIndex;
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.ionSlideNextStart = /**
     * @return {?}
     */
    function () {
        if (this.slidesLoaded) {
            this.updateBackdrop(this.activeIndex + 1);
        }
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.ionSlidePrevStart = /**
     * @return {?}
     */
    function () {
        if (this.slidesLoaded) {
            this.updateBackdrop(this.activeIndex - 1);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FivGallery.prototype.updateBackdrop = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.initialImage.backdropColor = this.imageService.getAverageRGB(this.images.toArray()[index].image.nativeElement);
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.onSlidesLoad = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slidesLoaded = true;
        this.activeIndex = this.swiper.nativeElement.swiper.activeIndex;
        this.initialImage.viewerState = 'hidden';
        this.swiper.nativeElement.swiper.on('click', function () {
            _this.handleSingleTap();
        });
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.fullscreen = /**
     * @return {?}
     */
    function () {
        if (this.inFullscreen) {
            this.closeFullscreen();
        }
        else {
            this.openFullscreen();
        }
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.openFullscreen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        }
        else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari and Opera */
            elem['webkitRequestFullscreen']();
        }
        else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
        this.inFullscreen = true;
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.closeFullscreen = /**
     * @return {?}
     */
    function () {
        this.inFullscreen = false;
        if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
        }
        else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
        }
        else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
        }
        else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
        }
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.zoom = /**
     * @return {?}
     */
    function () {
        if (this.zoomedIn) {
            this.zoomOut();
        }
        else {
            this.zoomIn();
        }
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.zoomIn = /**
     * @return {?}
     */
    function () {
        this.swiper.nativeElement.swiper.zoom.in();
        this.zoomedIn = true;
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        this.swiper.nativeElement.swiper.zoom.out();
        this.zoomedIn = false;
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.handleSingleTap = /**
     * @return {?}
     */
    function () {
        this.controlsVisible = !this.controlsVisible;
        console.log('controlsVisible', this.controlsVisible);
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.hideControls = /**
     * @return {?}
     */
    function () {
        this.controlsVisible = false;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    FivGallery.prototype.showControls = /**
     * @return {?}
     */
    function () {
        this.controlsVisible = true;
        this.change.detectChanges();
    };
    FivGallery.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-gallery',
                    template: "<ng-content></ng-content>\n<fiv-overlay #overlay>\n\n  <ion-toolbar [@slideDown] *ngIf=\"controlsVisible\" class=\"header\" color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" [name]=\"'close'\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"fullscreen()\">\n        <fiv-icon slot=\"icon-only\" [name]=\"inFullscreen ? 'contract' : 'expand'\"></fiv-icon>\n      </ion-button>\n      <ion-button (click)=\"zoom()\">\n        <fiv-icon slot=\"icon-only\" [name]=\"zoomedIn ? 'remove' : 'add'\"></fiv-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ng-container *fivIf=\"['desktop']\">\n    <ion-fab [@scale] *ngIf=\"controlsVisible\" vertical=\"center\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"light\" (click)=\"prev()\" [disabled]=\"activeIndex === 0\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n  <div #viewer class=\"viewer\" fivPull [maxPullHeight]=\"160\" [minPullHeight]=\"120\" (fivPull)=\"transformSlides($event)\"\n    (fivRefresh)=\"closeFromPullDown($event)\" (fivCancel)=\"resetPan($event)\" [enableScroll]=\"true\">\n    <ion-slides #slider *ngIf=\"overlay.open\" [ngClass]=\"[initialImage?.viewerState]\"\n      (ionSlideDidChange)=\"slideDidChange()\" (ionSlideNextStart)=\"ionSlideNextStart()\"\n      (ionSlidePrevStart)=\"ionSlidePrevStart()\"\n      (ionSlidesDidLoad)=\"onSlidesLoad()\" [options]=\"options\">\n      <ion-slide *ngFor=\"let image of images; let i = index\">\n        <div class=\"swiper-zoom-container\">\n          <img [ngClass]=\"{'instant': activeIndex !== i}\" [src]=\"image.src\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <ng-container *fivIf=\"['desktop']\">\n    <ion-fab [@scale] *ngIf=\"controlsVisible\" vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"light\" (click)=\"next()\" [disabled]=\"activeIndex === images.length - 1\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n  <ion-toolbar [@slideUp] *ngIf=\"controlsVisible\" class=\"footer\" color=\"transparent\">\n  </ion-toolbar>\n\n\n</fiv-overlay>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('scale', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'scale(1)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'scale(1)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('slideUp', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'translateY(100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'translateY(0%)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'translateY(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'translateY(100%)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('slideDown', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'translateY(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'translateY(-100%)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'translateY(-100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'translateY(0%)' }))
                            ])
                        ])
                    ],
                    styles: [".viewer{width:100vw;height:100vh}.viewer ion-slides{height:100%}.viewer img{height:auto;max-height:100%;width:auto;max-width:100%}.viewer img.instant{transition-duration:0s!important}.backdrop{background:rgba(0,0,0,.97);width:100vw;height:100vh;position:absolute}ion-toolbar{position:absolute}ion-toolbar fiv-icon,ion-toolbar ion-button,ion-toolbar ion-icon,ion-toolbar ion-title{color:#fff}ion-toolbar.footer{bottom:0}ion-slides.in,ion-slides.out{visibility:hidden}"]
                }] }
    ];
    /** @nocollapse */
    FivGallery.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["DomController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Renderer2"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: ImageService }
    ]; };
    FivGallery.propDecorators = {
        overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['overlay',] }],
        viewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['viewer',] }],
        swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['slider', { read: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] },] }],
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['slider',] }],
        images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["forwardRef"])(function () { return FivGalleryImage; }), { descendants: true },] }],
        keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostListener"], args: ['window:keyup', ['$event'],] }]
    };
    return FivGallery;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivRoutingStateService = /** @class */ (function () {
    function FivRoutingStateService(router, navCtrl, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.history = [];
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FivRoutingStateService.prototype.loadRouting = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        this.config = config;
        this.handleAndroidBackButton();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (_a) {
            var urlAfterRedirects = _a.urlAfterRedirects;
            if (urlAfterRedirects === _this.getPreviousUrl(_this.config.root)) {
                console.log('went back');
                _this.pop();
                _this.pop();
            }
            // add url to history
            _this.history = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(_this.history, [urlAfterRedirects]);
            if (_this.config && _this.config.clearOn) {
                /** @type {?} */
                var clear = _this.config.clearOn.some(function (s) { return s === urlAfterRedirects; });
                if (clear) {
                    _this.clearHistory(urlAfterRedirects);
                }
                console.log(_this.history);
            }
        });
    };
    /**
     * @return {?}
     */
    FivRoutingStateService.prototype.handleAndroidBackButton = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.platform.backButton
            .subscribeWithPriority(9999, function () {
            if (_this.getHistory().length <= 1) {
                // close the app because we are at root level
                navigator['app'].exitApp();
            }
            else {
                // go back
                _this.goBack();
            }
        });
    };
    /**
     * @return {?}
     */
    FivRoutingStateService.prototype.getHistory = /**
     * @return {?}
     */
    function () {
        return this.history;
    };
    /**
     * @param {?=} defaultHref
     * @return {?}
     */
    FivRoutingStateService.prototype.getPreviousUrl = /**
     * @param {?=} defaultHref
     * @return {?}
     */
    function (defaultHref) {
        if (defaultHref === void 0) { defaultHref = '/'; }
        return this.history[this.history.length - 2] || defaultHref;
    };
    /**
     * @return {?}
     */
    FivRoutingStateService.prototype.pop = /**
     * @return {?}
     */
    function () {
        return this.history.pop();
    };
    /**
     * @param {?} fromUrl
     * @return {?}
     */
    FivRoutingStateService.prototype.clearHistory = /**
     * @param {?} fromUrl
     * @return {?}
     */
    function (fromUrl) {
        var _this = this;
        console.log('clear history from', fromUrl);
        this.history = this.history.filter(function (h) { return _this.config.clearOn.some(function (s) { return s === h; }); });
        if (fromUrl !== this.config.root) {
            this.history.push(fromUrl);
        }
        this.history = this.history
            .reverse()
            .filter(function (item, pos, self) {
            return self.indexOf(item) === pos;
        })
            .reverse();
        if (this.history[0] !== this.config.root) {
            this.history = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])([this.config.root], this.history);
        }
    };
    /**
     * @return {?}
     */
    FivRoutingStateService.prototype.getCurrentUrl = /**
     * @return {?}
     */
    function () {
        return this.history[this.history.length - 1];
    };
    /**
     * @param {?=} defaultHref
     * @return {?}
     */
    FivRoutingStateService.prototype.goBack = /**
     * @param {?=} defaultHref
     * @return {?}
     */
    function (defaultHref) {
        if (defaultHref === void 0) { defaultHref = '/'; }
        this.navCtrl.navigateBack(this.getPreviousUrl(defaultHref));
    };
    FivRoutingStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FivRoutingStateService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    /** @nocollapse */ FivRoutingStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["defineInjectable"])({ factory: function FivRoutingStateService_Factory() { return new FivRoutingStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"])); }, token: FivRoutingStateService, providedIn: "root" });
    return FivRoutingStateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivBackButton = /** @class */ (function () {
    function FivBackButton(routingState) {
        this.routingState = routingState;
        this.icon = 'arrow-back';
        this.defaultHref = '/';
    }
    /**
     * @return {?}
     */
    FivBackButton.prototype.buttonClick = /**
     * @return {?}
     */
    function () {
        this.routingState.goBack(this.defaultHref);
    };
    FivBackButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-back-button',
                    template: "<ion-button (click)=\"buttonClick()\">\n  <fiv-icon [color]=\"color\" [name]=\"'arrow-back'\"></fiv-icon>\n</ion-button>\n",
                    styles: [":host{display:block;padding-top:.2em}"]
                }] }
    ];
    /** @nocollapse */
    FivBackButton.ctorParameters = function () { return [
        { type: FivRoutingStateService }
    ]; };
    FivBackButton.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        defaultHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivBackButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = false;
        this.isComplete = false;
        this.loadChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](this.loading);
        this.completeChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](this.isComplete);
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
        this.isComplete = true;
        this.completeChange.next(this.isComplete);
    };
    LoadingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return []; };
    /** @nocollapse */ LoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["defineInjectable"])({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
    return LoadingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivLoadingProgressBar = /** @class */ (function () {
    function FivLoadingProgressBar(loadingService, builder) {
        this.loadingService = loadingService;
        this.builder = builder;
        this.loading = false;
        this.global = false;
        this.isComplete = false;
        this.progress = 0;
        this.verticalAlign = 'top';
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivDoneShrinking = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.animating = false;
    }
    /**
     * @return {?}
     */
    FivLoadingProgressBar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.global) {
            this.loadingService.completeChange.subscribe(function (isComplete) {
                if (isComplete) {
                    _this.complete(null);
                }
            });
        }
    };
    /**
     * @return {?}
     */
    FivLoadingProgressBar.prototype.ngOnDestroy = /**
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
    FivLoadingProgressBar.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
    };
    /**
     * @return {?}
     */
    FivLoadingProgressBar.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    FivLoadingProgressBar.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        if (this.isComplete) {
            this.isComplete = false;
        }
    };
    /**
     * @param {?=} param
     * @return {?}
     */
    FivLoadingProgressBar.prototype.complete = /**
     * @param {?=} param
     * @return {?}
     */
    function (param) {
        this.param = param;
        this.isComplete = true;
        this.fillIn(850, 'ease-out');
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    FivLoadingProgressBar.prototype.fillAnimationComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        if (isComplete) {
            this.fivComplete.emit(this.param);
            this.isComplete = false;
            this.param = null;
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
    FivLoadingProgressBar.prototype.setProgress = /**
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
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FivLoadingProgressBar.prototype.incrementBy = /**
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
    FivLoadingProgressBar.prototype.decrementBy = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.setProgress(progress + this.progress);
    };
    /**
     * @param {?} ms
     * @param {?=} easing
     * @return {?}
     */
    FivLoadingProgressBar.prototype.fillIn = /**
     * @param {?} ms
     * @param {?=} easing
     * @return {?}
     */
    function (ms, easing) {
        var _this = this;
        if (easing === void 0) { easing = ''; }
        // first define a reusable animation
        /** @type {?} */
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: this.progress }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(ms + ("ms " + easing), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: '100%' }))
        ]);
        // use the returned factory object to create a player
        /** @type {?} */
        var player = myAnimation.create(this.linear.nativeElement);
        player.play();
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, ms / (100))
            .subscribe(function () {
            if (_this.progress >= 100) {
                return t.unsubscribe();
            }
            _this.progress++;
        });
        player.onDone(function () {
            _this.fillAnimationComplete(true);
            _this.stopProgressAnimation();
        });
        this.stopProgressAnimation();
        this.animating = true;
        this._progressPlayer = player;
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    FivLoadingProgressBar.prototype.shrinkIn = /**
     * @param {?} ms
     * @return {?}
     */
    function (ms) {
        var _this = this;
        // first define a reusable animation
        this.progress = 100;
        /** @type {?} */
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: this.progress + "%" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: 0 }))
        ]);
        // use the returned factory object to create a player
        /** @type {?} */
        var player = myAnimation.create(this.linear.nativeElement);
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, ms / (100))
            .subscribe(function () {
            if (_this.progress <= 0) {
                return t.unsubscribe();
            }
            _this.progress--;
        });
        player.play();
        player.onDone(function () {
            if (_this.animating) {
                _this.fivDoneShrinking.emit(true);
                _this.stopProgressAnimation();
            }
        });
        this.stopProgressAnimation();
        this.animating = true;
        this._progressPlayer = player;
    };
    /**
     * @return {?}
     */
    FivLoadingProgressBar.prototype.stopProgressAnimation = /**
     * @return {?}
     */
    function () {
        if (this._progressPlayer) {
            this._progressPlayer.destroy();
            this._progressPlayer = null;
            this.animating = false;
        }
    };
    FivLoadingProgressBar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-loading-progress-bar',
                    template: "<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\" [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" >\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <!-- <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div> -->\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n<div #linear [@progressAnimLinear] class=\"progress\"  [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" ></div>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('progressAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('progressAnimLinear', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('65ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    width: '0px'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('850ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: '100%' }))
                            ]),
                        ])
                    ],
                    styles: [":host{--background-progress-bar:var(--ion-color-primary);--color-spin-0:var(--ion-color-primary-shade);--color-spin-25:var(--ion-color-primary-shade);--color-spin-50:var(--ion-color-primary-shade);--color-spin-75:var(--ion-color-primary-shade);--color-spin-100:var(--ion-color-primary-shade)}.slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.progress{position:absolute;height:5px;width:0;overflow-x:hidden;z-index:5000;background:var(--background-progress-bar);transition:240ms}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%{background-color:var(--color-spin-0)}25%{background-color:var(--color-spin-25)}50%{background-color:var(--color-spin-50)}75%{background-color:var(--color-spin-75)}100%{background-color:var(--color-spin-100)}}@keyframes colorspin{0%{background-color:var(--color-spin-0)}25%{background-color:var(--color-spin-25)}50%{background-color:var(--color-spin-50)}75%{background-color:var(--color-spin-75)}100%{background-color:var(--color-spin-100)}}.top{top:0;left:0}.bottom{bottom:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    FivLoadingProgressBar.ctorParameters = function () { return [
        { type: LoadingService },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"] }
    ]; };
    FivLoadingProgressBar.propDecorators = {
        global: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        isComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivDoneShrinking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['bar',] }],
        linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['linear',] }]
    };
    return FivLoadingProgressBar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivDialog = /** @class */ (function () {
    function FivDialog(platform) {
        this.platform = platform;
        this.verticalAlign = 'top';
        this.horizontalAlign = 'center';
        this.shape = 'card';
        this.backdrop = true;
        // animation data
        this.inDuration = 160;
        this.outDuration = 120;
        this.outPosition = '-100%';
        this.toPosition = '0px';
        this.translate = '0px';
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivDurationOver = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.dialogState = 'out';
    }
    /**
     * @return {?}
     */
    FivDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FivDialog.prototype.open = /**
     * @return {?}
     */
    function () {
        this.overlay.show();
        this.dialogState = this.verticalAlign;
        if (this.duration) {
            this.bar.shrinkIn(this.duration);
        }
    };
    /**
     * @return {?}
     */
    FivDialog.prototype.doneShrinking = /**
     * @return {?}
     */
    function () {
        this.fivDurationOver.emit(this);
    };
    /**
     * @return {?}
     */
    FivDialog.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogState = 'out';
        this.bar.stopProgressAnimation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivDialog.prototype.animationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState !== 'void' && event.toState === 'out') {
            this.overlay.hide();
            this.fivClose.emit(this);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivDialog.prototype.backdropAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'out' && event.toState !== 'void') {
            this.fivOpen.emit(this);
        }
    };
    FivDialog.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-dialog',
                    template: "<fiv-overlay #overlay>\n  <div *ngIf=\"backdrop\" (@fade.done)=\"backdropAnimDone($event)\"\n    [@fade]=\"{value: dialogState, params: { opacity: 0, inDuration: '120ms' }}\" (click)=\"close()\" class=\"backdrop\">\n  </div>\n  <div #dialog class=\"dialog\" [ngClass]=\"[verticalAlign, shape]\">\n    <ion-grid>\n      <ion-row *ngIf=\"horizontalAlign === 'left'\">\n        <ion-col size=\"12\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"5\" sizeXl=\"4\">\n          <ng-container>\n            <ng-container *ngTemplateOutlet=\"card\"></ng-container>\n          </ng-container>\n        </ion-col>\n        <ion-col size=\"12\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"7\" sizeXl=\"8\">\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"horizontalAlign === 'center'\">\n        <ion-col size=\"12\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"3\" sizeLg=\"3\" sizeXl=\"3\">\n        </ion-col>\n        <ion-col size=\"12\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"6\" sizeXl=\"6\">\n          <ng-container>\n            <ng-container *ngTemplateOutlet=\"card\"></ng-container>\n          </ng-container>\n        </ion-col>\n        <ion-col size=\"12\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"3\" sizeLg=\"3\" sizeXl=\"3\">\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"horizontalAlign === 'right'\">\n        <ion-col size=\"12\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"7\" sizeXl=\"8\">\n        </ion-col>\n        <ion-col size=\"12\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"5\" sizeXl=\"4\">\n          <ng-container>\n            <ng-container *ngTemplateOutlet=\"card\"></ng-container>\n          </ng-container>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</fiv-overlay>\n\n<ng-template #card>\n  <ion-card [@fade]=\"{value: dialogState, params: { opacity: 0, inDuration: '120ms' }}\"\n    [@slide]=\"{value: dialogState, params: {top: outPosition, inDuration: inDuration + 'ms',outDuration: outDuration + 'ms', toPosition: toPosition, translate: translate}}\"\n    (@slide.done)=\"animationDone($event)\">\n    <fiv-loading-progress-bar [verticalAlign]=\"verticalAlign === 'top' ? 'bottom' : 'top'\" (fivDoneShrinking)=\"doneShrinking()\"\n      #bar></fiv-loading-progress-bar>\n    <ng-content></ng-content>\n  </ion-card>\n</ng-template>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('slide', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('out => top', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '0', transform: 'translateY(-100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('220ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('out => center', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '50%', transform: 'translateY(-50%) scale(0)', opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('220ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '50%', transform: 'translateY(-50%) scale(1)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('out => bottom', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ bottom: '0', transform: 'translateY(100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('220ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('top => out', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '0', transform: 'translateY(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '0', transform: 'translateY(-100%)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('center => out', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '50%', transform: 'translateY(-50%) scale(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '50%', transform: 'translateY(-50%) scale(0)', opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('bottom => out', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ bottom: '0', transform: 'translateY(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ bottom: '0', transform: 'translateY(100%)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ bottom: '0', transform: 'translateY(0)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '0', transform: 'translateY(0)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ top: '50%', transform: 'translateY(-50%)' })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('out => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '{{opacity}}' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('{{inDuration}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1' }))
                            ], { params: { opacity: 0, inDuration: '250ms' } }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => out', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('{{outDuration}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }))
                            ], { params: { opacity: 0, outDuration: '200ms' } }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }))
                        ])
                    ],
                    styles: ["ion-grid{--ion-grid-padding:0;--ion-grid-column-padding:0}.dialog{--ion-item-background:#fff;position:absolute;width:100%}.dialog.fill .sc-ion-card-ios-h,.dialog.fill .sc-ion-card-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.dialog.fill.top .sc-ion-card-ios-h,.dialog.fill.top .sc-ion-card-md-h{border-top-left-radius:0;border-top-right-radius:0}.dialog.fill.bottom .sc-ion-card-ios-h,.dialog.fill.bottom .sc-ion-card-md-h{border-bottom-left-radius:0;border-bottom-right-radius:0}.dialog.top{top:0}.dialog.center{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dialog.bottom{top:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.backdrop{width:100%;height:100%;background:rgba(0,0,0,.2);position:absolute}"]
                }] }
    ];
    /** @nocollapse */
    FivDialog.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    FivDialog.propDecorators = {
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        horizontalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        inDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        outDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivDurationOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: [FivOverlay,] }],
        bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: [FivLoadingProgressBar,] }],
        dialogRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['dialog',] }]
    };
    return FivDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivDialogService = /** @class */ (function () {
    function FivDialogService(overlay) {
        this.overlay = overlay;
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    FivDialogService.prototype.openDialog = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        /** @type {?} */
        var c = this.overlay.createOverlay(FivDialog, content);
        c.instance.verticalAlign = options ? options.verticalAlign : 'top';
        c.instance.verticalAlign = options ? options.verticalAlign : 'center';
        c.instance.backdrop = options ? options.backdrop : true;
        c.instance.duration = options ? options.duration : 0;
        c.instance.shape = options ? options.shape : 'card';
        c.instance.open();
        return c;
    };
    FivDialogService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FivDialogService.ctorParameters = function () { return [
        { type: FivOverlayService }
    ]; };
    /** @nocollapse */ FivDialogService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["defineInjectable"])({ factory: function FivDialogService_Factory() { return new FivDialogService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(FivOverlayService)); }, token: FivDialogService, providedIn: "root" });
    return FivDialogService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivNetworkStatus = /** @class */ (function () {
    function FivNetworkStatus() {
        this.visible = true;
        this.status = 'online';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FivNetworkStatus.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivNetworkStatus.prototype.show = /**
     * @return {?}
     */
    function () {
        this.visible = true;
    };
    /**
     * @return {?}
     */
    FivNetworkStatus.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.visible = false;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    FivNetworkStatus.prototype.setStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.status = status;
    };
    /**
     * @return {?}
     */
    FivNetworkStatus.prototype.FivNetworkStatusClicked = /**
     * @return {?}
     */
    function () {
        this.onClick.emit(this);
    };
    FivNetworkStatus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-network-status',
                    template: "<ion-chip [@status] (click)=\"FivNetworkStatusClicked()\" *ngIf=\"visible\">\n  <fiv-icon [indicatorValue]=\"-1\" [fivCenter] [off]=\"status === 'offline'\" name=\"cloud\"></fiv-icon>\n</ion-chip>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('status', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('550ms 200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }))
                            ]),
                        ])
                    ],
                    styles: [":host{position:absolute;top:66px;right:8px}ion-chip{width:56px}fiv-icon{--fiv-color-icon:var(--ion-color-dark)}"]
                }] }
    ];
    /** @nocollapse */
    FivNetworkStatus.ctorParameters = function () { return []; };
    return FivNetworkStatus;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivStep = /** @class */ (function () {
    function FivStep() {
        this.isLast = false;
        this.open = false;
        this.title = '';
        this.subtitle = '';
    }
    /**
     * @return {?}
     */
    FivStep.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FivStep.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-step',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FivStep.ctorParameters = function () { return []; };
    FivStep.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["TemplateRef"],] }]
    };
    return FivStep;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivStepHeader = /** @class */ (function () {
    function FivStepHeader() {
        this.iconState = 'normal';
    }
    /**
     * @return {?}
     */
    FivStepHeader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    FivStepHeader.prototype.changeIconAndReveal = /**
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
    FivStepHeader.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.iconState = 'rotate';
    };
    /**
     * @return {?}
     */
    FivStepHeader.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.icon = this.tempIcon;
    };
    FivStepHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-step-header',
                    template: "<div class=\"number-container\">\n  <span *ngIf=\"index && !icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\">{{index}}</span>\n  <ion-icon *ngIf=\"icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\"\n    [name]=\"icon\"></ion-icon>\n</div>\n<div class=\"step-content\">\n  <ng-content>\n  </ng-content>\n</div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
                        ])
                    ],
                    styles: [":host{display:block;width:100%;height:72px;align-items:center;position:relative;padding-top:8px}.number-container{width:24px;height:24px;border-radius:100%;position:absolute;left:16px;background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}.step-content{padding-left:56px}"]
                }] }
    ];
    /** @nocollapse */
    FivStepHeader.ctorParameters = function () { return []; };
    FivStepHeader.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivStepHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivExpandable = /** @class */ (function () {
    function FivExpandable(change) {
        this.change = change;
        this.isOpen = false;
        this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FivExpandable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivExpandable.prototype.open = /**
     * @return {?}
     */
    function () {
        this.fivWillOpen.emit(this);
        this.isOpen = true;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    FivExpandable.prototype.toggle = /**
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
     * @param {?=} param
     * @return {?}
     */
    FivExpandable.prototype.close = /**
     * @param {?=} param
     * @return {?}
     */
    function (param) {
        this.param = param;
        this.fivWillClose.emit(this);
        this.isOpen = false;
        this.change.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivExpandable.prototype.onAnimationEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'closed') {
            this.fivDidOpen.emit(this);
        }
        else if (event.fromState === 'open') {
            this.fivDidClose.emit({ expandable: this, param: this.param });
            this.param = null;
        }
    };
    FivExpandable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-expandable',
                    template: "<div>\n  <ng-content select=\"[header]\"></ng-content>\n  <div [@listAnim]=\"{value: isOpen ? 'open' : 'closed', params: timingFunction ? {time: timingFunction} : {}}\" (@listAnim.done)=\"onAnimationEnd($event)\"\n    style=\"overflow: hidden\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('listAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', opacity: 1 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0', opacity: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('closed => open', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0', opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', opacity: 0.1, offset: 0.8 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', opacity: 1, offset: 1 }),
                                ]))
                            ], { params: { time: '270ms ease-out' } }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('open => closed', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', opacity: 1, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', opacity: 0.1, offset: 0.2 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0', opacity: 0, offset: 1 }),
                                ]))
                            ], { params: { time: '220ms ease-out' } }),
                        ])
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FivExpandable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"] }
    ]; };
    FivExpandable.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        timingFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivWillOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivWillClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivExpandable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivStepContent = /** @class */ (function () {
    function FivStepContent(change) {
        this.change = change;
        this.isLast = false;
        this.isOpen = false;
        this.title = '';
        this.subtitle = '';
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FivStepContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FivStepContent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.isOpen = true;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    FivStepContent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    FivStepContent.prototype.completeAndClose = /**
     * @return {?}
     */
    function () {
        this.close();
        this.complete();
    };
    /**
     * @return {?}
     */
    FivStepContent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.header.complete();
    };
    /**
     * @return {?}
     */
    FivStepContent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.header.reset();
    };
    /**
     * @return {?}
     */
    FivStepContent.prototype.afterClose = /**
     * @return {?}
     */
    function () {
        this.fivDidClose.emit(this);
    };
    /**
     * @return {?}
     */
    FivStepContent.prototype.afterOpen = /**
     * @return {?}
     */
    function () {
        this.fivDidOpen.emit(this);
    };
    /**
     * @return {?}
     */
    FivStepContent.prototype.click = /**
     * @return {?}
     */
    function () {
        this.fivClick.emit(this);
    };
    FivStepContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-step-content',
                    template: "<div *ngIf=\"!isLast\" class=\"timeline\"></div>\n<fiv-expandable [isOpen]=\"isOpen\" (fivDidClose)=\"afterClose()\" (fivDidOpen)=\"afterOpen()\" #self>\n  <fiv-ripple header (fivClick)=\"click()\">\n    <fiv-step-header #header [index]=\"index\" [icon]=\"icon\">\n      <div class=\"header-title\">{{title}}</div>\n      <div class=\"header-subtitle\">{{subtitle}}</div>\n    </fiv-step-header>\n  </fiv-ripple>\n  <ng-container content>\n    <div class=\"step-content\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</fiv-expandable>",
                    styles: [":host{display:block;width:100%;position:relative}.step-content{padding-left:44px;padding-bottom:24px}.timeline{width:1px;height:calc(100% - 32px);position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));left:27.5px;top:36px}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                }] }
    ];
    /** @nocollapse */
    FivStepContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"] }
    ]; };
    FivStepContent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['self',] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['header',] }]
    };
    return FivStepContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivStepperHorizontal = /** @class */ (function () {
    function FivStepperHorizontal() {
        this.fivSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FivStepperHorizontal.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.slides.lockSwipes(true);
    };
    /**
     * @return {?}
     */
    FivStepperHorizontal.prototype.close = /**
     * @return {?}
     */
    function () {
        this.slides.slideTo(0);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FivStepperHorizontal.prototype.open = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(index);
        this.slides.lockSwipes(true);
    };
    FivStepperHorizontal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-stepper-horizontal',
                    template: "<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n        <span *ngIf=\"!f\" class=\"line left\"></span>\n        <div class=\"number-container\">\n          <span *ngIf=\"!content.icon\">{{i +  1}}</span>\n          <ion-icon *ngIf=\"content.icon\"\n            [name]=\"content.icon\"></ion-icon>\n        </div>\n        <span *ngIf=\"!l\" class=\"line right\"></span>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n          <div class=\"horizontal-content\">\n          <div class=\"header-title\">{{content.title}}</div>\n          <div class=\"header-subtitle\">{{content.subtitle}}</div>\n        </div>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-slides #slides pager=\"false\">\n  <ion-slide *ngFor=\"let content of contents; let i = index\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </ion-slide>\n</ion-slides>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
                        ])
                    ],
                    styles: [".number-container{width:24px;height:24px;border-radius:100%;position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}ion-col{text-align:center;padding:0}.line{width:calc(50% - 20px);height:1px;position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.left{left:0}.right{right:0}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                }] }
    ];
    /** @nocollapse */
    FivStepperHorizontal.ctorParameters = function () { return []; };
    FivStepperHorizontal.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['slides',] }],
        fivSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivStepperHorizontal;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivStepper = /** @class */ (function () {
    function FivStepper() {
        this.mode = 'vertical';
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.currentIndex = 0;
    }
    /**
     * @return {?}
     */
    FivStepper.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FivStepper.prototype.open = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') {
            this.currentIndex = index;
            this.horizontal.open(index);
        }
        else {
            if (this.steps.toArray()[index]) {
                if (this.steps.toArray()[index].isOpen) {
                    this.close(index);
                }
                else {
                    this.currentIndex = index;
                    this.steps.toArray()[index].open();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    FivStepper.prototype.openFirst = /**
     * @return {?}
     */
    function () {
        this.open(0);
    };
    /**
     * @return {?}
     */
    FivStepper.prototype.openLast = /**
     * @return {?}
     */
    function () {
        this.open(this.steps.toArray().length - 1);
    };
    /**
     * @param {?} index
     * @param {?=} param
     * @return {?}
     */
    FivStepper.prototype.close = /**
     * @param {?} index
     * @param {?=} param
     * @return {?}
     */
    function (index, param) {
        this.param = param;
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
     * @return {?}
     */
    FivStepper.prototype.closeFirst = /**
     * @return {?}
     */
    function () {
        this.close(0);
    };
    /**
     * @return {?}
     */
    FivStepper.prototype.closeLast = /**
     * @return {?}
     */
    function () {
        this.close(this.steps.toArray().length - 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FivStepper.prototype.select = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
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
    FivStepper.prototype.closeAll = /**
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
    FivStepper.prototype.next = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var next = this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
        this.select(next);
    };
    /**
     * @return {?}
     */
    FivStepper.prototype.previous = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
        this.select(next);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FivStepper.prototype.completeStep = /**
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
    FivStepper.prototype.completeAndCloseStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') ;
        else {
            this.steps.toArray()[index].completeAndClose();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FivStepper.prototype.reset = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') ;
        else {
            this.steps.toArray()[index].reset();
        }
    };
    FivStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-stepper',
                    template: "<ion-list *ngIf=\"mode === 'vertical'\">\n  <fiv-step-content (fivDidClose)=\"fivClose.emit({index: i, param: param}); param = null;\" (fivClick)=\"fivClick.emit(i)\" *ngFor=\"let content of contents; let i = index; let l = last;\" [icon]=\"content.icon\" [index]=\"i + 1\"\n    [isLast]=\"l\" [title]=\"content.title\" [subtitle]=\"content.subtitle\" [isOpen]=\"content.open\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </fiv-step-content>\n</ion-list>\n<div *ngIf=\"mode === 'horizontal'\">\n  <fiv-stepper-horizontal (fivSelect)=\"select($event)\" [contents]=\"contents\"></fiv-stepper-horizontal>\n</div>",
                    styles: [":host{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    FivStepper.ctorParameters = function () { return []; };
    FivStepper.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ContentChildren"], args: [FivStep,] }],
        steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChildren"], args: [FivStepContent,] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: [FivStepperHorizontal,] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivStepper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivRouterItem = /** @class */ (function () {
    function FivRouterItem(router) {
        this.router = router;
        this.active = false;
        this.detailIcon = 'ios-arrow-forward';
        this.disabled = false;
        this.matchChildUrl = false;
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
    }
    /**
     * @return {?}
     */
    FivRouterItem.prototype.onclick = /**
     * @return {?}
     */
    function () {
        if (this.navigate && this.pageUrl) {
            this.router.navigateByUrl(this.pageUrl);
        }
    };
    Object.defineProperty(FivRouterItem.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.position + " " + this.shape;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FivRouterItem.prototype, "activeClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.matchActiveUrl() || this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FivRouterItem.prototype, "disabledClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivRouterItem.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivRouterItem.prototype.hasShape = /**
     * @return {?}
     */
    function () {
        return this.shape === 'line'
            || this.shape === 'dot'
            || this.shape === 'rounded';
    };
    /**
     * @return {?}
     */
    FivRouterItem.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        return this.hasShape() ? [this.position, this.shape] : [this.position];
    };
    /**
     * @return {?}
     */
    FivRouterItem.prototype.matchActiveUrl = /**
     * @return {?}
     */
    function () {
        return this.matchChildUrl ? this.isChildUrl() : this.isCurrentUrl();
    };
    /**
     * @return {?}
     */
    FivRouterItem.prototype.isCurrentUrl = /**
     * @return {?}
     */
    function () {
        return this.router.url === this.pageUrl;
    };
    /**
     * @return {?}
     */
    FivRouterItem.prototype.isChildUrl = /**
     * @return {?}
     */
    function () {
        return this.router.url.startsWith(this.pageUrl);
    };
    FivRouterItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-router-item',
                    template: "<ion-menu-toggle auto-hide=\"false\">\n    <fiv-ripple>\n        <ion-item [color]=\"color\" [detail]=\"detail\" [detailIcon]=\"detailIcon\" [disabled]=\"disabled\" [lines]=\"lines\">\n            <fiv-icon *ngIf=\"icon\" [name]=\"icon\"></fiv-icon>\n            <ion-label>{{text}}</ion-label>\n        </ion-item>\n    </fiv-ripple>\n</ion-menu-toggle>\n<span *ngIf=\"hasShape()\" [ngClass]=\"getClasses()\" class=\"indicator\"></span>\n<ion-icon *ngIf=\"!hasShape()\" [ngClass]=\"position\" [name]=\"shape\" class=\"indicator\"></ion-icon>",
                    styles: [":host{display:block;position:relative;width:100%}:host(.active){--color-active:var(--ion-color-primary)}:host(.active) ion-item{--color:var(--color-active)}:host(.line){--width-line:4px;--background-line:var(--ion-color-primary)}:host(.active) .line{display:block;background:var(--background-line)}:host.active.left .line{width:var(--width-line);height:100%;top:0}:host.active.right .line{width:var(--width-line);height:100%;top:0}:host.active.top .line{width:calc(100% - 16px);left:8px;height:2px}:host.active.bottom .line{width:calc(100% - 16px);height:2px;left:8px}.indicator{position:absolute}:host.active .dot{display:block}:host.active.dot.left{padding-left:24px}.dot{width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:50%;border-radius:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:8px;display:none}.dot.left{left:8px;right:unset}.dot.right{right:8px}:host(.rounded.left){--border-radius-rounded-left:0 50px 50px 0}:host(.rounded.left) ion-item{--border-radius:var(--border-radius-rounded-left)}:host(.rounded.right){--border-radius-rounded-right:50px 0 0 50px}:host(.rounded.right) ion-item{--border-radius:var(--border-radius-rounded-right)}:host(.active.rounded){--background-rounded:var(--ion-color-primary-rgb);--opacity-rounded:0.25}:host(.active.rounded) ion-item{--background:rgba(var(--background-rounded), var(--opacity-rounded))}.left{left:0}.right{right:0}.top{top:0}.bottom{bottom:0}ion-item{--border-style:none}fiv-icon{--fiv-padding-end:8px}ion-item:hover{--background-hover:var(--ion-color-light);cursor:pointer;--background:var(--background-hover)}:host(.router-item-disabled){pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    FivRouterItem.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FivRouterItem.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        detail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        detailIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        matchChildUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        pageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostListener"], args: ['click',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class',] }],
        activeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.active',] }],
        disabledClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.router-item-disabled',] }]
    };
    return FivRouterItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivCollapsableMenu = /** @class */ (function () {
    function FivCollapsableMenu(sanitizer, platform) {
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.collapsed = false;
        this.hovering = false;
        this.hoverMenu = true;
        this.width = 64;
        this.minWidth = 270;
        this.maxWidth = this.platform.width() * 0.28;
    }
    Object.defineProperty(FivCollapsableMenu.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.collapsed && (this.platform.is('tablet') || this.platform.is('electron') || this.platform.is('desktop'))) {
                return this.sanitizer
                    // tslint:disable-next-line:max-line-length
                    .bypassSecurityTrustStyle("min-width: " + this.width + "px; max-width: " + this.width + "px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;");
            }
            else {
                return this.sanitizer
                    // tslint:disable-next-line:max-line-length
                    .bypassSecurityTrustStyle("min-width: " + this.minWidth + "px; max-width: " + this.maxWidth + "px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivCollapsableMenu.prototype.hover = /**
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
    FivCollapsableMenu.prototype.blur = /**
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
    Object.defineProperty(FivCollapsableMenu.prototype, "fivCollapseMenu", {
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
    FivCollapsableMenu.prototype.toggleMenu = /**
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
    FivCollapsableMenu.prototype.open = /**
     * @return {?}
     */
    function () {
        this.collapsed = false;
    };
    /**
     * @return {?}
     */
    FivCollapsableMenu.prototype.close = /**
     * @return {?}
     */
    function () {
        this.collapsed = true;
    };
    FivCollapsableMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                    selector: '[fivCollapseMenu]',
                    exportAs: 'menuCollapse'
                },] }
    ];
    /** @nocollapse */
    FivCollapsableMenu.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    FivCollapsableMenu.propDecorators = {
        hoverMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['style',] }],
        hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostListener"], args: ['mouseenter',] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostListener"], args: ['mouseleave',] }],
        fivCollapseMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivCollapsableMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivCollapsableMenuButton = /** @class */ (function () {
    function FivCollapsableMenuButton() {
    }
    /**
     * @return {?}
     */
    FivCollapsableMenuButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivCollapsableMenuButton.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.menu.toggleMenu();
    };
    FivCollapsableMenuButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-collapsable-menu-button',
                    template: "<ion-button fivCenter (click)=\"onClick()\">\n  <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n</ion-button>",
                    styles: [":host{width:42px;height:42px;display:block}"]
                }] }
    ];
    /** @nocollapse */
    FivCollapsableMenuButton.ctorParameters = function () { return []; };
    FivCollapsableMenuButton.propDecorators = {
        menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivCollapsableMenuButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["forwardRef"])(function () { return FivPasswordInput; }),
    multi: true
};
var FivPasswordInput = /** @class */ (function () {
    function FivPasswordInput() {
        this.clearOnEdit = false;
        this.disabled = false;
        this.hideIcon = 'eye-off';
        this.position = 'floating';
        this.showIcon = 'eye';
        this._passwordValue = '';
    }
    /**
     * @return {?}
     */
    FivPasswordInput.prototype.toggleShowPassword = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
    };
    Object.defineProperty(FivPasswordInput.prototype, "passwordValue", {
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
    FivPasswordInput.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined && value !== this._passwordValue) {
            this._passwordValue = value;
        }
    };
    /**
     * @return {?}
     */
    FivPasswordInput.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.onTouchedCallback) {
            this.onTouchedCallback();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FivPasswordInput.prototype.registerOnChange = /**
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
    FivPasswordInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    FivPasswordInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-password-input',
                    template: "<ion-item [color]=\"color\" [disabled]=\"disabled\" [lines]=\"lines\">\n  <ion-label *ngIf=\"placeholder\" [position]=\"position\">{{ placeholder }}</ion-label>\n  <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"passwordValue\" [clearOnEdit]=\"clearOnEdit\" (ionBlur)=\"blur()\"></ion-input>\n  <ion-icon slot=\"end\" [name]=\"show ? hideIcon : showIcon\" (click)=\"toggleShowPassword()\"></ion-icon>\n</ion-item>",
                    providers: [
                        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
                    ],
                    styles: [":host(.password-disabled){pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    FivPasswordInput.ctorParameters = function () { return []; };
    FivPasswordInput.propDecorators = {
        clearOnEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.password-disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        hideIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivPasswordInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivBottomSheetContent = /** @class */ (function () {
    function FivBottomSheetContent(sanitizer) {
        this.sanitizer = sanitizer;
        this.rounded = true;
        this.handle = true;
        this.float = true;
        this.fivHandleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.states = DrawerState;
    }
    Object.defineProperty(FivBottomSheetContent.prototype, "isRounded", {
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
    Object.defineProperty(FivBottomSheetContent.prototype, "styles", {
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
    FivBottomSheetContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} state
     * @return {?}
     */
    FivBottomSheetContent.prototype.updateState = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        this.currentState = state$$1;
    };
    /**
     * @return {?}
     */
    FivBottomSheetContent.prototype.click = /**
     * @return {?}
     */
    function () {
        this.fivHandleClick.emit();
    };
    FivBottomSheetContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-bottom-sheet-content',
                    template: "<div class=\"bsc-wrapper\">\n  <span (click)=\"click()\" *ngIf=\"currentState !== states.Top && handle\" [fivCenter]=\"{vertical: false, horizontal: true}\" class=\"handle\"></span>\n  <div [ngClass]=\"{'margin': handle}\" class=\"content\">\n    <ng-content>\n  \n    </ng-content>\n  </div>\n</div>\n\n\n\n\n",
                    styles: [":host{display:block;width:100%;height:100%}.bsc-wrapper{width:100%;height:100%}:host.rounded{border-top-left-radius:12px;border-top-right-radius:12px}.handle{display:block;background:var(--ion-color-light);border-radius:12px;top:8px;width:32px;height:8px;position:absolute}.content.margin{margin-top:24px}"]
                }] }
    ];
    /** @nocollapse */
    FivBottomSheetContent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    FivBottomSheetContent.propDecorators = {
        rounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        handle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        float: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivHandleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        isRounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.rounded',] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['style',] }]
    };
    return FivBottomSheetContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivBottomSheet = /** @class */ (function () {
    function FivBottomSheet(_element, _renderer, _domCtrl, _platform) {
        this._element = _element;
        this._renderer = _renderer;
        this._domCtrl = _domCtrl;
        this._platform = _platform;
        this.dockedHeight = 80;
        this.shouldBounce = true;
        this.distanceTop = 56;
        this.transition = '0.25s ease-in-out';
        this.state = DrawerState.Bottom;
        this.minimumHeight = 24;
        this.panEnabled = true;
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivDocked = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this._BOUNCE_DELTA = 30;
    }
    // @HostBinding('style') get styles() {
    //   if (this.rounded) {
    //     return this.sanitizer
    //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
    //   }
    // }
    // @HostBinding('style') get styles() {
    //   if (this.rounded) {
    //     return this.sanitizer
    //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
    //   }
    // }
    /**
     * @return {?}
     */
    FivBottomSheet.prototype.ngAfterViewInit = 
    // @HostBinding('style') get styles() {
    //   if (this.rounded) {
    //     return this.sanitizer
    //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
    //   }
    // }
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // this._renderer.
        //   setStyle(this._element.nativeElement.querySelector('.fiv-bottom-drawer-scrollable-content .scroll-y'), 'touch-action', 'none');
        this._setDrawerState(this.state);
        /** @type {?} */
        var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_0__(this._element.nativeElement);
        hammer.get('pan').set({ enable: true, direction: hammerjs__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_VERTICAL"] });
        hammer.on('pan panstart panend', function (ev) {
            if (!_this.panEnabled) {
                return;
            }
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
    FivBottomSheet.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes.state) {
            return;
        }
        this._setDrawerState(changes.state.currentValue);
        this.updateContent(changes.state.currentValue);
    };
    /**
     * @param {?} state
     * @return {?}
     */
    FivBottomSheet.prototype.updateContent = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        if (this.content) {
            this.content.updateState(state$$1);
        }
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    FivBottomSheet.prototype._setDrawerState = /**
     * @private
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
     * @private
     * @return {?}
     */
    FivBottomSheet.prototype._handlePanStart = /**
     * @private
     * @return {?}
     */
    function () {
        this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    FivBottomSheet.prototype._handlePanEnd = /**
     * @private
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
     * @private
     * @param {?} ev
     * @return {?}
     */
    FivBottomSheet.prototype._handleTopPanEnd = /**
     * @private
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
     * @private
     * @param {?} ev
     * @return {?}
     */
    FivBottomSheet.prototype._handleDockedPanEnd = /**
     * @private
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
     * @private
     * @param {?} ev
     * @return {?}
     */
    FivBottomSheet.prototype._handleBottomPanEnd = /**
     * @private
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
     * @private
     * @param {?} ev
     * @return {?}
     */
    FivBottomSheet.prototype._handlePan = /**
     * @private
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
     * @private
     * @param {?} value
     * @return {?}
     */
    FivBottomSheet.prototype._setTranslateY = /**
     * @private
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
    FivBottomSheet.prototype.open = /**
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
    FivBottomSheet.prototype.close = /**
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
    FivBottomSheet.prototype.dock = /**
     * @return {?}
     */
    function () {
        this.state = DrawerState.Docked;
        this._setDrawerState(this.state);
        this.updateContent(this.state);
    };
    FivBottomSheet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-bottom-sheet',
                    template: "<div class=\"fiv-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}.fiv-bottom-drawer-scrollable-content{width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    FivBottomSheet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Renderer2"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["DomController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    FivBottomSheet.propDecorators = {
        dockedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        shouldBounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        distanceTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        transition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        minimumHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        panEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivDocked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ContentChild"], args: [FivBottomSheetContent,] }]
    };
    return FivBottomSheet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivLoadingButton = /** @class */ (function () {
    function FivLoadingButton() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.fill = 'solid';
        this.size = 'default';
        this.disabled = false;
        this.verticalAlign = 'top';
        this.type = 'button';
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FivLoadingButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivLoadingButton.prototype.toggleSpinner = /**
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
    FivLoadingButton.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.progress.load();
    };
    /**
     * @return {?}
     */
    FivLoadingButton.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.progress.unload();
    };
    /**
     * @return {?}
     */
    FivLoadingButton.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.progress.complete({});
        }
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    FivLoadingButton.prototype.onComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        this.loading = false;
        this.fivComplete.emit(this);
    };
    /**
     * @return {?}
     */
    FivLoadingButton.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.fivButtonClick.emit(this);
    };
    FivLoadingButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-loading-button',
                    template: "<ion-button (click)=\"onClick()\" [disabled]=\"disabled\" [fill]=\"fill\" [shape]=\"shape\" [size]=\"size\" [expand]=\"expand\" [color]=\"color\" [type]=\"type\">\n  <fiv-loading-progress-bar [verticalAlign]=\"verticalAlign\" (fivComplete)=\"onComplete($event)\" #progress [global]=\"false\"></fiv-loading-progress-bar>\n  <ng-content></ng-content>\n</ion-button>",
                    styles: [":host{--background-progress:var(--ion-color-primary);--color-progress-spin-0:var(--ion-color-primary-shade);--color-progress-spin-25:var(--ion-color-primary-shade);--color-progress-spin-50:var(--ion-color-primary-shade);--color-progress-spin-75:var(--ion-color-primary-shade);--color-progress-spin-100:var(--ion-color-primary-shade)}:host(.button-disabled){pointer-events:none}fiv-loading-progress-bar{--background-progress-bar:var(--background-progress);--color-spin-0:var(--color-progress-spin-0);--color-spin-25:var(--color-progress-spin-25);--color-spin-50:var(--color-progress-spin-50);--color-spin-75:var(--color-progress-spin-75);--color-spin-100:var(--color-progress-spin-100)}"]
                }] }
    ];
    /** @nocollapse */
    FivLoadingButton.ctorParameters = function () { return []; };
    FivLoadingButton.propDecorators = {
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['progress',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.button-disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivLoadingButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BASE_SIZE = 100;
var FivLoadingSpinner = /** @class */ (function () {
    function FivLoadingSpinner(_document, _elementRef, change, builder, sanitizer, renderer) {
        this._document = _document;
        this._elementRef = _elementRef;
        this.change = change;
        this.builder = builder;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this._diameter = BASE_SIZE;
        this._strokeWidth = 10;
        this._value = 0;
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.mode = 'indeterminate';
        this.circleRadius = 45;
    }
    Object.defineProperty(FivLoadingSpinner.prototype, "class", {
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
    FivLoadingSpinner.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(FivLoadingSpinner.prototype, "viewBox", {
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
    Object.defineProperty(FivLoadingSpinner.prototype, "strokeCircumference", {
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
    Object.defineProperty(FivLoadingSpinner.prototype, "strokeDashOffset", {
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
    Object.defineProperty(FivLoadingSpinner.prototype, "circleStrokeWidth", {
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
    Object.defineProperty(FivLoadingSpinner.prototype, "value", {
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
    Object.defineProperty(FivLoadingSpinner.prototype, "diameter", {
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
            if (!FivLoadingSpinner.diameters.has(this._diameter)) {
                this._attachStyleNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FivLoadingSpinner.prototype, "strokeWidth", {
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
    /** Dynamically generates a style tag containing the correct animation for this diameter. */
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @private
     * @return {?}
     */
    FivLoadingSpinner.prototype._attachStyleNode = /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styleTag = FivLoadingSpinner.styleTag;
        if (!styleTag) {
            styleTag = this._document.createElement('style');
            this._document.head.appendChild(styleTag);
            FivLoadingSpinner.styleTag = styleTag;
        }
        if (styleTag && styleTag.sheet) {
            ((/** @type {?} */ (styleTag.sheet))).insertRule(this._getAnimationText(), 0);
        }
        FivLoadingSpinner.diameters.add(this.diameter);
    };
    /** Generates animation styles adjusted for the spinner's diameter. */
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @private
     * @return {?}
     */
    FivLoadingSpinner.prototype._getAnimationText = /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @private
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
    FivLoadingSpinner.prototype.completeIn = /**
     * @param {?} duration
     * @return {?}
     */
    function (duration) {
        var _this = this;
        this.mode = 'determinate';
        this.change.detectChanges();
        /** @type {?} */
        var animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                'stroke-dasharray': 180,
                'stroke-dashoffset': 90,
                'transformOrigin': 'center',
                'stroke': '#DE3E35'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(duration + "ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
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
        var i = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(duration / 100);
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(duration + duration / 50);
        /** @type {?} */
        var progress = i.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(t));
        progress.subscribe(function (p) {
            _this.fivProgress.emit(p);
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FivLoadingSpinner.prototype.setValue = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.mode = 'determinate';
        this._value = progress;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    FivLoadingSpinner.prototype.spin = /**
     * @return {?}
     */
    function () {
        this.mode = 'indeterminate';
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    FivLoadingSpinner.prototype.stopSpinning = /**
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
    FivLoadingSpinner.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.change.detectChanges();
    };
    FivLoadingSpinner.diameters = new Set([BASE_SIZE]);
    FivLoadingSpinner.styleTag = null;
    FivLoadingSpinner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-loading-spinner',
                    template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\" [ngSwitch]=\"mode == 'indeterminate'\">\n\n\n  <circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n\n  <circle class=\"determinate-circle\" #determinateCircle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n</svg>",
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewEncapsulation"].None,
                    styles: ["fiv-loading-spinner{display:block;position:relative}fiv-loading-spinner svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}fiv-loading-spinner circle{fill:transparent;-webkit-transform-origin:center;transform-origin:center;transition:stroke-dashoffset 225ms linear}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.determinate{-webkit-animation:5.6s ease-in-out infinite colors;animation:5.6s ease-in-out infinite colors}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.determinate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.indeterminate{-webkit-animation:5.6s ease-in-out infinite colors,2s linear infinite mat-progress-spinner-linear-rotate;animation:5.6s ease-in-out infinite colors,2s linear infinite mat-progress-spinner-linear-rotate}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.indeterminate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}"]
                }] }
    ];
    /** @nocollapse */
    FivLoadingSpinner.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Renderer2"] }
    ]; };
    FivLoadingSpinner.propDecorators = {
        fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        determinateCircle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['determinateCircle',] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        circleRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivLoadingSpinner;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivLoadingRefresherContent = /** @class */ (function () {
    function FivLoadingRefresherContent(element, builder) {
        this.element = element;
        this.builder = builder;
        this.iconColor = '#000';
        this.checkmark = false;
        this.disabled = false;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivShowed = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.visible = false;
        this.iconState = 'normal';
    }
    /**
     * @return {?}
     */
    FivLoadingRefresherContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivLoadingRefresherContent.prototype.load = /**
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
    FivLoadingRefresherContent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.spinner.stopSpinning();
    };
    /**
     * @return {?}
     */
    FivLoadingRefresherContent.prototype.complete = /**
     * @return {?}
     */
    function () {
        // this.spinner.completeIn(500);
        if (this.checkmark) {
            this.iconState = 'rotate';
        }
        else {
            this.postComplete();
        }
    };
    /**
     * @return {?}
     */
    FivLoadingRefresherContent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.visible) {
            this.visible = true;
            /** @type {?} */
            var animation = this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(1)' }))
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
    FivLoadingRefresherContent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.visible) {
            /** @type {?} */
            var transform = "scale(1)";
            /** @type {?} */
            var animation = this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: transform }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)' }))
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
    FivLoadingRefresherContent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.checkmark) {
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
    FivLoadingRefresherContent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
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
    FivLoadingRefresherContent.prototype.postComplete = /**
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
    FivLoadingRefresherContent.prototype.setValue = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.spinner.setValue(progress);
    };
    /**
     * @return {?}
     */
    FivLoadingRefresherContent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.spinner.setMode('indeterminate');
    };
    FivLoadingRefresherContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-loading-refresher-content',
                    template: "<div #background class=\"spinner-background\">\n    <fiv-loading-spinner #spinner (fivProgress)=\"fivProgress.emit($event)\" (fivComplete)=\"fillAnimationDone()\" class=\"spinner\" [circleRadius]=\"8\" [diameter]=\"20\" [strokeWidth]=\"2\"></fiv-loading-spinner>\n</div>",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('1400ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
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
    FivLoadingRefresherContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"] }
    ]; };
    FivLoadingRefresherContent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivShowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['spinner',] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['background',] }]
    };
    return FivLoadingRefresherContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivLoadingContent = /** @class */ (function () {
    function FivLoadingContent(builder, renderer) {
        this.builder = builder;
        this.renderer = renderer;
        this.hintText = 'new posts';
        this.maxPullHeight = 168;
        this.minPullHeight = 112;
        this.fivProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.hintVisible = false;
        this.currentProgress = 0;
        this.refreshing = false;
    }
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.refreshing = true;
        this.changeAnimationToProgress(112 / 168);
        this.spinner.load();
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.completeRefresh = /**
     * @return {?}
     */
    function () {
        this.spinner.complete();
    };
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        this.spinner.hide();
    };
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.showHint = /**
     * @return {?}
     */
    function () {
        this.hintVisible = true;
    };
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.onHintClicked = /**
     * @return {?}
     */
    function () {
        this.hintVisible = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivLoadingContent.prototype.postHint = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    FivLoadingContent.prototype.setPullAnimationProgress = /**
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
    FivLoadingContent.prototype.changeAnimationToProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        var _this = this;
        return new Promise(function (resolve) {
            /** @type {?} */
            var animation = _this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: "translateY(" + _this.currentProgress * 168 + "px) rotateZ(" + 360 * _this.currentProgress + "deg)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('85ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: "translateY(" + progress * 168 + "px) rotateZ(" + 360 * progress + "deg)" }))
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
    FivLoadingContent.prototype.fivPull = /**
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
    FivLoadingContent.prototype.onRefresh = /**
     * @return {?}
     */
    function () {
        this.refresh();
        this.spinner.load();
    };
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.fivCancel = /**
     * @return {?}
     */
    function () {
        this.moveBack();
    };
    /**
     * @return {?}
     */
    FivLoadingContent.prototype.afterSpinnerHide = /**
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
    FivLoadingContent.prototype.moveBack = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: "translateY(" + this.currentProgress * 168 + "px) rotateZ(" + 360 * this.currentProgress + "deg)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('145ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(0) rotateZ(0)' }))
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
    FivLoadingContent.prototype.onSpinnerProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.fivProgressChanged.emit(progress);
        this.renderer.
            // tslint:disable-next-line:max-line-length
            setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * this.currentProgress + "px) rotateZ(" + 360 * progress / 200 + "deg)");
    };
    FivLoadingContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-loading-content',
                    template: "<fiv-loading-refresher-content (fivProgress)=\"onSpinnerProgress($event)\" (fivHidden)=\"afterSpinnerHide()\" (fivComplete)=\"fillAnimationDone()\"\n  #spinner></fiv-loading-refresher-content>\n<ion-chip class=\"gg-hint-wrapper\" *ngIf=\"hintVisible\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" (click)=\"onHintClicked()\"\n  #hint>\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n\n<ion-content no-bounce fivPull [maxPullHeight]=\"maxPullHeight\" [minPullHeight]=\"minPullHeight\" (fivPull)=\"fivPull($event)\"\n  (fivRefresh)=\"onRefresh()\" (fivCancel)=\"fivCancel()\" [enabled]=\"!refreshing && !hintVisible\">\n\n  <ng-content></ng-content>\n</ion-content>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }))
                            ]),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('hintAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(0px) translateX(-50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'translateY(112px) translateX(-50%)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: '112px', opacity: 1, transform: 'translateY(112px) translateX(-50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: '40px', transform: 'translateY(112px) translateX(-50%)' }))
                            ]),
                        ]),
                    ],
                    styles: [":host{height:100%;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}ion-content{--padding-top:var(--fiv-padding-top, 0px)}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{position:absolute;z-index:8;opacity:1;left:50%;-webkit-transform:translateY(112px) translateX(-50%);transform:translateY(112px) translateX(-50%);height:40px;padding-left:8px;padding-right:8px;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}"]
                }] }
    ];
    /** @nocollapse */
    FivLoadingContent.ctorParameters = function () { return [
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Renderer2"] }
    ]; };
    FivLoadingContent.propDecorators = {
        hintText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivProgressChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['content',] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['spinner',] }]
    };
    return FivLoadingContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivLoadingFab = /** @class */ (function () {
    function FivLoadingFab(renderer) {
        this.renderer = renderer;
        this.iconColor = '#000';
        this.checkmark = false;
        this.disabled = false;
        this.visible = true;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivShow = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.loading = false;
        this.iconState = 'normal';
    }
    Object.defineProperty(FivLoadingFab.prototype, "classes", {
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
            /** @type {?} */
            var disabledClass = this.disabled ? "button-disabled" : '';
            return verticalClass + " " + horizontalClass + " " + edgeClass + " " + disabledClass;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivLoadingFab.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivLoadingFab.prototype.toggleSpinner = /**
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
    FivLoadingFab.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    FivLoadingFab.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
    };
    /**
     * @return {?}
     */
    FivLoadingFab.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.spinner.completeIn(1000);
        }
    };
    /**
     * @return {?}
     */
    FivLoadingFab.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        this.icon = 'md-checkmark';
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    FivLoadingFab.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
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
    FivLoadingFab.prototype.postComplete = /**
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
    FivLoadingFab.prototype.rotate = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'transform', "rotateZ(" + progress / 200 * 360 + "deg)");
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivLoadingFab.prototype.fabAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'void') {
            this.fivShow.emit(this);
        }
        if (event.toState === 'void') {
            this.fivHidden.emit(this);
        }
    };
    FivLoadingFab.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-loading-fab',
                    template: "<ion-fab *ngIf=\"visible\" (@fabAnim.done)=\"fabAnimDone($event)\" [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [slot]=\"slot\" [edge]=\"edge\">\n  <!-- <fiv-loading-spinner (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\" *ngIf=\"loading\" class=\"spinner\" [circleRadius]=\"32\" [diameter]=\"72\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"></fiv-loading-spinner> -->\n  <fiv-loading-spinner (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\" *ngIf=\"loading\" class=\"spinner\" [circleRadius]=\"30\" [diameter]=\"68\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"></fiv-loading-spinner>\n\n  <ion-fab-button [disabled]=\"disabled\">\n    <fiv-icon (transitionDone)=\"postComplete()\" [fivCenter]=\"{horizontal: true, vertical: true}\" [name]=\"icon\" [color]=\"iconColor\"></fiv-icon>\n  </ion-fab-button>\n</ion-fab>",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('1400ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: [":host{--fiv-spinner-size:68px;position:absolute;width:var(--fiv-spinner-size);height:var(--fiv-spinner-size)}:host(.button-disabled){pointer-events:none}:host(.fab-vertical-top){top:0}:host(.fab-vertical-top.fab-edge){top:var(--fiv-spinner-size)/2}:host(.fab-vertical-bottom.fab-edge){bottom:var(--fiv-spinner-size)/2}:host(.fab-vertical-bottom){bottom:0}:host(.fab-vertical-center){top:50%}:host(.fab-horizontal-start){left:0}:host(.fab-horizontal-end){right:0}ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}fiv-loading-spinner{position:absolute;left:calc((var(--fiv-spinner-size) - 56px)/ -2);top:calc((var(--fiv-spinner-size) - 56px)/ -2)}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}ion-fab-button{--background:var(--fiv-color-fab)}"]
                }] }
    ];
    /** @nocollapse */
    FivLoadingFab.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Renderer2"] }
    ]; };
    FivLoadingFab.propDecorators = {
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        edge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['spinner',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class',] }]
    };
    return FivLoadingFab;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivAppBarTabContent = /** @class */ (function () {
    function FivAppBarTabContent() {
        this.active = false;
        this.titleLayout = 'hide';
        this.selected = false;
        this.badge = -1;
        this.ionTabButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    Object.defineProperty(FivAppBarTabContent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return "label-" + this.titleLayout;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivAppBarTabContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivAppBarTabContent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        // this.nav.navigateRoot(this.href);
        this.ionTabButtonClick.emit({
            tab: this.tab,
            href: this.href,
            selected: true
        });
    };
    FivAppBarTabContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-app-bar-tab-content',
                    template: "<fiv-ripple (fivClick)=\"onClick()\" class=\"tab\" [ngClass]=\"{'active': active}\">\n  <fiv-icon [(indicatorValue)]=\"badge\" [name]=\"icon\"></fiv-icon>\n  <ion-label>{{name}}</ion-label>\n</fiv-ripple>",
                    styles: [":host{width:50%;height:100%;display:inline-block;position:relative}:host fiv-ripple{width:100%;height:100%;display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center}:host fiv-icon{display:block;order:-1;--fiv-dot-top:-6px;--fiv-dot-right:-6px}:host ion-label{order:0}:host .tab.active{--fiv-color-icon:var(--ion-color-primary)}:host .tab.active ion-label{color:var(--ion-color-primary)}:host(.label-hide) ion-label{display:none}:host(.label-active-only) fiv-ripple:not(.active) ion-label{display:none}"]
                }] }
    ];
    /** @nocollapse */
    FivAppBarTabContent.ctorParameters = function () { return []; };
    FivAppBarTabContent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class',] }],
        ionTabButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivAppBarTabContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivAppBarTab = /** @class */ (function () {
    function FivAppBarTab() {
        this.badge = -1;
    }
    /**
     * @return {?}
     */
    FivAppBarTab.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FivAppBarTab.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-app-bar-tab',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [":host{width:50%;height:100%;display:inline-block;position:relative}:host fiv-ripple{width:100%;height:100%}:host fiv-icon{display:block}:host .tab.active{--fiv-color-icon:var(--ion-color-primary)}"]
                }] }
    ];
    /** @nocollapse */
    FivAppBarTab.ctorParameters = function () { return []; };
    FivAppBarTab.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivAppBarTab;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivAppBar = /** @class */ (function () {
    function FivAppBar(router, tabs) {
        this.router = router;
        this.tabs = tabs;
        this._fabVisible = true;
        this.cutoutVisible = true;
        this.left = false;
        this.right = false;
        this.transitioning = false;
        this.icon = 'md-add';
        this.titleLayout = 'hide';
        this.fivFabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    Object.defineProperty(FivAppBar.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        set: /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            if (!position) {
                return;
            }
            if (!this.fabVisible) {
                this._position = position;
                this.setPosition();
                return;
            }
            this._fabVisible = false;
            this.transitioning = true;
            if (!this._position) {
                this._position = position;
                this.onFabHidden();
                return;
            }
            this.prepareTabs(position);
            this._position = position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FivAppBar.prototype, "fabVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fabVisible;
        },
        set: /**
         * @param {?} fabVisible
         * @return {?}
         */
        function (fabVisible) {
            var _this = this;
            if (this._fabVisible === true && fabVisible === false) {
                this._fabVisible = false;
            }
            else if (this._fabVisible === false && fabVisible === true) {
                this.cutoutVisible = true;
                setTimeout(function () {
                    _this._fabVisible = true;
                }, 250);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivAppBar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivAppBar.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivAppBar.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.prepareTabs(this.position);
    };
    /**
     * @return {?}
     */
    FivAppBar.prototype.onFabHidden = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.transitioning) {
            this.setPosition();
            this.cutoutVisible = false;
            setTimeout(function () {
                _this.cutoutVisible = true;
                setTimeout(function () {
                    _this._fabVisible = true;
                    _this.transitioning = false;
                }, 225);
            }, 225);
        }
        else {
            this.cutoutVisible = false;
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    FivAppBar.prototype.prepareTabs = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (position === 'center') {
            this.tabsLeft = this.tabComponents.toArray().slice(0, 2);
            this.tabsRight = this.tabComponents.toArray().slice(2, 4);
        }
        else if (position === 'right') {
            this.tabsLeft = this.tabComponents.toArray();
            this.tabsRight = [];
        }
        else if (position === 'left') {
            this.tabsLeft = [];
            this.tabsRight = this.tabComponents.toArray();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FivAppBar.prototype.setPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._position === 'right') {
            this.right = true;
            this.left = false;
        }
        else if (this._position === 'left') {
            this.right = false;
            this.left = true;
        }
        else {
            this.right = false;
            this.left = false;
        }
    };
    /**
     * @return {?}
     */
    FivAppBar.prototype.fabClick = /**
     * @return {?}
     */
    function () {
        this.fivFabClick.emit(this);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivAppBar.prototype.ionTabButtonClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.tabs.select(event.tab);
    };
    FivAppBar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-app-bar',
                    template: "<div class=\"appbar\" [ngClass]=\"{'cutout': cutoutVisible, 'left': left, 'right': right}\">\n  <div class=\"appbar-rect left\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\"  [active]=\"router.url.endsWith(tab.href)\" [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\"\n        [icon]=\"tab.icon\" [badge]=\"tab.badge\" [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsLeft\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n  <fiv-loading-fab (fivHidden)=\"onFabHidden()\" [icon]=\"icon\" [visible]=\"_fabVisible\" #fab (click)=\"fabClick()\"></fiv-loading-fab>\n  <div class=\"rect\"></div>\n  <div class=\"rect-filler\"></div>\n  <div class=\"appbar-rect right\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\" [active]=\"router.url.endsWith(tab.href)\" [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\"\n        [icon]=\"tab.icon\" [badge]=\"tab.badge\"  [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsRight\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n</div>",
                    styles: [":host{--fiv-color-appbar:var(--ion-color-light);--fiv-color-fab:var(--ion-color-primary)}.appbar{width:100%;position:fixed;bottom:0;left:0;height:calc(84px + env(safe-area-inset-bottom));background:rgba(0,0,0,0);z-index:5000}.appbar .appbar-rect{position:absolute;width:calc(50% - 34px);height:calc(56px + env(safe-area-inset-bottom));bottom:0;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);transition:350ms}.appbar .appbar-rect.left{left:0;background:var(--fiv-color-appbar);border-top-right-radius:12px}.appbar .appbar-rect.right{right:0;background:var(--fiv-color-appbar);border-top-left-radius:12px}.appbar fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;position:absolute;z-index:14}.appbar fiv-loading-fab fiv-icon{--fiv-color-icon:var(--fiv-color-fab-icon)}.appbar .rect{display:inline-block;width:68px;height:48px;position:absolute;overflow:hidden;bottom:env(safe-area-inset-bottom);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:350ms}.appbar .rect-filler{display:inline-block;width:72px;height:env(safe-area-inset-bottom);position:absolute;overflow:hidden;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:350ms;background:var(--fiv-color-appbar)}.appbar .rect:before{content:'';position:absolute;bottom:50%;width:100%;height:100%;border-radius:100%;box-shadow:0 300px 0 300px var(--fiv-color-appbar);transition:350ms}.appbar:not(.cutout) .appbar-rect.left{border-top-right-radius:0}.appbar:not(.cutout) .appbar-rect.right{border-top-left-radius:0}.appbar:not(.cutout) .rect{height:56px;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);background:var(--fiv-color-appbar)}.appbar:not(.cutout) .rect:before{border-radius:0;bottom:100%}.appbar.left .appbar-rect.left{width:4px}.appbar.left .appbar-rect.right{width:calc(100% - 70px)}.appbar.left .rect{left:4px;-webkit-transform:translateX(0);transform:translateX(0);width:66px}.appbar.left fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:10px;position:absolute}.appbar.right .appbar-rect.left{width:calc(100% - 70px)}.appbar.right .appbar-rect.right{width:4px}.appbar.right .rect{left:calc(100% - 37px);width:67px}.appbar.right fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:calc(100% - 64px);position:absolute;--fiv-spinner-size:68px}.tabs{display:flex;width:100%;height:100%;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    FivAppBar.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTabs"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Host"] }] }
    ]; };
    FivAppBar.propDecorators = {
        fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['fab',] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivFabClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        _tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChildren"], args: [FivAppBarTabContent,] }],
        tabComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ContentChildren"], args: [FivAppBarTab,] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fabVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivAppBar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivIfPlatform = /** @class */ (function () {
    function FivIfPlatform(platform, viewContainer, templateRef) {
        this.platform = platform;
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
    }
    Object.defineProperty(FivIfPlatform.prototype, "fivIf", {
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
    FivIfPlatform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                    selector: '[fivIf]'
                },] }
    ];
    /** @nocollapse */
    FivIfPlatform.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["TemplateRef"] }
    ]; };
    FivIfPlatform.propDecorators = {
        fivIf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivIfPlatform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivCenter = /** @class */ (function () {
    function FivCenter(sanitizer) {
        this.sanitizer = sanitizer;
        this.vertical = true;
        this.horizontal = true;
    }
    Object.defineProperty(FivCenter.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line:max-line-length
            /** @type {?} */
            var style$$1 = "position: absolute; " + (this.vertical && this.horizontal ? 'top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);' : this.vertical ? 'top: 50%; transform: translateY(-50%);' : 'left: 50%; transform: translateX(-50%);');
            return this.sanitizer.bypassSecurityTrustStyle(style$$1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FivCenter.prototype, "fivCenter", {
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
    FivCenter.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FivCenter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                    selector: '[fivCenter]'
                },] }
    ];
    /** @nocollapse */
    FivCenter.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    FivCenter.propDecorators = {
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['style',] }],
        fivCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivCenter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivPermissions = /** @class */ (function () {
    function FivPermissions(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.allowedPermissions = [];
        this.uPermissions = [];
    }
    Object.defineProperty(FivPermissions.prototype, "fivPermissionsUserPermissions", {
        set: /**
         * @param {?} userPermissions
         * @return {?}
         */
        function (userPermissions) {
            this.uPermissions = userPermissions || [];
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FivPermissions.prototype, "fivPermissions", {
        set: /**
         * @param {?} allowed
         * @return {?}
         */
        function (allowed) {
            this.allowedPermissions = allowed || [];
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivPermissions.prototype.checkPermission = /**
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
        return show;
    };
    /**
     * @return {?}
     */
    FivPermissions.prototype.updateView = /**
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
    FivPermissions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                    selector: '[fivPermissions]'
                },] }
    ];
    /** @nocollapse */
    FivPermissions.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["TemplateRef"] }
    ]; };
    FivPermissions.propDecorators = {
        fivPermissionsUserPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivPermissions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivRipple = /** @class */ (function () {
    function FivRipple(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.rippleAnimationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.round = false;
        this.hover = false;
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.rippleAnimationEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(750))
            .subscribe(function () {
            renderer.removeClass(el.nativeElement.querySelector('.ripple'), 'show');
            renderer.removeClass(el.nativeElement.querySelector('.rippleWrapper'), 'show');
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FivRipple.prototype.clickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ripple(event);
        this.fivClick.emit(event);
    };
    Object.defineProperty(FivRipple.prototype, "isRound", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.round;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FivRipple.prototype, "canHover", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.hover;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    FivRipple.prototype.ripple = /**
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
    FivRipple.prototype.rippleFactory = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var target = this.el.nativeElement;
        /** @type {?} */
        var rect = target.getBoundingClientRect();
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
    FivRipple.prototype.rippleAnimation = /**
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
    FivRipple.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'fiv-ripple',
                    template: "<ng-content></ng-content>",
                    styles: [":host{display:block;position:relative}:host:hover{cursor:pointer}:host.hover:hover{background-color:rgba(0,0,0,.1)}:host.round{border-radius:100%}.rippleWrapper{position:absolute;top:0;bottom:0;left:0;width:100%;overflow:hidden;border-radius:inherit}.rippleWrapper::before{content:'';display:block;height:100%;width:100%;-webkit-transform:scale(0);transform:scale(0)}.rippleWrapper.show::before{transition:opacity 1.5s;-webkit-transform:scale(2);transform:scale(2);opacity:0}.ripple{position:absolute;background:rgba(0,0,0,.1);border-radius:100%;-webkit-transform:scale(0);transform:scale(0)}.ripple.show{-webkit-animation:.75s ease-out ripple;animation:.75s ease-out ripple}@-webkit-keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}"]
                }] }
    ];
    /** @nocollapse */
    FivRipple.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Renderer2"] }
    ]; };
    FivRipple.propDecorators = {
        round: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        clickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostListener"], args: ['click', ['$event'],] }],
        isRound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.round',] }],
        canHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.hover',] }]
    };
    return FivRipple;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivViewport = /** @class */ (function () {
    function FivViewport(elementRef) {
        this.elementRef = elementRef;
        this.offset = 0;
        this.fivAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivDisappear = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.visible = false;
    }
    /**
     * @return {?}
     */
    FivViewport.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var content = this.elementRef.nativeElement.closest('ion-content');
        this.check();
        content.scrollEvents = true;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this.elementRef.nativeElement.closest('ion-content'), 'ionScroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(window, 'resize')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(50))
            .subscribe(function () { return _this.check(); });
    };
    /**
     * @return {?}
     */
    FivViewport.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivViewport.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FivViewport.prototype.check = /**
     * @private
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
    FivViewport.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.visible;
    };
    FivViewport.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                    selector: '[fivViewport]',
                    exportAs: 'viewport'
                },] }
    ];
    /** @nocollapse */
    FivViewport.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] }
    ]; };
    FivViewport.propDecorators = {
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivAppear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivDisappear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivViewport;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivPull = /** @class */ (function () {
    function FivPull(element, content) {
        this.element = element;
        this.content = content;
        this.minPullHeight = 112;
        this.maxPullHeight = 168;
        this.enabled = true;
        this.enableScroll = false;
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivPull = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FivPull.prototype.ngOnInit = /**
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
     * @private
     * @return {?}
     */
    FivPull.prototype.setupPanListener = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this.element.nativeElement, 'touchstart');
        /** @type {?} */
        var touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this.element.nativeElement, 'touchmove');
        /** @type {?} */
        var touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this.element.nativeElement, 'touchend');
        /** @type {?} */
        var touchcancel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this.element.nativeElement, 'touchcancel');
        /** @type {?} */
        var end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(touchend$, touchcancel$);
        /** @type {?} */
        var dragAtTop = touchstart$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return _this.scrollY.scrollTop === 0 && _this.enabled || _this.enableScroll; }));
        /** @type {?} */
        var dragTopDown = dragAtTop
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (start) {
            /** @type {?} */
            var startY = start.touches[0].pageY;
            return touchmove$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (move) {
                /** @type {?} */
                var currentY = move.touches[0].pageY;
                return {
                    startEvent: start,
                    moveEvent: move,
                    startY: startY,
                    currentY: currentY,
                    offset: currentY - startY
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skipWhile"])(function (drag) { return drag.offset < 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(end$));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1))
                .subscribe(function (drag) {
                /** @type {?} */
                var offset = drag.offset / 2;
                /** @type {?} */
                var refresh = offset >= _this.minPullHeight;
                if (refresh) {
                    _this.fivRefresh.emit(offset / _this.maxPullHeight);
                }
                else {
                    _this.fivCancel.emit(offset / _this.maxPullHeight);
                }
            });
        });
    };
    FivPull.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                    selector: '[fivPull]'
                },] }
    ];
    /** @nocollapse */
    FivPull.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"] }
    ]; };
    FivPull.propDecorators = {
        minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        enableScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivPull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivPull;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivIcon = /** @class */ (function () {
    function FivIcon() {
        this._indicatorValue = -1;
        this.state = 'normal';
        this.off = false;
        this.transitionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.indicatorState = 'scale';
        this.indicatorValueState = 'scale';
    }
    Object.defineProperty(FivIcon.prototype, "name", {
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
    Object.defineProperty(FivIcon.prototype, "indicatorValue", {
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
    FivIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FivIcon.prototype.transform = /**
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
    FivIcon.prototype.transformIndicator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    FivIcon.prototype.rotateAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'normal' && event.toState === 'rotate') {
            this._name = this.temp;
            this.state = 'normal';
        }
        if (event.fromState === 'rotate' && event.toState === 'normal') {
            this.transitionDone.emit(this._name);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivIcon.prototype.incrementDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    FivIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-icon',
                    template: "<ion-icon [slot]=\"slot\" [@rotateAnim]=\"state\" (@rotateAnim.done)=\"rotateAnimDone($event)\" [name]=\"_name\" [color]=\"color\"></ion-icon>\n<span [@scaleAnim]=\"indicatorState\" *ngIf=\"indicatorValue >= 0\" class=\"indicator\"></span>\n<span *ngIf=\"_indicatorValue > 0\" class=\"indicator-background\"></span>\n<span class=\"off-background\" *ngIf=\"off\"></span>\n<span class=\"off\" *ngIf=\"off\"></span>\n<span *ngIf=\"indicatorValue >= 0\" [@scaleAnim]=\"indicatorValueState\" (@scaleAnim.done)=\"incrementDone($event)\"\n    class=\"indicator-value\">\n    <span *ngIf=\"indicatorValue <= 9\">{{indicatorValue}}</span>\n    <span *ngIf=\"indicatorValue > 9\">9+</span>\n</span>",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'scale(0) rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'scale(1) rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('scaleAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'scale(1)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('normal => scale', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('scale => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('scale', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'scale(0)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'scale(1)' }))
                        ])
                    ],
                    styles: [":host{--fiv-padding-end:0;--fiv-padding-start:0;--fiv-dot-right:-6px;--fiv-dot-top:-2px;--fiv-color-icon:inherit;position:relative}ion-icon{margin:0;font-size:1.8em;color:var(--fiv-color-icon);padding-right:var(--fiv-padding-end);padding-left:var(--fiv-padding-start)}.indicator{position:absolute;width:var(--fiv-dot-width,8px);height:var(--fiv-dot-height,8px);background-color:var(--fiv-dot-color,var(--fiv-color-indicator,--ion-color-primary));top:calc(var(--fiv-dot-top,0px) + 3px);border-radius:100%;right:calc(var(--fiv-dot-right,4px) + 3px);z-index:12}.indicator-value{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-height,14px);background-color:var(--fiv-dot-color,var(--ion-color-primary));color:var(--fiv-dot-color-background,var(--ion-color-light));top:var(--fiv-dot-top,0);border-radius:14px;right:var(--fiv-dot-right,4px);z-index:13}.indicator-value *{position:absolute;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:.6em}.indicator-background{position:absolute;width:var(--fiv-dot-width,18px);height:var(--fiv-dot-height,18px);background-color:var(--fiv-dot-color-background,var(--ion-color-light));top:calc(var(--fiv-dot-top,0px) - 2px);border-radius:100%;right:calc(var(--fiv-dot-right,4px) - 2px);z-index:11}.off{width:120%;height:2px;background:var(--fiv-color-icon);position:absolute;left:0;-webkit-transform:rotateZ(45deg) translateY(10px) translateX(6px);transform:rotateZ(45deg) translateY(10px) translateX(6px)}.off-background{width:120%;height:2px;background:#000;position:absolute;background-color:var(--fiv-dot-color-background,var(--ion-color-light));left:2px;-webkit-transform:rotateZ(45deg) translateY(10px) translateX(6px);transform:rotateZ(45deg) translateY(10px) translateX(6px)}"]
                }] }
    ];
    /** @nocollapse */
    FivIcon.ctorParameters = function () { return []; };
    FivIcon.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        off: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        transitionDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        indicatorValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivIcon;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivToolbarSearch = /** @class */ (function () {
    function FivToolbarSearch(renderer) {
        this.renderer = renderer;
        this.searching = false;
        this.titleVisible = true;
        this.closeButtonVisible = false;
        this.small = false;
        this.fivInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.state = 'normal';
    }
    /**
     * @return {?}
     */
    FivToolbarSearch.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.state = this.small ? 'small' : 'normal';
    };
    /**
     * @return {?}
     */
    FivToolbarSearch.prototype.shrink = /**
     * @return {?}
     */
    function () {
        this.state = 'small';
    };
    /**
     * @return {?}
     */
    FivToolbarSearch.prototype.grow = /**
     * @return {?}
     */
    function () {
        this.state = 'normal';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FivToolbarSearch.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.small && changes.small.previousValue === true && changes.small.currentValue === false) {
            this.state = 'normal';
            return;
        }
        if (changes && changes.small && changes.small.previousValue === false && changes.small.currentValue === true) {
            this.state = 'small';
            return;
        }
    };
    /**
     * @return {?}
     */
    FivToolbarSearch.prototype.openSearchbar = /**
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
     * @return {?}
     */
    FivToolbarSearch.prototype.toggleSearchbar = /**
     * @return {?}
     */
    function () {
        if (this.searching) {
            this.closeSearchbar();
        }
        else {
            this.openSearchbar();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivToolbarSearch.prototype.searchBarStateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'normal' && event.toState === 'small') ;
        if (event.fromState === 'small' && event.toState === 'normal') {
            this._open();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FivToolbarSearch.prototype._open = /**
     * @private
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
    FivToolbarSearch.prototype.closeSearchbar = /**
     * @return {?}
     */
    function () {
        if (this.small) {
            this.state = 'small';
        }
        this.searching = false;
        this.fivClose.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivToolbarSearch.prototype.searchAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState !== 'void') {
            this.closeButtonVisible = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivToolbarSearch.prototype.closeAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState !== 'void') {
            this.searching = false;
        }
    };
    /**
     * @param {?} event
     * @param {?} input
     * @return {?}
     */
    FivToolbarSearch.prototype.seachbarAnimDone = /**
     * @param {?} event
     * @param {?} input
     * @return {?}
     */
    function (event, input) {
        if (event.fromState !== 'void') {
            this.titleVisible = true;
        }
        else {
            input.setFocus();
        }
    };
    FivToolbarSearch.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-toolbar-search',
                    template: "<ion-toolbar [@searchbarAnim]=\"small ? state : 'normal'\" (@searchbarAnim.done)=\"searchBarStateChange($event)\" [color]=\"color\" [ngClass]=\"{'small': state === 'small'}\">\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"fivInputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input class=\"toolbar-searchbar\"\n    [@titleAnim] (@titleAnim.done)=\"seachbarAnimDone($event,input)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"toggleSearchbar()\">\n      <fiv-icon [name]=\"searching ? 'md-close' : 'md-search'\"></fiv-icon>\n    </ion-button>\n    <!-- <ion-button [@rotateAnim] (@rotateAnim.done)=\"searchAnimDone($event)\" *ngIf=\"!searching\" (click)=\"toggleSearchbar()\">\n      <ion-icon style=\"transform: matrix(-1, 0, 0, 1, 0, 0);\" name=\"md-search\"></ion-icon>\n    </ion-button>\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"closeAnimDone($event)\" *ngIf=\"closeButtonVisible\" (click)=\"closeSearchbar()\">\n      <ion-icon name=\"md-close\"></ion-icon>\n    </ion-button> -->\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('searchbarAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('small => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('normal => small', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('95ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: '92px' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ width: '100%' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('85ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('65ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' }))
                            ]),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('titleAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'translateY(-20%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'translateY(0)' }))
                            ]),
                        ]),
                    ],
                    styles: [":host{position:relative;display:block;width:100%}ion-toolbar{box-shadow:0 1px 4px rgba(0,0,0,.25);transition:border-bottom-right-radius 85ms}ion-toolbar.small{border-bottom-right-radius:12px}.toolbar-searchbar{float:right}"]
                }] }
    ];
    /** @nocollapse */
    FivToolbarSearch.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Renderer2"] }
    ]; };
    FivToolbarSearch.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        small: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        fivInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivToolbarSearch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivPopover = /** @class */ (function () {
    function FivPopover(navParams, popoverController) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.buttons = [];
        this.buttons = navParams.get('buttons');
    }
    /**
     * @return {?}
     */
    FivPopover.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} i
     * @return {?}
     */
    FivPopover.prototype.onItemClicked = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.popoverController.dismiss({ index: i });
    };
    FivPopover.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-popover',
                    template: "<ion-content>\n  <ion-item (click)=\"onItemClicked(i)\" class=\"popover-item\" *ngFor=\"let button of buttons; let i = index\">\n    <ion-icon slot=\"start\" [name]=\"button.icon\"></ion-icon>\n    <ion-label>{{button.text}}</ion-label>\n  </ion-item>\n</ion-content>",
                    styles: [".popover-item{--border-style:none}.popover-item:hover{--background:rgb(240, 240, 240);cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    FivPopover.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] }
    ]; };
    return FivPopover;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivButton = /** @class */ (function () {
    function FivButton() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FivButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FivButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-button',
                    template: "<ion-button [color]=\"color\" [disabled]=\"disabled\">\n  <fiv-icon [name]=\"icon\"></fiv-icon>\n  {{text}}\n</ion-button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FivButton.ctorParameters = function () { return []; };
    FivButton.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return FivButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivButtons = /** @class */ (function () {
    function FivButtons(platform, popoverController, actionSheetController) {
        this.platform = platform;
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.slot = 'end';
        this.icon = 'more';
        this.count = 0;
        this.forceActionsheet = false;
        this.forcePopover = false;
        this.iconsOnly = true;
    }
    /**
     * @return {?}
     */
    FivButtons.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivButtons.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivButtons.prototype.onMenuClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.forceActionsheet) {
            this.presentActionSheet(event);
            return;
        }
        if (this.forcePopover) {
            this.presentPopover(event);
            return;
        }
        if (this.platform.is('mobile')) {
            this.presentActionSheet(event);
        }
        else {
            this.presentPopover(event);
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    FivButtons.prototype.presentPopover = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__awaiter"])(this, void 0, void 0, function () {
            var popover, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: FivPopover,
                            event: ev,
                            translucent: false,
                            componentProps: {
                                'buttons': this.buttons.toArray().slice(this.count).filter(function (button) { return !button.disabled; }),
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result && result.data && (result.data.index || result.data.index === 0)) {
                            this.onButtonClicked(result.data.index + this.count);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    FivButtons.prototype.presentActionSheet = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__awaiter"])(this, void 0, void 0, function () {
            var buttons, actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [];
                        this.buttons.toArray().slice(this.count)
                            .forEach(function (button, index) {
                            if (!button.disabled) {
                                buttons.push({
                                    text: button.text,
                                    icon: button.icon,
                                    handler: function () {
                                        _this.onButtonClicked(_this.count + index);
                                    }
                                });
                            }
                        });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: this.header,
                                subHeader: this.subHeader,
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} i
     * @return {?}
     */
    FivButtons.prototype.onButtonClicked = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.buttons.toArray()[i].click.emit();
    };
    FivButtons.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-buttons',
                    template: "<ion-buttons *ngIf=\"buttons\" [slot]=\"slot\">\n\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'start' || slot ==='primary') && count < buttons.length && text\"\n    (click)=\"onMenuClicked($event)\" [text]=\"text\"></fiv-button>\n\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'start' || slot ==='primary') && count < buttons.length && !text\"\n    (click)=\"onMenuClicked($event)\" [icon]=\"'md-more'\"></fiv-button>\n  <ng-container *ngIf=\"iconsOnly\">\n    <fiv-button [color]=\"button.color\" (click)=\"onButtonClicked(i)\" [icon]=\"button.icon\"\n      *ngFor=\"let button of buttons.toArray() |\u00A0slice:0:count; let i = index;\"></fiv-button>\n  </ng-container>\n  <ng-container *ngIf=\"!iconsOnly\">\n    <fiv-button [color]=\"button.color\" (click)=\"onButtonClicked(i)\" [icon]=\"button.icon\" [text]=\"button.text\"\n      *ngFor=\"let button of buttons.toArray() |\u00A0slice:0:count; let i = index;\"></fiv-button>\n  </ng-container>\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'end' || slot ==='secondary') && count < buttons.length && !text\"\n    (click)=\"onMenuClicked($event)\" [icon]=\"icon\"></fiv-button>\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'end' || slot ==='secondary') && count < buttons.length && text\"\n    (click)=\"onMenuClicked($event)\" [text]=\"text\"></fiv-button>\n</ion-buttons>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    FivButtons.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] }
    ]; };
    FivButtons.propDecorators = {
        slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        subHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        forceActionsheet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        forcePopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        iconsOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        buttons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ContentChildren"], args: [FivButton,] }]
    };
    return FivButtons;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivExpandableIndicator = /** @class */ (function () {
    function FivExpandableIndicator(expandable) {
        this.expandable = expandable;
        this.icon = 'ios-arrow-down';
    }
    /**
     * @return {?}
     */
    FivExpandableIndicator.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FivExpandableIndicator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-expandable-indicator',
                    template: "<ion-icon class=\"indicator\" [ngClass]=\"{'rotate': expandable.isOpen}\" [name]=\"icon\"></ion-icon>",
                    styles: [":host{display:flex}.indicator{transition:125ms}.indicator.rotate{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}"]
                }] }
    ];
    /** @nocollapse */
    FivExpandableIndicator.ctorParameters = function () { return [
        { type: FivExpandable }
    ]; };
    FivExpandableIndicator.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    return FivExpandableIndicator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["forwardRef"])(function () { return FivEditableLabel; }),
    multi: true
};
var FivEditableLabel = /** @class */ (function () {
    function FivEditableLabel() {
        this.type = 'label';
        this.disabled = false;
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    Object.defineProperty(FivEditableLabel.prototype, "editing", {
        get: /**
         * @return {?}
         */
        function () {
            return this._editing;
        },
        set: /**
         * @param {?} edit
         * @return {?}
         */
        function (edit) {
            this._editing = edit;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivEditableLabel.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(0).subscribe(function () { return _this.internalValue = _this.value; });
    };
    Object.defineProperty(FivEditableLabel.prototype, "internalValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._value) {
                this._value = value;
                if (this.onChangeCallback) {
                    this.onChangeCallback(this._value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivEditableLabel.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.editing = true;
    };
    /**
     * @return {?}
     */
    FivEditableLabel.prototype.stopEdit = /**
     * @return {?}
     */
    function () {
        this.editing = false;
    };
    /**
     * @return {?}
     */
    FivEditableLabel.prototype.onEscapeClick = /**
     * @return {?}
     */
    function () {
        this.internalValue = this.value;
        this.stopEdit();
    };
    /**
     * @return {?}
     */
    FivEditableLabel.prototype.onEnterClick = /**
     * @return {?}
     */
    function () {
        this.value = this.internalValue;
        this.stopEdit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FivEditableLabel.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined && value !== this._value) {
            this._value = value;
        }
    };
    /**
     * @return {?}
     */
    FivEditableLabel.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.blur.emit();
        this.stopEdit();
        if (this.onTouchedCallback) {
            this.onTouchedCallback();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FivEditableLabel.prototype.registerOnChange = /**
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
    FivEditableLabel.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivEditableLabel.prototype.titleAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'void') {
            this.input.setFocus();
        }
    };
    FivEditableLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: 'fiv-editable-label',
                    template: "<!-- TODO if value is empty label or title can not be clicked, show placeholder?! -->\n<ion-title *ngIf=\"type === 'title' && !editing\" (click)=\"edit()\" (@titleAnim.done)=\"titleAnimDone($event)\" [@titleAnim]>\n    {{value}}</ion-title>\n<ion-label *ngIf=\"type === 'label' && !editing\" class=\"label\" (click)=\"edit()\" (@titleAnim.done)=\"titleAnimDone($event)\" [@titleAnim]>\n    {{value}}</ion-label>\n<ion-input *ngIf=\"editing\" [(ngModel)]=\"internalValue\" (blur)=\"onBlur()\" (keyup.enter)=\"onEnterClick()\"\n    (keyup.escape)=\"onEscapeClick()\" #input [@titleAnim] [ngClass]=\"{'title-input': type === 'title'}\">\n</ion-input>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('titleAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0', transform: 'translateY(-20%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1', transform: 'translateY(0)' }))
                            ]),
                        ]),
                    ],
                    providers: [
                        CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR
                    ],
                    styles: [":host{width:100%}.label{max-width:100%}:host *{pointer-events:auto}:host(.editable-label-disabled){pointer-events:none}.title-input{font-size:20px;font-weight:500;color:var(--color)}"]
                }] }
    ];
    /** @nocollapse */
    FivEditableLabel.ctorParameters = function () { return []; };
    FivEditableLabel.propDecorators = {
        editing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["HostBinding"], args: ['class.editable-label-disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ['input',] }]
    };
    return FivEditableLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyImageDirective = /** @class */ (function () {
    function LazyImageDirective(fivImage, image) {
        this.fivImage = fivImage;
        this.image = image;
        this.willShow = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LazyImageDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var io = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    _this.handleIntersection();
                    observer.disconnect();
                }
            });
        });
        io['POLL_INTERVAL'] = 100;
        if (this.fivImage) {
            io.observe(this.fivImage.image.nativeElement);
        }
        else {
            io.observe(this.image.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    LazyImageDirective.prototype.handleIntersection = /**
     * @return {?}
     */
    function () {
        if (this.fivLazyImage) {
            if (this.fivImage) {
                this.fivImage.src = this.fivLazyImage;
                this.willShow.emit(this.fivImage);
            }
            else {
                this.image.nativeElement.src = this.fivLazyImage;
                this.willShow.emit(this.image.nativeElement);
            }
        }
        else {
            this.willShow.emit(this.fivImage || this.image.nativeElement);
        }
    };
    LazyImageDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                    selector: '[fivLazyImage]'
                },] }
    ];
    /** @nocollapse */
    LazyImageDirective.ctorParameters = function () { return [
        { type: FivGalleryImage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] }
    ]; };
    LazyImageDirective.propDecorators = {
        fivLazyImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        willShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    return LazyImageDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyHammerConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = (/** @type {?} */ ({
            pan: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_0__["Hammer"].DIRECTION_VERTICAL, threshold: 3 },
        }));
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HammerGestureConfig"]));
var FivethreeCoreModule = /** @class */ (function () {
    function FivethreeCoreModule() {
    }
    FivethreeCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"]
                    ],
                    declarations: [
                        FivExpandable,
                        FivEditableLabel,
                        FivPasswordInput,
                        FivStepper,
                        FivStep,
                        FivStepHeader,
                        FivStepContent,
                        FivRouterItem,
                        FivCenter,
                        FivCollapsableMenuButton,
                        FivCollapsableMenu,
                        FivBottomSheet,
                        FivBottomSheetContent,
                        FivToolbarSearch,
                        FivLoadingButton,
                        FivLoadingProgressBar,
                        FivLoadingContent,
                        FivLoadingFab,
                        FivAppBar,
                        FivIfPlatform,
                        FivPermissions,
                        FivRipple,
                        FivViewport,
                        FivPull,
                        FivLoadingRefresherContent,
                        FivLoadingSpinner,
                        FivStepperHorizontal,
                        FivIcon,
                        FivDialog,
                        FivAppBarTab,
                        FivAppBarTabContent,
                        FivGalleryImage,
                        FivGallery,
                        FivButtons,
                        FivButton,
                        FivPopover,
                        FivExpandableIndicator,
                        FivOverlay,
                        FivOverlayContent,
                        FivNetworkStatus,
                        FivBackButton,
                        LazyImageDirective
                    ],
                    entryComponents: [
                        FivPopover,
                        FivOverlayContent,
                        FivNetworkStatus,
                        FivDialog
                    ],
                    exports: [
                        FivExpandable,
                        FivEditableLabel,
                        FivPasswordInput,
                        FivStepper,
                        FivStep,
                        FivStepHeader,
                        FivStepContent,
                        FivRouterItem,
                        FivCollapsableMenu,
                        FivCenter,
                        FivCollapsableMenuButton,
                        FivBottomSheet,
                        FivBottomSheetContent,
                        FivToolbarSearch,
                        FivLoadingButton,
                        FivLoadingProgressBar,
                        FivLoadingContent,
                        FivLoadingFab,
                        FivAppBar,
                        FivIfPlatform,
                        FivPermissions,
                        FivRipple,
                        FivViewport,
                        FivPull,
                        FivLoadingRefresherContent,
                        FivLoadingSpinner,
                        FivStepperHorizontal,
                        FivIcon,
                        FivDialog,
                        FivAppBarTab,
                        FivAppBarTabContent,
                        FivGalleryImage,
                        FivGallery,
                        FivButtons,
                        FivButton,
                        FivExpandableIndicator,
                        FivOverlay,
                        FivOverlayContent,
                        FivNetworkStatus,
                        FivBackButton,
                        LazyImageDirective
                    ],
                    providers: [
                        FivOverlayService,
                        FivDialogService
                    ]
                },] }
    ];
    return FivethreeCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=fivethree-core.js.map

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0owmtgfs.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0owmtgfs.entry.js",
		"common",
		58
	],
	"./0owmtgfs.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0owmtgfs.sc.entry.js",
		"common",
		59
	],
	"./0utrggve.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0utrggve.entry.js",
		"common",
		60
	],
	"./0utrggve.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0utrggve.sc.entry.js",
		"common",
		61
	],
	"./1kttiagf.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1kttiagf.entry.js",
		0,
		"common",
		132
	],
	"./1kttiagf.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1kttiagf.sc.entry.js",
		0,
		"common",
		133
	],
	"./2g1gy9f9.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2g1gy9f9.entry.js",
		"common",
		10
	],
	"./2g1gy9f9.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2g1gy9f9.sc.entry.js",
		"common",
		11
	],
	"./4m739wpj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4m739wpj.entry.js",
		"common",
		62
	],
	"./4m739wpj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4m739wpj.sc.entry.js",
		"common",
		63
	],
	"./5ey3bs99.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ey3bs99.entry.js",
		"common",
		12
	],
	"./5ey3bs99.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ey3bs99.sc.entry.js",
		"common",
		13
	],
	"./5qlzjcgv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5qlzjcgv.entry.js",
		0,
		"common",
		134
	],
	"./5qlzjcgv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5qlzjcgv.sc.entry.js",
		0,
		"common",
		135
	],
	"./5u5c8wcw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5u5c8wcw.entry.js",
		0,
		"common",
		136
	],
	"./5u5c8wcw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5u5c8wcw.sc.entry.js",
		0,
		"common",
		137
	],
	"./6eqoprbr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6eqoprbr.entry.js",
		0,
		"common",
		138
	],
	"./6eqoprbr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6eqoprbr.sc.entry.js",
		0,
		"common",
		139
	],
	"./7lrb3ory.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7lrb3ory.entry.js",
		0,
		"common",
		114
	],
	"./7lrb3ory.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7lrb3ory.sc.entry.js",
		0,
		"common",
		115
	],
	"./8q1e6dus.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/8q1e6dus.entry.js",
		"common",
		14
	],
	"./8q1e6dus.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/8q1e6dus.sc.entry.js",
		"common",
		15
	],
	"./9i747kfk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9i747kfk.entry.js",
		2,
		"common",
		140
	],
	"./9i747kfk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9i747kfk.sc.entry.js",
		2,
		"common",
		141
	],
	"./adaxrxoq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/adaxrxoq.entry.js",
		"common",
		116
	],
	"./adaxrxoq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/adaxrxoq.sc.entry.js",
		"common",
		117
	],
	"./afjpklm4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/afjpklm4.entry.js",
		"common",
		64
	],
	"./afjpklm4.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/afjpklm4.sc.entry.js",
		"common",
		65
	],
	"./ao2edhxl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ao2edhxl.entry.js",
		"common",
		16
	],
	"./ao2edhxl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ao2edhxl.sc.entry.js",
		"common",
		17
	],
	"./av1nxhcg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/av1nxhcg.entry.js",
		"common",
		18
	],
	"./av1nxhcg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/av1nxhcg.sc.entry.js",
		"common",
		19
	],
	"./b9hbg5md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/b9hbg5md.entry.js",
		"common",
		66
	],
	"./b9hbg5md.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/b9hbg5md.sc.entry.js",
		"common",
		67
	],
	"./bneiwm8s.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bneiwm8s.entry.js",
		"common",
		20
	],
	"./bneiwm8s.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bneiwm8s.sc.entry.js",
		"common",
		21
	],
	"./bvwzwweh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bvwzwweh.entry.js",
		"common",
		22
	],
	"./bvwzwweh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bvwzwweh.sc.entry.js",
		"common",
		23
	],
	"./bzgyi6uy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bzgyi6uy.entry.js",
		"common",
		24
	],
	"./bzgyi6uy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bzgyi6uy.sc.entry.js",
		"common",
		25
	],
	"./c2kiol1t.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c2kiol1t.entry.js",
		"common",
		26
	],
	"./c2kiol1t.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c2kiol1t.sc.entry.js",
		"common",
		27
	],
	"./c3nbktys.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c3nbktys.entry.js",
		0,
		"common",
		142
	],
	"./c3nbktys.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c3nbktys.sc.entry.js",
		0,
		"common",
		143
	],
	"./c3xilup3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c3xilup3.entry.js",
		"common",
		28
	],
	"./c3xilup3.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c3xilup3.sc.entry.js",
		"common",
		29
	],
	"./ccuursht.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ccuursht.entry.js",
		2,
		"common",
		144
	],
	"./ccuursht.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ccuursht.sc.entry.js",
		2,
		"common",
		145
	],
	"./coytbtgb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/coytbtgb.entry.js",
		"common",
		76
	],
	"./coytbtgb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/coytbtgb.sc.entry.js",
		"common",
		77
	],
	"./dznymaqz.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dznymaqz.entry.js",
		"common",
		78
	],
	"./dznymaqz.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dznymaqz.sc.entry.js",
		"common",
		79
	],
	"./fazrg12f.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fazrg12f.entry.js",
		0,
		"common",
		148
	],
	"./fazrg12f.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fazrg12f.sc.entry.js",
		0,
		"common",
		149
	],
	"./fcbdrndu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fcbdrndu.entry.js",
		"common",
		80
	],
	"./fcbdrndu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fcbdrndu.sc.entry.js",
		"common",
		81
	],
	"./ffukzwt6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ffukzwt6.entry.js",
		"common",
		124
	],
	"./ffukzwt6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ffukzwt6.sc.entry.js",
		"common",
		125
	],
	"./fki3pb3x.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fki3pb3x.entry.js",
		0,
		"common",
		150
	],
	"./fki3pb3x.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fki3pb3x.sc.entry.js",
		0,
		"common",
		151
	],
	"./fokfxvfn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fokfxvfn.entry.js",
		"common",
		68
	],
	"./fokfxvfn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fokfxvfn.sc.entry.js",
		"common",
		69
	],
	"./gwiqb6zv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/gwiqb6zv.entry.js",
		"common",
		30
	],
	"./gwiqb6zv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/gwiqb6zv.sc.entry.js",
		"common",
		31
	],
	"./hs4xwlox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hs4xwlox.entry.js",
		"common",
		32
	],
	"./hs4xwlox.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hs4xwlox.sc.entry.js",
		"common",
		33
	],
	"./jdcptvrs.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jdcptvrs.entry.js",
		"common",
		82
	],
	"./jdcptvrs.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jdcptvrs.sc.entry.js",
		"common",
		83
	],
	"./jpkvsu5y.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jpkvsu5y.entry.js",
		"common",
		126
	],
	"./jpkvsu5y.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jpkvsu5y.sc.entry.js",
		"common",
		127
	],
	"./jtkjzkgg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtkjzkgg.entry.js",
		"common",
		34
	],
	"./jtkjzkgg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtkjzkgg.sc.entry.js",
		"common",
		35
	],
	"./jwqvpjte.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jwqvpjte.entry.js",
		"common",
		84
	],
	"./jwqvpjte.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jwqvpjte.sc.entry.js",
		"common",
		85
	],
	"./l1m0sgjq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/l1m0sgjq.entry.js",
		"common",
		86
	],
	"./l1m0sgjq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/l1m0sgjq.sc.entry.js",
		"common",
		87
	],
	"./ly8zbpmk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ly8zbpmk.entry.js",
		"common",
		36
	],
	"./ly8zbpmk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ly8zbpmk.sc.entry.js",
		"common",
		37
	],
	"./mlczeont.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mlczeont.entry.js",
		"common",
		70
	],
	"./mlczeont.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mlczeont.sc.entry.js",
		"common",
		71
	],
	"./mnim3usc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mnim3usc.entry.js",
		"common",
		38
	],
	"./mnim3usc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mnim3usc.sc.entry.js",
		"common",
		39
	],
	"./mxzbuihf.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mxzbuihf.entry.js",
		0,
		"common",
		152
	],
	"./mxzbuihf.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mxzbuihf.sc.entry.js",
		0,
		"common",
		153
	],
	"./n5wnzrch.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n5wnzrch.entry.js",
		"common",
		72
	],
	"./n5wnzrch.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n5wnzrch.sc.entry.js",
		"common",
		73
	],
	"./nr6wcehx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nr6wcehx.entry.js",
		"common",
		40
	],
	"./nr6wcehx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nr6wcehx.sc.entry.js",
		"common",
		41
	],
	"./o2g4txhh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/o2g4txhh.entry.js",
		"common",
		88
	],
	"./o2g4txhh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/o2g4txhh.sc.entry.js",
		"common",
		89
	],
	"./oboc8zd4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oboc8zd4.entry.js",
		"common",
		90
	],
	"./oboc8zd4.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oboc8zd4.sc.entry.js",
		"common",
		91
	],
	"./od5ko9fd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/od5ko9fd.entry.js",
		0,
		"common",
		118
	],
	"./od5ko9fd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/od5ko9fd.sc.entry.js",
		0,
		"common",
		119
	],
	"./odqmlmdd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/odqmlmdd.entry.js",
		"common",
		42
	],
	"./odqmlmdd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/odqmlmdd.sc.entry.js",
		"common",
		43
	],
	"./okpgrmbb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/okpgrmbb.entry.js",
		"common",
		44
	],
	"./okpgrmbb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/okpgrmbb.sc.entry.js",
		"common",
		45
	],
	"./qvwswew4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qvwswew4.entry.js",
		"common",
		120
	],
	"./qvwswew4.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qvwswew4.sc.entry.js",
		"common",
		121
	],
	"./rri2tloh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rri2tloh.entry.js",
		"common",
		92
	],
	"./rri2tloh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rri2tloh.sc.entry.js",
		"common",
		93
	],
	"./soeaphrm.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/soeaphrm.entry.js",
		0,
		"common",
		154
	],
	"./soeaphrm.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/soeaphrm.sc.entry.js",
		0,
		"common",
		155
	],
	"./sqd5wawk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sqd5wawk.entry.js",
		0,
		"common",
		156
	],
	"./sqd5wawk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sqd5wawk.sc.entry.js",
		0,
		"common",
		157
	],
	"./t547wlk7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t547wlk7.entry.js",
		"common",
		122
	],
	"./t547wlk7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t547wlk7.sc.entry.js",
		"common",
		123
	],
	"./tab7npn8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tab7npn8.entry.js",
		"common",
		94
	],
	"./tab7npn8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tab7npn8.sc.entry.js",
		"common",
		95
	],
	"./tj5rszjq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tj5rszjq.entry.js",
		"common",
		74
	],
	"./tj5rszjq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tj5rszjq.sc.entry.js",
		"common",
		75
	],
	"./tpeqvzxx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tpeqvzxx.entry.js",
		"common",
		128
	],
	"./tpeqvzxx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tpeqvzxx.sc.entry.js",
		"common",
		129
	],
	"./tqgphjq7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tqgphjq7.entry.js",
		"common",
		46
	],
	"./tqgphjq7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tqgphjq7.sc.entry.js",
		"common",
		47
	],
	"./tylmm2yl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tylmm2yl.entry.js",
		"common",
		96
	],
	"./tylmm2yl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tylmm2yl.sc.entry.js",
		"common",
		97
	],
	"./uegz8gm3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uegz8gm3.entry.js",
		"common",
		98
	],
	"./uegz8gm3.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uegz8gm3.sc.entry.js",
		"common",
		99
	],
	"./uetn90ud.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uetn90ud.entry.js",
		"common",
		100
	],
	"./uetn90ud.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uetn90ud.sc.entry.js",
		"common",
		101
	],
	"./vbsrxypz.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vbsrxypz.entry.js",
		158
	],
	"./vbsrxypz.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vbsrxypz.sc.entry.js",
		159
	],
	"./wajpsmly.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wajpsmly.entry.js",
		"common",
		48
	],
	"./wajpsmly.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wajpsmly.sc.entry.js",
		"common",
		49
	],
	"./wdewkb4s.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wdewkb4s.entry.js",
		0,
		"common",
		160
	],
	"./wdewkb4s.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wdewkb4s.sc.entry.js",
		0,
		"common",
		161
	],
	"./wsfvc8rr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wsfvc8rr.entry.js",
		"common",
		50
	],
	"./wsfvc8rr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wsfvc8rr.sc.entry.js",
		"common",
		51
	],
	"./wvqczsjg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wvqczsjg.entry.js",
		"common",
		52
	],
	"./wvqczsjg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wvqczsjg.sc.entry.js",
		"common",
		53
	],
	"./x4ue4dpx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/x4ue4dpx.entry.js",
		0,
		"common",
		162
	],
	"./x4ue4dpx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/x4ue4dpx.sc.entry.js",
		0,
		"common",
		163
	],
	"./xfbndl84.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xfbndl84.entry.js",
		"common",
		54
	],
	"./xfbndl84.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xfbndl84.sc.entry.js",
		"common",
		55
	],
	"./xgnma4yj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgnma4yj.entry.js",
		"common",
		102
	],
	"./xgnma4yj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgnma4yj.sc.entry.js",
		"common",
		103
	],
	"./xrxaow8a.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xrxaow8a.entry.js",
		"common",
		104
	],
	"./xrxaow8a.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xrxaow8a.sc.entry.js",
		"common",
		105
	],
	"./ycyyhg01.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ycyyhg01.entry.js",
		"common",
		106
	],
	"./ycyyhg01.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ycyyhg01.sc.entry.js",
		"common",
		107
	],
	"./ye5age0r.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ye5age0r.entry.js",
		164
	],
	"./ye5age0r.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ye5age0r.sc.entry.js",
		165
	],
	"./yurs1umq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yurs1umq.entry.js",
		"common",
		108
	],
	"./yurs1umq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yurs1umq.sc.entry.js",
		"common",
		109
	],
	"./yz37im3e.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yz37im3e.entry.js",
		"common",
		110
	],
	"./yz37im3e.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yz37im3e.sc.entry.js",
		"common",
		111
	],
	"./z9nt6ntd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z9nt6ntd.entry.js",
		"common",
		130
	],
	"./z9nt6ntd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z9nt6ntd.sc.entry.js",
		"common",
		131
	],
	"./zdhyxh0f.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zdhyxh0f.entry.js",
		"common",
		112
	],
	"./zdhyxh0f.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zdhyxh0f.sc.entry.js",
		"common",
		113
	],
	"./zykaqnfi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zykaqnfi.entry.js",
		"common",
		56
	],
	"./zykaqnfi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zykaqnfi.sc.entry.js",
		"common",
		57
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
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../bottom-sheet/bottom-sheet.module": [
		"./src/app/pages/bottom-sheet/bottom-sheet.module.ts",
		"bottom-sheet-bottom-sheet-module"
	],
	"../buttons/buttons.module": [
		"./src/app/pages/buttons/buttons.module.ts",
		"buttons-buttons-module"
	],
	"../expandable/expandable.module": [
		"./src/app/pages/expandable/expandable.module.ts",
		"expandable-expandable-module"
	],
	"../refresh/refresh.module": [
		"./src/app/pages/refresh/refresh.module.ts",
		"refresh-refresh-module"
	],
	"./pages/app-bar/app-bar.module": [
		"./src/app/pages/app-bar/app-bar.module.ts",
		"pages-app-bar-app-bar-module"
	],
	"./pages/bottom-sheet/bottom-sheet.module": [
		"./src/app/pages/bottom-sheet/bottom-sheet.module.ts",
		"bottom-sheet-bottom-sheet-module"
	],
	"./pages/buttons/buttons.module": [
		"./src/app/pages/buttons/buttons.module.ts",
		"buttons-buttons-module"
	],
	"./pages/components/components.module": [
		"./src/app/pages/components/components.module.ts",
		"pages-components-components-module"
	],
	"./pages/dialog/dialog.module": [
		"./src/app/pages/dialog/dialog.module.ts",
		"pages-dialog-dialog-module"
	],
	"./pages/directives/directives.module": [
		"./src/app/pages/directives/directives.module.ts",
		"pages-directives-directives-module"
	],
	"./pages/editable-label/editable-label.module": [
		"./src/app/pages/editable-label/editable-label.module.ts",
		"pages-editable-label-editable-label-module"
	],
	"./pages/expandable/expandable.module": [
		"./src/app/pages/expandable/expandable.module.ts",
		"expandable-expandable-module"
	],
	"./pages/getting-started/getting-started.module": [
		"./src/app/pages/getting-started/getting-started.module.ts",
		"pages-getting-started-getting-started-module"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/icon/icon.module": [
		"./src/app/pages/icon/icon.module.ts",
		"pages-icon-icon-module"
	],
	"./pages/image/image.module": [
		"./src/app/pages/image/image.module.ts",
		"pages-image-image-module"
	],
	"./pages/loading/loading.module": [
		"./src/app/pages/loading/loading.module.ts",
		"pages-loading-loading-module"
	],
	"./pages/native-map-bottom-sheet/native-map-bottom-sheet.module": [
		"./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.module.ts",
		"default~pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-mod~7c087229",
		"common",
		"pages-native-map-bottom-sheet-native-map-bottom-sheet-module"
	],
	"./pages/native-map/native-map.module": [
		"./src/app/pages/native-map/native-map.module.ts",
		"default~pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-mod~7c087229",
		"common",
		"pages-native-map-native-map-module"
	],
	"./pages/page-not-found/page-not-found.module": [
		"./src/app/pages/page-not-found/page-not-found.module.ts",
		"pages-page-not-found-page-not-found-module"
	],
	"./pages/password/password.module": [
		"./src/app/pages/password/password.module.ts",
		"pages-password-password-module"
	],
	"./pages/refresh/refresh.module": [
		"./src/app/pages/refresh/refresh.module.ts",
		"refresh-refresh-module"
	],
	"./pages/stepper/stepper.module": [
		"./src/app/pages/stepper/stepper.module.ts",
		"pages-stepper-stepper-module"
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
		var id = ids[0];
		return __webpack_require__(id);
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
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    { path: 'getting-started', loadChildren: './pages/getting-started/getting-started.module#GettingStartedPageModule' },
    { path: 'buttons', loadChildren: './pages/buttons/buttons.module#ButtonsPageModule' },
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
        path: 'native-map-bottom-sheet',
        loadChildren: './pages/native-map-bottom-sheet/native-map-bottom-sheet.module#NativeMapBottomSheetPageModule'
    },
    { path: 'dialog', loadChildren: './pages/dialog/dialog.module#DialogPageModule' },
    { path: 'image', loadChildren: './pages/image/image.module#ImagePageModule' },
    { path: 'refresh', loadChildren: './pages/refresh/refresh.module#RefreshPageModule' },
    { path: 'expandable', loadChildren: './pages/expandable/expandable.module#ExpandablePageModule' },
    { path: 'stepper', loadChildren: './pages/stepper/stepper.module#StepperPageModule' },
    { path: 'directives', loadChildren: './pages/directives/directives.module#DirectivesPageModule' },
    { path: 'editable-label', loadChildren: './pages/editable-label/editable-label.module#EditableLabelPageModule' },
    { path: '**', loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundPageModule' },
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

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu menuId=\"menuId\" [fivCollapseMenu]=\"false\" [hoverMenu]=\"true\" [width]=\"64\" [minWidth]=\"240\"\n      [maxWidth]=\"240\" #menu=menuCollapse>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <fiv-collapsable-menu-button #mb *fivIf=\"['desktop']\" [menu]=\"menu\"></fiv-collapsable-menu-button>\n          </ion-buttons>\n          <ion-title>Fivethree</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <fiv-router-item [text]=\"'Getting Started'\" [matchChildUrl]=\"true\" [shape]=\"'rounded'\"\n            [pageUrl]=\"'/getting-started'\">\n          </fiv-router-item>\n          <fiv-router-item [text]=\"'Installation'\" [matchChildUrl]=\"true\" [shape]=\"'rounded'\">\n          </fiv-router-item>\n          <fiv-router-item [icon]=\"p.icon\" [text]=\"p.title\" [matchChildUrl]=\"true\" [shape]=\"'rounded'\" [pageUrl]=\"p.url\"\n            *ngFor=\"let p of appPages\">\n          </fiv-router-item>\n          <ion-item-divider>\n            <ion-label>Documentation</ion-label>\n          </ion-item-divider>\n          <fiv-expandable #ex [isOpen]=\"false\">\n            <fiv-ripple header [hover]=\"true\" (fivClick)=\"ex.toggle()\">\n              <ion-item>\n                <ion-label>Components</ion-label>\n                <fiv-expandable-indicator icon=\"ios-arrow-down\"></fiv-expandable-indicator>\n              </ion-item>\n            </fiv-ripple>\n            <div content>\n              <fiv-router-item [icon]=\"p.icon\" [text]=\"p.title\" [matchChildUrl]=\"true\" [shape]=\"'rounded'\"\n                [pageUrl]=\"p.url\" *ngFor=\"let p of components\">\n              </fiv-router-item>\n            </div>\n          </fiv-expandable>\n          <fiv-expandable #dir [isOpen]=\"false\">\n            <fiv-ripple header [hover]=\"false\" (fivClick)=\"dir.toggle()\">\n              <ion-item>\n                <ion-label>Directives</ion-label>\n                <fiv-expandable-indicator icon=\"ios-arrow-down\"></fiv-expandable-indicator>\n              </ion-item>\n            </fiv-ripple>\n            <div content>\n              <fiv-router-item [icon]=\"p.icon\" [text]=\"p.title\" [matchChildUrl]=\"true\" [shape]=\"'rounded'\"\n                [pageUrl]=\"p.url\" *ngFor=\"let p of directives\">\n              </fiv-router-item>\n              <ion-item>\n                <ion-label>nothing yet</ion-label>\n              </ion-item>\n            </div>\n          </fiv-expandable>\n          <fiv-expandable #ser [isOpen]=\"false\">\n            <fiv-ripple header [hover]=\"false\" (fivClick)=\"ser.toggle()\">\n              <ion-item>\n                <ion-label>Services</ion-label>\n                <fiv-expandable-indicator icon=\"ios-arrow-down\"></fiv-expandable-indicator>\n              </ion-item>\n            </fiv-ripple>\n            <div content>\n              <fiv-router-item [icon]=\"p.icon\" [text]=\"p.title\" [matchChildUrl]=\"true\" [shape]=\"'rounded'\"\n                [pageUrl]=\"p.url\" *ngFor=\"let p of services\">\n              </fiv-router-item>\n              <ion-item>\n                <ion-label>nothing yet</ion-label>\n              </ion-item>\n            </div>\n          </fiv-expandable>\n          <ion-item-divider>\n            <ion-label>More</ion-label>\n          </ion-item-divider>\n          <fiv-router-item [text]=\"'Developer Tools'\" [matchChildUrl]=\"true\" [shape]=\"'rounded'\">\n          </fiv-router-item>\n        </ion-list>\n      </ion-content>\n      <ion-footer>\n        <ion-toolbar color=\"transparent\">\n          <ion-buttons slot=\"start\">\n            <a target=\"blank\" href=\"https://github.com/fivethree-team\">\n              <ion-button color=\"dark\">\n                <ion-icon slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n              </ion-button>\n            </a>\n            <a target=\"blank\" href=\"https://github.com/garygrossgarten\">\n              <ion-button color=\"dark\">\n                <img class=\"avatar\" src=\"https://pbs.twimg.com/profile_images/823932144473018369/vGv7gtS__400x400.jpg\">\n              </ion-button>\n            </a>\n            <a target=\"blank\" href=\"https://github.com/marcjulian\">\n              <ion-button color=\"dark\">\n                <img class=\"avatar\" src=\"https://pbs.twimg.com/profile_images/1020673483435540480/haTJfT0O_400x400.jpg\">\n              </ion-button>\n            </a>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
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
    function AppComponent(platform, splashScreen, statusBar, language, routing) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.language = language;
        this.routing = routing;
        this.components = [
            {
                title: 'App Bar',
                url: '/app-bar',
                icon: 'git-commit',
            },
            {
                title: 'Bottom Sheet',
                url: '/bottom-sheet',
                icon: 'ios-arrow-up',
            },
            {
                title: 'Dialog',
                url: '/dialog',
                icon: 'notifications',
            },
            {
                title: 'Editable Label',
                url: '/editable-label',
                icon: 'create',
            },
            {
                title: 'Expandable',
                url: '/expandable',
                icon: 'resize',
            },
            {
                title: 'Icon',
                url: '/icon',
                icon: 'mail-unread',
            },
            {
                title: 'Image Gallery',
                url: '/image',
                icon: 'image',
            },
            {
                title: 'Loading Indicators',
                url: '/loading',
                icon: 'time',
            },
            {
                title: 'Overflow Buttons',
                url: '/buttons',
                icon: 'more',
            },
            {
                title: 'Password Reveal Input',
                url: '/password',
                icon: 'key',
            },
            {
                title: 'Refresher',
                url: '/refresh',
                icon: 'refresh',
            },
            {
                title: 'Stepper',
                url: '/stepper',
                icon: 'share',
            }
        ];
        this.directives = [];
        this.services = [];
        this.language.initializeLanguage();
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.routing.loadRouting({ clearOn: ['/'], root: '/' });
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
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_5__["FivRoutingStateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_1__["FivethreeCoreModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                    }
                }),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }),
                ng_lottie__WEBPACK_IMPORTED_MODULE_13__["LottieAnimationViewModule"].forRoot(),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
                _services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example/example.component */ "./src/app/components/example/example.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _example_example_component__WEBPACK_IMPORTED_MODULE_0__["ExampleComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forChild(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild(),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_5__["FivethreeCoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                ng_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieAnimationViewModule"],
            ],
            exports: [
                _example_example_component__WEBPACK_IMPORTED_MODULE_0__["ExampleComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_5__["FivethreeCoreModule"],
                ng_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieAnimationViewModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/example/example.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/example/example.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"example\">\n  <ion-toolbar color=\"translucent\">\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"html || api || typescript || css\" (click)=\"showApi = !showApi\" [matTooltip]=\"showApi ? 'Close source' : 'View source'\">\n        <fiv-icon slot=\"start\" [name]=\"showApi ? 'md-close' : 'md-code'\"></fiv-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-card-header>\n    <ion-card-subtitle>{{subtitle}}</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <div [@listAnim]=\"showApi ? 'open' : 'closed'\" class=\"content-container\">\n      <mat-tab-group>\n        <mat-tab *ngIf=\"html\" label=\"HTML\">\n          <markdown [src]=\"html\"></markdown>\n        </mat-tab>\n        <mat-tab *ngIf=\"css\" label=\"CSS\">\n          <markdown [src]=\"css\"></markdown>\n        </mat-tab>\n        <mat-tab *ngIf=\"typescript\" label=\"TS\">\n          <markdown [src]=\"typescript\"></markdown>\n        </mat-tab>\n        <mat-tab *ngIf=\"api\" label=\"API\">\n          <markdown [src]=\"api\"></markdown>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n    <div class=\"content-container\">\n      <ng-content></ng-content>\n    </div>\n  </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./src/app/components/example/example.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/example/example.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block; }\n\n.swiper-slide {\n  text-align: left; }\n\n.content-container {\n  width: 100%; }\n\n@media (max-width: 411px) {\n  .example {\n    margin: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJO0lBQ0ksV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDQxMXB4KSB7XG4gICAgLmV4YW1wbGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/example/example.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/example/example.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
        this.showApi = false;
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "html", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "css", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "typescript", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "api", void 0);
    ExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/components/example/example.component.html"),
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('180ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0 }))
                    ])
                ])],
            styles: [__webpack_require__(/*! ./example.component.scss */ "./src/app/components/example/example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer #footer no-border>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4>Fivethree</h4>\n        <a class=\"links\" routerLink=\"/getting-started\" translate>common.get-started</a>\n        <a class=\"links\" href=\"https://fivethree.io/\" translate>footer.about</a>\n      </ion-col>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4 translate>footer.resources</h4>\n        <a class=\"links\" href=\"https://angular.io/\">Angular</a>\n        <a class=\"links\" href=\"https://ionicframework.com/\">Ionic</a>\n      </ion-col>\n      <ion-col sizeXs=\"12\" sizeLg=\"6\" id=\"social\">\n        <a href=\"https://www.github.com/fivethree-team/fivethree\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n        </a>\n        <a href=\"https://twitter.com/fivethreeteam\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  background: var(--ion-color-dark);\n  padding: 24px 0 24px 0; }\n\nh4 {\n  color: var(--ion-color-dark-contrast); }\n\n.links {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 16px;\n  line-height: 1.3;\n  color: var(--ion-color-light); }\n\na:hover {\n  color: var(--ion-color-light-shade); }\n\na {\n  text-decoration: none; }\n\n#social {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n#social a {\n    color: var(--ion-color-light);\n    font-size: 2rem;\n    padding: 0 12px 0 12px; }\n\n#social a:first-child {\n    padding-left: 0; }\n\n#social a:last-child {\n    padding-right: 0; }\n\n@media screen and (max-width: 991px) {\n  #social {\n    order: -1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQWlDO0VBQ2pDLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHFDQUFxQyxFQUFBOztBQUd6QztFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUh2QjtJQU1RLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Ysc0JBQXNCLEVBQUE7O0FBUjlCO0lBWVEsZUFBZSxFQUFBOztBQVp2QjtJQWdCUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSTtJQUNJLFNBQVMsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBhZGRpbmc6IDI0cHggMCAyNHB4IDA7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xufVxuXG4ubGlua3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI3NvY2lhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMTJweCAwIDEycHg7XG4gICAgfVxuXG4gICAgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG5cbiAgICBhOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAjc29jaWFsIHtcbiAgICAgICAgb3JkZXI6IC0xO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(content, el, renderer) {
        this.content = content;
        this.el = el;
        this.renderer = renderer;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.content.getScrollElement()
            .then(function (el) {
            console.log('min height', el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
            _this.setMinHeight(el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
        });
        this.resize = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10)).subscribe(function (res) {
            _this.content.getScrollElement()
                .then(function (el) {
                console.log('min height', el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
                _this.setMinHeight(el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
            });
        });
        console.log(this.el);
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.resize.unsubscribe();
    };
    FooterComponent.prototype.setMinHeight = function (height) {
        document.body.style.setProperty('--example-min-height', height + "px");
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <ng-container *ngIf=\"backbutton\">\n        <fiv-back-button></fiv-back-button>\n      </ng-container>\n    </ion-buttons>\n    <ion-title (click)=\"onTitleClicked()\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <a href=\"https://fivethree.io\" target=\"blank\">\n        <ion-button color=\"secondary\" fill=\"outline\" shape=\"round\">\n          <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n          fivethree.io\n        </ion-button>\n      </a>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  cursor: pointer; }\n\n#github {\n  color: var(--ion-color-light-contrast); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLHNDQUFzQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNnaXRodWIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navController) {
        this.navController = navController;
        this.title = 'Ionic 4 Components';
        this.backbutton = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onTitleClicked = function () {
        this.navController.navigateRoot('/');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "backbutton", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/icons.ts":
/*!***********************************!*\
  !*** ./src/app/services/icons.ts ***!
  \***********************************/
/*! exports provided: icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
// Generated by https://quicktype.io
var icons = {
    'icons': [
        {
            'icons': [
                'ios-add-circle-outline',
                'md-add-circle-outline'
            ],
            'tags': [
                'circle'
            ]
        },
        {
            'icons': [
                'ios-add-circle',
                'md-add-circle'
            ],
            'tags': [
                'add',
                'circle'
            ]
        },
        {
            'icons': [
                'ios-add',
                'md-add'
            ],
            'tags': [
                'add',
                'include',
                'invite',
                'plus'
            ]
        },
        {
            'icons': [
                'ios-airplane',
                'md-airplane'
            ],
            'tags': [
                'airplane',
                'plane'
            ]
        },
        {
            'icons': [
                'ios-alarm',
                'md-alarm'
            ],
            'tags': [
                'alarm'
            ]
        },
        {
            'icons': [
                'ios-albums',
                'md-albums'
            ],
            'tags': [
                'albums',
                'boxes',
                'slides',
                'square'
            ]
        },
        {
            'icons': [
                'ios-alert',
                'md-alert'
            ],
            'tags': [
                '!',
                'alert',
                'attention',
                'exclamation',
                'notice',
                'warning'
            ]
        },
        {
            'icons': [
                'ios-american-football',
                'md-american-football'
            ],
            'tags': [
                'american',
                'football'
            ]
        },
        {
            'icons': [
                'ios-analytics',
                'md-analytics'
            ],
            'tags': [
                'analytics',
                'data',
                'metrics',
                'track'
            ]
        },
        {
            'icons': [
                'ios-aperture',
                'md-aperture'
            ],
            'tags': [
                'aperture',
                'dark',
                'images',
                'levels',
                'light',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-apps',
                'md-apps'
            ],
            'tags': [
                'apps',
                'applications'
            ]
        },
        {
            'icons': [
                'ios-appstore',
                'md-appstore'
            ],
            'tags': [
                'appstore',
                'store'
            ]
        },
        {
            'icons': [
                'ios-archive',
                'md-archive'
            ],
            'tags': [
                'archive',
                'email'
            ]
        },
        {
            'icons': [
                'ios-arrow-back',
                'md-arrow-back'
            ],
            'tags': [
                'arrow',
                'back',
                'chevron',
                'navigation'
            ]
        },
        {
            'icons': [
                'ios-arrow-down',
                'md-arrow-down'
            ],
            'tags': [
                'arrow',
                'chevron',
                'down'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropdown-circle',
                'md-arrow-dropdown-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropdown'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropdown',
                'md-arrow-dropdown'
            ],
            'tags': [
                'arrow',
                'dropdown'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropleft-circle',
                'md-arrow-dropleft-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropleft'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropleft',
                'md-arrow-dropleft'
            ],
            'tags': [
                'arrow',
                'dropleft'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropright-circle',
                'md-arrow-dropright-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropright'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropright',
                'md-arrow-dropright'
            ],
            'tags': [
                'arrow',
                'dropright'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropup-circle',
                'md-arrow-dropup-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropup'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropup',
                'md-arrow-dropup'
            ],
            'tags': [
                'arrow',
                'dropup'
            ]
        },
        {
            'icons': [
                'ios-arrow-forward',
                'md-arrow-forward'
            ],
            'tags': [
                'arrow',
                'chevron',
                'forward',
                'navigation'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-back',
                'md-arrow-round-back'
            ],
            'tags': [
                'arrow',
                'back',
                'round'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-down',
                'md-arrow-round-down'
            ],
            'tags': [
                'arrow',
                'down',
                'round'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-forward',
                'md-arrow-round-forward'
            ],
            'tags': [
                'arrow',
                'forward',
                'round'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-up',
                'md-arrow-round-up'
            ],
            'tags': [
                'arrow',
                'round',
                'up'
            ]
        },
        {
            'icons': [
                'ios-arrow-up',
                'md-arrow-up'
            ],
            'tags': [
                'arrow',
                'chevron',
                'up'
            ]
        },
        {
            'icons': [
                'ios-at',
                'md-at'
            ],
            'tags': [
                '@',
                'at'
            ]
        },
        {
            'icons': [
                'ios-attach',
                'md-attach'
            ],
            'tags': [
                'attach'
            ]
        },
        {
            'icons': [
                'ios-backspace',
                'md-backspace'
            ],
            'tags': [
                'backspace'
            ]
        },
        {
            'icons': [
                'ios-barcode',
                'md-barcode'
            ],
            'tags': [
                'barcode',
                'camera',
                'reader'
            ]
        },
        {
            'icons': [
                'ios-baseball',
                'md-baseball'
            ],
            'tags': [
                'baseball'
            ]
        },
        {
            'icons': [
                'ios-basket',
                'md-basket'
            ],
            'tags': [
                'basket'
            ]
        },
        {
            'icons': [
                'ios-basketball',
                'md-basketball'
            ],
            'tags': [
                'basketball'
            ]
        },
        {
            'icons': [
                'ios-battery-charging',
                'md-battery-charging'
            ],
            'tags': [
                'battery',
                'charging'
            ]
        },
        {
            'icons': [
                'ios-battery-dead',
                'md-battery-dead'
            ],
            'tags': [
                'battery',
                'dead'
            ]
        },
        {
            'icons': [
                'ios-battery-full',
                'md-battery-full'
            ],
            'tags': [
                'battery',
                'full'
            ]
        },
        {
            'icons': [
                'ios-beaker',
                'md-beaker'
            ],
            'tags': [
                'beaker',
                'flask',
                'mixture',
                'potion'
            ]
        },
        {
            'icons': [
                'ios-bed',
                'md-bed'
            ],
            'tags': [
                'bed',
                'sleep'
            ]
        },
        {
            'icons': [
                'ios-beer',
                'md-beer'
            ],
            'tags': [
                'beer',
                'drink',
                'eat',
                'food'
            ]
        },
        {
            'icons': [
                'ios-bicycle',
                'md-bicycle'
            ],
            'tags': [
                'bicycle'
            ]
        },
        {
            'icons': [
                'ios-bluetooth',
                'md-bluetooth'
            ],
            'tags': [
                'bluetooth',
                'cloud',
                'connection'
            ]
        },
        {
            'icons': [
                'ios-boat',
                'md-boat'
            ],
            'tags': [
                'boat'
            ]
        },
        {
            'icons': [
                'ios-body',
                'md-body'
            ],
            'tags': [
                'body'
            ]
        },
        {
            'icons': [
                'ios-bonfire',
                'md-bonfire'
            ],
            'tags': [
                'bonfire',
                'heat',
                'hot'
            ]
        },
        {
            'icons': [
                'ios-book',
                'md-book'
            ],
            'tags': [
                'book',
                'read'
            ]
        },
        {
            'icons': [
                'ios-bookmark',
                'md-bookmark'
            ],
            'tags': [
                'bookmark',
                'favorite',
                'save',
                'tag'
            ]
        },
        {
            'icons': [
                'ios-bookmarks',
                'md-bookmarks'
            ],
            'tags': [
                'bookmarks',
                'favorite'
            ]
        },
        {
            'icons': [
                'ios-bowtie',
                'md-bowtie'
            ],
            'tags': [
                'bowtie'
            ]
        },
        {
            'icons': [
                'ios-briefcase',
                'md-briefcase'
            ],
            'tags': [
                'briefcase',
                'folder',
                'organize'
            ]
        },
        {
            'icons': [
                'ios-browsers',
                'md-browsers'
            ],
            'tags': [
                'browsers',
                'square'
            ]
        },
        {
            'icons': [
                'ios-brush',
                'md-brush'
            ],
            'tags': [
                'brush'
            ]
        },
        {
            'icons': [
                'ios-bug',
                'md-bug'
            ],
            'tags': [
                'bug',
                'develop',
                'error',
                'hacker',
                'program'
            ]
        },
        {
            'icons': [
                'ios-build',
                'md-build'
            ],
            'tags': [
                'build'
            ]
        },
        {
            'icons': [
                'ios-bulb',
                'md-bulb'
            ],
            'tags': [
                'bulb'
            ]
        },
        {
            'icons': [
                'ios-bus',
                'md-bus'
            ],
            'tags': [
                'bus'
            ]
        },
        {
            'icons': [
                'ios-business',
                'md-business'
            ],
            'tags': [
                'business'
            ]
        },
        {
            'icons': [
                'ios-cafe',
                'md-cafe'
            ],
            'tags': [
                'cafe'
            ]
        },
        {
            'icons': [
                'ios-calculator',
                'md-calculator'
            ],
            'tags': [
                'arithmatic',
                'calculator',
                'math'
            ]
        },
        {
            'icons': [
                'ios-calendar',
                'md-calendar'
            ],
            'tags': [
                'calendar',
                'date',
                'month',
                'week'
            ]
        },
        {
            'icons': [
                'ios-call',
                'md-call'
            ],
            'tags': [
                'call',
                'telephone'
            ]
        },
        {
            'icons': [
                'ios-camera',
                'md-camera'
            ],
            'tags': [
                'camera',
                'image',
                'photo'
            ]
        },
        {
            'icons': [
                'ios-car',
                'md-car'
            ],
            'tags': [
                'car'
            ]
        },
        {
            'icons': [
                'ios-card',
                'md-card'
            ],
            'tags': [
                '$',
                'card',
                'cash',
                'credit',
                'debit',
                'dollars',
                'money',
                'price',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-cart',
                'md-cart'
            ],
            'tags': [
                'cart'
            ]
        },
        {
            'icons': [
                'ios-cash',
                'md-cash'
            ],
            'tags': [
                '$',
                'cash',
                'credit',
                'debit',
                'dollars',
                'money',
                'price',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-cellular',
                'md-cellular'
            ],
            'tags': [
                'cellular'
            ]
        },
        {
            'icons': [
                'ios-chatboxes',
                'md-chatboxes'
            ],
            'tags': [
                'chatboxes',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-chatbubbles',
                'md-chatbubbles'
            ],
            'tags': [
                'chatbubbles',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-checkbox-outline',
                'md-checkbox-outline'
            ],
            'tags': [
                'checkbox'
            ]
        },
        {
            'icons': [
                'ios-checkbox',
                'md-checkbox'
            ],
            'tags': [
                'checkbox'
            ]
        },
        {
            'icons': [
                'ios-checkmark-circle-outline',
                'md-checkmark-circle-outline'
            ],
            'tags': [
                'checkmark'
            ]
        },
        {
            'icons': [
                'ios-checkmark-circle',
                'md-checkmark-circle'
            ],
            'tags': [
                'checkmark',
                'circle'
            ]
        },
        {
            'icons': [
                'ios-checkmark',
                'md-checkmark'
            ],
            'tags': [
                'checkmark'
            ]
        },
        {
            'icons': [
                'ios-clipboard',
                'md-clipboard'
            ],
            'tags': [
                'clipboard',
                'write'
            ]
        },
        {
            'icons': [
                'ios-clock',
                'md-clock'
            ],
            'tags': [
                'clock',
                'time'
            ]
        },
        {
            'icons': [
                'ios-close-circle-outline',
                'md-close-circle-outline'
            ],
            'tags': [
                'close',
                'cicle'
            ]
        },
        {
            'icons': [
                'ios-close-circle',
                'md-close-circle'
            ],
            'tags': [
                'circle',
                'close'
            ]
        },
        {
            'icons': [
                'ios-close',
                'md-close'
            ],
            'tags': [
                'close',
                'delete',
                'remove'
            ]
        },
        {
            'icons': [
                'ios-cloud-circle',
                'md-cloud-circle'
            ],
            'tags': [
                'circle',
                'cloud'
            ]
        },
        {
            'icons': [
                'ios-cloud-done',
                'md-cloud-done'
            ],
            'tags': [
                'cloud',
                'done'
            ]
        },
        {
            'icons': [
                'ios-cloud-download',
                'md-cloud-download'
            ],
            'tags': [
                'cloud',
                'download',
                'storage'
            ]
        },
        {
            'icons': [
                'ios-cloud-outline',
                'md-cloud-outline'
            ],
            'tags': [
                'cloud'
            ]
        },
        {
            'icons': [
                'ios-cloud-upload',
                'md-cloud-upload'
            ],
            'tags': [
                'cloud',
                'storage',
                'upload'
            ]
        },
        {
            'icons': [
                'ios-cloud',
                'md-cloud'
            ],
            'tags': [
                'cloud',
                'storage',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-cloudy-night',
                'md-cloudy-night'
            ],
            'tags': [
                'cloudy',
                'night',
                'overcast',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-cloudy',
                'md-cloudy'
            ],
            'tags': [
                'cloudy',
                'overcast',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-code-download',
                'md-code-download'
            ],
            'tags': [
                'code',
                'develop',
                'download',
                'hacker',
                'program'
            ]
        },
        {
            'icons': [
                'ios-code-working',
                'md-code-working'
            ],
            'tags': [
                'code',
                'develop',
                'hacker',
                'program',
                'working'
            ]
        },
        {
            'icons': [
                'ios-code',
                'md-code'
            ],
            'tags': [
                'code',
                'develop',
                'hacker',
                'program'
            ]
        },
        {
            'icons': [
                'ios-cog',
                'md-cog'
            ],
            'tags': [
                'cog',
                'gear',
                'options',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-color-fill',
                'md-color-fill'
            ],
            'tags': [
                'color',
                'fill'
            ]
        },
        {
            'icons': [
                'ios-color-filter',
                'md-color-filter'
            ],
            'tags': [
                'color',
                'filter'
            ]
        },
        {
            'icons': [
                'ios-color-palette',
                'md-color-palette'
            ],
            'tags': [
                'color',
                'palette'
            ]
        },
        {
            'icons': [
                'ios-color-wand',
                'md-color-wand'
            ],
            'tags': [
                'color',
                'wand'
            ]
        },
        {
            'icons': [
                'ios-compass',
                'md-compass'
            ],
            'tags': [
                'compass',
                'directions',
                'location',
                'navigation'
            ]
        },
        {
            'icons': [
                'ios-construct',
                'md-construct'
            ],
            'tags': [
                'construct'
            ]
        },
        {
            'icons': [
                'ios-contact',
                'md-contact'
            ],
            'tags': [
                'contact',
                'people',
                'users'
            ]
        },
        {
            'icons': [
                'ios-contacts',
                'md-contacts'
            ],
            'tags': [
                'contacts',
                'people',
                'users'
            ]
        },
        {
            'icons': [
                'ios-contract',
                'md-contract'
            ],
            'tags': [
                'contract'
            ]
        },
        {
            'icons': [
                'ios-contrast',
                'md-contrast'
            ],
            'tags': [
                'contrast',
                'dark',
                'images',
                'levels',
                'light',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-copy',
                'md-copy'
            ],
            'tags': [
                'copy',
                'duplicate',
                'paper'
            ]
        },
        {
            'icons': [
                'ios-create',
                'md-create'
            ],
            'tags': [
                'create'
            ]
        },
        {
            'icons': [
                'ios-crop',
                'md-crop'
            ],
            'tags': [
                'crop'
            ]
        },
        {
            'icons': [
                'ios-cube',
                'md-cube'
            ],
            'tags': [
                'box',
                'container',
                'cube',
                'square'
            ]
        },
        {
            'icons': [
                'ios-cut',
                'md-cut'
            ],
            'tags': [
                'cut'
            ]
        },
        {
            'icons': [
                'ios-desktop',
                'md-desktop'
            ],
            'tags': [
                'desktop'
            ]
        },
        {
            'icons': [
                'ios-disc',
                'md-disc'
            ],
            'tags': [
                'cd',
                'disc',
                'vinyl'
            ]
        },
        {
            'icons': [
                'ios-document',
                'md-document'
            ],
            'tags': [
                'document',
                'file',
                'paper'
            ]
        },
        {
            'icons': [
                'ios-done-all',
                'md-done-all'
            ],
            'tags': [
                'all',
                'done'
            ]
        },
        {
            'icons': [
                'ios-download',
                'md-download'
            ],
            'tags': [
                'download',
                'export'
            ]
        },
        {
            'icons': [
                'ios-easel',
                'md-easel'
            ],
            'tags': [
                'easel'
            ]
        },
        {
            'icons': [
                'ios-egg',
                'md-egg'
            ],
            'tags': [
                'baby',
                'bird',
                'birth',
                'egg',
                'twitter'
            ]
        },
        {
            'icons': [
                'ios-exit',
                'md-exit'
            ],
            'tags': [
                'exit'
            ]
        },
        {
            'icons': [
                'ios-expand',
                'md-expand'
            ],
            'tags': [
                'expand'
            ]
        },
        {
            'icons': [
                'ios-eye-off',
                'md-eye-off'
            ],
            'tags': [
                'eye',
                'off'
            ]
        },
        {
            'icons': [
                'ios-eye',
                'md-eye'
            ],
            'tags': [
                'exposed',
                'eye',
                'look',
                'see',
                'view'
            ]
        },
        {
            'icons': [
                'ios-fastforward',
                'md-fastforward'
            ],
            'tags': [
                'fastforward',
                'jump',
                'next',
                'skip'
            ]
        },
        {
            'icons': [
                'ios-female',
                'md-female'
            ],
            'tags': [
                'dudette',
                'female',
                'girl',
                'lady'
            ]
        },
        {
            'icons': [
                'ios-filing',
                'md-filing'
            ],
            'tags': [
                'archive',
                'filing'
            ]
        },
        {
            'icons': [
                'ios-film',
                'md-film'
            ],
            'tags': [
                'film'
            ]
        },
        {
            'icons': [
                'ios-finger-print',
                'md-finger-print'
            ],
            'tags': [
                'finger',
                'print'
            ]
        },
        {
            'icons': [
                'ios-fitness',
                'md-fitness'
            ],
            'tags': [
                'fitness'
            ]
        },
        {
            'icons': [
                'ios-flag',
                'md-flag'
            ],
            'tags': [
                'favorite',
                'flag',
                'marker'
            ]
        },
        {
            'icons': [
                'ios-flame',
                'md-flame'
            ],
            'tags': [
                'fire',
                'flame',
                'heat',
                'hot'
            ]
        },
        {
            'icons': [
                'ios-flash-off',
                'md-flash-off'
            ],
            'tags': [
                'flash'
            ]
        },
        {
            'icons': [
                'ios-flash',
                'md-flash'
            ],
            'tags': [
                'flash',
                'lightning',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-flashlight',
                'md-flashlight'
            ],
            'tags': [
                'flashlight'
            ]
        },
        {
            'icons': [
                'ios-flask',
                'md-flask'
            ],
            'tags': [
                'bubbles',
                'flask',
                'mixture',
                'potion'
            ]
        },
        {
            'icons': [
                'ios-flower',
                'md-flower'
            ],
            'tags': [
                'flower'
            ]
        },
        {
            'icons': [
                'ios-folder-open',
                'md-folder-open'
            ],
            'tags': [
                'folder',
                'open'
            ]
        },
        {
            'icons': [
                'ios-folder',
                'md-folder'
            ],
            'tags': [
                'file',
                'folder'
            ]
        },
        {
            'icons': [
                'ios-football',
                'md-football'
            ],
            'tags': [
                'football',
                'soccer'
            ]
        },
        {
            'icons': [
                'ios-funnel',
                'md-funnel'
            ],
            'tags': [
                'funnel',
                'sort'
            ]
        },
        {
            'icons': [
                'ios-gift',
                'md-gift'
            ],
            'tags': [
                'gift'
            ]
        },
        {
            'icons': [
                'ios-git-branch',
                'md-git-branch'
            ],
            'tags': [
                'branch',
                'git'
            ]
        },
        {
            'icons': [
                'ios-git-commit',
                'md-git-commit'
            ],
            'tags': [
                'commit',
                'git'
            ]
        },
        {
            'icons': [
                'ios-git-compare',
                'md-git-compare'
            ],
            'tags': [
                'compare',
                'git'
            ]
        },
        {
            'icons': [
                'ios-git-merge',
                'md-git-merge'
            ],
            'tags': [
                'git',
                'merge'
            ]
        },
        {
            'icons': [
                'ios-git-network',
                'md-git-network'
            ],
            'tags': [
                'git',
                'network'
            ]
        },
        {
            'icons': [
                'ios-git-pull-request',
                'md-git-pull-request'
            ],
            'tags': [
                'git',
                'pull',
                'request'
            ]
        },
        {
            'icons': [
                'ios-glasses',
                'md-glasses'
            ],
            'tags': [
                'glasses',
                'look',
                'reading',
                'see',
                'steve'
            ]
        },
        {
            'icons': [
                'ios-globe',
                'md-globe'
            ],
            'tags': [
                'globe'
            ]
        },
        {
            'icons': [
                'ios-grid',
                'md-grid'
            ],
            'tags': [
                'grid',
                'menu'
            ]
        },
        {
            'icons': [
                'ios-hammer',
                'md-hammer'
            ],
            'tags': [
                'hammer',
                'options',
                'settings',
                'tools'
            ]
        },
        {
            'icons': [
                'ios-hand',
                'md-hand'
            ],
            'tags': [
                'hand',
                'stop'
            ]
        },
        {
            'icons': [
                'ios-happy',
                'md-happy'
            ],
            'tags': [
                'fun',
                'good',
                'happy',
                'like',
                'yes'
            ]
        },
        {
            'icons': [
                'ios-headset',
                'md-headset'
            ],
            'tags': [
                'headset'
            ]
        },
        {
            'icons': [
                'ios-heart',
                'md-heart'
            ],
            'tags': [
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-heart-dislike',
                'md-heart-dislike'
            ],
            'tags': [
                'dislike',
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-heart-empty',
                'md-heart-empty'
            ],
            'tags': [
                'empty',
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-heart-half',
                'md-heart-half'
            ],
            'tags': [
                'half',
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-help-buoy',
                'md-help-buoy'
            ],
            'tags': [
                '?',
                'buoy',
                'help',
                'question'
            ]
        },
        {
            'icons': [
                'ios-help-circle-outline',
                'md-help-circle-outline'
            ],
            'tags': [
                'help'
            ]
        },
        {
            'icons': [
                'ios-help-circle',
                'md-help-circle'
            ],
            'tags': [
                'circle',
                'help'
            ]
        },
        {
            'icons': [
                'ios-help',
                'md-help'
            ],
            'tags': [
                '?',
                'help',
                'information',
                'question'
            ]
        },
        {
            'icons': [
                'ios-home',
                'md-home'
            ],
            'tags': [
                'home',
                'house'
            ]
        },
        {
            'icons': [
                'ios-hourglass',
                'md-hourglass'
            ],
            'tags': [
                'hourglass'
            ]
        },
        {
            'icons': [
                'ios-ice-cream',
                'md-ice-cream'
            ],
            'tags': [
                'cream',
                'ice'
            ]
        },
        {
            'icons': [
                'ios-image',
                'md-image'
            ],
            'tags': [
                'camera',
                'image',
                'photo'
            ]
        },
        {
            'icons': [
                'ios-images',
                'md-images'
            ],
            'tags': [
                'images',
                'photo'
            ]
        },
        {
            'icons': [
                'ios-infinite',
                'md-infinite'
            ],
            'tags': [
                'forever',
                'infinite',
                'loop'
            ]
        },
        {
            'icons': [
                'ios-information-circle-outline',
                'md-information-circle-outline'
            ],
            'tags': [
                'information'
            ]
        },
        {
            'icons': [
                'ios-information-circle',
                'md-information-circle'
            ],
            'tags': [
                'circle',
                'information'
            ]
        },
        {
            'icons': [
                'ios-information',
                'md-information'
            ],
            'tags': [
                'help',
                'information',
                'knowledge'
            ]
        },
        {
            'icons': [
                'ios-jet',
                'md-jet'
            ],
            'tags': [
                'fly',
                'jet',
                'plane'
            ]
        },
        {
            'icons': [
                'ios-journal',
                'md-journal'
            ],
            'tags': [
                'journal'
            ]
        },
        {
            'icons': [
                'ios-key',
                'md-key'
            ],
            'tags': [
                'access',
                'key'
            ]
        },
        {
            'icons': [
                'ios-keypad',
                'md-keypad'
            ],
            'tags': [
                'keypad',
                'type'
            ]
        },
        {
            'icons': [
                'ios-laptop',
                'md-laptop'
            ],
            'tags': [
                'apple',
                'laptop',
                'macbook',
                'osx'
            ]
        },
        {
            'icons': [
                'ios-leaf',
                'md-leaf'
            ],
            'tags': [
                'green',
                'leaf',
                'nature',
                'plant',
                'recycle'
            ]
        },
        {
            'icons': [
                'ios-link',
                'md-link'
            ],
            'tags': [
                'anchor',
                'attach',
                'chain',
                'href',
                'link'
            ]
        },
        {
            'icons': [
                'ios-list-box',
                'md-list-box'
            ],
            'tags': [
                'box',
                'list'
            ]
        },
        {
            'icons': [
                'ios-list',
                'md-list'
            ],
            'tags': [
                'list'
            ]
        },
        {
            'icons': [
                'ios-locate',
                'md-locate'
            ],
            'tags': [
                'gps',
                'locate',
                'maps',
                'navigate'
            ]
        },
        {
            'icons': [
                'ios-lock',
                'md-lock'
            ],
            'tags': [
                'lock'
            ]
        },
        {
            'icons': [
                'ios-log-in',
                'md-log-in'
            ],
            'tags': [
                'in',
                'log',
                'signin'
            ]
        },
        {
            'icons': [
                'ios-log-out',
                'md-log-out'
            ],
            'tags': [
                'log',
                'out',
                'signout'
            ]
        },
        {
            'icons': [
                'ios-magnet',
                'md-magnet'
            ],
            'tags': [
                'attraction',
                'magnet',
                'sticky'
            ]
        },
        {
            'icons': [
                'ios-mail-open',
                'md-mail-open'
            ],
            'tags': [
                'mail',
                'open'
            ]
        },
        {
            'icons': [
                'ios-mail-unread',
                'md-mail-unread'
            ],
            'tags': [
                'mail',
                'unread'
            ]
        },
        {
            'icons': [
                'ios-mail',
                'md-mail'
            ],
            'tags': [
                'email',
                'mail'
            ]
        },
        {
            'icons': [
                'ios-male',
                'md-male'
            ],
            'tags': [
                'boy',
                'dude',
                'guy',
                'male',
                'male'
            ]
        },
        {
            'icons': [
                'ios-man',
                'md-man'
            ],
            'tags': [
                'boy',
                'dude',
                'guy',
                'male',
                'man'
            ]
        },
        {
            'icons': [
                'ios-map',
                'md-map'
            ],
            'tags': [
                'gps',
                'map',
                'navigation',
                'pin'
            ]
        },
        {
            'icons': [
                'ios-medal',
                'md-medal'
            ],
            'tags': [
                'medal'
            ]
        },
        {
            'icons': [
                'ios-medical',
                'md-medical'
            ],
            'tags': [
                'medical'
            ]
        },
        {
            'icons': [
                'ios-medkit',
                'md-medkit'
            ],
            'tags': [
                'case',
                'disease',
                'firstaid',
                'health',
                'medkit',
                'sick'
            ]
        },
        {
            'icons': [
                'ios-megaphone',
                'md-megaphone'
            ],
            'tags': [
                'megaphone'
            ]
        },
        {
            'icons': [
                'ios-menu',
                'md-menu'
            ],
            'tags': [
                'menu'
            ]
        },
        {
            'icons': [
                'ios-mic-off',
                'md-mic-off'
            ],
            'tags': [
                'mic',
                'noise',
                'off',
                'sound',
                'speaker',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-mic',
                'md-mic'
            ],
            'tags': [
                'mic',
                'noise',
                'sound',
                'speaker',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-microphone',
                'md-microphone'
            ],
            'tags': [
                'microphone',
                'music',
                'noise',
                'recorde',
                'sound',
                'speak'
            ]
        },
        {
            'icons': [
                'ios-moon',
                'md-moon'
            ],
            'tags': [
                'dark',
                'moon',
                'night',
                'sky'
            ]
        },
        {
            'icons': [
                'ios-more',
                'md-more'
            ],
            'tags': [
                'more',
                'options'
            ]
        },
        {
            'icons': [
                'ios-move',
                'md-move'
            ],
            'tags': [
                'move'
            ]
        },
        {
            'icons': [
                'ios-musical-note',
                'md-musical-note'
            ],
            'tags': [
                'listening',
                'musical',
                'noise',
                'note',
                'play',
                'sound'
            ]
        },
        {
            'icons': [
                'ios-musical-notes',
                'md-musical-notes'
            ],
            'tags': [
                'listening',
                'musical',
                'noise',
                'notes',
                'play',
                'sound'
            ]
        },
        {
            'icons': [
                'ios-navigate',
                'md-navigate'
            ],
            'tags': [
                'gps',
                'location',
                'map',
                'navigate',
                'pin'
            ]
        },
        {
            'icons': [
                'ios-notifications-off',
                'md-notifications-off'
            ],
            'tags': [
                'notifications',
                'off'
            ]
        },
        {
            'icons': [
                'ios-notifications-outline',
                'md-notifications-outline'
            ],
            'tags': [
                'notifications'
            ]
        },
        {
            'icons': [
                'ios-notifications',
                'md-notifications'
            ],
            'tags': [
                'notifications'
            ]
        },
        {
            'icons': [
                'ios-nuclear',
                'md-nuclear'
            ],
            'tags': [
                'danger',
                'hazard',
                'nuclear',
                'warning'
            ]
        },
        {
            'icons': [
                'ios-nutrition',
                'md-nutrition'
            ],
            'tags': [
                'nutrition'
            ]
        },
        {
            'icons': [
                'ios-open',
                'md-open'
            ],
            'tags': [
                'open'
            ]
        },
        {
            'icons': [
                'ios-options',
                'md-options'
            ],
            'tags': [
                'options'
            ]
        },
        {
            'icons': [
                'ios-outlet',
                'md-outlet'
            ],
            'tags': [
                'computer',
                'digital',
                'electricity',
                'outlet'
            ]
        },
        {
            'icons': [
                'ios-paper-plane',
                'md-paper-plane'
            ],
            'tags': [
                'paper',
                'plane'
            ]
        },
        {
            'icons': [
                'ios-paper',
                'md-paper'
            ],
            'tags': [
                'feed',
                'paper',
                'paper'
            ]
        },
        {
            'icons': [
                'ios-partly-sunny',
                'md-partly-sunny'
            ],
            'tags': [
                'partly',
                'sunny'
            ]
        },
        {
            'icons': [
                'ios-pause',
                'md-pause'
            ],
            'tags': [
                'break',
                'freeze',
                'hold',
                'music',
                'pause'
            ]
        },
        {
            'icons': [
                'ios-paw',
                'md-paw'
            ],
            'tags': [
                'paw'
            ]
        },
        {
            'icons': [
                'ios-people',
                'md-people'
            ],
            'tags': [
                'head',
                'human',
                'people',
                'person',
                'stalker',
                'users'
            ]
        },
        {
            'icons': [
                'ios-person-add',
                'md-person-add'
            ],
            'tags': [
                'add',
                'head',
                'human',
                'member',
                'new',
                'person',
                'staff',
                'users'
            ]
        },
        {
            'icons': [
                'ios-person',
                'md-person'
            ],
            'tags': [
                'head',
                'human',
                'person',
                'staff',
                'users'
            ]
        },
        {
            'icons': [
                'ios-phone-landscape',
                'md-phone-landscape'
            ],
            'tags': [
                'landscape',
                'phone'
            ]
        },
        {
            'icons': [
                'ios-phone-portrait',
                'md-phone-portrait'
            ],
            'tags': [
                'phone',
                'portrait'
            ]
        },
        {
            'icons': [
                'ios-photos',
                'md-photos'
            ],
            'tags': [
                'images',
                'photos',
                'square',
                'stills'
            ]
        },
        {
            'icons': [
                'ios-pie',
                'md-pie'
            ],
            'tags': [
                'cog',
                'options',
                'pie',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-pin',
                'md-pin'
            ],
            'tags': [
                'gps',
                'navigation',
                'pin'
            ]
        },
        {
            'icons': [
                'ios-pint',
                'md-pint'
            ],
            'tags': [
                'pint'
            ]
        },
        {
            'icons': [
                'ios-pizza',
                'md-pizza'
            ],
            'tags': [
                'drink',
                'eat',
                'food',
                'pizza'
            ]
        },
        {
            'icons': [
                'ios-planet',
                'md-planet'
            ],
            'tags': [
                'globe',
                'home',
                'nature',
                'planet',
                'planet',
                'space'
            ]
        },
        {
            'icons': [
                'ios-play-circle',
                'md-play-circle'
            ],
            'tags': [
                'play'
            ]
        },
        {
            'icons': [
                'ios-play',
                'md-play'
            ],
            'tags': [
                'arrow',
                'music',
                'play',
                'right',
                'watch'
            ]
        },
        {
            'icons': [
                'ios-podium',
                'md-podium'
            ],
            'tags': [
                'award',
                'compete',
                'competition',
                'lose',
                'podium',
                'win'
            ]
        },
        {
            'icons': [
                'ios-power',
                'md-power'
            ],
            'tags': [
                'off',
                'on',
                'power'
            ]
        },
        {
            'icons': [
                'ios-pricetag',
                'md-pricetag'
            ],
            'tags': [
                '$',
                'commerce',
                'items',
                'money',
                'pricetag',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-pricetags',
                'md-pricetags'
            ],
            'tags': [
                '$',
                'commerce',
                'items',
                'money',
                'pricetags',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-print',
                'md-print'
            ],
            'tags': [
                'print'
            ]
        },
        {
            'icons': [
                'ios-pulse',
                'md-pulse'
            ],
            'tags': [
                'hot',
                'live',
                'pulse',
                'rate'
            ]
        },
        {
            'icons': [
                'ios-qr-scanner',
                'md-qr-scanner'
            ],
            'tags': [
                'qr',
                'reader',
                'scanner'
            ]
        },
        {
            'icons': [
                'ios-quote',
                'md-quote'
            ],
            'tags': [
                'chat',
                'quotation',
                'quote'
            ]
        },
        {
            'icons': [
                'ios-radio-button-off',
                'md-radio-button-off'
            ],
            'tags': [
                'button',
                'off',
                'radio'
            ]
        },
        {
            'icons': [
                'ios-radio-button-on',
                'md-radio-button-on'
            ],
            'tags': [
                'button',
                'on',
                'radio'
            ]
        },
        {
            'icons': [
                'ios-radio',
                'md-radio'
            ],
            'tags': [
                'radio'
            ]
        },
        {
            'icons': [
                'ios-rainy',
                'md-rainy'
            ],
            'tags': [
                'cloud',
                'rainy',
                'water',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-recording',
                'md-recording'
            ],
            'tags': [
                'film',
                'recording',
                'tape',
                'voicemail'
            ]
        },
        {
            'icons': [
                'ios-redo',
                'md-redo'
            ],
            'tags': [
                'forward',
                'redo'
            ]
        },
        {
            'icons': [
                'ios-refresh-circle',
                'md-refresh-circle'
            ],
            'tags': [
                'circle',
                'refresh'
            ]
        },
        {
            'icons': [
                'ios-refresh',
                'md-refresh'
            ],
            'tags': [
                'refresh',
                'reload',
                'renew',
                'reset'
            ]
        },
        {
            'icons': [
                'ios-remove-circle-outline',
                'md-remove-circle-outline'
            ],
            'tags': [
                'remove'
            ]
        },
        {
            'icons': [
                'ios-remove-circle',
                'md-remove-circle'
            ],
            'tags': [
                'circle',
                'remove'
            ]
        },
        {
            'icons': [
                'ios-remove',
                'md-remove'
            ],
            'tags': [
                'minus',
                'remove',
                'subtract'
            ]
        },
        {
            'icons': [
                'ios-reorder',
                'md-reorder'
            ],
            'tags': [
                'reorder'
            ]
        },
        {
            'icons': [
                'ios-repeat',
                'md-repeat'
            ],
            'tags': [
                'repeat'
            ]
        },
        {
            'icons': [
                'ios-resize',
                'md-resize'
            ],
            'tags': [
                'resize'
            ]
        },
        {
            'icons': [
                'ios-restaurant',
                'md-restaurant'
            ],
            'tags': [
                'restaurant'
            ]
        },
        {
            'icons': [
                'ios-return-left',
                'md-return-left'
            ],
            'tags': [
                'left',
                'return'
            ]
        },
        {
            'icons': [
                'ios-return-right',
                'md-return-right'
            ],
            'tags': [
                'return',
                'right'
            ]
        },
        {
            'icons': [
                'ios-reverse-camera',
                'md-reverse-camera'
            ],
            'tags': [
                'camera',
                'picture',
                'reverse'
            ]
        },
        {
            'icons': [
                'ios-rewind',
                'md-rewind'
            ],
            'tags': [
                'back',
                'music',
                'previous',
                'rewind'
            ]
        },
        {
            'icons': [
                'ios-ribbon',
                'md-ribbon'
            ],
            'tags': [
                'ribbon'
            ]
        },
        {
            'icons': [
                'ios-rocket',
                'md-rocket'
            ],
            'tags': [
                'rocket'
            ]
        },
        {
            'icons': [
                'ios-rose',
                'md-rose'
            ],
            'tags': [
                'rose'
            ]
        },
        {
            'icons': [
                'ios-sad',
                'md-sad'
            ],
            'tags': [
                'bad',
                'cry',
                'no',
                'sad'
            ]
        },
        {
            'icons': [
                'ios-save',
                'md-save'
            ],
            'tags': [
                'save'
            ]
        },
        {
            'icons': [
                'ios-school',
                'md-school'
            ],
            'tags': [
                'school'
            ]
        },
        {
            'icons': [
                'ios-search',
                'md-search'
            ],
            'tags': [
                'magnifyingglass',
                'search'
            ]
        },
        {
            'icons': [
                'ios-send',
                'md-send'
            ],
            'tags': [
                'email',
                'paper',
                'send'
            ]
        },
        {
            'icons': [
                'ios-settings',
                'md-settings'
            ],
            'tags': [
                'options',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-share-alt',
                'md-share-alt'
            ],
            'tags': [
                'alt',
                'share'
            ]
        },
        {
            'icons': [
                'ios-share',
                'md-share'
            ],
            'tags': [
                'share'
            ]
        },
        {
            'icons': [
                'ios-shirt',
                'md-shirt'
            ],
            'tags': [
                'shirt'
            ]
        },
        {
            'icons': [
                'ios-shuffle',
                'md-shuffle'
            ],
            'tags': [
                'random',
                'shuffle'
            ]
        },
        {
            'icons': [
                'ios-skip-backward',
                'md-skip-backward'
            ],
            'tags': [
                'backward',
                'music',
                'previous',
                'skip'
            ]
        },
        {
            'icons': [
                'ios-skip-forward',
                'md-skip-forward'
            ],
            'tags': [
                'forward',
                'music',
                'next',
                'skip'
            ]
        },
        {
            'icons': [
                'ios-snow',
                'md-snow'
            ],
            'tags': [
                'snow'
            ]
        },
        {
            'icons': [
                'ios-speedometer',
                'md-speedometer'
            ],
            'tags': [
                'drive',
                'level',
                'speed',
                'speedometer'
            ]
        },
        {
            'icons': [
                'ios-square-outline',
                'md-square-outline'
            ],
            'tags': [
                'square'
            ]
        },
        {
            'icons': [
                'ios-square',
                'md-square'
            ],
            'tags': [
                'square'
            ]
        },
        {
            'icons': [
                'ios-star-half',
                'md-star-half'
            ],
            'tags': [
                'favorite',
                'half',
                'rate',
                'star'
            ]
        },
        {
            'icons': [
                'ios-star-outline',
                'md-star-outline'
            ],
            'tags': [
                'star'
            ]
        },
        {
            'icons': [
                'ios-star',
                'md-star'
            ],
            'tags': [
                'favorite',
                'star'
            ]
        },
        {
            'icons': [
                'ios-stats',
                'md-stats'
            ],
            'tags': [
                'stats'
            ]
        },
        {
            'icons': [
                'ios-stopwatch',
                'md-stopwatch'
            ],
            'tags': [
                'stopwatch'
            ]
        },
        {
            'icons': [
                'ios-subway',
                'md-subway'
            ],
            'tags': [
                'subway'
            ]
        },
        {
            'icons': [
                'ios-sunny',
                'md-sunny'
            ],
            'tags': [
                'light',
                'sky',
                'sunny',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-swap',
                'md-swap'
            ],
            'tags': [
                'swap'
            ]
        },
        {
            'icons': [
                'ios-switch',
                'md-switch'
            ],
            'tags': [
                'switch'
            ]
        },
        {
            'icons': [
                'ios-sync',
                'md-sync'
            ],
            'tags': [
                'sync'
            ]
        },
        {
            'icons': [
                'ios-tablet-landscape',
                'md-tablet-landscape'
            ],
            'tags': [
                'landscape',
                'tablet'
            ]
        },
        {
            'icons': [
                'ios-tablet-portrait',
                'md-tablet-portrait'
            ],
            'tags': [
                'portrait',
                'tablet'
            ]
        },
        {
            'icons': [
                'ios-tennisball',
                'md-tennisball'
            ],
            'tags': [
                'tennisball'
            ]
        },
        {
            'icons': [
                'ios-text',
                'md-text'
            ],
            'tags': [
                'text'
            ]
        },
        {
            'icons': [
                'ios-thermometer',
                'md-thermometer'
            ],
            'tags': [
                'cold',
                'heat',
                'hot',
                'mercury',
                'temperature',
                'thermometer'
            ]
        },
        {
            'icons': [
                'ios-thumbs-down',
                'md-thumbs-down'
            ],
            'tags': [
                'down',
                'thumbs'
            ]
        },
        {
            'icons': [
                'ios-thumbs-up',
                'md-thumbs-up'
            ],
            'tags': [
                'thumbs',
                'up'
            ]
        },
        {
            'icons': [
                'ios-thunderstorm',
                'md-thunderstorm'
            ],
            'tags': [
                'cloudy',
                'lightning',
                'overcast',
                'rain',
                'sky',
                'storm',
                'thunderstorm',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-time',
                'md-time'
            ],
            'tags': [
                'clock',
                'hour',
                'minute',
                'second',
                'time',
                'watch'
            ]
        },
        {
            'icons': [
                'ios-timer',
                'md-timer'
            ],
            'tags': [
                'clock',
                'timer'
            ]
        },
        {
            'icons': [
                'ios-today',
                'md-today'
            ],
            'tags': [
                'today'
            ]
        },
        {
            'icons': [
                'ios-train',
                'md-train'
            ],
            'tags': [
                'train'
            ]
        },
        {
            'icons': [
                'ios-transgender',
                'md-transgender'
            ],
            'tags': [
                'transgender'
            ]
        },
        {
            'icons': [
                'ios-trash',
                'md-trash'
            ],
            'tags': [
                'close',
                'delete',
                'remove',
                'trash'
            ]
        },
        {
            'icons': [
                'ios-trending-down',
                'md-trending-down'
            ],
            'tags': [
                'down',
                'trending'
            ]
        },
        {
            'icons': [
                'ios-trending-up',
                'md-trending-up'
            ],
            'tags': [
                'trending',
                'up'
            ]
        },
        {
            'icons': [
                'ios-trophy',
                'md-trophy'
            ],
            'tags': [
                'award',
                'compete',
                'competition',
                'lose',
                'trophy',
                'win'
            ]
        },
        {
            'icons': [
                'ios-tv',
                'md-tv'
            ],
            'tags': [
                'television',
                'tv'
            ]
        },
        {
            'icons': [
                'ios-umbrella',
                'md-umbrella'
            ],
            'tags': [
                'dry',
                'rain',
                'shelter',
                'umbrella',
                'wet'
            ]
        },
        {
            'icons': [
                'ios-undo',
                'md-undo'
            ],
            'tags': [
                'reply',
                'undo'
            ]
        },
        {
            'icons': [
                'ios-unlock',
                'md-unlock'
            ],
            'tags': [
                'unlock'
            ]
        },
        {
            'icons': [
                'ios-videocam',
                'md-videocam'
            ],
            'tags': [
                'camera',
                'film',
                'movie',
                'videocam'
            ]
        },
        {
            'icons': [
                'ios-volume-high',
                'md-volume-high'
            ],
            'tags': [
                'volume'
            ]
        },
        {
            'icons': [
                'ios-volume-low',
                'md-volume-low'
            ],
            'tags': [
                'volume'
            ]
        },
        {
            'icons': [
                'ios-volume-mute',
                'md-volume-mute'
            ],
            'tags': [
                'mute',
                'sound',
                'volume'
            ]
        },
        {
            'icons': [
                'ios-volume-off',
                'md-volume-off'
            ],
            'tags': [
                'off',
                'volume'
            ]
        },
        {
            'icons': [
                'ios-wallet',
                'md-wallet'
            ],
            'tags': [
                'cash',
                'money',
                'wallet'
            ]
        },
        {
            'icons': [
                'ios-walk',
                'md-walk'
            ],
            'tags': [
                'walk'
            ]
        },
        {
            'icons': [
                'ios-warning',
                'md-warning'
            ],
            'tags': [
                'warning'
            ]
        },
        {
            'icons': [
                'ios-watch',
                'md-watch'
            ],
            'tags': [
                'watch'
            ]
        },
        {
            'icons': [
                'ios-water',
                'md-water'
            ],
            'tags': [
                'water'
            ]
        },
        {
            'icons': [
                'ios-wifi',
                'md-wifi'
            ],
            'tags': [
                'bars',
                'connection',
                'internet',
                'wifi'
            ]
        },
        {
            'icons': [
                'ios-wine',
                'md-wine'
            ],
            'tags': [
                'wine'
            ]
        },
        {
            'icons': [
                'ios-woman',
                'md-woman'
            ],
            'tags': [
                'dudette',
                'female',
                'girl',
                'lady',
                'woman'
            ]
        },
        {
            'icons': [
                'logo-android'
            ],
            'tags': [
                'android'
            ]
        },
        {
            'icons': [
                'logo-angular'
            ],
            'tags': [
                'angular'
            ]
        },
        {
            'icons': [
                'logo-apple'
            ],
            'tags': [
                'apple'
            ]
        },
        {
            'icons': [
                'logo-bitbucket'
            ],
            'tags': [
                'bitbucket'
            ]
        },
        {
            'icons': [
                'logo-bitcoin'
            ],
            'tags': [
                'bitcoin'
            ]
        },
        {
            'icons': [
                'logo-buffer'
            ],
            'tags': [
                'buffer'
            ]
        },
        {
            'icons': [
                'logo-chrome'
            ],
            'tags': [
                'chrome'
            ]
        },
        {
            'icons': [
                'logo-closed-captioning'
            ],
            'tags': [
                'closed-captioning'
            ]
        },
        {
            'icons': [
                'logo-codepen'
            ],
            'tags': [
                'codepen'
            ]
        },
        {
            'icons': [
                'logo-css3'
            ],
            'tags': [
                'css3'
            ]
        },
        {
            'icons': [
                'logo-designernews'
            ],
            'tags': [
                'designernews'
            ]
        },
        {
            'icons': [
                'logo-dribbble'
            ],
            'tags': [
                'dribbble'
            ]
        },
        {
            'icons': [
                'logo-dropbox'
            ],
            'tags': [
                'dropbox'
            ]
        },
        {
            'icons': [
                'logo-euro'
            ],
            'tags': [
                'euro'
            ]
        },
        {
            'icons': [
                'logo-facebook'
            ],
            'tags': [
                'facebook'
            ]
        },
        {
            'icons': [
                'logo-flickr'
            ],
            'tags': [
                'flickr'
            ]
        },
        {
            'icons': [
                'logo-foursquare'
            ],
            'tags': [
                'foursquare'
            ]
        },
        {
            'icons': [
                'logo-freebsd-devil'
            ],
            'tags': [
                'freebsd-devil'
            ]
        },
        {
            'icons': [
                'logo-game-controller-a'
            ],
            'tags': [
                'controller',
                'game'
            ]
        },
        {
            'icons': [
                'logo-game-controller-b'
            ],
            'tags': [
                'controller',
                'game'
            ]
        },
        {
            'icons': [
                'logo-github'
            ],
            'tags': [
                'github'
            ]
        },
        {
            'icons': [
                'logo-google'
            ],
            'tags': [
                'google'
            ]
        },
        {
            'icons': [
                'logo-googleplus'
            ],
            'tags': [
                'googleplus'
            ]
        },
        {
            'icons': [
                'logo-hackernews'
            ],
            'tags': [
                'hackernews'
            ]
        },
        {
            'icons': [
                'logo-html5'
            ],
            'tags': [
                'html5'
            ]
        },
        {
            'icons': [
                'logo-instagram'
            ],
            'tags': [
                'instagram'
            ]
        },
        {
            'icons': [
                'logo-ionic'
            ],
            'tags': [
                'ionic'
            ]
        },
        {
            'icons': [
                'logo-ionitron'
            ],
            'tags': [
                'ionitron'
            ]
        },
        {
            'icons': [
                'logo-javascript'
            ],
            'tags': [
                'javascript'
            ]
        },
        {
            'icons': [
                'logo-linkedin'
            ],
            'tags': [
                'linkedin'
            ]
        },
        {
            'icons': [
                'logo-markdown'
            ],
            'tags': [
                'markdown'
            ]
        },
        {
            'icons': [
                'logo-model-s'
            ],
            'tags': [
                'model-s'
            ]
        },
        {
            'icons': [
                'logo-no-smoking'
            ],
            'tags': [
                'no-smoking'
            ]
        },
        {
            'icons': [
                'logo-nodejs'
            ],
            'tags': [
                'nodejs'
            ]
        },
        {
            'icons': [
                'logo-npm'
            ],
            'tags': [
                'npm'
            ]
        },
        {
            'icons': [
                'logo-octocat'
            ],
            'tags': [
                'octocat'
            ]
        },
        {
            'icons': [
                'logo-pinterest'
            ],
            'tags': [
                'pinterest'
            ]
        },
        {
            'icons': [
                'logo-playstation'
            ],
            'tags': [
                'playstation'
            ]
        },
        {
            'icons': [
                'logo-polymer'
            ],
            'tags': [
                'polymer'
            ]
        },
        {
            'icons': [
                'logo-python'
            ],
            'tags': [
                'python'
            ]
        },
        {
            'icons': [
                'logo-reddit'
            ],
            'tags': [
                'reddit'
            ]
        },
        {
            'icons': [
                'logo-rss'
            ],
            'tags': [
                'rss'
            ]
        },
        {
            'icons': [
                'logo-sass'
            ],
            'tags': [
                'sass'
            ]
        },
        {
            'icons': [
                'logo-skype'
            ],
            'tags': [
                'skype'
            ]
        },
        {
            'icons': [
                'logo-slack'
            ],
            'tags': [
                'slack'
            ]
        },
        {
            'icons': [
                'logo-snapchat'
            ],
            'tags': [
                'snapchat'
            ]
        },
        {
            'icons': [
                'logo-steam'
            ],
            'tags': [
                'steam'
            ]
        },
        {
            'icons': [
                'logo-tumblr'
            ],
            'tags': [
                'tumblr'
            ]
        },
        {
            'icons': [
                'logo-tux'
            ],
            'tags': [
                'tux'
            ]
        },
        {
            'icons': [
                'logo-twitch'
            ],
            'tags': [
                'twitch'
            ]
        },
        {
            'icons': [
                'logo-twitter'
            ],
            'tags': [
                'twitter'
            ]
        },
        {
            'icons': [
                'logo-usd'
            ],
            'tags': [
                'usd'
            ]
        },
        {
            'icons': [
                'logo-vimeo'
            ],
            'tags': [
                'vimeo'
            ]
        },
        {
            'icons': [
                'logo-vk'
            ],
            'tags': [
                'vk'
            ]
        },
        {
            'icons': [
                'logo-whatsapp'
            ],
            'tags': [
                'whatsapp'
            ]
        },
        {
            'icons': [
                'logo-windows'
            ],
            'tags': [
                'windows'
            ]
        },
        {
            'icons': [
                'logo-wordpress'
            ],
            'tags': [
                'wordpress'
            ]
        },
        {
            'icons': [
                'logo-xbox'
            ],
            'tags': [
                'xbox'
            ]
        },
        {
            'icons': [
                'logo-xing'
            ],
            'tags': [
                'xing'
            ]
        },
        {
            'icons': [
                'logo-yahoo'
            ],
            'tags': [
                'yahoo'
            ]
        },
        {
            'icons': [
                'logo-yen'
            ],
            'tags': [
                'yen'
            ]
        },
        {
            'icons': [
                'logo-youtube'
            ],
            'tags': [
                'youtube'
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @configs/config */ "./src/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageService = /** @class */ (function () {
    function LanguageService(translate) {
        this.translate = translate;
    }
    LanguageService.prototype.initializeLanguage = function () {
        this.translate.addLangs(_configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.support);
        this.translate.setDefaultLang(_configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.default);
        this.useBrowserLanguage();
    };
    LanguageService.prototype.useBrowserLanguage = function () {
        var browserLang = this.translate.getBrowserLang();
        this.useLanguage(browserLang.match(_configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.support.join('|')) ?
            browserLang : _configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.default);
    };
    LanguageService.prototype.useLanguage = function (lang) {
        this.translate.use(lang);
    };
    LanguageService.prototype.markdownPath = function (filePath) {
        return filePath + "." + this.translate.currentLang + ".md";
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/app/services/icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.getRandomIcon = function () {
        return _icons__WEBPACK_IMPORTED_MODULE_1__["icons"].icons[Math.floor(Math.random() * _icons__WEBPACK_IMPORTED_MODULE_1__["icons"].icons.length)];
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/configs/config.ts":
/*!*******************************!*\
  !*** ./src/configs/config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    language: {
        default: 'en',
        support: ['en', 'de']
    },
};


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/garygrossgarten/Dev/things/fivethree-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map