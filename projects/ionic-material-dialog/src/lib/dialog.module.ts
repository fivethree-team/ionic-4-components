import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent]
})
export class DialogModule { }
