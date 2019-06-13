import { FivCenterModule } from '../center/center.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivNetworkStatus } from './network-status.component';
import { IonicModule } from '@ionic/angular';
import { FivIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [FivNetworkStatus],
  imports: [CommonModule, FivCenterModule, FivIconModule, IonicModule],
  exports: [FivNetworkStatus],
  entryComponents: [FivNetworkStatus]
})
export class FivNetworkStatusModule {}
