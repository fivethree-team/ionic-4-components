import { FivIconModule } from './../icon/icon.module';
import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivAppBar } from './app-bar.component';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { IonicModule } from '@ionic/angular';
import { FivFabModule } from '../fab/fab.module';
import { FivAppBarFabDirective } from './app-bar-fab.directive';
import { FivFeatureDiscoveryModule } from '../feature-discovery/feature-discovery.module';

@NgModule({
  declarations: [
    FivAppBar,
    FivAppBarTabContent,
    FivAppBarTab,
    FivAppBarFabDirective
  ],
  imports: [
    CommonModule,
    FivIconModule,
    FivFabModule,
    IonicModule,
    FivFeatureDiscoveryModule
  ],
  exports: [
    FivAppBar,
    FivAppBarTabContent,
    FivAppBarTab,
    FivAppBarFabDirective
  ],
  providers: []
})
export class FivAppBarModule {}
