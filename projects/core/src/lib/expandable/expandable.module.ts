import { IonicModule } from '@ionic/angular';
import { FivExpandable } from './expandable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivExpandableIndicator } from './expandable-indicator/expandable-indicator.component';

@NgModule({
  declarations: [FivExpandable, FivExpandableIndicator],
  imports: [CommonModule, IonicModule],
  exports: [FivExpandable, FivExpandableIndicator]
})
export class FivExpandableModule {}
