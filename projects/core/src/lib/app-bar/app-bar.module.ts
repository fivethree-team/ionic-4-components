import { FivIconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivAppBar } from './app-bar.component';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { IonicModule } from '@ionic/angular';
import { FivFabModule } from '../fab/fab.module';
import { FivAppBarFabDirective } from './app-bar-fab.directive';

@NgModule({
  declarations: [FivAppBar, FivAppBarTab, FivAppBarFabDirective],
  imports: [CommonModule, FivIconModule, FivFabModule, IonicModule],
  exports: [FivAppBar, FivAppBarTab, FivAppBarFabDirective],
  providers: []
})
export class FivAppBarModule {}
