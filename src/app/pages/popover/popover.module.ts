import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { FivPopoverModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    FivPopoverModule,
    ComponentsModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
