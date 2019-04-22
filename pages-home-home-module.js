(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/@ctrl/ngx-github-buttons/fesm5/ctrl-ngx-github-buttons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-github-buttons/fesm5/ctrl-ngx-github-buttons.js ***!
  \********************************************************************************/
/*! exports provided: NtkmeButtonModule, NtkmeButtonComponent, NtkmeCounterComponent, MdoButtonModule, MdoCounterComponent, MdoGithubButtonComponent, ButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtkmeButtonModule", function() { return NtkmeButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtkmeButtonComponent", function() { return NtkmeButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtkmeCounterComponent", function() { return NtkmeCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdoButtonModule", function() { return MdoButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdoCounterComponent", function() { return MdoCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdoGithubButtonComponent", function() { return MdoGithubButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonService", function() { return ButtonService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NtkmeCounterComponent = /** @class */ (function () {
    function NtkmeCounterComponent() {
        this.large = false;
    }
    NtkmeCounterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'ntkme-counter',
                    template: "\n  <a class=\"social-count\" [class.gh-large]=\"large\" [href]=\"counterHref\"\n    [attr.aria-label]=\"(count | number) + counterLabel + ' on GitHub'\">\n    <b></b>\n    <i></i>\n    <span>{{ count | number }}</span>\n  </a>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n  a {\n    color: #24292e;\n    text-decoration: none;\n    outline: 0;\n  }\n  .social-count {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    user-select: none;\n    display: inline-block;\n    font-weight: 600;\n    vertical-align: middle;\n    cursor: pointer;\n    border: 1px solid #d1d2d3;\n    border-radius: 0.25em;\n    position: relative;\n    background-color: #fff;\n    margin-left: 5px;\n    font-size: 10px;\n    height: 20px;\n    padding: 0 5px;\n    line-height: 18px;\n  }\n  .social-count:hover {\n    color: #0366d6;\n  }\n  .social-count:focus {\n    border-color: #c8e1ff;\n  }\n  .social-count b,\n  .social-count i {\n    position: absolute;\n    top: 50%;\n    right: 100%;\n    display: block;\n    width: 0;\n    height: 0;\n    margin-top: -4px;\n    border: 4px solid transparent;\n  }\n  .gh-large.social-count b,\n  .gh-large.social-count i {\n    margin-top: -6px;\n    border-width: 6px;\n  }\n  .social-count b {\n    margin-right: 0;\n    border-right-color: #d1d2d3;\n  }\n  .social-count:focus b {\n    border-right-color: #c8e1ff;\n  }\n  .social-count i {\n    margin-right: -1px;\n    border-right-color: #fff;\n  }\n  .gh-large.social-count {\n    padding: 0 7px;\n    margin-left: 7px;\n    font-size: 11px;\n    height: 28px;\n    line-height: 26px;\n  }\n  .gh-large.social-count span {\n    vertical-align: 0;\n  }\n  "]
                }] }
    ];
    NtkmeCounterComponent.propDecorators = {
        large: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        counterLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        counterHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return NtkmeCounterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonService = /** @class */ (function () {
    function ButtonService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @param {?} user
     * @return {?}
     */
    ButtonService.prototype.user = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.httpClient.get('https://api.github.com/users/' + user);
    };
    /**
     * @param {?} user
     * @param {?} repo
     * @return {?}
     */
    ButtonService.prototype.repo = /**
     * @param {?} user
     * @param {?} repo
     * @return {?}
     */
    function (user, repo) {
        return this.httpClient.get('https://api.github.com/repos/' + user + '/' + repo);
    };
    ButtonService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ButtonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    /** @nocollapse */ ButtonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function ButtonService_Factory() { return new ButtonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: ButtonService, providedIn: "root" });
    return ButtonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var svg = {
    follow: {
        path: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z',
        height: '16',
        width: '16',
    },
    watch: {
        path: 'M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z',
        height: '16',
        width: '16',
    },
    star: {
        path: 'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z',
        height: '16',
        width: '14',
    },
    fork: {
        path: 'M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z',
        height: '16',
        width: '10',
    },
    issue: {
        path: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
        height: '16',
        width: '14',
    },
    download: {
        path: 'M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z',
        height: '16',
        width: '16',
    },
};
var NtkmeButtonComponent = /** @class */ (function () {
    function NtkmeButtonComponent(buttonService) {
        this.buttonService = buttonService;
        /**
         * Type of button to show
         */
        this.type = 'star';
        /**
         * Show the optional watchers or forks count
         */
        this.count = false;
        /**
         * Optional flag for using a larger button
         */
        this.size = 'none';
        /**
         * Use the github logo as the icon
         */
        this.standardIcon = false;
        this.text = '';
        this.svg = {};
        this.loaded = false;
    }
    /**
     * @return {?}
     */
    NtkmeButtonComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconType = this.standardIcon ? 'follow' : this.type;
        this.svg = svg[iconType];
        switch (this.type) {
            case 'watch':
                this.text = 'Watch';
                this.countAttr = 'subscribers_count';
                this.counterLabel = ' watchers';
                this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/subscription';
                this.counterHref =
                    'https://github.com/' + this.user + '/' + this.repo + '/watchers';
                break;
            case 'star':
                this.text = 'Star';
                this.countAttr = 'stargazers_count';
                this.counterLabel = ' stargazers';
                this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo;
                this.counterHref =
                    'https://github.com/' + this.user + '/' + this.repo + '/stargazers';
                break;
            case 'fork':
                this.text = 'Fork';
                this.countAttr = 'network_count';
                this.counterLabel = ' forks';
                this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/fork';
                this.counterHref = 'https://github.com/' + this.user + '/' + this.repo + '/network';
                break;
            case 'follow':
                this.text = 'Follow @' + this.user;
                this.countAttr = 'followers';
                this.counterLabel = ' followers';
                this.buttonHref = 'https://github.com/' + this.user;
                this.counterHref = 'https://github.com/' + this.user + '/followers';
                break;
            case 'issue':
                this.text = 'Issue';
                this.countAttr = 'open_issues';
                this.counterLabel = ' followers';
                this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/issues';
                this.counterHref = this.buttonHref;
                break;
            case 'download':
                this.text = 'Download';
                this.counterLabel = ' followers';
                this.countAttr = 'subscribers_count';
                this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/archive/master.zip';
                break;
        }
        if (this.count && this.user && this.type !== 'download') {
            this.fetch();
        }
    };
    /**
     * @return {?}
     */
    NtkmeButtonComponent.prototype.fetch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loaded = false;
        /** @type {?} */
        var sub;
        if (this.type === 'follow') {
            sub = this.buttonService.user(this.user);
        }
        else {
            if (!this.repo) {
                return;
            }
            sub = this.buttonService.repo(this.user, this.repo);
        }
        sub.subscribe((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return _this.callback(d); }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NtkmeButtonComponent.prototype.callback = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.counter = data[this.countAttr];
        this.loaded = true;
    };
    NtkmeButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'ntkme-github-button',
                    template: "\n  <div [class.gh-large]=\"this.size === 'large'\">\n    <a [href]=\"buttonHref\" class=\"gh-btn\"\n      [attr.aria-label]=\"text + ' on GitHub'\">\n      <svg version=\"1.1\"\n        [attr.width]=\"svg.width\" [attr.height]=\"svg.height\"\n        [attr.viewBox]=\"'0 0 ' + svg.width + ' ' + svg.height\"\n        class=\"gh-octicon\" aria-hidden=\"true\">\n        <path fill-rule=\"evenodd\" [attr.d]=\"svg.path\"></path>\n      </svg>\n      <span> {{ text }}</span>\n    </a>\n    <ntkme-counter *ngIf=\"count && loaded\"\n      [count]=\"counter\"\n      [large]=\"this.size === 'large'\"\n      [counterLabel]=\"counterLabel\"\n      [counterHref]=\"counterHref\"\n    ></ntkme-counter>\n  </div>\n  ",
                    styles: ["\n  a {\n    color: #24292e;\n    text-decoration: none;\n    outline: 0;\n  }\n  .gh-btn {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,\n      Arial, sans-serif;\n    user-select: none;\n    display: inline-block;\n    font-weight: 600;\n    vertical-align: middle;\n    cursor: pointer;\n    border: 1px solid #d1d2d3;\n    border-radius: 0.25em;\n    background-color: #eff3f6;\n    background-image: linear-gradient(to bottom, #fafbfc, #e4ebf0);\n    background-repeat: repeat-x;\n    background-size: 110% 110%;\n    height: 20px;\n    padding: 0 5px;\n    line-height: 18px;\n    font-size: 11px;\n    white-space: nowrap;\n  }\n  .gh-btn:focus {\n    border-color: #c8e1ff;\n  }\n  .gh-btn:active {\n    background-color: #e9ecef;\n    background-image: none;\n    border-color: #afb1b2;\n    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);\n  }\n  .gh-btn:hover {\n    background-color: #e6ebf1;\n    background-image: linear-gradient(to bottom, #f0f3f6, #dce3ec);\n    border-color: #afb1b2;\n  }\n  .gh-octicon {\n    position: relative;\n    display: inline-block;\n    fill: currentColor;\n    height: 14px;\n    top: 2px;\n    vertical-align: initial;\n  }\n  .gh-btn span {\n    vertical-align: 1px;\n  }\n  .gh-large .gh-btn {\n    height: 28px;\n    line-height: 26px;\n    padding: 0 10px;\n    font-size: 12px;\n  }\n  .gh-large .gh-btn span {\n    vertical-align: 0;\n  }\n  .gh-large .gh-octicon {\n    height: 16px;\n    top: 4px;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NtkmeButtonComponent.ctorParameters = function () { return [
        { type: ButtonService }
    ]; };
    NtkmeButtonComponent.propDecorators = {
        user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        repo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        standardIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return NtkmeButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NtkmeButtonModule = /** @class */ (function () {
    function NtkmeButtonModule() {
    }
    NtkmeButtonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                    exports: [NtkmeButtonComponent],
                    declarations: [NtkmeButtonComponent, NtkmeCounterComponent],
                },] }
    ];
    return NtkmeButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdoCounterComponent = /** @class */ (function () {
    function MdoCounterComponent() {
        this.large = false;
    }
    MdoCounterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mdo-counter',
                    template: "\n  <a class=\"gh-count\" [class.github-btn-large]=\"large\"\n    [href]=\"counterHref\" target=\"_blank\"\n    [attr.aria-label]=\"(count | number) + counterLabel + ' on GitHub'\"\n    >\n    {{ count | number }}\n  </a>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n  .gh-count {\n    padding: 2px 5px 2px 4px;\n    color: #333;\n    text-decoration: none;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 3px;\n    display: inline-block;\n  }\n  .gh-count {\n    position: relative;\n    margin-left: 4px;\n    background-color: #fafafa;\n    border: 1px solid #d4d4d4;\n  }\n  .gh-count:hover,\n  .gh-count:focus {\n    color: #4183C4;\n  }\n  .gh-count:before,\n  .gh-count:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n  }\n  .gh-count:before {\n    top: 50%;\n    left: -3px;\n    margin-top: -4px;\n    border-width: 4px 4px 4px 0;\n    border-right-color: #fafafa;\n  }\n  .gh-count:after {\n    top: 50%;\n    left: -4px;\n    z-index: -1;\n    margin-top: -5px;\n    border-width: 5px 5px 5px 0;\n    border-right-color: #d4d4d4;\n  }\n  .github-btn-large.gh-count {\n    padding: 4px 8px 4px 8px;\n    font-size: 16px;\n    line-height: 22px;\n    border-radius: 4px;\n    margin-left: 6px;\n  }\n  .github-btn-large.gh-count:before {\n    left: -5px;\n    margin-top: -6px;\n    border-width: 6px 6px 6px 0;\n  }\n  .github-btn-large.gh-count:after {\n    left: -6px;\n    margin-top: -7px;\n    border-width: 7px 7px 7px 0;\n  }\n  "]
                }] }
    ];
    MdoCounterComponent.propDecorators = {
        large: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        counterLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        counterHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MdoCounterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdoGithubButtonComponent = /** @class */ (function () {
    function MdoGithubButtonComponent(buttonService) {
        this.buttonService = buttonService;
        /**
         * Type of button to show
         */
        this.type = 'star';
        /**
         * Show the optional watchers or forks count
         */
        this.count = false;
        /**
         * Optional flag for using a larger button
         */
        this.size = 'none';
        this.text = '';
        this.mainButton = {
            'github-btn': true,
        };
        this.loaded = false;
    }
    /**
     * @return {?}
     */
    MdoGithubButtonComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/';
        this.mainButton['github-btn-large'] = this.size === 'large';
        // Add the class, change the text label, set count link href
        switch (this.type) {
            case 'watch':
                this.mainButton['github-watchers'] = true;
                this.text = 'Watch';
                this.countAttr = 'subscribers_count';
                this.counterHref =
                    'https://github.com/' + this.user + '/' + this.repo + '/watchers';
                break;
            case 'star':
                this.mainButton['github-stargazers'] = true;
                this.text = 'Star';
                this.counterLabel = ' stargazers';
                this.countAttr = 'stargazers_count';
                this.counterLabel = ' watchers';
                this.counterHref =
                    'https://github.com/' + this.user + '/' + this.repo + '/stargazers';
                break;
            case 'fork':
                this.mainButton['github-forks'] = true;
                this.text = 'Fork';
                this.counterLabel = ' forks';
                this.countAttr = 'network_count';
                this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/fork';
                this.counterHref = 'https://github.com/' + this.user + '/' + this.repo + '/network';
                break;
            case 'follow':
                this.mainButton['github-me'] = true;
                this.text = 'Follow @' + this.user;
                this.counterLabel = ' followers';
                this.countAttr = 'followers';
                this.buttonHref = 'https://github.com/' + this.user;
                this.counterHref = 'https://github.com/' + this.user + '/followers';
                break;
        }
        if (this.count && this.user) {
            this.fetch();
        }
    };
    /**
     * @return {?}
     */
    MdoGithubButtonComponent.prototype.fetch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loaded = false;
        /** @type {?} */
        var sub;
        if (this.type === 'follow') {
            sub = this.buttonService.user(this.user);
        }
        else {
            if (!this.repo) {
                return;
            }
            sub = this.buttonService.repo(this.user, this.repo);
        }
        sub.subscribe((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return _this.callback(d); }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdoGithubButtonComponent.prototype.callback = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.counter = data[this.countAttr];
        this.loaded = true;
    };
    MdoGithubButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mdo-github-button',
                    template: "\n  <div [ngClass]=\"mainButton\">\n    <a class=\"gh-btn\" [href]=\"buttonHref\" target=\"_blank\"\n      [attr.aria-label]=\"text + ' on GitHub'\">\n      <span class=\"gh-ico\" aria-hidden=\"true\"></span>\n      <span class=\"gh-text\">{{ text }}</span>\n    </a>\n    <mdo-counter *ngIf=\"count && loaded\"\n      [count]=\"counter\"\n      [large]=\"this.size === 'large'\"\n      [counterLabel]=\"counterLabel\"\n      [counterHref]=\"counterHref\"\n    ></mdo-counter>\n  </div>\n  ",
                    styles: ["\n  .github-btn {\n    display: inline-block;\n    font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    height: 20px;\n  }\n  .gh-btn {\n    padding: 2px 5px 2px 4px;\n    color: #333;\n    text-decoration: none;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 3px;\n    background-color: #eee;\n    background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);\n    background-repeat: no-repeat;\n    border: 1px solid #d5d5d5;\n    display: inline-block;\n  }\n  .gh-btn:hover,\n  .gh-btn:focus {\n    text-decoration: none;\n    background-color: #ddd;\n    background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);\n    border-color: #ccc;\n  }\n  .gh-btn:active {\n    background-image: none;\n    background-color: #dcdcdc;\n    border-color: #b5b5b5;\n    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n  }\n  .gh-ico {\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    margin-right: 4px;\n    margin-bottom: -3px;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n  }\n  .github-btn-large {\n    height: 32px;\n  }\n  .github-btn-large .gh-btn {\n    padding: 4px 10px 4px 8px;\n    font-size: 16px;\n    line-height: 22px;\n    border-radius: 4px;\n  }\n  .github-btn-large .gh-ico {\n    width: 20px;\n    height: 20px;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    MdoGithubButtonComponent.ctorParameters = function () { return [
        { type: ButtonService }
    ]; };
    MdoGithubButtonComponent.propDecorators = {
        user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        repo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MdoGithubButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdoButtonModule = /** @class */ (function () {
    function MdoButtonModule() {
    }
    MdoButtonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                    exports: [MdoGithubButtonComponent],
                    declarations: [MdoGithubButtonComponent, MdoCounterComponent],
                },] }
    ];
    return MdoButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ctrl-ngx-github-buttons.js.map

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _ctrl_ngx_github_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ctrl/ngx-github-buttons */ "./node_modules/@ctrl/ngx-github-buttons/fesm5/ctrl-ngx-github-buttons.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"],
                _ctrl_ngx_github_buttons__WEBPACK_IMPORTED_MODULE_7__["MdoButtonModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backbutton]=\"false\"></app-header>\n\n<ion-content>\n    <ion-grid fixed no-padding>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-title>Fivethree Ionic 4 Component Library <markdown (click)=\"open('https://www.npmjs.com/package/@fivethree/core')\">\n                        ![npm: version](https://flat.badgen.net/npm/v/@fivethree/core)\n                    </markdown>\n                </ion-title>\n\n                <ion-chip color=\"secondary\">\n                    <ion-icon name=\"alert\"></ion-icon>\n                    <ion-label>preparing documentation and project site...</ion-label>\n                </ion-chip>\n\n            </ion-col>\n            <ion-col padding size=\"12\" sizeMd=\"8\">\n                <!-- <ion-card-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n                    eirmod\n                    tempor\n                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo\n                    duo\n                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n                    amet.\n                </ion-card-subtitle> -->\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"12\" sizeSm=\"6\" sizeMd=\"4\">\n                <fiv-ripple (fivClick)=\"navigate('/components')\">\n                    <ion-card class=\"big\">\n                        <ion-card-header>\n                            <ion-card-subtitle>Ionic 4 UI Components</ion-card-subtitle>\n                            <ion-card-title>Components</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            Awesome content\n                        </ion-card-content>\n                    </ion-card>\n                </fiv-ripple>\n\n            </ion-col>\n            <ion-col size=\"12\" sizeSm=\"6\" sizeMd=\"8\" no-padding>\n                <ion-grid fixed no-padding>\n                    <ion-row>\n                        <ion-col size=\"12\" sizeMd=\"6\">\n                            <fiv-ripple (fivClick)=\"navigate('/getting-started')\">\n                                <ion-card class=\"small\">\n                                    <ion-card-header>\n                                        <ion-card-subtitle>Learn more about the UI Library</ion-card-subtitle>\n                                        <ion-card-title>Getting Started</ion-card-title>\n                                    </ion-card-header>\n                                    <ion-card-content>\n                                        Awesome content\n                                    </ion-card-content>\n                                </ion-card>\n                            </fiv-ripple>\n                        </ion-col>\n                        <ion-col size=\"12\" sizeMd=\"6\">\n                            <fiv-ripple (fivClick)=\"navigate('/installation')\">\n                                <ion-card class=\"small\">\n                                    <ion-card-header>\n                                        <ion-card-subtitle>First Steps</ion-card-subtitle>\n                                        <ion-card-title>Installation</ion-card-title>\n                                    </ion-card-header>\n                                    <ion-card-content>\n                                        Awesome content\n                                    </ion-card-content>\n                                </ion-card>\n                            </fiv-ripple>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"12\" sizeMd=\"6\">\n                            <fiv-ripple (fivClick)=\"navigate('/developer-tools')\">\n                                <ion-card class=\"small\">\n                                    <ion-card-header>\n                                        <ion-card-subtitle>Discover our VS Code Plugins</ion-card-subtitle>\n                                        <ion-card-title>Developer Tools</ion-card-title>\n                                    </ion-card-header>\n                                    <ion-card-content>\n\n                                    </ion-card-content>\n                                </ion-card>\n                            </fiv-ripple>\n                        </ion-col>\n                        <ion-col size=\"12\" sizeMd=\"6\">\n                            <fiv-ripple>\n                                <ion-card class=\"small\">\n                                    <ion-card-header>\n                                        <ion-card-subtitle>Support Us</ion-card-subtitle>\n                                        <ion-card-title>Star this project on github</ion-card-title>\n                                    </ion-card-header>\n                                    <ion-card-content>\n                                        Make our day by staring the project on GitHub\n                                        <mdo-github-button [count]=\"true\" user=\"fivethree-team\"\n                                            repo=\"ionic-4-components\">\n                                        </mdo-github-button>\n                                    </ion-card-content>\n                                </ion-card>\n                            </fiv-ripple>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\" sizeSm=\"6\" sizeMd=\"4\">\n                <fiv-ripple>\n\n                    <ion-card class=\"small\">\n                        <ion-card-header>\n                            <ion-card-subtitle>Get in Touch</ion-card-subtitle>\n                            <ion-card-title>The Fivethree Team</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            You can find us on twitter <a target=\"blank\" href=\"https://twitter.com/garygrossgarten\"\n                                class=\"twitter\">@garygrossgarten</a> and <a target=\"blank\"\n                                href=\"https://twitter.com/mrcjln\" class=\"twitter\">@mrcjln</a> or on <a target=\"blank\"\n                                href=\"https://fivethree.io\">fivethree.io</a>.\n                        </ion-card-content>\n                    </ion-card>\n                </fiv-ripple>\n            </ion-col>\n            <ion-col size=\"12\" sizeSm=\"6\" sizeMd=\"4\">\n                <fiv-ripple (click)=\"open('https://github.com/fivethree-team/ionic-4-components')\">\n                    <ion-card class=\"small\">\n                        <ion-card-header>\n                            <ion-card-subtitle>Contributions Welcome</ion-card-subtitle>\n                            <ion-card-title>Contributing</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            If you want to add a component or found a bug, create a pull request or file an issue!\n                        </ion-card-content>\n                    </ion-card>\n                </fiv-ripple>\n            </ion-col>\n            <ion-col size=\"12\" sizeSm=\"6\" sizeMd=\"4\">\n                <ion-card class=\"small\">\n                    <fiv-ripple>\n                        <ion-card-header>\n                            <ion-card-subtitle>More about Angular and Ionic</ion-card-subtitle>\n                            <ion-card-title>Resources</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            The UI Library uses Ionic and Angular\n                            <ion-buttons>\n                                <ion-button (click)=\"open('https://ionicframework.com/')\">\n                                    <ion-icon slot=\"start\" name=\"logo-ionic\"></ion-icon>\n                                    Ionic\n                                </ion-button>\n                                <ion-button (click)=\"open('https://angular.io')\">\n                                    <ion-icon slot=\"start\" name=\"logo-angular\"></ion-icon>\n                                    Angular\n                                </ion-button>\n                            </ion-buttons>\n                        </ion-card-content>\n\n                    </fiv-ripple>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big {\n  height: calc((164px * 2) + 30px);\n}\n\n.small {\n  height: 164px;\n}\n\nion-card {\n  transition: box-shadow 140ms;\n}\n\nion-card .card-content {\n  font-size: 12px;\n}\n\nion-card:hover {\n  box-shadow: 0 0.35em 1.175em rgba(0, 0, 0, 0.1), 0 0.175em 0.5em rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n}\n\nion-title {\n  font-size: 26px;\n}\n\nion-title markdown {\n  display: inline-block;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURHQTtFQUNJLG9GQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBRElJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZyB7XG4gICAgaGVpZ2h0OiBjYWxjKCgxNjRweCAqIDIpICsgMzBweCk7XG59XG5cbi5zbWFsbCB7XG4gICAgaGVpZ2h0OiAxNjRweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTQwbXM7XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuaW9uLWNhcmQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMC4zNWVtIDEuMTc1ZW0gcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAuMTc1ZW0gMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIG1hcmtkb3duIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSIsIi5iaWcge1xuICBoZWlnaHQ6IGNhbGMoKDE2NHB4ICogMikgKyAzMHB4KTtcbn1cblxuLnNtYWxsIHtcbiAgaGVpZ2h0OiAxNjRweDtcbn1cblxuaW9uLWNhcmQge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE0MG1zO1xufVxuaW9uLWNhcmQgLmNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuMzVlbSAxLjE3NWVtIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwLjE3NWVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG5pb24tdGl0bGUgbWFya2Rvd24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(nav) {
        this.nav = nav;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.navigate = function (url) {
        this.nav.navigateForward(url);
    };
    HomePage.prototype.open = function (url) {
        window.open(url, '_blank');
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map