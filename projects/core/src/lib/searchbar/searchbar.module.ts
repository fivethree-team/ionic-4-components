import { FivSearchbar } from './searchbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FivIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [FivSearchbar],
  imports: [CommonModule, IonicModule, FivIconModule],
  exports: [FivSearchbar]
})
export class FivSearchbarModule {}
