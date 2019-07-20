import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivBackButton } from './back-button.component';
import { FivIconModule } from '../icon/icon.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FivBackButton],
  imports: [CommonModule, FivIconModule, IonicModule],
  exports: [FivBackButton],
  providers: []
})
export class FivBackButtonModule {}
