import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivCollapsableMenu } from './collapsable-menu.directive';
import { FivCollapsableMenuButton } from './collapsable-menu-button/collapsable-menu-button.component';
import { FivIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [FivCollapsableMenu, FivCollapsableMenuButton],
  imports: [CommonModule, FivIconModule, IonicModule],
  exports: [FivCollapsableMenu, FivCollapsableMenuButton]
})
export class FivCollapsableModule {}
