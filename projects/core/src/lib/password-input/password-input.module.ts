import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivPasswordInput } from './password-input.component';

@NgModule({
  declarations: [FivPasswordInput],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [FivPasswordInput]
})
export class FivPasswordInputModule {}
