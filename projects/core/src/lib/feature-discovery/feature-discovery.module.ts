import { FivFeature } from './feature.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivFeatureDiscovery } from './feature-discovery.component';
import { FivIconModule } from '../icon/icon.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FivFeature, FivFeatureDiscovery],
  imports: [CommonModule, IonicModule, FivIconModule],
  exports: [FivFeature, FivFeatureDiscovery],
  entryComponents: [FivFeatureDiscovery]
})
export class FivFeatureDiscoveryModule {}
