/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Hammer } from 'hammerjs';
var MyHammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = /** @type {?} */ ({
            pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 3 },
        });
        return _this;
    }
    return MyHammerConfig;
}(HammerGestureConfig));
export { MyHammerConfig };
if (false) {
    /** @type {?} */
    MyHammerConfig.prototype.overrides;
}
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule,
                        CommonModule
                    ],
                    declarations: [DialogComponent],
                    exports: [DialogComponent],
                    providers: [
                        {
                            provide: HAMMER_GESTURE_CONFIG,
                            useClass: MyHammerConfig
                        }
                    ]
                },] },
    ];
    return DialogModule;
}());
export { DialogModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRWhDLElBQUE7SUFBb0MsMENBQW1COzs7NENBQ3BDO1lBQ2YsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFO1NBQzNEOzs7eUJBVkg7RUFPb0MsbUJBQW1CLEVBSXRELENBQUE7QUFKRCwwQkFJQzs7Ozs7Ozs7O2dCQUVBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLGNBQWM7eUJBQzNCO3FCQUNBO2lCQUNGOzt1QkExQkQ7O1NBMkJhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtIYW1tZXJ9IGZyb20gJ2hhbW1lcmpzJztcblxuZXhwb3J0IGNsYXNzIE15SGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IDxhbnk+e1xuICAgIHBhbjogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwsdGhyZXNob2xkOiAzIH0sXG4gIH07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgIHVzZUNsYXNzOiBNeUhhbW1lckNvbmZpZ1xuICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHsgfVxuIl19