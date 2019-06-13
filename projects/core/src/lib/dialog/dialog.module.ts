import { FivPullModule } from './../pull/pull.module';
import { FivDialogService } from './dialog.service';
import { FivOverlayModule } from './../overlay/overlay.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivDialog } from './dialog.component';
import { IonicModule } from '@ionic/angular';
import { FivLoadingProgressBarModule } from '../loading-progress-bar/loading-progress-bar.module';

@NgModule({
  declarations: [FivDialog],
  imports: [
    CommonModule,
    FivLoadingProgressBarModule,
    FivOverlayModule,
    IonicModule,
    FivPullModule
  ],
  exports: [FivDialog],
  entryComponents: [FivDialog],
  providers: [FivDialogService]
})
export class FivDialogModule {}
