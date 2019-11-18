import { FivLoadingProgressBarModule } from './../loading-progress-bar/loading-progress-bar.module';
import { FivCenterModule } from '../center/center.module';
import { FivIconModule } from './../icon/icon.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivFab } from './fab.component';
import { FivSpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [FivFab],
  imports: [
    CommonModule,
    FivCenterModule,
    FivIconModule,
    FivSpinnerModule,
    IonicModule,
    FivLoadingProgressBarModule
  ],
  exports: [FivFab],
  providers: []
})
export class FivFabModule {}
