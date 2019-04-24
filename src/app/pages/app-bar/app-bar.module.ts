import { ComponentsModule } from '@components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBarPage } from './app-bar.page';
import { TabsPageRoutingModule } from './tabs.router.module';
import { FivAppBarModule, FivCenterModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    ComponentsModule,
    FivAppBarModule,
    FivCenterModule
  ],
  declarations: [AppBarPage]
})
export class AppBarPageModule { }
