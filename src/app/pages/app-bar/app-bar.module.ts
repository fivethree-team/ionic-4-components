import { ComponentsModule } from '@components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBarPage } from './app-bar.page';
import { FivethreeCoreModule } from '@fivethree/core';
import { TabsPageRoutingModule } from './tabs.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivethreeCoreModule,
    TabsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AppBarPage]
})
export class AppBarPageModule { }
