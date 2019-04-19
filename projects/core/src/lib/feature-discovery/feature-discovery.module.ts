import { FivRippleModule } from './../ripple/ripple.module';
import { FivFeature } from './feature.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivFeatureDiscovery } from './feature-discovery.component';
import { FivIconModule } from '../icon/icon.module';

@NgModule({
    declarations: [
        FivFeature,
        FivFeatureDiscovery
    ],
    imports: [
        CommonModule,
        FivIconModule,
        FivRippleModule
    ],
    exports: [
        FivFeature,
        FivFeatureDiscovery
    ],
    entryComponents: [FivFeatureDiscovery]
})
export class FivFeatureDiscoveryModule { }
