import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FivEditableLabel } from './editable-label.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FivEditableLabel],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [FivEditableLabel]
})
export class FivEditableLabelModule {}
