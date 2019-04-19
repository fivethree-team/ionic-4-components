import { FivRippleModule } from './../ripple/ripple.module';
import { FivFeature } from './feature.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivFeatureDiscovery } from './feature-discovery.component';

@NgModule({
    declarations: [FivFeature],
    imports: [
        CommonModule,
        FivRippleModule
    ],
    exports: [FivFeature],
    entryComponents: [FivFeatureDiscovery]
})
export class FivFeatureDiscoveryModule { }
