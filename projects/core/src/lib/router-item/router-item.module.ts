import { FivExpandableModule } from './../expandable/expandable.module';
import { FivIconModule } from './../icon/icon.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivRouterItem } from './router-item.component';

@NgModule({
  declarations: [FivRouterItem],
  imports: [CommonModule, IonicModule, FivExpandableModule, FivIconModule],
  exports: [FivRouterItem]
})
export class FivRouterItemModule {}
