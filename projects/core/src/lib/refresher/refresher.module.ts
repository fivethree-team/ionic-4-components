import { FivSpinnerModule } from './../spinner/spinner.module';
import { FivPullModule } from '../pull/pull.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivRefresher } from './refresher.component';
import { IonicModule } from '@ionic/angular';
import { FivRefresherContent } from './refresher-content/refresher-content.component';

@NgModule({
  declarations: [FivRefresher, FivRefresherContent],
  imports: [CommonModule, FivSpinnerModule, FivPullModule, IonicModule],
  exports: [FivRefresher, FivRefresherContent]
})
export class FivRefresherModule {}
