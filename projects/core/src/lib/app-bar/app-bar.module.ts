import { FivIconModule } from './../icon/icon.module';
import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivAppBar } from './app-bar.component';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { IonicModule } from '@ionic/angular';
import { FivFabModule } from '../fab/fab.module';

@NgModule({
  declarations: [FivAppBar, FivAppBarTabContent, FivAppBarTab],
  imports: [CommonModule, FivIconModule, FivFabModule, IonicModule],
  exports: [FivAppBar, FivAppBarTabContent, FivAppBarTab],
  providers: []
})
export class FivAppBarModule {}
