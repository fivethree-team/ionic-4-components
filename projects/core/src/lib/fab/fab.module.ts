import { FivFeatureDiscoveryModule } from './../feature-discovery/feature-discovery.module';
import { FivLoadingProgressBarModule } from './../loading-progress-bar/loading-progress-bar.module';
import { FivCenterModule } from '../center/center.module';
import { FivIconModule } from './../icon/icon.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivFab } from './fab.component';
import { FivLoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [FivFab],
  imports: [
    CommonModule,
    FivCenterModule,
    FivIconModule,
    FivFeatureDiscoveryModule,
    FivLoadingSpinnerModule,
    IonicModule,

    FivLoadingProgressBarModule
  ],
  exports: [FivFab],
  providers: []
})
export class FivFabModule {}
